# Workato documentation site

This website is build using [VuePress](https://vuepress.vuejs.org/) and uses modified default theme.

## Installation
To develop documentation locally you'll need to install [Node.js](https://nodejs.org/en/) (at least v12).
After that, clone repo and run `npm ci` to install dependences.

## Usage
List of available commands:

| Command | Description |
|---------|-------------|
| `npm start` | Starts development server locally |
| `npm run build` | Builds static website into `dist` folder |
| `npm run check` | Checks all the docs for broken links |
| `npm run optimize-images` | Optimize all images in `/assets/images` folder |
| `npm run optimize-images -- --staged` | Optimize `git add`-ed images |

**Note:** in most cases `optimize-images` commands should not be used manually because this project injects Git precommit hook that optimizes images automatically.  
 
## Project structure
| Directory | Description |
|---------|-------------|
| `/assets/images` | Contains all images used in docs |
| `/bin` | Contains helper scripts |
| `/dist` | Will contain built static website after running `npm run build` |
| `/docs` | Contains all the docs (`*.md` files) |
| `/docs/.vuepress` | Contains all the VuePress configuration- and theme-related files. See [Configuration files](#configuration-files) section for more info. |
| `/docs/.vuepress/public` | Contains static assets like favicon, fonts etc. |

## Configuration files

All the configuration files are located in `/docs/.vuepress` directory.

| File | Description |
|---------|-------------|
| `config.js` | VuePress [configuration file](https://vuepress.vuejs.org/config/) |
| `sidebar.js` | Config file that is used to generate navigation sidebar. See [Sidebar](#sidebar) section for more info. |
| `styles/*.styl` | Style files that override styles from the default VuePress theme (use [Stylus](http://stylus-lang.com/) CSS preprocessor) |
| `theme/*` | Files related to overriding of the VuePress default theme. |
| `plugins/*` | Custom VuePress and markdown-it plugins. |

## Sidebar

Navigation sidebar is generated using `/docs/.vuepress/sidebar.js` config file.
It's a simple JS array each element of which can be one of:
- A simple string. In this case it should be a URL to some documentation page e.g. `/recipes/triggers` (`.html` or `.md` extension can be ommited) or to some external website e.g. `https://workato.com`.  
  
  In this case a link title will be extracted either from the [frontmatter](https://vuepress.vuejs.org/guide/frontmatter.html) `title` property or from the first `h1` header of the linked document.
  
- An array of 2 strings. First is the URL and the second is the link title e.g. `['/recipes/triggers', 'Triggers']`

- An object with the following shape represending a group of links:
  ```js
  {
    // Sidebar group title (Required)
    // (Required)
    title: 'Triggers'
    
    // If provided group title will be a link to the corresponding URL (Optional)
    // (Optional)
    path: '/recipes/triggers',
    
    // List of sub-groups or sub-links
    // (Required)
    children: [
      '/foo',
      ['/bar', 'Bar title'],
      ['/bar#with-hash', 'Sub-bar title'],
      {
        title: 'Sub-group',
        path: '/sub-group-path',
        children: [
          // ...
        ]
    ]
  }
  ```
  
## Writing documentation
  
All documents must be a Markdown files (`*.md`) which will be processed with [markdown-it](https://github.com/markdown-it/markdown-it).

Here is the list of plugins that we use in addition to the [built-in addons](https://vuepress.vuejs.org/guide/markdown.html):

- [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs) - allows to set HTML attributes like `id` or `class` to any markdown element.<br>
  Delimiters are set to `{:` and `:}` i.e. to set `foo` class to the header element you should write `# Header {: .foo :}`

URLs to images (located in `/assets/images` directory) must start with `~@img` prefix e.g. to insert an image located at `/assets/images/foo.png` you need to write `![Foo](~@img/foo.png)`.
