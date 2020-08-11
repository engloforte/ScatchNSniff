/*!
 * v0.1.33
 * Cydran <http://cydran.io/>
 * Copyright (c) 2018 The Cydran Team and other contributors <http://cydran.io/>
 * Released under MIT license <http://cydran.io/license>
 * ---
 * Derivative work based on Lodash 4.17.15 <https://lodash.com/license>
 * Copyright (c) 2019 OpenJS Foundation and other contributors <https://openjsf.org/>
 * ---
 * Derivative work based on Underscore.js
 * Copyright (c) 2012 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * ---
 * Derivative work based on docReady <https://github.com/jfriend00/docReady/blob/master/license>
 * Copyright (c) 2014, John Friend <https://github.com/jfriend00/docReady/>
 * ---
 * Derivative work based on Math.uuid.js <http://www.broofa.com>
 * Copyright (c) 2010 Robert Kieffer <https://www.broofa.com/2008/09/javascript-uuid-function/>
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cydran"] = factory();
	else
		root["cydran"] = factory();
})(window, function() {
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setStrictTypeChecksEnabled = exports.encodeHtml = exports.isDefined = exports.requireObjectType = exports.requireType = exports.requireValid = exports.requireNotNull = exports.equals = exports.clone = void 0;
var NullValueError_1 = __importDefault(__webpack_require__(21));
var ValidationError_1 = __importDefault(__webpack_require__(16));
var InvalidTypeError_1 = __importDefault(__webpack_require__(41));
var CloneEquals_1 = __webpack_require__(42);
var encodeHtmlMap = {
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;"
};
function lookupEncodeHtmlMap(key) {
    return encodeHtmlMap[key];
}
function encodeHtml(source) {
    return (source === null) ? null : (source + "").replace(/[&"'<>]/g, lookupEncodeHtmlMap);
}
exports.encodeHtml = encodeHtml;
function isDefined(value) {
    return value !== null && value !== undefined;
}
exports.isDefined = isDefined;
function requireNotNull(value, name) {
    if (value === null || value === undefined) {
        throw new NullValueError_1.default(name + " shall not be null");
    }
    return value;
}
exports.requireNotNull = requireNotNull;
function requireValid(value, name, regex) {
    if (value === null || value === undefined) {
        throw new NullValueError_1.default(name + " shall not be null");
    }
    if (!regex.test(value)) {
        throw new ValidationError_1.default(name + " must be valid");
    }
    return value;
}
exports.requireValid = requireValid;
function requireType(type, value, name) {
    requireNotNull(value, name);
    var actualType = typeof value;
    if (actualType !== type) {
        throw new InvalidTypeError_1.default(name + " must be of type " + type + " but was " + actualType);
    }
    return value;
}
exports.requireType = requireType;
function isType(type, obj) {
    if (!isDefined(obj)) {
        return false;
    }
    var proto = Object.getPrototypeOf(obj);
    if (!isDefined(proto)) {
        return false;
    }
    if (!isDefined(proto.constructor)) {
        return false;
    }
    if (!isDefined(proto.constructor.name)) {
        return false;
    }
    if (proto.constructor.name === "Object") {
        return false;
    }
    if (proto.constructor.name === type) {
        return true;
    }
    return isType(type, proto);
}
function requireObjectTypeInternal(type, value, name) {
    requireNotNull(value, name);
    if (typeof value !== "object") {
        throw new InvalidTypeError_1.default(name + " is not an object but was " + (typeof value));
    }
    if (!isType(type, value)) {
        throw new InvalidTypeError_1.default(name + " must be of type " + type);
    }
    return value;
}
var strictTypeChecksEnabled = false;
function requireObjectType(type, value, name) {
    return strictTypeChecksEnabled ? requireObjectTypeInternal(type, value, name) : requireNotNull(value, name);
}
exports.requireObjectType = requireObjectType;
function setStrictTypeChecksEnabled(value) {
    strictTypeChecksEnabled = !!value;
}
exports.setStrictTypeChecksEnabled = setStrictTypeChecksEnabled;
function clone(limit, source) {
    return CloneEquals_1.cloneDeep(limit, source);
}
exports.clone = clone;
function equals(limit, first, second) {
    return CloneEquals_1.isEqual(limit, first, second);
}
exports.equals = equals;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LoggerImpl_1 = __importDefault(__webpack_require__(46));
var LoggerServiceImpl_1 = __importDefault(__webpack_require__(22));
var LoggerFactory = /** @class */ (function () {
    function LoggerFactory() {
    }
    /**
     * Get the named logger
     * @param name of the associated logger
     */
    LoggerFactory.getLogger = function (name) {
        return new LoggerImpl_1.default(name, LoggerServiceImpl_1.default.INSTANCE);
    };
    return LoggerFactory;
}());
exports.default = LoggerFactory;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CYDRAN_KEY = exports.CYDRAN_SCRIPT_PREFIX = exports.DEFAULT_EQUALS_DEPTH = exports.DEFAULT_CLONE_DEPTH = exports.ANONYMOUS_REGION_PREFIX = exports.EMPTY_OBJECT_FN = exports.NO_OP_FN = exports.ELEMENT_NODE_TYPE = exports.COMMENT_NODE_TYPE = exports.TEXT_NODE_TYPE = exports.MODULE_FIELD_NAME = exports.INTERNAL_CHANNEL_NAME = exports.INTERNAL_DIRECT_CHANNEL_NAME = exports.DEFAULT_MODULE_KEY = void 0;
var INTERNAL_DIRECT_CHANNEL_NAME = "Cydran$$Direct$$Internal$$Channel";
exports.INTERNAL_DIRECT_CHANNEL_NAME = INTERNAL_DIRECT_CHANNEL_NAME;
var COMMENT_NODE_TYPE = 8;
exports.COMMENT_NODE_TYPE = COMMENT_NODE_TYPE;
var ELEMENT_NODE_TYPE = 1;
exports.ELEMENT_NODE_TYPE = ELEMENT_NODE_TYPE;
var TEXT_NODE_TYPE = 3;
exports.TEXT_NODE_TYPE = TEXT_NODE_TYPE;
var MODULE_FIELD_NAME = "____internal$$cydran$$module____";
exports.MODULE_FIELD_NAME = MODULE_FIELD_NAME;
var INTERNAL_CHANNEL_NAME = "Cydran$$Internal$$Channel";
exports.INTERNAL_CHANNEL_NAME = INTERNAL_CHANNEL_NAME;
var DEFAULT_MODULE_KEY = "DEFAULT";
exports.DEFAULT_MODULE_KEY = DEFAULT_MODULE_KEY;
var ANONYMOUS_REGION_PREFIX = "%%%Region_";
exports.ANONYMOUS_REGION_PREFIX = ANONYMOUS_REGION_PREFIX;
var CYDRAN_SCRIPT_PREFIX = "cydran/";
exports.CYDRAN_SCRIPT_PREFIX = CYDRAN_SCRIPT_PREFIX;
var DEFAULT_CLONE_DEPTH = 50;
exports.DEFAULT_CLONE_DEPTH = DEFAULT_CLONE_DEPTH;
var DEFAULT_EQUALS_DEPTH = 50;
exports.DEFAULT_EQUALS_DEPTH = DEFAULT_EQUALS_DEPTH;
var CYDRAN_KEY = "cydran";
exports.CYDRAN_KEY = CYDRAN_KEY;
function NO_OP_FN() {
    // Intentionally do nothing
}
exports.NO_OP_FN = NO_OP_FN;
function EMPTY_OBJECT_FN() {
    return {};
}
exports.EMPTY_OBJECT_FN = EMPTY_OBJECT_FN;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CydranError = void 0;
var CydranError = /** @class */ (function (_super) {
    __extends(CydranError, _super);
    /**
     * Constructor
     *
     * @param msg string object specific to context
     * @param reps optional {key:value, <n^1>} object of named substitution values
     * @returns string filled in values in the mesage
     */
    function CydranError(msg, reps) {
        var _newTarget = this.constructor;
        var _this = _super.call(this) || this;
        _this.name = _newTarget.name;
        _this.message = (reps) ? CydranError.doMsgFilling(msg, reps) : msg;
        return _this;
    }
    CydranError.doMsgFilling = function (msg, reps) {
        return msg.replace(/%\w+%/g, function (all) { return (reps[all] + "") || all; });
    };
    return CydranError;
}(Error));
exports.CydranError = CydranError;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LoggerFactory_1 = __importDefault(__webpack_require__(1));
var ValidationRegExp_1 = __webpack_require__(8);
var ParamUtils_1 = __webpack_require__(48);
var Constants_1 = __webpack_require__(2);
var IdGenerator_1 = __importDefault(__webpack_require__(23));
var PubSubImpl_1 = __importDefault(__webpack_require__(13));
var ObjectUtils_1 = __webpack_require__(0);
var ValidatorImpl_1 = __importDefault(__webpack_require__(24));
var DomUtils_1 = __webpack_require__(7);
/**
 * The piece of code between the HTMLElement and the Mvvm
 * @type M {@link ModelMediator}
 * @type E extends HTMLElement
 * @implements {@link Disposable}
 */
var ElementMediator = /** @class */ (function () {
    function ElementMediator(dependencies, propagation, reducerFn, topLevelSupported) {
        var _this = this;
        this.topLevelSupported = ObjectUtils_1.isDefined(topLevelSupported) ? topLevelSupported : true;
        this.____internal$$cydran____ = ObjectUtils_1.requireNotNull(dependencies, "dependencies");
        this.logger = LoggerFactory_1.default.getLogger("ElementMediator: " + dependencies.prefix);
        this.domListeners = {};
        this.pubSub = new PubSubImpl_1.default(this, this.getModule());
        this.params = null;
        this.propagation = propagation;
        this.id = IdGenerator_1.default.INSTANCE.generate();
        this.reducerFn = reducerFn;
        if (this.____internal$$cydran____.validated) {
            var validator = new ValidatorImpl_1.default();
            this.validate(this.getEl(), validator.getFunction());
            validator.throwIfErrors(function () { return "Invalid use of a " + dependencies.prefix + " attribute on element " + DomUtils_1.elementAsString(_this.getEl()); });
        }
    }
    ElementMediator.prototype.populate = function () {
        // Intentionally do nothing
    };
    /**
     * Dispose of ElementMediator when released.
     * + All event listeners will be removed.
     * + This element mediator will be unwired from any other DOM entanglements
     * + The mediator reference to the model is released/nulled
     * + Any value representation of this element mediator is released/nulled
     * + The [[Mvvm|mvvm]] refernce is released/nulled
     * + The parental reference is released/nulled
     */
    ElementMediator.prototype.dispose = function () {
        this.removeDomListeners();
        this.unwire();
        this.____internal$$cydran____ = null;
        this.mediator = null;
    };
    /**
     * Initialize this element mediator.
     */
    ElementMediator.prototype.init = function () {
        this.wire();
    };
    /**
     * Get the active module instance reference by id
     * @return U
     */
    ElementMediator.prototype.get = function (id) {
        ObjectUtils_1.requireValid(id, "id", ValidationRegExp_1.VALID_ID);
        return this.____internal$$cydran____.module.get(id);
    };
    /**
     * [message description]
     * @param {string} channelName [description]
     * @param {string} messageName [description]
     * @param {any}    payload     [description]
     */
    ElementMediator.prototype.message = function (channelName, messageName, payload) {
        ObjectUtils_1.requireNotNull(channelName, "channelName");
        ObjectUtils_1.requireNotNull(messageName, "messageName");
        var actualPayload = (payload === null || payload === undefined) ? {} : payload;
        this.pubSub.message(channelName, messageName, actualPayload);
    };
    /**
     * Broadcast a message
     * @param {string} channelName [description]
     * @param {string} messageName [description]
     * @param {any}    payload     [description]
     */
    ElementMediator.prototype.broadcast = function (channelName, messageName, payload) {
        ObjectUtils_1.requireNotNull(channelName, "channelName");
        ObjectUtils_1.requireNotNull(messageName, "messageName");
        var actualPayload = (payload === null || payload === undefined) ? {} : payload;
        this.getModule().broadcast(channelName, messageName, actualPayload);
    };
    /**
     * Broadcast a message in the Global context
     * @param {string} channelName [description]
     * @param {string} messageName [description]
     * @param {any}    payload     [description]
     */
    ElementMediator.prototype.broadcastGlobally = function (channelName, messageName, payload) {
        ObjectUtils_1.requireNotNull(channelName, "channelName");
        ObjectUtils_1.requireNotNull(messageName, "messageName");
        var actualPayload = (payload === null || payload === undefined) ? {} : payload;
        this.____internal$$cydran____.module.broadcastGlobally(channelName, messageName, actualPayload);
    };
    ElementMediator.prototype.on = function (messageName) {
        var _this = this;
        ObjectUtils_1.requireNotNull(messageName, "messageName");
        return {
            forChannel: function (channelName) {
                ObjectUtils_1.requireNotNull(channelName, "channelName");
                return {
                    invoke: function (target) {
                        ObjectUtils_1.requireNotNull(target, "target");
                        _this.pubSub.on(messageName).forChannel(channelName).invoke(function (payload) {
                            target.apply(_this, [payload]);
                        });
                    }
                };
            },
            invoke: function (target) {
                ObjectUtils_1.requireNotNull(target, "target");
                _this.pubSub.on(messageName).forChannel(Constants_1.INTERNAL_CHANNEL_NAME).invoke(function (payload) {
                    target.apply(_this, [payload]);
                });
            }
        };
    };
    ElementMediator.prototype.getExtractor = function () {
        return this.____internal$$cydran____.mvvm.getExtractor();
    };
    ElementMediator.prototype.requestMediatorSources = function (sources) {
        // Intentionally do nothing by default
    };
    ElementMediator.prototype.getParentId = function () {
        return this.____internal$$cydran____.mvvm.getId();
    };
    ElementMediator.prototype.getId = function () {
        return this.id;
    };
    ElementMediator.prototype.requestMediators = function (consumer) {
        // Intentionally do nothing by default
    };
    ElementMediator.prototype.hasPropagation = function () {
        return this.propagation;
    };
    ElementMediator.prototype.isTopLevelSupported = function () {
        return this.topLevelSupported;
    };
    ElementMediator.prototype.getParams = function () {
        if (this.params === null) {
            this.params = ParamUtils_1.extractAttributes(this.getMediatorPrefix(), this.getEl());
        }
        return this.params;
    };
    ElementMediator.prototype.getModelFn = function () {
        return this.____internal$$cydran____.mvvm.getModelFn();
    };
    ElementMediator.prototype.bridge = function (name) {
        var _this = this;
        ObjectUtils_1.requireNotNull(name, "name");
        var listener = function (event) {
            _this.message("dom", name, event);
        };
        if (!this.domListeners[name]) {
            this.domListeners[name] = listener;
            this.getEl().addEventListener(name, listener, false);
        }
    };
    /**
     * Get the associated {HTMLElement html element} of this element mediator.
     * @return {HTMLElement} [description]
     */
    ElementMediator.prototype.getEl = function () {
        return this.____internal$$cydran____.el;
    };
    /**
     * [getModule description]
     * @return {Module} [description]
     */
    ElementMediator.prototype.getModule = function () {
        return this.____internal$$cydran____.module;
    };
    /**
     * Gets the prefix of all Cydran attributes on the component.
     * @return the prefix
     */
    ElementMediator.prototype.getPrefix = function () {
        return this.____internal$$cydran____.prefix;
    };
    /**
     * Gets the prefix for the mediator.
     * @return the mediator prefix
     */
    ElementMediator.prototype.getMediatorPrefix = function () {
        return this.____internal$$cydran____.mediatorPrefix;
    };
    /**
     * [mediate description]
     * @param  {string}        expression [description]
     * @return {ModelMediator}            [description]
     */
    ElementMediator.prototype.mediate = function (expression, reducerFn) {
        ObjectUtils_1.requireNotNull(expression, "expression");
        return this.____internal$$cydran____.mvvm.mediate(expression, reducerFn);
    };
    /**
     * [getModel description]
     * @return {any} [description]
     */
    ElementMediator.prototype.getModel = function () {
        return this.____internal$$cydran____.model;
    };
    /**
     * [getParent description]
     * @return {Component} [description]
     */
    ElementMediator.prototype.getParent = function () {
        return this.____internal$$cydran____.parent.getComponent();
    };
    /**
     * [getMediator description]
     * @return {ModelMediator} [description]
     */
    ElementMediator.prototype.getModelMediator = function () {
        if (!ObjectUtils_1.isDefined(this.mediator)) {
            this.mediator = this.mediate(this.getExpression(), this.reducerFn);
        }
        return this.mediator;
    };
    ElementMediator.prototype.$apply = function (fn, args) {
        ObjectUtils_1.requireNotNull(fn, "fn");
        ObjectUtils_1.requireNotNull(args, "args");
        if (this.____internal$$cydran____ && this.____internal$$cydran____.mvvm) {
            this.____internal$$cydran____.mvvm.$apply(fn, args);
        }
    };
    /**
     * Get the expression specified
     * @return {string} [description]
     */
    ElementMediator.prototype.getExpression = function () {
        return this.____internal$$cydran____.expression;
    };
    /**
     * Gets the logger.
     * @return {Logger} logger instance
     */
    ElementMediator.prototype.getLogger = function () {
        return this.logger;
    };
    ElementMediator.prototype.isMutable = function () {
        return this.____internal$$cydran____.mutable;
    };
    ElementMediator.prototype.removeDomListeners = function () {
        for (var name_1 in this.domListeners) {
            if (!this.domListeners.hasOwnProperty(name_1)) {
                continue;
            }
            this.getEl().removeEventListener(name_1, this.domListeners[name_1]);
        }
        this.domListeners = {};
    };
    return ElementMediator;
}());
exports.default = ElementMediator;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ObjectUtils_1 = __webpack_require__(0);
var Factories = /** @class */ (function () {
    function Factories() {
    }
    Factories.register = function (name, supportedTags, elementMediatorClass) {
        ObjectUtils_1.requireNotNull(name, "name");
        ObjectUtils_1.requireNotNull(supportedTags, "supportedTags");
        ObjectUtils_1.requireNotNull(elementMediatorClass, "elementMediatorClass");
        if (!Factories.factories[name]) {
            Factories.factories[name] = {};
        }
        for (var _i = 0, supportedTags_1 = supportedTags; _i < supportedTags_1.length; _i++) {
            var supportedTag = supportedTags_1[_i];
            Factories.factories[name][supportedTag] = elementMediatorClass;
        }
    };
    Factories.get = function (type) {
        return Factories.factories[type];
    };
    Factories.factories = {};
    return Factories;
}());
exports.default = Factories;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.asNumber = exports.asString = exports.asBoolean = exports.asIdentity = void 0;
var ObjectUtils_1 = __webpack_require__(0);
function asIdentity(input) {
    return input;
}
exports.asIdentity = asIdentity;
function asBoolean(input) {
    return Boolean(input);
}
exports.asBoolean = asBoolean;
function asString(input) {
    return ObjectUtils_1.isDefined(input) ? ('' + input) : null;
}
exports.asString = asString;
function asNumber(input) {
    return ObjectUtils_1.isDefined(input) ? Number(input) : null;
}
exports.asNumber = asNumber;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.elementAsString = exports.extractAttribute = exports.createTextNodeOffDom = exports.createDocumentFragmentOffDom = exports.createCommentOffDom = exports.createElementOffDom = exports.domReady = void 0;
var ObjectUtils_1 = __webpack_require__(0);
var offDomDoc = null;
function getWindow() {
    return window;
}
function getDocument() {
    return getWindow().document;
}
function getOffDomDocument() {
    if (!ObjectUtils_1.isDefined(offDomDoc)) {
        offDomDoc = getDocument().implementation.createHTMLDocument("");
    }
    return offDomDoc;
}
var readyList = [];
var readyFired = false;
var readyEventHandlersInstalled = false;
function ready() {
    if (!readyFired) {
        // this must be set to true before we start calling callbacks
        readyFired = true;
        // tslint:disable-next-line
        for (var i = 0; i < readyList.length; i++) {
            // if a callback here happens to add new ready handlers,
            // the docReady() function will see that it already fired
            // and will schedule the callback to run right after
            // this event loop finishes so all handlers will still execute
            // in order and no new ones will be added to the readyList
            // while we are processing the list
            readyList[i].fn.call(getWindow(), readyList[i].ctx);
        }
        // allow any closures held by these functions to free
        readyList = [];
    }
}
function readyStateChange() {
    if (getDocument().readyState === "complete") {
        ready();
    }
}
function domReady(callback, context) {
    if (typeof callback !== "function") {
        throw new TypeError("callback for docReady(fn) must be a function");
    }
    if (getDocument().readyState === "complete") {
        callback.apply(context, []);
        return;
    }
    // if ready has already fired, then just schedule the callback
    // to fire asynchronously, but right away
    if (readyFired) {
        setTimeout(function () { callback(context); }, 1);
        return;
    }
    else {
        // add the function and context to the list
        readyList.push({ fn: callback, ctx: context });
    }
    // if document already ready to go, schedule the ready function to run
    // IE only safe when readyState is "complete", others safe when readyState is "interactive"
    if (getDocument().readyState === "complete" || (!getDocument()["attachEvent"] && getDocument().readyState === "interactive")) {
        setTimeout(ready, 1);
    }
    else if (!readyEventHandlersInstalled) {
        // otherwise if we don't have event handlers installed, install them
        if (getDocument().addEventListener) {
            // first choice is DOMContentLoaded event
            getDocument().addEventListener("DOMContentLoaded", ready, false);
            // backup is window load event
            getWindow().addEventListener("load", ready, false);
        }
        else {
            // must be IE
            getDocument()["attachEvent"]("onreadystatechange", readyStateChange);
            getWindow()["attachEvent"]("onload", ready);
        }
        readyEventHandlersInstalled = true;
    }
}
exports.domReady = domReady;
function createElementOffDom(tagName) {
    return getOffDomDocument().createElement(tagName);
}
exports.createElementOffDom = createElementOffDom;
function createCommentOffDom(content) {
    return getOffDomDocument().createComment(content);
}
exports.createCommentOffDom = createCommentOffDom;
function createDocumentFragmentOffDom() {
    return getOffDomDocument().createDocumentFragment();
}
exports.createDocumentFragmentOffDom = createDocumentFragmentOffDom;
function createTextNodeOffDom(text) {
    return getOffDomDocument().createTextNode(text);
}
exports.createTextNodeOffDom = createTextNodeOffDom;
function extractAttribute(element, prefix, name) {
    if (!ObjectUtils_1.isDefined(element) || !ObjectUtils_1.isDefined(prefix) || !ObjectUtils_1.isDefined(name)) {
        return null;
    }
    var fullName = prefix + name;
    return element.hasAttribute(fullName) ? element.getAttribute(fullName) : null;
}
exports.extractAttribute = extractAttribute;
function elementAsString(element) {
    var result = "<";
    result += element.nodeName.toLowerCase();
    var attributes = element.attributes;
    var length = attributes.length;
    for (var i = 0; i < length; i++) {
        result += " ";
        result += attributes[i].name;
        result += "=\"";
        result += attributes[i].value;
        result += "\"";
    }
    result += ">";
    return result;
}
exports.elementAsString = elementAsString;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VALID_KEY = exports.VALID_ID = void 0;
var VALID_ID = /^[a-zA-Z][a-zA-Z0-9\$\@\-\_\.\:\\\/]*$/m;
exports.VALID_ID = VALID_ID;
var VALID_KEY = new RegExp(/^[a-zA-Z\$\_][a-zA-Z0-9\$\_]*$/);
exports.VALID_KEY = VALID_KEY;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentConfigBuilder = exports.ComponentConfigImpl = void 0;
var ObjectUtils_1 = __webpack_require__(0);
var ComponentConfigImpl = /** @class */ (function () {
    function ComponentConfigImpl() {
        this.metadata = {};
        this.prefix = "c";
        this.parentModelFn = null;
    }
    ComponentConfigImpl.prototype.getMetadata = function (key) {
        return this.metadata[key] ? this.metadata[key] : null;
    };
    ComponentConfigImpl.prototype.getPrefix = function () {
        return this.prefix;
    };
    ComponentConfigImpl.prototype.withMetadata = function (name, value) {
        this.metadata[name] = value;
    };
    ComponentConfigImpl.prototype.withPrefix = function (prefix) {
        this.prefix = prefix;
    };
    ComponentConfigImpl.prototype.setModule = function (module) {
        this.module = module;
    };
    ComponentConfigImpl.prototype.getModule = function () {
        return this.module;
    };
    ComponentConfigImpl.prototype.setParentModelFn = function (parentModelFn) {
        this.parentModelFn = parentModelFn;
    };
    ComponentConfigImpl.prototype.getParentModelFn = function () {
        return this.parentModelFn;
    };
    return ComponentConfigImpl;
}());
exports.ComponentConfigImpl = ComponentConfigImpl;
var ComponentConfigBuilder = /** @class */ (function () {
    function ComponentConfigBuilder() {
        this.instance = new ComponentConfigImpl();
    }
    ComponentConfigBuilder.prototype.withMetadata = function (name, value) {
        ObjectUtils_1.requireNotNull(name, "name");
        ObjectUtils_1.requireNotNull(value, "value");
        this.instance.withMetadata(name, value);
        return this;
    };
    ComponentConfigBuilder.prototype.withPrefix = function (prefix) {
        ObjectUtils_1.requireNotNull(prefix, "prefix");
        this.instance.withPrefix(prefix);
        return this;
    };
    ComponentConfigBuilder.prototype.build = function () {
        return this.instance;
    };
    return ComponentConfigBuilder;
}());
exports.ComponentConfigBuilder = ComponentConfigBuilder;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NullValueError_1 = __importDefault(__webpack_require__(21));
var ScopeError_1 = __importDefault(__webpack_require__(64));
var ValidationRegExp_1 = __webpack_require__(8);
var EXCLUSIONS = {
    v: "v",
    value: "value",
    m: "m",
    model: "model",
    p: "p",
    parent: "param",
    compare: "compare"
};
var ScopeImpl = /** @class */ (function () {
    function ScopeImpl(restricted) {
        this.children = [];
        this.localItems = {};
        this.items = {};
        this.code = "";
        this.parent = null;
        this.restricted = (restricted === null || restricted === undefined) || restricted;
    }
    ScopeImpl.prototype.setParent = function (parent) {
        if (!parent) {
            return;
        }
        if (this.parent) {
            this.parent.removeChild(this);
        }
        this.parent = parent;
        this.parent.addChild(this);
        this.refresh();
    };
    ScopeImpl.prototype.addChild = function (child) {
        if (child) {
            this.children.push(child);
        }
    };
    ScopeImpl.prototype.removeChild = function (child) {
        var index = this.children.indexOf(child);
        if (index >= 0) {
            this.children.splice(index, 1);
        }
    };
    ScopeImpl.prototype.getItems = function () {
        return this.items;
    };
    ScopeImpl.prototype.getCode = function () {
        return this.code;
    };
    ScopeImpl.prototype.add = function (name, item) {
        this.checkName(name);
        this.localItems[name] = item;
        this.refresh();
        this.refreshChildren();
    };
    ScopeImpl.prototype.remove = function (name) {
        this.checkName(name);
        delete this.localItems[name];
        this.refresh();
        this.refreshChildren();
    };
    ScopeImpl.prototype.checkName = function (name) {
        if (name === null || name === undefined) {
            throw new NullValueError_1.default("name must not be null or undefined.");
        }
        if (!ValidationRegExp_1.VALID_KEY.test(name)) {
            throw new ScopeError_1.default("Only objects with names containing letters and numbers and starting with a letter are allowed.");
        }
        if (this.restricted && EXCLUSIONS[name]) {
            throw new ScopeError_1.default(name + " is a reserved name in the scope.");
        }
    };
    ScopeImpl.prototype.refresh = function () {
        this.items = {};
        if (this.parent) {
            var parentItems = this.parent.getItems();
            for (var key in parentItems) {
                if (!parentItems.hasOwnProperty(key)) {
                    continue;
                }
                this.items[key] = parentItems[key];
            }
        }
        for (var key in this.localItems) {
            if (!this.localItems.hasOwnProperty(key)) {
                continue;
            }
            this.items[key] = this.localItems[key];
        }
        this.refreshCode();
    };
    ScopeImpl.prototype.refreshCode = function () {
        this.code = "";
        for (var key in this.items) {
            if (!this.items.hasOwnProperty(key)) {
                continue;
            }
            var statement = "var " + key + " = arguments[0]['" + key + "'];\n";
            this.code += statement;
        }
    };
    ScopeImpl.prototype.refreshChildren = function () {
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            child.refresh();
        }
    };
    return ScopeImpl;
}());
exports.default = ScopeImpl;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(2);
var ComponentInternalsImpl_1 = __importDefault(__webpack_require__(70));
var ObjectUtils_1 = __webpack_require__(0);
/**
 * Core class for Cydran
 */
