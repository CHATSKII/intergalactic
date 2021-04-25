---
title: Global theme
---

All our components are already styled for Semrush tools, but if your tool uses a different color palette or you need to style the components differently, then you can influence the appearance of `@semcore` components with `@semcore/babel-plugin-react-semcore`.

@## Step one

You have installed our `component` and our plugin `@semcore/babel-plugin-react-semcore` to properly transpile the code.

> ⚠️ **Attention**. Make sure that you don't process our files with `babel`-plugins in your code, otherwise the result is unpredictable 🤕

```bash
npm i @semcore/button @semcore/babel-plugin-react-semcore
```

@## Step two

Create a directory for themed components.

Themes are very much tied to naming and file structure, which adds several restrictions.

- The directory with the theme must contain directories with component names without the `@semcore` prefix.
- Directories with names of components should contain only `.shadow.css` files.
- The names of `.shadow.css` files must match the names of the stylesheets of the corresponding components.

An example of a correct file structure:

```javascript
    components <-- theme root directory
    |── button
    |   └-- button.shadow.css
    |── product-head
    |   └-- product-head.shadow.css
    └── link
        └-- link.shadow.css
```

@## Step three

Add a new rule to your `webpack-config`:

```javascript
    {
      test: /\.js$/,
      include: /\/node_modules\/@semcore\//,
      enforce: 'pre',
      use: [
        {
          loader: 'babel-loader',
          options: {
            plugins: [
              ['@semcore/babel-plugin-react-semcore', { theme: path.resolve(process.cwd(), 'directory-with-theme') }],
            ],
          },
        },
      ],
    }
```

> You can also use the name of the package with themes. For example `{ theme: "my-theme-npm-package" }`

After that, all the styles that will be created in your themed styles directory will be applied to the corresponding components.

👯‍ **Congratulations, you've changed the styles of the component!**

@## Versioning

You can design a theme for different component versions. To do this, you need to create a `versions.json` file in which you specify the required versions and paths to the css files.

An example of file structure:

```javascript
    components <-- theme root directory
    |── button
        └-- button_v2.shadow.css
        └-- button_v3.shadow.css
        └-- versions.json
```

An example of file `versions.json`:

```json
{
  "2": {
    "button.shadow.css": "button_v2.shadow.css"
  },
  "3": {
    "button.shadow.css": "button_v3.shadow.css"
  }
}
```

> Versions are in [semver](https://semver.org/) format, you can also specify `*`.

@## Note

Also for local development of "themes" you'll need HMR. It won't work out of the box, as themes are applied in build time and watchers don't see the changes.
To start working with themes, you need:

- add our `@semcore/shadow-loader` to webpack-config
- add loaders for `.css` files

Example rules for webpack:

```javascript
   {
     test: /\.js$/,
     include: /\/node_modules\/@semcore\//,
     use: {
       loader: '@semcore/shadow-loader',
     },
   },
   {
     test: /\.css$/,
     include: /\/node_modules\/\.cache\//,
     use: ['style-loader', 'css-loader'],
   }
```
