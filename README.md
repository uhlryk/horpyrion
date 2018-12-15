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
import horpyrion from "horpyrion";
```


```javascript
const connHorpyrion = await horpyrion("mongodb://localhost:27017/testProject")
const userHorpyrion = await connHorpyrion.setUser(<userId>);
  ```     
      
## License

MIT