var Component = /** @class */ (function () {
    /**
     * Constructor
     * @param template - string value representation of a template
     * @param config - optional {@link ComponentConfig} argument
     */
    function Component(template, config) {
        this.____internal$$cydran$$init____(template, config);
    }
    /**
     * Get the {@link MetadataContinuation} of the {@link Component}
     */
    Component.prototype.metadata = function () {
        var internal = this.____internal$$cydran____;
        return {
            get: function (name) { return internal.getMetadata(name); },
            has: function (name) { return internal.hasMetadata(name); }
        };
    };
    /**
     * Component has a {@link Region}
     * @returns boolean - true | false
     */
    Component.prototype.hasRegion = function (name) {
        return this.____internal$$cydran____.hasRegion(name);
    };
    /**
     * Get a child component from a region.
     * @param name - string name value of the child {@link Component}
     * @returns Component instance, or null
     */
    Component.prototype.getChild = function (name) {
        return this.____internal$$cydran____.getChild(name);
    };
    /**
     * Set a child component into a region.
     * @param name - string name value of the child {@link Component}
     * @param component - the {@link Component} reference
     */
    Component.prototype.setChild = function (name, component) {
        this.____internal$$cydran____.setChild(name, component);
    };
    Component.prototype.setChildFromRegistry = function (name, componentName, defaultComponentName) {
        this.____internal$$cydran____.setChildFromRegistry(name, componentName, defaultComponentName);
    };
    Component.prototype.message = function (channelName, messageName, payload) {
        this.____internal$$cydran____.message(channelName, messageName, payload);
    };
    Component.prototype.dispose = function () {
        this.____internal$$cydran____.dispose();
    };
    Component.prototype.getParent = function () {
        return this.____internal$$cydran____.getParent();
    };
    Component.prototype.getEl = function () {
        return this.____internal$$cydran____.getEl();
    };
    Component.prototype.get = function (id) {
        return this.____internal$$cydran____.get(id);
    };
    Component.prototype.scope = function () {
        return this.____internal$$cydran____.getScope();
    };
    Component.prototype.getPrefix = function () {
        return this.____internal$$cydran____.getPrefix();
    };
    Component.prototype.isConnected = function () {
        return this.____internal$$cydran____.isConnected();
    };
    Component.prototype.getId = function () {
        return this.____internal$$cydran____.getId();
    };
    Component.prototype.forElement = function (name) {
        return this.____internal$$cydran____.forElement(name);
    };
    Component.prototype.watch = function (expression, target, reducerFn, context) {
        this.____internal$$cydran____.watch(expression, target, reducerFn, context);
    };
    Component.prototype.evaluate = function (expression) {
        return this.____internal$$cydran____.evaluate(expression);
    };
    Component.prototype.getWatchContext = function () {
        return this.____internal$$cydran____.getWatchContext();
    };
    Component.prototype.getProperties = function () {
        return this.____internal$$cydran____.getModule().getProperties();
    };
    Component.prototype.getValue = function () {
        return this.____internal$$cydran____.getData();
    };
    Component.prototype.broadcast = function (channelName, messageName, payload) {
        this.____internal$$cydran____.broadcast(channelName, messageName, payload);
    };
    Component.prototype.broadcastGlobally = function (channelName, messageName, payload) {
        this.____internal$$cydran____.broadcastGlobally(channelName, messageName, payload);
    };
    Component.prototype.$apply = function (fn, args) {
        this.____internal$$cydran____.$apply(fn, args);
    };
    Component.prototype.on = function (messageName) {
        var _this = this;
        ObjectUtils_1.requireNotNull(messageName, "messageName");
        return {
            forChannel: function (channelName) {
                ObjectUtils_1.requireNotNull(channelName, "channelName");
                return {
                    invoke: function (target) {
                        ObjectUtils_1.requireNotNull(target, "target");
                        _this.____internal$$cydran____.on(target, messageName, channelName);
                    }
                };
            },
            invoke: function (target) {
                ObjectUtils_1.requireNotNull(target, "target");
                _this.____internal$$cydran____.on(target, messageName, Constants_1.INTERNAL_CHANNEL_NAME);
            }
        };
    };
    Component.prototype.getLogger = function () {
        return this.____internal$$cydran____.getLogger();
    };
    Component.prototype.____internal$$cydran$$init____ = function (template, config) {
        this.____internal$$cydran____ = new ComponentInternalsImpl_1.default(this, template, config);
        this.____internal$$cydran____.init();
    };
    return Component;
}());
exports.default = Component;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Level;
(function (Level) {
    Level[Level["TRACE"] = 0] = "TRACE";
    Level[Level["DEBUG"] = 1] = "DEBUG";
    Level[Level["INFO"] = 2] = "INFO";
    Level[Level["WARN"] = 3] = "WARN";
    Level[Level["ERROR"] = 4] = "ERROR";
    Level[Level["FATAL"] = 5] = "FATAL";
    Level[Level["DISABLED"] = 6] = "DISABLED";
})(Level || (Level = {}));
exports.default = Level;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ListenerImpl_1 = __importDefault(__webpack_require__(49));
var Constants_1 = __webpack_require__(2);
var LoggerFactory_1 = __importDefault(__webpack_require__(1));
var ObjectUtils_1 = __webpack_require__(0);
var PubSubImpl = /** @class */ (function () {
    function PubSubImpl(context, module) {
        this.context = context;
        this.module = module;
        this.logger = LoggerFactory_1.default.getLogger("PubSub");
        this.globalEnabled = false;
        this.listeners = [];
        this.listenersByChannel = {};
    }
    PubSubImpl.prototype.setContext = function (context) {
        this.context = context;
    };
    PubSubImpl.prototype.setModule = function (module) {
        this.module = module;
    };
    PubSubImpl.prototype.message = function (channelName, messageName, payload) {
        ObjectUtils_1.requireNotNull(channelName, "channelName");
        ObjectUtils_1.requireNotNull(messageName, "messageName");
        var actualPayload = (payload === null || payload === undefined) ? {} : payload;
        this.listeners.forEach(function (listener) {
            if (channelName === listener.getChannelName()) {
                listener.receive(messageName, actualPayload);
            }
        });
    };
    PubSubImpl.prototype.broadcast = function (channelName, messageName, payload) {
        ObjectUtils_1.requireNotNull(channelName, "channelName");
        ObjectUtils_1.requireNotNull(messageName, "messageName");
        var actualPayload = (payload === null || payload === undefined) ? {} : payload;
        this.module.broadcast(channelName, messageName, actualPayload);
    };
    PubSubImpl.prototype.broadcastGlobally = function (channelName, messageName, payload) {
        this.module.broadcastGlobally(channelName, messageName, payload);
    };
    PubSubImpl.prototype.dispose = function () {
        this.disableGlobal();
        this.listeners = [];
        this.listenersByChannel = {};
    };
    PubSubImpl.prototype.on = function (messageName) {
        ObjectUtils_1.requireNotNull(messageName, "messageName");
        var mine = this;
        return {
            forChannel: function (channelName) {
                ObjectUtils_1.requireNotNull(channelName, "channelName");
                return {
                    invoke: function (target) {
                        ObjectUtils_1.requireNotNull(target, "target");
                        mine.listenTo(channelName, messageName, target);
                    }
                };
            },
            invoke: function (target) {
                ObjectUtils_1.requireNotNull(target, "target");
                mine.listenTo(Constants_1.INTERNAL_CHANNEL_NAME, messageName, target);
            }
        };
    };
    PubSubImpl.prototype.enableGlobal = function () {
        if (this.globalEnabled) {
            return;
        }
        this.logger.trace("Enabling global");
        for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            this.module.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "addListener", listener);
        }
        this.globalEnabled = true;
    };
    PubSubImpl.prototype.disableGlobal = function () {
        if (!this.globalEnabled) {
            return;
        }
        this.logger.trace("Disabling global");
        for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            this.module.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "removeListener", listener);
        }
        this.globalEnabled = false;
    };
    PubSubImpl.prototype.listenTo = function (channel, messageName, target) {
        var _this = this;
        var listener = this.listenersByChannel[channel];
        if (!listener) {
            listener = new ListenerImpl_1.default(channel, function () { return _this.context; });
            if (this.globalEnabled) {
                this.module.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "addListener", listener);
            }
            this.listeners.push(listener);
        }
        listener.register(messageName, target);
    };
    PubSubImpl.prototype.isGlobalEnabled = function () {
        return this.globalEnabled;
    };
    return PubSubImpl;
}());
exports.default = PubSubImpl;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.trim = exports.endsWith = exports.removeFromBeginning = exports.startsWith = void 0;
function startsWith(specimen, expected) {
    return (specimen.indexOf(expected) === 0);
}
exports.startsWith = startsWith;
function endsWith(specimen, expected) {
    var actualIndex = specimen.indexOf(expected);
    var expectedIndex = specimen.length - expected.length;
    return (actualIndex === expectedIndex);
}
exports.endsWith = endsWith;
function removeFromBeginning(input, removed) {
    if (!startsWith(input, removed)) {
        return input;
    }
    return input.substring(removed.length);
}
exports.removeFromBeginning = removeFromBeginning;
function trim(input, prefix, suffix) {
    var result = (input.length > 4 && input.indexOf(prefix) === 0 && input.indexOf(suffix, input.length - 2) !== -1)
        ? input.substring(2, input.length - 2)
        : input;
    return result;
}
exports.trim = trim;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectUtils_1 = __webpack_require__(0);
var Constants_1 = __webpack_require__(2);
var LoggerFactory_1 = __importDefault(__webpack_require__(1));
var AbstractPhaseImpl = /** @class */ (function () {
    function AbstractPhaseImpl(name, previous) {
        this.logger = LoggerFactory_1.default.getLogger(name);
        this.previous = ObjectUtils_1.requireNotNull(previous, "previous");
        this.memo = null;
        this.callback = Constants_1.NO_OP_FN;
    }
    AbstractPhaseImpl.prototype.process = function (items) {
        this.logger.ifTrace(function () { return ({
            message: "Received for processing",
            items: items
        }); });
        var processed = this.previous.process(items);
        this.logger.ifTrace(function () { return ({
            message: "After processing",
            items: items
        }); });
        if (!ObjectUtils_1.isDefined(processed) || ObjectUtils_1.equals(Constants_1.DEFAULT_EQUALS_DEPTH, processed, this.memo)) {
            this.logger.ifTrace(function () { return "Not changed, returning null"; });
            return null;
        }
        this.memo = ObjectUtils_1.clone(Constants_1.DEFAULT_CLONE_DEPTH, processed);
        return this.execute(processed);
    };
    AbstractPhaseImpl.prototype.onChange = function () {
        this.logger.trace("Changed - Invoking callbacks");
        this.memo = null;
        this.callback();
    };
    AbstractPhaseImpl.prototype.invalidate = function () {
        this.onChange();
        this.logger.trace("Changed - Invalidating previous");
        this.previous.invalidate();
    };
    AbstractPhaseImpl.prototype.setCallback = function (callback) {
        this.callback = callback;
        this.previous.setCallback(callback);
    };
    AbstractPhaseImpl.prototype.getLogger = function () {
        return this.logger;
    };
    return AbstractPhaseImpl;
}());
exports.default = AbstractPhaseImpl;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractCydranError_1 = __webpack_require__(3);
var ValidationError = /** @class */ (function (_super) {
    __extends(ValidationError, _super);
    function ValidationError(msg, reps) {
        return _super.call(this, msg, reps) || this;
    }
    return ValidationError;
}(AbstractCydranError_1.CydranError));
exports.default = ValidationError;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Events = {
    AFTER_CHILD_ADDED: "AFTER_CHILD_ADDED",
    AFTER_CHILD_CHANGED: "AFTER_CHILD_CHANGED",
    AFTER_CHILD_REMOVED: "AFTER_CHILD_REMOVED",
    AFTER_PARENT_ADDED: "AFTER_PARENT_ADDED",
    AFTER_PARENT_CHANGED: "AFTER_PARENT_CHANGED",
    AFTER_PARENT_REMOVED: "AFTER_PARENT_REMOVED",
    BEFORE_CHILD_ADDED: "BEFORE_CHILD_ADDED",
    BEFORE_CHILD_CHANGED: "BEFORE_CHILD_CHANGED",
    BEFORE_CHILD_REMOVED: "BEFORE_CHILD_REMOVED",
    BEFORE_DISPOSE: "BEFORE_DISPOSE",
    BEFORE_PARENT_ADDED: "BEFORE_PARENT_ADDED",
    BEFORE_PARENT_CHANGED: "BEFORE_PARENT_CHANGED",
    BEFORE_PARENT_REMOVED: "BEFORE_PARENT_REMOVED",
    COMPONENT_NESTING_CHANGED: "COMPONENT_NESTING_CHANGED"
};
exports.default = Events;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractCydranError_1 = __webpack_require__(3);
var TemplateError = /** @class */ (function (_super) {
    __extends(TemplateError, _super);
    function TemplateError(msg, reps) {
        return _super.call(this, msg, reps) || this;
    }
    return TemplateError;
}(AbstractCydranError_1.CydranError));
exports.default = TemplateError;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ValidationRegExp_1 = __webpack_require__(8);
var Constants_1 = __webpack_require__(2);
var ScopeImpl_1 = __importDefault(__webpack_require__(10));
var Factories_1 = __importDefault(__webpack_require__(5));
var ModuleImpl_1 = __importDefault(__webpack_require__(95));
var ObjectUtils_1 = __webpack_require__(0);
var ScopeContents_1 = __webpack_require__(100);
var PropertiesImpl_1 = __importDefault(__webpack_require__(101));
var properties_json_1 = __importDefault(__webpack_require__(102));
var ModulesContextImpl = /** @class */ (function () {
    function ModulesContextImpl() {
        this.rootproperties = new PropertiesImpl_1.default();
        this.rootproperties.load(properties_json_1.default);
        this.properties = this.rootproperties.extend();
        this.rootScope = new ScopeImpl_1.default(false);
        this.rootScope.add("compare", ScopeContents_1.COMPARE);
        this.defaultModule = new ModuleImpl_1.default(Constants_1.DEFAULT_MODULE_KEY, this, this.rootScope, this.properties.extend());
        this.modules = {
            DEFAULT: this.defaultModule
        };
        ModulesContextImpl.INSTANCES.push(this);
    }
    ModulesContextImpl.getInstances = function () {
        return ModulesContextImpl.INSTANCES;
    };
    ModulesContextImpl.resetInstances = function () {
        ModulesContextImpl.INSTANCES = [];
    };
    ModulesContextImpl.prototype.getModule = function (name) {
        ObjectUtils_1.requireValid(name, "name", ValidationRegExp_1.VALID_ID);
        if (!this.modules[name]) {
            this.modules[name] = new ModuleImpl_1.default(name, this, this.defaultModule.getScope(), this.properties.extend());
        }
        return this.modules[name];
    };
    ModulesContextImpl.prototype.getDefaultModule = function () {
        return this.getModule(Constants_1.DEFAULT_MODULE_KEY);
    };
    ModulesContextImpl.prototype.forEach = function (fn) {
        ObjectUtils_1.requireNotNull(fn, "fn");
        for (var name_1 in this.modules) {
            if (!this.modules.hasOwnProperty(name_1)) {
                continue;
            }
            var current = this.modules[name_1];
            fn(current);
        }
    };
    ModulesContextImpl.prototype.broadcast = function (channelName, messageName, payload) {
        this.forEach(function (instance) { return instance.broadcast(channelName, messageName, payload); });
    };
    ModulesContextImpl.prototype.registerConstant = function (id, instance) {
        this.getDefaultModule().registerConstant(id, instance);
    };
    ModulesContextImpl.prototype.registerPrototype = function (id, classInstance, dependencies) {
        this.getDefaultModule().registerPrototype(id, classInstance, dependencies);
    };
    ModulesContextImpl.prototype.registerPrototypeWithFactory = function (id, factoryFn, dependencies) {
        this.getDefaultModule().registerPrototypeWithFactory(id, factoryFn, dependencies);
    };
    ModulesContextImpl.prototype.registerSingleton = function (id, classInstance, dependencies) {
        this.getDefaultModule().registerSingleton(id, classInstance, dependencies);
    };
    ModulesContextImpl.prototype.registerSingletonWithFactory = function (id, factoryFn, dependencies) {
        this.getDefaultModule().registerSingletonWithFactory(id, factoryFn, dependencies);
    };
    ModulesContextImpl.prototype.registerElementMediator = function (name, supportedTags, elementMediatorClass) {
        Factories_1.default.register(name, supportedTags, elementMediatorClass);
    };
    ModulesContextImpl.prototype.getScope = function () {
        return this.getDefaultModule().getScope();
    };
    ModulesContextImpl.prototype.get = function (id) {
        ObjectUtils_1.requireValid(id, "id", ValidationRegExp_1.VALID_ID);
        var result = null;
        var moduleId = ModuleImpl_1.default.ALIASES[id];
        if (moduleId) {
            result = this.getModule(id).getLocal(id);
        }
        if (!result) {
            result = this.defaultModule.getLocal(id);
        }
        return result;
    };
    ModulesContextImpl.prototype.getProperties = function () {
        return this.properties;
    };
    ModulesContextImpl.prototype.dispose = function () {
        var index = ModulesContextImpl.INSTANCES.indexOf(this);
        if (index > -1) {
            ModulesContextImpl.INSTANCES.splice(index, 1);
        }
    };
    ModulesContextImpl.INSTANCES = [];
    return ModulesContextImpl;
}());
exports.default = ModulesContextImpl;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectUtils_1 = __webpack_require__(0);
var Reducers_1 = __webpack_require__(6);
var LoggerFactory_1 = __importDefault(__webpack_require__(1));
var WatcherImpl = /** @class */ (function () {
    function WatcherImpl(watchable, expression) {
        ObjectUtils_1.requireNotNull(watchable, "watchable");
        ObjectUtils_1.requireNotNull(expression, "expression");
        this.logger = LoggerFactory_1.default.getLogger("WatcherImpl - " + expression);
        this.callbacks = [];
        this.value = watchable.evaluate(expression);
        watchable.watch(expression, this.onChange, Reducers_1.asIdentity, this);
    }
    WatcherImpl.prototype.onChange = function (previous, current) {
        this.logger.ifTrace(function () { return ({
            message: "Changed",
            previous: previous,
            current: current
        }); });
        this.value = current;
        for (var _i = 0, _a = this.callbacks; _i < _a.length; _i++) {
            var callback = _a[_i];
            callback.fn.apply(callback.context, []);
        }
    };
    WatcherImpl.prototype.addCallback = function (context, callback) {
        ObjectUtils_1.requireNotNull(context, "context");
        ObjectUtils_1.requireNotNull(callback, "callback");
        this.callbacks.push({
            context: context,
            fn: callback
        });
        return this;
    };
    WatcherImpl.prototype.get = function () {
        return this.value;
    };
    return WatcherImpl;
}());
exports.default = WatcherImpl;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractCydranError_1 = __webpack_require__(3);
var NullValueError = /** @class */ (function (_super) {
    __extends(NullValueError, _super);
    function NullValueError(msg, reps) {
        return _super.call(this, msg, reps) || this;
    }
    return NullValueError;
}(AbstractCydranError_1.CydranError));
exports.default = NullValueError;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConsoleOutputStrategy_1 = __importDefault(__webpack_require__(47));
var Level_1 = __importDefault(__webpack_require__(12));
var LoggerServiceImpl = /** @class */ (function () {
    function LoggerServiceImpl() {
        this.level = Level_1.default.INFO;
        this.outputStrategy = new ConsoleOutputStrategy_1.default();
    }
    LoggerServiceImpl.prototype.log = function (logger, level, payload, errorStack) {
        if (level >= this.level && level !== Level_1.default.DISABLED) {
            this.outputStrategy.log(logger.getName(), level, payload, errorStack);
        }
    };
    LoggerServiceImpl.prototype.setLevel = function (level) {
        this.level = level;
    };
    LoggerServiceImpl.prototype.isTrace = function () {
        return (Level_1.default.TRACE >= this.level);
    };
    LoggerServiceImpl.prototype.isDebug = function () {
        return (Level_1.default.DEBUG >= this.level);
    };
    LoggerServiceImpl.prototype.isInfo = function () {
        return (Level_1.default.INFO >= this.level);
    };
    LoggerServiceImpl.prototype.isWarn = function () {
        return (Level_1.default.WARN >= this.level);
    };
    LoggerServiceImpl.prototype.isError = function () {
        return (Level_1.default.ERROR >= this.level);
    };
    LoggerServiceImpl.prototype.isFatal = function () {
        return (Level_1.default.FATAL >= this.level);
    };
    LoggerServiceImpl.prototype.isDisabled = function () {
        return (Level_1.default.DISABLED >= this.level);
    };
    LoggerServiceImpl.INSTANCE = new LoggerServiceImpl();
    return LoggerServiceImpl;
}());
exports.default = LoggerServiceImpl;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IdGenerator = /** @class */ (function () {
    function IdGenerator() {
        this.major = 0;
        this.minor = 0;
        this.micro = 0;
    }
    IdGenerator.prototype.generate = function () {
        var result = this.major + "-" + this.minor + "-" + this.micro;
        this.micro++;
        if (this.micro > IdGenerator.MAX_VALUE) {
            this.micro = 0;
            this.minor++;
        }
        if (this.minor > IdGenerator.MAX_VALUE) {
            this.minor = 0;
            this.major++;
        }
        return result;
    };
    IdGenerator.INSTANCE = new IdGenerator();
    IdGenerator.MAX_VALUE = 9007199254740989;
    return IdGenerator;
}());
exports.default = IdGenerator;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UndefinedValidatorsImpl_1 = __importDefault(__webpack_require__(50));
var ValidationError_1 = __importDefault(__webpack_require__(16));
var DefinedValidatorsImpl_1 = __importDefault(__webpack_require__(51));
var ObjectUtils_1 = __webpack_require__(0);
var ValidatorImpl = /** @class */ (function () {
    function ValidatorImpl() {
        this.errors = [];
    }
    ValidatorImpl.prototype.getFunction = function () {
        var _this = this;
        var consumer = function (error) { return _this.errors.push(error); };
        return function (name, value) { return ObjectUtils_1.isDefined(value)
            ? new DefinedValidatorsImpl_1.default(name, value, consumer)
            : new UndefinedValidatorsImpl_1.default(name, value, consumer); };
    };
    ValidatorImpl.prototype.throwIfErrors = function (prefixFn) {
        if (this.errors.length > 0) {
            var message = prefixFn() + "\n\nDetails:\n";
            for (var _i = 0, _a = this.errors; _i < _a.length; _i++) {
                var error = _a[_i];
                message += "\n    - " + error;
            }
            message += "\n";
            throw new ValidationError_1.default(message);
        }
    };
    return ValidatorImpl;
}());
exports.default = ValidatorImpl;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DomUtils_1 = __webpack_require__(7);
var ObjectUtils_1 = __webpack_require__(0);
var ElementReferenceImpl = /** @class */ (function () {
    function ElementReferenceImpl(root, text) {
        ObjectUtils_1.requireNotNull(text, "placeholderText");
        this.placeholder = DomUtils_1.createCommentOffDom(text);
        this.element = null;
        root.parentElement.replaceChild(this.placeholder, root);
    }
    ElementReferenceImpl.prototype.set = function (element) {
        var current = ObjectUtils_1.isDefined(this.element) ? this.element : this.placeholder;
        var newElement = ObjectUtils_1.isDefined(element) ? element : null;
        var parentElement = current.parentElement;
        var replacement = ObjectUtils_1.isDefined(newElement) ? element : this.placeholder;
        parentElement.replaceChild(replacement, current);
        this.element = newElement;
    };
    ElementReferenceImpl.prototype.get = function () {
        return this.element;
    };
    return ElementReferenceImpl;
}());
exports.default = ElementReferenceImpl;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LoggerFactory_1 = __importDefault(__webpack_require__(1));
var Getter = /** @class */ (function () {
    function Getter(expression) {
        this.logger = LoggerFactory_1.default.getLogger("Getter: " + expression);
        this.expression = expression;
    }
    Getter.prototype.get = function (scope) {
        var code = '"use strict"; ' + scope.getCode() + " return (" + this.expression + ");";
        var value = null;
        try {
            value = Function(code).apply({}, [scope.getItems()]);
        }
        catch (e) {
            this.logInvocationError(code, e);
        }
        return value;
    };
    Getter.prototype.logInvocationError = function (code, e) {
        var _this = this;
        this.logger.ifWarn(function () { return "\nAn exception (" + e.name + ") was thrown invoking the element mediator expression: " + _this.expression
            + "\n\nIn context:\n" + code + "\n\nException message: " + e.message + "\n\n"; }, e);
    };
    return Getter;
}());
exports.default = Getter;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DigestionContextImpl_1 = __importDefault(__webpack_require__(77));
var Constants_1 = __webpack_require__(2);
var ObjectUtils_1 = __webpack_require__(0);
var LoggerFactory_1 = __importDefault(__webpack_require__(1));
var EventHooksImpl_1 = __importDefault(__webpack_require__(78));
var DigesterImpl = /** @class */ (function () {
    function DigesterImpl(rootMediatorSource, id, nameFn, messagableSourceFn, maxEvaluations) {
        this.skipableIds = [];
        this.rootMediatorSource = ObjectUtils_1.requireNotNull(rootMediatorSource, "rootMediatorSource");
        this.nameFn = ObjectUtils_1.requireNotNull(nameFn, "nameFn");
        this.messagableSourceFn = ObjectUtils_1.requireNotNull(messagableSourceFn, "messagableSourceFn");
        this.logger = LoggerFactory_1.default.getLogger("Digester " + id);
        this.maxEvaluations = ObjectUtils_1.requireNotNull(maxEvaluations, "maxEvaluations");
    }
    DigesterImpl.prototype.skipId = function (id) {
        if (id !== null && id !== undefined) {
            this.skipableIds.push(id);
        }
    };
    DigesterImpl.prototype.digest = function () {
        var _this = this;
        DigesterImpl.DIGESTION_START_HOOKS.notify(this.rootMediatorSource);
        this.logger.ifTrace(function () { return "Started digest on " + _this.nameFn(); });
        var remainingEvaluations = this.maxEvaluations;
        var pending = true;
        while (pending && remainingEvaluations > 0) {
            DigesterImpl.DIGESTION_CYCLE_START_HOOKS.notify(this.rootMediatorSource);
            this.logger.trace("Top digest loop");
            remainingEvaluations--;
            var context = new DigestionContextImpl_1.default();
            this.populate(context);
            var changedMediators = context.digest();
            if (changedMediators.length === 0) {
                pending = false;
                this.logger.trace("Nothing to notify");
                break;
            }
            for (var _i = 0, changedMediators_1 = changedMediators; _i < changedMediators_1.length; _i++) {
                var changedMediator = changedMediators_1[_i];
                changedMediator.notify();
            }
            this.logger.trace("End digest loop");
        }
        DigesterImpl.DIGESTION_END_HOOKS.notify(this.rootMediatorSource);
    };
    DigesterImpl.prototype.populate = function (context) {
        var seen = {};
        var sources = [];
        while (this.skipableIds.length > 0) {
            var skipableId = this.skipableIds.pop();
            if (skipableId !== null) {
                seen[skipableId] = true;
            }
        }
        sources.push(this.rootMediatorSource);
        var messagables = this.messagableSourceFn();
        for (var _i = 0, messagables_1 = messagables; _i < messagables_1.length; _i++) {
            var component = messagables_1[_i];
            component.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "consumeDigestionCandidates", sources);
        }
        while (sources.length > 0) {
            var source = sources.pop();
            var id = source.getId();
            if (id !== null && seen[id]) {
                continue;
            }
            seen[id] = true;
            source.requestMediatorSources(sources);
            source.requestMediators(context);
        }
    };
    DigesterImpl.DIGESTION_START_HOOKS = new EventHooksImpl_1.default();
    DigesterImpl.DIGESTION_END_HOOKS = new EventHooksImpl_1.default();
    DigesterImpl.DIGESTION_CYCLE_START_HOOKS = new EventHooksImpl_1.default();
    return DigesterImpl;
}());
exports.default = DigesterImpl;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LOCK_ATTRIBUTE = exports.VALUE_ATTRIBUTE = exports.MODULE_ATTRIBUTE = exports.COMPONENT_ATTRIBUTE = exports.NAME_ATTRIBUTE = exports.ID_ATTRIBUTE = void 0;
var ID_ATTRIBUTE = "id";
exports.ID_ATTRIBUTE = ID_ATTRIBUTE;
var NAME_ATTRIBUTE = "name";
exports.NAME_ATTRIBUTE = NAME_ATTRIBUTE;
var COMPONENT_ATTRIBUTE = "component";
exports.COMPONENT_ATTRIBUTE = COMPONENT_ATTRIBUTE;
var MODULE_ATTRIBUTE = "module";
exports.MODULE_ATTRIBUTE = MODULE_ATTRIBUTE;
var VALUE_ATTRIBUTE = "value";
exports.VALUE_ATTRIBUTE = VALUE_ATTRIBUTE;
var LOCK_ATTRIBUTE = "lock";
exports.LOCK_ATTRIBUTE = LOCK_ATTRIBUTE;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NESTING_CHANGED = void 0;
var NESTING_CHANGED = "NESTING_CHANGED";
exports.NESTING_CHANGED = NESTING_CHANGED;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ObjectUtils_1 = __webpack_require__(0);
var IdentityRendererImpl = /** @class */ (function () {
    function IdentityRendererImpl(element) {
        this.element = ObjectUtils_1.requireNotNull(element, "element");
    }
    IdentityRendererImpl.prototype.render = function () {
        return this.element;
    };
    return IdentityRendererImpl;
}());
exports.default = IdentityRendererImpl;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.builder = exports.create = void 0;
var create_1 = __importDefault(__webpack_require__(120));
exports.create = create_1.default;
var builder_1 = __importDefault(__webpack_require__(121));
exports.builder = builder_1.default;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractCydranError_1 = __webpack_require__(3);
var SelectorError = /** @class */ (function (_super) {
    __extends(SelectorError, _super);
    function SelectorError(msg, reps) {
        return _super.call(this, msg, reps) || this;
    }
    return SelectorError;
}(AbstractCydranError_1.CydranError));
exports.default = SelectorError;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __importDefault(__webpack_require__(11));
var ComponentConfig_1 = __webpack_require__(9);
var RootComponent = /** @class */ (function (_super) {
    __extends(RootComponent, _super);
    function RootComponent(module, renderer) {
        var _this = this;
        var config = new ComponentConfig_1.ComponentConfigImpl();
        config.setModule(module);
        _this = _super.call(this, renderer, config) || this;
        return _this;
    }
    RootComponent.prototype.isConnected = function () {
        return true;
    };
    return RootComponent;
}(Component_1.default));
exports.default = RootComponent;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Level_1 = __importDefault(__webpack_require__(12));
var LoggerServiceImpl_1 = __importDefault(__webpack_require__(22));
var CydranConfig = /** @class */ (function () {
    function CydranConfig() {
    }
    CydranConfig.prototype.useTrace = function () {
        LoggerServiceImpl_1.default.INSTANCE.setLevel(Level_1.default.TRACE);
    };
    CydranConfig.prototype.useDebug = function () {
        LoggerServiceImpl_1.default.INSTANCE.setLevel(Level_1.default.DEBUG);
    };
    CydranConfig.prototype.useInfo = function () {
        LoggerServiceImpl_1.default.INSTANCE.setLevel(Level_1.default.INFO);
    };
    CydranConfig.prototype.useWarn = function () {
        LoggerServiceImpl_1.default.INSTANCE.setLevel(Level_1.default.WARN);
    };
    CydranConfig.prototype.useError = function () {
        LoggerServiceImpl_1.default.INSTANCE.setLevel(Level_1.default.ERROR);
    };
    CydranConfig.prototype.useFatal = function () {
        LoggerServiceImpl_1.default.INSTANCE.setLevel(Level_1.default.FATAL);
    };
    CydranConfig.prototype.useDisabled = function () {
        LoggerServiceImpl_1.default.INSTANCE.setLevel(Level_1.default.DISABLED);
    };
    return CydranConfig;
}());
exports.default = CydranConfig;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HOOKS = exports.create = exports.setStrictTypeChecksEnabled = exports.Filters = exports.requireValid = exports.requireNotNull = exports.isDefined = exports.noConflict = exports.CydranConfig = exports.LoggerFactory = exports.ElementMediator = exports.builder = exports.Events = exports.Component = exports.ComponentConfigBuilder = void 0;
__webpack_require__(36);
__webpack_require__(37);
__webpack_require__(38);
__webpack_require__(39);
__webpack_require__(112);
__webpack_require__(113);
__webpack_require__(114);
__webpack_require__(115);
__webpack_require__(116);
__webpack_require__(117);
__webpack_require__(118);
__webpack_require__(119);
__webpack_require__(31);
__webpack_require__(126);
var ComponentConfig_1 = __webpack_require__(9);
Object.defineProperty(exports, "ComponentConfigBuilder", { enumerable: true, get: function () { return ComponentConfig_1.ComponentConfigBuilder; } });
var CydranConfig = __importStar(__webpack_require__(34));
exports.CydranConfig = CydranConfig;
var Events_1 = __importDefault(__webpack_require__(17));
exports.Events = Events_1.default;
var LoggerFactory_1 = __importDefault(__webpack_require__(1));
exports.LoggerFactory = LoggerFactory_1.default;
var ElementMediator_1 = __importDefault(__webpack_require__(4));
exports.ElementMediator = ElementMediator_1.default;
var Component_1 = __importDefault(__webpack_require__(11));
exports.Component = Component_1.default;
var ObjectUtils_1 = __webpack_require__(0);
Object.defineProperty(exports, "isDefined", { enumerable: true, get: function () { return ObjectUtils_1.isDefined; } });
Object.defineProperty(exports, "requireNotNull", { enumerable: true, get: function () { return ObjectUtils_1.requireNotNull; } });
Object.defineProperty(exports, "requireValid", { enumerable: true, get: function () { return ObjectUtils_1.requireValid; } });
Object.defineProperty(exports, "setStrictTypeChecksEnabled", { enumerable: true, get: function () { return ObjectUtils_1.setStrictTypeChecksEnabled; } });
var Filters_1 = __importDefault(__webpack_require__(127));
exports.Filters = Filters_1.default;
var HooksImpl_1 = __importDefault(__webpack_require__(135));
var stage_1 = __webpack_require__(31);
Object.defineProperty(exports, "builder", { enumerable: true, get: function () { return stage_1.builder; } });
Object.defineProperty(exports, "create", { enumerable: true, get: function () { return stage_1.create; } });
var Constants_1 = __webpack_require__(2);
var ORIGINAL_CYDRAN = window[Constants_1.CYDRAN_KEY];
var HOOKS = HooksImpl_1.default.INSTANCE;
exports.HOOKS = HOOKS;
function noConflict() {
    var currentCydran = window[Constants_1.CYDRAN_KEY];
    window[Constants_1.CYDRAN_KEY] = ORIGINAL_CYDRAN;
    return currentCydran;
}
exports.noConflict = noConflict;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(40);
__webpack_require__(52);
__webpack_require__(53);
__webpack_require__(54);
__webpack_require__(55);
__webpack_require__(56);
__webpack_require__(57);
__webpack_require__(58);
__webpack_require__(59);
__webpack_require__(60);
__webpack_require__(61);
__webpack_require__(62);


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Factories_1 = __importDefault(__webpack_require__(5));
var ElementMediator_1 = __importDefault(__webpack_require__(4));
var Reducers_1 = __webpack_require__(6);
/**
 *
 */
