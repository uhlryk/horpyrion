# HORPYRION

[![Build Status](https://travis-ci.org/uhlryk/horpyrion.svg)](https://travis-ci.org/uhlryk/horpyrion)
[![Downloads](https://img.shields.io/npm/dt/horpyrion.svg)](https://www.npmjs.com/package/horpyrion)
[![Downloads](https://img.shields.io/npm/dm/horpyrion.svg)](https://www.npmjs.com/package/horpyrion)
[![NPM version](https://img.shields.io/npm/v/horpyrion.svg)](https://www.npmjs.com/package/horpyrion)

## install

```
npm install horpyrion
```

## about

Library to create schemas with permissions and CRUD operations

## usage

```javascript
import Horpyrion from "horpyrion";
```

### create instance 

#### by passing options

```
let horpyrion = new Horpyrion({
  type: "postgres",
  host: "localhost",
  dbname: "test",
  user: "test",
  password: "test",
  port: "5432",
  logging: false
});
```

#### by passing existing sequelize instance

```
const sequelize = <sequelize instance>
const horpyrion = new Horpyrion(sequelize);
```

### start syncing to database

```
const options = <sequelize options>
// looks unusefull
const callbackFunction = <callback function when sync happened>
horpyrion.sync(options, callbackFunction); //return promise
```

### Contexts and Actions

Each action need to be preceded by setup contexts
Contexts begins from some other contexts and leads to different actions and contexts

#### set user context

Specify user context. Next contexts and actions will be done with this user permissions. and this user will be the owner

 * begins from instance

There are two variants:

root user, it doesn't specify any user. this will make next actions with root/sudo permissions

```
horpyrion
  .setRootUser() 
```

specific user context:

```
horpyrion
  .setUser(<user id>)
```  

#### create schema action

Creates new collection in database

 * begins from user context

```
userContext
  .createSchema(<unique schema name>)
  
```

Returns promise which resolves to schema 

#### get schema list actions

get list of collection info based on query

 * begins from user context
 
```
userContext
.getSchemas(<query object>)
```

Returns promise which resolves to schema list

#### set schema context

Specify schema context. Next actions and context will be in relation to selected context 

 * begins from user context
 
```
userContext
.setSchema(<schema id>)
```

#### create record action

Creates new record in specific collection in database

 * begins from schema context

```
schemaContext
  .createRecord(<data>)
  
```

Returns promise which resolves to record 

#### update schema actions

update collection info

 * begins from schema context
 
```
schemaContext
.updateSchema(<schema name>)
```

Returns promise which resolves to updated schema 

#### remove schema actions

 * begins from schema context
 
```
schemaContext
  .removeSchema()
```

Returns promise which resolves to true 

#### get record list actions

get list of records in collection based on query

 * begins from schema context
 
```
schemaContext
.getRecords(<query object>)
```

Returns promise which resolves to record list

#### get schema data

get specific collection info

 * begins from schema context
 
```
schemaContext
  .getData()
```

Returns promise which resolves to schema 

#### set schema record context

Specify schema record context. Next actions and contexts will be in relation to selected record

 * begins from schema context
 
```
schemaContext
.setRecord(<schema id>)
```

#### update record actions

update record info

 * begins from record context
 
```
recordContext
.updateRecord(<record data>)
```

Returns promise which resolves to true 

#### remove schema actions

 * begins from record context
 
```
recordContext
  .removeRecord()
```

Returns promise which resolves to true 

## testing

### localhost testing:
1. install postgress 
1. create user "test"
1. password "test"
1. database "test"

### docker testing
 - run:
```
docker-compose up --exit-code-from test
```

or

 - run:
```
bash docker-test.sh
```
## License

MIT
