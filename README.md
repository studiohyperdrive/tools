# Studio Hyperdrive: Tools (_tools_)

## General

This repo contains general usage libraries for shd Angular projects. Those libraries are:

-   utils (`@studiohyperdrive/utils`) :
  -   general purpose utilities

-   rxjs-utils (`@studiohyperdrive/rxjs-utils`):
  -   general purpose utilities (operators, ...)


You can find detailed explanations in their respective README’s.

It is build with:
-   nodejs: `18.14.0`
-   npm: `9.3.1`

For a complete list of packages and version check out the `package.json` file.

### Clone and install dependencies

To setup this project, clone the repo and run `npm i` to install the dependencies.

### NPM

The available command are:

| command             | runs                            |
|---------------------|---------------------------------|
| lint:rxjs-utils     | runs `nx lint rxjs-utils`       |
| lint:rxjs-utils:fix | runs `nx lint rxjs-utils --fix` |
| test:rxjs-utils     | runs `nx test rxjs-utils`       |
| build:rxjs-utils    | runs `nx build rxjs-utils`      |
| lint:utils":        | runs `nx lint utils`            |
| lint:utils:fix      | runs `nx lint utils --fix`      |
| test:utils":        | runs `nx test utils`            |
| build:utils":       | runs `nx build utils`           |

<br>

## Contribute

### Add a new library
To add a new library, consult the Nx documentation:
https://nx.dev/packages/js/generators/library#@nx/js:library

When adding a playground for your lib, also make sure the project has at least one test or provide a placeholder.

### Publish

The libraries in this project can be published to the npm registry. To do so follow these steps:

1. In the library that you want to publish, bump the version in package & package-lock files.
2. Commit the changes using the following convention: `build(<library>): v1.0.0`.
3. Add a tag using the following convention: `@studiohyperdrive/<library>@v1.0.0`.
4. Make a new production build of your library using `npm run build:<library>`.
5. Move to the dist folder of your library using `cd dist/<library>`
6. Publish the package using `npm publish`  
   a. If this is the first time publishing the library make sure to add the `--access public` flag.  
   b. Make sure you are logged into npm and that you have been added to the @studiohyperdrive organisation.

## Team

This bundle of tools has been created and is maintained by [Studio Hyperdrive](https://studiohyperdrive.be).

Contributors:
- [Denis Valcke](https://github.com/DenisValcke)
- [Iben Van de Veire](https://github.com/IbenTesara)
- [Wouter Heirstrate](https://github.com/WHeirstrate)