var Checked = /** @class */ (function (_super) {
    __extends(Checked, _super);
    function Checked(deps) {
        return _super.call(this, deps, false, Reducers_1.asBoolean) || this;
    }
    Checked.prototype.wire = function () {
        this.getModelMediator().watch(this, this.onTargetChange);
    };
    Checked.prototype.unwire = function () {
        // Intentionally do nothing
    };
    Checked.prototype.onTargetChange = function (previous, current) {
        this.getEl().checked = !current;
    };
    Checked.prototype.validate = function (element, check) {
        // Intentionally do nothing
    };
    return Checked;
}(ElementMediator_1.default));
Factories_1.default.register("checked", ["input"], Checked);
exports.default = Checked;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractCydranError_1 = __webpack_require__(3);
var InvalidTypeError = /** @class */ (function (_super) {
    __extends(InvalidTypeError, _super);
    function InvalidTypeError(msg, reps) {
        return _super.call(this, msg, reps) || this;
    }
    return InvalidTypeError;
}(AbstractCydranError_1.CydranError));
exports.default = InvalidTypeError;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEqual = exports.cloneDeep = void 0;
var RecursionError_1 = __importDefault(__webpack_require__(45));
/* tslint:disable */
var LARGE_ARRAY_SIZE = 200;
var FUNC_ERROR_TEXT = "Expected a function";
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var CLONE_DEEP_FLAG = 1;
var CLONE_FLAT_FLAG = 2;
var CLONE_SYMBOLS_FLAG = 4;
var COMPARE_PARTIAL_FLAG = 1;
var COMPARE_UNORDERED_FLAG = 2;
var MAX_SAFE_INTEGER = 9007199254740991;
var argsTag = "[object Arguments]";
var arrayTag = "[object Array]";
var asyncTag = "[object AsyncFunction]";
var boolTag = "[object Boolean]";
var dateTag = "[object Date]";
var errorTag = "[object Error]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var mapTag = "[object Map]";
var numberTag = "[object Number]";
var nullTag = "[object Null]";
var objectTag = "[object Object]";
var promiseTag = "[object Promise]";
var proxyTag = "[object Proxy]";
var regexpTag = "[object RegExp]";
var setTag = "[object Set]";
var stringTag = "[object String]";
var symbolTag = "[object Symbol]";
var undefinedTag = "[object Undefined]";
var weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]";
var dataViewTag = "[object DataView]";
var float32Tag = "[object Float32Array]";
var float64Tag = "[object Float64Array]";
var int8Tag = "[object Int8Array]";
var int16Tag = "[object Int16Array]";
var int32Tag = "[object Int32Array]";
var uint8Tag = "[object Uint8Array]";
var uint8ClampedTag = "[object Uint8ClampedArray]";
var uint16Tag = "[object Uint16Array]";
var uint32Tag = "[object Uint32Array]";
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reFlags = /\w*$/;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var reIsUint = /^(?:0|[1-9]\d*)$/;
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
    typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
        typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
            typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
                typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
    typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
        typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
            typedArrayTags[errorTag] = typedArrayTags[funcTag] =
                typedArrayTags[mapTag] = typedArrayTags[numberTag] =
                    typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
                        typedArrayTags[setTag] = typedArrayTags[stringTag] =
                            typedArrayTags[weakMapTag] = false;
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
    cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
        cloneableTags[boolTag] = cloneableTags[dateTag] =
            cloneableTags[float32Tag] = cloneableTags[float64Tag] =
                cloneableTags[int8Tag] = cloneableTags[int16Tag] =
                    cloneableTags[int32Tag] = cloneableTags[mapTag] =
                        cloneableTags[numberTag] = cloneableTags[objectTag] =
                            cloneableTags[regexpTag] = cloneableTags[setTag] =
                                cloneableTags[stringTag] = cloneableTags[symbolTag] =
                                    cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
                                        cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
    cloneableTags[weakMapTag] = false;
var freeGlobal = typeof global === "object" && global && global.Object === Object && global;
var freeSelf = typeof self === "object" && self && self["Object"] === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
var freeExports =  true && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module === "object" && module && !module["nodeType"] && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
function arrayEach(array, iteratee) {
    var length = array == null ? 0 : array.length;
    var index = -1;
    while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
            break;
        }
    }
    return array;
}
function arrayFilter(array, predicate) {
    var length = array == null ? 0 : array.length;
    var result = [];
    var index = -1;
    var resIndex = 0;
    while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
            result[resIndex++] = value;
        }
    }
    return result;
}
function arrayPush(array, values) {
    var length = values.length;
    var offset = array.length;
    var index = -1;
    while (++index < length) {
        array[offset + index] = values[index];
    }
    return array;
}
function arraySome(array, predicate) {
    var length = array == null ? 0 : array.length;
    var index = -1;
    while (++index < length) {
        if (predicate(array[index], index, array)) {
            return true;
        }
    }
    return false;
}
function baseTimes(n, iteratee) {
    var result = Array(n);
    var index = -1;
    while (++index < n) {
        result[index] = iteratee(index);
    }
    return result;
}
function cacheHas(cache, key) {
    return cache.has(key);
}
function getValue(object, key) {
    return object == null ? undefined : object[key];
}
function mapToArray(map) {
    var result = Array(map.size);
    var index = -1;
    map.forEach(function (value, key) {
        result[++index] = [key, value];
    });
    return result;
}
function overArg(func, transform) {
    return function (arg) {
        return func(transform(arg));
    };
}
function setToArray(set) {
    var result = Array(set.size);
    var index = -1;
    set.forEach(function (value) {
        result[++index] = value;
    });
    return result;
}
var context = root;
var arrayProto = Array.prototype;
var funcProto = Function.prototype;
var objectProto = Object.prototype;
var coreJsData = context["__core-js_shared__"];
var funcToString = funcProto.toString;
var hasOwnProperty = objectProto.hasOwnProperty;
var maskSrcKey = (function () {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? ("Symbol(src)_1." + uid) : "";
}());
var nativeObjectToString = objectProto.toString;
var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
var Buffer = moduleExports ? context.Buffer : undefined;
var Symbol = context.Symbol;
var Uint8Array = context.Uint8Array;
var allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
var getPrototype = overArg(Object.getPrototypeOf, Object);
var objectCreate = Object.create;
var propertyIsEnumerable = objectProto.propertyIsEnumerable;
var splice = arrayProto.splice;
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
var nativeKeys = overArg(Object.keys, Object);
var DataView = getNative(context, "DataView");
var Map = getNative(context, "Map");
var Promise = getNative(context, "Promise");
var Set = getNative(context, "Set");
var WeakMap = getNative(context, "WeakMap");
var nativeCreate = getNative(Object, "create");
var dataViewCtorString = toSource(DataView);
var mapCtorString = toSource(Map);
var promiseCtorString = toSource(Promise);
var setCtorString = toSource(Set);
var weakMapCtorString = toSource(WeakMap);
var symbolProto = Symbol ? Symbol.prototype : undefined;
var symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
var baseCreate = (function () {
    function object() {
        // Intentionally do nothing
    }
    return function (proto) {
        if (!isObject(proto)) {
            return {};
        }
        if (objectCreate) {
            return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = undefined;
        return result;
    };
}());
var Hash = /** @class */ (function () {
    function Hash(entries) {
        var index = -1;
        var length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
        }
    }
    Hash.prototype.clear = function () {
        this.__DATA__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
    };
    Hash.prototype.delete = function (key) {
        var result = this.has(key) && delete this.__DATA__[key];
        this.size -= result ? 1 : 0;
        return result;
    };
    Hash.prototype.get = function (key) {
        var data = this.__DATA__;
        if (nativeCreate) {
            var result = data[key];
            return result === HASH_UNDEFINED ? undefined : result;
        }
        return hasOwnProperty.call(data, key) ? data[key] : undefined;
    };
    Hash.prototype.has = function (key) {
        var data = this.__DATA__;
        return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
    };
    Hash.prototype.set = function (key, value) {
        var data = this.__DATA__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
        return this;
    };
    return Hash;
}());
var ListCache = /** @class */ (function () {
    function ListCache(entries) {
        var index = -1;
        var length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
        }
    }
    ListCache.prototype.clear = function () {
        this.__DATA__ = [];
        this.size = 0;
    };
    ListCache.prototype.delete = function (key) {
        var data = this.__DATA__;
        var index = assocIndexOf(data, key);
        if (index < 0) {
            return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
            data.pop();
        }
        else {
            splice.call(data, index, 1);
        }
        --this.size;
        return true;
    };
    ListCache.prototype.get = function (key) {
        var data = this.__DATA__;
        var index = assocIndexOf(data, key);
        return index < 0 ? undefined : data[index][1];
    };
    ListCache.prototype.has = function (key) {
        return assocIndexOf(this.__DATA__, key) > -1;
    };
    ListCache.prototype.set = function (key, value) {
        var data = this.__DATA__;
        var index = assocIndexOf(data, key);
        if (index < 0) {
            ++this.size;
            data.push([key, value]);
        }
        else {
            data[index][1] = value;
        }
        return this;
    };
    return ListCache;
}());
var MapCache = /** @class */ (function () {
    function MapCache(entries) {
        var index = -1;
        var length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
        }
    }
    MapCache.prototype.clear = function () {
        this.size = 0;
        this.__DATA__ = {
            hash: new Hash(),
            map: new (Map || ListCache)(),
            string: new Hash(),
        };
    };
    MapCache.prototype.delete = function (key) {
        var result = getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
    };
    MapCache.prototype.get = function (key) {
        return getMapData(this, key).get(key);
    };
    MapCache.prototype.has = function (key) {
        return getMapData(this, key).has(key);
    };
    MapCache.prototype.set = function (key, value) {
        var data = getMapData(this, key);
        var size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
    };
    return MapCache;
}());
var SetCache = /** @class */ (function () {
    function SetCache(values) {
        var index = -1;
        var length = values == null ? 0 : values.length;
        this.__DATA__ = new MapCache();
        while (++index < length) {
            this.add(values[index]);
        }
    }
    SetCache.prototype.push = function (value) {
        return this.add(value);
    };
    SetCache.prototype.add = function (value) {
        this.__DATA__.set(value, HASH_UNDEFINED);
        return this;
    };
    SetCache.prototype.has = function (value) {
        return this.__DATA__.has(value);
    };
    return SetCache;
}());
var Stack = /** @class */ (function () {
    function Stack(entries) {
        var data = this.__DATA__ = new ListCache(entries);
        this.size = data.size;
    }
    Stack.prototype.clear = function () {
        this.__DATA__ = new ListCache();
        this.size = 0;
    };
    Stack.prototype.delete = function (key) {
        var data = this.__DATA__;
        var result = data["delete"](key);
        this.size = data.size;
        return result;
    };
    Stack.prototype.get = function (key) {
        return this.__DATA__.get(key);
    };
    Stack.prototype.has = function (key) {
        return this.__DATA__.has(key);
    };
    Stack.prototype.set = function (key, value) {
        var data = this.__DATA__;
        if (data instanceof ListCache) {
            var pairs = data.__DATA__;
            if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
                pairs.push([key, value]);
                this.size = ++data.size;
                return this;
            }
            data = this.__DATA__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
    };
    return Stack;
}());
function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value);
    var isArg = !isArr && isArguments(value);
    var isBuff = !isArr && !isArg && isBuffer(value);
    var isType = !isArr && !isArg && !isBuff && isTypedArray(value);
    var skipIndexes = isArr || isArg || isBuff || isType;
    var result = skipIndexes ? baseTimes(value.length, String) : [];
    var length = result.length;
    for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) &&
            !(skipIndexes && (
            // Safari 9 has enumerable `arguments.length` in strict mode.
            key == "length" ||
                // Node.js 0.10 has enumerable non-index properties on buffers.
                (isBuff && (key == "offset" || key == "parent")) ||
                // PhantomJS 2 has enumerable non-index properties on typed arrays.
                (isType && (key == "buffer" || key == "byteLength" || key == "byteOffset")) ||
                // Skip index properties.
                isIndex(key, length)))) {
            result.push(key);
        }
    }
    return result;
}
function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
        if (eq(array[length][0], key)) {
            return length;
        }
    }
    return -1;
}
function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
}
function baseAssignIn(object, source) {
    return object && copyObject(source, keysIn(source), object);
}
function baseAssignValue(object, key, value) {
    if (key == "__proto__" && Object.defineProperty) {
        Object.defineProperty(object, key, {
            configurable: true,
            enumerable: true,
            value: value,
            writable: true,
        });
    }
    else {
        object[key] = value;
    }
}
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag && symToStringTag in Object(value))
        ? getRawTag(value)
        : objectToString(value);
}
function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
}
function baseIsEqual(depth, value, other, bitmask, customizer, stack) {
    if (depth <= 0) {
        throw new RecursionError_1.default("Recursive depth reached while comparing object");
    }
    if (value === other) {
        return true;
    }
    if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
        return value !== value && other !== other;
    }
    return baseIsEqualDeep(depth - 1, value, other, bitmask, customizer, baseIsEqual, stack);
}
function baseIsEqualDeep(depth, object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object);
    var othIsArr = isArray(other);
    var objTag = objIsArr ? arrayTag : getTag(object);
    var othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag;
    var othIsObj = othTag == objectTag;
    var isSameTag = objTag == othTag;
    if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
            return false;
        }
        objIsArr = true;
        objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
        stack = (!stack) ? new Stack() : stack;
        return (objIsArr || isTypedArray(object))
            ? equalArrays(depth, object, other, bitmask, customizer, equalFunc, stack)
            : equalByTag(depth, object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__");
        var othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object;
            var othUnwrapped = othIsWrapped ? other.value() : other;
            stack = (!stack) ? new Stack() : stack;
            return equalFunc(depth, objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
    }
    if (!isSameTag) {
        return false;
    }
    stack = (!stack) ? new Stack() : stack;
    return equalObjects(depth, object, other, bitmask, customizer, equalFunc, stack);
}
function baseIsMap(value) {
    return isObjectLike(value) && getTag(value) == mapTag;
}
function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
        return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
}
function baseIsSet(value) {
    return isObjectLike(value) && getTag(value) == setTag;
}
function baseIsTypedArray(value) {
    return isObjectLike(value) &&
        isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
function baseKeys(object) {
    if (!isPrototype(object)) {
        return nativeKeys(object);
    }
    var result = [];
    for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
            result.push(key);
        }
    }
    return result;
}
function baseKeysIn(object) {
    if (!isObject(object)) {
        return nativeKeysIn(object);
    }
    var isProto = isPrototype(object);
    var result = [];
    for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
            result.push(key);
        }
    }
    return result;
}
function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
        return buffer.slice();
    }
    var length = buffer.length;
    var ctor = buffer.constructor;
    var result = allocUnsafe ? allocUnsafe(length) : new ctor(length);
    buffer.copy(result);
    return result;
}
function cloneArrayBuffer(arrayBuffer) {
    var ctor = arrayBuffer["constructor"];
    var result = new ctor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
}
function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
}
function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
function copyArray(source, array) {
    var index = -1;
    var length = source.length;
    array = (!array) ? Array(length) : array;
    while (++index < length) {
        array[index] = source[index];
    }
    return array;
}
function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object = (isNew) ? {} : object;
    var index = -1;
    var length = props.length;
    while (++index < length) {
        var key = props[index];
        var newValue = customizer
            ? customizer(object[key], source[key], key, object, source)
            : undefined;
        if (newValue === undefined) {
            newValue = source[key];
        }
        if (isNew) {
            baseAssignValue(object, key, newValue);
        }
        else {
            assignValue(object, key, newValue);
        }
    }
    return object;
}
function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
}
function copySymbolsIn(source, object) {
    return copyObject(source, getSymbolsIn(source), object);
}
function equalArrays(depth, array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
    var arrLength = array.length;
    var othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
    }
    // Assume cyclic values are equal.
    var stacked = stack.get(array);
    if (stacked && stack.get(other)) {
        return stacked == other;
    }
    var index = -1;
    var result = true;
    var seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache() : undefined;
    stack.set(array, other);
    stack.set(other, array);
    var _loop_1 = function () {
        var arrValue = array[index];
        var othValue = other[index];
        var compared = void 0;
        if (customizer) {
            compared = isPartial
                ? customizer(othValue, arrValue, index, other, array, stack)
                : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
            if (compared) {
                return "continue";
            }
            result = false;
            return "break";
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
            if (!arraySome(other, function (othValue, othIndex) {
                if (!cacheHas(seen, othIndex) &&
                    (arrValue === othValue || equalFunc(depth, arrValue, othValue, bitmask, customizer, stack))) {
                    return seen.push(othIndex);
                }
            })) {
                result = false;
                return "break";
            }
        }
        else if (!(arrValue === othValue ||
            equalFunc(depth, arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            return "break";
        }
    };
    // Ignore non-index properties.
    while (++index < arrLength) {
        var state_1 = _loop_1();
        if (state_1 === "break")
            break;
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
}
function equalByTag(depth, object, other, tag, bitmask, customizer, equalFunc, stack) {
    var convert;
    switch (tag) {
        case dataViewTag:
            if ((object.byteLength != other.byteLength) ||
                (object.byteOffset != other.byteOffset)) {
                return false;
            }
            object = object.buffer;
            other = other.buffer;
        case arrayBufferTag:
            if ((object.byteLength != other.byteLength) ||
                !equalFunc(depth, new Uint8Array(object), new Uint8Array(other))) {
                return false;
            }
            return true;
        case boolTag:
        case dateTag:
        case numberTag:
            // Coerce booleans to `1` or `0` and dates to milliseconds.
            // Invalid dates are coerced to `NaN`.
            return eq(+object, +other);
        case errorTag:
            return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
            // Coerce regexes to strings and treat strings, primitives and objects,
            // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
            // for more details.
            return object == (other + "");
        case mapTag:
            convert = mapToArray;
        case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert = (!convert) ? setToArray : convert;
            if (object.size != other.size && !isPartial) {
                return false;
            }
            // Assume cyclic values are equal.
            var stacked = stack.get(object);
            if (stacked) {
                return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            // Recursively compare objects (susceptible to call stack limits).
            stack.set(object, other);
            var result = equalArrays(depth, convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
        case symbolTag:
            if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
    }
    return false;
}
function equalObjects(depth, object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
    var objProps = getAllKeys(object);
    var objLength = objProps.length;
    var othProps = getAllKeys(other);
    var othLength = othProps.length;
    if (objLength != othLength && !isPartial) {
        return false;
    }
    var index = objLength;
    while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
        }
    }
    // Assume cyclic values are equal.
    var stacked = stack.get(object);
    if (stacked && stack.get(other)) {
        return stacked == other;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = !!isPartial;
    while (++index < objLength) {
        var key = objProps[index];
        var objValue = object[key];
        var othValue = other[key];
        var compared = void 0;
        if (customizer) {
            compared = isPartial
                ? customizer(othValue, objValue, key, other, object, stack)
                : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined
            ? (objValue === othValue || equalFunc(depth, objValue, othValue, bitmask, customizer, stack))
            : compared)) {
            result = false;
            break;
        }
        skipCtor = (!skipCtor) ? key == "constructor" : skipCtor;
    }
    if (result && !skipCtor) {
        var objCtor = object.constructor;
        var othCtor = other.constructor;
        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor &&
            ("constructor" in object && "constructor" in other) &&
            !(typeof objCtor == "function" && objCtor instanceof objCtor &&
                typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result = false;
        }
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
}
function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
}
function getAllKeysIn(object) {
    return baseGetAllKeys(object, keysIn, getSymbolsIn);
}
function getMapData(map, key) {
    var data = map.__DATA__;
    return isKeyable(key) ? data[typeof key === "string" ? "string" : "hash"]
        : data.map;
}
function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
}
function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag);
    var tag = value[symToStringTag];
    var unmasked = false;
    try {
        value[symToStringTag] = undefined;
        unmasked = true;
    }
    catch (e) {
        // Intentionally do nothing
    }
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) {
            value[symToStringTag] = tag;
        }
        else {
            delete value[symToStringTag];
        }
    }
    return result;
}
var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
    if (object == null) {
        return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function (symbol) {
        return propertyIsEnumerable.call(object, symbol);
    });
};
var getSymbolsIn = !nativeGetSymbols ? stubArray : function (object) {
    var result = [];
    while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
    }
    return result;
};
var getTag = baseGetTag;
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) !== dataViewTag) ||
    (Map && getTag(new Map()) !== mapTag) ||
    (Promise && getTag(Promise.resolve()) !== promiseTag) ||
    (Set && getTag(new Set()) !== setTag) ||
    (WeakMap && getTag(new WeakMap()) !== weakMapTag)) {
    getTag = function (value) {
        var result = baseGetTag(value);
        var Ctor = result === objectTag ? value.constructor : undefined;
        var ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
            switch (ctorString) {
                case dataViewCtorString: return dataViewTag;
                case mapCtorString: return mapTag;
                case promiseCtorString: return promiseTag;
                case setCtorString: return setTag;
                case weakMapCtorString: return weakMapTag;
            }
        }
        return result;
    };
}
function initCloneArray(array) {
    var length = array.length;
    var result = new array.constructor(length);
    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] === "string" && hasOwnProperty.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
    }
    return result;
}
function initCloneObject(object) {
    return (typeof object.constructor === "function" && !isPrototype(object))
        ? baseCreate(getPrototype(object))
        : {};
}
function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch (tag) {
        case arrayBufferTag:
            return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
            return new Ctor(+object);
        case dataViewTag:
            return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
            return cloneTypedArray(object, isDeep);
        case mapTag:
            return new Ctor();
        case numberTag:
        case stringTag:
            return new Ctor(object);
        case regexpTag:
            return cloneRegExp(object);
        case setTag:
            return new Ctor();
        case symbolTag:
            return cloneSymbol(object);
    }
}
function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length &&
        (type === "number" ||
            (type !== "symbol" && reIsUint.test(value))) &&
        (value > -1 && value % 1 === 0 && value < length);
}
function isKeyable(value) {
    var type = typeof value;
    return (type === "string" || type === "number" || type === "symbol" || type === "boolean")
        ? (value !== "__proto__")
        : (value === null);
}
function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
}
function isPrototype(value) {
    var Ctor = value && value.constructor;
    var proto = (typeof Ctor === "function" && Ctor.prototype) || objectProto;
    return value === proto;
}
function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
        /* tslint:disable-next-line */
        for (var key in Object(object)) {
            result.push(key);
        }
    }
    return result;
}
function objectToString(value) {
    return nativeObjectToString.call(value);
}
function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        }
        catch (e) {
            // Intentionally do nothing
        }
        try {
            return (func + "");
        }
        catch (e) {
            // Intentionally do nothing
        }
    }
    return "";
}
function memoize(func, resolver) {
    if (typeof func !== "function" || (resolver != null && typeof resolver !== "function")) {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function () {
        var args = arguments;
        var key = resolver ? resolver.apply(this, args) : args[0];
        var cache = memoized["cache"];
        if (cache.has(key)) {
            return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized["cache"] = cache.set(key, result) || cache;
        return result;
    };
    memoized["cache"] = new (memoize.Cache || MapCache)();
    return memoized;
}
// Expose `MapCache`.
memoize.Cache = MapCache;
function eq(value, other) {
    return value === other || (value !== value && other !== other);
}
var isArguments = baseIsArguments(function () { return arguments; }()) ? baseIsArguments : function (value) {
    return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
var isArray = Array.isArray;
function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
var isBuffer = nativeIsBuffer || stubFalse;
function isEqual(depth, value, other) {
    return baseIsEqual(depth, value, other);
}
exports.isEqual = isEqual;
function isFunction(value) {
    if (!isObject(value)) {
        return false;
    }
    var tag = baseGetTag(value);
    return tag === funcTag || tag === genTag || tag === asyncTag || tag === proxyTag;
}
function isLength(value) {
    return typeof value === "number" && value > -1 && value % 1 === 0 && value <= MAX_SAFE_INTEGER;
}
function isObject(value) {
    var type = typeof value;
    return value != null && (type === "object" || type === "function");
}
function isObjectLike(value) {
    return value != null && typeof value === "object";
}
var isMap = baseIsMap;
var isSet = baseIsSet;
var isTypedArray = baseIsTypedArray;
function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
function stubArray() {
    return [];
}
function stubFalse() {
    return false;
}
function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
        (value === undefined && !(key in object))) {
        baseAssignValue(object, key, value);
    }
}
function baseClone(depth, value, bitmask, customizer, key, object, stack) {
    if (depth <= 0) {
        throw new RecursionError_1.default("Recursive depth reached while cloning object");
    }
    var result;
    var isDeep = bitmask & CLONE_DEEP_FLAG;
    var isFlat = bitmask & CLONE_FLAT_FLAG;
    var isFull = bitmask & CLONE_SYMBOLS_FLAG;
    if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== undefined) {
        return result;
    }
    if (!isObject(value)) {
        return value;
    }
    var isArr = isArray(value);
    if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
            return copyArray(value, result);
        }
    }
    else {
        var tag = getTag(value);
        var isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) {
            return cloneBuffer(value, !!isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
            result = (isFlat || isFunc) ? {} : initCloneObject(value);
            if (!isDeep) {
                return isFlat
                    ? copySymbolsIn(value, baseAssignIn(result, value))
                    : copySymbols(value, baseAssign(result, value));
            }
        }
        else {
            if (!cloneableTags[tag]) {
                return object ? value : {};
            }
            result = initCloneByTag(value, tag, !!isDeep);
        }
    }
    // Check for circular references and return its corresponding clone.
    stack = (!stack) ? new Stack() : stack;
    var stacked = stack.get(value);
    if (stacked) {
        return stacked;
    }
    stack.set(value, result);
    if (isSet(value)) {
        value.forEach(function (subValue) {
            result.add(baseClone(depth - 1, subValue, bitmask, customizer, subValue, value, stack));
        });
    }
    else if (isMap(value)) {
        value.forEach(function (subValue, key) {
            result.set(key, baseClone(depth - 1, subValue, bitmask, customizer, key, value, stack));
        });
    }
    var keysFunc = isFull ? (isFlat ? getAllKeysIn : getAllKeys) : (isFlat ? keysIn : keys);
    var props = isArr ? undefined : keysFunc(value);
    arrayEach(props || value, function (subValue, key) {
        if (props) {
            key = subValue;
            subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(depth - 1, subValue, bitmask, customizer, key, value, stack));
    });
    return result;
}
function cloneDeep(depth, value) {
    return baseClone(depth, value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}
exports.cloneDeep = cloneDeep;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(43), __webpack_require__(44)(module)))

