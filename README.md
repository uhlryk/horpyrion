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


```
let horpyrion = new Horpyrion({
connect
});
```

### start syncing to database

```
horpyrion.connect(); //return promise
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

#### get schema actions

get collection info based on id

 * begins from user context
 
```
userContext
.getSchema(<schema id>)
```

Returns promise which resolves to schema

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

#### get record actions

get record in collection based on record id

 * begins from schema context
 
```
schemaContext
.getRecord(<record id>)
```

Returns promise which resolves to record

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

#### get record data

get specific record info

 * begins from record context
 
```
recordContext
  .getData()
```

Returns promise which resolves to record 

#### set user schema context

Specify user schema context. Next actions and context will be in relation to selected user context 

 * begins from user context
 
```
userContext
.setUserSchema()
```

#### create user action

Creates new user in database

 * begins from user schema context

```
userSchemaContext
  .createRecord(<data>)
  
```

Returns promise which resolves to record 

#### get user list actions

get list of users based on query

 * begins from user schema context
 
```
userSchemaContext
  .getRecords(<query object>)
```

Returns promise which resolves to user list

#### set user record context

Specify user record context. Next actions and contexts will be in relation to selected record

 * begins from user schema context
 
```
userSchemaContext
.setRecord(user id>)
```

#### update user record actions

update record info

 * begins from user record context
 
```
userRecordContext
.updateRecord(<record data>)
```

Returns promise which resolves to true 

#### remove user actions

 * begins from user record context
 
```
userRecordContext
  .removeRecord()
```

Returns promise which resolves to true 

#### get user record data

get specific record info

 * begins from user record context
 
```
userRecordContext
  .getData()
```

Returns promise which resolves to user record 


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
