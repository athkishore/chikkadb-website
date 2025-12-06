---
title: Compatibility wtih MongoDB
description: Compatibility of ChikkaDB with MongoDB
---

## Database Commands and Operators
ChikkaDB implements a rich subset of the MongoDB query language to unlock the
power of SQLite's JSON functions. The author recognizes that 100% compatibility is impossible, 
but also probably not required. 

The focus is on implementing enough commands to cover most use cases, while ensuring that those
behave the same way as in MongoDB. Rather than completeness in compatibility, the goal is to
recreate the same delightful experience in working with JSON data that MongoDB gifted us.

See the [Database Commands](/reference/commands) reference page for more details.

## BSON Data Compatibility
ChikkaDB stores data in SQLite as text JSON, or in SQLite's internal JSONB format, so certain
types in BSON cannot be represented natively. Given this limitation, ChikkaDB ensures that 
unsupported BSON types are correctly handled by the storing the Extended JSON values.

You can rest assured that your BSON data is accurately and losslessly stored in ChikkaDB.

When it comes to operations, the long term goal is to ensure that all BSON types are handled correctly.
At present, there is no special logic to handle BSON-specific types in expressions, so you should
avoid delegating that task to ChikkaDB. This page will be updated when this situation changes.

Operations on the original JSON types - number, string, boolean, null, object, array - don't have this issue and will
work as expected.

See [Data Types](/reference/data-types) to understand the issues around types better.

## MongoDB Clients and Tools
The ChikkaDB server is wire-compatible with mongod. It understands and speaks the same language
that MongoDB clients such as mongosh and Compass use to communicate with the MongoDB server.

The following clients and tools have been tested and are known to work with ChikkaDB, but just
about any client or language driver that works with MongoDB should work.

- mongosh
- Compass
- Node.js driver
- mongoexport
- mongoimport
- mongodump
- mongorestore

If you face any issue while working with another client or driver, 
please [report an issue on Github](https://github.com/athkishore/chikkadb-ts/issues).