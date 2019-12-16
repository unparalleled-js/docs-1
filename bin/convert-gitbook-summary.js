#! /usr/bin/env node

const {basename} = require('path');
const {readFileSync, writeFileSync} = require('fs');
const {inspect} = require('util');
const summaryFilepath = process.argv[2];
const SIDEBAR_CONFIG_FILE = 'sidebar.js';

if (!summaryFilepath) {
  console.error(`\nUsage: ./${basename(process.argv[1])} <PATH_TO_GITBOOK_SUMMARY.md>\n`);
  process.exit();
}

async function main() {
  const summary = readFileSync(summaryFilepath, 'utf8');

  const sidebar = new Link('<root>');
  let currentLink = sidebar;

  for (let summaryLine of summary.split('\n')
    .slice(1)) {
    summaryLine = summaryLine.trimRight();

    if (!summaryLine) {
      continue;
    }

    const link = parseSummaryLine(summaryLine);

    if (!link) {
      throw new Error(`Can't parse the following line: "${summaryLine}"`);
    }

    const { indent, title, path, anchor } = link;
    let parent;

    if (indent === currentLink.indent) {
      parent = currentLink.parent;
    } else if (indent > currentLink.indent) {
      parent = currentLink;
    } else {
      parent = currentLink;
      while (indent <= parent.indent) {
        parent = parent.parent;
      }
    }

    currentLink = parent.addChild(title, path, anchor, indent);
  }

  const configModule = `module.exports = ${inspect(toConfigObject(sidebar), false, null)};`;
  writeFileSync(SIDEBAR_CONFIG_FILE, configModule);
  console.log(`\nVuePress sidebar config is saved to "${SIDEBAR_CONFIG_FILE}"\n`);
}

class Link {
  constructor(title, path, anchor, indent = -1, parent = null) {
    this.title = title;
    this.path = path;
    this.anchor = anchor;
    this.indent = indent;
    this.parent = parent;
    this.children = [];
  }

  get hasChildren() {
    return this.children.length > 0;
  }

  get fullPath() {
    let { path } = this;

    if (this.anchor) {
      path += `#${this.anchor}`;
    }

    return path;
  }

  addChild(title, path, anchor, indent) {
    const link = new Link(title, path, anchor, indent, this);
    this.children.push(link);
    return link;
  }

  toConfigObject() {
    if (this.hasChildren) {
      return {
        title: this.title,
        path: this.fullPath,
        children: this.children.map(child => child.toConfigObject())
      };
    } else {
      return [this.fullPath, this.title];
    }
  }
}

const SUMMARY_LINE_REGEXP = /^(\s*)\*\s+\[(.+?)]\((.+?)\)/;

function parseSummaryLine(str) {
  const match = SUMMARY_LINE_REGEXP.exec(str);

  if (!match) {
    return null;
  }

  const [_, indent, title, url] = match;
  const [path, anchor] = url.split('#', 2);

  return {
    indent: indent.length,
    title,
    path: convertPath(path),
    anchor
  };
}

function toConfigObject(sidebar) {
  return sidebar.children.map(link => link.toConfigObject());
}

function convertPath(path) {
  return `/${path}`.replace(/^\/+/, '\/')
    .replace(/\.md$/, '');
}

main()
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
