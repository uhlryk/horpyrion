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

#### get schema actions

get specific collection info

 * begins from user context
 
```
userContext
  .getSchema(<schema id>)
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

#### update schema list actions

update collection info

 * begins from user context
 
```
userContext
.updateSchema(<schema id>, <schema name>)
```

Returns promise which resolves to updated schema 

#### remove schema

 * begins from user context
 
```
userContext
  .removeSchema(<schema id>)
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
