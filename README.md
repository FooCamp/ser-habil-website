# Ser Hábil Website

## Disclaimer

The following instructions are based on a **MacOS** device using **Terminal** as command line tool.

## Description

## Prerequisites

### Install Node

Latest version of [Node](https://nodejs.org/en/) installed.

### IDE Plugins

#### Editorconfig

* [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
* [Atom](https://github.com/sindresorhus/atom-editorconfig#readme)
* [Sublime Text](https://github.com/sindresorhus/editorconfig-sublime#readme)

#### ESLint

* [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Atom](https://atom.io/packages/linter-eslint)
* [Sublime Text](https://github.com/SublimeLinter/SublimeLinter-eslint)

#### Prettier

* [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [Atom](https://github.com/prettier/prettier-atom)
* [Sublime Text](https://packagecontrol.io/packages/JsPrettier)

#### Stylelint

* [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
* [Atom](https://github.com/AtomLinter/linter-stylelint)
* [Sublime Text](https://github.com/SublimeLinter/SublimeLinter-stylelint)

## Installation

In the root of the project run this command to install the dependecies:

```sh
$ npm install
```

### Run the project

```sh
$ npm start
```

Open the project page: http://localhost:1234

### Build the project

```sh
$ npm run build
```

### Run Linters

To run the different linters of the project use these commands:

#### ESLint

```sh
$ npm run lint:js
```

#### Stylelint

```sh
$ npm run lint:css
```