/***/ }),
/* 43 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractCydranError_1 = __webpack_require__(3);
var RecursionError = /** @class */ (function (_super) {
    __extends(RecursionError, _super);
    function RecursionError(msg, reps) {
        return _super.call(this, msg, reps) || this;
    }
    return RecursionError;
}(AbstractCydranError_1.CydranError));
exports.default = RecursionError;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Level_1 = __importDefault(__webpack_require__(12));
var ObjectUtils_1 = __webpack_require__(0);
var LOGGER_NAME_LENGTH = 20;
var LoggerImpl = /** @class */ (function () {
    function LoggerImpl(name, loggerService) {
        ObjectUtils_1.requireNotNull(name, "name");
        if (name.length < LOGGER_NAME_LENGTH) {
            var count = LOGGER_NAME_LENGTH - name.length;
            while (count > 0) {
                name = name + " ";
                --count;
            }
        }
        this.name = name;
        this.loggerService = loggerService;
    }
    LoggerImpl.prototype.trace = function (payload, error) {
        this.loggerService.log(this, Level_1.default.TRACE, payload, error);
    };
    LoggerImpl.prototype.ifTrace = function (payloadFn, error) {
        if (payloadFn !== null && this.isTrace()) {
            this.trace(payloadFn(), error);
        }
    };
    LoggerImpl.prototype.debug = function (payload, error) {
        this.loggerService.log(this, Level_1.default.DEBUG, payload, error);
    };
    LoggerImpl.prototype.ifDebug = function (payloadFn, error) {
        if (payloadFn !== null && this.isDebug()) {
            this.debug(payloadFn(), error);
        }
    };
    LoggerImpl.prototype.info = function (payload, error) {
        this.loggerService.log(this, Level_1.default.INFO, payload, error);
    };
    LoggerImpl.prototype.ifInfo = function (payloadFn, error) {
        if (payloadFn !== null && this.isInfo()) {
            this.info(payloadFn(), error);
        }
    };
    LoggerImpl.prototype.warn = function (payload, error) {
        this.loggerService.log(this, Level_1.default.WARN, payload, error);
    };
    LoggerImpl.prototype.ifWarn = function (payloadFn, error) {
        if (payloadFn !== null && this.isWarn()) {
            this.warn(payloadFn(), error);
        }
    };
    LoggerImpl.prototype.error = function (payload, error) {
        this.loggerService.log(this, Level_1.default.ERROR, payload, error);
    };
    LoggerImpl.prototype.ifError = function (payloadFn, error) {
        if (payloadFn !== null && this.isError()) {
            this.error(payloadFn(), error);
        }
    };
    LoggerImpl.prototype.fatal = function (payload, error) {
        this.loggerService.log(this, Level_1.default.FATAL, payload, error);
    };
    LoggerImpl.prototype.ifFatal = function (payloadFn, error) {
        if (payloadFn !== null && this.isFatal()) {
            this.fatal(payloadFn(), error);
        }
    };
    LoggerImpl.prototype.isTrace = function () {
        return this.loggerService.isTrace();
    };
    LoggerImpl.prototype.isDebug = function () {
        return this.loggerService.isDebug();
    };
    LoggerImpl.prototype.isInfo = function () {
        return this.loggerService.isInfo();
    };
    LoggerImpl.prototype.isWarn = function () {
        return this.loggerService.isWarn();
    };
    LoggerImpl.prototype.isError = function () {
        return this.loggerService.isError();
    };
    LoggerImpl.prototype.isFatal = function () {
        return this.loggerService.isFatal();
    };
    LoggerImpl.prototype.isDisabled = function () {
        return this.loggerService.isDisabled();
    };
    LoggerImpl.prototype.getName = function () {
        return this.name;
    };
    return LoggerImpl;
}());
exports.default = LoggerImpl;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Level_1 = __importDefault(__webpack_require__(12));
var ConsoleOutputStrategy = /** @class */ (function () {
    function ConsoleOutputStrategy() {
    }
    ConsoleOutputStrategy.getNow = function () {
        var now = new Date();
        return now.getUTCFullYear()
            + "-"
            + now.getUTCMonth()
            + ":"
            + now.getUTCDate()
            + ":"
            + now.getUTCHours()
            + ":"
            + now.getUTCMinutes()
            + ":"
            + now.getUTCSeconds()
            + ":"
            + now.getUTCMilliseconds();
    };
    ConsoleOutputStrategy.prototype.log = function (logName, level, payload, stacked) {
        if (level === Level_1.default.DISABLED) {
            return;
        }
        var preamble = ConsoleOutputStrategy.getNow() + " " + level + " [" + logName + "]";
        var shortArgs = payload instanceof Error;
        var printFullStack = !(stacked instanceof Error) ? (null !== stacked ? stacked : false) : false;
        if (level >= Level_1.default.WARN) {
            var logMsg = (shortArgs ? payload.stack : payload);
            var errMsg = (stacked instanceof Error) ? stacked.stack : "";
            var secondPreamble = (shortArgs ? "" : ((stacked) ? " - %s" : ""));
            switch (level) {
                case Level_1.default.WARN:
                    // tslint:disable-next-line
                    console.warn("%c" + preamble + secondPreamble, "color:#ff9400;", logMsg, errMsg);
                    break;
                case Level_1.default.ERROR:
                case Level_1.default.FATAL:
                default:
                    // tslint:disable-next-line
                    console.error(preamble + secondPreamble, logMsg, errMsg);
                    break;
            }
        }
        else {
            switch (level) {
                case Level_1.default.TRACE:
                    if (printFullStack) {
                        // tslint:disable-next-line
                        console.log("%c" + preamble, "color:#00752d;", payload);
                    }
                    else {
                        // tslint:disable-next-line
                        console.log("%c" + preamble, "color:#ff9400;", payload);
                    }
                    break;
                case Level_1.default.DEBUG:
                    // tslint:disable-next-line
                    console.log("%c" + preamble, "color:#00752d;", payload);
                    break;
                case Level_1.default.INFO:
                    // tslint:disable-next-line
                    console.log("%c" + preamble, "color:#2d57ca;", payload);
                    break;
                default:
                    // tslint:disable-next-line
                    console.log(preamble, payload);
                    break;
            }
        }
    };
    return ConsoleOutputStrategy;
}());
exports.default = ConsoleOutputStrategy;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.extractAttributes = exports.extractParams = void 0;
function extractParams(tagName, el) {
    var result = {};
    // tslint:disable-next-line
    for (var i = 0; i < el.children.length; i++) {
        var child = el.children[i];
        if (child.tagName.toLowerCase() === tagName.toLowerCase()) {
            var paramName = child.getAttribute("name");
            var paramValue = child.getAttribute("value");
            result[paramName] = paramValue;
        }
    }
    return result;
}
exports.extractParams = extractParams;
function extractAttributes(prefix, el) {
    var result = {};
    var lowerCasePrefix = prefix.toLowerCase() + ":";
    // tslint:disable-next-line
    for (var i = 0; i < el.attributes.length; i++) {
        var attribute = el.attributes[i];
        var name_1 = attribute.name.toLowerCase();
        if (name_1.indexOf(lowerCasePrefix) === 0) {
            var paramName = name_1.slice(lowerCasePrefix.length);
            var paramValue = attribute.value;
            result[paramName] = paramValue;
        }
    }
    return result;
}
exports.extractAttributes = extractAttributes;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ObjectUtils_1 = __webpack_require__(0);
var ListenerImpl = /** @class */ (function () {
    function ListenerImpl(channelName, contextFn) {
        this.mappings = {};
        this.channelName = ObjectUtils_1.requireNotNull(channelName, "channelName");
        this.contextFn = ObjectUtils_1.requireNotNull(contextFn, "contextFn");
    }
    ListenerImpl.prototype.receive = function (messageName, payload) {
        var mappings = this.mappings[messageName];
        if (!mappings) {
            return;
        }
        for (var _i = 0, mappings_1 = mappings; _i < mappings_1.length; _i++) {
            var mapping = mappings_1[_i];
            mapping.call(this.contextFn(), payload);
        }
    };
    ListenerImpl.prototype.register = function (messageName, fn) {
        if (!this.mappings[messageName]) {
            this.mappings[messageName] = [];
        }
        this.mappings[messageName].push(fn);
    };
    ListenerImpl.prototype.getChannelName = function () {
        return this.channelName;
    };
    ListenerImpl.prototype.dispose = function () {
        this.mappings = {};
        this.contextFn = null;
    };
    return ListenerImpl;
}());
exports.default = ListenerImpl;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UndefinedValidatorsImpl = /** @class */ (function () {
    function UndefinedValidatorsImpl(name, value, consumer) {
        this.name = name;
        this.value = value;
        this.consumer = consumer;
    }
    UndefinedValidatorsImpl.prototype.matches = function (regex) {
        return this;
    };
    UndefinedValidatorsImpl.prototype.isDefined = function () {
        this.consumer(this.name + " must be defined");
        return this;
    };
    UndefinedValidatorsImpl.prototype.oneOf = function () {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i] = arguments[_i];
        }
        return this;
    };
    UndefinedValidatorsImpl.prototype.requireIfDefined = function (name, requiredValue) {
        return this;
    };
    UndefinedValidatorsImpl.prototype.requireIfEquals = function (expected, name, requiredValue) {
        return this;
    };
    UndefinedValidatorsImpl.prototype.requireIfTrue = function (test) {
        if (test) {
            this.consumer(this.name + " must be defined if " + this.name);
        }
        return this;
    };
    UndefinedValidatorsImpl.prototype.disallowIfTrue = function (test, message) {
        return this;
    };
    UndefinedValidatorsImpl.prototype.notEmpty = function () {
        return this;
    };
    UndefinedValidatorsImpl.prototype.reject = function (message) {
        this.consumer(this.name + " " + message);
        return this;
    };
    return UndefinedValidatorsImpl;
}());
exports.default = UndefinedValidatorsImpl;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ObjectUtils_1 = __webpack_require__(0);
var DefinedValidatorsImpl = /** @class */ (function () {
    function DefinedValidatorsImpl(name, value, consumer) {
        this.name = name;
        this.value = value;
        this.consumer = consumer;
    }
    DefinedValidatorsImpl.prototype.matches = function (regex) {
        if (!regex.test(this.value + '')) {
            this.consumer(this.name + " must match " + regex);
        }
        return this;
    };
    DefinedValidatorsImpl.prototype.isDefined = function () {
        return this;
    };
    DefinedValidatorsImpl.prototype.oneOf = function () {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i] = arguments[_i];
        }
        var invalid = true;
        for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
            var option = options_1[_a];
            if (this.value === option) {
                invalid = false;
                break;
            }
        }
        if (invalid) {
            var message = this.name + " must be one of: ";
            var afterFirst = false;
            for (var _b = 0, options_2 = options; _b < options_2.length; _b++) {
                var option = options_2[_b];
                if (afterFirst) {
                    message += ", ";
                }
                message += option;
                afterFirst = true;
            }
            this.consumer(message);
        }
        return this;
    };
    DefinedValidatorsImpl.prototype.requireIfDefined = function (name, requiredValue) {
        if (!ObjectUtils_1.isDefined(requiredValue)) {
            this.consumer(name + " must be defined if " + this.name + " is defined");
        }
        return this;
    };
    DefinedValidatorsImpl.prototype.requireIfEquals = function (expected, name, requiredValue) {
        if (this.value === expected && !ObjectUtils_1.isDefined(requiredValue)) {
            this.consumer(name + " must be defined if " + this.name + " is " + expected);
        }
        return this;
    };
    DefinedValidatorsImpl.prototype.requireIfTrue = function (test) {
        return this;
    };
    DefinedValidatorsImpl.prototype.disallowIfTrue = function (test, message) {
        if (test) {
            this.consumer(this.name + " must not be defined " + message);
        }
        return this;
    };
    DefinedValidatorsImpl.prototype.notEmpty = function () {
        if ((this.value + '').trim() === "") {
            this.consumer(this.name + " must not be empty");
        }
        return this;
    };
    DefinedValidatorsImpl.prototype.reject = function (message) {
        this.consumer(this.name + " " + message);
        return this;
    };
    return DefinedValidatorsImpl;
}());
exports.default = DefinedValidatorsImpl;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ElementMediator_1 = __importDefault(__webpack_require__(4));
var Factories_1 = __importDefault(__webpack_require__(5));
var CSSClass = /** @class */ (function (_super) {
    __extends(CSSClass, _super);
    function CSSClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CSSClass.prototype.wire = function () {
        if (this.isMutable()) {
            this.getModelMediator().watch(this, this.onTargetChange);
        }
        else {
            this.onTargetChange(null, this.getModelMediator().get());
        }
    };
    CSSClass.prototype.unwire = function () {
        // Intentionally do nothing
    };
    CSSClass.prototype.onTargetChange = function (previous, current) {
        var oldClasses = (this.getEl().className || "").trim().split(" ");
        var newClasses = [];
        var map = current || {};
        for (var _i = 0, oldClasses_1 = oldClasses; _i < oldClasses_1.length; _i++) {
            var value = oldClasses_1[_i];
            if (!map.hasOwnProperty(value)) {
                newClasses.push(value);
            }
        }
        for (var key in map) {
            if (map.hasOwnProperty(key) && !!map[key]) {
                newClasses.push(key);
            }
        }
        this.getEl().className = newClasses.join(" ");
    };
    CSSClass.prototype.validate = function (element, check) {
        // Intentionally do nothing
    };
    return CSSClass;
}(ElementMediator_1.default));
Factories_1.default.register("class", ["*"], CSSClass);
exports.default = CSSClass;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ElementMediator_1 = __importDefault(__webpack_require__(4));
var Factories_1 = __importDefault(__webpack_require__(5));
var Reducers_1 = __webpack_require__(6);
var Enabled = /** @class */ (function (_super) {
    __extends(Enabled, _super);
    function Enabled(deps) {
        return _super.call(this, deps, false, Reducers_1.asBoolean) || this;
    }
    Enabled.prototype.wire = function () {
        if (this.isMutable()) {
            this.getModelMediator().watch(this, this.onTargetChange);
        }
        else {
            this.onTargetChange(null, this.getModelMediator().get());
        }
    };
    Enabled.prototype.unwire = function () {
        // Intentionally do nothing
    };
    Enabled.prototype.onTargetChange = function (previous, current) {
        this.getEl().disabled = !current;
    };
    Enabled.prototype.validate = function (element, check) {
        // Intentionally do nothing
    };
    return Enabled;
}(ElementMediator_1.default));
Factories_1.default.register("enabled", ["*"], Enabled);
exports.default = Enabled;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ElementMediator_1 = __importDefault(__webpack_require__(4));
var Factories_1 = __importDefault(__webpack_require__(5));
var Reducers_1 = __webpack_require__(6);
var ReadOnly = /** @class */ (function (_super) {
    __extends(ReadOnly, _super);
    function ReadOnly(deps) {
        return _super.call(this, deps, false, Reducers_1.asBoolean) || this;
    }
    ReadOnly.prototype.populate = function () {
        this.onTargetChange(null, this.getModelMediator().get());
    };
    ReadOnly.prototype.wire = function () {
        if (this.isMutable()) {
            this.getModelMediator().watch(this, this.onTargetChange);
        }
    };
    ReadOnly.prototype.unwire = function () {
        // Intentionally do nothing
    };
    ReadOnly.prototype.onTargetChange = function (previous, current) {
        this.getEl().readOnly = current;
    };
    ReadOnly.prototype.validate = function (element, check) {
        // Intentionally do nothing
    };
    return ReadOnly;
}(ElementMediator_1.default));
Factories_1.default.register("readonly", ["*"], ReadOnly);
exports.default = ReadOnly;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ElementMediator_1 = __importDefault(__webpack_require__(4));
var Factories_1 = __importDefault(__webpack_require__(5));
var Style = /** @class */ (function (_super) {
    __extends(Style, _super);
    function Style() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Style.prototype.populate = function () {
        this.onTargetChange(null, this.getModelMediator().get());
    };
    Style.prototype.wire = function () {
        if (this.isMutable()) {
            this.getModelMediator().watch(this, this.onTargetChange);
        }
    };
    Style.prototype.unwire = function () {
        // Intentionally do nothing
    };
    Style.prototype.onTargetChange = function (previous, current) {
        if (current === null) {
            return;
        }
        for (var key in current) {
            if (!current.hasOwnProperty(key)) {
                continue;
            }
            this.getEl().style[key] = current[key] + "";
        }
    };
    Style.prototype.validate = function (element, check) {
        // Intentionally do nothing
    };
    return Style;
}(ElementMediator_1.default));
Factories_1.default.register("style", ["*"], Style);
exports.default = Style;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ElementMediator_1 = __importDefault(__webpack_require__(4));
var Constants_1 = __webpack_require__(2);
var Events_1 = __importDefault(__webpack_require__(17));
var Factories_1 = __importDefault(__webpack_require__(5));
var Reducers_1 = __webpack_require__(6);
var ForceFocus = /** @class */ (function (_super) {
    __extends(ForceFocus, _super);
    function ForceFocus(deps) {
        return _super.call(this, deps, false, Reducers_1.asBoolean) || this;
    }
    ForceFocus.prototype.wire = function () {
        this.bridge("focusout");
        this.on("focusout").forChannel("dom").invoke(this.handleFocus);
        this.on(Events_1.default.COMPONENT_NESTING_CHANGED).forChannel(Constants_1.INTERNAL_CHANNEL_NAME).invoke(this.handleFocus);
        this.shouldFocus = this.getModelMediator().get();
        if (this.isMutable()) {
            this.getModelMediator().watch(this, this.onTargetChange);
        }
        this.handleFocus();
    };
    ForceFocus.prototype.unwire = function () {
        // Intentionally do nothing
    };
    ForceFocus.prototype.handleFocus = function () {
        if (this.shouldFocus) {
            this.getEl().focus();
        }
    };
    ForceFocus.prototype.onTargetChange = function (previous, current) {
        this.shouldFocus = current;
        this.handleFocus();
    };
    ForceFocus.prototype.validate = function (element, check) {
        // Intentionally do nothing
    };
    return ForceFocus;
}(ElementMediator_1.default));
Factories_1.default.register("force-focus", ["*"], ForceFocus);
exports.default = ForceFocus;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ElementMediator_1 = __importDefault(__webpack_require__(4));
var Factories_1 = __importDefault(__webpack_require__(5));
/**
 *
 */
var MultiSelectValueModel = /** @class */ (function (_super) {
    __extends(MultiSelectValueModel, _super);
    function MultiSelectValueModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultiSelectValueModel.prototype.wire = function () {
        this.bridge("input");
        this.on("input").forChannel("dom").invoke(this.handleInput);
        this.getModelMediator().watch(this, this.onTargetChange);
    };
    MultiSelectValueModel.prototype.unwire = function () {
        // Intentionally do nothing
    };
    MultiSelectValueModel.prototype.populate = function () {
        this.onTargetChange(null, this.getModelMediator().get());
    };
    MultiSelectValueModel.prototype.handleInput = function (event) {
        var _this = this;
        if (this.getEl().multiple) {
            var selectedValues_1 = [];
            for (var i = 0; i < this.getEl().selectedOptions.length; i++) {
                var optValue = this.getEl().selectedOptions.item(i).getAttribute("value");
                selectedValues_1.push(optValue);
            }
            this.$apply(function () {
                _this.getModelMediator().set(selectedValues_1);
            }, []);
        }
        else {
            this.$apply(function () {
                _this.getModelMediator().set(_this.getEl()["value"]);
            }, []);
        }
    };
    MultiSelectValueModel.prototype.onTargetChange = function (previous, current) {
        if (this.getEl().multiple) {
            current = (current === null) ? [] : current;
            for (var i = 0; i < this.getEl().options.length; i++) {
                var element = this.getEl().options.item(i);
                element.selected = (current.indexOf(element.value) !== -1);
            }
        }
        else {
            this.getEl().value = current;
        }
    };
    MultiSelectValueModel.prototype.validate = function (element, check) {
        // Intentionally do nothing
    };
    return MultiSelectValueModel;
}(ElementMediator_1.default));
Factories_1.default.register("model", ["select"], MultiSelectValueModel);
exports.default = MultiSelectValueModel;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ElementMediator_1 = __importDefault(__webpack_require__(4));
var Factories_1 = __importDefault(__webpack_require__(5));
/**
 *
 */
var ValuedModel = /** @class */ (function (_super) {
    __extends(ValuedModel, _super);
    function ValuedModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValuedModel.prototype.wire = function () {
        this.bridge("input");
        this.on("input").forChannel("dom").invoke(this.handleInput);
        this.getModelMediator().watch(this, this.onTargetChange);
    };
    ValuedModel.prototype.unwire = function () {
        // Intentionally do nothing
    };
    ValuedModel.prototype.handleInput = function (event) {
        var _this = this;
        this.$apply(function () {
            _this.getModelMediator().set(_this.getEl().value);
        }, []);
    };
    ValuedModel.prototype.onTargetChange = function (previous, current) {
        this.getEl().value = current;
    };
    ValuedModel.prototype.validate = function (element, check) {
        // Intentionally do nothing
    };
    return ValuedModel;
}(ElementMediator_1.default));
Factories_1.default.register("model", ["textarea"], ValuedModel);
exports.default = ValuedModel;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ElementMediator_1 = __importDefault(__webpack_require__(4));
var Factories_1 = __importDefault(__webpack_require__(5));
/**
 *
 */
var InputValueModel = /** @class */ (function (_super) {
    __extends(InputValueModel, _super);
    function InputValueModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputValueModel.prototype.wire = function () {
        this.bridge("input");
        var isRadio = this.getEl().type.toLowerCase() === "radio";
        this.on("input").forChannel("dom").invoke(isRadio ? this.handleRadioInput : this.handleInput);
        this.getModelMediator().watch(this, (isRadio ? this.onRadioTargetChange : this.onTargetChange));
    };
    InputValueModel.prototype.unwire = function () {
        // Intentionally do nothing
    };
    InputValueModel.prototype.handleInput = function (event) {
        var _this = this;
        this.$apply(function () {
            _this.getModelMediator().set(_this.getEl().value);
        }, []);
    };
    InputValueModel.prototype.handleRadioInput = function (event) {
        var _this = this;
        if (this.getEl().checked) {
            this.$apply(function () {
                _this.getModelMediator().set(_this.getEl().value);
            }, []);
        }
    };
    InputValueModel.prototype.onTargetChange = function (previous, current) {
        this.getEl().value = current;
    };
    InputValueModel.prototype.onRadioTargetChange = function (previous, current) {
        if (this.getEl().value === current) {
            this.getEl().checked = true;
        }
    };
    InputValueModel.prototype.validate = function (element, check) {
        // Intentionally do nothing
    };
    return InputValueModel;
}(ElementMediator_1.default));
Factories_1.default.register("model", ["input"], InputValueModel);
exports.default = InputValueModel;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ElementMediator_1 = __importDefault(__webpack_require__(4));
var Factories_1 = __importDefault(__webpack_require__(5));
var Reducers_1 = __webpack_require__(6);
/**
 *
 */
var Hidden = /** @class */ (function (_super) {
    __extends(Hidden, _super);
    function Hidden(deps) {
        return _super.call(this, deps, false, Reducers_1.asBoolean) || this;
    }
    Hidden.prototype.wire = function () {
        if (this.isMutable()) {
            this.getModelMediator().watch(this, this.onTargetChange);
        }
        else {
            this.onTargetChange(null, this.getModelMediator().get());
        }
    };
    Hidden.prototype.unwire = function () {
        // Intentionally do nothing
    };
    Hidden.prototype.onTargetChange = function (previous, current) {
        this.getEl().hidden = current;
    };
    Hidden.prototype.validate = function (element, check) {
        // Intentionally do nothing
    };
    return Hidden;
}(ElementMediator_1.default));
Factories_1.default.register("hidden", ["*"], Hidden);
exports.default = Hidden;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ElementMediator_1 = __importDefault(__webpack_require__(4));
var Factories_1 = __importDefault(__webpack_require__(5));
var Reducers_1 = __webpack_require__(6);
var ElementReferenceImpl_1 = __importDefault(__webpack_require__(25));
/**
 *
 */
var If = /** @class */ (function (_super) {
    __extends(If, _super);
    function If(deps) {
        return _super.call(this, deps, false, Reducers_1.asBoolean, false) || this;
    }
    If.prototype.wire = function () {
        this.reference = new ElementReferenceImpl_1.default(this.getEl(), "Hidden");
        if (this.isMutable()) {
            this.getModelMediator().watch(this, this.onTargetChange);
        }
        else {
            this.onTargetChange(null, this.getModelMediator().get());
        }
    };
    If.prototype.unwire = function () {
        // Intentionally do nothing
    };
    If.prototype.onTargetChange = function (previous, current) {
        this.reference.set(current ? this.getEl() : null);
    };
    If.prototype.validate = function (element, check) {
        // Intentionally do nothing
    };
    return If;
}(ElementMediator_1.default));
Factories_1.default.register("if", ["*"], If);
exports.default = If;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Evaluator_1 = __importDefault(__webpack_require__(63));
var ScopeImpl_1 = __importDefault(__webpack_require__(10));
var Constants_1 = __webpack_require__(2);
var ElementMediator_1 = __importDefault(__webpack_require__(4));
var Factories_1 = __importDefault(__webpack_require__(5));
var GeneratedIdStrategyImpl_1 = __importDefault(__webpack_require__(65));
var NoneIdStrategyImpl_1 = __importDefault(__webpack_require__(67));
var UtilityComponentFactoryImpl_1 = __importDefault(__webpack_require__(68));
var ItemComponentFactoryImpl_1 = __importDefault(__webpack_require__(106));
var EmbeddedComponentFactoryImpl_1 = __importDefault(__webpack_require__(108));
var InvalidIdStrategyImpl_1 = __importDefault(__webpack_require__(109));
var ExpressionIdStrategyImpl_1 = __importDefault(__webpack_require__(110));
var Reducers_1 = __webpack_require__(6);
var ObjectUtils_1 = __webpack_require__(0);
var DomUtils_1 = __webpack_require__(7);
var AmbiguousMarkupError_1 = __importDefault(__webpack_require__(111));
var ValidationRegExp_1 = __webpack_require__(8);
var DEFAULT_ID_KEY = "id";
/**
 *
 */
