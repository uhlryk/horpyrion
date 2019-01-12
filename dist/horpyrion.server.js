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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _Horpyrion = __webpack_require__(3);

var _Horpyrion2 = _interopRequireDefault(_Horpyrion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Horpyrion2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _UserContext = __webpack_require__(4);

var _UserContext2 = _interopRequireDefault(_UserContext);

var _ModelManager = __webpack_require__(8);

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
        key: "getRootUser",
        value: function getRootUser() {
            return new _UserContext2.default(_UserContext2.default.ROOT_USER_ID, this._modelManager);
        }
    }, {
        key: "getUser",
        value: function getUser(userId) {
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ResourceContext = __webpack_require__(5);

var _ResourceContext2 = _interopRequireDefault(_ResourceContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserContext = function () {
    function UserContext(userId, modelManager) {
        _classCallCheck(this, UserContext);

        this._userId = userId;
        this._modelManager = modelManager;
    }

    _createClass(UserContext, [{
        key: "createResource",
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resourceName) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                return _context.abrupt("return", _ResourceContext2.default.CreateResource(resourceName, this._userId, this._modelManager));

                            case 1:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function createResource(_x) {
                return _ref.apply(this, arguments);
            }

            return createResource;
        }()
    }, {
        key: "getResource",
        value: function getResource(resourceName) {
            return new _ResourceContext2.default(resourceName, this._userId, this._modelManager);
        }
    }]);

    return UserContext;
}();

UserContext.ROOT_USER_ID = Symbol("ROOT_USER_ID");
exports.default = UserContext;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _createResource = __webpack_require__(6);

var _createResource2 = _interopRequireDefault(_createResource);

var _throwIfNoSync = __webpack_require__(7);

var _throwIfNoSync2 = _interopRequireDefault(_throwIfNoSync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResourceContext = function () {
    function ResourceContext(resource, userId, modelManager) {
        _classCallCheck(this, ResourceContext);

        this._resource = resource;
        this._userId = userId;
        this._modelManager = modelManager;
    }

    _createClass(ResourceContext, [{
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

            function getRecord(_x3) {
                return _ref2.apply(this, arguments);
            }

            return getRecord;
        }()
    }, {
        key: "getRecords",
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

            function getRecords() {
                return _ref3.apply(this, arguments);
            }

            return getRecords;
        }()
    }, {
        key: "createRecord",
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

            function createRecord() {
                return _ref4.apply(this, arguments);
            }

            return createRecord;
        }()
    }, {
        key: "updateRecord",
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                return _context5.abrupt("return", false);

                            case 1:
                            case "end":
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function updateRecord() {
                return _ref5.apply(this, arguments);
            }

            return updateRecord;
        }()
    }, {
        key: "getAttributes",
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                return _context6.abrupt("return", false);

                            case 1:
                            case "end":
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function getAttributes() {
                return _ref6.apply(this, arguments);
            }

            return getAttributes;
        }()
    }], [{
        key: "CreateResource",
        value: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(resourceName, userId, modelManager) {
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                return _context7.abrupt("return", (0, _throwIfNoSync2.default)(modelManager).then(function () {
                                    return (0, _createResource2.default)(resourceName, userId, modelManager);
                                }));

                            case 1:
                            case "end":
                                return _context7.stop();
                        }
                    }
                }, _callee7, this);
            }));

            function CreateResource(_x4, _x5, _x6) {
                return _ref7.apply(this, arguments);
            }

            return CreateResource;
        }()
    }]);

    return ResourceContext;
}();

exports.default = ResourceContext;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createResource;
function createResource(resourceName, userId, modelManager) {
    return modelManager.getModels().EntitySchema.create({
        name: resourceName
    }, {}).then(function (entitySchema) {
        return entitySchema.id;
    });
}

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = __webpack_require__(9);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(10);

var _path2 = _interopRequireDefault(_path);

var _sequelize = __webpack_require__(11);

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModelManager = function () {
    function ModelManager(config) {
        var _this = this;

        _classCallCheck(this, ModelManager);

        this._isSync = false;
        this._sequelize = new _sequelize2.default(config.dbname, config.user, config.password, {
            dialect: config.type,
            port: config.port,
            host: config.host,
            logging: config.logging
        });
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
                                return _context2.abrupt("return", this._sequelize.authenticate().then(function () {
                                    console.log("Connection has been established successfully.");
                                }).catch(function (err) {
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
/* 9 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ })
/******/ ]);
});
//# sourceMappingURL=horpyrion.server.js.map