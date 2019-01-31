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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = updateRecordFactory;
function updateRecordFactory(data, modelManager) {
    return function (recordId, schemaId) {
        return modelManager.getModels().Record.update({ data: data }, {
            where: {
                id: recordId,
                SchemaId: schemaId
            }
        }).then(function (record) {
            return record;
        });
    };
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = removeRecordFactory;
function removeRecordFactory(modelManager) {
    return function (recordId, schemaId) {
        return modelManager.getModels().Record.destroy({
            where: {
                id: recordId,
                SchemaId: schemaId
            }
        }).then(function () {
            return true;
        });
    };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
module.exports = __webpack_require__(5);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Horpyrion = __webpack_require__(6);

var _Horpyrion2 = _interopRequireDefault(_Horpyrion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Horpyrion2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UserContext = __webpack_require__(7);

var _UserContext2 = _interopRequireDefault(_UserContext);

var _RootUser = __webpack_require__(20);

var _RootUser2 = _interopRequireDefault(_RootUser);

var _ModelManager = __webpack_require__(21);

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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SchemaContext = __webpack_require__(8);

var _SchemaContext2 = _interopRequireDefault(_SchemaContext);

var _createSchemaFactory = __webpack_require__(15);

var _createSchemaFactory2 = _interopRequireDefault(_createSchemaFactory);

var _throwIfNoSync = __webpack_require__(0);

var _throwIfNoSync2 = _interopRequireDefault(_throwIfNoSync);

var _getUserContextFactory = __webpack_require__(16);

var _getUserContextFactory2 = _interopRequireDefault(_getUserContextFactory);

var _UserSchemaContext = __webpack_require__(17);

var _UserSchemaContext2 = _interopRequireDefault(_UserSchemaContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserContext = function () {
    function UserContext(userId, modelManager) {
        _classCallCheck(this, UserContext);

        this._userContextAction = (0, _getUserContextFactory2.default)(userId, modelManager);
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
        value: function setSchema(schemaId) {
            return new _SchemaContext2.default(schemaId, this._userContextAction, this._modelManager);
        }
    }, {
        key: "setUserSchema",
        value: function setUserSchema() {
            return new _UserSchemaContext2.default(this._userContextAction, this._modelManager);
        }
    }, {
        key: "getData",
        value: function getData() {
            var _this = this;

            return (0, _throwIfNoSync2.default)(this._modelManager).then(function () {
                return _this._userContextAction();
            });
        }
    }]);

    return UserContext;
}();

exports.default = UserContext;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _createRecordFactory = __webpack_require__(9);

var _createRecordFactory2 = _interopRequireDefault(_createRecordFactory);

var _getRecordListFactory = __webpack_require__(10);

var _getRecordListFactory2 = _interopRequireDefault(_getRecordListFactory);

var _getRecordFactory = __webpack_require__(11);

var _getRecordFactory2 = _interopRequireDefault(_getRecordFactory);

var _updateRecordFactory = __webpack_require__(1);

var _updateRecordFactory2 = _interopRequireDefault(_updateRecordFactory);

var _removeRecordFactory = __webpack_require__(2);

var _removeRecordFactory2 = _interopRequireDefault(_removeRecordFactory);

var _throwIfNoSync = __webpack_require__(0);

var _throwIfNoSync2 = _interopRequireDefault(_throwIfNoSync);

var _getSchemaContextFactory = __webpack_require__(12);

var _getSchemaContextFactory2 = _interopRequireDefault(_getSchemaContextFactory);

var _RecordContext = __webpack_require__(13);

var _RecordContext2 = _interopRequireDefault(_RecordContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SchemaContext = function () {
    function SchemaContext(schemaId, userContextAction, modelManager) {
        _classCallCheck(this, SchemaContext);

        this._userContextAction = userContextAction;
        this._schemaContextAction = (0, _getSchemaContextFactory2.default)(schemaId, modelManager);
        this._modelManager = modelManager;
    }

    _createClass(SchemaContext, [{
        key: "setRecord",
        value: function setRecord(recordId) {
            return new _RecordContext2.default(recordId, this._schemaContextAction, this._userContextAction, this._modelManager);
        }
    }, {
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
        key: "getData",
        value: function getData() {
            var _this = this;

            return (0, _throwIfNoSync2.default)(this._modelManager).then(function () {
                return _this._schemaContextAction();
            });
        }
    }, {
        key: "getRecord",
        value: function getRecord(recordId) {
            var _this2 = this;

            var getRecordAction = (0, _getRecordFactory2.default)(recordId, this._modelManager);

            return (0, _throwIfNoSync2.default)(this._modelManager).then(function () {
                return _this2._schemaContextAction();
            }).then(function (schema) {
                return getRecordAction(schema.id);
            }).then(function (record) {
                if (record) {
                    return record;
                } else {
                    return null;
                }
            });
        }
    }, {
        key: "getRecords",
        value: function getRecords(query) {
            var _this3 = this;

            var getRecordListAction = (0, _getRecordListFactory2.default)(query, this._modelManager);

            return (0, _throwIfNoSync2.default)(this._modelManager).then(function () {
                return _this3._schemaContextAction();
            }).then(function (schema) {
                return getRecordListAction(schema.id);
            }).then(function (recordList) {
                return recordList;
            });
        }
    }, {
        key: "createRecord",
        value: function createRecord(data) {
            var _this4 = this;

            var createRecordAction = (0, _createRecordFactory2.default)(data, this._modelManager);

            return (0, _throwIfNoSync2.default)(this._modelManager).then(function () {
                return _this4._schemaContextAction();
            }).then(function (schema) {
                return createRecordAction(schema.id);
            }).then(function (record) {
                return record.toJSON();
            });
        }
    }, {
        key: "updateRecord",
        value: function updateRecord(recordId, data) {
            var _this5 = this;

            var updateRecordAction = (0, _updateRecordFactory2.default)(data, this._modelManager);

            return (0, _throwIfNoSync2.default)(this._modelManager).then(function () {
                return _this5._schemaContextAction();
            }).then(function (schema) {
                return updateRecordAction(recordId, schema.id);
            }).then(function () {
                return true;
            });
        }
    }, {
        key: "removeRecord",
        value: function removeRecord(recordId) {
            var _this6 = this;

            var removeRecordAction = (0, _removeRecordFactory2.default)(this._modelManager);

            return (0, _throwIfNoSync2.default)(this._modelManager).then(function () {
                return _this6._schemaContextAction();
            }).then(function (schema) {
                return removeRecordAction(recordId, schema.id);
            }).then(function () {
                return true;
            });
        }
    }, {
        key: "getAttributes",
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                return _context2.abrupt("return", false);

                            case 1:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getAttributes() {
                return _ref2.apply(this, arguments);
            }

            return getAttributes;
        }()
    }]);

    return SchemaContext;
}();

exports.default = SchemaContext;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createRecordFactory;
function createRecordFactory(data, modelManager) {
    return function (schemaId) {
        return modelManager.getModels().Record.create({
            SchemaId: schemaId,
            data: data
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
exports.default = getRecordListFactory;
function getRecordListFactory(query, modelManager) {
    return function (schemaId) {
        return modelManager.getModels().Record.findAll({
            where: {
                SchemaId: schemaId
            },
            raw: true
        }).then(function (recordList) {
            return recordList;
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
exports.default = getRecordListFactory;
function getRecordListFactory(recordId, modelManager) {
    return function (schemaId) {
        return modelManager.getModels().Record.findOne({
            where: {
                SchemaId: schemaId,
                id: recordId
            },
            raw: true
        }).then(function (record) {
            return record;
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
exports.default = getContextSchemaFactory;
function getContextSchemaFactory(schemaId, modelManager) {
    return function () {
        return modelManager.getModels().Schema.findOne({
            where: {
                id: schemaId
            },
            raw: true
        }).then(function (schema) {
            if (!schema) {}
            return schema;
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _updateRecordFactory = __webpack_require__(1);

var _updateRecordFactory2 = _interopRequireDefault(_updateRecordFactory);

var _removeRecordFactory = __webpack_require__(2);

var _removeRecordFactory2 = _interopRequireDefault(_removeRecordFactory);

var _throwIfNoSync = __webpack_require__(0);

var _throwIfNoSync2 = _interopRequireDefault(_throwIfNoSync);

var _getRecordContextFactory = __webpack_require__(14);

var _getRecordContextFactory2 = _interopRequireDefault(_getRecordContextFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RecordContext = function () {
    function RecordContext(recordId, schemaContextAction, userContextAction, modelManager) {
        _classCallCheck(this, RecordContext);

        this._userContextAction = userContextAction;
        this._schemaContextAction = schemaContextAction;
        this._recordContextAction = (0, _getRecordContextFactory2.default)(recordId, modelManager);
        this._modelManager = modelManager;
    }

    _createClass(RecordContext, [{
        key: "updateRecord",
        value: function updateRecord(data) {
            var _this = this;

            var updateRecordAction = (0, _updateRecordFactory2.default)(data, this._modelManager);

            return (0, _throwIfNoSync2.default)(this._modelManager).then(function () {
                return _this._schemaContextAction();
            }).then(function (schema) {
                return _this._recordContextAction(schema.id).then(function (record) {
                    return updateRecordAction(record.id, schema.id);
                });
            }).then(function () {
                return true;
            });
        }
    }, {
        key: "removeRecord",
        value: function removeRecord() {
            var _this2 = this;

            var removeRecordAction = (0, _removeRecordFactory2.default)(this._modelManager);

            return (0, _throwIfNoSync2.default)(this._modelManager).then(function () {
                return _this2._schemaContextAction();
            }).then(function (schema) {
                return _this2._recordContextAction(schema.id).then(function (record) {
                    return removeRecordAction(record.id, schema.id);
                });
            }).then(function () {
                return true;
            });
        }
    }, {
        key: "getData",
        value: function getData() {
            var _this3 = this;

            return (0, _throwIfNoSync2.default)(this._modelManager).then(function () {
                return _this3._schemaContextAction();
            }).then(function (schema) {
                return _this3._recordContextAction(schema.id);
            });
        }
    }]);

    return RecordContext;
}();

exports.default = RecordContext;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getContextRecordFactory;
function getContextRecordFactory(recordId, modelManager) {
    return function (schemaId) {
        return modelManager.getModels().Record.findOne({
            where: {
                SchemaId: schemaId,
                id: recordId
            },
            raw: true
        }).then(function (record) {
            if (!record) {}
            return record;
        });
    };
}

/***/ }),
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _throwIfNoSync = __webpack_require__(0);

var _throwIfNoSync2 = _interopRequireDefault(_throwIfNoSync);

var _createUserFactory = __webpack_require__(18);

var _createUserFactory2 = _interopRequireDefault(_createUserFactory);

var _updateUserFactory = __webpack_require__(19);

var _updateUserFactory2 = _interopRequireDefault(_updateUserFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserSchemaContext = function () {
    function UserSchemaContext(userContextAction, modelManager) {
        _classCallCheck(this, UserSchemaContext);

        this._userContextAction = userContextAction;
        this._modelManager = modelManager;
    }

    _createClass(UserSchemaContext, [{
        key: "createRecord",
        value: function createRecord(data) {
            var createUserAction = (0, _createUserFactory2.default)(data, this._modelManager);
            return (0, _throwIfNoSync2.default)(this._modelManager).then(function () {
                return createUserAction();
            }).then(function (user) {
                return user.toJSON();
            });
        }
    }, {
        key: "updateRecord",
        value: function updateRecord(recordId, data) {
            var updateUserAction = (0, _updateUserFactory2.default)(data, this._modelManager);

            return (0, _throwIfNoSync2.default)(this._modelManager).then(function () {
                return updateUserAction(recordId);
            }).then(function () {
                return true;
            });
        }
    }]);

    return UserSchemaContext;
}();

exports.default = UserSchemaContext;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createUserFactory;
function createUserFactory(userName, modelManager) {
    return function () {
        return modelManager.getModels().User.create({
            name: userName
        }, {}).then(function (user) {
            return user;
        });
    };
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = updateRecordFactory;
function updateRecordFactory(userName, modelManager) {
    return function (recordId) {
        return modelManager.getModels().User.update({
            name: userName
        }, {
            where: {
                id: recordId
            }
        }).then(function (record) {
            return record;
        });
    };
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ROOT_USER_ID = Symbol("ROOT_USER_ID");
exports.default = ROOT_USER_ID;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = __webpack_require__(22);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(23);

var _path2 = _interopRequireDefault(_path);

var _sequelize = __webpack_require__(24);

var _sequelize2 = _interopRequireDefault(_sequelize);

var _functionOverloader = __webpack_require__(25);

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
/* 22 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("function-overloader");

/***/ })
/******/ ]);
});
//# sourceMappingURL=horpyrion.server.js.map