---
title: Server Options
description: Command-line options available during ChikkaDB server startup
---

Currently there is no prebuilt distribution of ChikkaDB. You need to build the source and
execute the `serve` npm script to start the server, as described on the [Get Started](/getting-started) page.

Since it is an npm script, you need to pass an empty double hyphen `--` before the command line arguments. 
The example below shows how the ChikkaDB server is made to listen on a custom port.

```shell
npm run serve -- --port 9999
```

## Command line arguments

### `dbpath`

- Optional
- Default: `./data/db`

You can specify the directory where the database files are to be stored or read from, using the `dbpath`
argument.

If no value is specified, the default directory is `./data/db`. The user running the application should have
read and write permissions in the directory.

### `bind_ip`

- Optional
- Default: `127.0.0.1`

A custom IP address or hostname can be specified for the server to bind to, using the `bind_ip` argument.
It can also be a path specifying a Unix Domain Socket.

### `bind_ip_all`

- Optional
- Default: false

`bind_ip_all` is a boolean argument. If set, it overrides `bind_ip` and makes the server bind to `0.0.0.0`.

### `port`

- Optional
- Default: `27017`

The port on which you want the ChikkaDB server to bind. It is ignored if `bind_ip` is a Unix Domain Socket.


