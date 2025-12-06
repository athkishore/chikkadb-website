---
title: Getting Started
description: How to install and run ChikkaDB
---
## Installation
ChikkaDB hasn't been released formally yet, but you can easily build and run the source code.

All you need is a machine with Node.js installed.

Clone the ChikkaDB repository.
```shell
git clone git@github.com:athkishore/chikkadb-ts.git
```

Change into the directory and install the dependencies.
```shell
npm install
```

Build the typescript source
```shell
npm run build
```

Start the server using the `serve` npm script. By default, it will listen on port 27017, but you can
override it using the `port` command line argument.
```shell
npm run serve -- --port=9999
```

You can now connect to ChikkaDB using MongoDB clients such as mongosh and Compass, or any language driver.

See [Server Options](/reference/server-options) to find out the available command line options.

