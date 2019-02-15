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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createFactory;
function createFactory(modelId, modelManager) {
    return function () {
        var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return modelManager.getModels()[modelId].create(data, {}).then(function (entity) {
            return entity;
        });
    };
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = updateFactory;
function updateFactory(modelId, modelManager) {
    return function (entityId) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return modelManager.getModels()[modelId].update(data, {
            where: {
                id: entityId
            }
        }).then(function (entity) {
            return entity;
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
exports.default = getFactory;
function getFactory(modelId, modelManager) {
    return function (entityId) {
        return modelManager.getModels()[modelId].findOne({
            where: {
                id: entityId
            },
            raw: true
        }).then(function (entity) {
            return entity;
        });
    };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = getListFactory;
function getListFactory(modelId, modelManager) {
    return function () {
        var whereData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return modelManager.getModels()[modelId].findAll({
            where: whereData,
            raw: true
        }).then(function (entity) {
            return entity;
        });
    };
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = removeRecordFactory;
function removeRecordFactory(modelId, modelManager) {
    return function (entityId) {
        return modelManager.getModels()[modelId].destroy({
            where: {
                id: entityId
            }
        }).then(function () {
            return true;
        });
    };
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
module.exports = __webpack_require__(7);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Horpyrion = __webpack_require__(8);

var _Horpyrion2 = _interopRequireDefault(_Horpyrion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Horpyrion2.default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UserContext = __webpack_require__(9);

var _UserContext2 = _interopRequireDefault(_UserContext);

var _ContextAction = __webpack_require__(17);

var _ContextAction2 = _interopRequireDefault(_ContextAction);

var _RootUser = __webpack_require__(19);

var _RootUser2 = _interopRequireDefault(_RootUser);

var _ModelManager = __webpack_require__(20);

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
            var contextAction = new _ContextAction2.default(this._modelManager);
            return new _UserContext2.default(_RootUser2.default.ROOT_USER_ID, contextAction, this._modelManager);
        }
    }, {
        key: "setUser",
        value: function setUser(userId) {
            var contextAction = new _ContextAction2.default(this._modelManager);
            return new _UserContext2.default(userId, contextAction, this._modelManager);
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Context2 = __webpack_require__(10);

var _Context3 = _interopRequireDefault(_Context2);

var _SchemaContext = __webpack_require__(11);

var _SchemaContext2 = _interopRequireDefault(_SchemaContext);

var _getUserContextFactory = __webpack_require__(15);

var _getUserContextFactory2 = _interopRequireDefault(_getUserContextFactory);

var _UserSchemaContext = __webpack_require__(16);

var _UserSchemaContext2 = _interopRequireDefault(_UserSchemaContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserContext = function (_Context) {
    _inherits(UserContext, _Context);

    function UserContext(userId, contextAction, modelManager) {
        _classCallCheck(this, UserContext);

        var _this = _possibleConstructorReturn(this, (UserContext.__proto__ || Object.getPrototypeOf(UserContext)).call(this, contextAction, modelManager));

        _this.addContextAction("user", (0, _getUserContextFactory2.default)(userId));
        return _this;
    }

    _createClass(UserContext, [{
        key: "createSchema",
        value: function createSchema(schemaName) {
            var _this2 = this;

            return this.resolveContextAction().then(function () {
                return _this2.createFactory("Schema")({ name: schemaName });
            }).then(function (schema) {
                return schema.toJSON();
            });
        }
    }, {
        key: "setSchema",
        value: function setSchema(schemaId) {
            return this.createContext(schemaId, _SchemaContext2.default);
        }
    }, {
        key: "setUserSchema",
        value: function setUserSchema() {
            return this.createContext(null, _UserSchemaContext2.default);
        }
    }, {
        key: "getData",
        value: function getData() {
            return this.resolveContextAction().then(function (_ref) {
                var user = _ref.user;
                return user;
            });
        }
    }]);

    return UserContext;
}(_Context3.default);

exports.default = UserContext;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _createFactory2 = __webpack_require__(0);

var _createFactory3 = _interopRequireDefault(_createFactory2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContextAction = function () {
    function ContextAction(contextAction, modelManager) {
        _classCallCheck(this, ContextAction);

        this._contextAction = contextAction.copyContextAction();
        this._modelManager = modelManager;
    }

    _createClass(ContextAction, [{
        key: "addContextAction",
        value: function addContextAction(key, executeFactory) {
            this._contextAction.addAction(key, executeFactory);
        }
    }, {
        key: "getContextAction",
        value: function getContextAction() {
            return this._contextAction;
        }
    }, {
        key: "resolveContextAction",
        value: function resolveContextAction() {
            return this._contextAction.resolve();
        }
    }, {
        key: "getModelManager",
        value: function getModelManager() {
            return this._modelManager;
        }
    }, {
        key: "createContext",
        value: function createContext(id, Context) {
            return new Context(id, this.getContextAction(), this.getModelManager());
        }
    }, {
        key: "createFactory",
        value: function createFactory(modelId) {
            return (0, _createFactory3.default)(modelId, this.getModelManager());
        }
    }]);

    return ContextAction;
}();

exports.default = ContextAction;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _createFactory = __webpack_require__(0);

var _createFactory2 = _interopRequireDefault(_createFactory);

var _getFactory = __webpack_require__(2);

var _getFactory2 = _interopRequireDefault(_getFactory);

var _getListFactory = __webpack_require__(3);

var _getListFactory2 = _interopRequireDefault(_getListFactory);

var _updateFactory = __webpack_require__(1);

var _updateFactory2 = _interopRequireDefault(_updateFactory);

var _removeFactory = __webpack_require__(4);

var _removeFactory2 = _interopRequireDefault(_removeFactory);

var _getSchemaContextFactory = __webpack_require__(12);

var _getSchemaContextFactory2 = _interopRequireDefault(_getSchemaContextFactory);

var _RecordContext = __webpack_require__(13);

var _RecordContext2 = _interopRequireDefault(_RecordContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SchemaContext = function () {
    function SchemaContext(schemaId, contextAction, modelManager) {
        _classCallCheck(this, SchemaContext);

        this._contextAction = contextAction.createContextAction("schema", (0, _getSchemaContextFactory2.default)(schemaId));
        this._modelManager = modelManager;
    }

    _createClass(SchemaContext, [{
        key: "setRecord",
        value: function setRecord(recordId) {
            return new _RecordContext2.default(recordId, this._contextAction, this._modelManager);
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
            return this._contextAction.resolve().then(function (_ref2) {
                var schema = _ref2.schema;
                return schema;
            });
        }
    }, {
        key: "getRecord",
        value: function getRecord(recordId) {
            var getRecordAction = (0, _getFactory2.default)("Record", this._modelManager);

            return this._contextAction.resolve().then(function (_ref3) {
                var schema = _ref3.schema;
                return getRecordAction(recordId).then(function (record) {
                    if (record && record.SchemaId === schema.id) {
                        return record;
                    } else {
                        return null;
                    }
                });
            });
        }
    }, {
        key: "getRecords",
        value: function getRecords(query) {
            var getRecordListAction = (0, _getListFactory2.default)("Record", this._modelManager);

            return this._contextAction.resolve().then(function (_ref4) {
                var schema = _ref4.schema;
                return getRecordListAction(Object.assign({}, query, { SchemaId: schema.id }));
            });
        }
    }, {
        key: "createRecord",
        value: function createRecord(data) {
            var createRecordAction = (0, _createFactory2.default)("Record", this._modelManager);

            return this._contextAction.resolve().then(function (_ref5) {
                var schema = _ref5.schema;
                return createRecordAction({ data: data, SchemaId: schema.id });
            }).then(function (record) {
                return record.toJSON();
            });
        }
    }, {
        key: "updateRecord",
        value: function updateRecord(recordId, data) {
            var updateRecordAction = (0, _updateFactory2.default)("Record", this._modelManager);

            return this._contextAction.resolve().then(function () {
                return updateRecordAction(recordId, { data: data });
            }).then(function () {
                return true;
            });
        }
    }, {
        key: "removeRecord",
        value: function removeRecord(recordId) {
            var removeRecordAction = (0, _removeFactory2.default)("Record", this._modelManager);

            return this._contextAction.resolve().then(function () {
                return removeRecordAction(recordId);
            }).then(function () {
                return true;
            });
        }
    }, {
        key: "getAttributes",
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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
                return _ref6.apply(this, arguments);
            }

            return getAttributes;
        }()
    }]);

    return SchemaContext;
}();

exports.default = SchemaContext;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (schemaId) {
    return function (modelManager) {
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
    };
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _updateFactory = __webpack_require__(1);

var _updateFactory2 = _interopRequireDefault(_updateFactory);

var _removeFactory = __webpack_require__(4);

var _removeFactory2 = _interopRequireDefault(_removeFactory);

var _getRecordContextFactory = __webpack_require__(14);

var _getRecordContextFactory2 = _interopRequireDefault(_getRecordContextFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RecordContext = function () {
    function RecordContext(recordId, contextAction, modelManager) {
        _classCallCheck(this, RecordContext);

        this._contextAction = contextAction.createContextAction("record", (0, _getRecordContextFactory2.default)(recordId));
        this._modelManager = modelManager;
    }

    _createClass(RecordContext, [{
        key: "updateRecord",
        value: function updateRecord(data) {
            var updateRecordAction = (0, _updateFactory2.default)("Record", this._modelManager);

            return this._contextAction.resolve().then(function (_ref) {
                var record = _ref.record;
                return updateRecordAction(record.id, { data: data });
            }).then(function () {
                return true;
            });
        }
    }, {
        key: "removeRecord",
        value: function removeRecord() {
            var removeRecordAction = (0, _removeFactory2.default)("Record", this._modelManager);

            return this._contextAction.resolve().then(function (_ref2) {
                var record = _ref2.record;
                return removeRecordAction(record.id);
            }).then(function () {
                return true;
            });
        }
    }, {
        key: "getData",
        value: function getData() {
            return this._contextAction.resolve().then(function (_ref3) {
                var record = _ref3.record;
                return record;
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

exports.default = function (recordId) {
    return function (modelManager) {
        return function (_ref) {
            var schema = _ref.schema;

            return modelManager.getModels().Record.findOne({
                where: {
                    SchemaId: schema.id,
                    id: recordId
                },
                raw: true
            }).then(function (record) {
                if (!record) {}
                return record;
            });
        };
    };
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (userId) {
    return function (modelManager) {
        return function () {
            return modelManager.getModels().User.findOne({
                where: {
                    id: userId
                },
                raw: true
            }).then(function (user) {
                if (!user) {}
                return user;
            });
        };
    };
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _createFactory = __webpack_require__(0);

var _createFactory2 = _interopRequireDefault(_createFactory);

var _getFactory = __webpack_require__(2);

var _getFactory2 = _interopRequireDefault(_getFactory);

var _updateFactory = __webpack_require__(1);

var _updateFactory2 = _interopRequireDefault(_updateFactory);

var _getListFactory = __webpack_require__(3);

var _getListFactory2 = _interopRequireDefault(_getListFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserSchemaContext = function () {
    function UserSchemaContext(id, contextAction, modelManager) {
        _classCallCheck(this, UserSchemaContext);

        this._contextAction = contextAction.copyContextAction();
        this._modelManager = modelManager;
    }

    _createClass(UserSchemaContext, [{
        key: "createRecord",
        value: function createRecord(name) {
            var createUserRecordAction = (0, _createFactory2.default)("User", this._modelManager);
            return this._contextAction.resolve().then(function () {
                return createUserRecordAction({ name: name });
            }).then(function (user) {
                return user.toJSON();
            });
        }
    }, {
        key: "updateRecord",
        value: function updateRecord(recordId, data) {
            var updateUserRecordAction = (0, _updateFactory2.default)("User", this._modelManager);

            return this._contextAction.resolve().then(function () {
                return updateUserRecordAction(recordId, data);
            }).then(function () {
                return true;
            });
        }
    }, {
        key: "getRecord",
        value: function getRecord(userId) {
            var getUserRecordAction = (0, _getFactory2.default)("User", this._modelManager);

            return this._contextAction.resolve().then(function () {
                return getUserRecordAction(userId);
            }).then(function (userRecord) {
                if (userRecord) {
                    return userRecord;
                } else {
                    return null;
                }
            });
        }
    }, {
        key: "getRecords",
        value: function getRecords(query) {
            var getUserRecordListAction = (0, _getListFactory2.default)("User", this._modelManager);

            return this._contextAction.resolve().then(function () {
                return getUserRecordListAction(query);
            }).then(function (userRecordList) {
                return userRecordList;
            });
        }
    }]);

    return UserSchemaContext;
}();

exports.default = UserSchemaContext;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _throwIfNoSync = __webpack_require__(18);

var _throwIfNoSync2 = _interopRequireDefault(_throwIfNoSync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ContextAction = function () {
    function ContextAction(modelManager) {
        var contextActions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        _classCallCheck(this, ContextAction);

        this._contextActions = contextActions;
        this._modelManager = modelManager;
    }

    _createClass(ContextAction, [{
        key: "copyContextAction",
        value: function copyContextAction() {
            return new ContextAction(this._modelManager, this._contextActions.slice());
        }
    }, {
        key: "addAction",
        value: function addAction(key, executeFactory) {
            this._contextActions.push({ key: key, execute: executeFactory(this._modelManager) });
        }
    }, {
        key: "createContextAction",
        value: function createContextAction(key, executeFactory) {
            return new ContextAction(this._modelManager, this._contextActions.concat([{ key: key, execute: executeFactory(this._modelManager) }]));
        }
    }, {
        key: "resolve",
        value: function resolve() {
            return this._contextActions.reduce(function (prevContextAction, contextAction) {
                return prevContextAction.then(function (contextObject) {
                    return contextAction.execute(contextObject).then(function (context) {
                        return Object.assign({}, contextObject, _defineProperty({}, contextAction.key, context));
                    });
                });
            }, (0, _throwIfNoSync2.default)(this._modelManager).then(function () {}));
        }
    }]);

    return ContextAction;
}();

exports.default = ContextAction;

/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ROOT_USER_ID = Symbol("ROOT_USER_ID");
exports.default = ROOT_USER_ID;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = __webpack_require__(21);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(22);

var _path2 = _interopRequireDefault(_path);

var _sequelize = __webpack_require__(23);

var _sequelize2 = _interopRequireDefault(_sequelize);

var _functionOverloader = __webpack_require__(24);

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
/* 21 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("function-overloader");

/***/ })
/******/ ]);
});
//# sourceMappingURL=horpyrion.server.js.map