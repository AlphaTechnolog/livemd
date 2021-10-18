# LiveMD

A live markdown text editor with a vscode based integrated editor.

**NOTE**: This app is in development!

## Getting started

First, clone the project:

```sh
mkdir ~/repo
cd !$
git clone https://github.com/AlphaTechnolog/livemd livemd
cd !$
```

Install the dependencies:

```sh
npm install
# or with yarn:
yarn
```

## Running for development

You could run the application using `dev` command to run into a development mode.

```sh
npm run dev
# or with yarn
yarn dev
```

## Building for production

To compile the project use the `build` command.

```sh
npm run build
# or with yarn
yarn build
```

It makes a folder named `dist` it folder contains the compiled project, to serve it,
you can use `serve`:

```sh
# install with npm
npm install -g serve
# or with npm (in linux)
sudo npm install -g serve
# or with yarn
yarn global add serve
```

Then, serve the project:

```sh
serve -s ./dist
```

The default port is `5000`, because it, open [localhost:5000](http://localhost:5000)