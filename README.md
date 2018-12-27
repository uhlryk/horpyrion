# HORPYRION

[![Build Status](https://travis-ci.org/uhlryk/horpyrion.svg)](https://travis-ci.org/uhlryk/horpyrion)
[![Downloads](https://img.shields.io/npm/dt/horpyrion.svg)](https://www.npmjs.com/package/horpyrion)
[![Downloads](https://img.shields.io/npm/dm/horpyrion.svg)](https://www.npmjs.com/package/horpyrion)
[![NPM version](https://img.shields.io/npm/v/horpyrion.svg)](https://www.npmjs.com/package/horpyrion)

## install

```
npm install horpyrion
```

## usage

```javascript
import Horpyrion from "horpyrion";
```

On start library need to connect to database and create init tables
```javascript
const horpyrion = new Horpyrion("mongodb://localhost:27017/testProject")
await horpyrion.sync();

```
Do stuff as root user.
```javascript
await horpyrion
    .getRootUser()
    .createResource(<resource name>)
    .addAttribute(<attribute name>, <attribute type>); 
```    
Do stuff as normal user.  
```javascript    
await horpyrion
    .getUser(<user id>)
    .createResource(<resource name>)
    .addAttribute(<attribute name>, <attribute type>);
await horpyrion
    .getUser(<user id>)
    .getResource(<resourceName>)
    .addAttribute(<attribute name>, <attribute type>);
```

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
