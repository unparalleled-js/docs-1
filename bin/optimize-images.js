#! /usr/bin/env node

const {dirname, resolve, relative} = require('path');
const {statSync} = require('fs');
const glob = require('glob');
const asyncPool = require('tiny-async-pool');
const prettyBytes = require('pretty-bytes');
const {gray, green} = require('chalk');
const imagemin = require('imagemin');
const imageminPlugins = [
  require('imagemin-optipng'),
  require('imagemin-gifsicle'),
  require('imagemin-jpegtran'),
  require('imagemin-svgo')
];
const imageExt = ['png', 'jpg', 'jpeg', 'svg'];
const imageRegexp = new RegExp(`\\.(?:${imageExt.join('|')})$`, 'i');

const PROJECT_DIR = resolve(__dirname, '..');
const git = require('simple-git/promise')(PROJECT_DIR);

const onlyStaged = process.argv[process.argv.length - 1] === '--staged';

async function main() {
  let imageFiles;

  if (onlyStaged) {
    const {created, staged} = await git.status();
    const stagedFiles = [...created, ...staged];
    imageFiles = stagedFiles
      .filter(filename => imageRegexp.test(filename))
      .map(filename => resolve(PROJECT_DIR, filename));
  } else {
    imageFiles = glob.sync(`assets/**/*.{${imageExt.join(',')}}`, {
      cwd: PROJECT_DIR,
      absolute: true,
      // nosort: true,
      nocase: true,
      nodir: true
    });
  }

  console.log('Optimizing images...');

  if (!imageFiles.length) {
    console.log('No images to optimize');
    return;
  }

  const start = Date.now();
  const concurrency = require('os').cpus().length;
  await asyncPool(concurrency, imageFiles, optimizeImage);
  await git.add(imageFiles);
  console.log(`Image optimization done in ${Date.now() - start}ms`);
}

async function optimizeImage(filePath) {
  const fileLabel = relative(PROJECT_DIR, filePath).replace(/^\.\//, '');
  const originalSize = statSync(filePath).size;
  let result;
  try {
    result = await imagemin([filePath], {
      destination: dirname(filePath),
      plugins: imageminPlugins.map(plugin => plugin())
    });
  } catch (err) {
    console.error(`Error processing "${fileLabel}": ${err.message}`);
    return;
  }

  const optimizedSize = result[0].data.length;
  const saved = originalSize - optimizedSize;

  if (saved > 0) {
    const percent = originalSize > 0 ? (saved / originalSize) * 100 : 0;
    const savedMsg = `saved ${prettyBytes(saved)} - ${percent.toFixed(1).replace(/\.0$/, '')}%`;
    console.log(
      `${green(fileLabel)} optimized from ${prettyBytes(originalSize)} to ${prettyBytes(optimizedSize)} (${savedMsg})`
    );
  } else {
    console.log(
      `${gray(fileLabel)} already optimized`
    );
  }
}

main()
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
