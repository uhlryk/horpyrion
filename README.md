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
const userToken = await horpyrion.authorize(<auth credentials>);
await horpyrion
    .getUser(userToken)
    .createResource(<resource name>)
    .addAttribute(<attribute name>, <attribute type>);
await horpyrion
    .getUser(userToken)
    .getResource(<resourceName>)
    .addAttribute(<attribute name>, <attribute type>);
```

## License

MIT
