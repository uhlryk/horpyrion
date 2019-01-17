(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = throwIfNoSync;
function throwIfNoSync(modelManager) {
    if (modelManager && modelManager.isSync()) {
        return Promise.resolve();
    } else {
        return Promise.reject(new Error("No synchronization with database. Run sync() method"));
    }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Horpyrion = __webpack_require__(4);

var _Horpyrion2 = _interopRequireDefault(_Horpyrion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Horpyrion2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UserContext = __webpack_require__(5);

var _UserContext2 = _interopRequireDefault(_UserContext);

var _RootUser = __webpack_require__(13);

var _RootUser2 = _interopRequireDefault(_RootUser);

var _ModelManager = __webpack_require__(14);

var _ModelManager2 = _interopRequireDefault(_ModelManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Horpyrion = function () {
    function Horpyrion(configuration) {
        _classCallCheck(this, Horpyrion);

        this._configuration = configuration;
    }

    _createClass(Horpyrion, [{
        key: "sync",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this._modelManager = new _ModelManager2.default(this._configuration);
                                _context.next = 3;
                                return this._modelManager.authenticate();

                            case 3:
                                _context.next = 5;
                                return this._modelManager.sync(options);

                            case 5:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function sync(_x) {
                return _ref.apply(this, arguments);
            }

            return sync;
        }()
    }, {
        key: "setRootUser",
        value: function setRootUser() {
            return new _UserContext2.default(_RootUser2.default.ROOT_USER_ID, this._modelManager);
        }
    }, {
        key: "setUser",
        value: function setUser(userId) {
            return new _UserContext2.default(userId, this._modelManager);
        }
    }, {
        key: "getDbInstance",
        value: function getDbInstance() {
            return this._modelManager.getDbInstance();
        }
    }]);

    return Horpyrion;
}();

exports.default = Horpyrion;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SchemaContext = __webpack_require__(6);

var _SchemaContext2 = _interopRequireDefault(_SchemaContext);

var _createSchemaFactory = __webpack_require__(11);

var _createSchemaFactory2 = _interopRequireDefault(_createSchemaFactory);

var _throwIfNoSync = __webpack_require__(0);

var _throwIfNoSync2 = _interopRequireDefault(_throwIfNoSync);

var _getUserFactory = __webpack_require__(12);

var _getUserFactory2 = _interopRequireDefault(_getUserFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserContext = function () {
    function UserContext(userId, modelManager) {
        _classCallCheck(this, UserContext);

        this._userContextAction = (0, _getUserFactory2.default)(userId, modelManager);
        this._modelManager = modelManager;
    }

    _createClass(UserContext, [{
        key: "createSchema",
        value: function createSchema(schemaName) {
            var createSchemaAction = (0, _createSchemaFactory2.default)(schemaName, this._modelManager);
            return (0, _throwIfNoSync2.default)(this._modelManager).then(function () {
                return createSchemaAction();
            }).then(function (schema) {
                return schema.toJSON();
            });
        }
    }, {
        key: "setSchema",
        value: function setSchema(schemaName) {
            return new _SchemaContext2.default(schemaName, this._userContextAction, this._modelManager);
        }
    }, {
        key: "createUser",
        value: function createUser() {
            return false;
        }
    }]);

    return UserContext;
}();

exports.default = UserContext;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _createRecordFactory = __webpack_require__(7);

var _createRecordFactory2 = _interopRequireDefault(_createRecordFactory);

var _getRecordListFactory = __webpack_require__(8);

var _getRecordListFactory2 = _interopRequireDefault(_getRecordListFactory);

var _getRecordFactory = __webpack_require__(9);

var _getRecordFactory2 = _interopRequireDefault(_getRecordFactory);

var _throwIfNoSync = __webpack_require__(0);

var _throwIfNoSync2 = _interopRequireDefault(_throwIfNoSync);

var _getSchemaFactory = __webpack_require__(10);

var _getSchemaFactory2 = _interopRequireDefault(_getSchemaFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SchemaContext = function () {
    function SchemaContext(schemaName, userContextAction, modelManager) {
        _classCallCheck(this, SchemaContext);

        this._userContextAction = userContextAction;
        this._schemaContextAction = (0, _getSchemaFactory2.default)(schemaName, modelManager);
        this._modelManager = modelManager;
    }

    _createClass(SchemaContext, [{
        key: "addAttribute",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(attributeName, attributeType) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt("return", false);

                            case 1:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function addAttribute(_x, _x2) {
                return _ref.apply(this, arguments);
            }

            return addAttribute;
        }()
    }, {
        key: "getRecord",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(recordId) {
                var _this = this;

                var getRecordAction;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                getRecordAction = (0, _getRecordFactory2.default)(recordId, this._modelManager);
                                return _context2.abrupt("return", (0, _throwIfNoSync2.default)(this._modelManager).then(function () {
                                    return _this._schemaContextAction();
                                }).then(function (schema) {
                                    return getRecordAction(schema);
                                }).then(function (record) {
                                    if (record) {
                                        return record;
                                    } else {
                                        return null;
                                    }
                                }));

                            case 2:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getRecord(_x3) {
                return _ref2.apply(this, arguments);
            }

            return getRecord;
        }()
    }, {
        key: "getRecords",
        value: function getRecords(query) {
            var _this2 = this;

            var getRecordListAction = (0, _getRecordListFactory2.default)(query, this._modelManager);

            return (0, _throwIfNoSync2.default)(this._modelManager).then(function () {
                return _this2._schemaContextAction();
            }).then(function (schema) {
                return getRecordListAction(schema);
            }).then(function (recordList) {
                return recordList;
            });
        }
    }, {
        key: "createRecord",
        value: function createRecord(data) {
            var _this3 = this;

            var createRecordAction = (0, _createRecordFactory2.default)(data, this._modelManager);

            return (0, _throwIfNoSync2.default)(this._modelManager).then(function () {
                return _this3._schemaContextAction();
            }).then(function (schema) {
                return createRecordAction(schema);
            }).then(function (record) {
                return record.toJSON();
            });
        }
    }, {
        key: "updateRecord",
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                return _context3.abrupt("return", false);

                            case 1:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function updateRecord() {
                return _ref3.apply(this, arguments);
            }

            return updateRecord;
        }()
    }, {
        key: "getAttributes",
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                return _context4.abrupt("return", false);

                            case 1:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function getAttributes() {
                return _ref4.apply(this, arguments);
            }

            return getAttributes;
        }()
    }]);

    return SchemaContext;
}();

exports.default = SchemaContext;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createRecordFactory;
function createRecordFactory(data, modelManager) {
    return function (schema) {
        return modelManager.getModels().Record.create({
            SchemaId: schema.id,
            data: data
        }).then(function (record) {
            return record;
        });
    };
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getRecordListFactory;
function getRecordListFactory(query, modelManager) {
    return function (schema) {
        return modelManager.getModels().Record.findAll({
            where: {
                SchemaId: schema.id
            },
            raw: true
        }).then(function (recordList) {
            return recordList;
        });
    };
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getRecordListFactory;
function getRecordListFactory(recordId, modelManager) {
    return function (schema) {
        return modelManager.getModels().Record.findOne({
            where: {
                SchemaId: schema.id,
                id: recordId
            },
            raw: true
        }).then(function (record) {
            return record;
        });
    };
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getContextSchemaFactory;
function getContextSchemaFactory(schemaName, modelManager) {
    return function () {
        return modelManager.getModels().Schema.findOne({
            where: {
                name: schemaName
            },
            raw: true
        }).then(function (schema) {
            if (!schema) {}
            return schema;
        });
    };
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createSchemaFactory;
function createSchemaFactory(schemaName, modelManager) {
    return function () {
        return modelManager.getModels().Schema.create({
            name: schemaName
        }, {}).then(function (entitySchema) {
            return entitySchema;
        });
    };
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getContextUserFactory;
function getContextUserFactory(userId, modelManager) {
    return function () {
        return modelManager.getModels().User.findOne({
            where: {
                UserId: userId
            },
            raw: true
        }).then(function (user) {
            if (!user) {}
            return user;
        });
    };
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ROOT_USER_ID = Symbol("ROOT_USER_ID");
exports.default = ROOT_USER_ID;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = __webpack_require__(15);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(16);

var _path2 = _interopRequireDefault(_path);

var _sequelize = __webpack_require__(17);

var _sequelize2 = _interopRequireDefault(_sequelize);

var _functionOverloader = __webpack_require__(18);

var _functionOverloader2 = _interopRequireDefault(_functionOverloader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModelManager = function () {
    function ModelManager() {
        var _Overload$when$do$els,
            _this = this;

        _classCallCheck(this, ModelManager);

        this._isSync = false;
        (_Overload$when$do$els = _functionOverloader2.default.when(_functionOverloader2.default.INSTANCE(_sequelize2.default)).do(function (sequelize) {
            _this._sequelize = sequelize;
        }).else(function (config) {
            _this._sequelize = new _sequelize2.default(config.dbname, config.user, config.password, {
                dialect: config.type,
                port: config.port,
                host: config.host,
                logging: config.logging
            });
        })).execute.apply(_Overload$when$do$els, arguments);
        this._models = {};
        _fs2.default.readdirSync(_path2.default.join(__dirname, "models")).filter(function (file) {
            return file.indexOf(".") !== 0;
        }).forEach(function (file) {
            var model = _this._sequelize.import(_path2.default.join(__dirname, "models", file));
            _this._models[model.name] = model;
        });
        Object.values(this._models).forEach(function (model) {
            if (model.associate) {
                model.associate(_this._models);
            }
        });
    }

    _createClass(ModelManager, [{
        key: "getDbInstance",
        value: function getDbInstance() {
            return this._sequelize;
        }
    }, {
        key: "sync",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
                var _this2 = this;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt("return", this._sequelize.sync(options).then(function () {
                                    _this2._isSync = true;
                                }));

                            case 1:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function sync(_x) {
                return _ref.apply(this, arguments);
            }

            return sync;
        }()
    }, {
        key: "isSync",
        value: function isSync() {
            return this._isSync;
        }
    }, {
        key: "getModels",
        value: function getModels() {
            return this._models;
        }
    }, {
        key: "authenticate",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                return _context2.abrupt("return", this._sequelize.authenticate().then(function () {}).catch(function (err) {
                                    console.error("Unable to connect to the database:", err);
                                }));

                            case 1:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function authenticate() {
                return _ref2.apply(this, arguments);
            }

            return authenticate;
        }()
    }]);

    return ModelManager;
}();

exports.default = ModelManager;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("function-overloader");

/***/ })
/******/ ]);
});
//# sourceMappingURL=horpyrion.server.js.map