var Each = /** @class */ (function (_super) {
    __extends(Each, _super);
    function Each(deps) {
        var _this = _super.call(this, deps, true, Reducers_1.asIdentity) || this;
        _this.idStrategy = null;
        _this.elIsSelect = (_this.getEl().tagName.toLowerCase() === "select");
        _this.populationComplete = false;
        return _this;
    }
    Each.prototype.wire = function () {
        var _this = this;
        this.map = {};
        this.empty = null;
        this.ids = [];
        this.itemFactory = null;
        this.alternatives = [];
        this.localScope = new ScopeImpl_1.default(false);
        var modelFn = function () { return _this.getModelFn(); };
        var itemFn = function () { return _this.scopeItem; };
        this.localScope.setParent(this.getParent().scope());
        this.localScope.add("m", modelFn);
        this.localScope.add("v", itemFn);
        this.getModelMediator().watch(this, this.onTargetChange);
        var idKey = this.getParams().idkey || DEFAULT_ID_KEY;
        var idExpression = this.getParams().expression;
        var mode = this.getParams().mode || null;
        switch (mode) {
            case "generated":
                this.idStrategy = new GeneratedIdStrategyImpl_1.default(idKey);
                break;
            case "none":
                this.idStrategy = new NoneIdStrategyImpl_1.default(idKey);
                break;
            case "expression":
                this.idStrategy = new ExpressionIdStrategyImpl_1.default(idExpression);
                break;
            default:
                this.idStrategy = new InvalidIdStrategyImpl_1.default();
        }
        this.idStrategy.init();
        var children = this.getEl().children;
        // tslint:disable-next-line
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if ("template" !== child.nodeName.toLowerCase()) {
                continue;
            }
            var template = child;
            var type = this.getExtractor().extract(template, "type");
            switch (type) {
                case "empty":
                    this.empty = this.createFactory(template, UtilityComponentFactoryImpl_1.default).create();
                    break;
                case "first":
                    this.first = this.createFactory(template, UtilityComponentFactoryImpl_1.default).create();
                    break;
                case "after":
                    this.last = this.createFactory(template, UtilityComponentFactoryImpl_1.default).create();
                    break;
                case "alt":
                    var expression = this.getExtractor().extract(template, "test");
                    this.alternatives.push({
                        factory: this.createFactory(template, ItemComponentFactoryImpl_1.default),
                        test: new Evaluator_1.default(expression, this.localScope)
                    });
                    break;
                case "item":
                    this.itemFactory = this.createFactory(template, ItemComponentFactoryImpl_1.default);
                    break;
            }
        }
        var el = this.getEl();
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
        if (this.empty) {
            el.appendChild(this.empty.getEl());
        }
    };
    Each.prototype.unwire = function () {
        if (this.empty) {
            this.empty.dispose();
        }
        if (this.first) {
            this.first.dispose();
        }
        if (this.last) {
            this.last.dispose();
        }
        for (var key in this.map) {
            if (!this.map.hasOwnProperty(key)) {
                continue;
            }
            var component = this.map[key];
            component.dispose();
        }
        this.empty = null;
        this.map = {};
    };
    Each.prototype.requestMediatorSources = function (sources) {
        for (var key in this.map) {
            if (!this.map.hasOwnProperty(key)) {
                continue;
            }
            var component = this.map[key];
            component.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "consumeDigestionCandidates", sources);
        }
        if (this.first) {
            this.first.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "consumeDigestionCandidates", sources);
        }
        if (this.last) {
            this.last.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "consumeDigestionCandidates", sources);
        }
        if (this.empty) {
            this.empty.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "consumeDigestionCandidates", sources);
        }
    };
    Each.prototype.onTargetChange = function (previous, current) {
        if (!this.isMutable() && this.populationComplete) {
            return;
        }
        var newIds = [];
        var items = current || [];
        // tslint:disable-next-line
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (!this.idStrategy.check(item)) {
                this.idStrategy.enrich(item, i);
            }
            var id = this.idStrategy.extract(item);
            newIds.push(id);
        }
        if (!ObjectUtils_1.equals(10, this.ids, newIds)) {
            var newMap = {};
            var components = [];
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                var id = this.idStrategy.extract(item);
                var component = this.map[id] ? this.map[id] : this.create(item);
                newMap[id] = component;
                components.push(component);
                delete this.map[id];
            }
            for (var key in this.map) {
                if (this.map.hasOwnProperty(key)) {
                    var component = this.map[key];
                    component.dispose();
                    delete this.map[key];
                }
            }
            this.map = newMap;
            var el = this.getEl();
            while (el.firstChild) {
                el.removeChild(el.lastChild);
            }
            if (components.length === 0) {
                if (this.empty) {
                    el.appendChild(this.empty.getEl());
                }
            }
            else {
                var workingEl = (this.elIsSelect) ? el : DomUtils_1.createDocumentFragmentOffDom();
                if (this.first) {
                    workingEl.appendChild(this.first.getEl());
                }
                for (var _a = 0, components_1 = components; _a < components_1.length; _a++) {
                    var component = components_1[_a];
                    workingEl.appendChild(component.getEl());
                }
                if (this.last) {
                    workingEl.appendChild(this.last.getEl());
                }
                if (!this.elIsSelect) {
                    el.appendChild(workingEl);
                }
            }
        }
        this.ids = newIds;
        this.populationComplete = true;
    };
    Each.prototype.validate = function (element, check) {
        check(this.getMediatorPrefix() + ":mode", this.getParams().mode)
            .isDefined()
            .oneOf("none", "generated", "expression")
            .requireIfEquals("expression", this.getMediatorPrefix() + ":expression", this.getParams().expression);
        check(this.getMediatorPrefix() + ":idkey", this.getParams().idkey).notEmpty();
        check(this.getMediatorPrefix() + ":expression", this.getParams().expression).notEmpty();
        if (this.getEl().children.length > 0) {
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < this.getEl().children.length; i++) {
                var child = this.getEl().children[i];
                if (child.tagName.toLowerCase() !== "template") {
                    check(DomUtils_1.elementAsString(child)).reject("not allowed as a child element");
                    continue;
                }
                var template = child;
                check(this.getExtractor().asTypePrefix("type") + " attribute on " + DomUtils_1.elementAsString(template), this.getExtractor().extract(template, "type"))
                    .isDefined()
                    .oneOf("empty", "first", "after", "alt", "item")
                    .requireIfEquals("alt", this.getExtractor().asTypePrefix("test"), this.getExtractor().extract(template, "test"));
                check(this.getExtractor().asTypePrefix("component") + " attribute on " + DomUtils_1.elementAsString(template), this.getExtractor().extract(template, "component"))
                    .requireIfTrue(template.content.childElementCount === 0)
                    .disallowIfTrue(template.content.childElementCount > 0, "if a template body is supplied")
                    .matches(ValidationRegExp_1.VALID_ID);
                check(this.getExtractor().asTypePrefix("module") + " attribute on " + DomUtils_1.elementAsString(template), this.getExtractor().extract(template, "module"))
                    .disallowIfTrue(template.content.childElementCount > 0, "if a template body is supplied")
                    .matches(ValidationRegExp_1.VALID_ID);
            }
        }
    };
    Each.prototype.create = function (item) {
        var factory = this.itemFactory;
        this.scopeItem = item;
        try {
            if (this.alternatives.length > 0) {
                for (var _i = 0, _a = this.alternatives; _i < _a.length; _i++) {
                    var alternative = _a[_i];
                    if (alternative.test.test()) {
                        factory = alternative.factory;
                        break;
                    }
                }
            }
        }
        finally {
            this.scopeItem = null;
        }
        return factory.create(item);
    };
    Each.prototype.createFactory = function (template, factory) {
        var componentId = this.getExtractor().extract(template, "component");
        var moduleId = this.getExtractor().extract(template, "module");
        var hasComponentId = ObjectUtils_1.isDefined(componentId) && componentId.trim().length > 0;
        // TODO - Eliminate redundant validation, if possible
        if (template.content.childElementCount > 0 && hasComponentId) {
            throw new AmbiguousMarkupError_1.default("Ambiguous component definition in template for repeat on expression: "
                + this.getExpression() + " and markup: " + template.innerHTML);
        }
        if (template.content.childElementCount > 1) {
            throw new AmbiguousMarkupError_1.default("Template definitions must only have one top-level tag in repeat on expression: "
                + this.getExpression() + " and markup: " + template.innerHTML);
        }
        return (hasComponentId)
            ? new EmbeddedComponentFactoryImpl_1.default(this.getModule(), componentId, moduleId, this.getParent(), this.getParentId())
            : new factory(this.getModule(), template.innerHTML.trim(), this.getParent().getPrefix(), this.getParent(), this.getParentId(), this.getModelFn());
    };
    return Each;
}(ElementMediator_1.default));
Factories_1.default.register("each", ["*"], Each);
exports.default = Each;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LoggerFactory_1 = __importDefault(__webpack_require__(1));
var Evaluator = /** @class */ (function () {
    function Evaluator(expression, scope) {
        this.logger = LoggerFactory_1.default.getLogger("Evaluator: " + expression);
        this.expression = expression;
        this.scope = scope;
        this.code = '"use strict"; ' + scope.getCode() + " return (" + this.expression + ");";
    }
    Evaluator.prototype.test = function () {
        var value = null;
        try {
            value = !!Function(this.code).apply({}, [this.scope.getItems()]);
        }
        catch (e) {
            this.logger.error("\nAn exception (" + e.name + ") was thrown invoking the element mediator expression: "
                + this.expression + "\n\nIn context:\n" + this.code + "\n\nException message: " + e.message + "\n\n", e);
        }
        return value;
    };
    return Evaluator;
}());
exports.default = Evaluator;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractCydranError_1 = __webpack_require__(3);
var ScopeError = /** @class */ (function (_super) {
    __extends(ScopeError, _super);
    function ScopeError(msg, reps) {
        return _super.call(this, msg, reps) || this;
    }
    return ScopeError;
}(AbstractCydranError_1.CydranError));
exports.default = ScopeError;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UuidUtils_1 = __webpack_require__(66);
var ObjectUtils_1 = __webpack_require__(0);
var GeneratedIdStrategyImpl = /** @class */ (function () {
    function GeneratedIdStrategyImpl(idKey) {
        this.idKey = idKey;
    }
    GeneratedIdStrategyImpl.prototype.check = function (item) {
        return ObjectUtils_1.isDefined(item[this.idKey]);
    };
    GeneratedIdStrategyImpl.prototype.enrich = function (item, index) {
        item[this.idKey] = UuidUtils_1.uuidV4();
    };
    GeneratedIdStrategyImpl.prototype.extract = function (item) {
        return item[this.idKey] + "";
    };
    GeneratedIdStrategyImpl.prototype.init = function () {
        // Intentionally do nothing
    };
    return GeneratedIdStrategyImpl;
}());
exports.default = GeneratedIdStrategyImpl;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.uuidV4 = void 0;
var CHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
function uuidV4() {
    var chars = CHARS;
    var uuid = new Array(36);
    var rnd = 0;
    var r = null;
    for (var i = 0; i < 36; i++) {
        if (i === 8 || i === 13 || i === 18 || i === 23) {
            uuid[i] = '-';
        }
        else if (i === 14) {
            uuid[i] = '4';
        }
        else {
            if (rnd <= 0x02) {
                rnd = 0x2000000 + (Math.random() * 0x1000000) | 0;
            }
            r = rnd & 0xf;
            rnd = rnd >> 4;
            uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r];
        }
    }
    return uuid.join('');
}
exports.uuidV4 = uuidV4;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ObjectUtils_1 = __webpack_require__(0);
var NoneIdStrategyImpl = /** @class */ (function () {
    function NoneIdStrategyImpl(idKey) {
        this.idKey = idKey;
    }
    NoneIdStrategyImpl.prototype.check = function (item) {
        return ObjectUtils_1.isDefined(item[this.idKey]);
    };
    NoneIdStrategyImpl.prototype.enrich = function (item, index) {
        throw new Error("Missing id in field " + this.idKey + " for item at index " + index
            + ".  All repeat items must include a string convertable id to be repeated.");
    };
    NoneIdStrategyImpl.prototype.extract = function (item) {
        return item[this.idKey] + "";
    };
    NoneIdStrategyImpl.prototype.init = function () {
        // Intentionally do nothing
    };
    return NoneIdStrategyImpl;
}());
exports.default = NoneIdStrategyImpl;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var UtilityComponent_1 = __importDefault(__webpack_require__(69));
var UtilityComponentFactoryImpl = /** @class */ (function () {
    function UtilityComponentFactoryImpl(module, template, prefix, parent, parentId, parentModelFn) {
        this.module = module;
        this.template = template;
        this.prefix = prefix;
        this.parent = parent;
        this.parentId = parentId;
        this.parentModelFn = parentModelFn;
    }
    UtilityComponentFactoryImpl.prototype.create = function () {
        return new UtilityComponent_1.default(this.module, this.template, this.prefix, this.parent, this.parentId, this.parentModelFn);
    };
    return UtilityComponentFactoryImpl;
}());
exports.default = UtilityComponentFactoryImpl;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __importDefault(__webpack_require__(11));
var ComponentConfig_1 = __webpack_require__(9);
var Constants_1 = __webpack_require__(2);
var UtilityComponent = /** @class */ (function (_super) {
    __extends(UtilityComponent, _super);
    function UtilityComponent(module, template, prefix, parent, parentId, parentModelFn) {
        var _this = this;
        var config = new ComponentConfig_1.ComponentConfigImpl();
        config.withPrefix(prefix);
        config.setParentModelFn(parentModelFn);
        config.setModule(module);
        _this = _super.call(this, template, config) || this;
        _this.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "skipId", parentId);
        _this.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "setMode", "repeatable");
        _this.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "setParent", parent);
        return _this;
    }
    return UtilityComponent;
}(Component_1.default));
exports.default = UtilityComponent;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TemplateError_1 = __importDefault(__webpack_require__(18));
var UnknownRegionError_1 = __importDefault(__webpack_require__(71));
var ValidationRegExp_1 = __webpack_require__(8);
var ScopeImpl_1 = __importDefault(__webpack_require__(10));
var LoggerFactory_1 = __importDefault(__webpack_require__(1));
var SetComponentError_1 = __importDefault(__webpack_require__(72));
var Constants_1 = __webpack_require__(2);
var ComponentConfig_1 = __webpack_require__(9);
var Events_1 = __importDefault(__webpack_require__(17));
var MvvmImpl_1 = __importDefault(__webpack_require__(73));
var IdGenerator_1 = __importDefault(__webpack_require__(23));
var NamedElementOperationsImpl_1 = __importDefault(__webpack_require__(92));
var UnknownElementError_1 = __importDefault(__webpack_require__(93));
var Getter_1 = __importDefault(__webpack_require__(26));
var ModuleAffinityError_1 = __importDefault(__webpack_require__(94));
var PubSubImpl_1 = __importDefault(__webpack_require__(13));
var ModulesContextImpl_1 = __importDefault(__webpack_require__(19));
var ObjectUtils_1 = __webpack_require__(0);
var RegionImpl_1 = __importDefault(__webpack_require__(103));
var DirectEvents_1 = __webpack_require__(29);
var StringRendererImpl_1 = __importDefault(__webpack_require__(105));
var IdentityRendererImpl_1 = __importDefault(__webpack_require__(30));
var DEFAULT_COMPONENT_CONFIG = new ComponentConfig_1.ComponentConfigBuilder().build();
var ComponentInternalsImpl = /** @class */ (function () {
    function ComponentInternalsImpl(component, template, config) {
        ObjectUtils_1.requireNotNull(template, "template");
        var templateType = typeof template;
        if (templateType === "string") {
            this.renderer = new StringRendererImpl_1.default(template);
        }
        else if (templateType === "object" && ObjectUtils_1.isDefined(template["render"])) { // TODO - Explicitly check for if it is a function
            this.renderer = template;
        }
        else if (template instanceof HTMLElement) { // TODO - Correctly check for HTMLElement
            this.renderer = new IdentityRendererImpl_1.default(template);
        }
        else {
            throw new TemplateError_1.default("Template must be a string, HTMLElement or Renderer - " + templateType);
        }
        this.parentSeen = false;
        this.id = IdGenerator_1.default.INSTANCE.generate();
        this.config = (config || DEFAULT_COMPONENT_CONFIG);
        this.parentModelFn = this.config.getParentModelFn();
        this.itemFn = Constants_1.EMPTY_OBJECT_FN;
        this.parent = null;
        this.component = component;
        this.prefix = this.config.getPrefix().toLowerCase();
        this.scope = new ScopeImpl_1.default();
        if (ObjectUtils_1.isDefined(this.config.getModule())) {
            this.component[Constants_1.MODULE_FIELD_NAME] = this.config.getModule();
        }
        else {
            this.validateModulePresent();
        }
        this.flags = {
            repeatable: false
        };
        if (this.getModule()) {
            this.scope.setParent(this.getModule().getScope());
        }
        this.regions = {};
        this.regionsAsArray = [];
        this.pubSub = new PubSubImpl_1.default(this.component, this.getModule());
    }
    ComponentInternalsImpl.prototype.init = function () {
        var _this = this;
        this.mvvm = new MvvmImpl_1.default(this.id, this.component, this.getModule(), this.prefix, this.scope, this.parentModelFn);
        this.logger = LoggerFactory_1.default.getLogger(this.component.constructor.name + " Component " + this.mvvm.getId());
        this.render();
        this.mvvm.init(this.el, this, function (name, element, locked) { return _this.addRegion(name, element, locked); });
        for (var key in this.regions) {
            if (!this.regions.hasOwnProperty(key)) {
                continue;
            }
            var region = this.regions[key];
            region.populate();
        }
    };
    ComponentInternalsImpl.prototype.hasMetadata = function (name) {
        return this.getMetadata(name) ? true : false;
    };
    ComponentInternalsImpl.prototype.getMetadata = function (name) {
        ObjectUtils_1.requireNotNull(name, "name");
        return this.config.getMetadata(name);
    };
    ComponentInternalsImpl.prototype.hasRegion = function (name) {
        ObjectUtils_1.requireNotNull(name, "name");
        return ((this.regions[name]) ? true : false);
    };
    ComponentInternalsImpl.prototype.$apply = function (fn, args) {
        var actualFn = fn || Constants_1.NO_OP_FN;
        var actualArgs = args || [];
        if (this.parentSeen) {
            this.mvvm.$apply(actualFn, actualArgs);
        }
        else {
            actualFn.apply(this.component, actualArgs);
        }
    };
    ComponentInternalsImpl.prototype.evaluate = function (expression) {
        return new Getter_1.default(expression).get(this.mvvm.getScope());
    };
    ComponentInternalsImpl.prototype.getChild = function (name) {
        ObjectUtils_1.requireNotNull(name, "name");
        return this.hasRegion(name) ? this.getRegion(name).getComponent() : null;
    };
    ComponentInternalsImpl.prototype.setChild = function (name, component) {
        ObjectUtils_1.requireNotNull(name, "name");
        if (!this.hasRegion(name)) {
            throw new UnknownRegionError_1.default("Region \'%rName%\' is unknown and must be declared in component template.", { "%rName%": name });
        }
        var hasComponent = this.getRegion(name).hasComponent();
        var childAdded = !!(component !== null && !hasComponent);
        var childRemoved = !!(component === null && hasComponent);
        this.messageInternalIf(childAdded, Events_1.default.BEFORE_CHILD_ADDED, { name: name });
        this.messageInternalIf(childRemoved, Events_1.default.BEFORE_CHILD_REMOVED, { name: name });
        this.message(Constants_1.INTERNAL_CHANNEL_NAME, Events_1.default.BEFORE_CHILD_CHANGED, { name: name });
        this.getRegion(name).setComponent(component);
        this.message(Constants_1.INTERNAL_CHANNEL_NAME, Events_1.default.AFTER_CHILD_CHANGED, { name: name });
        this.messageInternalIf(childAdded, Events_1.default.AFTER_CHILD_ADDED, { name: name });
        this.messageInternalIf(childRemoved, Events_1.default.AFTER_CHILD_REMOVED, { name: name });
        this.broadcastGlobally(Constants_1.INTERNAL_CHANNEL_NAME, Events_1.default.COMPONENT_NESTING_CHANGED);
    };
    ComponentInternalsImpl.prototype.setChildFromRegistry = function (name, componentId, defaultComponentName) {
        ObjectUtils_1.requireNotNull(name, "name");
        ObjectUtils_1.requireValid(componentId, "componentId", ValidationRegExp_1.VALID_ID);
        if (!this.hasRegion(name)) {
            throw new UnknownRegionError_1.default("Region \'%rName%\' is unknown and must be declared in component template.", { "%rName%": name });
        }
        var component = this.get(componentId);
        if (!component && defaultComponentName) {
            component = this.get(defaultComponentName);
        }
        if (component) {
            this.setChild(name, component);
        }
        else {
            var error = new SetComponentError_1.default("Unable to set component %cName% on region %name%", { "%cName%": componentId, "%name%": name });
            this.getLogger().error(error);
        }
    };
    ComponentInternalsImpl.prototype.message = function (channelName, messageName, payload) {
        if (channelName !== Constants_1.INTERNAL_DIRECT_CHANNEL_NAME) {
            this.pubSub.message(channelName, messageName, payload);
            return;
        }
        switch (messageName) {
            case "setMode":
                switch (payload) {
                    case "repeatable":
                        this.flags.repeatable = true;
                        break;
                    default:
                        this.flags.repeatable = false;
                }
                break;
            case "consumeRegionDigestionCandidates":
                for (var _i = 0, _a = this.regionsAsArray; _i < _a.length; _i++) {
                    var region = _a[_i];
                    if (region.hasExpression() && region.hasComponent()) {
                        region.getComponent().message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "consumeDigestionCandidates", payload);
                    }
                }
                break;
            case "consumeDigestionCandidates":
                payload.push(this.mvvm);
                break;
            case DirectEvents_1.NESTING_CHANGED:
                this.nestingChanged();
                break;
            case "digest":
                this.digest();
                break;
            case "setParent":
                this.setParent(payload);
                break;
            case "skipId":
                this.mvvm.skipId(payload);
                break;
            case "setItemFn":
                this.setItemFn(payload);
                break;
            default:
                this.logger.warn("Unsupported internal message: " + messageName);
        }
    };
    ComponentInternalsImpl.prototype.broadcast = function (channelName, messageName, payload) {
        this.getModule().broadcast(channelName, messageName, payload);
    };
    ComponentInternalsImpl.prototype.broadcastGlobally = function (channelName, messageName, payload) {
        this.getModule().broadcastGlobally(channelName, messageName, payload);
    };
    ComponentInternalsImpl.prototype.dispose = function () {
        this.message(Constants_1.INTERNAL_CHANNEL_NAME, Events_1.default.BEFORE_DISPOSE, {});
        this.pubSub.dispose();
        this.parent = null;
        this.scope = null;
        this.regions = null;
        this.regionsAsArray = [];
    };
    ComponentInternalsImpl.prototype.getEl = function () {
        return this.el;
    };
    ComponentInternalsImpl.prototype.getComponent = function () {
        return this.component;
    };
    ComponentInternalsImpl.prototype.get = function (id) {
        return this.getModule().get(id);
    };
    ComponentInternalsImpl.prototype.getPrefix = function () {
        return this.prefix;
    };
    ComponentInternalsImpl.prototype.isConnected = function () {
        return this.parent !== null && this.parent !== undefined && this.parent.isConnected();
    };
    ComponentInternalsImpl.prototype.getScope = function () {
        return this.scope;
    };
    ComponentInternalsImpl.prototype.watch = function (expression, target, reducerFn, context) {
        ObjectUtils_1.requireNotNull(expression, "expression");
        ObjectUtils_1.requireNotNull(target, "target");
        var actualContext = ObjectUtils_1.isDefined(context) ? context : this.component;
        this.mvvm.mediate(expression, reducerFn).watch(actualContext, target);
    };
    ComponentInternalsImpl.prototype.on = function (target, messageName, channel) {
        var _this = this;
        this.pubSub.on(messageName).forChannel(channel || Constants_1.INTERNAL_CHANNEL_NAME).invoke(function (payload) { return _this.$apply(target, [payload]); });
    };
    ComponentInternalsImpl.prototype.forElement = function (name) {
        ObjectUtils_1.requireNotNull(name, "name");
        var element = this.mvvm.getNamedElement(name);
        if (!ObjectUtils_1.isDefined(element)) {
            throw new UnknownElementError_1.default("Unknown element: " + name);
        }
        return new NamedElementOperationsImpl_1.default(element);
    };
    ComponentInternalsImpl.prototype.getLogger = function () {
        return this.logger;
    };
    ComponentInternalsImpl.prototype.getModule = function () {
        return this.component[Constants_1.MODULE_FIELD_NAME];
    };
    ComponentInternalsImpl.prototype.getParent = function () {
        return this.parent;
    };
    ComponentInternalsImpl.prototype.setItemFn = function (itemFn) {
        this.itemFn = ObjectUtils_1.isDefined(itemFn) ? itemFn : Constants_1.EMPTY_OBJECT_FN;
    };
    ComponentInternalsImpl.prototype.getData = function () {
        return this.itemFn();
    };
    ComponentInternalsImpl.prototype.getFlags = function () {
        return this.flags;
    };
    ComponentInternalsImpl.prototype.getId = function () {
        return this.id;
    };
    ComponentInternalsImpl.prototype.getWatchContext = function () {
        return this.mvvm.getScope();
    };
    ComponentInternalsImpl.prototype.getConfig = function () {
        return this.config;
    };
    ComponentInternalsImpl.prototype.addRegion = function (name, element, locked) {
        if (!this.regions[name]) {
            var created = new RegionImpl_1.default(name, this, element, locked);
            this.regions[name] = created;
            this.regionsAsArray.push(created);
        }
        return this.regions[name];
    };
    ComponentInternalsImpl.prototype.getRegion = function (name) {
        return this.regions[name];
    };
    ComponentInternalsImpl.prototype.render = function () {
        this.el = this.renderer.render();
        if (this.el.tagName.toLowerCase() === "script") {
            throw new TemplateError_1.default("Component template must not use a script tag as top-level element in component "
                + this.component.constructor.name);
        }
    };
    ComponentInternalsImpl.prototype.setEl = function (el) {
        this.el = el;
    };
    ComponentInternalsImpl.prototype.validateModulePresent = function () {
        var moduleInstance = this.component[Constants_1.MODULE_FIELD_NAME];
        if (!ObjectUtils_1.isDefined(moduleInstance)) {
            if (ModulesContextImpl_1.default.getInstances().length === 0) {
                throw new ModuleAffinityError_1.default("Component " + this.component.constructor.name + " does not have affinity with a module and no stages are active.  Unable to determine component affinity");
            }
            else if (ModulesContextImpl_1.default.getInstances().length === 1) {
                this.component[Constants_1.MODULE_FIELD_NAME] = ModulesContextImpl_1.default.getInstances()[0].getDefaultModule();
            }
            else {
                throw new ModuleAffinityError_1.default("Component " + this.component.constructor.name + " does not have affinity with a module and multiple stages are active.  Unable to determine component affinity");
            }
        }
    };
    ComponentInternalsImpl.prototype.messageInternalIf = function (condition, messageName, payload) {
        if (condition) {
            this.message(Constants_1.INTERNAL_CHANNEL_NAME, messageName, payload);
        }
    };
    ComponentInternalsImpl.prototype.messageChildren = function (channelName, messageName, payload) {
        for (var id in this.regions) {
            if (!this.regions.hasOwnProperty(id)) {
                continue;
            }
            this.regions[id].message(channelName, messageName, payload);
        }
    };
    ComponentInternalsImpl.prototype.setParent = function (parent) {
        this.parentSeen = true;
        var changed = this.bothPresentButDifferent(parent, this.parent) || this.exactlyOneDefined(parent, this.parent);
        var parentAdded = !!(parent !== null && this.parent === null);
        var parentRemoved = !!(parent === null && this.parent !== null);
        this.messageInternalIf(parentAdded, Events_1.default.BEFORE_PARENT_ADDED, {});
        this.messageInternalIf(parentRemoved, Events_1.default.BEFORE_PARENT_REMOVED, {});
        this.message(Constants_1.INTERNAL_CHANNEL_NAME, Events_1.default.BEFORE_PARENT_CHANGED, {});
        this.parent = parent;
        if (changed) {
            this.nestingChanged();
        }
        if (ObjectUtils_1.isDefined(this.parent)) {
            this.digest();
        }
        this.message(Constants_1.INTERNAL_CHANNEL_NAME, Events_1.default.AFTER_PARENT_CHANGED, {});
        this.messageInternalIf(parentAdded, Events_1.default.AFTER_PARENT_ADDED, {});
        this.messageInternalIf(parentRemoved, Events_1.default.AFTER_PARENT_REMOVED, {});
    };
    ComponentInternalsImpl.prototype.nestingChanged = function () {
        if (this.isConnected() && !this.pubSub.isGlobalEnabled()) {
            this.pubSub.enableGlobal();
        }
        else if (!this.isConnected() && this.pubSub.isGlobalEnabled()) {
            this.pubSub.disableGlobal();
        }
        this.mvvm.nestingChanged();
        this.messageChildren(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, DirectEvents_1.NESTING_CHANGED);
    };
    ComponentInternalsImpl.prototype.digest = function () {
        this.$apply(Constants_1.NO_OP_FN, []);
    };
    ComponentInternalsImpl.prototype.bothPresentButDifferent = function (first, second) {
        return ObjectUtils_1.isDefined(first) && ObjectUtils_1.isDefined(second) && first.getId() !== second.getId();
    };
    ComponentInternalsImpl.prototype.exactlyOneDefined = function (first, second) {
        return ObjectUtils_1.isDefined(first) ? !ObjectUtils_1.isDefined(second) : ObjectUtils_1.isDefined(second);
    };
    return ComponentInternalsImpl;
}());
exports.default = ComponentInternalsImpl;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractCydranError_1 = __webpack_require__(3);
var UnknownRegionError = /** @class */ (function (_super) {
    __extends(UnknownRegionError, _super);
    function UnknownRegionError(msg, reps) {
        return _super.call(this, msg, reps) || this;
    }
    return UnknownRegionError;
}(AbstractCydranError_1.CydranError));
exports.default = UnknownRegionError;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractCydranError_1 = __webpack_require__(3);
var SetComponentError = /** @class */ (function (_super) {
    __extends(SetComponentError, _super);
    function SetComponentError(msg, reps) {
        return _super.call(this, msg, reps) || this;
    }
    return SetComponentError;
}(AbstractCydranError_1.CydranError));
exports.default = SetComponentError;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ScopeImpl_1 = __importDefault(__webpack_require__(10));
var Constants_1 = __webpack_require__(2);
var ModelMediatorImpl_1 = __importDefault(__webpack_require__(74));
var TemplateError_1 = __importDefault(__webpack_require__(18));
var ObjectUtils_1 = __webpack_require__(0);
var DigesterImpl_1 = __importDefault(__webpack_require__(27));
var MvvmDomWalkerImpl_1 = __importDefault(__webpack_require__(79));
var AttributeExtractorImpl_1 = __importDefault(__webpack_require__(90));
var PropertyKeys_1 = __webpack_require__(91);
var DirectEvents_1 = __webpack_require__(29);
var WALKER = new MvvmDomWalkerImpl_1.default();
var MvvmImpl = /** @class */ (function () {
    function MvvmImpl(id, model, moduleInstance, prefix, scope, parentModelFn) {
        var _this = this;
        this.id = ObjectUtils_1.requireNotNull(id, "id");
        this.extractor = new AttributeExtractorImpl_1.default(prefix);
        this.anonymousRegionNameIndex = 0;
        this.propagatingElementMediators = [];
        this.scope = new ScopeImpl_1.default(false);
        this.scope.setParent(scope);
        this.elementMediators = [];
        this.namedElements = {};
        this.mediators = [];
        this.model = model;
        this.moduleInstance = moduleInstance;
        this.validated = this.moduleInstance.getProperties().isTruthy(PropertyKeys_1.CYDRAN_DEVELOPMENT_ENABLED);
        this.components = [];
        this.mediatorsInitialized = false;
        var maxEvaluations = moduleInstance.getProperties().get(PropertyKeys_1.CYDRAN_DIGEST_MAX_EVALUATIONS);
        var configuredCloneDepth = moduleInstance.getProperties().get(PropertyKeys_1.CYDRAN_CLONE_MAX_EVALUATIONS);
        var configuredEqualsDepth = moduleInstance.getProperties().get(PropertyKeys_1.CYDRAN_EQUALS_MAX_EVALUATIONS);
        this.cloneDepth = ObjectUtils_1.isDefined(configuredCloneDepth) ? configuredCloneDepth : Constants_1.DEFAULT_CLONE_DEPTH;
        this.equalsDepth = ObjectUtils_1.isDefined(configuredEqualsDepth) ? configuredEqualsDepth : Constants_1.DEFAULT_EQUALS_DEPTH;
        this.digester = new DigesterImpl_1.default(this, this.id, function () { return _this.parent.getComponent().constructor.name; }, function () { return _this.components; }, maxEvaluations);
        var localModelFn = function () { return _this.model; };
        this.modelFn = parentModelFn ? parentModelFn : localModelFn;
        this.itemFn = function () { return _this.parent.getData(); };
        this.scope.add("m", this.modelFn);
        this.scope.add("v", this.itemFn);
    }
    MvvmImpl.prototype.init = function (el, parent, regionAddFn) {
        this.el = el;
        this.parent = parent;
        this.regionAddFn = regionAddFn;
        this.validateEl();
        WALKER.walk(this.el, this);
    };
    MvvmImpl.prototype.nestingChanged = function () {
        for (var _i = 0, _a = this.elementMediators; _i < _a.length; _i++) {
            var elementMediator = _a[_i];
            elementMediator.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, DirectEvents_1.NESTING_CHANGED);
        }
        for (var _b = 0, _c = this.components; _b < _c.length; _b++) {
            var component = _c[_b];
            component.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, DirectEvents_1.NESTING_CHANGED);
        }
    };
    MvvmImpl.prototype.dispose = function () {
        for (var _i = 0, _a = this.elementMediators; _i < _a.length; _i++) {
            var elementMediator = _a[_i];
            elementMediator.dispose();
        }
        this.elementMediators = [];
        this.components = [];
        for (var _b = 0, _c = this.components; _b < _c.length; _b++) {
            var component = _c[_b];
            component.dispose();
        }
        this.parent = null;
        this.namedElements = null;
    };
    MvvmImpl.prototype.getId = function () {
        return this.id;
    };
    MvvmImpl.prototype.getNamedElement = function (name) {
        var element = this.namedElements[name];
        return (element === undefined) ? null : element;
    };
    MvvmImpl.prototype.mediate = function (expression, reducerFn) {
        var _this = this;
        var mediator = new ModelMediatorImpl_1.default(this.model, expression, this.scope, reducerFn, function (value) { return ObjectUtils_1.clone(_this.cloneDepth, value); }, function (first, second) { return ObjectUtils_1.equals(_this.equalsDepth, first, second); });
        this.mediators.push(mediator);
        return mediator;
    };
    MvvmImpl.prototype.getScope = function () {
        return this.scope;
    };
    MvvmImpl.prototype.digest = function () {
        if (!this.mediatorsInitialized) {
            for (var _i = 0, _a = this.elementMediators; _i < _a.length; _i++) {
                var elementMediator = _a[_i];
                elementMediator.populate();
            }
            this.mediatorsInitialized = true;
        }
        if (this.parent.getFlags().repeatable) {
            this.parent.getParent().message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "digest");
        }
        else {
            this.digester.digest();
        }
    };
    MvvmImpl.prototype.requestMediators = function (consumer) {
        consumer.add(this.getId(), this.mediators);
    };
    MvvmImpl.prototype.requestMediatorSources = function (sources) {
        if (this.parent.getFlags().repeatable) {
            if (ObjectUtils_1.isDefined(this.parent.getParent())) {
                this.parent.getParent().message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "consumeDigestionCandidates", sources);
            }
        }
        this.parent.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "consumeRegionDigestionCandidates", sources);
        for (var _i = 0, _a = this.propagatingElementMediators; _i < _a.length; _i++) {
            var source = _a[_i];
            sources.push(source);
        }
    };
    MvvmImpl.prototype.getParent = function () {
        return this.parent;
    };
    MvvmImpl.prototype.getExtractor = function () {
        return this.extractor;
    };
    MvvmImpl.prototype.$apply = function (fn, args) {
        var result = fn.apply(this.model, args);
        this.digest();
        return result;
    };
    MvvmImpl.prototype.getModelFn = function () {
        return this.modelFn;
    };
    MvvmImpl.prototype.getModule = function () {
        return this.moduleInstance;
    };
    MvvmImpl.prototype.getItemFn = function () {
        return this.itemFn;
    };
    MvvmImpl.prototype.skipId = function (id) {
        this.digester.skipId(id);
    };
    MvvmImpl.prototype.getMessagables = function () {
        return this.components;
    };
    MvvmImpl.prototype.getModel = function () {
        return this.model;
    };
    MvvmImpl.prototype.validateEl = function () {
        if (this.el.tagName.toLowerCase() === "script") {
            throw new TemplateError_1.default("Templates must not have a script tag as the top level tag.");
        }
    };
    MvvmImpl.prototype.addRegion = function (name, element, locked) {
        return this.regionAddFn(name, element, locked);
    };
    MvvmImpl.prototype.createRegionName = function () {
        var name = Constants_1.ANONYMOUS_REGION_PREFIX + this.anonymousRegionNameIndex;
        ++this.anonymousRegionNameIndex;
        return name;
    };
    MvvmImpl.prototype.addMediator = function (mediator) {
        this.elementMediators.push(mediator);
    };
    MvvmImpl.prototype.addPropagatingElementMediator = function (mediator) {
        this.propagatingElementMediators.push(mediator);
    };
    MvvmImpl.prototype.addNamedElement = function (name, element) {
        this.namedElements[name] = element;
    };
    MvvmImpl.prototype.isValidated = function () {
        return this.validated;
    };
    return MvvmImpl;
}());
exports.default = MvvmImpl;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Getter_1 = __importDefault(__webpack_require__(26));
var Invoker_1 = __importDefault(__webpack_require__(75));
var LoggerFactory_1 = __importDefault(__webpack_require__(1));
var Setter_1 = __importDefault(__webpack_require__(76));
var Reducers_1 = __webpack_require__(6);
var ObjectUtils_1 = __webpack_require__(0);
var ModelMediatorImpl = /** @class */ (function () {
    function ModelMediatorImpl(model, expression, scope, reducerFn, cloneFn, equalsFn) {
        this.digested = false;
        this.reducerFn = ObjectUtils_1.isDefined(reducerFn) ? reducerFn : Reducers_1.asIdentity;
        this.model = ObjectUtils_1.requireNotNull(model, "model");
        this.expression = ObjectUtils_1.requireNotNull(expression, "expression");
        this.scope = ObjectUtils_1.requireNotNull(scope, "scope");
        this.logger = LoggerFactory_1.default.getLogger("ModelMediator: " + expression);
        this.previous = null;
        this.context = {};
        this.target = null;
        this.invoker = new Invoker_1.default(expression);
        this.getter = new Getter_1.default(expression);
        this.setter = new Setter_1.default(expression);
        this.cloneFn = ObjectUtils_1.requireNotNull(cloneFn, "cloneFn");
        this.equalsFn = ObjectUtils_1.requireNotNull(equalsFn, "equalsFn");
    }
    ModelMediatorImpl.prototype.invoke = function (params) {
        this.invoker.invoke(this.scope, params || {});
    };
    ModelMediatorImpl.prototype.get = function () {
        return this.reducerFn.apply({}, [this.getter.get(this.scope)]);
    };
    ModelMediatorImpl.prototype.set = function (value) {
        this.setter.set(this.scope, value);
    };
    ModelMediatorImpl.prototype.evaluate = function () {
        if (!this.target) {
            return false;
        }
        var changed = false;
        var value = this.get();
        if (this.digested) {
            if (this.equalsFn(this.previous, value)) {
                this.logger.ifTrace(function () { return ({ message: "Not different.", value: value }); });
            }
            else {
                if (this.logger.isTrace()) {
                    this.logger.trace({ current: value, previous: this.previous });
                }
                this.logger.trace("Invoking listener");
                this.swap(value);
                changed = true;
            }
        }
        else {
            this.swap(value);
            changed = true;
            this.digested = true;
        }
        return changed;
    };
    ModelMediatorImpl.prototype.notify = function () {
        if (this.watchDispatchPending) {
            this.target.apply(this.context, [this.watchPrevious, this.watchCurrent]);
            this.watchDispatchPending = false;
        }
    };
    ModelMediatorImpl.prototype.watch = function (context, target) {
        this.context = ObjectUtils_1.requireNotNull(context, "context");
        this.target = ObjectUtils_1.requireNotNull(target, "target");
    };
    ModelMediatorImpl.prototype.dispose = function () {
        this.model = null;
        this.previous = null;
        this.context = null;
        this.target = null;
        this.watchPrevious = null;
        this.watchCurrent = null;
        this.watchDispatchPending = false;
    };
    ModelMediatorImpl.prototype.getExpression = function () {
        return this.expression;
    };
    ModelMediatorImpl.prototype.swap = function (value) {
        var newPrevious = this.cloneFn(value);
        this.watchPrevious = this.previous;
        this.watchCurrent = value;
        this.watchDispatchPending = true;
        this.previous = newPrevious;
    };
    return ModelMediatorImpl;
}());
exports.default = ModelMediatorImpl;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LoggerFactory_1 = __importDefault(__webpack_require__(1));
var Invoker = /** @class */ (function () {
    function Invoker(expression) {
        this.expression = expression;
        this.logger = LoggerFactory_1.default.getLogger("Invoker: " + expression);
    }
    Invoker.prototype.invoke = function (scope, params) {
        var aggregateScope = {};
        var scopeItems = scope.getItems();
        for (var key in scopeItems) {
            if (!scopeItems.hasOwnProperty(key)) {
                continue;
            }
            aggregateScope[key] = scopeItems[key];
        }
        if (params !== null && params !== undefined) {
            for (var key in params) {
                if (!params.hasOwnProperty(key)) {
                    continue;
                }
                aggregateScope[key] = params[key];
            }
        }
        var aggregateScopeCode = "";
        for (var key in aggregateScope) {
            if (!aggregateScope.hasOwnProperty(key)) {
                continue;
            }
            var statement = "var " + key + " = arguments[0]['" + key + "'];\n";
            aggregateScopeCode += statement;
        }
        var code = '"use strict"; ' + aggregateScopeCode + " (" + this.expression + ");";
        try {
            Function(code).apply({}, [aggregateScope]);
        }
        catch (e) {
            this.logInvocationError(code, e);
        }
    };
    Invoker.prototype.logInvocationError = function (code, e) {
        this.logger.error("\nAn exception (" + e.name + ") was thrown invoking the element mediator expression: " + this.expression
            + "\n\nIn context:\n" + code + "\n\nException message: " + e.message + "\n\n", e);
    };
    return Invoker;
}());
exports.default = Invoker;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LoggerFactory_1 = __importDefault(__webpack_require__(1));
var Setter = /** @class */ (function () {
    function Setter(expression) {
        this.logger = LoggerFactory_1.default.getLogger("Setter: " + expression);
        this.expression = expression;
    }
    Setter.prototype.set = function (scope, value) {
        var code = '"use strict"; ' + scope.getCode() + " " + this.expression + " = arguments[1];";
        try {
            Function(code).apply({}, [scope.getItems(), value]);
        }
        catch (e) {
            this.logInvocationError(code, e);
        }
    };
    Setter.prototype.logInvocationError = function (code, e) {
        this.logger.error("\nAn exception (" + e.name + ") was thrown invoking the element mediator expression: " + this.expression
            + "\n\nIn context:\n" + code + "\n\nException message: " + e.message + "\n\n", e);
    };
    return Setter;
}());
exports.default = Setter;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LoggerFactory_1 = __importDefault(__webpack_require__(1));
var DigestionContextImpl = /** @class */ (function () {
    function DigestionContextImpl() {
        this.logger = LoggerFactory_1.default.getLogger("DigestionContextImpl");
        this.mediators = {};
    }
    DigestionContextImpl.prototype.add = function (key, mediators) {
        if (!this.mediators[key]) {
            this.mediators[key] = [];
            for (var _i = 0, mediators_1 = mediators; _i < mediators_1.length; _i++) {
                var mediator = mediators_1[_i];
                this.mediators[key].push(mediator);
            }
        }
    };
    DigestionContextImpl.prototype.digest = function () {
        var changedMediators = [];
        for (var key in this.mediators) {
            if (!this.mediators.hasOwnProperty(key)) {
                continue;
            }
            var current = this.mediators[key];
            this.digestSegment(changedMediators, current);
        }
        return changedMediators;
    };
    DigestionContextImpl.prototype.digestSegment = function (changedMediators, mediators) {
        for (var _i = 0, mediators_2 = mediators; _i < mediators_2.length; _i++) {
            var mediator = mediators_2[_i];
            var changed = false;
            try {
                changed = mediator.evaluate();
            }
            catch (e) {
                this.logger.error("Error evaluating mediator: " + mediator.constructor.name + " - " + mediator.getExpression());
                throw e;
            }
            if (changed) {
                changedMediators.push(mediator);
            }
        }
    };
    return DigestionContextImpl;
}());
exports.default = DigestionContextImpl;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ObjectUtils_1 = __webpack_require__(0);
var EventHooksImpl = /** @class */ (function () {
    function EventHooksImpl() {
        this.listeners = [];
    }
    EventHooksImpl.prototype.add = function (listener) {
        ObjectUtils_1.requireNotNull(listener, "listener");
        this.listeners.push(listener);
    };
    EventHooksImpl.prototype.notify = function (context) {
        for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener.apply({}, [context]);
        }
    };
    return EventHooksImpl;
}());
exports.default = EventHooksImpl;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DomWalkerImpl_1 = __importDefault(__webpack_require__(80));
var TextVisitor_1 = __importDefault(__webpack_require__(81));
var ScriptVisitor_1 = __importDefault(__webpack_require__(83));
var OtherVisitor_1 = __importDefault(__webpack_require__(86));
var MvvmDomWalkerImpl = /** @class */ (function (_super) {
    __extends(MvvmDomWalkerImpl, _super);
    function MvvmDomWalkerImpl() {
        var _this = _super.call(this) || this;
        _this.setTextVisitor(new TextVisitor_1.default());
        _this.setDefaultVisitor(new OtherVisitor_1.default());
        _this.addVisitor("script", new ScriptVisitor_1.default());
        return _this;
    }
    return MvvmDomWalkerImpl;
}(DomWalkerImpl_1.default));
exports.default = MvvmDomWalkerImpl;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectUtils_1 = __webpack_require__(0);
var ValidationError_1 = __importDefault(__webpack_require__(16));
var Constants_1 = __webpack_require__(2);
var DomWalkerImpl = /** @class */ (function () {
    function DomWalkerImpl() {
        this.visitors = {};
    }
    DomWalkerImpl.prototype.walk = function (root, context) {
        var pending = [root];
        var consumer = function (element) { return pending.push(element); };
        var topLevel = true;
        while (pending.length > 0) {
            var element = pending.pop();
            switch (element.nodeType) {
                case Constants_1.TEXT_NODE_TYPE:
                    this.processText(element, context, consumer, topLevel);
                    break;
                case Constants_1.ELEMENT_NODE_TYPE:
                    this.processElement(element, context, consumer, topLevel);
                    break;
                case Constants_1.COMMENT_NODE_TYPE:
                    this.processComment(element, context, consumer, topLevel);
                    break;
            }
            topLevel = false;
        }
    };
    DomWalkerImpl.prototype.addVisitor = function (tagName, visitor) {
        var key = ObjectUtils_1.requireNotNull(tagName, "tagName").toLowerCase();
        ObjectUtils_1.requireNotNull(visitor, "visitor");
        if (ObjectUtils_1.isDefined(this.visitors[key])) {
            throw new ValidationError_1.default("Visitor for " + key + " is already registered");
        }
        this.visitors[key] = visitor;
    };
    DomWalkerImpl.prototype.setTextVisitor = function (visitor) {
        this.textVisitor = visitor;
    };
    DomWalkerImpl.prototype.setCommentVisitor = function (visitor) {
        this.commentVisitor = visitor;
    };
    DomWalkerImpl.prototype.setDefaultVisitor = function (visitor) {
        this.defaultVisitor = visitor;
    };
    DomWalkerImpl.prototype.processText = function (element, context, consumer, topLevel) {
        if (ObjectUtils_1.isDefined(this.textVisitor)) {
            this.textVisitor.visit(element, context, consumer, topLevel);
        }
    };
    DomWalkerImpl.prototype.processComment = function (element, context, consumer, topLevel) {
        if (ObjectUtils_1.isDefined(this.commentVisitor)) {
            this.commentVisitor.visit(element, context, consumer, topLevel);
        }
    };
    DomWalkerImpl.prototype.processElement = function (element, context, consumer, topLevel) {
        var htmlElement = element;
        var tagName = htmlElement.tagName.toLowerCase();
        var visitor = this.visitors[tagName];
        if (ObjectUtils_1.isDefined(visitor)) {
            visitor.visit(htmlElement, context, consumer, topLevel);
        }
        else if (ObjectUtils_1.isDefined(this.defaultVisitor)) {
            this.defaultVisitor.visit(htmlElement, context, consumer, topLevel);
        }
        else {
            // tslint:disable-next-line
            for (var i = 0; i < element.childNodes.length; i++) {
                consumer(element.childNodes[i]);
            }
        }
    };
    return DomWalkerImpl;
}());
exports.default = DomWalkerImpl;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TextElementMediator_1 = __importDefault(__webpack_require__(82));
var DomUtils_1 = __webpack_require__(7);
var STATE_OUTSIDE = 0;
var STATE_INSIDE_CURLY = 1;
var STATE_INSIDE_SQUARE = 2;
var TextVisitor = /** @class */ (function () {
    function TextVisitor() {
    }
    TextVisitor.prototype.visit = function (element, context, consumer, topLevel) {
        var result = this.splitChild(element, context);
        if (result.length > 1) {
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var newNode = result_1[_i];
                element.parentNode.insertBefore(newNode, element);
            }
            element.remove();
        }
    };
    TextVisitor.prototype.splitChild = function (node, context) {
        var source = node.textContent || "";
        var sections = source.split(/(\{\{|\}\}|\[\[|\]\])/);
        if (sections.length < 2) {
            return [node];
        }
        var state = STATE_OUTSIDE;
        var collected = [];
        for (var _i = 0, sections_1 = sections; _i < sections_1.length; _i++) {
            var section = sections_1[_i];
            if (state === STATE_OUTSIDE && section === "{{") {
                state = STATE_INSIDE_CURLY;
            }
            else if (state === STATE_OUTSIDE && section === "[[") {
                state = STATE_INSIDE_SQUARE;
            }
            else if (state === STATE_INSIDE_CURLY && section === "}}") {
                state = STATE_OUTSIDE;
            }
            else if (state === STATE_INSIDE_SQUARE && section === "]]") {
                state = STATE_OUTSIDE;
            }
            else if (state === STATE_INSIDE_CURLY || state === STATE_INSIDE_SQUARE) {
                var mutable = (state === STATE_INSIDE_CURLY);
                var beginComment = DomUtils_1.createCommentOffDom("#");
                collected.push(beginComment);
                var textNode = DomUtils_1.createTextNodeOffDom(section);
                textNode.textContent = "";
                this.addTextElementMediator(section, textNode, context, mutable);
                collected.push(textNode);
                var endComment = DomUtils_1.createCommentOffDom("#");
                collected.push(endComment);
            }
            else {
                var textNode = DomUtils_1.createTextNodeOffDom(section);
                collected.push(textNode);
            }
        }
        return collected;
    };
    TextVisitor.prototype.addTextElementMediator = function (expression, el, context, mutable) {
        var deps = {
            mvvm: context,
            parent: context.getParent(),
            el: el,
            expression: expression,
            model: context.getModel(),
            prefix: context.getExtractor().getPrefix(),
            mediatorPrefix: "Text",
            module: context.getModule(),
            validated: context.isValidated(),
            mutable: mutable
        };
        var elementMediator = new TextElementMediator_1.default(deps);
        elementMediator.init();
        context.addMediator(elementMediator);
    };
    return TextVisitor;
}());
exports.default = TextVisitor;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ElementMediator_1 = __importDefault(__webpack_require__(4));
var Reducers_1 = __webpack_require__(6);
var TextElementMediator = /** @class */ (function (_super) {
    __extends(TextElementMediator, _super);
    function TextElementMediator(dependencies) {
        return _super.call(this, dependencies, false, Reducers_1.asString) || this;
    }
    TextElementMediator.prototype.populate = function () {
        this.getEl().textContent = this.getModelMediator().get();
    };
    TextElementMediator.prototype.wire = function () {
        if (this.isMutable()) {
            this.getModelMediator().watch(this, this.onTargetChange);
        }
    };
    TextElementMediator.prototype.unwire = function () {
        // Intentionally do nothing
    };
    TextElementMediator.prototype.onTargetChange = function (previous, current) {
        this.getEl().textContent = current;
    };
    TextElementMediator.prototype.validate = function (element, check) {
        // Intentionally do nothing
    };
    return TextElementMediator;
}(ElementMediator_1.default));
exports.default = TextElementMediator;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectUtils_1 = __webpack_require__(0);
var StringUtils_1 = __webpack_require__(14);
var RegionVisitor_1 = __importDefault(__webpack_require__(84));
var Constants_1 = __webpack_require__(2);
var VISITORS = {
    region: new RegionVisitor_1.default()
};
var ScriptVisitor = /** @class */ (function () {
    function ScriptVisitor() {
    }
    ScriptVisitor.prototype.visit = function (element, context, consumer, topLevel) {
        if (!StringUtils_1.startsWith(element.type, Constants_1.CYDRAN_SCRIPT_PREFIX)) {
            return;
        }
        var type = StringUtils_1.removeFromBeginning(element.type, Constants_1.CYDRAN_SCRIPT_PREFIX);
        var visitor = VISITORS[type];
        if (ObjectUtils_1.isDefined(visitor)) {
            visitor.visit(element, context, consumer, topLevel);
        }
    };
    return ScriptVisitor;
}());
exports.default = ScriptVisitor;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AttributeNames_1 = __webpack_require__(28);
var ObjectUtils_1 = __webpack_require__(0);
var ValidatorImpl_1 = __importDefault(__webpack_require__(24));
var ValidationRegExp_1 = __webpack_require__(8);
var DomUtils_1 = __webpack_require__(7);
var UnknownComponentError_1 = __importDefault(__webpack_require__(85));
var RegionVisitor = /** @class */ (function () {
    function RegionVisitor() {
    }
    RegionVisitor.prototype.visit = function (element, context, consumer, topLevel) {
        var extractor = context.getExtractor();
        var name = extractor.extract(element, AttributeNames_1.NAME_ATTRIBUTE);
        if (ObjectUtils_1.isDefined(name)) {
            ObjectUtils_1.requireValid(name, extractor.asTypePrefix(AttributeNames_1.NAME_ATTRIBUTE), ValidationRegExp_1.VALID_KEY);
        }
        var validator = new ValidatorImpl_1.default();
        var check = validator.getFunction();
        check(extractor.asTypePrefix(AttributeNames_1.NAME_ATTRIBUTE), extractor.extract(element, AttributeNames_1.NAME_ATTRIBUTE)).matches(ValidationRegExp_1.VALID_KEY);
        check(extractor.asTypePrefix(AttributeNames_1.COMPONENT_ATTRIBUTE), extractor.extract(element, AttributeNames_1.COMPONENT_ATTRIBUTE)).matches(ValidationRegExp_1.VALID_ID);
        check(extractor.asTypePrefix(AttributeNames_1.COMPONENT_ATTRIBUTE), extractor.extract(element, AttributeNames_1.MODULE_ATTRIBUTE)).matches(ValidationRegExp_1.VALID_ID);
        validator.throwIfErrors(function () { return "Invalid use of cydran/region on element " + DomUtils_1.elementAsString(element); });
        var componentName = extractor.extract(element, AttributeNames_1.COMPONENT_ATTRIBUTE);
        var moduleName = extractor.extract(element, AttributeNames_1.MODULE_ATTRIBUTE);
        var regionName = ObjectUtils_1.isDefined(name) ? name : context.createRegionName();
        var valueExpression = extractor.extract(element, AttributeNames_1.VALUE_ATTRIBUTE);
        var lockedAttr = extractor.extract(element, AttributeNames_1.LOCK_ATTRIBUTE);
        var explicitlyLocked = ObjectUtils_1.isDefined(lockedAttr) && lockedAttr.toLowerCase() === "true";
        var implicitlyLocked = ObjectUtils_1.isDefined(componentName) && componentName !== "" && !ObjectUtils_1.isDefined(name);
        var locked = explicitlyLocked || implicitlyLocked;
        var region = context.addRegion(regionName, element, locked);
        region.setExpression(valueExpression);
        if (ObjectUtils_1.isDefined(componentName) && componentName !== "") {
            region.setInitialComponentFn(function () {
                var moduleToUse = ObjectUtils_1.isDefined(moduleName) ? context.getModule().getModule(moduleName) : context.getModule();
                var component = ObjectUtils_1.isDefined(moduleToUse) ? moduleToUse.get(componentName) : context.getModule().get(componentName);
                if (!ObjectUtils_1.isDefined(component)) {
                    var componentClassName = context.getParent().getComponent().constructor.name;
                    throw new UnknownComponentError_1.default("Unknown component " + componentName + " referenced in component " + componentClassName);
                }
                return component;
            });
        }
    };
    return RegionVisitor;
}());
exports.default = RegionVisitor;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractCydranError_1 = __webpack_require__(3);
var UnknownComponentError = /** @class */ (function (_super) {
    __extends(UnknownComponentError, _super);
    function UnknownComponentError(msg, reps) {
        return _super.call(this, msg, reps) || this;
    }
    return UnknownComponentError;
}(AbstractCydranError_1.CydranError));
exports.default = UnknownComponentError;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AttributeElementMediator_1 = __importDefault(__webpack_require__(87));
var Factories_1 = __importDefault(__webpack_require__(5));
var EventElementMediator_1 = __importDefault(__webpack_require__(88));
var MalformedOnEventError_1 = __importDefault(__webpack_require__(89));
var LoggerFactory_1 = __importDefault(__webpack_require__(1));
var ObjectUtils_1 = __webpack_require__(0);
var AttributeNames_1 = __webpack_require__(28);
var StringUtils_1 = __webpack_require__(14);
var OtherVisitor = /** @class */ (function () {
    function OtherVisitor() {
        this.logger = LoggerFactory_1.default.getLogger("OtherVisitor");
    }
    OtherVisitor.prototype.visit = function (element, context, consumer, topLevel) {
        // tslint:disable-next-line
        for (var i = 0; i < element.childNodes.length; i++) {
            consumer(element.childNodes[i]);
        }
        var EVT_NAME_ERR = "Event expressor \'%eventName%\' MUST correspond to a valid event in the target environment: \'";
        var regex = /^[A-Za-z]+$/;
        var elName = element.tagName.toLowerCase();
        var extractor = context.getExtractor();
        var elementName = extractor.extract(element, AttributeNames_1.ID_ATTRIBUTE);
        if (ObjectUtils_1.isDefined(elementName)) {
            context.addNamedElement(elementName, element);
            extractor.remove(element, AttributeNames_1.ID_ATTRIBUTE);
        }
        var attributes = element.attributes;
        var length = attributes.length;
        var names = [];
        for (var i = 0; i < length; i++) {
            names.push(attributes[i].name);
        }
        for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
            var name_1 = names_1[_i];
            var expression = element.getAttribute(name_1);
            if (extractor.isEventAttribute(name_1)) {
                var eventName = extractor.extractEventName(name_1);
                if (!regex.test(eventName)) {
                    throw new MalformedOnEventError_1.default(EVT_NAME_ERR, { "%eventName%": eventName });
                }
                this.addEventElementMediator(eventName.toLowerCase(), this.trimExpression(expression), element, context);
                element.removeAttribute(name_1);
            }
            else if (extractor.isMediatorAttribute(name_1)) {
                var elementMediatorType = extractor.extractMediatorName(name_1);
                var mutable = !(StringUtils_1.startsWith(expression, "[[") && StringUtils_1.endsWith(expression, "]]"));
                this.addElementMediator(elName, elementMediatorType, this.trimExpression(expression), element, topLevel, context, mutable);
                element.removeAttribute(name_1);
            }
            else if (expression.length > 4 && expression.indexOf("{{") === 0 && expression.indexOf("}}", expression.length - 2) !== -1) {
                this.addAttributeElementMediator(name_1, this.trimExpression(expression), element, context, true);
            }
            else if (expression.length > 4 && expression.indexOf("[[") === 0 && expression.indexOf("]]", expression.length - 2) !== -1) {
                this.addAttributeElementMediator(name_1, this.trimExpression(expression), element, context, false);
            }
        }
    };
    OtherVisitor.prototype.trimExpression = function (input) {
        var result = StringUtils_1.trim(input, "{{", "}}");
        if (result === input) {
            result = StringUtils_1.trim(input, "[[", "]]");
        }
        return result;
    };
    OtherVisitor.prototype.addEventElementMediator = function (eventName, expression, el, context) {
        var prefix = context.getExtractor().getPrefix();
        var deps = {
            mvvm: context,
            parent: context.getParent(),
            el: el,
            expression: expression,
            model: context.getModel(),
            prefix: prefix,
            mediatorPrefix: "Event",
            module: context.getModule(),
            validated: context.isValidated(),
            mutable: true
        };
        var elementMediator = new EventElementMediator_1.default(deps);
        elementMediator.setEventKey(eventName);
        elementMediator.init();
        context.addMediator(elementMediator);
    };
    OtherVisitor.prototype.addElementMediator = function (tag, elementMediatorType, expression, el, topLevel, context, mutable) {
        var tags = Factories_1.default.get(elementMediatorType);
        var mediatorPrefix = context.getExtractor().asTypePrefix(elementMediatorType);
        var prefix = context.getExtractor().getPrefix();
        var elementMediator = null;
        if (!tags) {
            return;
        }
        var elementMediatorClass = tags[tag];
        if (!ObjectUtils_1.isDefined(elementMediatorClass)) {
            elementMediatorClass = tags["*"];
        }
        if (!ObjectUtils_1.isDefined(elementMediatorClass)) {
            this.logger.error("Unsupported tag: " + tag + " for elementMediator " + elementMediatorType + ".");
            return;
        }
        var deps = {
            mvvm: context,
            parent: context.getParent(),
            el: el,
            expression: expression,
            model: context.getModel(),
            prefix: prefix,
            mediatorPrefix: mediatorPrefix,
            module: context.getModule(),
            validated: context.isValidated(),
            mutable: mutable
        };
        elementMediator = new elementMediatorClass(deps);
        if (topLevel && !elementMediator.isTopLevelSupported()) {
            this.logger.error("Element mediator " + elementMediatorType + " not supported on top level component tags.");
            return;
        }
        elementMediator.init();
        context.addMediator(elementMediator);
        if (elementMediator.hasPropagation()) {
            context.addPropagatingElementMediator(elementMediator);
        }
    };
    OtherVisitor.prototype.addAttributeElementMediator = function (attributeName, expression, el, context, mutable) {
        var prefix = context.getExtractor().getPrefix();
        var deps = {
            mvvm: context,
            parent: context.getParent(),
            el: el,
            expression: expression,
            model: context.getModel(),
            prefix: prefix,
            mediatorPrefix: "Event",
            module: context.getModule(),
            validated: context.isValidated(),
            mutable: mutable
        };
        var elementMediator = new AttributeElementMediator_1.default(deps);
        elementMediator.setAttributeName(attributeName);
        elementMediator.init();
        context.addMediator(elementMediator);
    };
    return OtherVisitor;
}());
exports.default = OtherVisitor;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ElementMediator_1 = __importDefault(__webpack_require__(4));
var Reducers_1 = __webpack_require__(6);
var AttributeElementMediator = /** @class */ (function (_super) {
    __extends(AttributeElementMediator, _super);
    function AttributeElementMediator(dependencies) {
        return _super.call(this, dependencies, false, Reducers_1.asString) || this;
    }
    AttributeElementMediator.prototype.wire = function () {
        if (this.isMutable()) {
            this.getModelMediator().watch(this, this.onTargetChange);
        }
    };
    AttributeElementMediator.prototype.populate = function () {
        this.getEl().setAttribute(this.attributeName, this.getModelMediator().get());
    };
    AttributeElementMediator.prototype.unwire = function () {
        // Intentionally do nothing
    };
    AttributeElementMediator.prototype.setAttributeName = function (attributeName) {
        this.attributeName = attributeName;
    };
    AttributeElementMediator.prototype.onTargetChange = function (previous, current) {
        this.getEl().setAttribute(this.attributeName, current);
    };
    AttributeElementMediator.prototype.validate = function (element, check) {
        // Intentionally do nothing
    };
    return AttributeElementMediator;
}(ElementMediator_1.default));
exports.default = AttributeElementMediator;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ElementMediator_1 = __importDefault(__webpack_require__(4));
var Reducers_1 = __webpack_require__(6);
var EventElementMediator = /** @class */ (function (_super) {
    __extends(EventElementMediator, _super);
    function EventElementMediator(dependencies) {
        return _super.call(this, dependencies, false, Reducers_1.asIdentity) || this;
    }
    EventElementMediator.prototype.unwire = function () {
        // Intentionally do nothing
    };
    EventElementMediator.prototype.handleEvent = function (event) {
        var _this = this;
        this.$apply(function () {
            _this.getModelMediator().invoke({
                $event: event
            });
        }, [event]);
    };
    EventElementMediator.prototype.wire = function () {
        this.bridge(this.eventKey);
        this.on(this.eventKey).forChannel("dom").invoke(this.handleEvent);
    };
    EventElementMediator.prototype.setEventKey = function (eventKey) {
        this.eventKey = eventKey;
    };
    EventElementMediator.prototype.validate = function (element, check) {
        // Intentionally do nothing
    };
    return EventElementMediator;
}(ElementMediator_1.default));
exports.default = EventElementMediator;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractCydranError_1 = __webpack_require__(3);
var MalformedOnEventError = /** @class */ (function (_super) {
    __extends(MalformedOnEventError, _super);
    function MalformedOnEventError(msg, reps) {
        return _super.call(this, msg, reps) || this;
    }
    return MalformedOnEventError;
}(AbstractCydranError_1.CydranError));
exports.default = MalformedOnEventError;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ObjectUtils_1 = __webpack_require__(0);
var DomUtils_1 = __webpack_require__(7);
var AttributeExtractorImpl = /** @class */ (function () {
    function AttributeExtractorImpl(prefix) {
        this.prefix = ObjectUtils_1.requireNotNull(prefix, "prefix") + ":";
        this.eventPrefix = this.prefix + "on";
    }
    AttributeExtractorImpl.prototype.extract = function (element, name) {
        return DomUtils_1.extractAttribute(element, this.prefix, name);
    };
    AttributeExtractorImpl.prototype.remove = function (element, name) {
        element.removeAttribute(this.prefix + name);
    };
    AttributeExtractorImpl.prototype.isEventAttribute = function (name) {
        return (name.indexOf(this.eventPrefix) === 0);
    };
    AttributeExtractorImpl.prototype.isMediatorAttribute = function (name) {
        return (name.indexOf(this.prefix) === 0);
    };
    AttributeExtractorImpl.prototype.extractEventName = function (name) {
        return name.substr(this.eventPrefix.length);
    };
    AttributeExtractorImpl.prototype.extractMediatorName = function (name) {
        return name.substr(this.prefix.length);
    };
    AttributeExtractorImpl.prototype.asTypePrefix = function (name) {
        return this.prefix + name;
    };
    AttributeExtractorImpl.prototype.getPrefix = function () {
        return this.prefix;
    };
    return AttributeExtractorImpl;
}());
exports.default = AttributeExtractorImpl;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CYDRAN_DEVELOPMENT_ENABLED = exports.CYDRAN_EQUALS_MAX_EVALUATIONS = exports.CYDRAN_CLONE_MAX_EVALUATIONS = exports.CYDRAN_DIGEST_MAX_EVALUATIONS = void 0;
var CYDRAN_DIGEST_MAX_EVALUATIONS = "cydran.digest.maxEvaluations";
exports.CYDRAN_DIGEST_MAX_EVALUATIONS = CYDRAN_DIGEST_MAX_EVALUATIONS;
var CYDRAN_CLONE_MAX_EVALUATIONS = "cydran.clone.maxEvaluations";
exports.CYDRAN_CLONE_MAX_EVALUATIONS = CYDRAN_CLONE_MAX_EVALUATIONS;
var CYDRAN_EQUALS_MAX_EVALUATIONS = "cydran.equals.maxEvaluations";
exports.CYDRAN_EQUALS_MAX_EVALUATIONS = CYDRAN_EQUALS_MAX_EVALUATIONS;
var CYDRAN_DEVELOPMENT_ENABLED = "cydran.development.enabled";
exports.CYDRAN_DEVELOPMENT_ENABLED = CYDRAN_DEVELOPMENT_ENABLED;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NamedElementOperationsImpl = /** @class */ (function () {
    function NamedElementOperationsImpl(element) {
        this.element = element;
    }
    NamedElementOperationsImpl.prototype.get = function () {
        return this.element;
    };
    NamedElementOperationsImpl.prototype.focus = function () {
        var _this = this;
        setTimeout(function () {
            _this.element.focus();
        }, 1);
    };
    NamedElementOperationsImpl.prototype.blur = function () {
        var _this = this;
        setTimeout(function () {
            _this.element.blur();
        }, 1);
    };
    return NamedElementOperationsImpl;
}());
exports.default = NamedElementOperationsImpl;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractCydranError_1 = __webpack_require__(3);
var UnknownElementError = /** @class */ (function (_super) {
    __extends(UnknownElementError, _super);
    function UnknownElementError(msg, reps) {
        return _super.call(this, msg, reps) || this;
    }
    return UnknownElementError;
}(AbstractCydranError_1.CydranError));
exports.default = UnknownElementError;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractCydranError_1 = __webpack_require__(3);
var ModuleAffinityError = /** @class */ (function (_super) {
    __extends(ModuleAffinityError, _super);
    function ModuleAffinityError(msg, reps) {
        return _super.call(this, msg, reps) || this;
    }
    return ModuleAffinityError;
}(AbstractCydranError_1.CydranError));
exports.default = ModuleAffinityError;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Registry_1 = __webpack_require__(96);
var ScopeImpl_1 = __importDefault(__webpack_require__(10));
var BrokerImpl_1 = __importDefault(__webpack_require__(99));
var LoggerFactory_1 = __importDefault(__webpack_require__(1));
var Constants_1 = __webpack_require__(2);
var ValidationRegExp_1 = __webpack_require__(8);
var PubSubImpl_1 = __importDefault(__webpack_require__(13));
var ObjectUtils_1 = __webpack_require__(0);
var ModuleImpl = /** @class */ (function () {
    function ModuleImpl(name, modules, scope, properties) {
        this.properties = ObjectUtils_1.requireNotNull(properties, "properties");
        this.name = name;
        this.registry = new Registry_1.RegistryImpl(this);
        this.broker = new BrokerImpl_1.default();
        this.scope = new ScopeImpl_1.default();
        this.modules = modules;
        if (scope) {
            this.scope.setParent(scope);
        }
    }
    ModuleImpl.prototype.getLogger = function () {
        return LoggerFactory_1.default.getLogger(this.name);
    };
    ModuleImpl.prototype.getName = function () {
        return this.name;
    };
    ModuleImpl.prototype.associate = function () {
        var _this = this;
        var componentClasses = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            componentClasses[_i] = arguments[_i];
        }
        componentClasses.forEach(function (componentClass) {
            ObjectUtils_1.requireNotNull(componentClass, "componentClass");
            componentClass["prototype"][Constants_1.MODULE_FIELD_NAME] = _this;
        });
        return this;
    };
    ModuleImpl.prototype.disassociate = function () {
        var _this = this;
        var componentClasses = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            componentClasses[_i] = arguments[_i];
        }
        componentClasses.forEach(function (componentClass) {
            ObjectUtils_1.requireNotNull(componentClass, "componentClass");
            componentClass["prototype"][Constants_1.MODULE_FIELD_NAME] = _this;
        });
        return this;
    };
    ModuleImpl.prototype.clear = function () {
        return this;
    };
    ModuleImpl.prototype.broadcast = function (channelName, messageName, payload) {
        ObjectUtils_1.requireNotNull(channelName, "channelName");
        ObjectUtils_1.requireNotNull(messageName, "messageName");
        this.broker.broadcast(channelName, messageName, payload);
    };
    ModuleImpl.prototype.broadcastGlobally = function (channelName, messageName, payload) {
        this.modules.broadcast(channelName, messageName, payload);
    };
    ModuleImpl.prototype.message = function (channelName, messageName, payload) {
        ObjectUtils_1.requireNotNull(channelName, "channelName");
        ObjectUtils_1.requireNotNull(messageName, "messageName");
        var actualPayload = (payload === null || payload === undefined) ? {} : payload;
        if (channelName === Constants_1.INTERNAL_DIRECT_CHANNEL_NAME) {
            if (messageName === "addListener") {
                this.addListener(actualPayload);
            }
            else if (messageName === "removeListener") {
                this.removeListener(actualPayload);
            }
        }
    };
    ModuleImpl.prototype.get = function (id) {
        ObjectUtils_1.requireValid(id, "id", ValidationRegExp_1.VALID_ID);
        var result = this.registry.get(id);
        if (!result) {
            result = this.modules.get(id);
        }
        return result;
    };
    ModuleImpl.prototype.getLocal = function (id) {
        ObjectUtils_1.requireValid(id, "id", ValidationRegExp_1.VALID_ID);
        return this.registry.get(id);
    };
    ModuleImpl.prototype.getModule = function (name) {
        return this.modules.getModule(name);
    };
    ModuleImpl.prototype.getDefaultModule = function () {
        return this.modules.getDefaultModule();
    };
    ModuleImpl.prototype.getScope = function () {
        return this.scope;
    };
    ModuleImpl.prototype.registerConstant = function (id, instance) {
        ObjectUtils_1.requireValid(id, "id", ValidationRegExp_1.VALID_ID);
        ObjectUtils_1.requireNotNull(instance, "instance");
        this.registry.registerConstant(id, instance);
        return this;
    };
    ModuleImpl.prototype.registerPrototype = function (id, classInstance, dependencies) {
        ObjectUtils_1.requireValid(id, "id", ValidationRegExp_1.VALID_ID);
        ObjectUtils_1.requireNotNull(classInstance, "classInstance");
        this.registry.registerPrototype(id, classInstance, dependencies);
        return this;
    };
    ModuleImpl.prototype.registerPrototypeWithFactory = function (id, factoryFn, dependencies) {
        ObjectUtils_1.requireValid(id, "id", ValidationRegExp_1.VALID_ID);
        ObjectUtils_1.requireNotNull(factoryFn, "factoryFn");
        this.registry.registerPrototypeWithFactory(id, factoryFn, dependencies);
        return this;
    };
    ModuleImpl.prototype.registerSingleton = function (id, classInstance, dependencies) {
        ObjectUtils_1.requireValid(id, "id", ValidationRegExp_1.VALID_ID);
        ObjectUtils_1.requireNotNull(classInstance, "classInstance");
        this.registry.registerSingleton(id, classInstance, dependencies);
        return this;
    };
    ModuleImpl.prototype.registerSingletonWithFactory = function (id, factoryFn, dependencies) {
        ObjectUtils_1.requireValid(id, "id", ValidationRegExp_1.VALID_ID);
        ObjectUtils_1.requireNotNull(factoryFn, "factoryFn");
        this.registry.registerSingletonWithFactory(id, factoryFn, dependencies);
        return this;
    };
    ModuleImpl.prototype.addStrategy = function (strategy) {
        ObjectUtils_1.requireNotNull(strategy, "strategy");
        this.registry.addStrategy(strategy);
        return this;
    };
    ModuleImpl.prototype.expose = function (id) {
        ObjectUtils_1.requireValid(id, "id", ValidationRegExp_1.VALID_ID);
        ModuleImpl.ALIASES[id] = this.name;
        return this;
    };
    ModuleImpl.prototype.getProperties = function () {
        return this.properties;
    };
    ModuleImpl.prototype.createPubSubFor = function (context) {
        return new PubSubImpl_1.default(context, this);
    };
    ModuleImpl.prototype.addListener = function (listener) {
        this.broker.addListener(listener);
    };
    ModuleImpl.prototype.removeListener = function (listener) {
        this.broker.removeListener(listener);
    };
    ModuleImpl.ALIASES = {};
    return ModuleImpl;
}());
exports.default = ModuleImpl;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistryImpl = void 0;
var RegistrationError_1 = __importDefault(__webpack_require__(97));
var ValidationRegExp_1 = __webpack_require__(8);
var Instantiator_1 = __importDefault(__webpack_require__(98));
var PubSubImpl_1 = __importDefault(__webpack_require__(13));
var ObjectUtils_1 = __webpack_require__(0);
var StringUtils_1 = __webpack_require__(14);
var DefaultRegistryStrategyImpl = /** @class */ (function () {
    function DefaultRegistryStrategyImpl(module) {
        this.factories = {};
        this.module = module;
    }
    DefaultRegistryStrategyImpl.prototype.get = function (id, gettable) {
        ObjectUtils_1.requireValid(id, "id", ValidationRegExp_1.VALID_ID);
        var instance = null;
        if (this.factories[id]) {
            instance = this.factories[id].get(gettable);
        }
        return instance;
    };
    DefaultRegistryStrategyImpl.prototype.registerConstant = function (id, instance) {
        this.registerFactory(id, new ConstantFactory(instance));
    };
    DefaultRegistryStrategyImpl.prototype.registerPrototype = function (id, classInstance, dependencies) {
        this.registerFactory(id, new PrototypeFactory(this.module, Instantiator_1.default.create(classInstance), dependencies || []));
    };
    DefaultRegistryStrategyImpl.prototype.registerPrototypeWithFactory = function (id, factoryFn, dependencies) {
        this.registerFactory(id, new PrototypeFactory(this.module, factoryFn, dependencies || []));
    };
    DefaultRegistryStrategyImpl.prototype.registerSingleton = function (id, classInstance, dependencies) {
        this.registerFactory(id, new SingletonFactory(this.module, Instantiator_1.default.create(classInstance), dependencies || []));
    };
    DefaultRegistryStrategyImpl.prototype.registerSingletonWithFactory = function (id, factoryFn, dependencies) {
        this.registerFactory(id, new SingletonFactory(this.module, factoryFn, dependencies || []));
    };
    DefaultRegistryStrategyImpl.prototype.registerFactory = function (id, factory) {
        ObjectUtils_1.requireValid(id, "id", ValidationRegExp_1.VALID_ID);
        if (id && factory) {
            if (this.factories[id]) {
                throw new RegistrationError_1.default("'%id%' key is considered unique and already exists", { "%id%": id });
            }
            this.factories[id] = factory;
        }
    };
    return DefaultRegistryStrategyImpl;
}());
var RegistryImpl = /** @class */ (function () {
    function RegistryImpl(module) {
        this.module = module;
        this.defaultStrategy = new DefaultRegistryStrategyImpl(this.module);
        this.strategies = [this.defaultStrategy];
    }
    RegistryImpl.prototype.get = function (id) {
        ObjectUtils_1.requireValid(id, "id", ValidationRegExp_1.VALID_ID);
        var i = 0;
        var instance = null;
        while (!instance && i < this.strategies.length) {
            instance = this.strategies[i].get(id, this);
            i++;
        }
        return instance;
    };
    RegistryImpl.prototype.registerConstant = function (id, instance) {
        ObjectUtils_1.requireValid(id, "id", ValidationRegExp_1.VALID_ID);
        ObjectUtils_1.requireNotNull(instance, "instance");
        this.defaultStrategy.registerConstant(id, instance);
        return this;
    };
    RegistryImpl.prototype.registerPrototype = function (id, classInstance, dependencies) {
        ObjectUtils_1.requireValid(id, "id", ValidationRegExp_1.VALID_ID);
        ObjectUtils_1.requireNotNull(classInstance, "classInstance");
        this.defaultStrategy.registerPrototype(id, classInstance, dependencies);
        return this;
    };
    RegistryImpl.prototype.registerPrototypeWithFactory = function (id, factoryFn, dependencies) {
        ObjectUtils_1.requireValid(id, "id", ValidationRegExp_1.VALID_ID);
        ObjectUtils_1.requireNotNull(factoryFn, "factoryFn");
        this.defaultStrategy.registerPrototypeWithFactory(id, factoryFn, dependencies);
        return this;
    };
    RegistryImpl.prototype.registerSingleton = function (id, classInstance, dependencies) {
        ObjectUtils_1.requireValid(id, "id", ValidationRegExp_1.VALID_ID);
        ObjectUtils_1.requireNotNull(classInstance, "classInstance");
        this.defaultStrategy.registerSingleton(id, classInstance, dependencies);
        return this;
    };
    RegistryImpl.prototype.registerSingletonWithFactory = function (id, factoryFn, dependencies) {
        ObjectUtils_1.requireValid(id, "id", ValidationRegExp_1.VALID_ID);
        ObjectUtils_1.requireNotNull(factoryFn, "factoryFn");
        this.defaultStrategy.registerSingletonWithFactory(id, factoryFn, dependencies);
        return this;
    };
    RegistryImpl.prototype.addStrategy = function (strategy) {
        ObjectUtils_1.requireNotNull(strategy, "strategy");
        this.strategies.push(strategy);
    };
    return RegistryImpl;
}());
exports.RegistryImpl = RegistryImpl;
var ConstantFactory = /** @class */ (function () {
    function ConstantFactory(instance) {
        this.instance = instance;
    }
    ConstantFactory.prototype.get = function (gettable) {
        return this.instance;
    };
    return ConstantFactory;
}());
var AbstractFunctionalFactory = /** @class */ (function () {
    function AbstractFunctionalFactory(module, fn, dependencies) {
        this.module = module;
        this.dependencies = dependencies;
        this.fn = fn;
    }
    AbstractFunctionalFactory.prototype.create = function (gettable) {
        var params = [];
        var pubSubs = [];
        for (var _i = 0, _a = this.dependencies; _i < _a.length; _i++) {
            var id = _a[_i];
            if (id === "$pubSub") {
                var pubSub = new PubSubImpl_1.default(null, this.module);
                params.push(pubSub);
                pubSubs.push(pubSub);
            }
            else if (StringUtils_1.startsWith(id, "$prop:")) {
                var key = StringUtils_1.removeFromBeginning(id, "$prop:");
                var value = this.module.getProperties().get(key);
                params.push(value);
            }
            else {
                var param = gettable.get(id);
                params.push(param);
            }
        }
        var result = this.fn.apply({}, params);
        for (var _b = 0, pubSubs_1 = pubSubs; _b < pubSubs_1.length; _b++) {
            var pubSub = pubSubs_1[_b];
            pubSub.setContext(result);
        }
        return result;
    };
    return AbstractFunctionalFactory;
}());
var PrototypeFactory = /** @class */ (function (_super) {
    __extends(PrototypeFactory, _super);
    function PrototypeFactory(module, fn, dependencies) {
        return _super.call(this, module, fn, dependencies) || this;
    }
    PrototypeFactory.prototype.get = function (gettable) {
        return this.create(gettable);
    };
    return PrototypeFactory;
}(AbstractFunctionalFactory));
var SingletonFactory = /** @class */ (function (_super) {
    __extends(SingletonFactory, _super);
    function SingletonFactory(module, fn, dependencies) {
        var _this = _super.call(this, module, fn, dependencies) || this;
        _this.instance = null;
        return _this;
    }
    SingletonFactory.prototype.get = function (gettable) {
        if (!this.instance) {
            this.instance = this.create(gettable);
        }
        return this.instance;
    };
    return SingletonFactory;
}(AbstractFunctionalFactory));


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractCydranError_1 = __webpack_require__(3);
var RegistrationError = /** @class */ (function (_super) {
    __extends(RegistrationError, _super);
    function RegistrationError(msg, reps) {
        return _super.call(this, msg, reps) || this;
    }
    return RegistrationError;
}(AbstractCydranError_1.CydranError));
exports.default = RegistrationError;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Instantiator = /** @class */ (function () {
    function Instantiator() {
    }
    Instantiator.create = function (classInstance) {
        var fn = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (args.length === 0) {
                return new classInstance();
            }
            var argumentsCode = "";
            for (var i = 0; i < args.length; i++) {
                if (i > 0) {
                    argumentsCode += ",";
                }
                argumentsCode += "arguments[1][" + i + "]";
            }
            var code = '"use strict"; var classInstance = arguments[0]; return new classInstance(' + argumentsCode + ");";
            return Function(code).apply({}, [classInstance, args]);
        };
        return fn;
    };
    return Instantiator;
}());
exports.default = Instantiator;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LoggerFactory_1 = __importDefault(__webpack_require__(1));
var ObjectUtils_1 = __webpack_require__(0);
var BrokerImpl = /** @class */ (function () {
    function BrokerImpl() {
        this.logger = LoggerFactory_1.default.getLogger("Broker");
        this.listeners = {};
    }
    BrokerImpl.prototype.broadcast = function (channelName, messageName, payload) {
        ObjectUtils_1.requireNotNull(channelName, "channelName");
        ObjectUtils_1.requireNotNull(messageName, "messageName");
        var actualPayload = (payload === null || payload === undefined) ? {} : payload;
        this.logger.trace({
            channelName: channelName,
            messageName: messageName,
            payload: actualPayload
        });
        if (!this.listeners[channelName]) {
            this.logger.trace("no listeners for channel, returning");
            return;
        }
        var listeners = this.listeners[channelName];
        for (var _i = 0, listeners_1 = listeners; _i < listeners_1.length; _i++) {
            var listener = listeners_1[_i];
            listener.receive(messageName, actualPayload);
        }
    };
    BrokerImpl.prototype.addListener = function (listener) {
        var channelName = listener.getChannelName();
        if (!this.listeners[channelName]) {
            this.listeners[channelName] = [];
        }
        var listeners = this.listeners[channelName];
        if (!this.contains(listeners, listener)) {
            listeners.push(listener);
        }
    };
    BrokerImpl.prototype.removeListener = function (listener) {
        var channelName = listener.getChannelName();
        var listeners = this.listeners[channelName];
        if (!listeners) {
            return;
        }
        this.remove(listeners, listener);
        if (0 === listeners.length) {
            delete this.listeners[channelName];
        }
    };
    BrokerImpl.prototype.dispose = function () {
        this.listeners = {};
    };
    BrokerImpl.prototype.contains = function (array, instance) {
        var i = array.length;
        while (i--) {
            if (array[i] === instance) {
                return true;
            }
        }
        return false;
    };
    BrokerImpl.prototype.remove = function (array, instance) {
        var i = array.length;
        while (i--) {
            if (array[i] === instance) {
                array.splice(i, 1);
                break;
            }
        }
    };
    return BrokerImpl;
}());
exports.default = BrokerImpl;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.COMPARE = void 0;
var COMPARE = {
    alpha: function (first, second) {
        var result = 0;
        if (first < second) {
            result = -1;
        }
        else if (first > second) {
            result = 1;
        }
        return result;
    }
};
exports.COMPARE = COMPARE;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ObjectUtils_1 = __webpack_require__(0);
var PropertiesImpl = /** @class */ (function () {
    function PropertiesImpl(parent) {
        this.parent = parent;
        this.clear();
    }
    PropertiesImpl.prototype.get = function (key) {
        ObjectUtils_1.requireNotNull(key, "key");
        var value = null;
        if (this.properties.hasOwnProperty(key)) {
            value = this.properties[key];
        }
        else if (ObjectUtils_1.isDefined(this.parent)) {
            value = this.parent.get(key);
        }
        return value;
    };
    PropertiesImpl.prototype.isDefined = function (key) {
        return ObjectUtils_1.isDefined(this.get(key));
    };
    PropertiesImpl.prototype.isTruthy = function (key) {
        var value = this.get(key);
        return ObjectUtils_1.isDefined(value) ? !!value : false;
    };
    PropertiesImpl.prototype.getAsString = function (key) {
        var value = this.get(key);
        return ObjectUtils_1.isDefined(value) ? value + '' : null;
    };
    PropertiesImpl.prototype.set = function (key, value) {
        ObjectUtils_1.requireNotNull(key, "key");
        this.properties[key] = value;
        return this;
    };
    PropertiesImpl.prototype.remove = function (key) {
        ObjectUtils_1.requireNotNull(key, "key");
        if (this.properties.hasOwnProperty(key)) {
            delete this.properties[key];
        }
        return this;
    };
    PropertiesImpl.prototype.clear = function () {
        this.properties = {};
        return this;
    };
    PropertiesImpl.prototype.load = function (values) {
        ObjectUtils_1.requireNotNull(values, "values");
        for (var key in values) {
            if (!values.hasOwnProperty(key)) {
                continue;
            }
            this.properties[key] = values[key];
        }
        return this;
    };
    PropertiesImpl.prototype.extend = function () {
        return new PropertiesImpl(this);
    };
    return PropertiesImpl;
}());
exports.default = PropertiesImpl;


