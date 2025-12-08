---
title: Database Commands
description: List of MongoDB features available in ChikkaDB
sidebar: { order: 1, label: 'Database Commands' }
---

## Aggregation Commands

### count
Returns the number of documents in a collection, with an optional query filter. See 
[Filter Operators](/reference/filter-operators) for the supported filter operators.

```typescript
{
  count: <collection>,
  query: <filter document>, // optional
  limit: <integer>, // optional
  skip: <integer>, // optional
}
```
### aggregate
Executes an aggregation pipeline. See [Aggregation Stages](/reference/aggregation-stages) to know
the supported stages.

```typescript
{
  aggregate: <collection>,
  pipeline: [<aggregation stages>], // required
}
```


## Query and Write Commands

### delete
Deletes documents from a collection based on an optional query filter. See 
[Filter Operators](/reference/filter-operators) for the supported filter operators.

```typescript
{
  delete: <collection>,
  deletes: [
    {
      q: <filter document>,
      limit: <integer>,
    },
  ], // at least one delete element required
}
```

### find
Fetches documents from a collection matching an optional query filter. The fields to be returned
can be specified using an optional projection document.

See [Filter Operators](/reference/filter-operators), [Projection](/reference/projection), 
[Sort](/reference/sort) for more details.

```typescript
{
  find: <collection>,
  filter: <filter document>, // optional
  sort: <sort document>, // optional
  projection: <projection document>, // optional
  skip: <integer>, // optional
  limit: <integer>, // optional
}
```

### findAndModify
Updates a single document matching an optional query filter.

See [Filter Operators](/reference/filter-operators), [Update Operators](/reference/update-operators)
for more details.

```typescript
{
  findAndModify: <collection>,
  query: <filter document>,
  update: <update document>,
}
```

### insert
Inserts a set of documents into a collection.

```typescript
{
  insert: <collection>,
  documents: [<documents>]
}
```

### update
Executes a set of updates on a collection.

See [Filter Operators](/reference/filter-operators), [Update Operators](/reference/update-operators)
for more details.

```typescript
{
  update: <collection>,
  updates: [
    {
      q: <filter document>,
      u: <update document>,
    },
  ], // at least one update element required
}
```

---

## Administration Commands

### create
Creates a collection.

```typescript
{
  create: <collection>,
}
```

### drop
Deletes a collection.

```typescript
{
  drop: <collection>,
}
```

### dropDatabase
Deletes a database.

```typescript
{
  dropDatabase: 1,
}
```

### listCollections
Returns a list of the collections in a database.

```typescript
{
  listCollections: 1,
}
```

### listDatabases
Returns the list of databases in a deployment.

```typescript
{
  listDatabases: 1
}
```

---
MongoDB Reference: https://www.mongodb.com/docs/v7.0/reference/command/