/***/ }),
/* 102 */
/***/ (function(module) {

module.exports = JSON.parse("{\"cydran.digest.maxEvaluations\":10000,\"cydran.clone.maxEvaluations\":50,\"cydran.equals.maxEvaluations\":50,\"cydran.development.enabled\":false}");

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LoggerFactory_1 = __importDefault(__webpack_require__(1));
var Constants_1 = __webpack_require__(2);
var ObjectUtils_1 = __webpack_require__(0);
var ElementReferenceImpl_1 = __importDefault(__webpack_require__(25));
var LockedRegionError_1 = __importDefault(__webpack_require__(104));
var RegionImpl = /** @class */ (function () {
    function RegionImpl(name, parent, element, locked) {
        this.logger = LoggerFactory_1.default.getLogger("Region " + this.name + " for " + parent.getId());
        this.locked = ObjectUtils_1.requireNotNull(locked, "locked");
        this.itemFn = Constants_1.EMPTY_OBJECT_FN;
        this.component = null;
        this.parent = parent;
        this.name = name;
        this.expression = null;
        this.element = new ElementReferenceImpl_1.default(element, "Empty");
    }
    RegionImpl.prototype.populate = function () {
        if (ObjectUtils_1.isDefined(this.initialComponentFn)) {
            this.setComponent(this.initialComponentFn());
            this.initialComponentFn = null;
        }
    };
    RegionImpl.prototype.hasExpression = function () {
        return ObjectUtils_1.isDefined(this.expression);
    };
    RegionImpl.prototype.setExpression = function (expression) {
        var _this = this;
        this.itemFn = ObjectUtils_1.isDefined(expression)
            ? function () { return _this.parent.evaluate(expression); }
            : Constants_1.EMPTY_OBJECT_FN;
        this.expression = expression;
        this.syncComponentMode();
    };
    RegionImpl.prototype.getComponent = function () {
        return this.component;
    };
    RegionImpl.prototype.setComponent = function (component) {
        if (ObjectUtils_1.isDefined(this.component) && this.locked) {
            throw new LockedRegionError_1.default("Region " + this.name + " is locked and can not be updated");
        }
        if (this.component === component) {
            this.logger.trace("Component unchanged, so not setting.");
            return;
        }
        if (ObjectUtils_1.isDefined(component)) {
            this.logger.ifTrace(function () { return "Setting component " + component.getId(); });
        }
        if (ObjectUtils_1.isDefined(this.component)) {
            this.component.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "setItemFn", Constants_1.EMPTY_OBJECT_FN);
            this.component.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "setMode", "");
        }
        if (ObjectUtils_1.isDefined(component)) {
            component.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "setItemFn", this.itemFn);
        }
        if (ObjectUtils_1.isDefined(component) && !ObjectUtils_1.isDefined(this.component)) {
            // Component being set, no existing component
            this.component = component;
            this.component.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "setParent", this.parent.getComponent());
        }
        else if (!ObjectUtils_1.isDefined(component) && ObjectUtils_1.isDefined(this.component)) {
            // Component being nulled, existing component present
            this.component.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "setParent", null);
            this.component = null;
        }
        else if (ObjectUtils_1.isDefined(component) && ObjectUtils_1.isDefined(this.component)) {
            // Component being set, existing component present
            this.component.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "setParent", null);
            this.component = component;
            this.component.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "setParent", this.parent.getComponent());
        }
        var replacementElement = ObjectUtils_1.isDefined(this.component) ? this.component.getEl() : null;
        this.element.set(replacementElement);
        this.syncComponentMode();
    };
    RegionImpl.prototype.message = function (channelName, messageName, payload) {
        if (ObjectUtils_1.isDefined(this.component)) {
            this.component.message(channelName, messageName, payload);
        }
    };
    RegionImpl.prototype.hasComponent = function () {
        return ObjectUtils_1.isDefined(this.component);
    };
    RegionImpl.prototype.dispose = function () {
        if (ObjectUtils_1.isDefined(this.component)) {
            this.component.dispose();
        }
        this.setComponent(null);
    };
    RegionImpl.prototype.setInitialComponentFn = function (initialComponentFn) {
        this.initialComponentFn = initialComponentFn;
    };
    RegionImpl.prototype.syncComponentMode = function () {
        if (ObjectUtils_1.isDefined(this.component)) {
            if (ObjectUtils_1.isDefined(this.expression)) {
                this.component.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "setMode", "repeatable");
            }
            else {
                this.component.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "setMode", "");
            }
        }
    };
    return RegionImpl;
}());
exports.default = RegionImpl;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractCydranError_1 = __webpack_require__(3);
var LockedRegionError = /** @class */ (function (_super) {
    __extends(LockedRegionError, _super);
    function LockedRegionError(msg, reps) {
        return _super.call(this, msg, reps) || this;
    }
    return LockedRegionError;
}(AbstractCydranError_1.CydranError));
exports.default = LockedRegionError;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectUtils_1 = __webpack_require__(0);
var TemplateError_1 = __importDefault(__webpack_require__(18));
var DomUtils_1 = __webpack_require__(7);
var StringRendererImpl = /** @class */ (function () {
    function StringRendererImpl(template) {
        this.template = ObjectUtils_1.requireNotNull(template, "template").trim();
    }
    StringRendererImpl.prototype.render = function () {
        var templateEl = DomUtils_1.createElementOffDom("template");
        templateEl.insertAdjacentHTML("afterbegin", this.template.trim());
        if (templateEl.childElementCount !== 1) {
            var parmObj = { "%count%": "" + templateEl.childElementCount, "%template%": this.template };
            var errmsg = "Component template must have a single top level element, but had %count% top level elements:\n\n%template%\n\n";
            var error = new TemplateError_1.default(errmsg, parmObj);
            throw error;
        }
        return templateEl.firstElementChild;
    };
    return StringRendererImpl;
}());
exports.default = StringRendererImpl;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ItemComponent_1 = __importDefault(__webpack_require__(107));
var ItemComponentFactoryImpl = /** @class */ (function () {
    function ItemComponentFactoryImpl(module, template, prefix, parent, parentId, parentModelFn) {
        this.module = module;
        this.template = template;
        this.prefix = prefix;
        this.parent = parent;
        this.parentId = parentId;
        this.parentModelFn = parentModelFn;
    }
    ItemComponentFactoryImpl.prototype.create = function (item) {
        return new ItemComponent_1.default(this.module, this.template, this.prefix, this.parent, this.parentId, this.parentModelFn, function () { return item; });
    };
    return ItemComponentFactoryImpl;
}());
exports.default = ItemComponentFactoryImpl;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __importDefault(__webpack_require__(11));
var ComponentConfig_1 = __webpack_require__(9);
var Constants_1 = __webpack_require__(2);
var ItemComponent = /** @class */ (function (_super) {
    __extends(ItemComponent, _super);
    function ItemComponent(module, template, prefix, parent, parentId, parentModelFn, itemFn) {
        var _this = this;
        var config = new ComponentConfig_1.ComponentConfigImpl();
        config.withPrefix(prefix);
        config.setParentModelFn(parentModelFn);
        config.setModule(module);
        _this = _super.call(this, template, config) || this;
        _this.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "setMode", "repeatable");
        _this.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "setItemFn", itemFn);
        _this.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "skipId", parentId);
        _this.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "setParent", parent);
        return _this;
    }
    return ItemComponent;
}(Component_1.default));
exports.default = ItemComponent;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = __webpack_require__(2);
var ObjectUtils_1 = __webpack_require__(0);
var EmbeddedComponentFactoryImpl = /** @class */ (function () {
    function EmbeddedComponentFactoryImpl(module, componentId, moduleId, parent, parentId) {
        this.module = module;
        this.componentId = componentId;
        this.moduleId = moduleId;
        this.parent = parent;
        this.parentId = parentId;
    }
    EmbeddedComponentFactoryImpl.prototype.create = function (item) {
        var module = ObjectUtils_1.isDefined(this.moduleId) && this.moduleId.trim().length > 0
            ? this.module.getModule(this.moduleId)
            : this.module.getDefaultModule();
        var component = module.get(this.componentId);
        component.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "setMode", "repeatable");
        component.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "setItemFn", function () { return item; });
        component.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "skipId", this.parentId);
        component.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "setParent", this.parent);
        return component;
    };
    return EmbeddedComponentFactoryImpl;
}());
exports.default = EmbeddedComponentFactoryImpl;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InvalidIdStrategyImpl = /** @class */ (function () {
    function InvalidIdStrategyImpl() {
    }
    InvalidIdStrategyImpl.prototype.check = function (item) {
        return true;
    };
    InvalidIdStrategyImpl.prototype.enrich = function (item, index) {
        // Intentionally do nothing
    };
    InvalidIdStrategyImpl.prototype.extract = function (item) {
        return null;
    };
    InvalidIdStrategyImpl.prototype.init = function () {
        throw new Error("Invalid strategy for \"each\".  Must be \"generated\", \"none\", or \"expression\".");
    };
    return InvalidIdStrategyImpl;
}());
exports.default = InvalidIdStrategyImpl;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LoggerFactory_1 = __importDefault(__webpack_require__(1));
var ExpressionIdStrategyImpl = /** @class */ (function () {
    function ExpressionIdStrategyImpl(expression) {
        this.logger = LoggerFactory_1.default.getLogger("Id Function: " + expression);
        this.expression = expression;
        this.code = '"use strict"; return function(i,item,v,value) { return ' + expression + ' }(arguments[0], arguments[0], arguments[0], arguments[0]);';
        this.fn = Function(this.code);
    }
    ExpressionIdStrategyImpl.prototype.check = function (item) {
        return false;
    };
    ExpressionIdStrategyImpl.prototype.enrich = function (item, index) {
        // Intentionally do nothing
    };
    ExpressionIdStrategyImpl.prototype.extract = function (item) {
        var id = null;
        try {
            var itemFn = function () { return item; };
            id = this.fn.apply({}, [itemFn]);
        }
        catch (e) {
            this.logger.error("\nAn exception (" + e.name + ") was thrown invoking the id function expression: " + this.expression
                + "\n\nIn context:\n" + this.code + "\n\nException message: " + e.message + "\n\n", e);
            throw e;
        }
        return id;
    };
    ExpressionIdStrategyImpl.prototype.init = function () {
        // Intentionally do nothing
    };
    return ExpressionIdStrategyImpl;
}());
exports.default = ExpressionIdStrategyImpl;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractCydranError_1 = __webpack_require__(3);
var AmbiguousMarkupError = /** @class */ (function (_super) {
    __extends(AmbiguousMarkupError, _super);
    function AmbiguousMarkupError(msg, reps) {
        return _super.call(this, msg, reps) || this;
    }
    return AmbiguousMarkupError;
}(AbstractCydranError_1.CydranError));
exports.default = AmbiguousMarkupError;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DomUtils_1 = __webpack_require__(7);
var SelectorError_1 = __importDefault(__webpack_require__(32));
var RootComponent_1 = __importDefault(__webpack_require__(33));
var IdentityRendererImpl_1 = __importDefault(__webpack_require__(30));
var ModulesContextImpl_1 = __importDefault(__webpack_require__(19));
var ObjectUtils_1 = __webpack_require__(0);
var StringUtils_1 = __webpack_require__(14);
var Constants_1 = __webpack_require__(2);
function create(selector, initialValues) {
    DomUtils_1.domReady(function () {
        var elements = window.document.querySelectorAll(selector);
        var eLength = ((elements) ? elements.length : 0);
        var errMsg = (eLength !== 1) ? "CSS selector MUST identify single HTMLElement: '%pattern%' - %qty% found" : null;
        if (errMsg) {
            var patSubObj = { "%pattern%": selector, "%qty%": eLength };
            throw new SelectorError_1.default(errMsg, patSubObj);
        }
        var moduleContext = new ModulesContextImpl_1.default();
        var element = elements[0];
        var renderer = new IdentityRendererImpl_1.default(element);
        var root = new RootComponent_1.default(moduleContext.getDefaultModule(), renderer);
        if (ObjectUtils_1.isDefined(initialValues)) {
            for (var key in initialValues) {
                if (!initialValues.hasOwnProperty(key) || StringUtils_1.startsWith(key, "$")) {
                    continue;
                }
                root[key] = initialValues[key];
            }
        }
        root.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "setParent", null);
        root.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "digest", null);
        window["rootCydranInstance"] = root;
    });
}
exports.default = create;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var StageBuilderImpl_1 = __importDefault(__webpack_require__(122));
var builder = function (rootSelector) {
    return new StageBuilderImpl_1.default(rootSelector);
};
exports.default = builder;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectUtils_1 = __webpack_require__(0);
var AnonymousComponent_1 = __importDefault(__webpack_require__(123));
var StageImpl_1 = __importDefault(__webpack_require__(124));
var CydranConfig_1 = __importDefault(__webpack_require__(34));
var StageBuilderImpl = /** @class */ (function () {
    function StageBuilderImpl(rootSelector) {
        this.config = new CydranConfig_1.default();
        this.instance = new StageImpl_1.default(rootSelector);
    }
    StageBuilderImpl.prototype.withComponentBefore = function (id, moduleName) {
        this.instance.withComponentBefore(id, moduleName);
        return this;
    };
    StageBuilderImpl.prototype.withComponentAfter = function (id, moduleName) {
        this.instance.withComponentAfter(id, moduleName);
        return this;
    };
    StageBuilderImpl.prototype.withComponent = function (id, moduleName) {
        return this.withComponentAfter(id, moduleName);
    };
    StageBuilderImpl.prototype.withInitializer = function (callback) {
        this.instance.withInitializer(callback);
        return this;
    };
    StageBuilderImpl.prototype.withTraceLogging = function () {
        this.config.useTrace();
        return this;
    };
    StageBuilderImpl.prototype.withDebugLogging = function () {
        this.config.useDebug();
        return this;
    };
    StageBuilderImpl.prototype.withInfoLogging = function () {
        this.config.useInfo();
        return this;
    };
    StageBuilderImpl.prototype.withWarnLogging = function () {
        this.config.useWarn();
        return this;
    };
    StageBuilderImpl.prototype.withErrorLogging = function () {
        this.config.useError();
        return this;
    };
    StageBuilderImpl.prototype.withFatalLogging = function () {
        this.config.useFatal();
        return this;
    };
    StageBuilderImpl.prototype.withLoggingDisabled = function () {
        this.config.useDisabled();
        return this;
    };
    StageBuilderImpl.prototype.getModule = function (name) {
        return this.instance.getModules().getModule(name);
    };
    StageBuilderImpl.prototype.getDefaultModule = function () {
        return this.instance.getModules().getDefaultModule();
    };
    StageBuilderImpl.prototype.forEach = function (fn) {
        this.instance.getModules().forEach(fn);
        return this;
    };
    StageBuilderImpl.prototype.withElementMediator = function (name, supportedTags, elementMediatorClass) {
        this.instance.getModules().registerElementMediator(name, supportedTags, elementMediatorClass);
        return this;
    };
    StageBuilderImpl.prototype.withConstant = function (id, instance) {
        this.instance.getModules().registerConstant(id, instance);
        return this;
    };
    StageBuilderImpl.prototype.withPrototype = function (id, classInstance, dependencies) {
        this.instance.getModules().registerPrototype(id, classInstance, dependencies);
        return this;
    };
    StageBuilderImpl.prototype.withPrototypeFromFactory = function (id, factoryFn, dependencies) {
        this.instance.getModules().registerPrototypeWithFactory(id, factoryFn, dependencies);
        return this;
    };
    StageBuilderImpl.prototype.withSingleton = function (id, classInstance, dependencies) {
        this.instance.getModules().registerSingleton(id, classInstance, dependencies);
        return this;
    };
    StageBuilderImpl.prototype.withSingletonFromFactory = function (id, factoryFn, dependencies) {
        this.instance.getModules().registerSingletonWithFactory(id, factoryFn, dependencies);
        return this;
    };
    StageBuilderImpl.prototype.withImplicit = function (id, template, config) {
        var _this = this;
        this.withPrototypeFromFactory(id, function () { return new AnonymousComponent_1.default(_this.getDefaultModule(), template, config); });
        return this;
    };
    StageBuilderImpl.prototype.withCapability = function (capability) {
        ObjectUtils_1.requireNotNull(capability, "capability")(this);
        return this;
    };
    StageBuilderImpl.prototype.withScopeItem = function (name, item) {
        this.instance.getModules().getScope().add(name, item);
        return this;
    };
    StageBuilderImpl.prototype.withProperties = function (properties) {
        this.instance.getProperties().load(properties);
        return this;
    };
    StageBuilderImpl.prototype.build = function () {
        return this.instance;
    };
    return StageBuilderImpl;
}());
exports.default = StageBuilderImpl;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Component_1 = __importDefault(__webpack_require__(11));
var ComponentConfig_1 = __webpack_require__(9);
var ObjectUtils_1 = __webpack_require__(0);
var AnonymousComponent = /** @class */ (function (_super) {
    __extends(AnonymousComponent, _super);
    function AnonymousComponent(module, template, config) {
        var _this = this;
        var configInstance = ObjectUtils_1.isDefined(config) ? config : new ComponentConfig_1.ComponentConfigImpl();
        configInstance.setModule(module);
        _this = _super.call(this, template, configInstance) || this;
        return _this;
    }
    return AnonymousComponent;
}(Component_1.default));
exports.default = AnonymousComponent;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectUtils_1 = __webpack_require__(0);
var LoggerFactory_1 = __importDefault(__webpack_require__(1));
var ModulesContextImpl_1 = __importDefault(__webpack_require__(19));
var ValidationRegExp_1 = __webpack_require__(8);
var Constants_1 = __webpack_require__(2);
var DomUtils_1 = __webpack_require__(7);
var StageRendererImpl_1 = __importDefault(__webpack_require__(125));
var RootComponent_1 = __importDefault(__webpack_require__(33));
var StageImpl = /** @class */ (function () {
    function StageImpl(rootSelector) {
        this.rootSelector = ObjectUtils_1.requireNotNull(rootSelector, "rootSelector");
        this.logger = LoggerFactory_1.default.getLogger("Stage");
        this.modules = new ModulesContextImpl_1.default();
        this.started = false;
        this.initializers = [];
        this.topComponentIds = [];
        this.bottomComponentIds = [];
        this.root = null;
    }
    StageImpl.prototype.withInitializer = function (callback) {
        ObjectUtils_1.requireNotNull(callback, "callback");
        this.initializers.push(callback);
        return this;
    };
    StageImpl.prototype.withComponentBefore = function (id, moduleName) {
        ObjectUtils_1.requireValid(id, "id", ValidationRegExp_1.VALID_ID);
        this.topComponentIds.push({
            componentId: id,
            moduleId: moduleName || Constants_1.DEFAULT_MODULE_KEY
        });
    };
    StageImpl.prototype.withComponentAfter = function (id, moduleName) {
        ObjectUtils_1.requireValid(id, "id", ValidationRegExp_1.VALID_ID);
        this.bottomComponentIds.push({
            componentId: id,
            moduleId: moduleName || Constants_1.DEFAULT_MODULE_KEY
        });
    };
    StageImpl.prototype.start = function () {
        var _this = this;
        this.logger.debug("Start Requested");
        if (this.started) {
            this.logger.debug("Aleady Started");
            return this;
        }
        this.logger.debug("Cydran Starting");
        this.modules.registerConstant("stage", this);
        DomUtils_1.domReady(function () { return _this.domReady(); });
        return this;
    };
    StageImpl.prototype.setComponent = function (component) {
        this.root.setChild("body", component);
        return this;
    };
    StageImpl.prototype.setComponentFromRegistry = function (componentName, defaultComponentName) {
        ObjectUtils_1.requireNotNull(componentName, "componentName");
        this.root.setChildFromRegistry("body", componentName, defaultComponentName);
        return this;
    };
    StageImpl.prototype.get = function (id) {
        ObjectUtils_1.requireValid(id, "id", ValidationRegExp_1.VALID_ID);
        return this.root.get(id);
    };
    StageImpl.prototype.getModules = function () {
        return this.modules;
    };
    StageImpl.prototype.getModule = function (name) {
        return this.modules.getModule(name);
    };
    StageImpl.prototype.getDefaultModule = function () {
        return this.modules.getDefaultModule();
    };
    StageImpl.prototype.forEach = function (fn) {
        this.modules.forEach(fn);
    };
    StageImpl.prototype.broadcast = function (channelName, messageName, payload) {
        this.modules.broadcast(channelName, messageName, payload);
    };
    StageImpl.prototype.registerConstant = function (id, instance) {
        this.modules.registerConstant(id, instance);
    };
    StageImpl.prototype.registerPrototype = function (id, classInstance, dependencies) {
        this.modules.registerPrototype(id, classInstance, dependencies);
    };
    StageImpl.prototype.registerSingleton = function (id, classInstance, dependencies) {
        this.modules.registerSingleton(id, classInstance, dependencies);
    };
    StageImpl.prototype.getScope = function () {
        return this.modules.getScope();
    };
    StageImpl.prototype.dispose = function () {
        this.modules.dispose();
        this.modules = null;
    };
    StageImpl.prototype.isStarted = function () {
        return this.started;
    };
    StageImpl.prototype.getProperties = function () {
        return this.getModules().getProperties();
    };
    StageImpl.prototype.domReady = function () {
        this.logger.debug("DOM Ready");
        var renderer = new StageRendererImpl_1.default(this.rootSelector, this.topComponentIds, this.bottomComponentIds);
        this.root = new RootComponent_1.default(this.modules.getDefaultModule(), renderer);
        this.root.message(Constants_1.INTERNAL_DIRECT_CHANNEL_NAME, "setParent", null);
        this.started = true;
        this.logger.debug("Running initializers");
        for (var _i = 0, _a = this.initializers; _i < _a.length; _i++) {
            var initializer = _a[_i];
            initializer.apply(this, [this]);
        }
        this.logger.debug("Startup Complete");
    };
    return StageImpl;
}());
exports.default = StageImpl;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DomUtils_1 = __webpack_require__(7);
var SelectorError_1 = __importDefault(__webpack_require__(32));
var StageRendererImpl = /** @class */ (function () {
    function StageRendererImpl(selector, topComponentIds, bottomComponentIds) {
        this.selector = selector;
        this.topComponentIds = topComponentIds;
        this.bottomComponentIds = bottomComponentIds;
    }
    StageRendererImpl.prototype.render = function () {
        var elements = window.document.querySelectorAll(this.selector);
        var eLength = ((elements) ? elements.length : 0);
        var errMsg = (eLength !== 1) ? "CSS selector MUST identify single HTMLElement: '%pattern%' - %qty% found" : null;
        if (errMsg) {
            var patSubObj = { "%pattern%": this.selector, "%qty%": eLength };
            throw new SelectorError_1.default(errMsg, patSubObj);
        }
        var element = elements[0];
        while (element.hasChildNodes()) {
            element.removeChild(element.firstChild);
        }
        for (var _i = 0, _a = this.topComponentIds; _i < _a.length; _i++) {
            var pair = _a[_i];
            var componentDiv = DomUtils_1.createElementOffDom("script");
            componentDiv.setAttribute("type", "cydran/region");
            componentDiv.setAttribute("c:component", pair.componentId);
            componentDiv.setAttribute("c:module", pair.moduleId);
            element.appendChild(componentDiv);
        }
        var regionDiv = DomUtils_1.createElementOffDom("script");
        regionDiv.setAttribute("type", "cydran/region");
        regionDiv.setAttribute("c:name", "body");
        element.appendChild(regionDiv);
        for (var _b = 0, _c = this.bottomComponentIds; _b < _c.length; _b++) {
            var pair = _c[_b];
            var componentDiv = DomUtils_1.createElementOffDom("script");
            componentDiv.setAttribute("type", "cydran/region");
            componentDiv.setAttribute("c:component", pair.componentId);
            componentDiv.setAttribute("c:module", pair.moduleId);
            element.appendChild(componentDiv);
        }
        return element;
    };
    return StageRendererImpl;
}());
exports.default = StageRendererImpl;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectUtils_1 = __webpack_require__(0);
var WatcherImpl_1 = __importDefault(__webpack_require__(20));
var SortPhaseImpl_1 = __importDefault(__webpack_require__(128));
var PredicatePhaseImpl_1 = __importDefault(__webpack_require__(130));
var IdentityPhaseImpl_1 = __importDefault(__webpack_require__(132));
var SimplePredicatePhaseImpl_1 = __importDefault(__webpack_require__(133));
var DelegatingPhaseImpl_1 = __importDefault(__webpack_require__(134));
var LoggerFactory_1 = __importDefault(__webpack_require__(1));
var Constants_1 = __webpack_require__(2);
var FilterBuilderImpl = /** @class */ (function () {
    function FilterBuilderImpl(watchable, watcher) {
        this.watchable = ObjectUtils_1.requireNotNull(watchable, "watchable");
        this.watcher = ObjectUtils_1.requireNotNull(watcher, "watcher");
        this.phase = new IdentityPhaseImpl_1.default();
    }
    FilterBuilderImpl.prototype.withPredicate = function (expression) {
        var parameterExpressions = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameterExpressions[_i - 1] = arguments[_i];
        }
        this.phase = new PredicatePhaseImpl_1.default(this.phase, expression, this.watchable, parameterExpressions);
        return this;
    };
    FilterBuilderImpl.prototype.withSimplePredicate = function (predicate) {
        this.phase = new SimplePredicatePhaseImpl_1.default(this.phase, predicate);
        return this;
    };
    FilterBuilderImpl.prototype.withPhase = function (fn) {
        this.phase = new DelegatingPhaseImpl_1.default(this.phase, fn);
        return this;
    };
    FilterBuilderImpl.prototype.withSort = function (expression) {
        var parameterExpressions = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameterExpressions[_i - 1] = arguments[_i];
        }
        this.phase = new SortPhaseImpl_1.default(this.phase, expression, this.watchable, parameterExpressions);
        return this;
    };
    FilterBuilderImpl.prototype.with = function (fn) {
        fn.apply(fn, [this]);
        return this;
    };
    FilterBuilderImpl.prototype.withLimit = function (limit) {
        return this.withSimplePredicate(function (index, value) { return index < limit; });
    };
    FilterBuilderImpl.prototype.build = function () {
        return new FilterImpl(this.watchable, this.watcher, this.phase);
    };
    FilterBuilderImpl.prototype.paged = function () {
        return new PagedFilterImpl(this.build());
    };
    FilterBuilderImpl.prototype.limited = function () {
        return new LimitOffsetFilterImpl(this.build());
    };
    return FilterBuilderImpl;
}());
var FilterImpl = /** @class */ (function () {
    function FilterImpl(watchable, watcher, phase) {
        var _this = this;
        this.logger = LoggerFactory_1.default.getLogger("FilterImpl");
        this.filteredItems = [];
        this.phase = phase;
        this.watchable = ObjectUtils_1.requireNotNull(watchable, "watchable");
        this.watcher = ObjectUtils_1.requireNotNull(watcher, "watcher").addCallback(this, function () { return _this.refresh(); });
        this.callbacks = [];
        this.phase.setCallback(function () { return _this.refresh(); });
    }
    FilterImpl.prototype.items = function () {
        return this.filteredItems;
    };
    FilterImpl.prototype.extend = function () {
        return new FilterBuilderImpl(this.watchable, this);
    };
    FilterImpl.prototype.get = function () {
        return this.items();
    };
    FilterImpl.prototype.addCallback = function (context, callback) {
        ObjectUtils_1.requireNotNull(context, "context");
        ObjectUtils_1.requireNotNull(callback, "callback");
        this.callbacks.push({
            context: context,
            fn: callback
        });
        return this;
    };
    FilterImpl.prototype.invalidate = function () {
        this.logger.trace("Invalidated");
        this.phase.invalidate();
    };
    FilterImpl.prototype.filter = function (items) {
        var source = [];
        this.logger.ifTrace(function () { return ({
            message: "Before filtering",
            items: items
        }); });
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < items.length; i++) {
            source.push(items[i]);
        }
        this.logger.trace("Invalidated");
        var result = this.phase.process(source);
        this.logger.ifTrace(function () { return ({
            message: "After filtering",
            items: result
        }); });
        return result;
    };
    FilterImpl.prototype.refresh = function () {
        var result = this.filter(this.watcher.get());
        if (ObjectUtils_1.isDefined(result)) {
            this.filteredItems = result;
            for (var _i = 0, _a = this.callbacks; _i < _a.length; _i++) {
                var callback = _a[_i];
                callback.fn.apply(callback.fn, []);
            }
        }
    };
    return FilterImpl;
}());
var LimitOffsetFilterImpl = /** @class */ (function () {
    function LimitOffsetFilterImpl(parent) {
        var _this = this;
        this.logger = LoggerFactory_1.default.getLogger("LimitOffsetFilterImpl");
        this.parent = ObjectUtils_1.requireNotNull(parent, "parent");
        this.limiting = this.parent.extend()
            .withPhase(function (input) {
            var result = input.slice(_this.offset);
            if (ObjectUtils_1.isDefined(_this.limit)) {
                result = result.slice(0, _this.limit);
            }
            return result;
        })
            .build();
        this.offset = 0;
        this.limit = null;
    }
    LimitOffsetFilterImpl.prototype.getLimit = function () {
        return this.limit;
    };
    LimitOffsetFilterImpl.prototype.setLimit = function (limit) {
        this.logger.ifTrace(function () { return "Limit set to: " + limit; });
        this.limit = ObjectUtils_1.isDefined(limit) ? Math.floor(limit) : null;
        this.limiting.invalidate();
        this.limiting.refresh();
    };
    LimitOffsetFilterImpl.prototype.getOffset = function () {
        return this.offset;
    };
    LimitOffsetFilterImpl.prototype.setOffset = function (offset) {
        this.logger.ifTrace(function () { return "Offset set to: " + offset; });
        this.offset = ObjectUtils_1.isDefined(offset) ? Math.floor(offset) : 0;
        this.limiting.invalidate();
        this.limiting.refresh();
    };
    LimitOffsetFilterImpl.prototype.setLimitAndOffset = function (limit, offset) {
        this.logger.ifTrace(function () { return "Limit set to: " + limit; });
        this.logger.ifTrace(function () { return "Offset set to: " + offset; });
        var oldLimit = this.limit;
        var oldOffset = this.offset;
        this.limit = limit;
        this.offset = ObjectUtils_1.isDefined(offset) ? offset : 0;
        if (!ObjectUtils_1.equals(Constants_1.DEFAULT_EQUALS_DEPTH, oldLimit, this.limit) || !ObjectUtils_1.equals(Constants_1.DEFAULT_EQUALS_DEPTH, oldOffset, this.offset)) {
            this.limiting.invalidate();
            this.limiting.refresh();
        }
    };
    LimitOffsetFilterImpl.prototype.items = function () {
        return this.limiting.items();
    };
    LimitOffsetFilterImpl.prototype.extend = function () {
        return this.limiting.extend();
    };
    LimitOffsetFilterImpl.prototype.addCallback = function (context, callback) {
        this.limiting.addCallback(context, callback);
    };
    return LimitOffsetFilterImpl;
}());
var PagedFilterImpl = /** @class */ (function () {
    function PagedFilterImpl(parent) {
        var _this = this;
        this.logger = LoggerFactory_1.default.getLogger("PagedFilterImpl");
        this.parent = ObjectUtils_1.requireNotNull(parent, "parent");
        this.limited = this.parent.extend().limited();
        this.page = 0;
        this.pageSize = 10;
        this.parent.addCallback(this, function () {
            _this.enforcePageBounds();
            _this.sync();
        });
        this.sync();
    }
    PagedFilterImpl.prototype.getPageSize = function () {
        return this.pageSize;
    };
    PagedFilterImpl.prototype.setPageSize = function (size) {
        this.logger.ifTrace(function () { return "Page size set to: " + size; });
        this.pageSize = (size < 1) ? 1 : Math.floor(size);
        this.sync();
    };
    PagedFilterImpl.prototype.getTotalPages = function () {
        return Math.ceil(this.parent.items().length / this.pageSize);
    };
    PagedFilterImpl.prototype.getPage = function () {
        return this.page;
    };
    PagedFilterImpl.prototype.setPage = function (page) {
        this.logger.ifTrace(function () { return "Page set to: " + page; });
        this.page = Math.floor(page);
        this.enforcePageBounds();
        this.sync();
    };
    PagedFilterImpl.prototype.toPrevious = function () {
        this.setPage(this.page - 1);
    };
    PagedFilterImpl.prototype.toNext = function () {
        this.setPage(this.page + 1);
    };
    PagedFilterImpl.prototype.toStart = function () {
        this.setPage(0);
    };
    PagedFilterImpl.prototype.toEnd = function () {
        this.setPage(this.getTotalPages());
    };
    PagedFilterImpl.prototype.items = function () {
        return this.limited.items();
    };
    PagedFilterImpl.prototype.extend = function () {
        return this.limited.extend();
    };
    PagedFilterImpl.prototype.addCallback = function (context, callback) {
        this.limited.addCallback(context, callback);
    };
    PagedFilterImpl.prototype.enforcePageBounds = function () {
        var _this = this;
        if (this.page < 0) {
            this.page = 0;
        }
        if (this.page >= this.getTotalPages()) {
            this.page = this.getTotalPages() - 1;
        }
        if (this.page < 0) {
            this.page = 0;
        }
        this.logger.ifTrace(function () { return "Page normalized to: " + _this.page; });
    };
    PagedFilterImpl.prototype.isAtBeginning = function () {
        return this.atBeginning;
    };
    PagedFilterImpl.prototype.isAtEnd = function () {
        return this.atEnd;
    };
    PagedFilterImpl.prototype.isMoreBefore = function () {
        return this.moreBefore;
    };
    PagedFilterImpl.prototype.isMoreAfter = function () {
        return this.moreAfter;
    };
    PagedFilterImpl.prototype.sync = function () {
        this.atBeginning = (this.page === 0);
        this.atEnd = (this.page >= this.getTotalPages() - 1);
        this.moreBefore = !this.atBeginning;
        this.moreAfter = !this.atEnd;
        this.limited.setLimitAndOffset(this.pageSize, this.page * this.pageSize);
    };
    return PagedFilterImpl;
}());
var Filters = /** @class */ (function () {
    function Filters() {
    }
    Filters.builder = function (watchable, expression) {
        ObjectUtils_1.requireNotNull(watchable, "watchable");
        ObjectUtils_1.requireNotNull(expression, "expression");
        var watcher = new WatcherImpl_1.default(watchable, expression);
        return new FilterBuilderImpl(watchable, watcher);
    };
    return Filters;
}());
exports.default = Filters;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractPhaseImpl_1 = __importDefault(__webpack_require__(15));
var ObjectUtils_1 = __webpack_require__(0);
var WatcherImpl_1 = __importDefault(__webpack_require__(20));
var ComparisonEvaluator_1 = __importDefault(__webpack_require__(129));
var SortPhaseImpl = /** @class */ (function (_super) {
    __extends(SortPhaseImpl, _super);
    function SortPhaseImpl(previous, expression, watchable, parameterExpressions) {
        var _this = _super.call(this, "SortPhaseImpl - " + expression, previous) || this;
        ObjectUtils_1.requireNotNull(expression, "expression");
        _this.evaluator = new ComparisonEvaluator_1.default(expression, watchable.getWatchContext());
        _this.valueFunctions = [];
        var _loop_1 = function (i) {
            var parameterExpression = parameterExpressions[i];
            var watcher = new WatcherImpl_1.default(watchable, parameterExpression).addCallback(this_1, this_1.onChange);
            this_1.valueFunctions.push(function () { return watcher.get(); });
        };
        var this_1 = this;
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < parameterExpressions.length; i++) {
            _loop_1(i);
        }
        return _this;
    }
    SortPhaseImpl.prototype.execute = function (items) {
        var _this = this;
        this.getLogger().ifTrace(function () { return ({
            message: "Before sort",
            items: items
        }); });
        items.sort(function (first, second) { return _this.evaluator.compare(first, second, _this.valueFunctions); });
        this.getLogger().ifTrace(function () { return ({
            message: "After sort",
            items: items
        }); });
        return items;
    };
    return SortPhaseImpl;
}(AbstractPhaseImpl_1.default));
exports.default = SortPhaseImpl;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LoggerFactory_1 = __importDefault(__webpack_require__(1));
var ComparisonEvaluator = /** @class */ (function () {
    function ComparisonEvaluator(expression, scope) {
        this.logger = LoggerFactory_1.default.getLogger("Evaluator: " + expression);
        this.expression = expression;
        this.scope = scope;
        this.code = '"use strict"; ' + this.scope.getCode() + ' var a = arguments[1]; var b = arguments[2]; var p = arguments[3]; return (' + this.expression + ');';
    }
    ComparisonEvaluator.prototype.compare = function (first, second, values) {
        var result = 0;
        var firstFn = function () { return first; };
        var secondFn = function () { return second; };
        var valueFn = function (i) { return values[i](); };
        try {
            result = Function(this.code).apply({}, [this.scope.getItems(), firstFn, secondFn, valueFn]);
        }
        catch (e) {
            this.logger.error("\nAn exception (" + e.name + ") was thrown invoking the element mediator expression: "
                + this.expression + "\n\nIn context:\n" + this.code + "\n\nException message: " + e.message + "\n\n", e);
        }
        return result;
    };
    return ComparisonEvaluator;
}());
exports.default = ComparisonEvaluator;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractPhaseImpl_1 = __importDefault(__webpack_require__(15));
var ObjectUtils_1 = __webpack_require__(0);
var IndexedEvaluator_1 = __importDefault(__webpack_require__(131));
var Reducers_1 = __webpack_require__(6);
var WatcherImpl_1 = __importDefault(__webpack_require__(20));
var PredicatePhaseImpl = /** @class */ (function (_super) {
    __extends(PredicatePhaseImpl, _super);
    function PredicatePhaseImpl(previous, expression, watchable, parameterExpressions) {
        var _this = _super.call(this, "PredicatePhaseImpl - " + expression, previous) || this;
        ObjectUtils_1.requireNotNull(expression, "expression");
        _this.evaluator = new IndexedEvaluator_1.default(expression, watchable.getWatchContext(), Reducers_1.asBoolean);
        _this.valueFunctions = [];
        var _loop_1 = function (i) {
            var parameterExpression = parameterExpressions[i];
            var watcher = new WatcherImpl_1.default(watchable, parameterExpression).addCallback(this_1, this_1.onChange);
            this_1.valueFunctions.push(function () { return watcher.get(); });
        };
        var this_1 = this;
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < parameterExpressions.length; i++) {
            _loop_1(i);
        }
        return _this;
    }
    PredicatePhaseImpl.prototype.execute = function (items) {
        var result = [];
        this.getLogger().ifTrace(function () { return ({
            message: "Before predicate filtration",
            items: items
        }); });
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < items.length; i++) {
            var current = items[i];
            if (this.evaluator.test(current, i, this.valueFunctions)) {
                result.push(current);
            }
        }
        this.getLogger().ifTrace(function () { return ({
            message: "After predicate filtration",
            items: result
        }); });
        return result;
    };
    return PredicatePhaseImpl;
}(AbstractPhaseImpl_1.default));
exports.default = PredicatePhaseImpl;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LoggerFactory_1 = __importDefault(__webpack_require__(1));
var Reducers_1 = __webpack_require__(6);
var ObjectUtils_1 = __webpack_require__(0);
var IndexedEvaluator = /** @class */ (function () {
    function IndexedEvaluator(expression, scope, reducerFn) {
        this.reducerFn = ObjectUtils_1.isDefined(reducerFn) ? reducerFn : Reducers_1.asIdentity;
        this.logger = LoggerFactory_1.default.getLogger("Evaluator: " + expression);
        this.expression = expression;
        this.scope = scope;
        this.code = '"use strict"; ' + this.scope.getCode() + ' var v = arguments[1]; var $index = arguments[2]; var p = arguments[3]; return (' + this.expression + ');';
    }
    IndexedEvaluator.prototype.test = function (subject, index, values) {
        var value = null;
        var subjectFn = function () { return subject; };
        var valueFn = function (i) { return values[i](); };
        try {
            value = Function(this.code).apply({}, [this.scope.getItems(), subjectFn, index, valueFn]);
        }
        catch (e) {
            this.logger.error("\nAn exception (" + e.name + ") was thrown invoking the element mediator expression: "
                + this.expression + "\n\nIn context:\n" + this.code + "\n\nException message: " + e.message + "\n\n", e);
        }
        var result = this.reducerFn(value);
        return result;
    };
    return IndexedEvaluator;
}());
exports.default = IndexedEvaluator;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IdentityPhaseImpl = /** @class */ (function () {
    function IdentityPhaseImpl() {
    }
    IdentityPhaseImpl.prototype.process = function (items) {
        return items;
    };
    IdentityPhaseImpl.prototype.setCallback = function (callback) {
        // Intentionally do nothing
    };
    IdentityPhaseImpl.prototype.invalidate = function () {
        // Intentionally do nothing
    };
    return IdentityPhaseImpl;
}());
exports.default = IdentityPhaseImpl;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractPhaseImpl_1 = __importDefault(__webpack_require__(15));
var ObjectUtils_1 = __webpack_require__(0);
var SimplePredicatePhaseImpl = /** @class */ (function (_super) {
    __extends(SimplePredicatePhaseImpl, _super);
    function SimplePredicatePhaseImpl(previous, predicate) {
        var _this = _super.call(this, "SimplePredicatePhaseImpl", previous) || this;
        _this.predicate = ObjectUtils_1.requireNotNull(predicate, "predicate");
        return _this;
    }
    SimplePredicatePhaseImpl.prototype.execute = function (items) {
        var result = [];
        this.getLogger().ifTrace(function () { return ({
            message: "Before predicate filtration",
            items: items
        }); });
        // tslint:disable-next-line:prefer-for-of
        for (var i = 0; i < items.length; i++) {
            var current = items[i];
            if (this.predicate.apply({}, [i, current])) {
                result.push(current);
            }
        }
        this.getLogger().ifTrace(function () { return ({
            message: "After predicate filtration",
            items: result
        }); });
        return result;
    };
    return SimplePredicatePhaseImpl;
}(AbstractPhaseImpl_1.default));
exports.default = SimplePredicatePhaseImpl;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractPhaseImpl_1 = __importDefault(__webpack_require__(15));
var ObjectUtils_1 = __webpack_require__(0);
var DelegatingPhaseImpl = /** @class */ (function (_super) {
    __extends(DelegatingPhaseImpl, _super);
    function DelegatingPhaseImpl(previous, fn) {
        var _this = _super.call(this, "Delegating Phase", previous) || this;
        _this.fn = ObjectUtils_1.requireNotNull(fn, "fn");
        return _this;
    }
    DelegatingPhaseImpl.prototype.execute = function (items) {
        return this.fn.apply({}, [items]);
    };
    return DelegatingPhaseImpl;
}(AbstractPhaseImpl_1.default));
exports.default = DelegatingPhaseImpl;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DigesterImpl_1 = __importDefault(__webpack_require__(27));
var HooksImpl = /** @class */ (function () {
    function HooksImpl() {
    }
    HooksImpl.prototype.getDigestionCycleStartHooks = function () {
        return DigesterImpl_1.default.DIGESTION_CYCLE_START_HOOKS;
    };
    HooksImpl.INSTANCE = new HooksImpl();
    return HooksImpl;
}());
exports.default = HooksImpl;


/***/ })
/******/ ]);
});
//# sourceMappingURL=cydran.js.map