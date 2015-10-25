(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require("../../node_modules/material-design-lite/material.js");

var _controllersAppControllerJs = require("./controllers/AppController.js");

var _controllersAppControllerJs2 = _interopRequireDefault(_controllersAppControllerJs);

new _controllersAppControllerJs2["default"]();

},{"../../node_modules/material-design-lite/material.js":8,"./controllers/AppController.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _NavigationControllerJs = require("./NavigationController.js");

var _NavigationControllerJs2 = _interopRequireDefault(_NavigationControllerJs);

var _OverviewControllerJs = require("./OverviewController.js");

var _OverviewControllerJs2 = _interopRequireDefault(_OverviewControllerJs);

var _ScheduleControllerJs = require("./ScheduleController.js");

var _ScheduleControllerJs2 = _interopRequireDefault(_ScheduleControllerJs);

var AppController = function AppController() {
    _classCallCheck(this, AppController);

    var navigation = new _NavigationControllerJs2["default"]();
    navigation.add('Overview', new _OverviewControllerJs2["default"](), true);
    navigation.add('Schedule', new _ScheduleControllerJs2["default"]());
};

exports["default"] = AppController;
module.exports = exports["default"];

},{"./NavigationController.js":3,"./OverviewController.js":4,"./ScheduleController.js":5}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ViewControllerJs = require('./ViewController.js');

var _ViewControllerJs2 = _interopRequireDefault(_ViewControllerJs);

var NavigationController = (function () {
    function NavigationController() {
        _classCallCheck(this, NavigationController);

        this.container = document.querySelector('#navigation');
    }

    /**
     * Add a menu item to the navigation
     * @param itemText The name of the menu item
     * @param controller The ViewController to switch on click
     * @param setDefault Whether to set this item as the default selection
     */

    _createClass(NavigationController, [{
        key: 'add',
        value: function add(itemText, controller, setDefault) {
            var _this = this;

            if (!controller instanceof _ViewControllerJs2['default']) {
                throw "Navigation controller must be of type ViewController";
            }
            var a = document.createElement('a');
            a.classList.add('mdl-navigation__link');
            a.href = "#";
            a.textContent = itemText;
            a.addEventListener('click', function (e) {
                e.preventDefault();
                _this.switchView(controller);
            });
            this.container.appendChild(a);
            if (setDefault) {
                a.click();
            }
        }

        /**
         * Switches the view to show
         * @param controller The ViewController to switch to
         */
    }, {
        key: 'switchView',
        value: function switchView(controller) {
            if (this.currentController) {
                this.currentController.hide();
            }
            this.currentController = controller;
            this.currentController.show();
            this.closeDrawer();
        }

        /**
         * Causes the navigation drawer to go away
         */
    }, {
        key: 'closeDrawer',
        value: function closeDrawer() {
            if (!this.navButton) {
                this.navButton = document.querySelector('.mdl-layout__drawer-button');
            }
            if (this.navButton) {
                this.navButton.click();
            }
        }
    }]);

    return NavigationController;
})();

exports['default'] = NavigationController;
module.exports = exports['default'];

},{"./ViewController.js":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ViewControllerJs = require("./ViewController.js");

var _ViewControllerJs2 = _interopRequireDefault(_ViewControllerJs);

var _modelsExerciseJs = require("../models/Exercise.js");

var _modelsExerciseJs2 = _interopRequireDefault(_modelsExerciseJs);

var OverviewController = (function (_ViewController) {
    _inherits(OverviewController, _ViewController);

    function OverviewController() {
        var _this = this;

        _classCallCheck(this, OverviewController);

        _get(Object.getPrototypeOf(OverviewController.prototype), "constructor", this).call(this, document.querySelector('#overview'));

        this.listEl = document.querySelector('#exerciseList');
        this.populateExerciseList();

        this.addExerciseButton = document.querySelector('#addExerciseButton');
        this.addExerciseButton.addEventListener('click', function () {
            return _this.addExercise();
        });
    }

    /**
     * Adds a new exercise
     */

    _createClass(OverviewController, [{
        key: "addExercise",
        value: function addExercise() {
            var name = "pushups";
            var reps = 3;
            _modelsExerciseJs2["default"].add(name, reps);
            this.addExerciseToDom(name, reps);
        }

        /**
         * Adds an exercise to the exercise list element in the dom
         * @param name
         * @param reps
         */
    }, {
        key: "addExerciseToDom",
        value: function addExerciseToDom(name, reps) {
            var row = document.createElement("tr");

            var nameCol = document.createElement("td");
            nameCol.textContent = name;
            nameCol.className = "mdl-data-table__cell--non-numeric";

            var repsCol = document.createElement("td");
            repsCol.textContent = reps;

            row.appendChild(nameCol);
            row.appendChild(repsCol);
            this.listEl.appendChild(row);
        }

        /**
         * Populates the exercise list from local data
         */
    }, {
        key: "populateExerciseList",
        value: function populateExerciseList() {
            var exercises = _modelsExerciseJs2["default"].get();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = exercises[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var exercise = _step.value;

                    this.addExerciseToDom(exercise.name, exercise.reps);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator["return"]) {
                        _iterator["return"]();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }]);

    return OverviewController;
})(_ViewControllerJs2["default"]);

exports["default"] = OverviewController;
module.exports = exports["default"];

},{"../models/Exercise.js":7,"./ViewController.js":6}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ViewControllerJs = require("./ViewController.js");

var _ViewControllerJs2 = _interopRequireDefault(_ViewControllerJs);

var ScheduleController = (function (_ViewController) {
    _inherits(ScheduleController, _ViewController);

    function ScheduleController() {
        _classCallCheck(this, ScheduleController);

        _get(Object.getPrototypeOf(ScheduleController.prototype), "constructor", this).call(this, document.querySelector('#schedule'));
    }

    return ScheduleController;
})(_ViewControllerJs2["default"]);

exports["default"] = ScheduleController;
module.exports = exports["default"];

},{"./ViewController.js":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ViewController = (function () {
    function ViewController(container) {
        _classCallCheck(this, ViewController);

        this.container = container;
        this.hide();
    }

    _createClass(ViewController, [{
        key: "show",
        value: function show() {
            this.container.style.display = "block";
        }
    }, {
        key: "hide",
        value: function hide() {
            this.container.style.display = "none";
        }
    }]);

    return ViewController;
})();

exports["default"] = ViewController;
module.exports = exports["default"];

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Exercise = (function () {
    function Exercise() {
        _classCallCheck(this, Exercise);
    }

    _createClass(Exercise, null, [{
        key: 'add',

        /**
         * Stores a new exercise
         * @param name
         * @param reps
         */
        value: function add(name, reps) {
            var exercises = this.get();
            exercises.push({
                name: name,
                reps: reps
            });
            localStorage.setItem('exercises', JSON.stringify(exercises));
        }

        /**
         * Returns all the stored exercises
         * @returns {Array}
         */
    }, {
        key: 'get',
        value: function get() {
            return JSON.parse(localStorage.getItem('exercises')) || [];
        }
    }]);

    return Exercise;
})();

exports['default'] = Exercise;
module.exports = exports['default'];

},{}],8:[function(require,module,exports){
;(function() {
"use strict";

/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A component handler interface using the revealing module design pattern.
 * More details on this design pattern here:
 * https://github.com/jasonmayes/mdl-component-design-pattern
 *
 * @author Jason Mayes.
 */
/* exported componentHandler */

// Pre-defining the componentHandler interface, for closure documentation and
// static verification.
var componentHandler = {
  /**
   * Searches existing DOM for elements of our component type and upgrades them
   * if they have not already been upgraded.
   *
   * @param {string=} optJsClass the programatic name of the element class we
   * need to create a new instance of.
   * @param {string=} optCssClass the name of the CSS class elements of this
   * type will have.
   */
  upgradeDom: function(optJsClass, optCssClass) {},
  /**
   * Upgrades a specific element rather than all in the DOM.
   *
   * @param {!Element} element The element we wish to upgrade.
   * @param {string=} optJsClass Optional name of the class we want to upgrade
   * the element to.
   */
  upgradeElement: function(element, optJsClass) {},
  /**
   * Upgrades a specific list of elements rather than all in the DOM.
   *
   * @param {!Element|!Array<!Element>|!NodeList|!HTMLCollection} elements
   * The elements we wish to upgrade.
   */
  upgradeElements: function(elements) {},
  /**
   * Upgrades all registered components found in the current DOM. This is
   * automatically called on window load.
   */
  upgradeAllRegistered: function() {},
  /**
   * Allows user to be alerted to any upgrades that are performed for a given
   * component type
   *
   * @param {string} jsClass The class name of the MDL component we wish
   * to hook into for any upgrades performed.
   * @param {function(!HTMLElement)} callback The function to call upon an
   * upgrade. This function should expect 1 parameter - the HTMLElement which
   * got upgraded.
   */
  registerUpgradedCallback: function(jsClass, callback) {},
  /**
   * Registers a class for future use and attempts to upgrade existing DOM.
   *
   * @param {componentHandler.ComponentConfigPublic} config the registration configuration
   */
  register: function(config) {},
  /**
   * Downgrade either a given node, an array of nodes, or a NodeList.
   *
   * @param {!Node|!Array<!Node>|!NodeList} nodes
   */
  downgradeElements: function(nodes) {}
};

componentHandler = (function() {
  'use strict';

  /** @type {!Array<componentHandler.ComponentConfig>} */
  var registeredComponents_ = [];

  /** @type {!Array<componentHandler.Component>} */
  var createdComponents_ = [];

  var downgradeMethod_ = 'mdlDowngrade_';
  var componentConfigProperty_ = 'mdlComponentConfigInternal_';

  /**
   * Searches registered components for a class we are interested in using.
   * Optionally replaces a match with passed object if specified.
   *
   * @param {string} name The name of a class we want to use.
   * @param {componentHandler.ComponentConfig=} optReplace Optional object to replace match with.
   * @return {!Object|boolean}
   * @private
   */
  function findRegisteredClass_(name, optReplace) {
    for (var i = 0; i < registeredComponents_.length; i++) {
      if (registeredComponents_[i].className === name) {
        if (typeof optReplace !== 'undefined') {
          registeredComponents_[i] = optReplace;
        }
        return registeredComponents_[i];
      }
    }
    return false;
  }

  /**
   * Returns an array of the classNames of the upgraded classes on the element.
   *
   * @param {!Element} element The element to fetch data from.
   * @return {!Array<string>}
   * @private
   */
  function getUpgradedListOfElement_(element) {
    var dataUpgraded = element.getAttribute('data-upgraded');
    // Use `['']` as default value to conform the `,name,name...` style.
    return dataUpgraded === null ? [''] : dataUpgraded.split(',');
  }

  /**
   * Returns true if the given element has already been upgraded for the given
   * class.
   *
   * @param {!Element} element The element we want to check.
   * @param {string} jsClass The class to check for.
   * @returns {boolean}
   * @private
   */
  function isElementUpgraded_(element, jsClass) {
    var upgradedList = getUpgradedListOfElement_(element);
    return upgradedList.indexOf(jsClass) !== -1;
  }

  /**
   * Searches existing DOM for elements of our component type and upgrades them
   * if they have not already been upgraded.
   *
   * @param {string=} optJsClass the programatic name of the element class we
   * need to create a new instance of.
   * @param {string=} optCssClass the name of the CSS class elements of this
   * type will have.
   */
  function upgradeDomInternal(optJsClass, optCssClass) {
    if (typeof optJsClass === 'undefined' &&
        typeof optCssClass === 'undefined') {
      for (var i = 0; i < registeredComponents_.length; i++) {
        upgradeDomInternal(registeredComponents_[i].className,
            registeredComponents_[i].cssClass);
      }
    } else {
      var jsClass = /** @type {string} */ (optJsClass);
      if (typeof optCssClass === 'undefined') {
        var registeredClass = findRegisteredClass_(jsClass);
        if (registeredClass) {
          optCssClass = registeredClass.cssClass;
        }
      }

      var elements = document.querySelectorAll('.' + optCssClass);
      for (var n = 0; n < elements.length; n++) {
        upgradeElementInternal(elements[n], jsClass);
      }
    }
  }

  /**
   * Upgrades a specific element rather than all in the DOM.
   *
   * @param {!Element} element The element we wish to upgrade.
   * @param {string=} optJsClass Optional name of the class we want to upgrade
   * the element to.
   */
  function upgradeElementInternal(element, optJsClass) {
    // Verify argument type.
    if (!(typeof element === 'object' && element instanceof Element)) {
      throw new Error('Invalid argument provided to upgrade MDL element.');
    }
    var upgradedList = getUpgradedListOfElement_(element);
    var classesToUpgrade = [];
    // If jsClass is not provided scan the registered components to find the
    // ones matching the element's CSS classList.
    if (!optJsClass) {
      var classList = element.classList;
      registeredComponents_.forEach(function(component) {
        // Match CSS & Not to be upgraded & Not upgraded.
        if (classList.contains(component.cssClass) &&
            classesToUpgrade.indexOf(component) === -1 &&
            !isElementUpgraded_(element, component.className)) {
          classesToUpgrade.push(component);
        }
      });
    } else if (!isElementUpgraded_(element, optJsClass)) {
      classesToUpgrade.push(findRegisteredClass_(optJsClass));
    }

    // Upgrade the element for each classes.
    for (var i = 0, n = classesToUpgrade.length, registeredClass; i < n; i++) {
      registeredClass = classesToUpgrade[i];
      if (registeredClass) {
        // Mark element as upgraded.
        upgradedList.push(registeredClass.className);
        element.setAttribute('data-upgraded', upgradedList.join(','));
        var instance = new registeredClass.classConstructor(element);
        instance[componentConfigProperty_] = registeredClass;
        createdComponents_.push(instance);
        // Call any callbacks the user has registered with this component type.
        for (var j = 0, m = registeredClass.callbacks.length; j < m; j++) {
          registeredClass.callbacks[j](element);
        }

        if (registeredClass.widget) {
          // Assign per element instance for control over API
          element[registeredClass.className] = instance;
        }
      } else {
        throw new Error(
          'Unable to find a registered component for the given class.');
      }

      var ev = document.createEvent('Events');
      ev.initEvent('mdl-componentupgraded', true, true);
      element.dispatchEvent(ev);
    }
  }

  /**
   * Upgrades a specific list of elements rather than all in the DOM.
   *
   * @param {!Element|!Array<!Element>|!NodeList|!HTMLCollection} elements
   * The elements we wish to upgrade.
   */
  function upgradeElementsInternal(elements) {
    if (!Array.isArray(elements)) {
      if (typeof elements.item === 'function') {
        elements = Array.prototype.slice.call(/** @type {Array} */ (elements));
      } else {
        elements = [elements];
      }
    }
    for (var i = 0, n = elements.length, element; i < n; i++) {
      element = elements[i];
      if (element instanceof HTMLElement) {
        upgradeElementInternal(element);
        if (element.children.length > 0) {
          upgradeElementsInternal(element.children);
        }
      }
    }
  }

  /**
   * Registers a class for future use and attempts to upgrade existing DOM.
   *
   * @param {componentHandler.ComponentConfigPublic} config
   */
  function registerInternal(config) {
    // In order to support both Closure-compiled and uncompiled code accessing
    // this method, we need to allow for both the dot and array syntax for
    // property access. You'll therefore see the `foo.bar || foo['bar']`
    // pattern repeated across this method.
    var widgetMissing = (typeof config.widget === 'undefined' &&
        typeof config['widget'] === 'undefined');
    var widget = true;

    if (!widgetMissing) {
      widget = config.widget || config['widget'];
    }

    var newConfig = /** @type {componentHandler.ComponentConfig} */ ({
      classConstructor: config.constructor || config['constructor'],
      className: config.classAsString || config['classAsString'],
      cssClass: config.cssClass || config['cssClass'],
      widget: widget,
      callbacks: []
    });

    registeredComponents_.forEach(function(item) {
      if (item.cssClass === newConfig.cssClass) {
        throw new Error('The provided cssClass has already been registered: ' + item.cssClass);
      }
      if (item.className === newConfig.className) {
        throw new Error('The provided className has already been registered');
      }
    });

    if (config.constructor.prototype
        .hasOwnProperty(componentConfigProperty_)) {
      throw new Error(
          'MDL component classes must not have ' + componentConfigProperty_ +
          ' defined as a property.');
    }

    var found = findRegisteredClass_(config.classAsString, newConfig);

    if (!found) {
      registeredComponents_.push(newConfig);
    }
  }

  /**
   * Allows user to be alerted to any upgrades that are performed for a given
   * component type
   *
   * @param {string} jsClass The class name of the MDL component we wish
   * to hook into for any upgrades performed.
   * @param {function(!HTMLElement)} callback The function to call upon an
   * upgrade. This function should expect 1 parameter - the HTMLElement which
   * got upgraded.
   */
  function registerUpgradedCallbackInternal(jsClass, callback) {
    var regClass = findRegisteredClass_(jsClass);
    if (regClass) {
      regClass.callbacks.push(callback);
    }
  }

  /**
   * Upgrades all registered components found in the current DOM. This is
   * automatically called on window load.
   */
  function upgradeAllRegisteredInternal() {
    for (var n = 0; n < registeredComponents_.length; n++) {
      upgradeDomInternal(registeredComponents_[n].className);
    }
  }

  /**
   * Finds a created component by a given DOM node.
   *
   * @param {!Node} node
   * @return {*}
   */
  function findCreatedComponentByNodeInternal(node) {
    for (var n = 0; n < createdComponents_.length; n++) {
      var component = createdComponents_[n];
      if (component.element_ === node) {
        return component;
      }
    }
  }

  /**
   * Check the component for the downgrade method.
   * Execute if found.
   * Remove component from createdComponents list.
   *
   * @param {*} component
   */
  function deconstructComponentInternal(component) {
    if (component &&
        component[componentConfigProperty_]
          .classConstructor.prototype
          .hasOwnProperty(downgradeMethod_)) {
      component[downgradeMethod_]();
      var componentIndex = createdComponents_.indexOf(component);
      createdComponents_.splice(componentIndex, 1);

      var upgrades = component.element_.getAttribute('data-upgraded').split(',');
      var componentPlace = upgrades.indexOf(
          component[componentConfigProperty_].classAsString);
      upgrades.splice(componentPlace, 1);
      component.element_.setAttribute('data-upgraded', upgrades.join(','));

      var ev = document.createEvent('Events');
      ev.initEvent('mdl-componentdowngraded', true, true);
      component.element_.dispatchEvent(ev);
    }
  }

  /**
   * Downgrade either a given node, an array of nodes, or a NodeList.
   *
   * @param {!Node|!Array<!Node>|!NodeList} nodes
   */
  function downgradeNodesInternal(nodes) {
    /**
     * Auxiliary function to downgrade a single node.
     * @param  {!Node} node the node to be downgraded
     */
    var downgradeNode = function(node) {
      deconstructComponentInternal(findCreatedComponentByNodeInternal(node));
    };
    if (nodes instanceof Array || nodes instanceof NodeList) {
      for (var n = 0; n < nodes.length; n++) {
        downgradeNode(nodes[n]);
      }
    } else if (nodes instanceof Node) {
      downgradeNode(nodes);
    } else {
      throw new Error('Invalid argument provided to downgrade MDL nodes.');
    }
  }

  // Now return the functions that should be made public with their publicly
  // facing names...
  return {
    upgradeDom: upgradeDomInternal,
    upgradeElement: upgradeElementInternal,
    upgradeElements: upgradeElementsInternal,
    upgradeAllRegistered: upgradeAllRegisteredInternal,
    registerUpgradedCallback: registerUpgradedCallbackInternal,
    register: registerInternal,
    downgradeElements: downgradeNodesInternal
  };
})();

/**
 * Describes the type of a registered component type managed by
 * componentHandler. Provided for benefit of the Closure compiler.
 *
 * @typedef {{
 *   constructor: Function,
 *   classAsString: string,
 *   cssClass: string,
 *   widget: (string|boolean|undefined)
 * }}
 */
componentHandler.ComponentConfigPublic;  // jshint ignore:line

/**
 * Describes the type of a registered component type managed by
 * componentHandler. Provided for benefit of the Closure compiler.
 *
 * @typedef {{
 *   constructor: !Function,
 *   className: string,
 *   cssClass: string,
 *   widget: (string|boolean),
 *   callbacks: !Array<function(!HTMLElement)>
 * }}
 */
componentHandler.ComponentConfig;  // jshint ignore:line

/**
 * Created component (i.e., upgraded element) type as managed by
 * componentHandler. Provided for benefit of the Closure compiler.
 *
 * @typedef {{
 *   element_: !HTMLElement,
 *   className: string,
 *   classAsString: string,
 *   cssClass: string,
 *   widget: string
 * }}
 */
componentHandler.Component;  // jshint ignore:line

// Export all symbols, for the benefit of Closure compiler.
// No effect on uncompiled code.
componentHandler['upgradeDom'] = componentHandler.upgradeDom;
componentHandler['upgradeElement'] = componentHandler.upgradeElement;
componentHandler['upgradeElements'] = componentHandler.upgradeElements;
componentHandler['upgradeAllRegistered'] =
    componentHandler.upgradeAllRegistered;
componentHandler['registerUpgradedCallback'] =
    componentHandler.registerUpgradedCallback;
componentHandler['register'] = componentHandler.register;
componentHandler['downgradeElements'] = componentHandler.downgradeElements;
window.componentHandler = componentHandler;
window['componentHandler'] = componentHandler;

window.addEventListener('load', function() {
  'use strict';

  /**
   * Performs a "Cutting the mustard" test. If the browser supports the features
   * tested, adds a mdl-js class to the <html> element. It then upgrades all MDL
   * components requiring JavaScript.
   */
  if ('classList' in document.createElement('div') &&
      'querySelector' in document &&
      'addEventListener' in window && Array.prototype.forEach) {
    document.documentElement.classList.add('mdl-js');
    componentHandler.upgradeAllRegistered();
  } else {
    /**
     * Dummy function to avoid JS errors.
     */
    componentHandler.upgradeElement = function() {};
    /**
     * Dummy function to avoid JS errors.
     */
    componentHandler.register = function() {};
  }
});

// Source: https://github.com/darius/requestAnimationFrame/blob/master/requestAnimationFrame.js
// Adapted from https://gist.github.com/paulirish/1579671 which derived from
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller.
// Fixes from Paul Irish, Tino Zijdel, Andrew Mao, Klemen Slavič, Darius Bacon
// MIT license
if (!Date.now) {
    /**
   * Date.now polyfill.
   * @return {number} the current Date
   */
    Date.now = function () {
        return new Date().getTime();
    };
    Date['now'] = Date.now;
}
var vendors = [
    'webkit',
    'moz'
];
for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
    var vp = vendors[i];
    window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
    window['requestAnimationFrame'] = window.requestAnimationFrame;
    window['cancelAnimationFrame'] = window.cancelAnimationFrame;
}
if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
    var lastTime = 0;
    /**
   * requestAnimationFrame polyfill.
   * @param  {!Function} callback the callback function.
   */
    window.requestAnimationFrame = function (callback) {
        var now = Date.now();
        var nextTime = Math.max(lastTime + 16, now);
        return setTimeout(function () {
            callback(lastTime = nextTime);
        }, nextTime - now);
    };
    window.cancelAnimationFrame = clearTimeout;
    window['requestAnimationFrame'] = window.requestAnimationFrame;
    window['cancelAnimationFrame'] = window.cancelAnimationFrame;
}
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
   * Class constructor for Button MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @param {HTMLElement} element The element that will be upgraded.
   */
var MaterialButton = function MaterialButton(element) {
    this.element_ = element;
    // Initialize instance.
    this.init();
};
window['MaterialButton'] = MaterialButton;
/**
   * Store constants in one place so they can be updated easily.
   *
   * @enum {string | number}
   * @private
   */
MaterialButton.prototype.Constant_ = {};
/**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */
MaterialButton.prototype.CssClasses_ = {
    RIPPLE_EFFECT: 'mdl-js-ripple-effect',
    RIPPLE_CONTAINER: 'mdl-button__ripple-container',
    RIPPLE: 'mdl-ripple'
};
/**
   * Handle blur of element.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialButton.prototype.blurHandler_ = function (event) {
    if (event) {
        this.element_.blur();
    }
};
// Public methods.
/**
   * Disable button.
   *
   * @public
   */
MaterialButton.prototype.disable = function () {
    this.element_.disabled = true;
};
MaterialButton.prototype['disable'] = MaterialButton.prototype.disable;
/**
   * Enable button.
   *
   * @public
   */
MaterialButton.prototype.enable = function () {
    this.element_.disabled = false;
};
MaterialButton.prototype['enable'] = MaterialButton.prototype.enable;
/**
   * Initialize element.
   */
MaterialButton.prototype.init = function () {
    if (this.element_) {
        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
            var rippleContainer = document.createElement('span');
            rippleContainer.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
            this.rippleElement_ = document.createElement('span');
            this.rippleElement_.classList.add(this.CssClasses_.RIPPLE);
            rippleContainer.appendChild(this.rippleElement_);
            this.boundRippleBlurHandler = this.blurHandler_.bind(this);
            this.rippleElement_.addEventListener('mouseup', this.boundRippleBlurHandler);
            this.element_.appendChild(rippleContainer);
        }
        this.boundButtonBlurHandler = this.blurHandler_.bind(this);
        this.element_.addEventListener('mouseup', this.boundButtonBlurHandler);
        this.element_.addEventListener('mouseleave', this.boundButtonBlurHandler);
    }
};
/**
   * Downgrade the element.
   *
   * @private
   */
MaterialButton.prototype.mdlDowngrade_ = function () {
    if (this.rippleElement_) {
        this.rippleElement_.removeEventListener('mouseup', this.boundRippleBlurHandler);
    }
    this.element_.removeEventListener('mouseup', this.boundButtonBlurHandler);
    this.element_.removeEventListener('mouseleave', this.boundButtonBlurHandler);
};
// The component registers itself. It can assume componentHandler is available
// in the global scope.
componentHandler.register({
    constructor: MaterialButton,
    classAsString: 'MaterialButton',
    cssClass: 'mdl-js-button',
    widget: true
});
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
   * Class constructor for Checkbox MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @constructor
   * @param {HTMLElement} element The element that will be upgraded.
   */
var MaterialCheckbox = function MaterialCheckbox(element) {
    this.element_ = element;
    // Initialize instance.
    this.init();
};
window['MaterialCheckbox'] = MaterialCheckbox;
/**
   * Store constants in one place so they can be updated easily.
   *
   * @enum {string | number}
   * @private
   */
MaterialCheckbox.prototype.Constant_ = { TINY_TIMEOUT: 0.001 };
/**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */
MaterialCheckbox.prototype.CssClasses_ = {
    INPUT: 'mdl-checkbox__input',
    BOX_OUTLINE: 'mdl-checkbox__box-outline',
    FOCUS_HELPER: 'mdl-checkbox__focus-helper',
    TICK_OUTLINE: 'mdl-checkbox__tick-outline',
    RIPPLE_EFFECT: 'mdl-js-ripple-effect',
    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
    RIPPLE_CONTAINER: 'mdl-checkbox__ripple-container',
    RIPPLE_CENTER: 'mdl-ripple--center',
    RIPPLE: 'mdl-ripple',
    IS_FOCUSED: 'is-focused',
    IS_DISABLED: 'is-disabled',
    IS_CHECKED: 'is-checked',
    IS_UPGRADED: 'is-upgraded'
};
/**
   * Handle change of state.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialCheckbox.prototype.onChange_ = function (event) {
    this.updateClasses_();
};
/**
   * Handle focus of element.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialCheckbox.prototype.onFocus_ = function (event) {
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
};
/**
   * Handle lost focus of element.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialCheckbox.prototype.onBlur_ = function (event) {
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
};
/**
   * Handle mouseup.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialCheckbox.prototype.onMouseUp_ = function (event) {
    this.blur_();
};
/**
   * Handle class updates.
   *
   * @private
   */
MaterialCheckbox.prototype.updateClasses_ = function () {
    this.checkDisabled();
    this.checkToggleState();
};
/**
   * Add blur.
   *
   * @private
   */
MaterialCheckbox.prototype.blur_ = function () {
    // TODO: figure out why there's a focus event being fired after our blur,
    // so that we can avoid this hack.
    window.setTimeout(function () {
        this.inputElement_.blur();
    }.bind(this), this.Constant_.TINY_TIMEOUT);
};
// Public methods.
/**
   * Check the inputs toggle state and update display.
   *
   * @public
   */
MaterialCheckbox.prototype.checkToggleState = function () {
    if (this.inputElement_.checked) {
        this.element_.classList.add(this.CssClasses_.IS_CHECKED);
    } else {
        this.element_.classList.remove(this.CssClasses_.IS_CHECKED);
    }
};
MaterialCheckbox.prototype['checkToggleState'] = MaterialCheckbox.prototype.checkToggleState;
/**
   * Check the inputs disabled state and update display.
   *
   * @public
   */
MaterialCheckbox.prototype.checkDisabled = function () {
    if (this.inputElement_.disabled) {
        this.element_.classList.add(this.CssClasses_.IS_DISABLED);
    } else {
        this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
    }
};
MaterialCheckbox.prototype['checkDisabled'] = MaterialCheckbox.prototype.checkDisabled;
/**
   * Disable checkbox.
   *
   * @public
   */
MaterialCheckbox.prototype.disable = function () {
    this.inputElement_.disabled = true;
    this.updateClasses_();
};
MaterialCheckbox.prototype['disable'] = MaterialCheckbox.prototype.disable;
/**
   * Enable checkbox.
   *
   * @public
   */
MaterialCheckbox.prototype.enable = function () {
    this.inputElement_.disabled = false;
    this.updateClasses_();
};
MaterialCheckbox.prototype['enable'] = MaterialCheckbox.prototype.enable;
/**
   * Check checkbox.
   *
   * @public
   */
MaterialCheckbox.prototype.check = function () {
    this.inputElement_.checked = true;
    this.updateClasses_();
};
MaterialCheckbox.prototype['check'] = MaterialCheckbox.prototype.check;
/**
   * Uncheck checkbox.
   *
   * @public
   */
MaterialCheckbox.prototype.uncheck = function () {
    this.inputElement_.checked = false;
    this.updateClasses_();
};
MaterialCheckbox.prototype['uncheck'] = MaterialCheckbox.prototype.uncheck;
/**
   * Initialize element.
   */
MaterialCheckbox.prototype.init = function () {
    if (this.element_) {
        this.inputElement_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);
        var boxOutline = document.createElement('span');
        boxOutline.classList.add(this.CssClasses_.BOX_OUTLINE);
        var tickContainer = document.createElement('span');
        tickContainer.classList.add(this.CssClasses_.FOCUS_HELPER);
        var tickOutline = document.createElement('span');
        tickOutline.classList.add(this.CssClasses_.TICK_OUTLINE);
        boxOutline.appendChild(tickOutline);
        this.element_.appendChild(tickContainer);
        this.element_.appendChild(boxOutline);
        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
            this.rippleContainerElement_ = document.createElement('span');
            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT);
            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER);
            this.boundRippleMouseUp = this.onMouseUp_.bind(this);
            this.rippleContainerElement_.addEventListener('mouseup', this.boundRippleMouseUp);
            var ripple = document.createElement('span');
            ripple.classList.add(this.CssClasses_.RIPPLE);
            this.rippleContainerElement_.appendChild(ripple);
            this.element_.appendChild(this.rippleContainerElement_);
        }
        this.boundInputOnChange = this.onChange_.bind(this);
        this.boundInputOnFocus = this.onFocus_.bind(this);
        this.boundInputOnBlur = this.onBlur_.bind(this);
        this.boundElementMouseUp = this.onMouseUp_.bind(this);
        this.inputElement_.addEventListener('change', this.boundInputOnChange);
        this.inputElement_.addEventListener('focus', this.boundInputOnFocus);
        this.inputElement_.addEventListener('blur', this.boundInputOnBlur);
        this.element_.addEventListener('mouseup', this.boundElementMouseUp);
        this.updateClasses_();
        this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
    }
};
/**
   * Downgrade the component.
   *
   * @private
   */
MaterialCheckbox.prototype.mdlDowngrade_ = function () {
    if (this.rippleContainerElement_) {
        this.rippleContainerElement_.removeEventListener('mouseup', this.boundRippleMouseUp);
    }
    this.inputElement_.removeEventListener('change', this.boundInputOnChange);
    this.inputElement_.removeEventListener('focus', this.boundInputOnFocus);
    this.inputElement_.removeEventListener('blur', this.boundInputOnBlur);
    this.element_.removeEventListener('mouseup', this.boundElementMouseUp);
};
// The component registers itself. It can assume componentHandler is available
// in the global scope.
componentHandler.register({
    constructor: MaterialCheckbox,
    classAsString: 'MaterialCheckbox',
    cssClass: 'mdl-js-checkbox',
    widget: true
});
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
   * Class constructor for icon toggle MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @constructor
   * @param {HTMLElement} element The element that will be upgraded.
   */
var MaterialIconToggle = function MaterialIconToggle(element) {
    this.element_ = element;
    // Initialize instance.
    this.init();
};
window['MaterialIconToggle'] = MaterialIconToggle;
/**
   * Store constants in one place so they can be updated easily.
   *
   * @enum {string | number}
   * @private
   */
MaterialIconToggle.prototype.Constant_ = { TINY_TIMEOUT: 0.001 };
/**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */
MaterialIconToggle.prototype.CssClasses_ = {
    INPUT: 'mdl-icon-toggle__input',
    JS_RIPPLE_EFFECT: 'mdl-js-ripple-effect',
    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
    RIPPLE_CONTAINER: 'mdl-icon-toggle__ripple-container',
    RIPPLE_CENTER: 'mdl-ripple--center',
    RIPPLE: 'mdl-ripple',
    IS_FOCUSED: 'is-focused',
    IS_DISABLED: 'is-disabled',
    IS_CHECKED: 'is-checked'
};
/**
   * Handle change of state.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialIconToggle.prototype.onChange_ = function (event) {
    this.updateClasses_();
};
/**
   * Handle focus of element.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialIconToggle.prototype.onFocus_ = function (event) {
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
};
/**
   * Handle lost focus of element.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialIconToggle.prototype.onBlur_ = function (event) {
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
};
/**
   * Handle mouseup.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialIconToggle.prototype.onMouseUp_ = function (event) {
    this.blur_();
};
/**
   * Handle class updates.
   *
   * @private
   */
MaterialIconToggle.prototype.updateClasses_ = function () {
    this.checkDisabled();
    this.checkToggleState();
};
/**
   * Add blur.
   *
   * @private
   */
MaterialIconToggle.prototype.blur_ = function () {
    // TODO: figure out why there's a focus event being fired after our blur,
    // so that we can avoid this hack.
    window.setTimeout(function () {
        this.inputElement_.blur();
    }.bind(this), this.Constant_.TINY_TIMEOUT);
};
// Public methods.
/**
   * Check the inputs toggle state and update display.
   *
   * @public
   */
MaterialIconToggle.prototype.checkToggleState = function () {
    if (this.inputElement_.checked) {
        this.element_.classList.add(this.CssClasses_.IS_CHECKED);
    } else {
        this.element_.classList.remove(this.CssClasses_.IS_CHECKED);
    }
};
MaterialIconToggle.prototype['checkToggleState'] = MaterialIconToggle.prototype.checkToggleState;
/**
   * Check the inputs disabled state and update display.
   *
   * @public
   */
MaterialIconToggle.prototype.checkDisabled = function () {
    if (this.inputElement_.disabled) {
        this.element_.classList.add(this.CssClasses_.IS_DISABLED);
    } else {
        this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
    }
};
MaterialIconToggle.prototype['checkDisabled'] = MaterialIconToggle.prototype.checkDisabled;
/**
   * Disable icon toggle.
   *
   * @public
   */
MaterialIconToggle.prototype.disable = function () {
    this.inputElement_.disabled = true;
    this.updateClasses_();
};
MaterialIconToggle.prototype['disable'] = MaterialIconToggle.prototype.disable;
/**
   * Enable icon toggle.
   *
   * @public
   */
MaterialIconToggle.prototype.enable = function () {
    this.inputElement_.disabled = false;
    this.updateClasses_();
};
MaterialIconToggle.prototype['enable'] = MaterialIconToggle.prototype.enable;
/**
   * Check icon toggle.
   *
   * @public
   */
MaterialIconToggle.prototype.check = function () {
    this.inputElement_.checked = true;
    this.updateClasses_();
};
MaterialIconToggle.prototype['check'] = MaterialIconToggle.prototype.check;
/**
   * Uncheck icon toggle.
   *
   * @public
   */
MaterialIconToggle.prototype.uncheck = function () {
    this.inputElement_.checked = false;
    this.updateClasses_();
};
MaterialIconToggle.prototype['uncheck'] = MaterialIconToggle.prototype.uncheck;
/**
   * Initialize element.
   */
MaterialIconToggle.prototype.init = function () {
    if (this.element_) {
        this.inputElement_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);
        if (this.element_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)) {
            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
            this.rippleContainerElement_ = document.createElement('span');
            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
            this.rippleContainerElement_.classList.add(this.CssClasses_.JS_RIPPLE_EFFECT);
            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER);
            this.boundRippleMouseUp = this.onMouseUp_.bind(this);
            this.rippleContainerElement_.addEventListener('mouseup', this.boundRippleMouseUp);
            var ripple = document.createElement('span');
            ripple.classList.add(this.CssClasses_.RIPPLE);
            this.rippleContainerElement_.appendChild(ripple);
            this.element_.appendChild(this.rippleContainerElement_);
        }
        this.boundInputOnChange = this.onChange_.bind(this);
        this.boundInputOnFocus = this.onFocus_.bind(this);
        this.boundInputOnBlur = this.onBlur_.bind(this);
        this.boundElementOnMouseUp = this.onMouseUp_.bind(this);
        this.inputElement_.addEventListener('change', this.boundInputOnChange);
        this.inputElement_.addEventListener('focus', this.boundInputOnFocus);
        this.inputElement_.addEventListener('blur', this.boundInputOnBlur);
        this.element_.addEventListener('mouseup', this.boundElementOnMouseUp);
        this.updateClasses_();
        this.element_.classList.add('is-upgraded');
    }
};
/**
   * Downgrade the component
   *
   * @private
   */
MaterialIconToggle.prototype.mdlDowngrade_ = function () {
    if (this.rippleContainerElement_) {
        this.rippleContainerElement_.removeEventListener('mouseup', this.boundRippleMouseUp);
    }
    this.inputElement_.removeEventListener('change', this.boundInputOnChange);
    this.inputElement_.removeEventListener('focus', this.boundInputOnFocus);
    this.inputElement_.removeEventListener('blur', this.boundInputOnBlur);
    this.element_.removeEventListener('mouseup', this.boundElementOnMouseUp);
};
// The component registers itself. It can assume componentHandler is available
// in the global scope.
componentHandler.register({
    constructor: MaterialIconToggle,
    classAsString: 'MaterialIconToggle',
    cssClass: 'mdl-js-icon-toggle',
    widget: true
});
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
   * Class constructor for dropdown MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @constructor
   * @param {HTMLElement} element The element that will be upgraded.
   */
var MaterialMenu = function MaterialMenu(element) {
    this.element_ = element;
    // Initialize instance.
    this.init();
};
window['MaterialMenu'] = MaterialMenu;
/**
   * Store constants in one place so they can be updated easily.
   *
   * @enum {string | number}
   * @private
   */
MaterialMenu.prototype.Constant_ = {
    // Total duration of the menu animation.
    TRANSITION_DURATION_SECONDS: 0.3,
    // The fraction of the total duration we want to use for menu item animations.
    TRANSITION_DURATION_FRACTION: 0.8,
    // How long the menu stays open after choosing an option (so the user can see
    // the ripple).
    CLOSE_TIMEOUT: 150
};
/**
   * Keycodes, for code readability.
   *
   * @enum {number}
   * @private
   */
MaterialMenu.prototype.Keycodes_ = {
    ENTER: 13,
    ESCAPE: 27,
    SPACE: 32,
    UP_ARROW: 38,
    DOWN_ARROW: 40
};
/**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */
MaterialMenu.prototype.CssClasses_ = {
    CONTAINER: 'mdl-menu__container',
    OUTLINE: 'mdl-menu__outline',
    ITEM: 'mdl-menu__item',
    ITEM_RIPPLE_CONTAINER: 'mdl-menu__item-ripple-container',
    RIPPLE_EFFECT: 'mdl-js-ripple-effect',
    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
    RIPPLE: 'mdl-ripple',
    // Statuses
    IS_UPGRADED: 'is-upgraded',
    IS_VISIBLE: 'is-visible',
    IS_ANIMATING: 'is-animating',
    // Alignment options
    BOTTOM_LEFT: 'mdl-menu--bottom-left',
    // This is the default.
    BOTTOM_RIGHT: 'mdl-menu--bottom-right',
    TOP_LEFT: 'mdl-menu--top-left',
    TOP_RIGHT: 'mdl-menu--top-right',
    UNALIGNED: 'mdl-menu--unaligned'
};
/**
   * Initialize element.
   */
MaterialMenu.prototype.init = function () {
    if (this.element_) {
        // Create container for the menu.
        var container = document.createElement('div');
        container.classList.add(this.CssClasses_.CONTAINER);
        this.element_.parentElement.insertBefore(container, this.element_);
        this.element_.parentElement.removeChild(this.element_);
        container.appendChild(this.element_);
        this.container_ = container;
        // Create outline for the menu (shadow and background).
        var outline = document.createElement('div');
        outline.classList.add(this.CssClasses_.OUTLINE);
        this.outline_ = outline;
        container.insertBefore(outline, this.element_);
        // Find the "for" element and bind events to it.
        var forElId = this.element_.getAttribute('for');
        var forEl = null;
        if (forElId) {
            forEl = document.getElementById(forElId);
            if (forEl) {
                this.forElement_ = forEl;
                forEl.addEventListener('click', this.handleForClick_.bind(this));
                forEl.addEventListener('keydown', this.handleForKeyboardEvent_.bind(this));
            }
        }
        var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM);
        this.boundItemKeydown = this.handleItemKeyboardEvent_.bind(this);
        this.boundItemClick = this.handleItemClick_.bind(this);
        for (var i = 0; i < items.length; i++) {
            // Add a listener to each menu item.
            items[i].addEventListener('click', this.boundItemClick);
            // Add a tab index to each menu item.
            items[i].tabIndex = '-1';
            // Add a keyboard listener to each menu item.
            items[i].addEventListener('keydown', this.boundItemKeydown);
        }
        // Add ripple classes to each item, if the user has enabled ripples.
        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
            for (i = 0; i < items.length; i++) {
                var item = items[i];
                var rippleContainer = document.createElement('span');
                rippleContainer.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER);
                var ripple = document.createElement('span');
                ripple.classList.add(this.CssClasses_.RIPPLE);
                rippleContainer.appendChild(ripple);
                item.appendChild(rippleContainer);
                item.classList.add(this.CssClasses_.RIPPLE_EFFECT);
            }
        }
        // Copy alignment classes to the container, so the outline can use them.
        if (this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT)) {
            this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT);
        }
        if (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)) {
            this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT);
        }
        if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT)) {
            this.outline_.classList.add(this.CssClasses_.TOP_LEFT);
        }
        if (this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
            this.outline_.classList.add(this.CssClasses_.TOP_RIGHT);
        }
        if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {
            this.outline_.classList.add(this.CssClasses_.UNALIGNED);
        }
        container.classList.add(this.CssClasses_.IS_UPGRADED);
    }
};
/**
   * Handles a click on the "for" element, by positioning the menu and then
   * toggling it.
   *
   * @param {Event} evt The event that fired.
   * @private
   */
MaterialMenu.prototype.handleForClick_ = function (evt) {
    if (this.element_ && this.forElement_) {
        var rect = this.forElement_.getBoundingClientRect();
        var forRect = this.forElement_.parentElement.getBoundingClientRect();
        if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {
        } else if (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)) {
            // Position below the "for" element, aligned to its right.
            this.container_.style.right = forRect.right - rect.right + 'px';
            this.container_.style.top = this.forElement_.offsetTop + this.forElement_.offsetHeight + 'px';
        } else if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT)) {
            // Position above the "for" element, aligned to its left.
            this.container_.style.left = this.forElement_.offsetLeft + 'px';
            this.container_.style.bottom = forRect.bottom - rect.top + 'px';
        } else if (this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
            // Position above the "for" element, aligned to its right.
            this.container_.style.right = forRect.right - rect.right + 'px';
            this.container_.style.bottom = forRect.bottom - rect.top + 'px';
        } else {
            // Default: position below the "for" element, aligned to its left.
            this.container_.style.left = this.forElement_.offsetLeft + 'px';
            this.container_.style.top = this.forElement_.offsetTop + this.forElement_.offsetHeight + 'px';
        }
    }
    this.toggle(evt);
};
/**
   * Handles a keyboard event on the "for" element.
   *
   * @param {Event} evt The event that fired.
   * @private
   */
MaterialMenu.prototype.handleForKeyboardEvent_ = function (evt) {
    if (this.element_ && this.container_ && this.forElement_) {
        var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM + ':not([disabled])');
        if (items && items.length > 0 && this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {
            if (evt.keyCode === this.Keycodes_.UP_ARROW) {
                evt.preventDefault();
                items[items.length - 1].focus();
            } else if (evt.keyCode === this.Keycodes_.DOWN_ARROW) {
                evt.preventDefault();
                items[0].focus();
            }
        }
    }
};
/**
   * Handles a keyboard event on an item.
   *
   * @param {Event} evt The event that fired.
   * @private
   */
MaterialMenu.prototype.handleItemKeyboardEvent_ = function (evt) {
    if (this.element_ && this.container_) {
        var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM + ':not([disabled])');
        if (items && items.length > 0 && this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {
            var currentIndex = Array.prototype.slice.call(items).indexOf(evt.target);
            if (evt.keyCode === this.Keycodes_.UP_ARROW) {
                evt.preventDefault();
                if (currentIndex > 0) {
                    items[currentIndex - 1].focus();
                } else {
                    items[items.length - 1].focus();
                }
            } else if (evt.keyCode === this.Keycodes_.DOWN_ARROW) {
                evt.preventDefault();
                if (items.length > currentIndex + 1) {
                    items[currentIndex + 1].focus();
                } else {
                    items[0].focus();
                }
            } else if (evt.keyCode === this.Keycodes_.SPACE || evt.keyCode === this.Keycodes_.ENTER) {
                evt.preventDefault();
                // Send mousedown and mouseup to trigger ripple.
                var e = new MouseEvent('mousedown');
                evt.target.dispatchEvent(e);
                e = new MouseEvent('mouseup');
                evt.target.dispatchEvent(e);
                // Send click.
                evt.target.click();
            } else if (evt.keyCode === this.Keycodes_.ESCAPE) {
                evt.preventDefault();
                this.hide();
            }
        }
    }
};
/**
   * Handles a click event on an item.
   *
   * @param {Event} evt The event that fired.
   * @private
   */
MaterialMenu.prototype.handleItemClick_ = function (evt) {
    if (evt.target.getAttribute('disabled') !== null) {
        evt.stopPropagation();
    } else {
        // Wait some time before closing menu, so the user can see the ripple.
        this.closing_ = true;
        window.setTimeout(function (evt) {
            this.hide();
            this.closing_ = false;
        }.bind(this), this.Constant_.CLOSE_TIMEOUT);
    }
};
/**
   * Calculates the initial clip (for opening the menu) or final clip (for closing
   * it), and applies it. This allows us to animate from or to the correct point,
   * that is, the point it's aligned to in the "for" element.
   *
   * @param {number} height Height of the clip rectangle
   * @param {number} width Width of the clip rectangle
   * @private
   */
MaterialMenu.prototype.applyClip_ = function (height, width) {
    if (this.element_.classList.contains(this.CssClasses_.UNALIGNED)) {
        // Do not clip.
        this.element_.style.clip = '';
    } else if (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT)) {
        // Clip to the top right corner of the menu.
        this.element_.style.clip = 'rect(0 ' + width + 'px ' + '0 ' + width + 'px)';
    } else if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT)) {
        // Clip to the bottom left corner of the menu.
        this.element_.style.clip = 'rect(' + height + 'px 0 ' + height + 'px 0)';
    } else if (this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
        // Clip to the bottom right corner of the menu.
        this.element_.style.clip = 'rect(' + height + 'px ' + width + 'px ' + height + 'px ' + width + 'px)';
    } else {
        // Default: do not clip (same as clipping to the top left corner).
        this.element_.style.clip = '';
    }
};
/**
   * Adds an event listener to clean up after the animation ends.
   *
   * @private
   */
MaterialMenu.prototype.addAnimationEndListener_ = function () {
    var cleanup = function () {
        this.element_.removeEventListener('transitionend', cleanup);
        this.element_.removeEventListener('webkitTransitionEnd', cleanup);
        this.element_.classList.remove(this.CssClasses_.IS_ANIMATING);
    }.bind(this);
    // Remove animation class once the transition is done.
    this.element_.addEventListener('transitionend', cleanup);
    this.element_.addEventListener('webkitTransitionEnd', cleanup);
};
/**
   * Displays the menu.
   *
   * @public
   */
MaterialMenu.prototype.show = function (evt) {
    if (this.element_ && this.container_ && this.outline_) {
        // Measure the inner element.
        var height = this.element_.getBoundingClientRect().height;
        var width = this.element_.getBoundingClientRect().width;
        // Apply the inner element's size to the container and outline.
        this.container_.style.width = width + 'px';
        this.container_.style.height = height + 'px';
        this.outline_.style.width = width + 'px';
        this.outline_.style.height = height + 'px';
        var transitionDuration = this.Constant_.TRANSITION_DURATION_SECONDS * this.Constant_.TRANSITION_DURATION_FRACTION;
        // Calculate transition delays for individual menu items, so that they fade
        // in one at a time.
        var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM);
        for (var i = 0; i < items.length; i++) {
            var itemDelay = null;
            if (this.element_.classList.contains(this.CssClasses_.TOP_LEFT) || this.element_.classList.contains(this.CssClasses_.TOP_RIGHT)) {
                itemDelay = (height - items[i].offsetTop - items[i].offsetHeight) / height * transitionDuration + 's';
            } else {
                itemDelay = items[i].offsetTop / height * transitionDuration + 's';
            }
            items[i].style.transitionDelay = itemDelay;
        }
        // Apply the initial clip to the text before we start animating.
        this.applyClip_(height, width);
        // Wait for the next frame, turn on animation, and apply the final clip.
        // Also make it visible. This triggers the transitions.
        window.requestAnimationFrame(function () {
            this.element_.classList.add(this.CssClasses_.IS_ANIMATING);
            this.element_.style.clip = 'rect(0 ' + width + 'px ' + height + 'px 0)';
            this.container_.classList.add(this.CssClasses_.IS_VISIBLE);
        }.bind(this));
        // Clean up after the animation is complete.
        this.addAnimationEndListener_();
        // Add a click listener to the document, to close the menu.
        var callback = function (e) {
            // Check to see if the document is processing the same event that
            // displayed the menu in the first place. If so, do nothing.
            // Also check to see if the menu is in the process of closing itself, and
            // do nothing in that case.
            if (e !== evt && !this.closing_) {
                document.removeEventListener('click', callback);
                this.hide();
            }
        }.bind(this);
        document.addEventListener('click', callback);
    }
};
MaterialMenu.prototype['show'] = MaterialMenu.prototype.show;
/**
   * Hides the menu.
   *
   * @public
   */
MaterialMenu.prototype.hide = function () {
    if (this.element_ && this.container_ && this.outline_) {
        var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM);
        // Remove all transition delays; menu items fade out concurrently.
        for (var i = 0; i < items.length; i++) {
            items[i].style.transitionDelay = null;
        }
        // Measure the inner element.
        var height = this.element_.getBoundingClientRect().height;
        var width = this.element_.getBoundingClientRect().width;
        // Turn on animation, and apply the final clip. Also make invisible.
        // This triggers the transitions.
        this.element_.classList.add(this.CssClasses_.IS_ANIMATING);
        this.applyClip_(height, width);
        this.container_.classList.remove(this.CssClasses_.IS_VISIBLE);
        // Clean up after the animation is complete.
        this.addAnimationEndListener_();
    }
};
MaterialMenu.prototype['hide'] = MaterialMenu.prototype.hide;
/**
   * Displays or hides the menu, depending on current state.
   *
   * @public
   */
MaterialMenu.prototype.toggle = function (evt) {
    if (this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {
        this.hide();
    } else {
        this.show(evt);
    }
};
MaterialMenu.prototype['toggle'] = MaterialMenu.prototype.toggle;
/**
   * Downgrade the component.
   *
   * @private
   */
MaterialMenu.prototype.mdlDowngrade_ = function () {
    var items = this.element_.querySelectorAll('.' + this.CssClasses_.ITEM);
    for (var i = 0; i < items.length; i++) {
        items[i].removeEventListener('click', this.boundItemClick);
        items[i].removeEventListener('keydown', this.boundItemKeydown);
    }
};
// The component registers itself. It can assume componentHandler is available
// in the global scope.
componentHandler.register({
    constructor: MaterialMenu,
    classAsString: 'MaterialMenu',
    cssClass: 'mdl-js-menu',
    widget: true
});
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
   * Class constructor for Progress MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @constructor
   * @param {HTMLElement} element The element that will be upgraded.
   */
var MaterialProgress = function MaterialProgress(element) {
    this.element_ = element;
    // Initialize instance.
    this.init();
};
window['MaterialProgress'] = MaterialProgress;
/**
   * Store constants in one place so they can be updated easily.
   *
   * @enum {string | number}
   * @private
   */
MaterialProgress.prototype.Constant_ = {};
/**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */
MaterialProgress.prototype.CssClasses_ = { INDETERMINATE_CLASS: 'mdl-progress__indeterminate' };
/**
   * Set the current progress of the progressbar.
   *
   * @param {number} p Percentage of the progress (0-100)
   * @public
   */
MaterialProgress.prototype.setProgress = function (p) {
    if (this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS)) {
        return;
    }
    this.progressbar_.style.width = p + '%';
};
MaterialProgress.prototype['setProgress'] = MaterialProgress.prototype.setProgress;
/**
   * Set the current progress of the buffer.
   *
   * @param {number} p Percentage of the buffer (0-100)
   * @public
   */
MaterialProgress.prototype.setBuffer = function (p) {
    this.bufferbar_.style.width = p + '%';
    this.auxbar_.style.width = 100 - p + '%';
};
MaterialProgress.prototype['setBuffer'] = MaterialProgress.prototype.setBuffer;
/**
   * Initialize element.
   */
MaterialProgress.prototype.init = function () {
    if (this.element_) {
        var el = document.createElement('div');
        el.className = 'progressbar bar bar1';
        this.element_.appendChild(el);
        this.progressbar_ = el;
        el = document.createElement('div');
        el.className = 'bufferbar bar bar2';
        this.element_.appendChild(el);
        this.bufferbar_ = el;
        el = document.createElement('div');
        el.className = 'auxbar bar bar3';
        this.element_.appendChild(el);
        this.auxbar_ = el;
        this.progressbar_.style.width = '0%';
        this.bufferbar_.style.width = '100%';
        this.auxbar_.style.width = '0%';
        this.element_.classList.add('is-upgraded');
    }
};
/**
   * Downgrade the component
   *
   * @private
   */
MaterialProgress.prototype.mdlDowngrade_ = function () {
    while (this.element_.firstChild) {
        this.element_.removeChild(this.element_.firstChild);
    }
};
// The component registers itself. It can assume componentHandler is available
// in the global scope.
componentHandler.register({
    constructor: MaterialProgress,
    classAsString: 'MaterialProgress',
    cssClass: 'mdl-js-progress',
    widget: true
});
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
   * Class constructor for Radio MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @constructor
   * @param {HTMLElement} element The element that will be upgraded.
   */
var MaterialRadio = function MaterialRadio(element) {
    this.element_ = element;
    // Initialize instance.
    this.init();
};
window['MaterialRadio'] = MaterialRadio;
/**
   * Store constants in one place so they can be updated easily.
   *
   * @enum {string | number}
   * @private
   */
MaterialRadio.prototype.Constant_ = { TINY_TIMEOUT: 0.001 };
/**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */
MaterialRadio.prototype.CssClasses_ = {
    IS_FOCUSED: 'is-focused',
    IS_DISABLED: 'is-disabled',
    IS_CHECKED: 'is-checked',
    IS_UPGRADED: 'is-upgraded',
    JS_RADIO: 'mdl-js-radio',
    RADIO_BTN: 'mdl-radio__button',
    RADIO_OUTER_CIRCLE: 'mdl-radio__outer-circle',
    RADIO_INNER_CIRCLE: 'mdl-radio__inner-circle',
    RIPPLE_EFFECT: 'mdl-js-ripple-effect',
    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
    RIPPLE_CONTAINER: 'mdl-radio__ripple-container',
    RIPPLE_CENTER: 'mdl-ripple--center',
    RIPPLE: 'mdl-ripple'
};
/**
   * Handle change of state.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialRadio.prototype.onChange_ = function (event) {
    // Since other radio buttons don't get change events, we need to look for
    // them to update their classes.
    var radios = document.getElementsByClassName(this.CssClasses_.JS_RADIO);
    for (var i = 0; i < radios.length; i++) {
        var button = radios[i].querySelector('.' + this.CssClasses_.RADIO_BTN);
        // Different name == different group, so no point updating those.
        if (button.getAttribute('name') === this.btnElement_.getAttribute('name')) {
            radios[i]['MaterialRadio'].updateClasses_();
        }
    }
};
/**
   * Handle focus.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialRadio.prototype.onFocus_ = function (event) {
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
};
/**
   * Handle lost focus.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialRadio.prototype.onBlur_ = function (event) {
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
};
/**
   * Handle mouseup.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialRadio.prototype.onMouseup_ = function (event) {
    this.blur_();
};
/**
   * Update classes.
   *
   * @private
   */
MaterialRadio.prototype.updateClasses_ = function () {
    this.checkDisabled();
    this.checkToggleState();
};
/**
   * Add blur.
   *
   * @private
   */
MaterialRadio.prototype.blur_ = function () {
    // TODO: figure out why there's a focus event being fired after our blur,
    // so that we can avoid this hack.
    window.setTimeout(function () {
        this.btnElement_.blur();
    }.bind(this), this.Constant_.TINY_TIMEOUT);
};
// Public methods.
/**
   * Check the components disabled state.
   *
   * @public
   */
MaterialRadio.prototype.checkDisabled = function () {
    if (this.btnElement_.disabled) {
        this.element_.classList.add(this.CssClasses_.IS_DISABLED);
    } else {
        this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
    }
};
MaterialRadio.prototype['checkDisabled'] = MaterialRadio.prototype.checkDisabled;
/**
   * Check the components toggled state.
   *
   * @public
   */
MaterialRadio.prototype.checkToggleState = function () {
    if (this.btnElement_.checked) {
        this.element_.classList.add(this.CssClasses_.IS_CHECKED);
    } else {
        this.element_.classList.remove(this.CssClasses_.IS_CHECKED);
    }
};
MaterialRadio.prototype['checkToggleState'] = MaterialRadio.prototype.checkToggleState;
/**
   * Disable radio.
   *
   * @public
   */
MaterialRadio.prototype.disable = function () {
    this.btnElement_.disabled = true;
    this.updateClasses_();
};
MaterialRadio.prototype['disable'] = MaterialRadio.prototype.disable;
/**
   * Enable radio.
   *
   * @public
   */
MaterialRadio.prototype.enable = function () {
    this.btnElement_.disabled = false;
    this.updateClasses_();
};
MaterialRadio.prototype['enable'] = MaterialRadio.prototype.enable;
/**
   * Check radio.
   *
   * @public
   */
MaterialRadio.prototype.check = function () {
    this.btnElement_.checked = true;
    this.updateClasses_();
};
MaterialRadio.prototype['check'] = MaterialRadio.prototype.check;
/**
   * Uncheck radio.
   *
   * @public
   */
MaterialRadio.prototype.uncheck = function () {
    this.btnElement_.checked = false;
    this.updateClasses_();
};
MaterialRadio.prototype['uncheck'] = MaterialRadio.prototype.uncheck;
/**
   * Initialize element.
   */
MaterialRadio.prototype.init = function () {
    if (this.element_) {
        this.btnElement_ = this.element_.querySelector('.' + this.CssClasses_.RADIO_BTN);
        var outerCircle = document.createElement('span');
        outerCircle.classList.add(this.CssClasses_.RADIO_OUTER_CIRCLE);
        var innerCircle = document.createElement('span');
        innerCircle.classList.add(this.CssClasses_.RADIO_INNER_CIRCLE);
        this.element_.appendChild(outerCircle);
        this.element_.appendChild(innerCircle);
        var rippleContainer;
        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
            rippleContainer = document.createElement('span');
            rippleContainer.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
            rippleContainer.classList.add(this.CssClasses_.RIPPLE_EFFECT);
            rippleContainer.classList.add(this.CssClasses_.RIPPLE_CENTER);
            rippleContainer.addEventListener('mouseup', this.onMouseup_.bind(this));
            var ripple = document.createElement('span');
            ripple.classList.add(this.CssClasses_.RIPPLE);
            rippleContainer.appendChild(ripple);
            this.element_.appendChild(rippleContainer);
        }
        this.btnElement_.addEventListener('change', this.onChange_.bind(this));
        this.btnElement_.addEventListener('focus', this.onFocus_.bind(this));
        this.btnElement_.addEventListener('blur', this.onBlur_.bind(this));
        this.element_.addEventListener('mouseup', this.onMouseup_.bind(this));
        this.updateClasses_();
        this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
    }
};
// The component registers itself. It can assume componentHandler is available
// in the global scope.
componentHandler.register({
    constructor: MaterialRadio,
    classAsString: 'MaterialRadio',
    cssClass: 'mdl-js-radio',
    widget: true
});
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
   * Class constructor for Slider MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @constructor
   * @param {HTMLElement} element The element that will be upgraded.
   */
var MaterialSlider = function MaterialSlider(element) {
    this.element_ = element;
    // Browser feature detection.
    this.isIE_ = window.navigator.msPointerEnabled;
    // Initialize instance.
    this.init();
};
window['MaterialSlider'] = MaterialSlider;
/**
   * Store constants in one place so they can be updated easily.
   *
   * @enum {string | number}
   * @private
   */
MaterialSlider.prototype.Constant_ = {};
/**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */
MaterialSlider.prototype.CssClasses_ = {
    IE_CONTAINER: 'mdl-slider__ie-container',
    SLIDER_CONTAINER: 'mdl-slider__container',
    BACKGROUND_FLEX: 'mdl-slider__background-flex',
    BACKGROUND_LOWER: 'mdl-slider__background-lower',
    BACKGROUND_UPPER: 'mdl-slider__background-upper',
    IS_LOWEST_VALUE: 'is-lowest-value',
    IS_UPGRADED: 'is-upgraded'
};
/**
   * Handle input on element.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialSlider.prototype.onInput_ = function (event) {
    this.updateValueStyles_();
};
/**
   * Handle change on element.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialSlider.prototype.onChange_ = function (event) {
    this.updateValueStyles_();
};
/**
   * Handle mouseup on element.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialSlider.prototype.onMouseUp_ = function (event) {
    event.target.blur();
};
/**
   * Handle mousedown on container element.
   * This handler is purpose is to not require the use to click
   * exactly on the 2px slider element, as FireFox seems to be very
   * strict about this.
   *
   * @param {Event} event The event that fired.
   * @private
   * @suppress {missingProperties}
   */
MaterialSlider.prototype.onContainerMouseDown_ = function (event) {
    // If this click is not on the parent element (but rather some child)
    // ignore. It may still bubble up.
    if (event.target !== this.element_.parentElement) {
        return;
    }
    // Discard the original event and create a new event that
    // is on the slider element.
    event.preventDefault();
    var newEvent = new MouseEvent('mousedown', {
        target: event.target,
        buttons: event.buttons,
        clientX: event.clientX,
        clientY: this.element_.getBoundingClientRect().y
    });
    this.element_.dispatchEvent(newEvent);
};
/**
   * Handle updating of values.
   *
   * @private
   */
MaterialSlider.prototype.updateValueStyles_ = function () {
    // Calculate and apply percentages to div structure behind slider.
    var fraction = (this.element_.value - this.element_.min) / (this.element_.max - this.element_.min);
    if (fraction === 0) {
        this.element_.classList.add(this.CssClasses_.IS_LOWEST_VALUE);
    } else {
        this.element_.classList.remove(this.CssClasses_.IS_LOWEST_VALUE);
    }
    if (!this.isIE_) {
        this.backgroundLower_.style.flex = fraction;
        this.backgroundLower_.style.webkitFlex = fraction;
        this.backgroundUpper_.style.flex = 1 - fraction;
        this.backgroundUpper_.style.webkitFlex = 1 - fraction;
    }
};
// Public methods.
/**
   * Disable slider.
   *
   * @public
   */
MaterialSlider.prototype.disable = function () {
    this.element_.disabled = true;
};
MaterialSlider.prototype['disable'] = MaterialSlider.prototype.disable;
/**
   * Enable slider.
   *
   * @public
   */
MaterialSlider.prototype.enable = function () {
    this.element_.disabled = false;
};
MaterialSlider.prototype['enable'] = MaterialSlider.prototype.enable;
/**
   * Update slider value.
   *
   * @param {number} value The value to which to set the control (optional).
   * @public
   */
MaterialSlider.prototype.change = function (value) {
    if (typeof value !== 'undefined') {
        this.element_.value = value;
    }
    this.updateValueStyles_();
};
MaterialSlider.prototype['change'] = MaterialSlider.prototype.change;
/**
   * Initialize element.
   */
MaterialSlider.prototype.init = function () {
    if (this.element_) {
        if (this.isIE_) {
            // Since we need to specify a very large height in IE due to
            // implementation limitations, we add a parent here that trims it down to
            // a reasonable size.
            var containerIE = document.createElement('div');
            containerIE.classList.add(this.CssClasses_.IE_CONTAINER);
            this.element_.parentElement.insertBefore(containerIE, this.element_);
            this.element_.parentElement.removeChild(this.element_);
            containerIE.appendChild(this.element_);
        } else {
            // For non-IE browsers, we need a div structure that sits behind the
            // slider and allows us to style the left and right sides of it with
            // different colors.
            var container = document.createElement('div');
            container.classList.add(this.CssClasses_.SLIDER_CONTAINER);
            this.element_.parentElement.insertBefore(container, this.element_);
            this.element_.parentElement.removeChild(this.element_);
            container.appendChild(this.element_);
            var backgroundFlex = document.createElement('div');
            backgroundFlex.classList.add(this.CssClasses_.BACKGROUND_FLEX);
            container.appendChild(backgroundFlex);
            this.backgroundLower_ = document.createElement('div');
            this.backgroundLower_.classList.add(this.CssClasses_.BACKGROUND_LOWER);
            backgroundFlex.appendChild(this.backgroundLower_);
            this.backgroundUpper_ = document.createElement('div');
            this.backgroundUpper_.classList.add(this.CssClasses_.BACKGROUND_UPPER);
            backgroundFlex.appendChild(this.backgroundUpper_);
        }
        this.boundInputHandler = this.onInput_.bind(this);
        this.boundChangeHandler = this.onChange_.bind(this);
        this.boundMouseUpHandler = this.onMouseUp_.bind(this);
        this.boundContainerMouseDownHandler = this.onContainerMouseDown_.bind(this);
        this.element_.addEventListener('input', this.boundInputHandler);
        this.element_.addEventListener('change', this.boundChangeHandler);
        this.element_.addEventListener('mouseup', this.boundMouseUpHandler);
        this.element_.parentElement.addEventListener('mousedown', this.boundContainerMouseDownHandler);
        this.updateValueStyles_();
        this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
    }
};
/**
   * Downgrade the component
   *
   * @private
   */
MaterialSlider.prototype.mdlDowngrade_ = function () {
    this.element_.removeEventListener('input', this.boundInputHandler);
    this.element_.removeEventListener('change', this.boundChangeHandler);
    this.element_.removeEventListener('mouseup', this.boundMouseUpHandler);
    this.element_.parentElement.removeEventListener('mousedown', this.boundContainerMouseDownHandler);
};
// The component registers itself. It can assume componentHandler is available
// in the global scope.
componentHandler.register({
    constructor: MaterialSlider,
    classAsString: 'MaterialSlider',
    cssClass: 'mdl-js-slider',
    widget: true
});
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
   * Class constructor for Spinner MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @param {HTMLElement} element The element that will be upgraded.
   * @constructor
   */
var MaterialSpinner = function MaterialSpinner(element) {
    this.element_ = element;
    // Initialize instance.
    this.init();
};
window['MaterialSpinner'] = MaterialSpinner;
/**
   * Store constants in one place so they can be updated easily.
   *
   * @enum {string | number}
   * @private
   */
MaterialSpinner.prototype.Constant_ = { MDL_SPINNER_LAYER_COUNT: 4 };
/**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */
MaterialSpinner.prototype.CssClasses_ = {
    MDL_SPINNER_LAYER: 'mdl-spinner__layer',
    MDL_SPINNER_CIRCLE_CLIPPER: 'mdl-spinner__circle-clipper',
    MDL_SPINNER_CIRCLE: 'mdl-spinner__circle',
    MDL_SPINNER_GAP_PATCH: 'mdl-spinner__gap-patch',
    MDL_SPINNER_LEFT: 'mdl-spinner__left',
    MDL_SPINNER_RIGHT: 'mdl-spinner__right'
};
/**
   * Auxiliary method to create a spinner layer.
   *
   * @param {number} index Index of the layer to be created.
   * @public
   */
MaterialSpinner.prototype.createLayer = function (index) {
    var layer = document.createElement('div');
    layer.classList.add(this.CssClasses_.MDL_SPINNER_LAYER);
    layer.classList.add(this.CssClasses_.MDL_SPINNER_LAYER + '-' + index);
    var leftClipper = document.createElement('div');
    leftClipper.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER);
    leftClipper.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);
    var gapPatch = document.createElement('div');
    gapPatch.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);
    var rightClipper = document.createElement('div');
    rightClipper.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER);
    rightClipper.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);
    var circleOwners = [
        leftClipper,
        gapPatch,
        rightClipper
    ];
    for (var i = 0; i < circleOwners.length; i++) {
        var circle = document.createElement('div');
        circle.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE);
        circleOwners[i].appendChild(circle);
    }
    layer.appendChild(leftClipper);
    layer.appendChild(gapPatch);
    layer.appendChild(rightClipper);
    this.element_.appendChild(layer);
};
MaterialSpinner.prototype['createLayer'] = MaterialSpinner.prototype.createLayer;
/**
   * Stops the spinner animation.
   * Public method for users who need to stop the spinner for any reason.
   *
   * @public
   */
MaterialSpinner.prototype.stop = function () {
    this.element_.classList.remove('is-active');
};
MaterialSpinner.prototype['stop'] = MaterialSpinner.prototype.stop;
/**
   * Starts the spinner animation.
   * Public method for users who need to manually start the spinner for any reason
   * (instead of just adding the 'is-active' class to their markup).
   *
   * @public
   */
MaterialSpinner.prototype.start = function () {
    this.element_.classList.add('is-active');
};
MaterialSpinner.prototype['start'] = MaterialSpinner.prototype.start;
/**
   * Initialize element.
   */
MaterialSpinner.prototype.init = function () {
    if (this.element_) {
        for (var i = 1; i <= this.Constant_.MDL_SPINNER_LAYER_COUNT; i++) {
            this.createLayer(i);
        }
        this.element_.classList.add('is-upgraded');
    }
};
// The component registers itself. It can assume componentHandler is available
// in the global scope.
componentHandler.register({
    constructor: MaterialSpinner,
    classAsString: 'MaterialSpinner',
    cssClass: 'mdl-js-spinner',
    widget: true
});
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
   * Class constructor for Checkbox MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @constructor
   * @param {HTMLElement} element The element that will be upgraded.
   */
var MaterialSwitch = function MaterialSwitch(element) {
    this.element_ = element;
    // Initialize instance.
    this.init();
};
window['MaterialSwitch'] = MaterialSwitch;
/**
   * Store constants in one place so they can be updated easily.
   *
   * @enum {string | number}
   * @private
   */
MaterialSwitch.prototype.Constant_ = { TINY_TIMEOUT: 0.001 };
/**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */
MaterialSwitch.prototype.CssClasses_ = {
    INPUT: 'mdl-switch__input',
    TRACK: 'mdl-switch__track',
    THUMB: 'mdl-switch__thumb',
    FOCUS_HELPER: 'mdl-switch__focus-helper',
    RIPPLE_EFFECT: 'mdl-js-ripple-effect',
    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
    RIPPLE_CONTAINER: 'mdl-switch__ripple-container',
    RIPPLE_CENTER: 'mdl-ripple--center',
    RIPPLE: 'mdl-ripple',
    IS_FOCUSED: 'is-focused',
    IS_DISABLED: 'is-disabled',
    IS_CHECKED: 'is-checked'
};
/**
   * Handle change of state.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialSwitch.prototype.onChange_ = function (event) {
    this.updateClasses_();
};
/**
   * Handle focus of element.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialSwitch.prototype.onFocus_ = function (event) {
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
};
/**
   * Handle lost focus of element.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialSwitch.prototype.onBlur_ = function (event) {
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
};
/**
   * Handle mouseup.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialSwitch.prototype.onMouseUp_ = function (event) {
    this.blur_();
};
/**
   * Handle class updates.
   *
   * @private
   */
MaterialSwitch.prototype.updateClasses_ = function () {
    this.checkDisabled();
    this.checkToggleState();
};
/**
   * Add blur.
   *
   * @private
   */
MaterialSwitch.prototype.blur_ = function () {
    // TODO: figure out why there's a focus event being fired after our blur,
    // so that we can avoid this hack.
    window.setTimeout(function () {
        this.inputElement_.blur();
    }.bind(this), this.Constant_.TINY_TIMEOUT);
};
// Public methods.
/**
   * Check the components disabled state.
   *
   * @public
   */
MaterialSwitch.prototype.checkDisabled = function () {
    if (this.inputElement_.disabled) {
        this.element_.classList.add(this.CssClasses_.IS_DISABLED);
    } else {
        this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
    }
};
MaterialSwitch.prototype['checkDisabled'] = MaterialSwitch.prototype.checkDisabled;
/**
   * Check the components toggled state.
   *
   * @public
   */
MaterialSwitch.prototype.checkToggleState = function () {
    if (this.inputElement_.checked) {
        this.element_.classList.add(this.CssClasses_.IS_CHECKED);
    } else {
        this.element_.classList.remove(this.CssClasses_.IS_CHECKED);
    }
};
MaterialSwitch.prototype['checkToggleState'] = MaterialSwitch.prototype.checkToggleState;
/**
   * Disable switch.
   *
   * @public
   */
MaterialSwitch.prototype.disable = function () {
    this.inputElement_.disabled = true;
    this.updateClasses_();
};
MaterialSwitch.prototype['disable'] = MaterialSwitch.prototype.disable;
/**
   * Enable switch.
   *
   * @public
   */
MaterialSwitch.prototype.enable = function () {
    this.inputElement_.disabled = false;
    this.updateClasses_();
};
MaterialSwitch.prototype['enable'] = MaterialSwitch.prototype.enable;
/**
   * Activate switch.
   *
   * @public
   */
MaterialSwitch.prototype.on = function () {
    this.inputElement_.checked = true;
    this.updateClasses_();
};
MaterialSwitch.prototype['on'] = MaterialSwitch.prototype.on;
/**
   * Deactivate switch.
   *
   * @public
   */
MaterialSwitch.prototype.off = function () {
    this.inputElement_.checked = false;
    this.updateClasses_();
};
MaterialSwitch.prototype['off'] = MaterialSwitch.prototype.off;
/**
   * Initialize element.
   */
MaterialSwitch.prototype.init = function () {
    if (this.element_) {
        this.inputElement_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);
        var track = document.createElement('div');
        track.classList.add(this.CssClasses_.TRACK);
        var thumb = document.createElement('div');
        thumb.classList.add(this.CssClasses_.THUMB);
        var focusHelper = document.createElement('span');
        focusHelper.classList.add(this.CssClasses_.FOCUS_HELPER);
        thumb.appendChild(focusHelper);
        this.element_.appendChild(track);
        this.element_.appendChild(thumb);
        this.boundMouseUpHandler = this.onMouseUp_.bind(this);
        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
            this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
            this.rippleContainerElement_ = document.createElement('span');
            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER);
            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT);
            this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER);
            this.rippleContainerElement_.addEventListener('mouseup', this.boundMouseUpHandler);
            var ripple = document.createElement('span');
            ripple.classList.add(this.CssClasses_.RIPPLE);
            this.rippleContainerElement_.appendChild(ripple);
            this.element_.appendChild(this.rippleContainerElement_);
        }
        this.boundChangeHandler = this.onChange_.bind(this);
        this.boundFocusHandler = this.onFocus_.bind(this);
        this.boundBlurHandler = this.onBlur_.bind(this);
        this.inputElement_.addEventListener('change', this.boundChangeHandler);
        this.inputElement_.addEventListener('focus', this.boundFocusHandler);
        this.inputElement_.addEventListener('blur', this.boundBlurHandler);
        this.element_.addEventListener('mouseup', this.boundMouseUpHandler);
        this.updateClasses_();
        this.element_.classList.add('is-upgraded');
    }
};
/**
   * Downgrade the component.
   *
   * @private
   */
MaterialSwitch.prototype.mdlDowngrade_ = function () {
    if (this.rippleContainerElement_) {
        this.rippleContainerElement_.removeEventListener('mouseup', this.boundMouseUpHandler);
    }
    this.inputElement_.removeEventListener('change', this.boundChangeHandler);
    this.inputElement_.removeEventListener('focus', this.boundFocusHandler);
    this.inputElement_.removeEventListener('blur', this.boundBlurHandler);
    this.element_.removeEventListener('mouseup', this.boundMouseUpHandler);
};
// The component registers itself. It can assume componentHandler is available
// in the global scope.
componentHandler.register({
    constructor: MaterialSwitch,
    classAsString: 'MaterialSwitch',
    cssClass: 'mdl-js-switch',
    widget: true
});
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
   * Class constructor for Tabs MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @constructor
   * @param {HTMLElement} element The element that will be upgraded.
   */
var MaterialTabs = function MaterialTabs(element) {
    // Stores the HTML element.
    this.element_ = element;
    // Initialize instance.
    this.init();
};
window['MaterialTabs'] = MaterialTabs;
/**
   * Store constants in one place so they can be updated easily.
   *
   * @enum {string}
   * @private
   */
MaterialTabs.prototype.Constant_ = {};
/**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */
MaterialTabs.prototype.CssClasses_ = {
    TAB_CLASS: 'mdl-tabs__tab',
    PANEL_CLASS: 'mdl-tabs__panel',
    ACTIVE_CLASS: 'is-active',
    UPGRADED_CLASS: 'is-upgraded',
    MDL_JS_RIPPLE_EFFECT: 'mdl-js-ripple-effect',
    MDL_RIPPLE_CONTAINER: 'mdl-tabs__ripple-container',
    MDL_RIPPLE: 'mdl-ripple',
    MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events'
};
/**
   * Handle clicks to a tabs component
   *
   * @private
   */
MaterialTabs.prototype.initTabs_ = function () {
    if (this.element_.classList.contains(this.CssClasses_.MDL_JS_RIPPLE_EFFECT)) {
        this.element_.classList.add(this.CssClasses_.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS);
    }
    // Select element tabs, document panels
    this.tabs_ = this.element_.querySelectorAll('.' + this.CssClasses_.TAB_CLASS);
    this.panels_ = this.element_.querySelectorAll('.' + this.CssClasses_.PANEL_CLASS);
    // Create new tabs for each tab element
    for (var i = 0; i < this.tabs_.length; i++) {
        new MaterialTab(this.tabs_[i], this);
    }
    this.element_.classList.add(this.CssClasses_.UPGRADED_CLASS);
};
/**
   * Reset tab state, dropping active classes
   *
   * @private
   */
MaterialTabs.prototype.resetTabState_ = function () {
    for (var k = 0; k < this.tabs_.length; k++) {
        this.tabs_[k].classList.remove(this.CssClasses_.ACTIVE_CLASS);
    }
};
/**
   * Reset panel state, droping active classes
   *
   * @private
   */
MaterialTabs.prototype.resetPanelState_ = function () {
    for (var j = 0; j < this.panels_.length; j++) {
        this.panels_[j].classList.remove(this.CssClasses_.ACTIVE_CLASS);
    }
};
/**
   * Initialize element.
   */
MaterialTabs.prototype.init = function () {
    if (this.element_) {
        this.initTabs_();
    }
};
/**
   * Constructor for an individual tab.
   *
   * @constructor
   * @param {HTMLElement} tab The HTML element for the tab.
   * @param {MaterialTabs} ctx The MaterialTabs object that owns the tab.
   */
function MaterialTab(tab, ctx) {
    if (tab) {
        if (ctx.element_.classList.contains(ctx.CssClasses_.MDL_JS_RIPPLE_EFFECT)) {
            var rippleContainer = document.createElement('span');
            rippleContainer.classList.add(ctx.CssClasses_.MDL_RIPPLE_CONTAINER);
            rippleContainer.classList.add(ctx.CssClasses_.MDL_JS_RIPPLE_EFFECT);
            var ripple = document.createElement('span');
            ripple.classList.add(ctx.CssClasses_.MDL_RIPPLE);
            rippleContainer.appendChild(ripple);
            tab.appendChild(rippleContainer);
        }
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            var href = tab.href.split('#')[1];
            var panel = ctx.element_.querySelector('#' + href);
            ctx.resetTabState_();
            ctx.resetPanelState_();
            tab.classList.add(ctx.CssClasses_.ACTIVE_CLASS);
            panel.classList.add(ctx.CssClasses_.ACTIVE_CLASS);
        });
    }
}
// The component registers itself. It can assume componentHandler is available
// in the global scope.
componentHandler.register({
    constructor: MaterialTabs,
    classAsString: 'MaterialTabs',
    cssClass: 'mdl-js-tabs'
});
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
   * Class constructor for Textfield MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @constructor
   * @param {HTMLElement} element The element that will be upgraded.
   */
var MaterialTextfield = function MaterialTextfield(element) {
    this.element_ = element;
    this.maxRows = this.Constant_.NO_MAX_ROWS;
    // Initialize instance.
    this.init();
};
window['MaterialTextfield'] = MaterialTextfield;
/**
   * Store constants in one place so they can be updated easily.
   *
   * @enum {string | number}
   * @private
   */
MaterialTextfield.prototype.Constant_ = {
    NO_MAX_ROWS: -1,
    MAX_ROWS_ATTRIBUTE: 'maxrows'
};
/**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */
MaterialTextfield.prototype.CssClasses_ = {
    LABEL: 'mdl-textfield__label',
    INPUT: 'mdl-textfield__input',
    IS_DIRTY: 'is-dirty',
    IS_FOCUSED: 'is-focused',
    IS_DISABLED: 'is-disabled',
    IS_INVALID: 'is-invalid',
    IS_UPGRADED: 'is-upgraded'
};
/**
   * Handle input being entered.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialTextfield.prototype.onKeyDown_ = function (event) {
    var currentRowCount = event.target.value.split('\n').length;
    if (event.keyCode === 13) {
        if (currentRowCount >= this.maxRows) {
            event.preventDefault();
        }
    }
};
/**
   * Handle focus.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialTextfield.prototype.onFocus_ = function (event) {
    this.element_.classList.add(this.CssClasses_.IS_FOCUSED);
};
/**
   * Handle lost focus.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialTextfield.prototype.onBlur_ = function (event) {
    this.element_.classList.remove(this.CssClasses_.IS_FOCUSED);
};
/**
   * Handle class updates.
   *
   * @private
   */
MaterialTextfield.prototype.updateClasses_ = function () {
    this.checkDisabled();
    this.checkValidity();
    this.checkDirty();
};
// Public methods.
/**
   * Check the disabled state and update field accordingly.
   *
   * @public
   */
MaterialTextfield.prototype.checkDisabled = function () {
    if (this.input_.disabled) {
        this.element_.classList.add(this.CssClasses_.IS_DISABLED);
    } else {
        this.element_.classList.remove(this.CssClasses_.IS_DISABLED);
    }
};
MaterialTextfield.prototype['checkDisabled'] = MaterialTextfield.prototype.checkDisabled;
/**
   * Check the validity state and update field accordingly.
   *
   * @public
   */
MaterialTextfield.prototype.checkValidity = function () {
    if (this.input_.validity.valid) {
        this.element_.classList.remove(this.CssClasses_.IS_INVALID);
    } else {
        this.element_.classList.add(this.CssClasses_.IS_INVALID);
    }
};
MaterialTextfield.prototype['checkValidity'] = MaterialTextfield.prototype.checkValidity;
/**
   * Check the dirty state and update field accordingly.
   *
   * @public
   */
MaterialTextfield.prototype.checkDirty = function () {
    if (this.input_.value && this.input_.value.length > 0) {
        this.element_.classList.add(this.CssClasses_.IS_DIRTY);
    } else {
        this.element_.classList.remove(this.CssClasses_.IS_DIRTY);
    }
};
MaterialTextfield.prototype['checkDirty'] = MaterialTextfield.prototype.checkDirty;
/**
   * Disable text field.
   *
   * @public
   */
MaterialTextfield.prototype.disable = function () {
    this.input_.disabled = true;
    this.updateClasses_();
};
MaterialTextfield.prototype['disable'] = MaterialTextfield.prototype.disable;
/**
   * Enable text field.
   *
   * @public
   */
MaterialTextfield.prototype.enable = function () {
    this.input_.disabled = false;
    this.updateClasses_();
};
MaterialTextfield.prototype['enable'] = MaterialTextfield.prototype.enable;
/**
   * Update text field value.
   *
   * @param {string} value The value to which to set the control (optional).
   * @public
   */
MaterialTextfield.prototype.change = function (value) {
    if (value) {
        this.input_.value = value;
    } else {
        this.input_.value = '';
    }
    this.updateClasses_();
};
MaterialTextfield.prototype['change'] = MaterialTextfield.prototype.change;
/**
   * Initialize element.
   */
MaterialTextfield.prototype.init = function () {
    if (this.element_) {
        this.label_ = this.element_.querySelector('.' + this.CssClasses_.LABEL);
        this.input_ = this.element_.querySelector('.' + this.CssClasses_.INPUT);
        if (this.input_) {
            if (this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE)) {
                this.maxRows = parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE), 10);
                if (isNaN(this.maxRows)) {
                    this.maxRows = this.Constant_.NO_MAX_ROWS;
                }
            }
            this.boundUpdateClassesHandler = this.updateClasses_.bind(this);
            this.boundFocusHandler = this.onFocus_.bind(this);
            this.boundBlurHandler = this.onBlur_.bind(this);
            this.input_.addEventListener('input', this.boundUpdateClassesHandler);
            this.input_.addEventListener('focus', this.boundFocusHandler);
            this.input_.addEventListener('blur', this.boundBlurHandler);
            if (this.maxRows !== this.Constant_.NO_MAX_ROWS) {
                // TODO: This should handle pasting multi line text.
                // Currently doesn't.
                this.boundKeyDownHandler = this.onKeyDown_.bind(this);
                this.input_.addEventListener('keydown', this.boundKeyDownHandler);
            }
            this.updateClasses_();
            this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
        }
    }
};
/**
   * Downgrade the component
   *
   * @private
   */
MaterialTextfield.prototype.mdlDowngrade_ = function () {
    this.input_.removeEventListener('input', this.boundUpdateClassesHandler);
    this.input_.removeEventListener('focus', this.boundFocusHandler);
    this.input_.removeEventListener('blur', this.boundBlurHandler);
    if (this.boundKeyDownHandler) {
        this.input_.removeEventListener('keydown', this.boundKeyDownHandler);
    }
};
// The component registers itself. It can assume componentHandler is available
// in the global scope.
componentHandler.register({
    constructor: MaterialTextfield,
    classAsString: 'MaterialTextfield',
    cssClass: 'mdl-js-textfield',
    widget: true
});
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
   * Class constructor for Tooltip MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @constructor
   * @param {HTMLElement} element The element that will be upgraded.
   */
var MaterialTooltip = function MaterialTooltip(element) {
    this.element_ = element;
    // Initialize instance.
    this.init();
};
window['MaterialTooltip'] = MaterialTooltip;
/**
   * Store constants in one place so they can be updated easily.
   *
   * @enum {string | number}
   * @private
   */
MaterialTooltip.prototype.Constant_ = {};
/**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */
MaterialTooltip.prototype.CssClasses_ = { IS_ACTIVE: 'is-active' };
/**
   * Handle mouseenter for tooltip.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialTooltip.prototype.handleMouseEnter_ = function (event) {
    event.stopPropagation();
    var props = event.target.getBoundingClientRect();
    var left = props.left + props.width / 2;
    var marginLeft = -1 * (this.element_.offsetWidth / 2);
    if (left + marginLeft < 0) {
        this.element_.style.left = 0;
        this.element_.style.marginLeft = 0;
    } else {
        this.element_.style.left = left + 'px';
        this.element_.style.marginLeft = marginLeft + 'px';
    }
    this.element_.style.top = props.top + props.height + 10 + 'px';
    this.element_.classList.add(this.CssClasses_.IS_ACTIVE);
    window.addEventListener('scroll', this.boundMouseLeaveHandler, false);
    window.addEventListener('touchmove', this.boundMouseLeaveHandler, false);
};
/**
   * Handle mouseleave for tooltip.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialTooltip.prototype.handleMouseLeave_ = function (event) {
    event.stopPropagation();
    this.element_.classList.remove(this.CssClasses_.IS_ACTIVE);
    window.removeEventListener('scroll', this.boundMouseLeaveHandler);
    window.removeEventListener('touchmove', this.boundMouseLeaveHandler, false);
};
/**
   * Initialize element.
   */
MaterialTooltip.prototype.init = function () {
    if (this.element_) {
        var forElId = this.element_.getAttribute('for');
        if (forElId) {
            this.forElement_ = document.getElementById(forElId);
        }
        if (this.forElement_) {
            // Tabindex needs to be set for `blur` events to be emitted
            if (!this.forElement_.getAttribute('tabindex')) {
                this.forElement_.setAttribute('tabindex', '0');
            }
            this.boundMouseEnterHandler = this.handleMouseEnter_.bind(this);
            this.boundMouseLeaveHandler = this.handleMouseLeave_.bind(this);
            this.forElement_.addEventListener('mouseenter', this.boundMouseEnterHandler, false);
            this.forElement_.addEventListener('click', this.boundMouseEnterHandler, false);
            this.forElement_.addEventListener('blur', this.boundMouseLeaveHandler);
            this.forElement_.addEventListener('touchstart', this.boundMouseEnterHandler, false);
            this.forElement_.addEventListener('mouseleave', this.boundMouseLeaveHandler);
        }
    }
};
/**
   * Downgrade the component
   *
   * @private
   */
MaterialTooltip.prototype.mdlDowngrade_ = function () {
    if (this.forElement_) {
        this.forElement_.removeEventListener('mouseenter', this.boundMouseEnterHandler, false);
        this.forElement_.removeEventListener('click', this.boundMouseEnterHandler, false);
        this.forElement_.removeEventListener('touchstart', this.boundMouseEnterHandler, false);
        this.forElement_.removeEventListener('mouseleave', this.boundMouseLeaveHandler);
    }
};
// The component registers itself. It can assume componentHandler is available
// in the global scope.
componentHandler.register({
    constructor: MaterialTooltip,
    classAsString: 'MaterialTooltip',
    cssClass: 'mdl-tooltip'
});
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
   * Class constructor for Layout MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @constructor
   * @param {HTMLElement} element The element that will be upgraded.
   */
var MaterialLayout = function MaterialLayout(element) {
    this.element_ = element;
    // Initialize instance.
    this.init();
};
window['MaterialLayout'] = MaterialLayout;
/**
   * Store constants in one place so they can be updated easily.
   *
   * @enum {string | number}
   * @private
   */
MaterialLayout.prototype.Constant_ = {
    MAX_WIDTH: '(max-width: 1024px)',
    TAB_SCROLL_PIXELS: 100,
    MENU_ICON: 'menu',
    CHEVRON_LEFT: 'chevron_left',
    CHEVRON_RIGHT: 'chevron_right'
};
/**
   * Modes.
   *
   * @enum {number}
   * @private
   */
MaterialLayout.prototype.Mode_ = {
    STANDARD: 0,
    SEAMED: 1,
    WATERFALL: 2,
    SCROLL: 3
};
/**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */
MaterialLayout.prototype.CssClasses_ = {
    CONTAINER: 'mdl-layout__container',
    HEADER: 'mdl-layout__header',
    DRAWER: 'mdl-layout__drawer',
    CONTENT: 'mdl-layout__content',
    DRAWER_BTN: 'mdl-layout__drawer-button',
    ICON: 'material-icons',
    JS_RIPPLE_EFFECT: 'mdl-js-ripple-effect',
    RIPPLE_CONTAINER: 'mdl-layout__tab-ripple-container',
    RIPPLE: 'mdl-ripple',
    RIPPLE_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
    HEADER_SEAMED: 'mdl-layout__header--seamed',
    HEADER_WATERFALL: 'mdl-layout__header--waterfall',
    HEADER_SCROLL: 'mdl-layout__header--scroll',
    FIXED_HEADER: 'mdl-layout--fixed-header',
    OBFUSCATOR: 'mdl-layout__obfuscator',
    TAB_BAR: 'mdl-layout__tab-bar',
    TAB_CONTAINER: 'mdl-layout__tab-bar-container',
    TAB: 'mdl-layout__tab',
    TAB_BAR_BUTTON: 'mdl-layout__tab-bar-button',
    TAB_BAR_LEFT_BUTTON: 'mdl-layout__tab-bar-left-button',
    TAB_BAR_RIGHT_BUTTON: 'mdl-layout__tab-bar-right-button',
    PANEL: 'mdl-layout__tab-panel',
    HAS_DRAWER: 'has-drawer',
    HAS_TABS: 'has-tabs',
    HAS_SCROLLING_HEADER: 'has-scrolling-header',
    CASTING_SHADOW: 'is-casting-shadow',
    IS_COMPACT: 'is-compact',
    IS_SMALL_SCREEN: 'is-small-screen',
    IS_DRAWER_OPEN: 'is-visible',
    IS_ACTIVE: 'is-active',
    IS_UPGRADED: 'is-upgraded',
    IS_ANIMATING: 'is-animating',
    ON_LARGE_SCREEN: 'mdl-layout--large-screen-only',
    ON_SMALL_SCREEN: 'mdl-layout--small-screen-only'
};
/**
   * Handles scrolling on the content.
   *
   * @private
   */
MaterialLayout.prototype.contentScrollHandler_ = function () {
    if (this.header_.classList.contains(this.CssClasses_.IS_ANIMATING)) {
        return;
    }
    if (this.content_.scrollTop > 0 && !this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {
        this.header_.classList.add(this.CssClasses_.CASTING_SHADOW);
        this.header_.classList.add(this.CssClasses_.IS_COMPACT);
        this.header_.classList.add(this.CssClasses_.IS_ANIMATING);
    } else if (this.content_.scrollTop <= 0 && this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {
        this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW);
        this.header_.classList.remove(this.CssClasses_.IS_COMPACT);
        this.header_.classList.add(this.CssClasses_.IS_ANIMATING);
    }
};
/**
   * Handles changes in screen size.
   *
   * @private
   */
MaterialLayout.prototype.screenSizeHandler_ = function () {
    if (this.screenSizeMediaQuery_.matches) {
        this.element_.classList.add(this.CssClasses_.IS_SMALL_SCREEN);
    } else {
        this.element_.classList.remove(this.CssClasses_.IS_SMALL_SCREEN);
        // Collapse drawer (if any) when moving to a large screen size.
        if (this.drawer_) {
            this.drawer_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN);
        }
    }
};
/**
   * Handles toggling of the drawer.
   *
   * @private
   */
MaterialLayout.prototype.drawerToggleHandler_ = function () {
    this.drawer_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN);
};
/**
   * Handles (un)setting the `is-animating` class
   *
   * @private
   */
MaterialLayout.prototype.headerTransitionEndHandler_ = function () {
    this.header_.classList.remove(this.CssClasses_.IS_ANIMATING);
};
/**
   * Handles expanding the header on click
   *
   * @private
   */
MaterialLayout.prototype.headerClickHandler_ = function () {
    if (this.header_.classList.contains(this.CssClasses_.IS_COMPACT)) {
        this.header_.classList.remove(this.CssClasses_.IS_COMPACT);
        this.header_.classList.add(this.CssClasses_.IS_ANIMATING);
    }
};
/**
   * Reset tab state, dropping active classes
   *
   * @private
   */
MaterialLayout.prototype.resetTabState_ = function (tabBar) {
    for (var k = 0; k < tabBar.length; k++) {
        tabBar[k].classList.remove(this.CssClasses_.IS_ACTIVE);
    }
};
/**
   * Reset panel state, droping active classes
   *
   * @private
   */
MaterialLayout.prototype.resetPanelState_ = function (panels) {
    for (var j = 0; j < panels.length; j++) {
        panels[j].classList.remove(this.CssClasses_.IS_ACTIVE);
    }
};
/**
   * Initialize element.
   */
MaterialLayout.prototype.init = function () {
    if (this.element_) {
        var container = document.createElement('div');
        container.classList.add(this.CssClasses_.CONTAINER);
        this.element_.parentElement.insertBefore(container, this.element_);
        this.element_.parentElement.removeChild(this.element_);
        container.appendChild(this.element_);
        var directChildren = this.element_.childNodes;
        for (var c = 0; c < directChildren.length; c++) {
            var child = directChildren[c];
            if (child.classList && child.classList.contains(this.CssClasses_.HEADER)) {
                this.header_ = child;
            }
            if (child.classList && child.classList.contains(this.CssClasses_.DRAWER)) {
                this.drawer_ = child;
            }
            if (child.classList && child.classList.contains(this.CssClasses_.CONTENT)) {
                this.content_ = child;
            }
        }
        if (this.header_) {
            this.tabBar_ = this.header_.querySelector('.' + this.CssClasses_.TAB_BAR);
        }
        var mode = this.Mode_.STANDARD;
        // Keep an eye on screen size, and add/remove auxiliary class for styling
        // of small screens.
        this.screenSizeMediaQuery_ = window.matchMedia(this.Constant_.MAX_WIDTH);
        this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this));
        this.screenSizeHandler_();
        if (this.header_) {
            if (this.header_.classList.contains(this.CssClasses_.HEADER_SEAMED)) {
                mode = this.Mode_.SEAMED;
            } else if (this.header_.classList.contains(this.CssClasses_.HEADER_WATERFALL)) {
                mode = this.Mode_.WATERFALL;
                this.header_.addEventListener('transitionend', this.headerTransitionEndHandler_.bind(this));
                this.header_.addEventListener('click', this.headerClickHandler_.bind(this));
            } else if (this.header_.classList.contains(this.CssClasses_.HEADER_SCROLL)) {
                mode = this.Mode_.SCROLL;
                container.classList.add(this.CssClasses_.HAS_SCROLLING_HEADER);
            }
            if (mode === this.Mode_.STANDARD) {
                this.header_.classList.add(this.CssClasses_.CASTING_SHADOW);
                if (this.tabBar_) {
                    this.tabBar_.classList.add(this.CssClasses_.CASTING_SHADOW);
                }
            } else if (mode === this.Mode_.SEAMED || mode === this.Mode_.SCROLL) {
                this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW);
                if (this.tabBar_) {
                    this.tabBar_.classList.remove(this.CssClasses_.CASTING_SHADOW);
                }
            } else if (mode === this.Mode_.WATERFALL) {
                // Add and remove shadows depending on scroll position.
                // Also add/remove auxiliary class for styling of the compact version of
                // the header.
                this.content_.addEventListener('scroll', this.contentScrollHandler_.bind(this));
                this.contentScrollHandler_();
            }
        }
        /**
       * Prevents an event from triggering the default behaviour.
       * @param  {Event} ev the event to eat.
       */
        var eatEvent = function (ev) {
            ev.preventDefault();
        };
        // Add drawer toggling button to our layout, if we have an openable drawer.
        if (this.drawer_) {
            var drawerButton = this.element_.querySelector('.' + this.CssClasses_.DRAWER_BTN);
            if (typeof drawerButton === 'undefined' || drawerButton === null) {
                drawerButton = document.createElement('div');
                drawerButton.classList.add(this.CssClasses_.DRAWER_BTN);
                var drawerButtonIcon = document.createElement('i');
                drawerButtonIcon.classList.add(this.CssClasses_.ICON);
                drawerButtonIcon.textContent = this.Constant_.MENU_ICON;
                drawerButton.appendChild(drawerButtonIcon);
            }
            if (this.drawer_.classList.contains(this.CssClasses_.ON_LARGE_SCREEN)) {
                //If drawer has ON_LARGE_SCREEN class then add it to the drawer toggle button as well.
                drawerButton.classList.add(this.CssClasses_.ON_LARGE_SCREEN);
            } else if (this.drawer_.classList.contains(this.CssClasses_.ON_SMALL_SCREEN)) {
                //If drawer has ON_SMALL_SCREEN class then add it to the drawer toggle button as well.
                drawerButton.classList.add(this.CssClasses_.ON_SMALL_SCREEN);
            }
            drawerButton.addEventListener('click', this.drawerToggleHandler_.bind(this));
            // Add a class if the layout has a drawer, for altering the left padding.
            // Adds the HAS_DRAWER to the elements since this.header_ may or may
            // not be present.
            this.element_.classList.add(this.CssClasses_.HAS_DRAWER);
            this.drawer_.addEventListener('mousewheel', eatEvent);
            // If we have a fixed header, add the button to the header rather than
            // the layout.
            if (this.element_.classList.contains(this.CssClasses_.FIXED_HEADER)) {
                this.header_.insertBefore(drawerButton, this.header_.firstChild);
            } else {
                this.element_.insertBefore(drawerButton, this.content_);
            }
            var obfuscator = document.createElement('div');
            obfuscator.classList.add(this.CssClasses_.OBFUSCATOR);
            this.element_.appendChild(obfuscator);
            obfuscator.addEventListener('click', this.drawerToggleHandler_.bind(this));
            obfuscator.addEventListener('mousewheel', eatEvent);
        }
        // Initialize tabs, if any.
        if (this.header_ && this.tabBar_) {
            this.element_.classList.add(this.CssClasses_.HAS_TABS);
            var tabContainer = document.createElement('div');
            tabContainer.classList.add(this.CssClasses_.TAB_CONTAINER);
            this.header_.insertBefore(tabContainer, this.tabBar_);
            this.header_.removeChild(this.tabBar_);
            var leftButton = document.createElement('div');
            leftButton.classList.add(this.CssClasses_.TAB_BAR_BUTTON);
            leftButton.classList.add(this.CssClasses_.TAB_BAR_LEFT_BUTTON);
            var leftButtonIcon = document.createElement('i');
            leftButtonIcon.classList.add(this.CssClasses_.ICON);
            leftButtonIcon.textContent = this.Constant_.CHEVRON_LEFT;
            leftButton.appendChild(leftButtonIcon);
            leftButton.addEventListener('click', function () {
                this.tabBar_.scrollLeft -= this.Constant_.TAB_SCROLL_PIXELS;
            }.bind(this));
            var rightButton = document.createElement('div');
            rightButton.classList.add(this.CssClasses_.TAB_BAR_BUTTON);
            rightButton.classList.add(this.CssClasses_.TAB_BAR_RIGHT_BUTTON);
            var rightButtonIcon = document.createElement('i');
            rightButtonIcon.classList.add(this.CssClasses_.ICON);
            rightButtonIcon.textContent = this.Constant_.CHEVRON_RIGHT;
            rightButton.appendChild(rightButtonIcon);
            rightButton.addEventListener('click', function () {
                this.tabBar_.scrollLeft += this.Constant_.TAB_SCROLL_PIXELS;
            }.bind(this));
            tabContainer.appendChild(leftButton);
            tabContainer.appendChild(this.tabBar_);
            tabContainer.appendChild(rightButton);
            // Add and remove buttons depending on scroll position.
            var tabScrollHandler = function () {
                if (this.tabBar_.scrollLeft > 0) {
                    leftButton.classList.add(this.CssClasses_.IS_ACTIVE);
                } else {
                    leftButton.classList.remove(this.CssClasses_.IS_ACTIVE);
                }
                if (this.tabBar_.scrollLeft < this.tabBar_.scrollWidth - this.tabBar_.offsetWidth) {
                    rightButton.classList.add(this.CssClasses_.IS_ACTIVE);
                } else {
                    rightButton.classList.remove(this.CssClasses_.IS_ACTIVE);
                }
            }.bind(this);
            this.tabBar_.addEventListener('scroll', tabScrollHandler);
            tabScrollHandler();
            if (this.tabBar_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)) {
                this.tabBar_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
            }
            // Select element tabs, document panels
            var tabs = this.tabBar_.querySelectorAll('.' + this.CssClasses_.TAB);
            var panels = this.content_.querySelectorAll('.' + this.CssClasses_.PANEL);
            // Create new tabs for each tab element
            for (var i = 0; i < tabs.length; i++) {
                new MaterialLayoutTab(tabs[i], tabs, panels, this);
            }
        }
        this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
    }
};
/**
   * Constructor for an individual tab.
   *
   * @constructor
   * @param {HTMLElement} tab The HTML element for the tab.
   * @param {!Array<HTMLElement>} tabs Array with HTML elements for all tabs.
   * @param {!Array<HTMLElement>} panels Array with HTML elements for all panels.
   * @param {MaterialLayout} layout The MaterialLayout object that owns the tab.
   */
function MaterialLayoutTab(tab, tabs, panels, layout) {
    if (tab) {
        if (layout.tabBar_.classList.contains(layout.CssClasses_.JS_RIPPLE_EFFECT)) {
            var rippleContainer = document.createElement('span');
            rippleContainer.classList.add(layout.CssClasses_.RIPPLE_CONTAINER);
            rippleContainer.classList.add(layout.CssClasses_.JS_RIPPLE_EFFECT);
            var ripple = document.createElement('span');
            ripple.classList.add(layout.CssClasses_.RIPPLE);
            rippleContainer.appendChild(ripple);
            tab.appendChild(rippleContainer);
        }
        tab.addEventListener('click', function (e) {
            e.preventDefault();
            var href = tab.href.split('#')[1];
            var panel = layout.content_.querySelector('#' + href);
            layout.resetTabState_(tabs);
            layout.resetPanelState_(panels);
            tab.classList.add(layout.CssClasses_.IS_ACTIVE);
            panel.classList.add(layout.CssClasses_.IS_ACTIVE);
        });
    }
}
// The component registers itself. It can assume componentHandler is available
// in the global scope.
componentHandler.register({
    constructor: MaterialLayout,
    classAsString: 'MaterialLayout',
    cssClass: 'mdl-js-layout'
});
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
   * Class constructor for Data Table Card MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @constructor
   * @param {HTMLElement} element The element that will be upgraded.
   */
var MaterialDataTable = function MaterialDataTable(element) {
    this.element_ = element;
    // Initialize instance.
    this.init();
};
window['MaterialDataTable'] = MaterialDataTable;
/**
   * Store constants in one place so they can be updated easily.
   *
   * @enum {string | number}
   * @private
   */
MaterialDataTable.prototype.Constant_ = {};
/**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */
MaterialDataTable.prototype.CssClasses_ = {
    DATA_TABLE: 'mdl-data-table',
    SELECTABLE: 'mdl-data-table--selectable',
    IS_SELECTED: 'is-selected',
    IS_UPGRADED: 'is-upgraded'
};
/**
   * Generates and returns a function that toggles the selection state of a
   * single row (or multiple rows).
   *
   * @param {Element} checkbox Checkbox that toggles the selection state.
   * @param {HTMLElement} row Row to toggle when checkbox changes.
   * @param {(Array<Object>|NodeList)=} opt_rows Rows to toggle when checkbox changes.
   * @private
   */
MaterialDataTable.prototype.selectRow_ = function (checkbox, row, opt_rows) {
    if (row) {
        return function () {
            if (checkbox.checked) {
                row.classList.add(this.CssClasses_.IS_SELECTED);
            } else {
                row.classList.remove(this.CssClasses_.IS_SELECTED);
            }
        }.bind(this);
    }
    if (opt_rows) {
        return function () {
            var i;
            var el;
            if (checkbox.checked) {
                for (i = 0; i < opt_rows.length; i++) {
                    el = opt_rows[i].querySelector('td').querySelector('.mdl-checkbox');
                    el['MaterialCheckbox'].check();
                    opt_rows[i].classList.add(this.CssClasses_.IS_SELECTED);
                }
            } else {
                for (i = 0; i < opt_rows.length; i++) {
                    el = opt_rows[i].querySelector('td').querySelector('.mdl-checkbox');
                    el['MaterialCheckbox'].uncheck();
                    opt_rows[i].classList.remove(this.CssClasses_.IS_SELECTED);
                }
            }
        }.bind(this);
    }
};
/**
   * Creates a checkbox for a single or or multiple rows and hooks up the
   * event handling.
   *
   * @param {HTMLElement} row Row to toggle when checkbox changes.
   * @param {(Array<Object>|NodeList)=} opt_rows Rows to toggle when checkbox changes.
   * @private
   */
MaterialDataTable.prototype.createCheckbox_ = function (row, opt_rows) {
    var label = document.createElement('label');
    label.classList.add('mdl-checkbox');
    label.classList.add('mdl-js-checkbox');
    label.classList.add('mdl-js-ripple-effect');
    label.classList.add('mdl-data-table__select');
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('mdl-checkbox__input');
    if (row) {
        checkbox.addEventListener('change', this.selectRow_(checkbox, row));
    } else if (opt_rows) {
        checkbox.addEventListener('change', this.selectRow_(checkbox, null, opt_rows));
    }
    label.appendChild(checkbox);
    componentHandler.upgradeElement(label, 'MaterialCheckbox');
    return label;
};
/**
   * Initialize element.
   */
MaterialDataTable.prototype.init = function () {
    if (this.element_) {
        var firstHeader = this.element_.querySelector('th');
        var rows = this.element_.querySelector('tbody').querySelectorAll('tr');
        if (this.element_.classList.contains(this.CssClasses_.SELECTABLE)) {
            var th = document.createElement('th');
            var headerCheckbox = this.createCheckbox_(null, rows);
            th.appendChild(headerCheckbox);
            firstHeader.parentElement.insertBefore(th, firstHeader);
            for (var i = 0; i < rows.length; i++) {
                var firstCell = rows[i].querySelector('td');
                if (firstCell) {
                    var td = document.createElement('td');
                    var rowCheckbox = this.createCheckbox_(rows[i]);
                    td.appendChild(rowCheckbox);
                    rows[i].insertBefore(td, firstCell);
                }
            }
        }
        this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
    }
};
// The component registers itself. It can assume componentHandler is available
// in the global scope.
componentHandler.register({
    constructor: MaterialDataTable,
    classAsString: 'MaterialDataTable',
    cssClass: 'mdl-js-data-table'
});
/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
   * Class constructor for Ripple MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @constructor
   * @param {HTMLElement} element The element that will be upgraded.
   */
var MaterialRipple = function MaterialRipple(element) {
    this.element_ = element;
    // Initialize instance.
    this.init();
};
window['MaterialRipple'] = MaterialRipple;
/**
   * Store constants in one place so they can be updated easily.
   *
   * @enum {string | number}
   * @private
   */
MaterialRipple.prototype.Constant_ = {
    INITIAL_SCALE: 'scale(0.0001, 0.0001)',
    INITIAL_SIZE: '1px',
    INITIAL_OPACITY: '0.4',
    FINAL_OPACITY: '0',
    FINAL_SCALE: ''
};
/**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */
MaterialRipple.prototype.CssClasses_ = {
    RIPPLE_CENTER: 'mdl-ripple--center',
    RIPPLE_EFFECT_IGNORE_EVENTS: 'mdl-js-ripple-effect--ignore-events',
    RIPPLE: 'mdl-ripple',
    IS_ANIMATING: 'is-animating',
    IS_VISIBLE: 'is-visible'
};
/**
   * Handle mouse / finger down on element.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialRipple.prototype.downHandler_ = function (event) {
    if (!this.rippleElement_.style.width && !this.rippleElement_.style.height) {
        var rect = this.element_.getBoundingClientRect();
        this.boundHeight = rect.height;
        this.boundWidth = rect.width;
        this.rippleSize_ = Math.sqrt(rect.width * rect.width + rect.height * rect.height) * 2 + 2;
        this.rippleElement_.style.width = this.rippleSize_ + 'px';
        this.rippleElement_.style.height = this.rippleSize_ + 'px';
    }
    this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE);
    if (event.type === 'mousedown' && this.ignoringMouseDown_) {
        this.ignoringMouseDown_ = false;
    } else {
        if (event.type === 'touchstart') {
            this.ignoringMouseDown_ = true;
        }
        var frameCount = this.getFrameCount();
        if (frameCount > 0) {
            return;
        }
        this.setFrameCount(1);
        var bound = event.currentTarget.getBoundingClientRect();
        var x;
        var y;
        // Check if we are handling a keyboard click.
        if (event.clientX === 0 && event.clientY === 0) {
            x = Math.round(bound.width / 2);
            y = Math.round(bound.height / 2);
        } else {
            var clientX = event.clientX ? event.clientX : event.touches[0].clientX;
            var clientY = event.clientY ? event.clientY : event.touches[0].clientY;
            x = Math.round(clientX - bound.left);
            y = Math.round(clientY - bound.top);
        }
        this.setRippleXY(x, y);
        this.setRippleStyles(true);
        window.requestAnimationFrame(this.animFrameHandler.bind(this));
    }
};
/**
   * Handle mouse / finger up on element.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialRipple.prototype.upHandler_ = function (event) {
    // Don't fire for the artificial "mouseup" generated by a double-click.
    if (event && event.detail !== 2) {
        this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE);
    }
    // Allow a repaint to occur before removing this class, so the animation
    // shows for tap events, which seem to trigger a mouseup too soon after
    // mousedown.
    window.setTimeout(function () {
        this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE);
    }.bind(this), 0);
};
/**
   * Initialize element.
   */
MaterialRipple.prototype.init = function () {
    if (this.element_) {
        var recentering = this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);
        if (!this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS)) {
            this.rippleElement_ = this.element_.querySelector('.' + this.CssClasses_.RIPPLE);
            this.frameCount_ = 0;
            this.rippleSize_ = 0;
            this.x_ = 0;
            this.y_ = 0;
            // Touch start produces a compat mouse down event, which would cause a
            // second ripples. To avoid that, we use this property to ignore the first
            // mouse down after a touch start.
            this.ignoringMouseDown_ = false;
            this.boundDownHandler = this.downHandler_.bind(this);
            this.element_.addEventListener('mousedown', this.boundDownHandler);
            this.element_.addEventListener('touchstart', this.boundDownHandler);
            this.boundUpHandler = this.upHandler_.bind(this);
            this.element_.addEventListener('mouseup', this.boundUpHandler);
            this.element_.addEventListener('mouseleave', this.boundUpHandler);
            this.element_.addEventListener('touchend', this.boundUpHandler);
            this.element_.addEventListener('blur', this.boundUpHandler);
            /**
         * Getter for frameCount_.
         * @return {number} the frame count.
         */
            this.getFrameCount = function () {
                return this.frameCount_;
            };
            /**
         * Setter for frameCount_.
         * @param {number} fC the frame count.
         */
            this.setFrameCount = function (fC) {
                this.frameCount_ = fC;
            };
            /**
         * Getter for rippleElement_.
         * @return {Element} the ripple element.
         */
            this.getRippleElement = function () {
                return this.rippleElement_;
            };
            /**
         * Sets the ripple X and Y coordinates.
         * @param  {number} newX the new X coordinate
         * @param  {number} newY the new Y coordinate
         */
            this.setRippleXY = function (newX, newY) {
                this.x_ = newX;
                this.y_ = newY;
            };
            /**
         * Sets the ripple styles.
         * @param  {boolean} start whether or not this is the start frame.
         */
            this.setRippleStyles = function (start) {
                if (this.rippleElement_ !== null) {
                    var transformString;
                    var scale;
                    var size;
                    var offset = 'translate(' + this.x_ + 'px, ' + this.y_ + 'px)';
                    if (start) {
                        scale = this.Constant_.INITIAL_SCALE;
                        size = this.Constant_.INITIAL_SIZE;
                    } else {
                        scale = this.Constant_.FINAL_SCALE;
                        size = this.rippleSize_ + 'px';
                        if (recentering) {
                            offset = 'translate(' + this.boundWidth / 2 + 'px, ' + this.boundHeight / 2 + 'px)';
                        }
                    }
                    transformString = 'translate(-50%, -50%) ' + offset + scale;
                    this.rippleElement_.style.webkitTransform = transformString;
                    this.rippleElement_.style.msTransform = transformString;
                    this.rippleElement_.style.transform = transformString;
                    if (start) {
                        this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING);
                    } else {
                        this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING);
                    }
                }
            };
            /**
         * Handles an animation frame.
         */
            this.animFrameHandler = function () {
                if (this.frameCount_-- > 0) {
                    window.requestAnimationFrame(this.animFrameHandler.bind(this));
                } else {
                    this.setRippleStyles(false);
                }
            };
        }
    }
};
/**
   * Downgrade the component
   *
   * @private
   */
MaterialRipple.prototype.mdlDowngrade_ = function () {
    this.element_.removeEventListener('mousedown', this.boundDownHandler);
    this.element_.removeEventListener('touchstart', this.boundDownHandler);
    this.element_.removeEventListener('mouseup', this.boundUpHandler);
    this.element_.removeEventListener('mouseleave', this.boundUpHandler);
    this.element_.removeEventListener('touchend', this.boundUpHandler);
    this.element_.removeEventListener('blur', this.boundUpHandler);
};
// The component registers itself. It can assume componentHandler is available
// in the global scope.
componentHandler.register({
    constructor: MaterialRipple,
    classAsString: 'MaterialRipple',
    cssClass: 'mdl-js-ripple-effect',
    widget: false
});
}());

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9qb2UvcmVwb3NpdG9yaWVzL2ZpdG5lc3MvYXNzZXRzL2pzL2FwcC5qcyIsIi9ob21lL2pvZS9yZXBvc2l0b3JpZXMvZml0bmVzcy9hc3NldHMvanMvY29udHJvbGxlcnMvQXBwQ29udHJvbGxlci5qcyIsIi9ob21lL2pvZS9yZXBvc2l0b3JpZXMvZml0bmVzcy9hc3NldHMvanMvY29udHJvbGxlcnMvTmF2aWdhdGlvbkNvbnRyb2xsZXIuanMiLCIvaG9tZS9qb2UvcmVwb3NpdG9yaWVzL2ZpdG5lc3MvYXNzZXRzL2pzL2NvbnRyb2xsZXJzL092ZXJ2aWV3Q29udHJvbGxlci5qcyIsIi9ob21lL2pvZS9yZXBvc2l0b3JpZXMvZml0bmVzcy9hc3NldHMvanMvY29udHJvbGxlcnMvU2NoZWR1bGVDb250cm9sbGVyLmpzIiwiL2hvbWUvam9lL3JlcG9zaXRvcmllcy9maXRuZXNzL2Fzc2V0cy9qcy9jb250cm9sbGVycy9WaWV3Q29udHJvbGxlci5qcyIsIi9ob21lL2pvZS9yZXBvc2l0b3JpZXMvZml0bmVzcy9hc3NldHMvanMvbW9kZWxzL0V4ZXJjaXNlLmpzIiwibm9kZV9tb2R1bGVzL21hdGVyaWFsLWRlc2lnbi1saXRlL21hdGVyaWFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztRQ0FPLHFEQUFxRDs7MENBQ2xDLGdDQUFnQzs7OztBQUUxRCw2Q0FBbUIsQ0FBQzs7Ozs7Ozs7Ozs7OztzQ0NIYSwyQkFBMkI7Ozs7b0NBQzdCLHlCQUF5Qjs7OztvQ0FDekIseUJBQXlCOzs7O0lBRW5DLGFBQWEsR0FFbkIsU0FGTSxhQUFhLEdBRzlCOzBCQUhpQixhQUFhOztBQUkxQixRQUFJLFVBQVUsR0FBRyx5Q0FBMEIsQ0FBQztBQUM1QyxjQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSx1Q0FBd0IsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMzRCxjQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSx1Q0FBd0IsQ0FBQyxDQUFDO0NBQ3hEOztxQkFQZ0IsYUFBYTs7Ozs7Ozs7Ozs7Ozs7OztnQ0NKUCxxQkFBcUI7Ozs7SUFFM0Isb0JBQW9CO0FBRTFCLGFBRk0sb0JBQW9CLEdBR3JDOzhCQUhpQixvQkFBb0I7O0FBSWpDLFlBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQztLQUMxRDs7Ozs7Ozs7O2lCQUxnQixvQkFBb0I7O2VBYWxDLGFBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQ3BDOzs7QUFDSSxnQkFBSSxDQUFDLFVBQVUseUNBQTBCLEVBQUU7QUFDdkMsc0JBQU0sc0RBQXNELENBQUM7YUFDaEU7QUFDRCxnQkFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNwQyxhQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ3hDLGFBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2IsYUFBQyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7QUFDekIsYUFBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLENBQUMsRUFBSztBQUMvQixpQkFBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ25CLHNCQUFLLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQTthQUM5QixDQUFDLENBQUM7QUFDSCxnQkFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDOUIsZ0JBQUksVUFBVSxFQUFFO0FBQ1osaUJBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNiO1NBQ0o7Ozs7Ozs7O2VBTVMsb0JBQUMsVUFBVSxFQUNyQjtBQUNJLGdCQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtBQUN4QixvQkFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2pDO0FBQ0QsZ0JBQUksQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUM7QUFDcEMsZ0JBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUM5QixnQkFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RCOzs7Ozs7O2VBS1UsdUJBQ1g7QUFDSSxnQkFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDakIsb0JBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO2FBQ3pFO0FBQ0QsZ0JBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNoQixvQkFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUMxQjtTQUNKOzs7V0F6RGdCLG9CQUFvQjs7O3FCQUFwQixvQkFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQ0ZkLHFCQUFxQjs7OztnQ0FDM0IsdUJBQXVCOzs7O0lBRXZCLGtCQUFrQjtjQUFsQixrQkFBa0I7O0FBRXhCLGFBRk0sa0JBQWtCLEdBR25DOzs7OEJBSGlCLGtCQUFrQjs7QUFJL0IsbUNBSmEsa0JBQWtCLDZDQUl6QixRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFFOztBQUUzQyxZQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDdEQsWUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7O0FBRTVCLFlBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDdEUsWUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTttQkFBTSxNQUFLLFdBQVcsRUFBRTtTQUFBLENBQUMsQ0FBQTtLQUM3RTs7Ozs7O2lCQVhnQixrQkFBa0I7O2VBZ0J4Qix1QkFDWDtBQUNJLGdCQUFJLElBQUksR0FBRyxTQUFTLENBQUM7QUFDckIsZ0JBQUksSUFBSSxHQUFHLENBQUMsQ0FBQztBQUNiLDBDQUFTLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDekIsZ0JBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDckM7Ozs7Ozs7OztlQU9lLDBCQUFDLElBQUksRUFBRSxJQUFJLEVBQzNCO0FBQ0ksZ0JBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRXZDLGdCQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNDLG1CQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztBQUMzQixtQkFBTyxDQUFDLFNBQVMsR0FBRyxtQ0FBbUMsQ0FBQzs7QUFFeEQsZ0JBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDM0MsbUJBQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDOztBQUUzQixlQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pCLGVBQUcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekIsZ0JBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hDOzs7Ozs7O2VBS21CLGdDQUNwQjtBQUNJLGdCQUFJLFNBQVMsR0FBRyw4QkFBUyxHQUFHLEVBQUUsQ0FBQzs7Ozs7O0FBQy9CLHFDQUFvQixTQUFTLDhIQUFFO3dCQUF2QixRQUFROztBQUNaLHdCQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3ZEOzs7Ozs7Ozs7Ozs7Ozs7U0FDSjs7O1dBdERnQixrQkFBa0I7OztxQkFBbEIsa0JBQWtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NDSFoscUJBQXFCOzs7O0lBRTNCLGtCQUFrQjtjQUFsQixrQkFBa0I7O0FBRXhCLGFBRk0sa0JBQWtCLEdBR25DOzhCQUhpQixrQkFBa0I7O0FBSS9CLG1DQUphLGtCQUFrQiw2Q0FJekIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRTtLQUM5Qzs7V0FMZ0Isa0JBQWtCOzs7cUJBQWxCLGtCQUFrQjs7Ozs7Ozs7Ozs7Ozs7SUNGbEIsY0FBYztBQUVwQixhQUZNLGNBQWMsQ0FFbkIsU0FBUyxFQUNyQjs4QkFIaUIsY0FBYzs7QUFJM0IsWUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDM0IsWUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ2Y7O2lCQU5nQixjQUFjOztlQVEzQixnQkFDSjtBQUNJLGdCQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQzFDOzs7ZUFFRyxnQkFDSjtBQUNJLGdCQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1NBQ3pDOzs7V0FoQmdCLGNBQWM7OztxQkFBZCxjQUFjOzs7Ozs7Ozs7Ozs7OztJQ0FkLFFBQVE7YUFBUixRQUFROzhCQUFSLFFBQVE7OztpQkFBUixRQUFROzs7Ozs7OztlQU9mLGFBQUMsSUFBSSxFQUFFLElBQUksRUFDckI7QUFDSSxnQkFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzNCLHFCQUFTLENBQUMsSUFBSSxDQUFDO0FBQ1gsb0JBQUksRUFBRSxJQUFJO0FBQ1Ysb0JBQUksRUFBRSxJQUFJO2FBQ2IsQ0FBQyxDQUFDO0FBQ0gsd0JBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUNoRTs7Ozs7Ozs7ZUFNUyxlQUNWO0FBQ0ksbUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzlEOzs7V0F4QmdCLFFBQVE7OztxQkFBUixRQUFROzs7O0FDQTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgXCIuLi8uLi9ub2RlX21vZHVsZXMvbWF0ZXJpYWwtZGVzaWduLWxpdGUvbWF0ZXJpYWwuanNcIjtcbmltcG9ydCBBcHBDb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJzL0FwcENvbnRyb2xsZXIuanNcIjtcblxubmV3IEFwcENvbnRyb2xsZXIoKTsiLCJpbXBvcnQgTmF2aWdhdGlvbkNvbnRyb2xsZXIgZnJvbSBcIi4vTmF2aWdhdGlvbkNvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBPdmVydmlld0NvbnRyb2xsZXIgZnJvbSBcIi4vT3ZlcnZpZXdDb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgU2NoZWR1bGVDb250cm9sbGVyIGZyb20gXCIuL1NjaGVkdWxlQ29udHJvbGxlci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKClcbiAgICB7XG4gICAgICAgIHZhciBuYXZpZ2F0aW9uID0gbmV3IE5hdmlnYXRpb25Db250cm9sbGVyKCk7XG4gICAgICAgIG5hdmlnYXRpb24uYWRkKCdPdmVydmlldycsIG5ldyBPdmVydmlld0NvbnRyb2xsZXIoKSwgdHJ1ZSk7XG4gICAgICAgIG5hdmlnYXRpb24uYWRkKCdTY2hlZHVsZScsIG5ldyBTY2hlZHVsZUNvbnRyb2xsZXIoKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFZpZXdDb250cm9sbGVyIGZyb20gJy4vVmlld0NvbnRyb2xsZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0aW9uQ29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXZpZ2F0aW9uJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgbWVudSBpdGVtIHRvIHRoZSBuYXZpZ2F0aW9uXG4gICAgICogQHBhcmFtIGl0ZW1UZXh0IFRoZSBuYW1lIG9mIHRoZSBtZW51IGl0ZW1cbiAgICAgKiBAcGFyYW0gY29udHJvbGxlciBUaGUgVmlld0NvbnRyb2xsZXIgdG8gc3dpdGNoIG9uIGNsaWNrXG4gICAgICogQHBhcmFtIHNldERlZmF1bHQgV2hldGhlciB0byBzZXQgdGhpcyBpdGVtIGFzIHRoZSBkZWZhdWx0IHNlbGVjdGlvblxuICAgICAqL1xuICAgIGFkZChpdGVtVGV4dCwgY29udHJvbGxlciwgc2V0RGVmYXVsdClcbiAgICB7XG4gICAgICAgIGlmICghY29udHJvbGxlciBpbnN0YW5jZW9mIFZpZXdDb250cm9sbGVyKSB7XG4gICAgICAgICAgICB0aHJvdyBcIk5hdmlnYXRpb24gY29udHJvbGxlciBtdXN0IGJlIG9mIHR5cGUgVmlld0NvbnRyb2xsZXJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgYS5jbGFzc0xpc3QuYWRkKCdtZGwtbmF2aWdhdGlvbl9fbGluaycpO1xuICAgICAgICBhLmhyZWYgPSBcIiNcIjtcbiAgICAgICAgYS50ZXh0Q29udGVudCA9IGl0ZW1UZXh0O1xuICAgICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoVmlldyhjb250cm9sbGVyKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICAgIGlmIChzZXREZWZhdWx0KSB7XG4gICAgICAgICAgICBhLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTd2l0Y2hlcyB0aGUgdmlldyB0byBzaG93XG4gICAgICogQHBhcmFtIGNvbnRyb2xsZXIgVGhlIFZpZXdDb250cm9sbGVyIHRvIHN3aXRjaCB0b1xuICAgICAqL1xuICAgIHN3aXRjaFZpZXcoY29udHJvbGxlcilcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRDb250cm9sbGVyKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDb250cm9sbGVyLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRDb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICAgICAgdGhpcy5jdXJyZW50Q29udHJvbGxlci5zaG93KCk7XG4gICAgICAgIHRoaXMuY2xvc2VEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYXVzZXMgdGhlIG5hdmlnYXRpb24gZHJhd2VyIHRvIGdvIGF3YXlcbiAgICAgKi9cbiAgICBjbG9zZURyYXdlcigpXG4gICAge1xuICAgICAgICBpZiAoIXRoaXMubmF2QnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLm5hdkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZGwtbGF5b3V0X19kcmF3ZXItYnV0dG9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubmF2QnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLm5hdkJ1dHRvbi5jbGljaygpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFZpZXdDb250cm9sbGVyIGZyb20gXCIuL1ZpZXdDb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgRXhlcmNpc2UgZnJvbSBcIi4uL21vZGVscy9FeGVyY2lzZS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVydmlld0NvbnRyb2xsZXIgZXh0ZW5kcyBWaWV3Q29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICBzdXBlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcnZpZXcnKSk7XG5cbiAgICAgICAgdGhpcy5saXN0RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhlcmNpc2VMaXN0Jyk7XG4gICAgICAgIHRoaXMucG9wdWxhdGVFeGVyY2lzZUxpc3QoKTtcblxuICAgICAgICB0aGlzLmFkZEV4ZXJjaXNlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZEV4ZXJjaXNlQnV0dG9uJyk7XG4gICAgICAgIHRoaXMuYWRkRXhlcmNpc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmFkZEV4ZXJjaXNlKCkpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIG5ldyBleGVyY2lzZVxuICAgICAqL1xuICAgIGFkZEV4ZXJjaXNlKClcbiAgICB7XG4gICAgICAgIHZhciBuYW1lID0gXCJwdXNodXBzXCI7XG4gICAgICAgIHZhciByZXBzID0gMztcbiAgICAgICAgRXhlcmNpc2UuYWRkKG5hbWUsIHJlcHMpO1xuICAgICAgICB0aGlzLmFkZEV4ZXJjaXNlVG9Eb20obmFtZSwgcmVwcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBleGVyY2lzZSB0byB0aGUgZXhlcmNpc2UgbGlzdCBlbGVtZW50IGluIHRoZSBkb21cbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSByZXBzXG4gICAgICovXG4gICAgYWRkRXhlcmNpc2VUb0RvbShuYW1lLCByZXBzKVxuICAgIHtcbiAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcblxuICAgICAgICB2YXIgbmFtZUNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgbmFtZUNvbC50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgIG5hbWVDb2wuY2xhc3NOYW1lID0gXCJtZGwtZGF0YS10YWJsZV9fY2VsbC0tbm9uLW51bWVyaWNcIjtcblxuICAgICAgICB2YXIgcmVwc0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgcmVwc0NvbC50ZXh0Q29udGVudCA9IHJlcHM7XG5cbiAgICAgICAgcm93LmFwcGVuZENoaWxkKG5hbWVDb2wpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQocmVwc0NvbCk7XG4gICAgICAgIHRoaXMubGlzdEVsLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUG9wdWxhdGVzIHRoZSBleGVyY2lzZSBsaXN0IGZyb20gbG9jYWwgZGF0YVxuICAgICAqL1xuICAgIHBvcHVsYXRlRXhlcmNpc2VMaXN0KClcbiAgICB7XG4gICAgICAgIHZhciBleGVyY2lzZXMgPSBFeGVyY2lzZS5nZXQoKTtcbiAgICAgICAgZm9yKGxldCBleGVyY2lzZSBvZiBleGVyY2lzZXMpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXhlcmNpc2VUb0RvbShleGVyY2lzZS5uYW1lLCBleGVyY2lzZS5yZXBzKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgVmlld0NvbnRyb2xsZXIgZnJvbSBcIi4vVmlld0NvbnRyb2xsZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NoZWR1bGVDb250cm9sbGVyIGV4dGVuZHMgVmlld0NvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NjaGVkdWxlJykpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3Q29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpXG4gICAge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuXG4gICAgc2hvdygpXG4gICAge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cblxuICAgIGhpZGUoKVxuICAgIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFeGVyY2lzZSB7XG5cbiAgICAvKipcbiAgICAgKiBTdG9yZXMgYSBuZXcgZXhlcmNpc2VcbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSByZXBzXG4gICAgICovXG4gICAgc3RhdGljIGFkZChuYW1lLCByZXBzKVxuICAgIHtcbiAgICAgICAgdmFyIGV4ZXJjaXNlcyA9IHRoaXMuZ2V0KCk7XG4gICAgICAgIGV4ZXJjaXNlcy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICByZXBzOiByZXBzXG4gICAgICAgIH0pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZXhlcmNpc2VzJywgSlNPTi5zdHJpbmdpZnkoZXhlcmNpc2VzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgdGhlIHN0b3JlZCBleGVyY2lzZXNcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljIGdldCgpXG4gICAge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXhlcmNpc2VzJykpIHx8IFtdO1xuICAgIH1cbn0iLCI7KGZ1bmN0aW9uKCkge1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEEgY29tcG9uZW50IGhhbmRsZXIgaW50ZXJmYWNlIHVzaW5nIHRoZSByZXZlYWxpbmcgbW9kdWxlIGRlc2lnbiBwYXR0ZXJuLlxuICogTW9yZSBkZXRhaWxzIG9uIHRoaXMgZGVzaWduIHBhdHRlcm4gaGVyZTpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAqXG4gKiBAYXV0aG9yIEphc29uIE1heWVzLlxuICovXG4vKiBleHBvcnRlZCBjb21wb25lbnRIYW5kbGVyICovXG5cbi8vIFByZS1kZWZpbmluZyB0aGUgY29tcG9uZW50SGFuZGxlciBpbnRlcmZhY2UsIGZvciBjbG9zdXJlIGRvY3VtZW50YXRpb24gYW5kXG4vLyBzdGF0aWMgdmVyaWZpY2F0aW9uLlxudmFyIGNvbXBvbmVudEhhbmRsZXIgPSB7XG4gIC8qKlxuICAgKiBTZWFyY2hlcyBleGlzdGluZyBET00gZm9yIGVsZW1lbnRzIG9mIG91ciBjb21wb25lbnQgdHlwZSBhbmQgdXBncmFkZXMgdGhlbVxuICAgKiBpZiB0aGV5IGhhdmUgbm90IGFscmVhZHkgYmVlbiB1cGdyYWRlZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRKc0NsYXNzIHRoZSBwcm9ncmFtYXRpYyBuYW1lIG9mIHRoZSBlbGVtZW50IGNsYXNzIHdlXG4gICAqIG5lZWQgdG8gY3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mLlxuICAgKiBAcGFyYW0ge3N0cmluZz19IG9wdENzc0NsYXNzIHRoZSBuYW1lIG9mIHRoZSBDU1MgY2xhc3MgZWxlbWVudHMgb2YgdGhpc1xuICAgKiB0eXBlIHdpbGwgaGF2ZS5cbiAgICovXG4gIHVwZ3JhZGVEb206IGZ1bmN0aW9uKG9wdEpzQ2xhc3MsIG9wdENzc0NsYXNzKSB7fSxcbiAgLyoqXG4gICAqIFVwZ3JhZGVzIGEgc3BlY2lmaWMgZWxlbWVudCByYXRoZXIgdGhhbiBhbGwgaW4gdGhlIERPTS5cbiAgICpcbiAgICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB3ZSB3aXNoIHRvIHVwZ3JhZGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0SnNDbGFzcyBPcHRpb25hbCBuYW1lIG9mIHRoZSBjbGFzcyB3ZSB3YW50IHRvIHVwZ3JhZGVcbiAgICogdGhlIGVsZW1lbnQgdG8uXG4gICAqL1xuICB1cGdyYWRlRWxlbWVudDogZnVuY3Rpb24oZWxlbWVudCwgb3B0SnNDbGFzcykge30sXG4gIC8qKlxuICAgKiBVcGdyYWRlcyBhIHNwZWNpZmljIGxpc3Qgb2YgZWxlbWVudHMgcmF0aGVyIHRoYW4gYWxsIGluIHRoZSBET00uXG4gICAqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR8IUFycmF5PCFFbGVtZW50PnwhTm9kZUxpc3R8IUhUTUxDb2xsZWN0aW9ufSBlbGVtZW50c1xuICAgKiBUaGUgZWxlbWVudHMgd2Ugd2lzaCB0byB1cGdyYWRlLlxuICAgKi9cbiAgdXBncmFkZUVsZW1lbnRzOiBmdW5jdGlvbihlbGVtZW50cykge30sXG4gIC8qKlxuICAgKiBVcGdyYWRlcyBhbGwgcmVnaXN0ZXJlZCBjb21wb25lbnRzIGZvdW5kIGluIHRoZSBjdXJyZW50IERPTS4gVGhpcyBpc1xuICAgKiBhdXRvbWF0aWNhbGx5IGNhbGxlZCBvbiB3aW5kb3cgbG9hZC5cbiAgICovXG4gIHVwZ3JhZGVBbGxSZWdpc3RlcmVkOiBmdW5jdGlvbigpIHt9LFxuICAvKipcbiAgICogQWxsb3dzIHVzZXIgdG8gYmUgYWxlcnRlZCB0byBhbnkgdXBncmFkZXMgdGhhdCBhcmUgcGVyZm9ybWVkIGZvciBhIGdpdmVuXG4gICAqIGNvbXBvbmVudCB0eXBlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBqc0NsYXNzIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBNREwgY29tcG9uZW50IHdlIHdpc2hcbiAgICogdG8gaG9vayBpbnRvIGZvciBhbnkgdXBncmFkZXMgcGVyZm9ybWVkLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFIVE1MRWxlbWVudCl9IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0byBjYWxsIHVwb24gYW5cbiAgICogdXBncmFkZS4gVGhpcyBmdW5jdGlvbiBzaG91bGQgZXhwZWN0IDEgcGFyYW1ldGVyIC0gdGhlIEhUTUxFbGVtZW50IHdoaWNoXG4gICAqIGdvdCB1cGdyYWRlZC5cbiAgICovXG4gIHJlZ2lzdGVyVXBncmFkZWRDYWxsYmFjazogZnVuY3Rpb24oanNDbGFzcywgY2FsbGJhY2spIHt9LFxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgY2xhc3MgZm9yIGZ1dHVyZSB1c2UgYW5kIGF0dGVtcHRzIHRvIHVwZ3JhZGUgZXhpc3RpbmcgRE9NLlxuICAgKlxuICAgKiBAcGFyYW0ge2NvbXBvbmVudEhhbmRsZXIuQ29tcG9uZW50Q29uZmlnUHVibGljfSBjb25maWcgdGhlIHJlZ2lzdHJhdGlvbiBjb25maWd1cmF0aW9uXG4gICAqL1xuICByZWdpc3RlcjogZnVuY3Rpb24oY29uZmlnKSB7fSxcbiAgLyoqXG4gICAqIERvd25ncmFkZSBlaXRoZXIgYSBnaXZlbiBub2RlLCBhbiBhcnJheSBvZiBub2Rlcywgb3IgYSBOb2RlTGlzdC5cbiAgICpcbiAgICogQHBhcmFtIHshTm9kZXwhQXJyYXk8IU5vZGU+fCFOb2RlTGlzdH0gbm9kZXNcbiAgICovXG4gIGRvd25ncmFkZUVsZW1lbnRzOiBmdW5jdGlvbihub2Rlcykge31cbn07XG5cbmNvbXBvbmVudEhhbmRsZXIgPSAoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKiogQHR5cGUgeyFBcnJheTxjb21wb25lbnRIYW5kbGVyLkNvbXBvbmVudENvbmZpZz59ICovXG4gIHZhciByZWdpc3RlcmVkQ29tcG9uZW50c18gPSBbXTtcblxuICAvKiogQHR5cGUgeyFBcnJheTxjb21wb25lbnRIYW5kbGVyLkNvbXBvbmVudD59ICovXG4gIHZhciBjcmVhdGVkQ29tcG9uZW50c18gPSBbXTtcblxuICB2YXIgZG93bmdyYWRlTWV0aG9kXyA9ICdtZGxEb3duZ3JhZGVfJztcbiAgdmFyIGNvbXBvbmVudENvbmZpZ1Byb3BlcnR5XyA9ICdtZGxDb21wb25lbnRDb25maWdJbnRlcm5hbF8nO1xuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyByZWdpc3RlcmVkIGNvbXBvbmVudHMgZm9yIGEgY2xhc3Mgd2UgYXJlIGludGVyZXN0ZWQgaW4gdXNpbmcuXG4gICAqIE9wdGlvbmFsbHkgcmVwbGFjZXMgYSBtYXRjaCB3aXRoIHBhc3NlZCBvYmplY3QgaWYgc3BlY2lmaWVkLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiBhIGNsYXNzIHdlIHdhbnQgdG8gdXNlLlxuICAgKiBAcGFyYW0ge2NvbXBvbmVudEhhbmRsZXIuQ29tcG9uZW50Q29uZmlnPX0gb3B0UmVwbGFjZSBPcHRpb25hbCBvYmplY3QgdG8gcmVwbGFjZSBtYXRjaCB3aXRoLlxuICAgKiBAcmV0dXJuIHshT2JqZWN0fGJvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBmaW5kUmVnaXN0ZXJlZENsYXNzXyhuYW1lLCBvcHRSZXBsYWNlKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RlcmVkQ29tcG9uZW50c18ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWdpc3RlcmVkQ29tcG9uZW50c19baV0uY2xhc3NOYW1lID09PSBuYW1lKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0UmVwbGFjZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZWdpc3RlcmVkQ29tcG9uZW50c19baV0gPSBvcHRSZXBsYWNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWdpc3RlcmVkQ29tcG9uZW50c19baV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBjbGFzc05hbWVzIG9mIHRoZSB1cGdyYWRlZCBjbGFzc2VzIG9uIHRoZSBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIGZldGNoIGRhdGEgZnJvbS5cbiAgICogQHJldHVybiB7IUFycmF5PHN0cmluZz59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBnZXRVcGdyYWRlZExpc3RPZkVsZW1lbnRfKGVsZW1lbnQpIHtcbiAgICB2YXIgZGF0YVVwZ3JhZGVkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXBncmFkZWQnKTtcbiAgICAvLyBVc2UgYFsnJ11gIGFzIGRlZmF1bHQgdmFsdWUgdG8gY29uZm9ybSB0aGUgYCxuYW1lLG5hbWUuLi5gIHN0eWxlLlxuICAgIHJldHVybiBkYXRhVXBncmFkZWQgPT09IG51bGwgPyBbJyddIDogZGF0YVVwZ3JhZGVkLnNwbGl0KCcsJyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBlbGVtZW50IGhhcyBhbHJlYWR5IGJlZW4gdXBncmFkZWQgZm9yIHRoZSBnaXZlblxuICAgKiBjbGFzcy5cbiAgICpcbiAgICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB3ZSB3YW50IHRvIGNoZWNrLlxuICAgKiBAcGFyYW0ge3N0cmluZ30ganNDbGFzcyBUaGUgY2xhc3MgdG8gY2hlY2sgZm9yLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIGlzRWxlbWVudFVwZ3JhZGVkXyhlbGVtZW50LCBqc0NsYXNzKSB7XG4gICAgdmFyIHVwZ3JhZGVkTGlzdCA9IGdldFVwZ3JhZGVkTGlzdE9mRWxlbWVudF8oZWxlbWVudCk7XG4gICAgcmV0dXJuIHVwZ3JhZGVkTGlzdC5pbmRleE9mKGpzQ2xhc3MpICE9PSAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyBleGlzdGluZyBET00gZm9yIGVsZW1lbnRzIG9mIG91ciBjb21wb25lbnQgdHlwZSBhbmQgdXBncmFkZXMgdGhlbVxuICAgKiBpZiB0aGV5IGhhdmUgbm90IGFscmVhZHkgYmVlbiB1cGdyYWRlZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRKc0NsYXNzIHRoZSBwcm9ncmFtYXRpYyBuYW1lIG9mIHRoZSBlbGVtZW50IGNsYXNzIHdlXG4gICAqIG5lZWQgdG8gY3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mLlxuICAgKiBAcGFyYW0ge3N0cmluZz19IG9wdENzc0NsYXNzIHRoZSBuYW1lIG9mIHRoZSBDU1MgY2xhc3MgZWxlbWVudHMgb2YgdGhpc1xuICAgKiB0eXBlIHdpbGwgaGF2ZS5cbiAgICovXG4gIGZ1bmN0aW9uIHVwZ3JhZGVEb21JbnRlcm5hbChvcHRKc0NsYXNzLCBvcHRDc3NDbGFzcykge1xuICAgIGlmICh0eXBlb2Ygb3B0SnNDbGFzcyA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgdHlwZW9mIG9wdENzc0NsYXNzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RlcmVkQ29tcG9uZW50c18ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdXBncmFkZURvbUludGVybmFsKHJlZ2lzdGVyZWRDb21wb25lbnRzX1tpXS5jbGFzc05hbWUsXG4gICAgICAgICAgICByZWdpc3RlcmVkQ29tcG9uZW50c19baV0uY3NzQ2xhc3MpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIganNDbGFzcyA9IC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAob3B0SnNDbGFzcyk7XG4gICAgICBpZiAodHlwZW9mIG9wdENzc0NsYXNzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgcmVnaXN0ZXJlZENsYXNzID0gZmluZFJlZ2lzdGVyZWRDbGFzc18oanNDbGFzcyk7XG4gICAgICAgIGlmIChyZWdpc3RlcmVkQ2xhc3MpIHtcbiAgICAgICAgICBvcHRDc3NDbGFzcyA9IHJlZ2lzdGVyZWRDbGFzcy5jc3NDbGFzcztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIG9wdENzc0NsYXNzKTtcbiAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgZWxlbWVudHMubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgdXBncmFkZUVsZW1lbnRJbnRlcm5hbChlbGVtZW50c1tuXSwganNDbGFzcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZ3JhZGVzIGEgc3BlY2lmaWMgZWxlbWVudCByYXRoZXIgdGhhbiBhbGwgaW4gdGhlIERPTS5cbiAgICpcbiAgICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB3ZSB3aXNoIHRvIHVwZ3JhZGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0SnNDbGFzcyBPcHRpb25hbCBuYW1lIG9mIHRoZSBjbGFzcyB3ZSB3YW50IHRvIHVwZ3JhZGVcbiAgICogdGhlIGVsZW1lbnQgdG8uXG4gICAqL1xuICBmdW5jdGlvbiB1cGdyYWRlRWxlbWVudEludGVybmFsKGVsZW1lbnQsIG9wdEpzQ2xhc3MpIHtcbiAgICAvLyBWZXJpZnkgYXJndW1lbnQgdHlwZS5cbiAgICBpZiAoISh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiYgZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQgcHJvdmlkZWQgdG8gdXBncmFkZSBNREwgZWxlbWVudC4nKTtcbiAgICB9XG4gICAgdmFyIHVwZ3JhZGVkTGlzdCA9IGdldFVwZ3JhZGVkTGlzdE9mRWxlbWVudF8oZWxlbWVudCk7XG4gICAgdmFyIGNsYXNzZXNUb1VwZ3JhZGUgPSBbXTtcbiAgICAvLyBJZiBqc0NsYXNzIGlzIG5vdCBwcm92aWRlZCBzY2FuIHRoZSByZWdpc3RlcmVkIGNvbXBvbmVudHMgdG8gZmluZCB0aGVcbiAgICAvLyBvbmVzIG1hdGNoaW5nIHRoZSBlbGVtZW50J3MgQ1NTIGNsYXNzTGlzdC5cbiAgICBpZiAoIW9wdEpzQ2xhc3MpIHtcbiAgICAgIHZhciBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTGlzdDtcbiAgICAgIHJlZ2lzdGVyZWRDb21wb25lbnRzXy5mb3JFYWNoKGZ1bmN0aW9uKGNvbXBvbmVudCkge1xuICAgICAgICAvLyBNYXRjaCBDU1MgJiBOb3QgdG8gYmUgdXBncmFkZWQgJiBOb3QgdXBncmFkZWQuXG4gICAgICAgIGlmIChjbGFzc0xpc3QuY29udGFpbnMoY29tcG9uZW50LmNzc0NsYXNzKSAmJlxuICAgICAgICAgICAgY2xhc3Nlc1RvVXBncmFkZS5pbmRleE9mKGNvbXBvbmVudCkgPT09IC0xICYmXG4gICAgICAgICAgICAhaXNFbGVtZW50VXBncmFkZWRfKGVsZW1lbnQsIGNvbXBvbmVudC5jbGFzc05hbWUpKSB7XG4gICAgICAgICAgY2xhc3Nlc1RvVXBncmFkZS5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIWlzRWxlbWVudFVwZ3JhZGVkXyhlbGVtZW50LCBvcHRKc0NsYXNzKSkge1xuICAgICAgY2xhc3Nlc1RvVXBncmFkZS5wdXNoKGZpbmRSZWdpc3RlcmVkQ2xhc3NfKG9wdEpzQ2xhc3MpKTtcbiAgICB9XG5cbiAgICAvLyBVcGdyYWRlIHRoZSBlbGVtZW50IGZvciBlYWNoIGNsYXNzZXMuXG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSBjbGFzc2VzVG9VcGdyYWRlLmxlbmd0aCwgcmVnaXN0ZXJlZENsYXNzOyBpIDwgbjsgaSsrKSB7XG4gICAgICByZWdpc3RlcmVkQ2xhc3MgPSBjbGFzc2VzVG9VcGdyYWRlW2ldO1xuICAgICAgaWYgKHJlZ2lzdGVyZWRDbGFzcykge1xuICAgICAgICAvLyBNYXJrIGVsZW1lbnQgYXMgdXBncmFkZWQuXG4gICAgICAgIHVwZ3JhZGVkTGlzdC5wdXNoKHJlZ2lzdGVyZWRDbGFzcy5jbGFzc05hbWUpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS11cGdyYWRlZCcsIHVwZ3JhZGVkTGlzdC5qb2luKCcsJykpO1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgcmVnaXN0ZXJlZENsYXNzLmNsYXNzQ29uc3RydWN0b3IoZWxlbWVudCk7XG4gICAgICAgIGluc3RhbmNlW2NvbXBvbmVudENvbmZpZ1Byb3BlcnR5X10gPSByZWdpc3RlcmVkQ2xhc3M7XG4gICAgICAgIGNyZWF0ZWRDb21wb25lbnRzXy5wdXNoKGluc3RhbmNlKTtcbiAgICAgICAgLy8gQ2FsbCBhbnkgY2FsbGJhY2tzIHRoZSB1c2VyIGhhcyByZWdpc3RlcmVkIHdpdGggdGhpcyBjb21wb25lbnQgdHlwZS5cbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIG0gPSByZWdpc3RlcmVkQ2xhc3MuY2FsbGJhY2tzLmxlbmd0aDsgaiA8IG07IGorKykge1xuICAgICAgICAgIHJlZ2lzdGVyZWRDbGFzcy5jYWxsYmFja3Nbal0oZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVnaXN0ZXJlZENsYXNzLndpZGdldCkge1xuICAgICAgICAgIC8vIEFzc2lnbiBwZXIgZWxlbWVudCBpbnN0YW5jZSBmb3IgY29udHJvbCBvdmVyIEFQSVxuICAgICAgICAgIGVsZW1lbnRbcmVnaXN0ZXJlZENsYXNzLmNsYXNzTmFtZV0gPSBpbnN0YW5jZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdVbmFibGUgdG8gZmluZCBhIHJlZ2lzdGVyZWQgY29tcG9uZW50IGZvciB0aGUgZ2l2ZW4gY2xhc3MuJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBldiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudHMnKTtcbiAgICAgIGV2LmluaXRFdmVudCgnbWRsLWNvbXBvbmVudHVwZ3JhZGVkJywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXYpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGdyYWRlcyBhIHNwZWNpZmljIGxpc3Qgb2YgZWxlbWVudHMgcmF0aGVyIHRoYW4gYWxsIGluIHRoZSBET00uXG4gICAqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR8IUFycmF5PCFFbGVtZW50PnwhTm9kZUxpc3R8IUhUTUxDb2xsZWN0aW9ufSBlbGVtZW50c1xuICAgKiBUaGUgZWxlbWVudHMgd2Ugd2lzaCB0byB1cGdyYWRlLlxuICAgKi9cbiAgZnVuY3Rpb24gdXBncmFkZUVsZW1lbnRzSW50ZXJuYWwoZWxlbWVudHMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZWxlbWVudHMpKSB7XG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnRzLml0ZW0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCgvKiogQHR5cGUge0FycmF5fSAqLyAoZWxlbWVudHMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnRzID0gW2VsZW1lbnRzXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSBlbGVtZW50cy5sZW5ndGgsIGVsZW1lbnQ7IGkgPCBuOyBpKyspIHtcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdXBncmFkZUVsZW1lbnRJbnRlcm5hbChlbGVtZW50KTtcbiAgICAgICAgaWYgKGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHVwZ3JhZGVFbGVtZW50c0ludGVybmFsKGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGNsYXNzIGZvciBmdXR1cmUgdXNlIGFuZCBhdHRlbXB0cyB0byB1cGdyYWRlIGV4aXN0aW5nIERPTS5cbiAgICpcbiAgICogQHBhcmFtIHtjb21wb25lbnRIYW5kbGVyLkNvbXBvbmVudENvbmZpZ1B1YmxpY30gY29uZmlnXG4gICAqL1xuICBmdW5jdGlvbiByZWdpc3RlckludGVybmFsKGNvbmZpZykge1xuICAgIC8vIEluIG9yZGVyIHRvIHN1cHBvcnQgYm90aCBDbG9zdXJlLWNvbXBpbGVkIGFuZCB1bmNvbXBpbGVkIGNvZGUgYWNjZXNzaW5nXG4gICAgLy8gdGhpcyBtZXRob2QsIHdlIG5lZWQgdG8gYWxsb3cgZm9yIGJvdGggdGhlIGRvdCBhbmQgYXJyYXkgc3ludGF4IGZvclxuICAgIC8vIHByb3BlcnR5IGFjY2Vzcy4gWW91J2xsIHRoZXJlZm9yZSBzZWUgdGhlIGBmb28uYmFyIHx8IGZvb1snYmFyJ11gXG4gICAgLy8gcGF0dGVybiByZXBlYXRlZCBhY3Jvc3MgdGhpcyBtZXRob2QuXG4gICAgdmFyIHdpZGdldE1pc3NpbmcgPSAodHlwZW9mIGNvbmZpZy53aWRnZXQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHR5cGVvZiBjb25maWdbJ3dpZGdldCddID09PSAndW5kZWZpbmVkJyk7XG4gICAgdmFyIHdpZGdldCA9IHRydWU7XG5cbiAgICBpZiAoIXdpZGdldE1pc3NpbmcpIHtcbiAgICAgIHdpZGdldCA9IGNvbmZpZy53aWRnZXQgfHwgY29uZmlnWyd3aWRnZXQnXTtcbiAgICB9XG5cbiAgICB2YXIgbmV3Q29uZmlnID0gLyoqIEB0eXBlIHtjb21wb25lbnRIYW5kbGVyLkNvbXBvbmVudENvbmZpZ30gKi8gKHtcbiAgICAgIGNsYXNzQ29uc3RydWN0b3I6IGNvbmZpZy5jb25zdHJ1Y3RvciB8fCBjb25maWdbJ2NvbnN0cnVjdG9yJ10sXG4gICAgICBjbGFzc05hbWU6IGNvbmZpZy5jbGFzc0FzU3RyaW5nIHx8IGNvbmZpZ1snY2xhc3NBc1N0cmluZyddLFxuICAgICAgY3NzQ2xhc3M6IGNvbmZpZy5jc3NDbGFzcyB8fCBjb25maWdbJ2Nzc0NsYXNzJ10sXG4gICAgICB3aWRnZXQ6IHdpZGdldCxcbiAgICAgIGNhbGxiYWNrczogW11cbiAgICB9KTtcblxuICAgIHJlZ2lzdGVyZWRDb21wb25lbnRzXy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIGlmIChpdGVtLmNzc0NsYXNzID09PSBuZXdDb25maWcuY3NzQ2xhc3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcHJvdmlkZWQgY3NzQ2xhc3MgaGFzIGFscmVhZHkgYmVlbiByZWdpc3RlcmVkOiAnICsgaXRlbS5jc3NDbGFzcyk7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbS5jbGFzc05hbWUgPT09IG5ld0NvbmZpZy5jbGFzc05hbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcHJvdmlkZWQgY2xhc3NOYW1lIGhhcyBhbHJlYWR5IGJlZW4gcmVnaXN0ZXJlZCcpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGNvbmZpZy5jb25zdHJ1Y3Rvci5wcm90b3R5cGVcbiAgICAgICAgLmhhc093blByb3BlcnR5KGNvbXBvbmVudENvbmZpZ1Byb3BlcnR5XykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnTURMIGNvbXBvbmVudCBjbGFzc2VzIG11c3Qgbm90IGhhdmUgJyArIGNvbXBvbmVudENvbmZpZ1Byb3BlcnR5XyArXG4gICAgICAgICAgJyBkZWZpbmVkIGFzIGEgcHJvcGVydHkuJyk7XG4gICAgfVxuXG4gICAgdmFyIGZvdW5kID0gZmluZFJlZ2lzdGVyZWRDbGFzc18oY29uZmlnLmNsYXNzQXNTdHJpbmcsIG5ld0NvbmZpZyk7XG5cbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICByZWdpc3RlcmVkQ29tcG9uZW50c18ucHVzaChuZXdDb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgdXNlciB0byBiZSBhbGVydGVkIHRvIGFueSB1cGdyYWRlcyB0aGF0IGFyZSBwZXJmb3JtZWQgZm9yIGEgZ2l2ZW5cbiAgICogY29tcG9uZW50IHR5cGVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGpzQ2xhc3MgVGhlIGNsYXNzIG5hbWUgb2YgdGhlIE1ETCBjb21wb25lbnQgd2Ugd2lzaFxuICAgKiB0byBob29rIGludG8gZm9yIGFueSB1cGdyYWRlcyBwZXJmb3JtZWQuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUhUTUxFbGVtZW50KX0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgdXBvbiBhblxuICAgKiB1cGdyYWRlLiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBleHBlY3QgMSBwYXJhbWV0ZXIgLSB0aGUgSFRNTEVsZW1lbnQgd2hpY2hcbiAgICogZ290IHVwZ3JhZGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVnaXN0ZXJVcGdyYWRlZENhbGxiYWNrSW50ZXJuYWwoanNDbGFzcywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVnQ2xhc3MgPSBmaW5kUmVnaXN0ZXJlZENsYXNzXyhqc0NsYXNzKTtcbiAgICBpZiAocmVnQ2xhc3MpIHtcbiAgICAgIHJlZ0NsYXNzLmNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBncmFkZXMgYWxsIHJlZ2lzdGVyZWQgY29tcG9uZW50cyBmb3VuZCBpbiB0aGUgY3VycmVudCBET00uIFRoaXMgaXNcbiAgICogYXV0b21hdGljYWxseSBjYWxsZWQgb24gd2luZG93IGxvYWQuXG4gICAqL1xuICBmdW5jdGlvbiB1cGdyYWRlQWxsUmVnaXN0ZXJlZEludGVybmFsKCkge1xuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgcmVnaXN0ZXJlZENvbXBvbmVudHNfLmxlbmd0aDsgbisrKSB7XG4gICAgICB1cGdyYWRlRG9tSW50ZXJuYWwocmVnaXN0ZXJlZENvbXBvbmVudHNfW25dLmNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIGEgY3JlYXRlZCBjb21wb25lbnQgYnkgYSBnaXZlbiBET00gbm9kZS5cbiAgICpcbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZnVuY3Rpb24gZmluZENyZWF0ZWRDb21wb25lbnRCeU5vZGVJbnRlcm5hbChub2RlKSB7XG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCBjcmVhdGVkQ29tcG9uZW50c18ubGVuZ3RoOyBuKyspIHtcbiAgICAgIHZhciBjb21wb25lbnQgPSBjcmVhdGVkQ29tcG9uZW50c19bbl07XG4gICAgICBpZiAoY29tcG9uZW50LmVsZW1lbnRfID09PSBub2RlKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBjb21wb25lbnQgZm9yIHRoZSBkb3duZ3JhZGUgbWV0aG9kLlxuICAgKiBFeGVjdXRlIGlmIGZvdW5kLlxuICAgKiBSZW1vdmUgY29tcG9uZW50IGZyb20gY3JlYXRlZENvbXBvbmVudHMgbGlzdC5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBjb21wb25lbnRcbiAgICovXG4gIGZ1bmN0aW9uIGRlY29uc3RydWN0Q29tcG9uZW50SW50ZXJuYWwoY29tcG9uZW50KSB7XG4gICAgaWYgKGNvbXBvbmVudCAmJlxuICAgICAgICBjb21wb25lbnRbY29tcG9uZW50Q29uZmlnUHJvcGVydHlfXVxuICAgICAgICAgIC5jbGFzc0NvbnN0cnVjdG9yLnByb3RvdHlwZVxuICAgICAgICAgIC5oYXNPd25Qcm9wZXJ0eShkb3duZ3JhZGVNZXRob2RfKSkge1xuICAgICAgY29tcG9uZW50W2Rvd25ncmFkZU1ldGhvZF9dKCk7XG4gICAgICB2YXIgY29tcG9uZW50SW5kZXggPSBjcmVhdGVkQ29tcG9uZW50c18uaW5kZXhPZihjb21wb25lbnQpO1xuICAgICAgY3JlYXRlZENvbXBvbmVudHNfLnNwbGljZShjb21wb25lbnRJbmRleCwgMSk7XG5cbiAgICAgIHZhciB1cGdyYWRlcyA9IGNvbXBvbmVudC5lbGVtZW50Xy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXBncmFkZWQnKS5zcGxpdCgnLCcpO1xuICAgICAgdmFyIGNvbXBvbmVudFBsYWNlID0gdXBncmFkZXMuaW5kZXhPZihcbiAgICAgICAgICBjb21wb25lbnRbY29tcG9uZW50Q29uZmlnUHJvcGVydHlfXS5jbGFzc0FzU3RyaW5nKTtcbiAgICAgIHVwZ3JhZGVzLnNwbGljZShjb21wb25lbnRQbGFjZSwgMSk7XG4gICAgICBjb21wb25lbnQuZWxlbWVudF8uc2V0QXR0cmlidXRlKCdkYXRhLXVwZ3JhZGVkJywgdXBncmFkZXMuam9pbignLCcpKTtcblxuICAgICAgdmFyIGV2ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50cycpO1xuICAgICAgZXYuaW5pdEV2ZW50KCdtZGwtY29tcG9uZW50ZG93bmdyYWRlZCcsIHRydWUsIHRydWUpO1xuICAgICAgY29tcG9uZW50LmVsZW1lbnRfLmRpc3BhdGNoRXZlbnQoZXYpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEb3duZ3JhZGUgZWl0aGVyIGEgZ2l2ZW4gbm9kZSwgYW4gYXJyYXkgb2Ygbm9kZXMsIG9yIGEgTm9kZUxpc3QuXG4gICAqXG4gICAqIEBwYXJhbSB7IU5vZGV8IUFycmF5PCFOb2RlPnwhTm9kZUxpc3R9IG5vZGVzXG4gICAqL1xuICBmdW5jdGlvbiBkb3duZ3JhZGVOb2Rlc0ludGVybmFsKG5vZGVzKSB7XG4gICAgLyoqXG4gICAgICogQXV4aWxpYXJ5IGZ1bmN0aW9uIHRvIGRvd25ncmFkZSBhIHNpbmdsZSBub2RlLlxuICAgICAqIEBwYXJhbSAgeyFOb2RlfSBub2RlIHRoZSBub2RlIHRvIGJlIGRvd25ncmFkZWRcbiAgICAgKi9cbiAgICB2YXIgZG93bmdyYWRlTm9kZSA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIGRlY29uc3RydWN0Q29tcG9uZW50SW50ZXJuYWwoZmluZENyZWF0ZWRDb21wb25lbnRCeU5vZGVJbnRlcm5hbChub2RlKSk7XG4gICAgfTtcbiAgICBpZiAobm9kZXMgaW5zdGFuY2VvZiBBcnJheSB8fCBub2RlcyBpbnN0YW5jZW9mIE5vZGVMaXN0KSB7XG4gICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG5vZGVzLmxlbmd0aDsgbisrKSB7XG4gICAgICAgIGRvd25ncmFkZU5vZGUobm9kZXNbbl0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZXMgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICBkb3duZ3JhZGVOb2RlKG5vZGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50IHByb3ZpZGVkIHRvIGRvd25ncmFkZSBNREwgbm9kZXMuJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gTm93IHJldHVybiB0aGUgZnVuY3Rpb25zIHRoYXQgc2hvdWxkIGJlIG1hZGUgcHVibGljIHdpdGggdGhlaXIgcHVibGljbHlcbiAgLy8gZmFjaW5nIG5hbWVzLi4uXG4gIHJldHVybiB7XG4gICAgdXBncmFkZURvbTogdXBncmFkZURvbUludGVybmFsLFxuICAgIHVwZ3JhZGVFbGVtZW50OiB1cGdyYWRlRWxlbWVudEludGVybmFsLFxuICAgIHVwZ3JhZGVFbGVtZW50czogdXBncmFkZUVsZW1lbnRzSW50ZXJuYWwsXG4gICAgdXBncmFkZUFsbFJlZ2lzdGVyZWQ6IHVwZ3JhZGVBbGxSZWdpc3RlcmVkSW50ZXJuYWwsXG4gICAgcmVnaXN0ZXJVcGdyYWRlZENhbGxiYWNrOiByZWdpc3RlclVwZ3JhZGVkQ2FsbGJhY2tJbnRlcm5hbCxcbiAgICByZWdpc3RlcjogcmVnaXN0ZXJJbnRlcm5hbCxcbiAgICBkb3duZ3JhZGVFbGVtZW50czogZG93bmdyYWRlTm9kZXNJbnRlcm5hbFxuICB9O1xufSkoKTtcblxuLyoqXG4gKiBEZXNjcmliZXMgdGhlIHR5cGUgb2YgYSByZWdpc3RlcmVkIGNvbXBvbmVudCB0eXBlIG1hbmFnZWQgYnlcbiAqIGNvbXBvbmVudEhhbmRsZXIuIFByb3ZpZGVkIGZvciBiZW5lZml0IG9mIHRoZSBDbG9zdXJlIGNvbXBpbGVyLlxuICpcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGNvbnN0cnVjdG9yOiBGdW5jdGlvbixcbiAqICAgY2xhc3NBc1N0cmluZzogc3RyaW5nLFxuICogICBjc3NDbGFzczogc3RyaW5nLFxuICogICB3aWRnZXQ6IChzdHJpbmd8Ym9vbGVhbnx1bmRlZmluZWQpXG4gKiB9fVxuICovXG5jb21wb25lbnRIYW5kbGVyLkNvbXBvbmVudENvbmZpZ1B1YmxpYzsgIC8vIGpzaGludCBpZ25vcmU6bGluZVxuXG4vKipcbiAqIERlc2NyaWJlcyB0aGUgdHlwZSBvZiBhIHJlZ2lzdGVyZWQgY29tcG9uZW50IHR5cGUgbWFuYWdlZCBieVxuICogY29tcG9uZW50SGFuZGxlci4gUHJvdmlkZWQgZm9yIGJlbmVmaXQgb2YgdGhlIENsb3N1cmUgY29tcGlsZXIuXG4gKlxuICogQHR5cGVkZWYge3tcbiAqICAgY29uc3RydWN0b3I6ICFGdW5jdGlvbixcbiAqICAgY2xhc3NOYW1lOiBzdHJpbmcsXG4gKiAgIGNzc0NsYXNzOiBzdHJpbmcsXG4gKiAgIHdpZGdldDogKHN0cmluZ3xib29sZWFuKSxcbiAqICAgY2FsbGJhY2tzOiAhQXJyYXk8ZnVuY3Rpb24oIUhUTUxFbGVtZW50KT5cbiAqIH19XG4gKi9cbmNvbXBvbmVudEhhbmRsZXIuQ29tcG9uZW50Q29uZmlnOyAgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5cbi8qKlxuICogQ3JlYXRlZCBjb21wb25lbnQgKGkuZS4sIHVwZ3JhZGVkIGVsZW1lbnQpIHR5cGUgYXMgbWFuYWdlZCBieVxuICogY29tcG9uZW50SGFuZGxlci4gUHJvdmlkZWQgZm9yIGJlbmVmaXQgb2YgdGhlIENsb3N1cmUgY29tcGlsZXIuXG4gKlxuICogQHR5cGVkZWYge3tcbiAqICAgZWxlbWVudF86ICFIVE1MRWxlbWVudCxcbiAqICAgY2xhc3NOYW1lOiBzdHJpbmcsXG4gKiAgIGNsYXNzQXNTdHJpbmc6IHN0cmluZyxcbiAqICAgY3NzQ2xhc3M6IHN0cmluZyxcbiAqICAgd2lkZ2V0OiBzdHJpbmdcbiAqIH19XG4gKi9cbmNvbXBvbmVudEhhbmRsZXIuQ29tcG9uZW50OyAgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5cbi8vIEV4cG9ydCBhbGwgc3ltYm9scywgZm9yIHRoZSBiZW5lZml0IG9mIENsb3N1cmUgY29tcGlsZXIuXG4vLyBObyBlZmZlY3Qgb24gdW5jb21waWxlZCBjb2RlLlxuY29tcG9uZW50SGFuZGxlclsndXBncmFkZURvbSddID0gY29tcG9uZW50SGFuZGxlci51cGdyYWRlRG9tO1xuY29tcG9uZW50SGFuZGxlclsndXBncmFkZUVsZW1lbnQnXSA9IGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnQ7XG5jb21wb25lbnRIYW5kbGVyWyd1cGdyYWRlRWxlbWVudHMnXSA9IGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnRzO1xuY29tcG9uZW50SGFuZGxlclsndXBncmFkZUFsbFJlZ2lzdGVyZWQnXSA9XG4gICAgY29tcG9uZW50SGFuZGxlci51cGdyYWRlQWxsUmVnaXN0ZXJlZDtcbmNvbXBvbmVudEhhbmRsZXJbJ3JlZ2lzdGVyVXBncmFkZWRDYWxsYmFjayddID1cbiAgICBjb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyVXBncmFkZWRDYWxsYmFjaztcbmNvbXBvbmVudEhhbmRsZXJbJ3JlZ2lzdGVyJ10gPSBjb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyO1xuY29tcG9uZW50SGFuZGxlclsnZG93bmdyYWRlRWxlbWVudHMnXSA9IGNvbXBvbmVudEhhbmRsZXIuZG93bmdyYWRlRWxlbWVudHM7XG53aW5kb3cuY29tcG9uZW50SGFuZGxlciA9IGNvbXBvbmVudEhhbmRsZXI7XG53aW5kb3dbJ2NvbXBvbmVudEhhbmRsZXInXSA9IGNvbXBvbmVudEhhbmRsZXI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBcIkN1dHRpbmcgdGhlIG11c3RhcmRcIiB0ZXN0LiBJZiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0aGUgZmVhdHVyZXNcbiAgICogdGVzdGVkLCBhZGRzIGEgbWRsLWpzIGNsYXNzIHRvIHRoZSA8aHRtbD4gZWxlbWVudC4gSXQgdGhlbiB1cGdyYWRlcyBhbGwgTURMXG4gICAqIGNvbXBvbmVudHMgcmVxdWlyaW5nIEphdmFTY3JpcHQuXG4gICAqL1xuICBpZiAoJ2NsYXNzTGlzdCcgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgJiZcbiAgICAgICdxdWVyeVNlbGVjdG9yJyBpbiBkb2N1bWVudCAmJlxuICAgICAgJ2FkZEV2ZW50TGlzdGVuZXInIGluIHdpbmRvdyAmJiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtZGwtanMnKTtcbiAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVBbGxSZWdpc3RlcmVkKCk7XG4gIH0gZWxzZSB7XG4gICAgLyoqXG4gICAgICogRHVtbXkgZnVuY3Rpb24gdG8gYXZvaWQgSlMgZXJyb3JzLlxuICAgICAqL1xuICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnQgPSBmdW5jdGlvbigpIHt9O1xuICAgIC8qKlxuICAgICAqIER1bW15IGZ1bmN0aW9uIHRvIGF2b2lkIEpTIGVycm9ycy5cbiAgICAgKi9cbiAgICBjb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyID0gZnVuY3Rpb24oKSB7fTtcbiAgfVxufSk7XG5cbi8vIFNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2Rhcml1cy9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUvYmxvYi9tYXN0ZXIvcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzXG4vLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcGF1bGlyaXNoLzE1Nzk2NzEgd2hpY2ggZGVyaXZlZCBmcm9tXG4vLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuLy8gaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci5cbi8vIEZpeGVzIGZyb20gUGF1bCBJcmlzaCwgVGlubyBaaWpkZWwsIEFuZHJldyBNYW8sIEtsZW1lbiBTbGF2acSNLCBEYXJpdXMgQmFjb25cbi8vIE1JVCBsaWNlbnNlXG5pZiAoIURhdGUubm93KSB7XG4gICAgLyoqXG4gICAqIERhdGUubm93IHBvbHlmaWxsLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBjdXJyZW50IERhdGVcbiAgICovXG4gICAgRGF0ZS5ub3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9O1xuICAgIERhdGVbJ25vdyddID0gRGF0ZS5ub3c7XG59XG52YXIgdmVuZG9ycyA9IFtcbiAgICAnd2Via2l0JyxcbiAgICAnbW96J1xuXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsraSkge1xuICAgIHZhciB2cCA9IHZlbmRvcnNbaV07XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2cCArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdnAgKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fCB3aW5kb3dbdnAgKyAnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgd2luZG93WydyZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gICAgd2luZG93WydjYW5jZWxBbmltYXRpb25GcmFtZSddID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lO1xufVxuaWYgKC9pUChhZHxob25lfG9kKS4qT1MgNi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSkge1xuICAgIHZhciBsYXN0VGltZSA9IDA7XG4gICAgLyoqXG4gICAqIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbC5cbiAgICogQHBhcmFtICB7IUZ1bmN0aW9ufSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqL1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIHZhciBuZXh0VGltZSA9IE1hdGgubWF4KGxhc3RUaW1lICsgMTYsIG5vdyk7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGxhc3RUaW1lID0gbmV4dFRpbWUpO1xuICAgICAgICB9LCBuZXh0VGltZSAtIG5vdyk7XG4gICAgfTtcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjbGVhclRpbWVvdXQ7XG4gICAgd2luZG93WydyZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gICAgd2luZG93WydjYW5jZWxBbmltYXRpb25GcmFtZSddID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lO1xufVxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIEJ1dHRvbiBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG52YXIgTWF0ZXJpYWxCdXR0b24gPSBmdW5jdGlvbiBNYXRlcmlhbEJ1dHRvbihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsQnV0dG9uJ10gPSBNYXRlcmlhbEJ1dHRvbjtcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQnV0dG9uLnByb3RvdHlwZS5Db25zdGFudF8gPSB7fTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQnV0dG9uLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBSSVBQTEVfRUZGRUNUOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QnLFxuICAgIFJJUFBMRV9DT05UQUlORVI6ICdtZGwtYnV0dG9uX19yaXBwbGUtY29udGFpbmVyJyxcbiAgICBSSVBQTEU6ICdtZGwtcmlwcGxlJ1xufTtcbi8qKlxuICAgKiBIYW5kbGUgYmx1ciBvZiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbEJ1dHRvbi5wcm90b3R5cGUuYmx1ckhhbmRsZXJfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYmx1cigpO1xuICAgIH1cbn07XG4vLyBQdWJsaWMgbWV0aG9kcy5cbi8qKlxuICAgKiBEaXNhYmxlIGJ1dHRvbi5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsQnV0dG9uLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudF8uZGlzYWJsZWQgPSB0cnVlO1xufTtcbk1hdGVyaWFsQnV0dG9uLnByb3RvdHlwZVsnZGlzYWJsZSddID0gTWF0ZXJpYWxCdXR0b24ucHJvdG90eXBlLmRpc2FibGU7XG4vKipcbiAgICogRW5hYmxlIGJ1dHRvbi5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsQnV0dG9uLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50Xy5kaXNhYmxlZCA9IGZhbHNlO1xufTtcbk1hdGVyaWFsQnV0dG9uLnByb3RvdHlwZVsnZW5hYmxlJ10gPSBNYXRlcmlhbEJ1dHRvbi5wcm90b3R5cGUuZW5hYmxlO1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbEJ1dHRvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfRUZGRUNUKSkge1xuICAgICAgICAgICAgdmFyIHJpcHBsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0NPTlRBSU5FUik7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJpcHBsZUVsZW1lbnRfKTtcbiAgICAgICAgICAgIHRoaXMuYm91bmRSaXBwbGVCbHVySGFuZGxlciA9IHRoaXMuYmx1ckhhbmRsZXJfLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kUmlwcGxlQmx1ckhhbmRsZXIpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZChyaXBwbGVDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm91bmRCdXR0b25CbHVySGFuZGxlciA9IHRoaXMuYmx1ckhhbmRsZXJfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRCdXR0b25CbHVySGFuZGxlcik7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuYm91bmRCdXR0b25CbHVySGFuZGxlcik7XG4gICAgfVxufTtcbi8qKlxuICAgKiBEb3duZ3JhZGUgdGhlIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxCdXR0b24ucHJvdG90eXBlLm1kbERvd25ncmFkZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMucmlwcGxlRWxlbWVudF8pIHtcbiAgICAgICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZFJpcHBsZUJsdXJIYW5kbGVyKTtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZEJ1dHRvbkJsdXJIYW5kbGVyKTtcbiAgICB0aGlzLmVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmJvdW5kQnV0dG9uQmx1ckhhbmRsZXIpO1xufTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbEJ1dHRvbixcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxCdXR0b24nLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLWJ1dHRvbicsXG4gICAgd2lkZ2V0OiB0cnVlXG59KTtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBDaGVja2JveCBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsQ2hlY2tib3ggPSBmdW5jdGlvbiBNYXRlcmlhbENoZWNrYm94KGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxDaGVja2JveCddID0gTWF0ZXJpYWxDaGVja2JveDtcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLkNvbnN0YW50XyA9IHsgVElOWV9USU1FT1VUOiAwLjAwMSB9O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgSU5QVVQ6ICdtZGwtY2hlY2tib3hfX2lucHV0JyxcbiAgICBCT1hfT1VUTElORTogJ21kbC1jaGVja2JveF9fYm94LW91dGxpbmUnLFxuICAgIEZPQ1VTX0hFTFBFUjogJ21kbC1jaGVja2JveF9fZm9jdXMtaGVscGVyJyxcbiAgICBUSUNLX09VVExJTkU6ICdtZGwtY2hlY2tib3hfX3RpY2stb3V0bGluZScsXG4gICAgUklQUExFX0VGRkVDVDogJ21kbC1qcy1yaXBwbGUtZWZmZWN0JyxcbiAgICBSSVBQTEVfSUdOT1JFX0VWRU5UUzogJ21kbC1qcy1yaXBwbGUtZWZmZWN0LS1pZ25vcmUtZXZlbnRzJyxcbiAgICBSSVBQTEVfQ09OVEFJTkVSOiAnbWRsLWNoZWNrYm94X19yaXBwbGUtY29udGFpbmVyJyxcbiAgICBSSVBQTEVfQ0VOVEVSOiAnbWRsLXJpcHBsZS0tY2VudGVyJyxcbiAgICBSSVBQTEU6ICdtZGwtcmlwcGxlJyxcbiAgICBJU19GT0NVU0VEOiAnaXMtZm9jdXNlZCcsXG4gICAgSVNfRElTQUJMRUQ6ICdpcy1kaXNhYmxlZCcsXG4gICAgSVNfQ0hFQ0tFRDogJ2lzLWNoZWNrZWQnLFxuICAgIElTX1VQR1JBREVEOiAnaXMtdXBncmFkZWQnXG59O1xuLyoqXG4gICAqIEhhbmRsZSBjaGFuZ2Ugb2Ygc3RhdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLm9uQ2hhbmdlXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG4vKipcbiAgICogSGFuZGxlIGZvY3VzIG9mIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLm9uRm9jdXNfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRk9DVVNFRCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBsb3N0IGZvY3VzIG9mIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLm9uQmx1cl8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbn07XG4vKipcbiAgICogSGFuZGxlIG1vdXNldXAuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLm9uTW91c2VVcF8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmJsdXJfKCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBjbGFzcyB1cGRhdGVzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLnVwZGF0ZUNsYXNzZXNfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2hlY2tEaXNhYmxlZCgpO1xuICAgIHRoaXMuY2hlY2tUb2dnbGVTdGF0ZSgpO1xufTtcbi8qKlxuICAgKiBBZGQgYmx1ci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5ibHVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPOiBmaWd1cmUgb3V0IHdoeSB0aGVyZSdzIGEgZm9jdXMgZXZlbnQgYmVpbmcgZmlyZWQgYWZ0ZXIgb3VyIGJsdXIsXG4gICAgLy8gc28gdGhhdCB3ZSBjYW4gYXZvaWQgdGhpcyBoYWNrLlxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfLmJsdXIoKTtcbiAgICB9LmJpbmQodGhpcyksIHRoaXMuQ29uc3RhbnRfLlRJTllfVElNRU9VVCk7XG59O1xuLy8gUHVibGljIG1ldGhvZHMuXG4vKipcbiAgICogQ2hlY2sgdGhlIGlucHV0cyB0b2dnbGUgc3RhdGUgYW5kIHVwZGF0ZSBkaXNwbGF5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuY2hlY2tUb2dnbGVTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnRfLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ0hFQ0tFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ0hFQ0tFRCk7XG4gICAgfVxufTtcbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlWydjaGVja1RvZ2dsZVN0YXRlJ10gPSBNYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5jaGVja1RvZ2dsZVN0YXRlO1xuLyoqXG4gICAqIENoZWNrIHRoZSBpbnB1dHMgZGlzYWJsZWQgc3RhdGUgYW5kIHVwZGF0ZSBkaXNwbGF5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuY2hlY2tEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnRfLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0RJU0FCTEVEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVNBQkxFRCk7XG4gICAgfVxufTtcbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlWydjaGVja0Rpc2FibGVkJ10gPSBNYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5jaGVja0Rpc2FibGVkO1xuLyoqXG4gICAqIERpc2FibGUgY2hlY2tib3guXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlWydkaXNhYmxlJ10gPSBNYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5kaXNhYmxlO1xuLyoqXG4gICAqIEVuYWJsZSBjaGVja2JveC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGVbJ2VuYWJsZSddID0gTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuZW5hYmxlO1xuLyoqXG4gICAqIENoZWNrIGNoZWNrYm94LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmNoZWNrZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZVsnY2hlY2snXSA9IE1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLmNoZWNrO1xuLyoqXG4gICAqIFVuY2hlY2sgY2hlY2tib3guXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS51bmNoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5jaGVja2VkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlWyd1bmNoZWNrJ10gPSBNYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS51bmNoZWNrO1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50XyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLklOUFVUKTtcbiAgICAgICAgdmFyIGJveE91dGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGJveE91dGxpbmUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkJPWF9PVVRMSU5FKTtcbiAgICAgICAgdmFyIHRpY2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRpY2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkZPQ1VTX0hFTFBFUik7XG4gICAgICAgIHZhciB0aWNrT3V0bGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGlja091dGxpbmUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlRJQ0tfT1VUTElORSk7XG4gICAgICAgIGJveE91dGxpbmUuYXBwZW5kQ2hpbGQodGlja091dGxpbmUpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKHRpY2tDb250YWluZXIpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKGJveE91dGxpbmUpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfRUZGRUNUKSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0lHTk9SRV9FVkVOVFMpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50XyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9DT05UQUlORVIpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0VGRkVDVCk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfQ0VOVEVSKTtcbiAgICAgICAgICAgIHRoaXMuYm91bmRSaXBwbGVNb3VzZVVwID0gdGhpcy5vbk1vdXNlVXBfLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kUmlwcGxlTW91c2VVcCk7XG4gICAgICAgICAgICB2YXIgcmlwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmlwcGxlLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEUpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5hcHBlbmRDaGlsZChyaXBwbGUpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZCh0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvdW5kSW5wdXRPbkNoYW5nZSA9IHRoaXMub25DaGFuZ2VfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRJbnB1dE9uRm9jdXMgPSB0aGlzLm9uRm9jdXNfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRJbnB1dE9uQmx1ciA9IHRoaXMub25CbHVyXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdW5kRWxlbWVudE1vdXNlVXAgPSB0aGlzLm9uTW91c2VVcF8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuYm91bmRJbnB1dE9uQ2hhbmdlKTtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5ib3VuZElucHV0T25Gb2N1cyk7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5ib3VuZElucHV0T25CbHVyKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZEVsZW1lbnRNb3VzZVVwKTtcbiAgICAgICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19VUEdSQURFRCk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBEb3duZ3JhZGUgdGhlIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5tZGxEb3duZ3JhZGVfID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfKSB7XG4gICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRSaXBwbGVNb3VzZVVwKTtcbiAgICB9XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuYm91bmRJbnB1dE9uQ2hhbmdlKTtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmJvdW5kSW5wdXRPbkZvY3VzKTtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuYm91bmRJbnB1dE9uQmx1cik7XG4gICAgdGhpcy5lbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZEVsZW1lbnRNb3VzZVVwKTtcbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxDaGVja2JveCxcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxDaGVja2JveCcsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtY2hlY2tib3gnLFxuICAgIHdpZGdldDogdHJ1ZVxufSk7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgaWNvbiB0b2dnbGUgTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbEljb25Ub2dnbGUgPSBmdW5jdGlvbiBNYXRlcmlhbEljb25Ub2dnbGUoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbEljb25Ub2dnbGUnXSA9IE1hdGVyaWFsSWNvblRvZ2dsZTtcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuQ29uc3RhbnRfID0geyBUSU5ZX1RJTUVPVVQ6IDAuMDAxIH07XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIElOUFVUOiAnbWRsLWljb24tdG9nZ2xlX19pbnB1dCcsXG4gICAgSlNfUklQUExFX0VGRkVDVDogJ21kbC1qcy1yaXBwbGUtZWZmZWN0JyxcbiAgICBSSVBQTEVfSUdOT1JFX0VWRU5UUzogJ21kbC1qcy1yaXBwbGUtZWZmZWN0LS1pZ25vcmUtZXZlbnRzJyxcbiAgICBSSVBQTEVfQ09OVEFJTkVSOiAnbWRsLWljb24tdG9nZ2xlX19yaXBwbGUtY29udGFpbmVyJyxcbiAgICBSSVBQTEVfQ0VOVEVSOiAnbWRsLXJpcHBsZS0tY2VudGVyJyxcbiAgICBSSVBQTEU6ICdtZGwtcmlwcGxlJyxcbiAgICBJU19GT0NVU0VEOiAnaXMtZm9jdXNlZCcsXG4gICAgSVNfRElTQUJMRUQ6ICdpcy1kaXNhYmxlZCcsXG4gICAgSVNfQ0hFQ0tFRDogJ2lzLWNoZWNrZWQnXG59O1xuLyoqXG4gICAqIEhhbmRsZSBjaGFuZ2Ugb2Ygc3RhdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUub25DaGFuZ2VfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgZm9jdXMgb2YgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5vbkZvY3VzXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0ZPQ1VTRUQpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgbG9zdCBmb2N1cyBvZiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLm9uQmx1cl8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbn07XG4vKipcbiAgICogSGFuZGxlIG1vdXNldXAuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUub25Nb3VzZVVwXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuYmx1cl8oKTtcbn07XG4vKipcbiAgICogSGFuZGxlIGNsYXNzIHVwZGF0ZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS51cGRhdGVDbGFzc2VzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNoZWNrRGlzYWJsZWQoKTtcbiAgICB0aGlzLmNoZWNrVG9nZ2xlU3RhdGUoKTtcbn07XG4vKipcbiAgICogQWRkIGJsdXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5ibHVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPOiBmaWd1cmUgb3V0IHdoeSB0aGVyZSdzIGEgZm9jdXMgZXZlbnQgYmVpbmcgZmlyZWQgYWZ0ZXIgb3VyIGJsdXIsXG4gICAgLy8gc28gdGhhdCB3ZSBjYW4gYXZvaWQgdGhpcyBoYWNrLlxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfLmJsdXIoKTtcbiAgICB9LmJpbmQodGhpcyksIHRoaXMuQ29uc3RhbnRfLlRJTllfVElNRU9VVCk7XG59O1xuLy8gUHVibGljIG1ldGhvZHMuXG4vKipcbiAgICogQ2hlY2sgdGhlIGlucHV0cyB0b2dnbGUgc3RhdGUgYW5kIHVwZGF0ZSBkaXNwbGF5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5jaGVja1RvZ2dsZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudF8uY2hlY2tlZCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19DSEVDS0VEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19DSEVDS0VEKTtcbiAgICB9XG59O1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZVsnY2hlY2tUb2dnbGVTdGF0ZSddID0gTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5jaGVja1RvZ2dsZVN0YXRlO1xuLyoqXG4gICAqIENoZWNrIHRoZSBpbnB1dHMgZGlzYWJsZWQgc3RhdGUgYW5kIHVwZGF0ZSBkaXNwbGF5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5jaGVja0Rpc2FibGVkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudF8uZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRElTQUJMRUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0RJU0FCTEVEKTtcbiAgICB9XG59O1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZVsnY2hlY2tEaXNhYmxlZCddID0gTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5jaGVja0Rpc2FibGVkO1xuLyoqXG4gICAqIERpc2FibGUgaWNvbiB0b2dnbGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZVsnZGlzYWJsZSddID0gTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5kaXNhYmxlO1xuLyoqXG4gICAqIEVuYWJsZSBpY29uIHRvZ2dsZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlWydlbmFibGUnXSA9IE1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuZW5hYmxlO1xuLyoqXG4gICAqIENoZWNrIGljb24gdG9nZ2xlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uY2hlY2tlZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGVbJ2NoZWNrJ10gPSBNYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmNoZWNrO1xuLyoqXG4gICAqIFVuY2hlY2sgaWNvbiB0b2dnbGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLnVuY2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZVsndW5jaGVjayddID0gTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS51bmNoZWNrO1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uSU5QVVQpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5KU19SSVBQTEVfRUZGRUNUKSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0lHTk9SRV9FVkVOVFMpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50XyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9DT05UQUlORVIpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSlNfUklQUExFX0VGRkVDVCk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfQ0VOVEVSKTtcbiAgICAgICAgICAgIHRoaXMuYm91bmRSaXBwbGVNb3VzZVVwID0gdGhpcy5vbk1vdXNlVXBfLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kUmlwcGxlTW91c2VVcCk7XG4gICAgICAgICAgICB2YXIgcmlwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmlwcGxlLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEUpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5hcHBlbmRDaGlsZChyaXBwbGUpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZCh0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvdW5kSW5wdXRPbkNoYW5nZSA9IHRoaXMub25DaGFuZ2VfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRJbnB1dE9uRm9jdXMgPSB0aGlzLm9uRm9jdXNfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRJbnB1dE9uQmx1ciA9IHRoaXMub25CbHVyXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdW5kRWxlbWVudE9uTW91c2VVcCA9IHRoaXMub25Nb3VzZVVwXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5ib3VuZElucHV0T25DaGFuZ2UpO1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmJvdW5kSW5wdXRPbkZvY3VzKTtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLmJvdW5kSW5wdXRPbkJsdXIpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kRWxlbWVudE9uTW91c2VVcCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKCdpcy11cGdyYWRlZCcpO1xuICAgIH1cbn07XG4vKipcbiAgICogRG93bmdyYWRlIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLm1kbERvd25ncmFkZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8pIHtcbiAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZFJpcHBsZU1vdXNlVXApO1xuICAgIH1cbiAgICB0aGlzLmlucHV0RWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5ib3VuZElucHV0T25DaGFuZ2UpO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuYm91bmRJbnB1dE9uRm9jdXMpO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5ib3VuZElucHV0T25CbHVyKTtcbiAgICB0aGlzLmVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kRWxlbWVudE9uTW91c2VVcCk7XG59O1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsSWNvblRvZ2dsZSxcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxJY29uVG9nZ2xlJyxcbiAgICBjc3NDbGFzczogJ21kbC1qcy1pY29uLXRvZ2dsZScsXG4gICAgd2lkZ2V0OiB0cnVlXG59KTtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBkcm9wZG93biBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsTWVudSA9IGZ1bmN0aW9uIE1hdGVyaWFsTWVudShlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsTWVudSddID0gTWF0ZXJpYWxNZW51O1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5Db25zdGFudF8gPSB7XG4gICAgLy8gVG90YWwgZHVyYXRpb24gb2YgdGhlIG1lbnUgYW5pbWF0aW9uLlxuICAgIFRSQU5TSVRJT05fRFVSQVRJT05fU0VDT05EUzogMC4zLFxuICAgIC8vIFRoZSBmcmFjdGlvbiBvZiB0aGUgdG90YWwgZHVyYXRpb24gd2Ugd2FudCB0byB1c2UgZm9yIG1lbnUgaXRlbSBhbmltYXRpb25zLlxuICAgIFRSQU5TSVRJT05fRFVSQVRJT05fRlJBQ1RJT046IDAuOCxcbiAgICAvLyBIb3cgbG9uZyB0aGUgbWVudSBzdGF5cyBvcGVuIGFmdGVyIGNob29zaW5nIGFuIG9wdGlvbiAoc28gdGhlIHVzZXIgY2FuIHNlZVxuICAgIC8vIHRoZSByaXBwbGUpLlxuICAgIENMT1NFX1RJTUVPVVQ6IDE1MFxufTtcbi8qKlxuICAgKiBLZXljb2RlcywgZm9yIGNvZGUgcmVhZGFiaWxpdHkuXG4gICAqXG4gICAqIEBlbnVtIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5LZXljb2Rlc18gPSB7XG4gICAgRU5URVI6IDEzLFxuICAgIEVTQ0FQRTogMjcsXG4gICAgU1BBQ0U6IDMyLFxuICAgIFVQX0FSUk9XOiAzOCxcbiAgICBET1dOX0FSUk9XOiA0MFxufTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgQ09OVEFJTkVSOiAnbWRsLW1lbnVfX2NvbnRhaW5lcicsXG4gICAgT1VUTElORTogJ21kbC1tZW51X19vdXRsaW5lJyxcbiAgICBJVEVNOiAnbWRsLW1lbnVfX2l0ZW0nLFxuICAgIElURU1fUklQUExFX0NPTlRBSU5FUjogJ21kbC1tZW51X19pdGVtLXJpcHBsZS1jb250YWluZXInLFxuICAgIFJJUFBMRV9FRkZFQ1Q6ICdtZGwtanMtcmlwcGxlLWVmZmVjdCcsXG4gICAgUklQUExFX0lHTk9SRV9FVkVOVFM6ICdtZGwtanMtcmlwcGxlLWVmZmVjdC0taWdub3JlLWV2ZW50cycsXG4gICAgUklQUExFOiAnbWRsLXJpcHBsZScsXG4gICAgLy8gU3RhdHVzZXNcbiAgICBJU19VUEdSQURFRDogJ2lzLXVwZ3JhZGVkJyxcbiAgICBJU19WSVNJQkxFOiAnaXMtdmlzaWJsZScsXG4gICAgSVNfQU5JTUFUSU5HOiAnaXMtYW5pbWF0aW5nJyxcbiAgICAvLyBBbGlnbm1lbnQgb3B0aW9uc1xuICAgIEJPVFRPTV9MRUZUOiAnbWRsLW1lbnUtLWJvdHRvbS1sZWZ0JyxcbiAgICAvLyBUaGlzIGlzIHRoZSBkZWZhdWx0LlxuICAgIEJPVFRPTV9SSUdIVDogJ21kbC1tZW51LS1ib3R0b20tcmlnaHQnLFxuICAgIFRPUF9MRUZUOiAnbWRsLW1lbnUtLXRvcC1sZWZ0JyxcbiAgICBUT1BfUklHSFQ6ICdtZGwtbWVudS0tdG9wLXJpZ2h0JyxcbiAgICBVTkFMSUdORUQ6ICdtZGwtbWVudS0tdW5hbGlnbmVkJ1xufTtcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIC8vIENyZWF0ZSBjb250YWluZXIgZm9yIHRoZSBtZW51LlxuICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uQ09OVEFJTkVSKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShjb250YWluZXIsIHRoaXMuZWxlbWVudF8pO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50Xyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJfID0gY29udGFpbmVyO1xuICAgICAgICAvLyBDcmVhdGUgb3V0bGluZSBmb3IgdGhlIG1lbnUgKHNoYWRvdyBhbmQgYmFja2dyb3VuZCkuXG4gICAgICAgIHZhciBvdXRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG91dGxpbmUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk9VVExJTkUpO1xuICAgICAgICB0aGlzLm91dGxpbmVfID0gb3V0bGluZTtcbiAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShvdXRsaW5lLCB0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgLy8gRmluZCB0aGUgXCJmb3JcIiBlbGVtZW50IGFuZCBiaW5kIGV2ZW50cyB0byBpdC5cbiAgICAgICAgdmFyIGZvckVsSWQgPSB0aGlzLmVsZW1lbnRfLmdldEF0dHJpYnV0ZSgnZm9yJyk7XG4gICAgICAgIHZhciBmb3JFbCA9IG51bGw7XG4gICAgICAgIGlmIChmb3JFbElkKSB7XG4gICAgICAgICAgICBmb3JFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvckVsSWQpO1xuICAgICAgICAgICAgaWYgKGZvckVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JFbGVtZW50XyA9IGZvckVsO1xuICAgICAgICAgICAgICAgIGZvckVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVGb3JDbGlja18uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgZm9yRWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlRm9yS2V5Ym9hcmRFdmVudF8uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uSVRFTSk7XG4gICAgICAgIHRoaXMuYm91bmRJdGVtS2V5ZG93biA9IHRoaXMuaGFuZGxlSXRlbUtleWJvYXJkRXZlbnRfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRJdGVtQ2xpY2sgPSB0aGlzLmhhbmRsZUl0ZW1DbGlja18uYmluZCh0aGlzKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gQWRkIGEgbGlzdGVuZXIgdG8gZWFjaCBtZW51IGl0ZW0uXG4gICAgICAgICAgICBpdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYm91bmRJdGVtQ2xpY2spO1xuICAgICAgICAgICAgLy8gQWRkIGEgdGFiIGluZGV4IHRvIGVhY2ggbWVudSBpdGVtLlxuICAgICAgICAgICAgaXRlbXNbaV0udGFiSW5kZXggPSAnLTEnO1xuICAgICAgICAgICAgLy8gQWRkIGEga2V5Ym9hcmQgbGlzdGVuZXIgdG8gZWFjaCBtZW51IGl0ZW0uXG4gICAgICAgICAgICBpdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5ib3VuZEl0ZW1LZXlkb3duKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgcmlwcGxlIGNsYXNzZXMgdG8gZWFjaCBpdGVtLCBpZiB0aGUgdXNlciBoYXMgZW5hYmxlZCByaXBwbGVzLlxuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfRUZGRUNUKSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0lHTk9SRV9FVkVOVFMpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgcmlwcGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVRFTV9SSVBQTEVfQ09OVEFJTkVSKTtcbiAgICAgICAgICAgICAgICB2YXIgcmlwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIHJpcHBsZS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFKTtcbiAgICAgICAgICAgICAgICByaXBwbGVDb250YWluZXIuYXBwZW5kQ2hpbGQocmlwcGxlKTtcbiAgICAgICAgICAgICAgICBpdGVtLmFwcGVuZENoaWxkKHJpcHBsZUNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0VGRkVDVCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ29weSBhbGlnbm1lbnQgY2xhc3NlcyB0byB0aGUgY29udGFpbmVyLCBzbyB0aGUgb3V0bGluZSBjYW4gdXNlIHRoZW0uXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkJPVFRPTV9MRUZUKSkge1xuICAgICAgICAgICAgdGhpcy5vdXRsaW5lXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uQk9UVE9NX0xFRlQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkJPVFRPTV9SSUdIVCkpIHtcbiAgICAgICAgICAgIHRoaXMub3V0bGluZV8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkJPVFRPTV9SSUdIVCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uVE9QX0xFRlQpKSB7XG4gICAgICAgICAgICB0aGlzLm91dGxpbmVfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5UT1BfTEVGVCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uVE9QX1JJR0hUKSkge1xuICAgICAgICAgICAgdGhpcy5vdXRsaW5lXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVE9QX1JJR0hUKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5VTkFMSUdORUQpKSB7XG4gICAgICAgICAgICB0aGlzLm91dGxpbmVfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5VTkFMSUdORUQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVVBHUkFERUQpO1xuICAgIH1cbn07XG4vKipcbiAgICogSGFuZGxlcyBhIGNsaWNrIG9uIHRoZSBcImZvclwiIGVsZW1lbnQsIGJ5IHBvc2l0aW9uaW5nIHRoZSBtZW51IGFuZCB0aGVuXG4gICAqIHRvZ2dsaW5nIGl0LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5oYW5kbGVGb3JDbGlja18gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8gJiYgdGhpcy5mb3JFbGVtZW50Xykge1xuICAgICAgICB2YXIgcmVjdCA9IHRoaXMuZm9yRWxlbWVudF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBmb3JSZWN0ID0gdGhpcy5mb3JFbGVtZW50Xy5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5VTkFMSUdORUQpKSB7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5CT1RUT01fUklHSFQpKSB7XG4gICAgICAgICAgICAvLyBQb3NpdGlvbiBiZWxvdyB0aGUgXCJmb3JcIiBlbGVtZW50LCBhbGlnbmVkIHRvIGl0cyByaWdodC5cbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyXy5zdHlsZS5yaWdodCA9IGZvclJlY3QucmlnaHQgLSByZWN0LnJpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyXy5zdHlsZS50b3AgPSB0aGlzLmZvckVsZW1lbnRfLm9mZnNldFRvcCArIHRoaXMuZm9yRWxlbWVudF8ub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlRPUF9MRUZUKSkge1xuICAgICAgICAgICAgLy8gUG9zaXRpb24gYWJvdmUgdGhlIFwiZm9yXCIgZWxlbWVudCwgYWxpZ25lZCB0byBpdHMgbGVmdC5cbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyXy5zdHlsZS5sZWZ0ID0gdGhpcy5mb3JFbGVtZW50Xy5vZmZzZXRMZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyXy5zdHlsZS5ib3R0b20gPSBmb3JSZWN0LmJvdHRvbSAtIHJlY3QudG9wICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlRPUF9SSUdIVCkpIHtcbiAgICAgICAgICAgIC8vIFBvc2l0aW9uIGFib3ZlIHRoZSBcImZvclwiIGVsZW1lbnQsIGFsaWduZWQgdG8gaXRzIHJpZ2h0LlxuICAgICAgICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLnJpZ2h0ID0gZm9yUmVjdC5yaWdodCAtIHJlY3QucmlnaHQgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLmJvdHRvbSA9IGZvclJlY3QuYm90dG9tIC0gcmVjdC50b3AgKyAncHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRGVmYXVsdDogcG9zaXRpb24gYmVsb3cgdGhlIFwiZm9yXCIgZWxlbWVudCwgYWxpZ25lZCB0byBpdHMgbGVmdC5cbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyXy5zdHlsZS5sZWZ0ID0gdGhpcy5mb3JFbGVtZW50Xy5vZmZzZXRMZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyXy5zdHlsZS50b3AgPSB0aGlzLmZvckVsZW1lbnRfLm9mZnNldFRvcCArIHRoaXMuZm9yRWxlbWVudF8ub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnRvZ2dsZShldnQpO1xufTtcbi8qKlxuICAgKiBIYW5kbGVzIGEga2V5Ym9hcmQgZXZlbnQgb24gdGhlIFwiZm9yXCIgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUuaGFuZGxlRm9yS2V5Ym9hcmRFdmVudF8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8gJiYgdGhpcy5jb250YWluZXJfICYmIHRoaXMuZm9yRWxlbWVudF8pIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uSVRFTSArICc6bm90KFtkaXNhYmxlZF0pJyk7XG4gICAgICAgIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwICYmIHRoaXMuY29udGFpbmVyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5JU19WSVNJQkxFKSkge1xuICAgICAgICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSB0aGlzLktleWNvZGVzXy5VUF9BUlJPVykge1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2dC5rZXlDb2RlID09PSB0aGlzLktleWNvZGVzXy5ET1dOX0FSUk9XKSB7XG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaXRlbXNbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAgICogSGFuZGxlcyBhIGtleWJvYXJkIGV2ZW50IG9uIGFuIGl0ZW0uXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLmhhbmRsZUl0ZW1LZXlib2FyZEV2ZW50XyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50XyAmJiB0aGlzLmNvbnRhaW5lcl8pIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uSVRFTSArICc6bm90KFtkaXNhYmxlZF0pJyk7XG4gICAgICAgIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwICYmIHRoaXMuY29udGFpbmVyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5JU19WSVNJQkxFKSkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGl0ZW1zKS5pbmRleE9mKGV2dC50YXJnZXQpO1xuICAgICAgICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSB0aGlzLktleWNvZGVzXy5VUF9BUlJPVykge1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2N1cnJlbnRJbmRleCAtIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaXRlbXMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2dC5rZXlDb2RlID09PSB0aGlzLktleWNvZGVzXy5ET1dOX0FSUk9XKSB7XG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA+IGN1cnJlbnRJbmRleCArIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbY3VycmVudEluZGV4ICsgMV0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtc1swXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZ0LmtleUNvZGUgPT09IHRoaXMuS2V5Y29kZXNfLlNQQUNFIHx8IGV2dC5rZXlDb2RlID09PSB0aGlzLktleWNvZGVzXy5FTlRFUikge1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIC8vIFNlbmQgbW91c2Vkb3duIGFuZCBtb3VzZXVwIHRvIHRyaWdnZXIgcmlwcGxlLlxuICAgICAgICAgICAgICAgIHZhciBlID0gbmV3IE1vdXNlRXZlbnQoJ21vdXNlZG93bicpO1xuICAgICAgICAgICAgICAgIGV2dC50YXJnZXQuZGlzcGF0Y2hFdmVudChlKTtcbiAgICAgICAgICAgICAgICBlID0gbmV3IE1vdXNlRXZlbnQoJ21vdXNldXAnKTtcbiAgICAgICAgICAgICAgICBldnQudGFyZ2V0LmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgICAgICAgICAgICAgLy8gU2VuZCBjbGljay5cbiAgICAgICAgICAgICAgICBldnQudGFyZ2V0LmNsaWNrKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2dC5rZXlDb2RlID09PSB0aGlzLktleWNvZGVzXy5FU0NBUEUpIHtcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAgICogSGFuZGxlcyBhIGNsaWNrIGV2ZW50IG9uIGFuIGl0ZW0uXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLmhhbmRsZUl0ZW1DbGlja18gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKGV2dC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpICE9PSBudWxsKSB7XG4gICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBXYWl0IHNvbWUgdGltZSBiZWZvcmUgY2xvc2luZyBtZW51LCBzbyB0aGUgdXNlciBjYW4gc2VlIHRoZSByaXBwbGUuXG4gICAgICAgIHRoaXMuY2xvc2luZ18gPSB0cnVlO1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2luZ18gPSBmYWxzZTtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCB0aGlzLkNvbnN0YW50Xy5DTE9TRV9USU1FT1VUKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIGluaXRpYWwgY2xpcCAoZm9yIG9wZW5pbmcgdGhlIG1lbnUpIG9yIGZpbmFsIGNsaXAgKGZvciBjbG9zaW5nXG4gICAqIGl0KSwgYW5kIGFwcGxpZXMgaXQuIFRoaXMgYWxsb3dzIHVzIHRvIGFuaW1hdGUgZnJvbSBvciB0byB0aGUgY29ycmVjdCBwb2ludCxcbiAgICogdGhhdCBpcywgdGhlIHBvaW50IGl0J3MgYWxpZ25lZCB0byBpbiB0aGUgXCJmb3JcIiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IEhlaWdodCBvZiB0aGUgY2xpcCByZWN0YW5nbGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFdpZHRoIG9mIHRoZSBjbGlwIHJlY3RhbmdsZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUuYXBwbHlDbGlwXyA9IGZ1bmN0aW9uIChoZWlnaHQsIHdpZHRoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uVU5BTElHTkVEKSkge1xuICAgICAgICAvLyBEbyBub3QgY2xpcC5cbiAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5jbGlwID0gJyc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkJPVFRPTV9SSUdIVCkpIHtcbiAgICAgICAgLy8gQ2xpcCB0byB0aGUgdG9wIHJpZ2h0IGNvcm5lciBvZiB0aGUgbWVudS5cbiAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5jbGlwID0gJ3JlY3QoMCAnICsgd2lkdGggKyAncHggJyArICcwICcgKyB3aWR0aCArICdweCknO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5UT1BfTEVGVCkpIHtcbiAgICAgICAgLy8gQ2xpcCB0byB0aGUgYm90dG9tIGxlZnQgY29ybmVyIG9mIHRoZSBtZW51LlxuICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLmNsaXAgPSAncmVjdCgnICsgaGVpZ2h0ICsgJ3B4IDAgJyArIGhlaWdodCArICdweCAwKSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlRPUF9SSUdIVCkpIHtcbiAgICAgICAgLy8gQ2xpcCB0byB0aGUgYm90dG9tIHJpZ2h0IGNvcm5lciBvZiB0aGUgbWVudS5cbiAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5jbGlwID0gJ3JlY3QoJyArIGhlaWdodCArICdweCAnICsgd2lkdGggKyAncHggJyArIGhlaWdodCArICdweCAnICsgd2lkdGggKyAncHgpJztcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBEZWZhdWx0OiBkbyBub3QgY2xpcCAoc2FtZSBhcyBjbGlwcGluZyB0byB0aGUgdG9wIGxlZnQgY29ybmVyKS5cbiAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5jbGlwID0gJyc7XG4gICAgfVxufTtcbi8qKlxuICAgKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGNsZWFuIHVwIGFmdGVyIHRoZSBhbmltYXRpb24gZW5kcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLmFkZEFuaW1hdGlvbkVuZExpc3RlbmVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgY2xlYW51cCk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIGNsZWFudXApO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19BTklNQVRJTkcpO1xuICAgIH0uYmluZCh0aGlzKTtcbiAgICAvLyBSZW1vdmUgYW5pbWF0aW9uIGNsYXNzIG9uY2UgdGhlIHRyYW5zaXRpb24gaXMgZG9uZS5cbiAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBjbGVhbnVwKTtcbiAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBjbGVhbnVwKTtcbn07XG4vKipcbiAgICogRGlzcGxheXMgdGhlIG1lbnUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8gJiYgdGhpcy5jb250YWluZXJfICYmIHRoaXMub3V0bGluZV8pIHtcbiAgICAgICAgLy8gTWVhc3VyZSB0aGUgaW5uZXIgZWxlbWVudC5cbiAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMuZWxlbWVudF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICB2YXIgd2lkdGggPSB0aGlzLmVsZW1lbnRfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICAvLyBBcHBseSB0aGUgaW5uZXIgZWxlbWVudCdzIHNpemUgdG8gdGhlIGNvbnRhaW5lciBhbmQgb3V0bGluZS5cbiAgICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lcl8uc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgdGhpcy5vdXRsaW5lXy5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgdGhpcy5vdXRsaW5lXy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gdGhpcy5Db25zdGFudF8uVFJBTlNJVElPTl9EVVJBVElPTl9TRUNPTkRTICogdGhpcy5Db25zdGFudF8uVFJBTlNJVElPTl9EVVJBVElPTl9GUkFDVElPTjtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRyYW5zaXRpb24gZGVsYXlzIGZvciBpbmRpdmlkdWFsIG1lbnUgaXRlbXMsIHNvIHRoYXQgdGhleSBmYWRlXG4gICAgICAgIC8vIGluIG9uZSBhdCBhIHRpbWUuXG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLkNzc0NsYXNzZXNfLklURU0pO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbURlbGF5ID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlRPUF9MRUZUKSB8fCB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlRPUF9SSUdIVCkpIHtcbiAgICAgICAgICAgICAgICBpdGVtRGVsYXkgPSAoaGVpZ2h0IC0gaXRlbXNbaV0ub2Zmc2V0VG9wIC0gaXRlbXNbaV0ub2Zmc2V0SGVpZ2h0KSAvIGhlaWdodCAqIHRyYW5zaXRpb25EdXJhdGlvbiArICdzJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbURlbGF5ID0gaXRlbXNbaV0ub2Zmc2V0VG9wIC8gaGVpZ2h0ICogdHJhbnNpdGlvbkR1cmF0aW9uICsgJ3MnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbXNbaV0uc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gaXRlbURlbGF5O1xuICAgICAgICB9XG4gICAgICAgIC8vIEFwcGx5IHRoZSBpbml0aWFsIGNsaXAgdG8gdGhlIHRleHQgYmVmb3JlIHdlIHN0YXJ0IGFuaW1hdGluZy5cbiAgICAgICAgdGhpcy5hcHBseUNsaXBfKGhlaWdodCwgd2lkdGgpO1xuICAgICAgICAvLyBXYWl0IGZvciB0aGUgbmV4dCBmcmFtZSwgdHVybiBvbiBhbmltYXRpb24sIGFuZCBhcHBseSB0aGUgZmluYWwgY2xpcC5cbiAgICAgICAgLy8gQWxzbyBtYWtlIGl0IHZpc2libGUuIFRoaXMgdHJpZ2dlcnMgdGhlIHRyYW5zaXRpb25zLlxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0FOSU1BVElORyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLmNsaXAgPSAncmVjdCgwICcgKyB3aWR0aCArICdweCAnICsgaGVpZ2h0ICsgJ3B4IDApJztcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVklTSUJMRSk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIC8vIENsZWFuIHVwIGFmdGVyIHRoZSBhbmltYXRpb24gaXMgY29tcGxldGUuXG4gICAgICAgIHRoaXMuYWRkQW5pbWF0aW9uRW5kTGlzdGVuZXJfKCk7XG4gICAgICAgIC8vIEFkZCBhIGNsaWNrIGxpc3RlbmVyIHRvIHRoZSBkb2N1bWVudCwgdG8gY2xvc2UgdGhlIG1lbnUuXG4gICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhlIGRvY3VtZW50IGlzIHByb2Nlc3NpbmcgdGhlIHNhbWUgZXZlbnQgdGhhdFxuICAgICAgICAgICAgLy8gZGlzcGxheWVkIHRoZSBtZW51IGluIHRoZSBmaXJzdCBwbGFjZS4gSWYgc28sIGRvIG5vdGhpbmcuXG4gICAgICAgICAgICAvLyBBbHNvIGNoZWNrIHRvIHNlZSBpZiB0aGUgbWVudSBpcyBpbiB0aGUgcHJvY2VzcyBvZiBjbG9zaW5nIGl0c2VsZiwgYW5kXG4gICAgICAgICAgICAvLyBkbyBub3RoaW5nIGluIHRoYXQgY2FzZS5cbiAgICAgICAgICAgIGlmIChlICE9PSBldnQgJiYgIXRoaXMuY2xvc2luZ18pIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxiYWNrKTtcbiAgICB9XG59O1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZVsnc2hvdyddID0gTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5zaG93O1xuLyoqXG4gICAqIEhpZGVzIHRoZSBtZW51LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfICYmIHRoaXMuY29udGFpbmVyXyAmJiB0aGlzLm91dGxpbmVfKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLkNzc0NsYXNzZXNfLklURU0pO1xuICAgICAgICAvLyBSZW1vdmUgYWxsIHRyYW5zaXRpb24gZGVsYXlzOyBtZW51IGl0ZW1zIGZhZGUgb3V0IGNvbmN1cnJlbnRseS5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaXRlbXNbaV0uc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBNZWFzdXJlIHRoZSBpbm5lciBlbGVtZW50LlxuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5lbGVtZW50Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMuZWxlbWVudF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIC8vIFR1cm4gb24gYW5pbWF0aW9uLCBhbmQgYXBwbHkgdGhlIGZpbmFsIGNsaXAuIEFsc28gbWFrZSBpbnZpc2libGUuXG4gICAgICAgIC8vIFRoaXMgdHJpZ2dlcnMgdGhlIHRyYW5zaXRpb25zLlxuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19BTklNQVRJTkcpO1xuICAgICAgICB0aGlzLmFwcGx5Q2xpcF8oaGVpZ2h0LCB3aWR0aCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyXy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVklTSUJMRSk7XG4gICAgICAgIC8vIENsZWFuIHVwIGFmdGVyIHRoZSBhbmltYXRpb24gaXMgY29tcGxldGUuXG4gICAgICAgIHRoaXMuYWRkQW5pbWF0aW9uRW5kTGlzdGVuZXJfKCk7XG4gICAgfVxufTtcbk1hdGVyaWFsTWVudS5wcm90b3R5cGVbJ2hpZGUnXSA9IE1hdGVyaWFsTWVudS5wcm90b3R5cGUuaGlkZTtcbi8qKlxuICAgKiBEaXNwbGF5cyBvciBoaWRlcyB0aGUgbWVudSwgZGVwZW5kaW5nIG9uIGN1cnJlbnQgc3RhdGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklTX1ZJU0lCTEUpKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2hvdyhldnQpO1xuICAgIH1cbn07XG5NYXRlcmlhbE1lbnUucHJvdG90eXBlWyd0b2dnbGUnXSA9IE1hdGVyaWFsTWVudS5wcm90b3R5cGUudG9nZ2xlO1xuLyoqXG4gICAqIERvd25ncmFkZSB0aGUgY29tcG9uZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUubWRsRG93bmdyYWRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaXRlbXMgPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5JVEVNKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGl0ZW1zW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ib3VuZEl0ZW1DbGljayk7XG4gICAgICAgIGl0ZW1zW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmJvdW5kSXRlbUtleWRvd24pO1xuICAgIH1cbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxNZW51LFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbE1lbnUnLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLW1lbnUnLFxuICAgIHdpZGdldDogdHJ1ZVxufSk7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgUHJvZ3Jlc3MgTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbFByb2dyZXNzID0gZnVuY3Rpb24gTWF0ZXJpYWxQcm9ncmVzcyhlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsUHJvZ3Jlc3MnXSA9IE1hdGVyaWFsUHJvZ3Jlc3M7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFByb2dyZXNzLnByb3RvdHlwZS5Db25zdGFudF8gPSB7fTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUHJvZ3Jlc3MucHJvdG90eXBlLkNzc0NsYXNzZXNfID0geyBJTkRFVEVSTUlOQVRFX0NMQVNTOiAnbWRsLXByb2dyZXNzX19pbmRldGVybWluYXRlJyB9O1xuLyoqXG4gICAqIFNldCB0aGUgY3VycmVudCBwcm9ncmVzcyBvZiB0aGUgcHJvZ3Jlc3NiYXIuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwIFBlcmNlbnRhZ2Ugb2YgdGhlIHByb2dyZXNzICgwLTEwMClcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsUHJvZ3Jlc3MucHJvdG90eXBlLnNldFByb2dyZXNzID0gZnVuY3Rpb24gKHApIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5JTkRFVEVSTUlOQVRFX0NMQVNTKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucHJvZ3Jlc3NiYXJfLnN0eWxlLndpZHRoID0gcCArICclJztcbn07XG5NYXRlcmlhbFByb2dyZXNzLnByb3RvdHlwZVsnc2V0UHJvZ3Jlc3MnXSA9IE1hdGVyaWFsUHJvZ3Jlc3MucHJvdG90eXBlLnNldFByb2dyZXNzO1xuLyoqXG4gICAqIFNldCB0aGUgY3VycmVudCBwcm9ncmVzcyBvZiB0aGUgYnVmZmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcCBQZXJjZW50YWdlIG9mIHRoZSBidWZmZXIgKDAtMTAwKVxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxQcm9ncmVzcy5wcm90b3R5cGUuc2V0QnVmZmVyID0gZnVuY3Rpb24gKHApIHtcbiAgICB0aGlzLmJ1ZmZlcmJhcl8uc3R5bGUud2lkdGggPSBwICsgJyUnO1xuICAgIHRoaXMuYXV4YmFyXy5zdHlsZS53aWR0aCA9IDEwMCAtIHAgKyAnJSc7XG59O1xuTWF0ZXJpYWxQcm9ncmVzcy5wcm90b3R5cGVbJ3NldEJ1ZmZlciddID0gTWF0ZXJpYWxQcm9ncmVzcy5wcm90b3R5cGUuc2V0QnVmZmVyO1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbFByb2dyZXNzLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbC5jbGFzc05hbWUgPSAncHJvZ3Jlc3NiYXIgYmFyIGJhcjEnO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc2Jhcl8gPSBlbDtcbiAgICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gJ2J1ZmZlcmJhciBiYXIgYmFyMic7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICB0aGlzLmJ1ZmZlcmJhcl8gPSBlbDtcbiAgICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gJ2F1eGJhciBiYXIgYmFyMyc7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICB0aGlzLmF1eGJhcl8gPSBlbDtcbiAgICAgICAgdGhpcy5wcm9ncmVzc2Jhcl8uc3R5bGUud2lkdGggPSAnMCUnO1xuICAgICAgICB0aGlzLmJ1ZmZlcmJhcl8uc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIHRoaXMuYXV4YmFyXy5zdHlsZS53aWR0aCA9ICcwJSc7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCgnaXMtdXBncmFkZWQnKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIERvd25ncmFkZSB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxQcm9ncmVzcy5wcm90b3R5cGUubWRsRG93bmdyYWRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICB3aGlsZSAodGhpcy5lbGVtZW50Xy5maXJzdENoaWxkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8ucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50Xy5maXJzdENoaWxkKTtcbiAgICB9XG59O1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsUHJvZ3Jlc3MsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsUHJvZ3Jlc3MnLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLXByb2dyZXNzJyxcbiAgICB3aWRnZXQ6IHRydWVcbn0pO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIFJhZGlvIE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG52YXIgTWF0ZXJpYWxSYWRpbyA9IGZ1bmN0aW9uIE1hdGVyaWFsUmFkaW8oZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbFJhZGlvJ10gPSBNYXRlcmlhbFJhZGlvO1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuQ29uc3RhbnRfID0geyBUSU5ZX1RJTUVPVVQ6IDAuMDAxIH07XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBJU19GT0NVU0VEOiAnaXMtZm9jdXNlZCcsXG4gICAgSVNfRElTQUJMRUQ6ICdpcy1kaXNhYmxlZCcsXG4gICAgSVNfQ0hFQ0tFRDogJ2lzLWNoZWNrZWQnLFxuICAgIElTX1VQR1JBREVEOiAnaXMtdXBncmFkZWQnLFxuICAgIEpTX1JBRElPOiAnbWRsLWpzLXJhZGlvJyxcbiAgICBSQURJT19CVE46ICdtZGwtcmFkaW9fX2J1dHRvbicsXG4gICAgUkFESU9fT1VURVJfQ0lSQ0xFOiAnbWRsLXJhZGlvX19vdXRlci1jaXJjbGUnLFxuICAgIFJBRElPX0lOTkVSX0NJUkNMRTogJ21kbC1yYWRpb19faW5uZXItY2lyY2xlJyxcbiAgICBSSVBQTEVfRUZGRUNUOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QnLFxuICAgIFJJUFBMRV9JR05PUkVfRVZFTlRTOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QtLWlnbm9yZS1ldmVudHMnLFxuICAgIFJJUFBMRV9DT05UQUlORVI6ICdtZGwtcmFkaW9fX3JpcHBsZS1jb250YWluZXInLFxuICAgIFJJUFBMRV9DRU5URVI6ICdtZGwtcmlwcGxlLS1jZW50ZXInLFxuICAgIFJJUFBMRTogJ21kbC1yaXBwbGUnXG59O1xuLyoqXG4gICAqIEhhbmRsZSBjaGFuZ2Ugb2Ygc3RhdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLm9uQ2hhbmdlXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIFNpbmNlIG90aGVyIHJhZGlvIGJ1dHRvbnMgZG9uJ3QgZ2V0IGNoYW5nZSBldmVudHMsIHdlIG5lZWQgdG8gbG9vayBmb3JcbiAgICAvLyB0aGVtIHRvIHVwZGF0ZSB0aGVpciBjbGFzc2VzLlxuICAgIHZhciByYWRpb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMuQ3NzQ2xhc3Nlc18uSlNfUkFESU8pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmFkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBidXR0b24gPSByYWRpb3NbaV0ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLlJBRElPX0JUTik7XG4gICAgICAgIC8vIERpZmZlcmVudCBuYW1lID09IGRpZmZlcmVudCBncm91cCwgc28gbm8gcG9pbnQgdXBkYXRpbmcgdGhvc2UuXG4gICAgICAgIGlmIChidXR0b24uZ2V0QXR0cmlidXRlKCduYW1lJykgPT09IHRoaXMuYnRuRWxlbWVudF8uZ2V0QXR0cmlidXRlKCduYW1lJykpIHtcbiAgICAgICAgICAgIHJhZGlvc1tpXVsnTWF0ZXJpYWxSYWRpbyddLnVwZGF0ZUNsYXNzZXNfKCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gICAqIEhhbmRsZSBmb2N1cy5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUub25Gb2N1c18gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbn07XG4vKipcbiAgICogSGFuZGxlIGxvc3QgZm9jdXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLm9uQmx1cl8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbn07XG4vKipcbiAgICogSGFuZGxlIG1vdXNldXAuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLm9uTW91c2V1cF8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmJsdXJfKCk7XG59O1xuLyoqXG4gICAqIFVwZGF0ZSBjbGFzc2VzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLnVwZGF0ZUNsYXNzZXNfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2hlY2tEaXNhYmxlZCgpO1xuICAgIHRoaXMuY2hlY2tUb2dnbGVTdGF0ZSgpO1xufTtcbi8qKlxuICAgKiBBZGQgYmx1ci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5ibHVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPOiBmaWd1cmUgb3V0IHdoeSB0aGVyZSdzIGEgZm9jdXMgZXZlbnQgYmVpbmcgZmlyZWQgYWZ0ZXIgb3VyIGJsdXIsXG4gICAgLy8gc28gdGhhdCB3ZSBjYW4gYXZvaWQgdGhpcyBoYWNrLlxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5idG5FbGVtZW50Xy5ibHVyKCk7XG4gICAgfS5iaW5kKHRoaXMpLCB0aGlzLkNvbnN0YW50Xy5USU5ZX1RJTUVPVVQpO1xufTtcbi8vIFB1YmxpYyBtZXRob2RzLlxuLyoqXG4gICAqIENoZWNrIHRoZSBjb21wb25lbnRzIGRpc2FibGVkIHN0YXRlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuY2hlY2tEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5idG5FbGVtZW50Xy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVNBQkxFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRElTQUJMRUQpO1xuICAgIH1cbn07XG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZVsnY2hlY2tEaXNhYmxlZCddID0gTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuY2hlY2tEaXNhYmxlZDtcbi8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50cyB0b2dnbGVkIHN0YXRlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuY2hlY2tUb2dnbGVTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5idG5FbGVtZW50Xy5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0NIRUNLRUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0NIRUNLRUQpO1xuICAgIH1cbn07XG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZVsnY2hlY2tUb2dnbGVTdGF0ZSddID0gTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuY2hlY2tUb2dnbGVTdGF0ZTtcbi8qKlxuICAgKiBEaXNhYmxlIHJhZGlvLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJ0bkVsZW1lbnRfLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGVbJ2Rpc2FibGUnXSA9IE1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLmRpc2FibGU7XG4vKipcbiAgICogRW5hYmxlIHJhZGlvLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYnRuRWxlbWVudF8uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGVbJ2VuYWJsZSddID0gTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuZW5hYmxlO1xuLyoqXG4gICAqIENoZWNrIHJhZGlvLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5idG5FbGVtZW50Xy5jaGVja2VkID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGVbJ2NoZWNrJ10gPSBNYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5jaGVjaztcbi8qKlxuICAgKiBVbmNoZWNrIHJhZGlvLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUudW5jaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJ0bkVsZW1lbnRfLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGVbJ3VuY2hlY2snXSA9IE1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLnVuY2hlY2s7XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgdGhpcy5idG5FbGVtZW50XyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLlJBRElPX0JUTik7XG4gICAgICAgIHZhciBvdXRlckNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgb3V0ZXJDaXJjbGUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJBRElPX09VVEVSX0NJUkNMRSk7XG4gICAgICAgIHZhciBpbm5lckNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaW5uZXJDaXJjbGUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJBRElPX0lOTkVSX0NJUkNMRSk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQob3V0ZXJDaXJjbGUpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKGlubmVyQ2lyY2xlKTtcbiAgICAgICAgdmFyIHJpcHBsZUNvbnRhaW5lcjtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0VGRkVDVCkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9JR05PUkVfRVZFTlRTKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0NPTlRBSU5FUik7XG4gICAgICAgICAgICByaXBwbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9FRkZFQ1QpO1xuICAgICAgICAgICAgcmlwcGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfQ0VOVEVSKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNldXBfLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdmFyIHJpcHBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHJpcHBsZS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyaXBwbGUpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZChyaXBwbGVDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYnRuRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vbkNoYW5nZV8uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYnRuRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLm9uRm9jdXNfLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmJ0bkVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLm9uQmx1cl8uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZXVwXy5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19VUEdSQURFRCk7XG4gICAgfVxufTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbFJhZGlvLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbFJhZGlvJyxcbiAgICBjc3NDbGFzczogJ21kbC1qcy1yYWRpbycsXG4gICAgd2lkZ2V0OiB0cnVlXG59KTtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBTbGlkZXIgTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbFNsaWRlciA9IGZ1bmN0aW9uIE1hdGVyaWFsU2xpZGVyKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBCcm93c2VyIGZlYXR1cmUgZGV0ZWN0aW9uLlxuICAgIHRoaXMuaXNJRV8gPSB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsU2xpZGVyJ10gPSBNYXRlcmlhbFNsaWRlcjtcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5Db25zdGFudF8gPSB7fTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBJRV9DT05UQUlORVI6ICdtZGwtc2xpZGVyX19pZS1jb250YWluZXInLFxuICAgIFNMSURFUl9DT05UQUlORVI6ICdtZGwtc2xpZGVyX19jb250YWluZXInLFxuICAgIEJBQ0tHUk9VTkRfRkxFWDogJ21kbC1zbGlkZXJfX2JhY2tncm91bmQtZmxleCcsXG4gICAgQkFDS0dST1VORF9MT1dFUjogJ21kbC1zbGlkZXJfX2JhY2tncm91bmQtbG93ZXInLFxuICAgIEJBQ0tHUk9VTkRfVVBQRVI6ICdtZGwtc2xpZGVyX19iYWNrZ3JvdW5kLXVwcGVyJyxcbiAgICBJU19MT1dFU1RfVkFMVUU6ICdpcy1sb3dlc3QtdmFsdWUnLFxuICAgIElTX1VQR1JBREVEOiAnaXMtdXBncmFkZWQnXG59O1xuLyoqXG4gICAqIEhhbmRsZSBpbnB1dCBvbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFNsaWRlci5wcm90b3R5cGUub25JbnB1dF8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlU3R5bGVzXygpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgY2hhbmdlIG9uIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5vbkNoYW5nZV8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlU3R5bGVzXygpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgbW91c2V1cCBvbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFNsaWRlci5wcm90b3R5cGUub25Nb3VzZVVwXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnRhcmdldC5ibHVyKCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBtb3VzZWRvd24gb24gY29udGFpbmVyIGVsZW1lbnQuXG4gICAqIFRoaXMgaGFuZGxlciBpcyBwdXJwb3NlIGlzIHRvIG5vdCByZXF1aXJlIHRoZSB1c2UgdG8gY2xpY2tcbiAgICogZXhhY3RseSBvbiB0aGUgMnB4IHNsaWRlciBlbGVtZW50LCBhcyBGaXJlRm94IHNlZW1zIHRvIGJlIHZlcnlcbiAgICogc3RyaWN0IGFib3V0IHRoaXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAc3VwcHJlc3Mge21pc3NpbmdQcm9wZXJ0aWVzfVxuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5vbkNvbnRhaW5lck1vdXNlRG93bl8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBJZiB0aGlzIGNsaWNrIGlzIG5vdCBvbiB0aGUgcGFyZW50IGVsZW1lbnQgKGJ1dCByYXRoZXIgc29tZSBjaGlsZClcbiAgICAvLyBpZ25vcmUuIEl0IG1heSBzdGlsbCBidWJibGUgdXAuXG4gICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gdGhpcy5lbGVtZW50Xy5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gRGlzY2FyZCB0aGUgb3JpZ2luYWwgZXZlbnQgYW5kIGNyZWF0ZSBhIG5ldyBldmVudCB0aGF0XG4gICAgLy8gaXMgb24gdGhlIHNsaWRlciBlbGVtZW50LlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIG5ld0V2ZW50ID0gbmV3IE1vdXNlRXZlbnQoJ21vdXNlZG93bicsIHtcbiAgICAgICAgdGFyZ2V0OiBldmVudC50YXJnZXQsXG4gICAgICAgIGJ1dHRvbnM6IGV2ZW50LmJ1dHRvbnMsXG4gICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgIGNsaWVudFk6IHRoaXMuZWxlbWVudF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueVxuICAgIH0pO1xuICAgIHRoaXMuZWxlbWVudF8uZGlzcGF0Y2hFdmVudChuZXdFdmVudCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSB1cGRhdGluZyBvZiB2YWx1ZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlLnVwZGF0ZVZhbHVlU3R5bGVzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBDYWxjdWxhdGUgYW5kIGFwcGx5IHBlcmNlbnRhZ2VzIHRvIGRpdiBzdHJ1Y3R1cmUgYmVoaW5kIHNsaWRlci5cbiAgICB2YXIgZnJhY3Rpb24gPSAodGhpcy5lbGVtZW50Xy52YWx1ZSAtIHRoaXMuZWxlbWVudF8ubWluKSAvICh0aGlzLmVsZW1lbnRfLm1heCAtIHRoaXMuZWxlbWVudF8ubWluKTtcbiAgICBpZiAoZnJhY3Rpb24gPT09IDApIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfTE9XRVNUX1ZBTFVFKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19MT1dFU1RfVkFMVUUpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNJRV8pIHtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kTG93ZXJfLnN0eWxlLmZsZXggPSBmcmFjdGlvbjtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kTG93ZXJfLnN0eWxlLndlYmtpdEZsZXggPSBmcmFjdGlvbjtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kVXBwZXJfLnN0eWxlLmZsZXggPSAxIC0gZnJhY3Rpb247XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFVwcGVyXy5zdHlsZS53ZWJraXRGbGV4ID0gMSAtIGZyYWN0aW9uO1xuICAgIH1cbn07XG4vLyBQdWJsaWMgbWV0aG9kcy5cbi8qKlxuICAgKiBEaXNhYmxlIHNsaWRlci5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudF8uZGlzYWJsZWQgPSB0cnVlO1xufTtcbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZVsnZGlzYWJsZSddID0gTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlLmRpc2FibGU7XG4vKipcbiAgICogRW5hYmxlIHNsaWRlci5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50Xy5kaXNhYmxlZCA9IGZhbHNlO1xufTtcbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZVsnZW5hYmxlJ10gPSBNYXRlcmlhbFNsaWRlci5wcm90b3R5cGUuZW5hYmxlO1xuLyoqXG4gICAqIFVwZGF0ZSBzbGlkZXIgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgdmFsdWUgdG8gd2hpY2ggdG8gc2V0IHRoZSBjb250cm9sIChvcHRpb25hbCkuXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFNsaWRlci5wcm90b3R5cGUuY2hhbmdlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVZhbHVlU3R5bGVzXygpO1xufTtcbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZVsnY2hhbmdlJ10gPSBNYXRlcmlhbFNsaWRlci5wcm90b3R5cGUuY2hhbmdlO1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbFNsaWRlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICBpZiAodGhpcy5pc0lFXykge1xuICAgICAgICAgICAgLy8gU2luY2Ugd2UgbmVlZCB0byBzcGVjaWZ5IGEgdmVyeSBsYXJnZSBoZWlnaHQgaW4gSUUgZHVlIHRvXG4gICAgICAgICAgICAvLyBpbXBsZW1lbnRhdGlvbiBsaW1pdGF0aW9ucywgd2UgYWRkIGEgcGFyZW50IGhlcmUgdGhhdCB0cmltcyBpdCBkb3duIHRvXG4gICAgICAgICAgICAvLyBhIHJlYXNvbmFibGUgc2l6ZS5cbiAgICAgICAgICAgIHZhciBjb250YWluZXJJRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29udGFpbmVySUUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklFX0NPTlRBSU5FUik7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lcklFLCB0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgICAgIGNvbnRhaW5lcklFLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudF8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRm9yIG5vbi1JRSBicm93c2Vycywgd2UgbmVlZCBhIGRpdiBzdHJ1Y3R1cmUgdGhhdCBzaXRzIGJlaGluZCB0aGVcbiAgICAgICAgICAgIC8vIHNsaWRlciBhbmQgYWxsb3dzIHVzIHRvIHN0eWxlIHRoZSBsZWZ0IGFuZCByaWdodCBzaWRlcyBvZiBpdCB3aXRoXG4gICAgICAgICAgICAvLyBkaWZmZXJlbnQgY29sb3JzLlxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5TTElERVJfQ09OVEFJTkVSKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8ucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCB0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kRmxleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYmFja2dyb3VuZEZsZXguY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkJBQ0tHUk9VTkRfRkxFWCk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZEZsZXgpO1xuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kTG93ZXJfID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRMb3dlcl8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkJBQ0tHUk9VTkRfTE9XRVIpO1xuICAgICAgICAgICAgYmFja2dyb3VuZEZsZXguYXBwZW5kQ2hpbGQodGhpcy5iYWNrZ3JvdW5kTG93ZXJfKTtcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZFVwcGVyXyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kVXBwZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5CQUNLR1JPVU5EX1VQUEVSKTtcbiAgICAgICAgICAgIGJhY2tncm91bmRGbGV4LmFwcGVuZENoaWxkKHRoaXMuYmFja2dyb3VuZFVwcGVyXyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib3VuZElucHV0SGFuZGxlciA9IHRoaXMub25JbnB1dF8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZENoYW5nZUhhbmRsZXIgPSB0aGlzLm9uQ2hhbmdlXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdW5kTW91c2VVcEhhbmRsZXIgPSB0aGlzLm9uTW91c2VVcF8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZENvbnRhaW5lck1vdXNlRG93bkhhbmRsZXIgPSB0aGlzLm9uQ29udGFpbmVyTW91c2VEb3duXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5ib3VuZElucHV0SGFuZGxlcik7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5ib3VuZENoYW5nZUhhbmRsZXIpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kTW91c2VVcEhhbmRsZXIpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5ib3VuZENvbnRhaW5lck1vdXNlRG93bkhhbmRsZXIpO1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlU3R5bGVzXygpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19VUEdSQURFRCk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBEb3duZ3JhZGUgdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5tZGxEb3duZ3JhZGVfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLmJvdW5kSW5wdXRIYW5kbGVyKTtcbiAgICB0aGlzLmVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuYm91bmRDaGFuZ2VIYW5kbGVyKTtcbiAgICB0aGlzLmVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kTW91c2VVcEhhbmRsZXIpO1xuICAgIHRoaXMuZWxlbWVudF8ucGFyZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmJvdW5kQ29udGFpbmVyTW91c2VEb3duSGFuZGxlcik7XG59O1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsU2xpZGVyLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbFNsaWRlcicsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtc2xpZGVyJyxcbiAgICB3aWRnZXQ6IHRydWVcbn0pO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIFNwaW5uZXIgTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbnZhciBNYXRlcmlhbFNwaW5uZXIgPSBmdW5jdGlvbiBNYXRlcmlhbFNwaW5uZXIoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbFNwaW5uZXInXSA9IE1hdGVyaWFsU3Bpbm5lcjtcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU3Bpbm5lci5wcm90b3R5cGUuQ29uc3RhbnRfID0geyBNRExfU1BJTk5FUl9MQVlFUl9DT1VOVDogNCB9O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBNRExfU1BJTk5FUl9MQVlFUjogJ21kbC1zcGlubmVyX19sYXllcicsXG4gICAgTURMX1NQSU5ORVJfQ0lSQ0xFX0NMSVBQRVI6ICdtZGwtc3Bpbm5lcl9fY2lyY2xlLWNsaXBwZXInLFxuICAgIE1ETF9TUElOTkVSX0NJUkNMRTogJ21kbC1zcGlubmVyX19jaXJjbGUnLFxuICAgIE1ETF9TUElOTkVSX0dBUF9QQVRDSDogJ21kbC1zcGlubmVyX19nYXAtcGF0Y2gnLFxuICAgIE1ETF9TUElOTkVSX0xFRlQ6ICdtZGwtc3Bpbm5lcl9fbGVmdCcsXG4gICAgTURMX1NQSU5ORVJfUklHSFQ6ICdtZGwtc3Bpbm5lcl9fcmlnaHQnXG59O1xuLyoqXG4gICAqIEF1eGlsaWFyeSBtZXRob2QgdG8gY3JlYXRlIGEgc3Bpbm5lciBsYXllci5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IG9mIHRoZSBsYXllciB0byBiZSBjcmVhdGVkLlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZS5jcmVhdGVMYXllciA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHZhciBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxheWVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5NRExfU1BJTk5FUl9MQVlFUik7XG4gICAgbGF5ZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk1ETF9TUElOTkVSX0xBWUVSICsgJy0nICsgaW5kZXgpO1xuICAgIHZhciBsZWZ0Q2xpcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZnRDbGlwcGVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5NRExfU1BJTk5FUl9DSVJDTEVfQ0xJUFBFUik7XG4gICAgbGVmdENsaXBwZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk1ETF9TUElOTkVSX0xFRlQpO1xuICAgIHZhciBnYXBQYXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdhcFBhdGNoLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5NRExfU1BJTk5FUl9HQVBfUEFUQ0gpO1xuICAgIHZhciByaWdodENsaXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByaWdodENsaXBwZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk1ETF9TUElOTkVSX0NJUkNMRV9DTElQUEVSKTtcbiAgICByaWdodENsaXBwZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk1ETF9TUElOTkVSX1JJR0hUKTtcbiAgICB2YXIgY2lyY2xlT3duZXJzID0gW1xuICAgICAgICBsZWZ0Q2xpcHBlcixcbiAgICAgICAgZ2FwUGF0Y2gsXG4gICAgICAgIHJpZ2h0Q2xpcHBlclxuICAgIF07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXJjbGVPd25lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjaXJjbGUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk1ETF9TUElOTkVSX0NJUkNMRSk7XG4gICAgICAgIGNpcmNsZU93bmVyc1tpXS5hcHBlbmRDaGlsZChjaXJjbGUpO1xuICAgIH1cbiAgICBsYXllci5hcHBlbmRDaGlsZChsZWZ0Q2xpcHBlcik7XG4gICAgbGF5ZXIuYXBwZW5kQ2hpbGQoZ2FwUGF0Y2gpO1xuICAgIGxheWVyLmFwcGVuZENoaWxkKHJpZ2h0Q2xpcHBlcik7XG4gICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZChsYXllcik7XG59O1xuTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZVsnY3JlYXRlTGF5ZXInXSA9IE1hdGVyaWFsU3Bpbm5lci5wcm90b3R5cGUuY3JlYXRlTGF5ZXI7XG4vKipcbiAgICogU3RvcHMgdGhlIHNwaW5uZXIgYW5pbWF0aW9uLlxuICAgKiBQdWJsaWMgbWV0aG9kIGZvciB1c2VycyB3aG8gbmVlZCB0byBzdG9wIHRoZSBzcGlubmVyIGZvciBhbnkgcmVhc29uLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG59O1xuTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZVsnc3RvcCddID0gTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZS5zdG9wO1xuLyoqXG4gICAqIFN0YXJ0cyB0aGUgc3Bpbm5lciBhbmltYXRpb24uXG4gICAqIFB1YmxpYyBtZXRob2QgZm9yIHVzZXJzIHdobyBuZWVkIHRvIG1hbnVhbGx5IHN0YXJ0IHRoZSBzcGlubmVyIGZvciBhbnkgcmVhc29uXG4gICAqIChpbnN0ZWFkIG9mIGp1c3QgYWRkaW5nIHRoZSAnaXMtYWN0aXZlJyBjbGFzcyB0byB0aGVpciBtYXJrdXApLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xufTtcbk1hdGVyaWFsU3Bpbm5lci5wcm90b3R5cGVbJ3N0YXJ0J10gPSBNYXRlcmlhbFNwaW5uZXIucHJvdG90eXBlLnN0YXJ0O1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbFNwaW5uZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gdGhpcy5Db25zdGFudF8uTURMX1NQSU5ORVJfTEFZRVJfQ09VTlQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVMYXllcihpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQoJ2lzLXVwZ3JhZGVkJyk7XG4gICAgfVxufTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbFNwaW5uZXIsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsU3Bpbm5lcicsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtc3Bpbm5lcicsXG4gICAgd2lkZ2V0OiB0cnVlXG59KTtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBDaGVja2JveCBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsU3dpdGNoID0gZnVuY3Rpb24gTWF0ZXJpYWxTd2l0Y2goZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbFN3aXRjaCddID0gTWF0ZXJpYWxTd2l0Y2g7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuQ29uc3RhbnRfID0geyBUSU5ZX1RJTUVPVVQ6IDAuMDAxIH07XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgSU5QVVQ6ICdtZGwtc3dpdGNoX19pbnB1dCcsXG4gICAgVFJBQ0s6ICdtZGwtc3dpdGNoX190cmFjaycsXG4gICAgVEhVTUI6ICdtZGwtc3dpdGNoX190aHVtYicsXG4gICAgRk9DVVNfSEVMUEVSOiAnbWRsLXN3aXRjaF9fZm9jdXMtaGVscGVyJyxcbiAgICBSSVBQTEVfRUZGRUNUOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QnLFxuICAgIFJJUFBMRV9JR05PUkVfRVZFTlRTOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QtLWlnbm9yZS1ldmVudHMnLFxuICAgIFJJUFBMRV9DT05UQUlORVI6ICdtZGwtc3dpdGNoX19yaXBwbGUtY29udGFpbmVyJyxcbiAgICBSSVBQTEVfQ0VOVEVSOiAnbWRsLXJpcHBsZS0tY2VudGVyJyxcbiAgICBSSVBQTEU6ICdtZGwtcmlwcGxlJyxcbiAgICBJU19GT0NVU0VEOiAnaXMtZm9jdXNlZCcsXG4gICAgSVNfRElTQUJMRUQ6ICdpcy1kaXNhYmxlZCcsXG4gICAgSVNfQ0hFQ0tFRDogJ2lzLWNoZWNrZWQnXG59O1xuLyoqXG4gICAqIEhhbmRsZSBjaGFuZ2Ugb2Ygc3RhdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5vbkNoYW5nZV8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBmb2N1cyBvZiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUub25Gb2N1c18gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbn07XG4vKipcbiAgICogSGFuZGxlIGxvc3QgZm9jdXMgb2YgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLm9uQmx1cl8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbn07XG4vKipcbiAgICogSGFuZGxlIG1vdXNldXAuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5vbk1vdXNlVXBfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5ibHVyXygpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgY2xhc3MgdXBkYXRlcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUudXBkYXRlQ2xhc3Nlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jaGVja0Rpc2FibGVkKCk7XG4gICAgdGhpcy5jaGVja1RvZ2dsZVN0YXRlKCk7XG59O1xuLyoqXG4gICAqIEFkZCBibHVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5ibHVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPOiBmaWd1cmUgb3V0IHdoeSB0aGVyZSdzIGEgZm9jdXMgZXZlbnQgYmVpbmcgZmlyZWQgYWZ0ZXIgb3VyIGJsdXIsXG4gICAgLy8gc28gdGhhdCB3ZSBjYW4gYXZvaWQgdGhpcyBoYWNrLlxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfLmJsdXIoKTtcbiAgICB9LmJpbmQodGhpcyksIHRoaXMuQ29uc3RhbnRfLlRJTllfVElNRU9VVCk7XG59O1xuLy8gUHVibGljIG1ldGhvZHMuXG4vKipcbiAgICogQ2hlY2sgdGhlIGNvbXBvbmVudHMgZGlzYWJsZWQgc3RhdGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuY2hlY2tEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnRfLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0RJU0FCTEVEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVNBQkxFRCk7XG4gICAgfVxufTtcbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZVsnY2hlY2tEaXNhYmxlZCddID0gTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLmNoZWNrRGlzYWJsZWQ7XG4vKipcbiAgICogQ2hlY2sgdGhlIGNvbXBvbmVudHMgdG9nZ2xlZCBzdGF0ZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5jaGVja1RvZ2dsZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudF8uY2hlY2tlZCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19DSEVDS0VEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19DSEVDS0VEKTtcbiAgICB9XG59O1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlWydjaGVja1RvZ2dsZVN0YXRlJ10gPSBNYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuY2hlY2tUb2dnbGVTdGF0ZTtcbi8qKlxuICAgKiBEaXNhYmxlIHN3aXRjaC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZVsnZGlzYWJsZSddID0gTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLmRpc2FibGU7XG4vKipcbiAgICogRW5hYmxlIHN3aXRjaC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZVsnZW5hYmxlJ10gPSBNYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuZW5hYmxlO1xuLyoqXG4gICAqIEFjdGl2YXRlIHN3aXRjaC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uY2hlY2tlZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZVsnb24nXSA9IE1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5vbjtcbi8qKlxuICAgKiBEZWFjdGl2YXRlIHN3aXRjaC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlWydvZmYnXSA9IE1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5vZmY7XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50XyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLklOUFVUKTtcbiAgICAgICAgdmFyIHRyYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRyYWNrLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5UUkFDSyk7XG4gICAgICAgIHZhciB0aHVtYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aHVtYi5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVEhVTUIpO1xuICAgICAgICB2YXIgZm9jdXNIZWxwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGZvY3VzSGVscGVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5GT0NVU19IRUxQRVIpO1xuICAgICAgICB0aHVtYi5hcHBlbmRDaGlsZChmb2N1c0hlbHBlcik7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQodHJhY2spO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKHRodW1iKTtcbiAgICAgICAgdGhpcy5ib3VuZE1vdXNlVXBIYW5kbGVyID0gdGhpcy5vbk1vdXNlVXBfLmJpbmQodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9FRkZFQ1QpKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfSUdOT1JFX0VWRU5UUyk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0NPTlRBSU5FUik7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfRUZGRUNUKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9DRU5URVIpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZE1vdXNlVXBIYW5kbGVyKTtcbiAgICAgICAgICAgIHZhciByaXBwbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICByaXBwbGUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRSk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmFwcGVuZENoaWxkKHJpcHBsZSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm91bmRDaGFuZ2VIYW5kbGVyID0gdGhpcy5vbkNoYW5nZV8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZEZvY3VzSGFuZGxlciA9IHRoaXMub25Gb2N1c18uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZEJsdXJIYW5kbGVyID0gdGhpcy5vbkJsdXJfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmJvdW5kQ2hhbmdlSGFuZGxlcik7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuYm91bmRGb2N1c0hhbmRsZXIpO1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuYm91bmRCbHVySGFuZGxlcik7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRNb3VzZVVwSGFuZGxlcik7XG4gICAgICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKCdpcy11cGdyYWRlZCcpO1xuICAgIH1cbn07XG4vKipcbiAgICogRG93bmdyYWRlIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLm1kbERvd25ncmFkZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8pIHtcbiAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZE1vdXNlVXBIYW5kbGVyKTtcbiAgICB9XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuYm91bmRDaGFuZ2VIYW5kbGVyKTtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmJvdW5kRm9jdXNIYW5kbGVyKTtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuYm91bmRCbHVySGFuZGxlcik7XG4gICAgdGhpcy5lbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZE1vdXNlVXBIYW5kbGVyKTtcbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxTd2l0Y2gsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsU3dpdGNoJyxcbiAgICBjc3NDbGFzczogJ21kbC1qcy1zd2l0Y2gnLFxuICAgIHdpZGdldDogdHJ1ZVxufSk7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgVGFicyBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsVGFicyA9IGZ1bmN0aW9uIE1hdGVyaWFsVGFicyhlbGVtZW50KSB7XG4gICAgLy8gU3RvcmVzIHRoZSBIVE1MIGVsZW1lbnQuXG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsVGFicyddID0gTWF0ZXJpYWxUYWJzO1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUYWJzLnByb3RvdHlwZS5Db25zdGFudF8gPSB7fTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVGFicy5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgVEFCX0NMQVNTOiAnbWRsLXRhYnNfX3RhYicsXG4gICAgUEFORUxfQ0xBU1M6ICdtZGwtdGFic19fcGFuZWwnLFxuICAgIEFDVElWRV9DTEFTUzogJ2lzLWFjdGl2ZScsXG4gICAgVVBHUkFERURfQ0xBU1M6ICdpcy11cGdyYWRlZCcsXG4gICAgTURMX0pTX1JJUFBMRV9FRkZFQ1Q6ICdtZGwtanMtcmlwcGxlLWVmZmVjdCcsXG4gICAgTURMX1JJUFBMRV9DT05UQUlORVI6ICdtZGwtdGFic19fcmlwcGxlLWNvbnRhaW5lcicsXG4gICAgTURMX1JJUFBMRTogJ21kbC1yaXBwbGUnLFxuICAgIE1ETF9KU19SSVBQTEVfRUZGRUNUX0lHTk9SRV9FVkVOVFM6ICdtZGwtanMtcmlwcGxlLWVmZmVjdC0taWdub3JlLWV2ZW50cydcbn07XG4vKipcbiAgICogSGFuZGxlIGNsaWNrcyB0byBhIHRhYnMgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUYWJzLnByb3RvdHlwZS5pbml0VGFic18gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uTURMX0pTX1JJUFBMRV9FRkZFQ1QpKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk1ETF9KU19SSVBQTEVfRUZGRUNUX0lHTk9SRV9FVkVOVFMpO1xuICAgIH1cbiAgICAvLyBTZWxlY3QgZWxlbWVudCB0YWJzLCBkb2N1bWVudCBwYW5lbHNcbiAgICB0aGlzLnRhYnNfID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uVEFCX0NMQVNTKTtcbiAgICB0aGlzLnBhbmVsc18gPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5QQU5FTF9DTEFTUyk7XG4gICAgLy8gQ3JlYXRlIG5ldyB0YWJzIGZvciBlYWNoIHRhYiBlbGVtZW50XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRhYnNfLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5ldyBNYXRlcmlhbFRhYih0aGlzLnRhYnNfW2ldLCB0aGlzKTtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVVBHUkFERURfQ0xBU1MpO1xufTtcbi8qKlxuICAgKiBSZXNldCB0YWIgc3RhdGUsIGRyb3BwaW5nIGFjdGl2ZSBjbGFzc2VzXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUYWJzLnByb3RvdHlwZS5yZXNldFRhYlN0YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMudGFic18ubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdGhpcy50YWJzX1trXS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uQUNUSVZFX0NMQVNTKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIFJlc2V0IHBhbmVsIHN0YXRlLCBkcm9waW5nIGFjdGl2ZSBjbGFzc2VzXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUYWJzLnByb3RvdHlwZS5yZXNldFBhbmVsU3RhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5wYW5lbHNfLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHRoaXMucGFuZWxzX1tqXS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uQUNUSVZFX0NMQVNTKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbFRhYnMucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgdGhpcy5pbml0VGFic18oKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIENvbnN0cnVjdG9yIGZvciBhbiBpbmRpdmlkdWFsIHRhYi5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhYiBUaGUgSFRNTCBlbGVtZW50IGZvciB0aGUgdGFiLlxuICAgKiBAcGFyYW0ge01hdGVyaWFsVGFic30gY3R4IFRoZSBNYXRlcmlhbFRhYnMgb2JqZWN0IHRoYXQgb3ducyB0aGUgdGFiLlxuICAgKi9cbmZ1bmN0aW9uIE1hdGVyaWFsVGFiKHRhYiwgY3R4KSB7XG4gICAgaWYgKHRhYikge1xuICAgICAgICBpZiAoY3R4LmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyhjdHguQ3NzQ2xhc3Nlc18uTURMX0pTX1JJUFBMRV9FRkZFQ1QpKSB7XG4gICAgICAgICAgICB2YXIgcmlwcGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmlwcGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY3R4LkNzc0NsYXNzZXNfLk1ETF9SSVBQTEVfQ09OVEFJTkVSKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGN0eC5Dc3NDbGFzc2VzXy5NRExfSlNfUklQUExFX0VGRkVDVCk7XG4gICAgICAgICAgICB2YXIgcmlwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmlwcGxlLmNsYXNzTGlzdC5hZGQoY3R4LkNzc0NsYXNzZXNfLk1ETF9SSVBQTEUpO1xuICAgICAgICAgICAgcmlwcGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpcHBsZSk7XG4gICAgICAgICAgICB0YWIuYXBwZW5kQ2hpbGQocmlwcGxlQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGhyZWYgPSB0YWIuaHJlZi5zcGxpdCgnIycpWzFdO1xuICAgICAgICAgICAgdmFyIHBhbmVsID0gY3R4LmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJyMnICsgaHJlZik7XG4gICAgICAgICAgICBjdHgucmVzZXRUYWJTdGF0ZV8oKTtcbiAgICAgICAgICAgIGN0eC5yZXNldFBhbmVsU3RhdGVfKCk7XG4gICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZChjdHguQ3NzQ2xhc3Nlc18uQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoY3R4LkNzc0NsYXNzZXNfLkFDVElWRV9DTEFTUyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbFRhYnMsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsVGFicycsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtdGFicydcbn0pO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIFRleHRmaWVsZCBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsVGV4dGZpZWxkID0gZnVuY3Rpb24gTWF0ZXJpYWxUZXh0ZmllbGQoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIHRoaXMubWF4Um93cyA9IHRoaXMuQ29uc3RhbnRfLk5PX01BWF9ST1dTO1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbFRleHRmaWVsZCddID0gTWF0ZXJpYWxUZXh0ZmllbGQ7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuQ29uc3RhbnRfID0ge1xuICAgIE5PX01BWF9ST1dTOiAtMSxcbiAgICBNQVhfUk9XU19BVFRSSUJVVEU6ICdtYXhyb3dzJ1xufTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBMQUJFTDogJ21kbC10ZXh0ZmllbGRfX2xhYmVsJyxcbiAgICBJTlBVVDogJ21kbC10ZXh0ZmllbGRfX2lucHV0JyxcbiAgICBJU19ESVJUWTogJ2lzLWRpcnR5JyxcbiAgICBJU19GT0NVU0VEOiAnaXMtZm9jdXNlZCcsXG4gICAgSVNfRElTQUJMRUQ6ICdpcy1kaXNhYmxlZCcsXG4gICAgSVNfSU5WQUxJRDogJ2lzLWludmFsaWQnLFxuICAgIElTX1VQR1JBREVEOiAnaXMtdXBncmFkZWQnXG59O1xuLyoqXG4gICAqIEhhbmRsZSBpbnB1dCBiZWluZyBlbnRlcmVkLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUub25LZXlEb3duXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBjdXJyZW50Um93Q291bnQgPSBldmVudC50YXJnZXQudmFsdWUuc3BsaXQoJ1xcbicpLmxlbmd0aDtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRSb3dDb3VudCA+PSB0aGlzLm1heFJvd3MpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gICAqIEhhbmRsZSBmb2N1cy5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLm9uRm9jdXNfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRk9DVVNFRCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBsb3N0IGZvY3VzLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUub25CbHVyXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0ZPQ1VTRUQpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgY2xhc3MgdXBkYXRlcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUudXBkYXRlQ2xhc3Nlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jaGVja0Rpc2FibGVkKCk7XG4gICAgdGhpcy5jaGVja1ZhbGlkaXR5KCk7XG4gICAgdGhpcy5jaGVja0RpcnR5KCk7XG59O1xuLy8gUHVibGljIG1ldGhvZHMuXG4vKipcbiAgICogQ2hlY2sgdGhlIGRpc2FibGVkIHN0YXRlIGFuZCB1cGRhdGUgZmllbGQgYWNjb3JkaW5nbHkuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuY2hlY2tEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pbnB1dF8uZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRElTQUJMRUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0RJU0FCTEVEKTtcbiAgICB9XG59O1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlWydjaGVja0Rpc2FibGVkJ10gPSBNYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuY2hlY2tEaXNhYmxlZDtcbi8qKlxuICAgKiBDaGVjayB0aGUgdmFsaWRpdHkgc3RhdGUgYW5kIHVwZGF0ZSBmaWVsZCBhY2NvcmRpbmdseS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5jaGVja1ZhbGlkaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlucHV0Xy52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19JTlZBTElEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19JTlZBTElEKTtcbiAgICB9XG59O1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlWydjaGVja1ZhbGlkaXR5J10gPSBNYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuY2hlY2tWYWxpZGl0eTtcbi8qKlxuICAgKiBDaGVjayB0aGUgZGlydHkgc3RhdGUgYW5kIHVwZGF0ZSBmaWVsZCBhY2NvcmRpbmdseS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5jaGVja0RpcnR5ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlucHV0Xy52YWx1ZSAmJiB0aGlzLmlucHV0Xy52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0RJUlRZKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVJUWSk7XG4gICAgfVxufTtcbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZVsnY2hlY2tEaXJ0eSddID0gTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmNoZWNrRGlydHk7XG4vKipcbiAgICogRGlzYWJsZSB0ZXh0IGZpZWxkLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dF8uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGVbJ2Rpc2FibGUnXSA9IE1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5kaXNhYmxlO1xuLyoqXG4gICAqIEVuYWJsZSB0ZXh0IGZpZWxkLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0Xy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGVbJ2VuYWJsZSddID0gTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmVuYWJsZTtcbi8qKlxuICAgKiBVcGRhdGUgdGV4dCBmaWVsZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSB0byB3aGljaCB0byBzZXQgdGhlIGNvbnRyb2wgKG9wdGlvbmFsKS5cbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5jaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5pbnB1dF8udmFsdWUgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlucHV0Xy52YWx1ZSA9ICcnO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlWydjaGFuZ2UnXSA9IE1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5jaGFuZ2U7XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIHRoaXMubGFiZWxfID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uTEFCRUwpO1xuICAgICAgICB0aGlzLmlucHV0XyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLklOUFVUKTtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRfKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dF8uaGFzQXR0cmlidXRlKHRoaXMuQ29uc3RhbnRfLk1BWF9ST1dTX0FUVFJJQlVURSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1heFJvd3MgPSBwYXJzZUludCh0aGlzLmlucHV0Xy5nZXRBdHRyaWJ1dGUodGhpcy5Db25zdGFudF8uTUFYX1JPV1NfQVRUUklCVVRFKSwgMTApO1xuICAgICAgICAgICAgICAgIGlmIChpc05hTih0aGlzLm1heFJvd3MpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF4Um93cyA9IHRoaXMuQ29uc3RhbnRfLk5PX01BWF9ST1dTO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYm91bmRVcGRhdGVDbGFzc2VzSGFuZGxlciA9IHRoaXMudXBkYXRlQ2xhc3Nlc18uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuYm91bmRGb2N1c0hhbmRsZXIgPSB0aGlzLm9uRm9jdXNfLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmJvdW5kQmx1ckhhbmRsZXIgPSB0aGlzLm9uQmx1cl8uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRfLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5ib3VuZFVwZGF0ZUNsYXNzZXNIYW5kbGVyKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRfLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5ib3VuZEZvY3VzSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLmlucHV0Xy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5ib3VuZEJsdXJIYW5kbGVyKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1heFJvd3MgIT09IHRoaXMuQ29uc3RhbnRfLk5PX01BWF9ST1dTKSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBzaG91bGQgaGFuZGxlIHBhc3RpbmcgbXVsdGkgbGluZSB0ZXh0LlxuICAgICAgICAgICAgICAgIC8vIEN1cnJlbnRseSBkb2Vzbid0LlxuICAgICAgICAgICAgICAgIHRoaXMuYm91bmRLZXlEb3duSGFuZGxlciA9IHRoaXMub25LZXlEb3duXy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRfLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmJvdW5kS2V5RG93bkhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVVBHUkFERUQpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICAgKiBEb3duZ3JhZGUgdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5tZGxEb3duZ3JhZGVfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5ib3VuZFVwZGF0ZUNsYXNzZXNIYW5kbGVyKTtcbiAgICB0aGlzLmlucHV0Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuYm91bmRGb2N1c0hhbmRsZXIpO1xuICAgIHRoaXMuaW5wdXRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLmJvdW5kQmx1ckhhbmRsZXIpO1xuICAgIGlmICh0aGlzLmJvdW5kS2V5RG93bkhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5pbnB1dF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuYm91bmRLZXlEb3duSGFuZGxlcik7XG4gICAgfVxufTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbFRleHRmaWVsZCxcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxUZXh0ZmllbGQnLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLXRleHRmaWVsZCcsXG4gICAgd2lkZ2V0OiB0cnVlXG59KTtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBUb29sdGlwIE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG52YXIgTWF0ZXJpYWxUb29sdGlwID0gZnVuY3Rpb24gTWF0ZXJpYWxUb29sdGlwKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxUb29sdGlwJ10gPSBNYXRlcmlhbFRvb2x0aXA7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRvb2x0aXAucHJvdG90eXBlLkNvbnN0YW50XyA9IHt9O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUb29sdGlwLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHsgSVNfQUNUSVZFOiAnaXMtYWN0aXZlJyB9O1xuLyoqXG4gICAqIEhhbmRsZSBtb3VzZWVudGVyIGZvciB0b29sdGlwLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRvb2x0aXAucHJvdG90eXBlLmhhbmRsZU1vdXNlRW50ZXJfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdmFyIHByb3BzID0gZXZlbnQudGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBsZWZ0ID0gcHJvcHMubGVmdCArIHByb3BzLndpZHRoIC8gMjtcbiAgICB2YXIgbWFyZ2luTGVmdCA9IC0xICogKHRoaXMuZWxlbWVudF8ub2Zmc2V0V2lkdGggLyAyKTtcbiAgICBpZiAobGVmdCArIG1hcmdpbkxlZnQgPCAwKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUubGVmdCA9IDA7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUubWFyZ2luTGVmdCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5sZWZ0ID0gbGVmdCArICdweCc7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUubWFyZ2luTGVmdCA9IG1hcmdpbkxlZnQgKyAncHgnO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLnRvcCA9IHByb3BzLnRvcCArIHByb3BzLmhlaWdodCArIDEwICsgJ3B4JztcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19BQ1RJVkUpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmJvdW5kTW91c2VMZWF2ZUhhbmRsZXIsIGZhbHNlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5ib3VuZE1vdXNlTGVhdmVIYW5kbGVyLCBmYWxzZSk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBtb3VzZWxlYXZlIGZvciB0b29sdGlwLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRvb2x0aXAucHJvdG90eXBlLmhhbmRsZU1vdXNlTGVhdmVfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQUNUSVZFKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5ib3VuZE1vdXNlTGVhdmVIYW5kbGVyKTtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5ib3VuZE1vdXNlTGVhdmVIYW5kbGVyLCBmYWxzZSk7XG59O1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbFRvb2x0aXAucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgdmFyIGZvckVsSWQgPSB0aGlzLmVsZW1lbnRfLmdldEF0dHJpYnV0ZSgnZm9yJyk7XG4gICAgICAgIGlmIChmb3JFbElkKSB7XG4gICAgICAgICAgICB0aGlzLmZvckVsZW1lbnRfID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9yRWxJZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZm9yRWxlbWVudF8pIHtcbiAgICAgICAgICAgIC8vIFRhYmluZGV4IG5lZWRzIHRvIGJlIHNldCBmb3IgYGJsdXJgIGV2ZW50cyB0byBiZSBlbWl0dGVkXG4gICAgICAgICAgICBpZiAoIXRoaXMuZm9yRWxlbWVudF8uZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JFbGVtZW50Xy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYm91bmRNb3VzZUVudGVySGFuZGxlciA9IHRoaXMuaGFuZGxlTW91c2VFbnRlcl8uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuYm91bmRNb3VzZUxlYXZlSGFuZGxlciA9IHRoaXMuaGFuZGxlTW91c2VMZWF2ZV8uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZm9yRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuYm91bmRNb3VzZUVudGVySGFuZGxlciwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5mb3JFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYm91bmRNb3VzZUVudGVySGFuZGxlciwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5mb3JFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5ib3VuZE1vdXNlTGVhdmVIYW5kbGVyKTtcbiAgICAgICAgICAgIHRoaXMuZm9yRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuYm91bmRNb3VzZUVudGVySGFuZGxlciwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5mb3JFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5ib3VuZE1vdXNlTGVhdmVIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAgICogRG93bmdyYWRlIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRvb2x0aXAucHJvdG90eXBlLm1kbERvd25ncmFkZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZm9yRWxlbWVudF8pIHtcbiAgICAgICAgdGhpcy5mb3JFbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5ib3VuZE1vdXNlRW50ZXJIYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuZm9yRWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmJvdW5kTW91c2VFbnRlckhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5mb3JFbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5ib3VuZE1vdXNlRW50ZXJIYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuZm9yRWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuYm91bmRNb3VzZUxlYXZlSGFuZGxlcik7XG4gICAgfVxufTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbFRvb2x0aXAsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsVG9vbHRpcCcsXG4gICAgY3NzQ2xhc3M6ICdtZGwtdG9vbHRpcCdcbn0pO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIExheW91dCBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsTGF5b3V0ID0gZnVuY3Rpb24gTWF0ZXJpYWxMYXlvdXQoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbExheW91dCddID0gTWF0ZXJpYWxMYXlvdXQ7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUuQ29uc3RhbnRfID0ge1xuICAgIE1BWF9XSURUSDogJyhtYXgtd2lkdGg6IDEwMjRweCknLFxuICAgIFRBQl9TQ1JPTExfUElYRUxTOiAxMDAsXG4gICAgTUVOVV9JQ09OOiAnbWVudScsXG4gICAgQ0hFVlJPTl9MRUZUOiAnY2hldnJvbl9sZWZ0JyxcbiAgICBDSEVWUk9OX1JJR0hUOiAnY2hldnJvbl9yaWdodCdcbn07XG4vKipcbiAgICogTW9kZXMuXG4gICAqXG4gICAqIEBlbnVtIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxMYXlvdXQucHJvdG90eXBlLk1vZGVfID0ge1xuICAgIFNUQU5EQVJEOiAwLFxuICAgIFNFQU1FRDogMSxcbiAgICBXQVRFUkZBTEw6IDIsXG4gICAgU0NST0xMOiAzXG59O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxMYXlvdXQucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIENPTlRBSU5FUjogJ21kbC1sYXlvdXRfX2NvbnRhaW5lcicsXG4gICAgSEVBREVSOiAnbWRsLWxheW91dF9faGVhZGVyJyxcbiAgICBEUkFXRVI6ICdtZGwtbGF5b3V0X19kcmF3ZXInLFxuICAgIENPTlRFTlQ6ICdtZGwtbGF5b3V0X19jb250ZW50JyxcbiAgICBEUkFXRVJfQlROOiAnbWRsLWxheW91dF9fZHJhd2VyLWJ1dHRvbicsXG4gICAgSUNPTjogJ21hdGVyaWFsLWljb25zJyxcbiAgICBKU19SSVBQTEVfRUZGRUNUOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QnLFxuICAgIFJJUFBMRV9DT05UQUlORVI6ICdtZGwtbGF5b3V0X190YWItcmlwcGxlLWNvbnRhaW5lcicsXG4gICAgUklQUExFOiAnbWRsLXJpcHBsZScsXG4gICAgUklQUExFX0lHTk9SRV9FVkVOVFM6ICdtZGwtanMtcmlwcGxlLWVmZmVjdC0taWdub3JlLWV2ZW50cycsXG4gICAgSEVBREVSX1NFQU1FRDogJ21kbC1sYXlvdXRfX2hlYWRlci0tc2VhbWVkJyxcbiAgICBIRUFERVJfV0FURVJGQUxMOiAnbWRsLWxheW91dF9faGVhZGVyLS13YXRlcmZhbGwnLFxuICAgIEhFQURFUl9TQ1JPTEw6ICdtZGwtbGF5b3V0X19oZWFkZXItLXNjcm9sbCcsXG4gICAgRklYRURfSEVBREVSOiAnbWRsLWxheW91dC0tZml4ZWQtaGVhZGVyJyxcbiAgICBPQkZVU0NBVE9SOiAnbWRsLWxheW91dF9fb2JmdXNjYXRvcicsXG4gICAgVEFCX0JBUjogJ21kbC1sYXlvdXRfX3RhYi1iYXInLFxuICAgIFRBQl9DT05UQUlORVI6ICdtZGwtbGF5b3V0X190YWItYmFyLWNvbnRhaW5lcicsXG4gICAgVEFCOiAnbWRsLWxheW91dF9fdGFiJyxcbiAgICBUQUJfQkFSX0JVVFRPTjogJ21kbC1sYXlvdXRfX3RhYi1iYXItYnV0dG9uJyxcbiAgICBUQUJfQkFSX0xFRlRfQlVUVE9OOiAnbWRsLWxheW91dF9fdGFiLWJhci1sZWZ0LWJ1dHRvbicsXG4gICAgVEFCX0JBUl9SSUdIVF9CVVRUT046ICdtZGwtbGF5b3V0X190YWItYmFyLXJpZ2h0LWJ1dHRvbicsXG4gICAgUEFORUw6ICdtZGwtbGF5b3V0X190YWItcGFuZWwnLFxuICAgIEhBU19EUkFXRVI6ICdoYXMtZHJhd2VyJyxcbiAgICBIQVNfVEFCUzogJ2hhcy10YWJzJyxcbiAgICBIQVNfU0NST0xMSU5HX0hFQURFUjogJ2hhcy1zY3JvbGxpbmctaGVhZGVyJyxcbiAgICBDQVNUSU5HX1NIQURPVzogJ2lzLWNhc3Rpbmctc2hhZG93JyxcbiAgICBJU19DT01QQUNUOiAnaXMtY29tcGFjdCcsXG4gICAgSVNfU01BTExfU0NSRUVOOiAnaXMtc21hbGwtc2NyZWVuJyxcbiAgICBJU19EUkFXRVJfT1BFTjogJ2lzLXZpc2libGUnLFxuICAgIElTX0FDVElWRTogJ2lzLWFjdGl2ZScsXG4gICAgSVNfVVBHUkFERUQ6ICdpcy11cGdyYWRlZCcsXG4gICAgSVNfQU5JTUFUSU5HOiAnaXMtYW5pbWF0aW5nJyxcbiAgICBPTl9MQVJHRV9TQ1JFRU46ICdtZGwtbGF5b3V0LS1sYXJnZS1zY3JlZW4tb25seScsXG4gICAgT05fU01BTExfU0NSRUVOOiAnbWRsLWxheW91dC0tc21hbGwtc2NyZWVuLW9ubHknXG59O1xuLyoqXG4gICAqIEhhbmRsZXMgc2Nyb2xsaW5nIG9uIHRoZSBjb250ZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTGF5b3V0LnByb3RvdHlwZS5jb250ZW50U2Nyb2xsSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5JU19BTklNQVRJTkcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29udGVudF8uc2Nyb2xsVG9wID4gMCAmJiAhdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklTX0NPTVBBQ1QpKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uQ0FTVElOR19TSEFET1cpO1xuICAgICAgICB0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0NPTVBBQ1QpO1xuICAgICAgICB0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0FOSU1BVElORyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmNvbnRlbnRfLnNjcm9sbFRvcCA8PSAwICYmIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5JU19DT01QQUNUKSkge1xuICAgICAgICB0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLkNBU1RJTkdfU0hBRE9XKTtcbiAgICAgICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19DT01QQUNUKTtcbiAgICAgICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19BTklNQVRJTkcpO1xuICAgIH1cbn07XG4vKipcbiAgICogSGFuZGxlcyBjaGFuZ2VzIGluIHNjcmVlbiBzaXplLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTGF5b3V0LnByb3RvdHlwZS5zY3JlZW5TaXplSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuc2NyZWVuU2l6ZU1lZGlhUXVlcnlfLm1hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfU01BTExfU0NSRUVOKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19TTUFMTF9TQ1JFRU4pO1xuICAgICAgICAvLyBDb2xsYXBzZSBkcmF3ZXIgKGlmIGFueSkgd2hlbiBtb3ZpbmcgdG8gYSBsYXJnZSBzY3JlZW4gc2l6ZS5cbiAgICAgICAgaWYgKHRoaXMuZHJhd2VyXykge1xuICAgICAgICAgICAgdGhpcy5kcmF3ZXJfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19EUkFXRVJfT1BFTik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gICAqIEhhbmRsZXMgdG9nZ2xpbmcgb2YgdGhlIGRyYXdlci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUuZHJhd2VyVG9nZ2xlSGFuZGxlcl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5kcmF3ZXJfLmNsYXNzTGlzdC50b2dnbGUodGhpcy5Dc3NDbGFzc2VzXy5JU19EUkFXRVJfT1BFTik7XG59O1xuLyoqXG4gICAqIEhhbmRsZXMgKHVuKXNldHRpbmcgdGhlIGBpcy1hbmltYXRpbmdgIGNsYXNzXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxMYXlvdXQucHJvdG90eXBlLmhlYWRlclRyYW5zaXRpb25FbmRIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0FOSU1BVElORyk7XG59O1xuLyoqXG4gICAqIEhhbmRsZXMgZXhwYW5kaW5nIHRoZSBoZWFkZXIgb24gY2xpY2tcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUuaGVhZGVyQ2xpY2tIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklTX0NPTVBBQ1QpKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ09NUEFDVCk7XG4gICAgICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQU5JTUFUSU5HKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIFJlc2V0IHRhYiBzdGF0ZSwgZHJvcHBpbmcgYWN0aXZlIGNsYXNzZXNcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUucmVzZXRUYWJTdGF0ZV8gPSBmdW5jdGlvbiAodGFiQmFyKSB7XG4gICAgZm9yICh2YXIgayA9IDA7IGsgPCB0YWJCYXIubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdGFiQmFyW2tdLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19BQ1RJVkUpO1xuICAgIH1cbn07XG4vKipcbiAgICogUmVzZXQgcGFuZWwgc3RhdGUsIGRyb3BpbmcgYWN0aXZlIGNsYXNzZXNcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUucmVzZXRQYW5lbFN0YXRlXyA9IGZ1bmN0aW9uIChwYW5lbHMpIHtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBhbmVscy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYW5lbHNbal0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0FDVElWRSk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxMYXlvdXQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkNPTlRBSU5FUik7XG4gICAgICAgIHRoaXMuZWxlbWVudF8ucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCB0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudF8pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50Xyk7XG4gICAgICAgIHZhciBkaXJlY3RDaGlsZHJlbiA9IHRoaXMuZWxlbWVudF8uY2hpbGROb2RlcztcbiAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBkaXJlY3RDaGlsZHJlbi5sZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gZGlyZWN0Q2hpbGRyZW5bY107XG4gICAgICAgICAgICBpZiAoY2hpbGQuY2xhc3NMaXN0ICYmIGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkhFQURFUikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlcl8gPSBjaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGlsZC5jbGFzc0xpc3QgJiYgY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uRFJBV0VSKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd2VyXyA9IGNoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkLmNsYXNzTGlzdCAmJiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5DT05URU5UKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudF8gPSBjaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oZWFkZXJfKSB7XG4gICAgICAgICAgICB0aGlzLnRhYkJhcl8gPSB0aGlzLmhlYWRlcl8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLlRBQl9CQVIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtb2RlID0gdGhpcy5Nb2RlXy5TVEFOREFSRDtcbiAgICAgICAgLy8gS2VlcCBhbiBleWUgb24gc2NyZWVuIHNpemUsIGFuZCBhZGQvcmVtb3ZlIGF1eGlsaWFyeSBjbGFzcyBmb3Igc3R5bGluZ1xuICAgICAgICAvLyBvZiBzbWFsbCBzY3JlZW5zLlxuICAgICAgICB0aGlzLnNjcmVlblNpemVNZWRpYVF1ZXJ5XyA9IHdpbmRvdy5tYXRjaE1lZGlhKHRoaXMuQ29uc3RhbnRfLk1BWF9XSURUSCk7XG4gICAgICAgIHRoaXMuc2NyZWVuU2l6ZU1lZGlhUXVlcnlfLmFkZExpc3RlbmVyKHRoaXMuc2NyZWVuU2l6ZUhhbmRsZXJfLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnNjcmVlblNpemVIYW5kbGVyXygpO1xuICAgICAgICBpZiAodGhpcy5oZWFkZXJfKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkhFQURFUl9TRUFNRUQpKSB7XG4gICAgICAgICAgICAgICAgbW9kZSA9IHRoaXMuTW9kZV8uU0VBTUVEO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSEVBREVSX1dBVEVSRkFMTCkpIHtcbiAgICAgICAgICAgICAgICBtb2RlID0gdGhpcy5Nb2RlXy5XQVRFUkZBTEw7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJfLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLmhlYWRlclRyYW5zaXRpb25FbmRIYW5kbGVyXy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlcl8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhlYWRlckNsaWNrSGFuZGxlcl8uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5IRUFERVJfU0NST0xMKSkge1xuICAgICAgICAgICAgICAgIG1vZGUgPSB0aGlzLk1vZGVfLlNDUk9MTDtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkhBU19TQ1JPTExJTkdfSEVBREVSKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtb2RlID09PSB0aGlzLk1vZGVfLlNUQU5EQVJEKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5DQVNUSU5HX1NIQURPVyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFiQmFyXykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYkJhcl8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkNBU1RJTkdfU0hBRE9XKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IHRoaXMuTW9kZV8uU0VBTUVEIHx8IG1vZGUgPT09IHRoaXMuTW9kZV8uU0NST0xMKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5DQVNUSU5HX1NIQURPVyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFiQmFyXykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYkJhcl8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLkNBU1RJTkdfU0hBRE9XKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IHRoaXMuTW9kZV8uV0FURVJGQUxMKSB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIGFuZCByZW1vdmUgc2hhZG93cyBkZXBlbmRpbmcgb24gc2Nyb2xsIHBvc2l0aW9uLlxuICAgICAgICAgICAgICAgIC8vIEFsc28gYWRkL3JlbW92ZSBhdXhpbGlhcnkgY2xhc3MgZm9yIHN0eWxpbmcgb2YgdGhlIGNvbXBhY3QgdmVyc2lvbiBvZlxuICAgICAgICAgICAgICAgIC8vIHRoZSBoZWFkZXIuXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50Xy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmNvbnRlbnRTY3JvbGxIYW5kbGVyXy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRTY3JvbGxIYW5kbGVyXygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8qKlxuICAgICAgICogUHJldmVudHMgYW4gZXZlbnQgZnJvbSB0cmlnZ2VyaW5nIHRoZSBkZWZhdWx0IGJlaGF2aW91ci5cbiAgICAgICAqIEBwYXJhbSAge0V2ZW50fSBldiB0aGUgZXZlbnQgdG8gZWF0LlxuICAgICAgICovXG4gICAgICAgIHZhciBlYXRFdmVudCA9IGZ1bmN0aW9uIChldikge1xuICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQWRkIGRyYXdlciB0b2dnbGluZyBidXR0b24gdG8gb3VyIGxheW91dCwgaWYgd2UgaGF2ZSBhbiBvcGVuYWJsZSBkcmF3ZXIuXG4gICAgICAgIGlmICh0aGlzLmRyYXdlcl8pIHtcbiAgICAgICAgICAgIHZhciBkcmF3ZXJCdXR0b24gPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5EUkFXRVJfQlROKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZHJhd2VyQnV0dG9uID09PSAndW5kZWZpbmVkJyB8fCBkcmF3ZXJCdXR0b24gPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkcmF3ZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkcmF3ZXJCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkRSQVdFUl9CVE4pO1xuICAgICAgICAgICAgICAgIHZhciBkcmF3ZXJCdXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgICAgIGRyYXdlckJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklDT04pO1xuICAgICAgICAgICAgICAgIGRyYXdlckJ1dHRvbkljb24udGV4dENvbnRlbnQgPSB0aGlzLkNvbnN0YW50Xy5NRU5VX0lDT047XG4gICAgICAgICAgICAgICAgZHJhd2VyQnV0dG9uLmFwcGVuZENoaWxkKGRyYXdlckJ1dHRvbkljb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZHJhd2VyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5PTl9MQVJHRV9TQ1JFRU4pKSB7XG4gICAgICAgICAgICAgICAgLy9JZiBkcmF3ZXIgaGFzIE9OX0xBUkdFX1NDUkVFTiBjbGFzcyB0aGVuIGFkZCBpdCB0byB0aGUgZHJhd2VyIHRvZ2dsZSBidXR0b24gYXMgd2VsbC5cbiAgICAgICAgICAgICAgICBkcmF3ZXJCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk9OX0xBUkdFX1NDUkVFTik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZHJhd2VyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5PTl9TTUFMTF9TQ1JFRU4pKSB7XG4gICAgICAgICAgICAgICAgLy9JZiBkcmF3ZXIgaGFzIE9OX1NNQUxMX1NDUkVFTiBjbGFzcyB0aGVuIGFkZCBpdCB0byB0aGUgZHJhd2VyIHRvZ2dsZSBidXR0b24gYXMgd2VsbC5cbiAgICAgICAgICAgICAgICBkcmF3ZXJCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk9OX1NNQUxMX1NDUkVFTik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkcmF3ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRyYXdlclRvZ2dsZUhhbmRsZXJfLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgLy8gQWRkIGEgY2xhc3MgaWYgdGhlIGxheW91dCBoYXMgYSBkcmF3ZXIsIGZvciBhbHRlcmluZyB0aGUgbGVmdCBwYWRkaW5nLlxuICAgICAgICAgICAgLy8gQWRkcyB0aGUgSEFTX0RSQVdFUiB0byB0aGUgZWxlbWVudHMgc2luY2UgdGhpcy5oZWFkZXJfIG1heSBvciBtYXlcbiAgICAgICAgICAgIC8vIG5vdCBiZSBwcmVzZW50LlxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSEFTX0RSQVdFUik7XG4gICAgICAgICAgICB0aGlzLmRyYXdlcl8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIGVhdEV2ZW50KTtcbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSBmaXhlZCBoZWFkZXIsIGFkZCB0aGUgYnV0dG9uIHRvIHRoZSBoZWFkZXIgcmF0aGVyIHRoYW5cbiAgICAgICAgICAgIC8vIHRoZSBsYXlvdXQuXG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5GSVhFRF9IRUFERVIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJfLmluc2VydEJlZm9yZShkcmF3ZXJCdXR0b24sIHRoaXMuaGVhZGVyXy5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5pbnNlcnRCZWZvcmUoZHJhd2VyQnV0dG9uLCB0aGlzLmNvbnRlbnRfKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvYmZ1c2NhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBvYmZ1c2NhdG9yLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5PQkZVU0NBVE9SKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQob2JmdXNjYXRvcik7XG4gICAgICAgICAgICBvYmZ1c2NhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kcmF3ZXJUb2dnbGVIYW5kbGVyXy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIG9iZnVzY2F0b3IuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V3aGVlbCcsIGVhdEV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJbml0aWFsaXplIHRhYnMsIGlmIGFueS5cbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyXyAmJiB0aGlzLnRhYkJhcl8pIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkhBU19UQUJTKTtcbiAgICAgICAgICAgIHZhciB0YWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhYkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVEFCX0NPTlRBSU5FUik7XG4gICAgICAgICAgICB0aGlzLmhlYWRlcl8uaW5zZXJ0QmVmb3JlKHRhYkNvbnRhaW5lciwgdGhpcy50YWJCYXJfKTtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyXy5yZW1vdmVDaGlsZCh0aGlzLnRhYkJhcl8pO1xuICAgICAgICAgICAgdmFyIGxlZnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxlZnRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlRBQl9CQVJfQlVUVE9OKTtcbiAgICAgICAgICAgIGxlZnRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlRBQl9CQVJfTEVGVF9CVVRUT04pO1xuICAgICAgICAgICAgdmFyIGxlZnRCdXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgbGVmdEJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklDT04pO1xuICAgICAgICAgICAgbGVmdEJ1dHRvbkljb24udGV4dENvbnRlbnQgPSB0aGlzLkNvbnN0YW50Xy5DSEVWUk9OX0xFRlQ7XG4gICAgICAgICAgICBsZWZ0QnV0dG9uLmFwcGVuZENoaWxkKGxlZnRCdXR0b25JY29uKTtcbiAgICAgICAgICAgIGxlZnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJCYXJfLnNjcm9sbExlZnQgLT0gdGhpcy5Db25zdGFudF8uVEFCX1NDUk9MTF9QSVhFTFM7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdmFyIHJpZ2h0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByaWdodEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVEFCX0JBUl9CVVRUT04pO1xuICAgICAgICAgICAgcmlnaHRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlRBQl9CQVJfUklHSFRfQlVUVE9OKTtcbiAgICAgICAgICAgIHZhciByaWdodEJ1dHRvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICAgICByaWdodEJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklDT04pO1xuICAgICAgICAgICAgcmlnaHRCdXR0b25JY29uLnRleHRDb250ZW50ID0gdGhpcy5Db25zdGFudF8uQ0hFVlJPTl9SSUdIVDtcbiAgICAgICAgICAgIHJpZ2h0QnV0dG9uLmFwcGVuZENoaWxkKHJpZ2h0QnV0dG9uSWNvbik7XG4gICAgICAgICAgICByaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYkJhcl8uc2Nyb2xsTGVmdCArPSB0aGlzLkNvbnN0YW50Xy5UQUJfU0NST0xMX1BJWEVMUztcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdEJ1dHRvbik7XG4gICAgICAgICAgICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50YWJCYXJfKTtcbiAgICAgICAgICAgIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodEJ1dHRvbik7XG4gICAgICAgICAgICAvLyBBZGQgYW5kIHJlbW92ZSBidXR0b25zIGRlcGVuZGluZyBvbiBzY3JvbGwgcG9zaXRpb24uXG4gICAgICAgICAgICB2YXIgdGFiU2Nyb2xsSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YWJCYXJfLnNjcm9sbExlZnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0FDVElWRSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQUNUSVZFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFiQmFyXy5zY3JvbGxMZWZ0IDwgdGhpcy50YWJCYXJfLnNjcm9sbFdpZHRoIC0gdGhpcy50YWJCYXJfLm9mZnNldFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19BQ1RJVkUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19BQ1RJVkUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMudGFiQmFyXy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0YWJTY3JvbGxIYW5kbGVyKTtcbiAgICAgICAgICAgIHRhYlNjcm9sbEhhbmRsZXIoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYkJhcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSlNfUklQUExFX0VGRkVDVCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYkJhcl8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9JR05PUkVfRVZFTlRTKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNlbGVjdCBlbGVtZW50IHRhYnMsIGRvY3VtZW50IHBhbmVsc1xuICAgICAgICAgICAgdmFyIHRhYnMgPSB0aGlzLnRhYkJhcl8ucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLkNzc0NsYXNzZXNfLlRBQik7XG4gICAgICAgICAgICB2YXIgcGFuZWxzID0gdGhpcy5jb250ZW50Xy5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uUEFORUwpO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyB0YWJzIGZvciBlYWNoIHRhYiBlbGVtZW50XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBuZXcgTWF0ZXJpYWxMYXlvdXRUYWIodGFic1tpXSwgdGFicywgcGFuZWxzLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19VUEdSQURFRCk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgYW4gaW5kaXZpZHVhbCB0YWIuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWIgVGhlIEhUTUwgZWxlbWVudCBmb3IgdGhlIHRhYi5cbiAgICogQHBhcmFtIHshQXJyYXk8SFRNTEVsZW1lbnQ+fSB0YWJzIEFycmF5IHdpdGggSFRNTCBlbGVtZW50cyBmb3IgYWxsIHRhYnMuXG4gICAqIEBwYXJhbSB7IUFycmF5PEhUTUxFbGVtZW50Pn0gcGFuZWxzIEFycmF5IHdpdGggSFRNTCBlbGVtZW50cyBmb3IgYWxsIHBhbmVscy5cbiAgICogQHBhcmFtIHtNYXRlcmlhbExheW91dH0gbGF5b3V0IFRoZSBNYXRlcmlhbExheW91dCBvYmplY3QgdGhhdCBvd25zIHRoZSB0YWIuXG4gICAqL1xuZnVuY3Rpb24gTWF0ZXJpYWxMYXlvdXRUYWIodGFiLCB0YWJzLCBwYW5lbHMsIGxheW91dCkge1xuICAgIGlmICh0YWIpIHtcbiAgICAgICAgaWYgKGxheW91dC50YWJCYXJfLmNsYXNzTGlzdC5jb250YWlucyhsYXlvdXQuQ3NzQ2xhc3Nlc18uSlNfUklQUExFX0VGRkVDVCkpIHtcbiAgICAgICAgICAgIHZhciByaXBwbGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICByaXBwbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChsYXlvdXQuQ3NzQ2xhc3Nlc18uUklQUExFX0NPTlRBSU5FUik7XG4gICAgICAgICAgICByaXBwbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChsYXlvdXQuQ3NzQ2xhc3Nlc18uSlNfUklQUExFX0VGRkVDVCk7XG4gICAgICAgICAgICB2YXIgcmlwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmlwcGxlLmNsYXNzTGlzdC5hZGQobGF5b3V0LkNzc0NsYXNzZXNfLlJJUFBMRSk7XG4gICAgICAgICAgICByaXBwbGVDb250YWluZXIuYXBwZW5kQ2hpbGQocmlwcGxlKTtcbiAgICAgICAgICAgIHRhYi5hcHBlbmRDaGlsZChyaXBwbGVDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgaHJlZiA9IHRhYi5ocmVmLnNwbGl0KCcjJylbMV07XG4gICAgICAgICAgICB2YXIgcGFuZWwgPSBsYXlvdXQuY29udGVudF8ucXVlcnlTZWxlY3RvcignIycgKyBocmVmKTtcbiAgICAgICAgICAgIGxheW91dC5yZXNldFRhYlN0YXRlXyh0YWJzKTtcbiAgICAgICAgICAgIGxheW91dC5yZXNldFBhbmVsU3RhdGVfKHBhbmVscyk7XG4gICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZChsYXlvdXQuQ3NzQ2xhc3Nlc18uSVNfQUNUSVZFKTtcbiAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQobGF5b3V0LkNzc0NsYXNzZXNfLklTX0FDVElWRSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbExheW91dCxcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxMYXlvdXQnLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLWxheW91dCdcbn0pO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIERhdGEgVGFibGUgQ2FyZCBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsRGF0YVRhYmxlID0gZnVuY3Rpb24gTWF0ZXJpYWxEYXRhVGFibGUoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbERhdGFUYWJsZSddID0gTWF0ZXJpYWxEYXRhVGFibGU7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbERhdGFUYWJsZS5wcm90b3R5cGUuQ29uc3RhbnRfID0ge307XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbERhdGFUYWJsZS5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgREFUQV9UQUJMRTogJ21kbC1kYXRhLXRhYmxlJyxcbiAgICBTRUxFQ1RBQkxFOiAnbWRsLWRhdGEtdGFibGUtLXNlbGVjdGFibGUnLFxuICAgIElTX1NFTEVDVEVEOiAnaXMtc2VsZWN0ZWQnLFxuICAgIElTX1VQR1JBREVEOiAnaXMtdXBncmFkZWQnXG59O1xuLyoqXG4gICAqIEdlbmVyYXRlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgdG9nZ2xlcyB0aGUgc2VsZWN0aW9uIHN0YXRlIG9mIGFcbiAgICogc2luZ2xlIHJvdyAob3IgbXVsdGlwbGUgcm93cykuXG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gY2hlY2tib3ggQ2hlY2tib3ggdGhhdCB0b2dnbGVzIHRoZSBzZWxlY3Rpb24gc3RhdGUuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJvdyBSb3cgdG8gdG9nZ2xlIHdoZW4gY2hlY2tib3ggY2hhbmdlcy5cbiAgICogQHBhcmFtIHsoQXJyYXk8T2JqZWN0PnxOb2RlTGlzdCk9fSBvcHRfcm93cyBSb3dzIHRvIHRvZ2dsZSB3aGVuIGNoZWNrYm94IGNoYW5nZXMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxEYXRhVGFibGUucHJvdG90eXBlLnNlbGVjdFJvd18gPSBmdW5jdGlvbiAoY2hlY2tib3gsIHJvdywgb3B0X3Jvd3MpIHtcbiAgICBpZiAocm93KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfU0VMRUNURUQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3cuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX1NFTEVDVEVEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBpZiAob3B0X3Jvd3MpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIGVsO1xuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgb3B0X3Jvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZWwgPSBvcHRfcm93c1tpXS5xdWVyeVNlbGVjdG9yKCd0ZCcpLnF1ZXJ5U2VsZWN0b3IoJy5tZGwtY2hlY2tib3gnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxbJ01hdGVyaWFsQ2hlY2tib3gnXS5jaGVjaygpO1xuICAgICAgICAgICAgICAgICAgICBvcHRfcm93c1tpXS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfU0VMRUNURUQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG9wdF9yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsID0gb3B0X3Jvd3NbaV0ucXVlcnlTZWxlY3RvcigndGQnKS5xdWVyeVNlbGVjdG9yKCcubWRsLWNoZWNrYm94Jyk7XG4gICAgICAgICAgICAgICAgICAgIGVsWydNYXRlcmlhbENoZWNrYm94J10udW5jaGVjaygpO1xuICAgICAgICAgICAgICAgICAgICBvcHRfcm93c1tpXS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfU0VMRUNURUQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpO1xuICAgIH1cbn07XG4vKipcbiAgICogQ3JlYXRlcyBhIGNoZWNrYm94IGZvciBhIHNpbmdsZSBvciBvciBtdWx0aXBsZSByb3dzIGFuZCBob29rcyB1cCB0aGVcbiAgICogZXZlbnQgaGFuZGxpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJvdyBSb3cgdG8gdG9nZ2xlIHdoZW4gY2hlY2tib3ggY2hhbmdlcy5cbiAgICogQHBhcmFtIHsoQXJyYXk8T2JqZWN0PnxOb2RlTGlzdCk9fSBvcHRfcm93cyBSb3dzIHRvIHRvZ2dsZSB3aGVuIGNoZWNrYm94IGNoYW5nZXMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxEYXRhVGFibGUucHJvdG90eXBlLmNyZWF0ZUNoZWNrYm94XyA9IGZ1bmN0aW9uIChyb3csIG9wdF9yb3dzKSB7XG4gICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdtZGwtY2hlY2tib3gnKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdtZGwtanMtY2hlY2tib3gnKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdtZGwtanMtcmlwcGxlLWVmZmVjdCcpO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ21kbC1kYXRhLXRhYmxlX19zZWxlY3QnKTtcbiAgICB2YXIgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ21kbC1jaGVja2JveF9faW5wdXQnKTtcbiAgICBpZiAocm93KSB7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuc2VsZWN0Um93XyhjaGVja2JveCwgcm93KSk7XG4gICAgfSBlbHNlIGlmIChvcHRfcm93cykge1xuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnNlbGVjdFJvd18oY2hlY2tib3gsIG51bGwsIG9wdF9yb3dzKSk7XG4gICAgfVxuICAgIGxhYmVsLmFwcGVuZENoaWxkKGNoZWNrYm94KTtcbiAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVFbGVtZW50KGxhYmVsLCAnTWF0ZXJpYWxDaGVja2JveCcpO1xuICAgIHJldHVybiBsYWJlbDtcbn07XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsRGF0YVRhYmxlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIHZhciBmaXJzdEhlYWRlciA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcigndGgnKTtcbiAgICAgICAgdmFyIHJvd3MgPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJ3Rib2R5JykucXVlcnlTZWxlY3RvckFsbCgndHInKTtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uU0VMRUNUQUJMRSkpIHtcbiAgICAgICAgICAgIHZhciB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICB2YXIgaGVhZGVyQ2hlY2tib3ggPSB0aGlzLmNyZWF0ZUNoZWNrYm94XyhudWxsLCByb3dzKTtcbiAgICAgICAgICAgIHRoLmFwcGVuZENoaWxkKGhlYWRlckNoZWNrYm94KTtcbiAgICAgICAgICAgIGZpcnN0SGVhZGVyLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoLCBmaXJzdEhlYWRlcik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZmlyc3RDZWxsID0gcm93c1tpXS5xdWVyeVNlbGVjdG9yKCd0ZCcpO1xuICAgICAgICAgICAgICAgIGlmIChmaXJzdENlbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvd0NoZWNrYm94ID0gdGhpcy5jcmVhdGVDaGVja2JveF8ocm93c1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIHRkLmFwcGVuZENoaWxkKHJvd0NoZWNrYm94KTtcbiAgICAgICAgICAgICAgICAgICAgcm93c1tpXS5pbnNlcnRCZWZvcmUodGQsIGZpcnN0Q2VsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX1VQR1JBREVEKTtcbiAgICB9XG59O1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsRGF0YVRhYmxlLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbERhdGFUYWJsZScsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtZGF0YS10YWJsZSdcbn0pO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIFJpcHBsZSBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsUmlwcGxlID0gZnVuY3Rpb24gTWF0ZXJpYWxSaXBwbGUoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbFJpcHBsZSddID0gTWF0ZXJpYWxSaXBwbGU7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFJpcHBsZS5wcm90b3R5cGUuQ29uc3RhbnRfID0ge1xuICAgIElOSVRJQUxfU0NBTEU6ICdzY2FsZSgwLjAwMDEsIDAuMDAwMSknLFxuICAgIElOSVRJQUxfU0laRTogJzFweCcsXG4gICAgSU5JVElBTF9PUEFDSVRZOiAnMC40JyxcbiAgICBGSU5BTF9PUEFDSVRZOiAnMCcsXG4gICAgRklOQUxfU0NBTEU6ICcnXG59O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSaXBwbGUucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIFJJUFBMRV9DRU5URVI6ICdtZGwtcmlwcGxlLS1jZW50ZXInLFxuICAgIFJJUFBMRV9FRkZFQ1RfSUdOT1JFX0VWRU5UUzogJ21kbC1qcy1yaXBwbGUtZWZmZWN0LS1pZ25vcmUtZXZlbnRzJyxcbiAgICBSSVBQTEU6ICdtZGwtcmlwcGxlJyxcbiAgICBJU19BTklNQVRJTkc6ICdpcy1hbmltYXRpbmcnLFxuICAgIElTX1ZJU0lCTEU6ICdpcy12aXNpYmxlJ1xufTtcbi8qKlxuICAgKiBIYW5kbGUgbW91c2UgLyBmaW5nZXIgZG93biBvbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFJpcHBsZS5wcm90b3R5cGUuZG93bkhhbmRsZXJfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnJpcHBsZUVsZW1lbnRfLnN0eWxlLndpZHRoICYmICF0aGlzLnJpcHBsZUVsZW1lbnRfLnN0eWxlLmhlaWdodCkge1xuICAgICAgICB2YXIgcmVjdCA9IHRoaXMuZWxlbWVudF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHRoaXMuYm91bmRIZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgICAgICAgdGhpcy5ib3VuZFdpZHRoID0gcmVjdC53aWR0aDtcbiAgICAgICAgdGhpcy5yaXBwbGVTaXplXyA9IE1hdGguc3FydChyZWN0LndpZHRoICogcmVjdC53aWR0aCArIHJlY3QuaGVpZ2h0ICogcmVjdC5oZWlnaHQpICogMiArIDI7XG4gICAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8uc3R5bGUud2lkdGggPSB0aGlzLnJpcHBsZVNpemVfICsgJ3B4JztcbiAgICAgICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5zdHlsZS5oZWlnaHQgPSB0aGlzLnJpcHBsZVNpemVfICsgJ3B4JztcbiAgICB9XG4gICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVklTSUJMRSk7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIHRoaXMuaWdub3JpbmdNb3VzZURvd25fKSB7XG4gICAgICAgIHRoaXMuaWdub3JpbmdNb3VzZURvd25fID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgICAgICAgdGhpcy5pZ25vcmluZ01vdXNlRG93bl8gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmcmFtZUNvdW50ID0gdGhpcy5nZXRGcmFtZUNvdW50KCk7XG4gICAgICAgIGlmIChmcmFtZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RnJhbWVDb3VudCgxKTtcbiAgICAgICAgdmFyIGJvdW5kID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIHg7XG4gICAgICAgIHZhciB5O1xuICAgICAgICAvLyBDaGVjayBpZiB3ZSBhcmUgaGFuZGxpbmcgYSBrZXlib2FyZCBjbGljay5cbiAgICAgICAgaWYgKGV2ZW50LmNsaWVudFggPT09IDAgJiYgZXZlbnQuY2xpZW50WSA9PT0gMCkge1xuICAgICAgICAgICAgeCA9IE1hdGgucm91bmQoYm91bmQud2lkdGggLyAyKTtcbiAgICAgICAgICAgIHkgPSBNYXRoLnJvdW5kKGJvdW5kLmhlaWdodCAvIDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGNsaWVudFggPSBldmVudC5jbGllbnRYID8gZXZlbnQuY2xpZW50WCA6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgIHZhciBjbGllbnRZID0gZXZlbnQuY2xpZW50WSA/IGV2ZW50LmNsaWVudFkgOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgICAgICB4ID0gTWF0aC5yb3VuZChjbGllbnRYIC0gYm91bmQubGVmdCk7XG4gICAgICAgICAgICB5ID0gTWF0aC5yb3VuZChjbGllbnRZIC0gYm91bmQudG9wKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFJpcHBsZVhZKHgsIHkpO1xuICAgICAgICB0aGlzLnNldFJpcHBsZVN0eWxlcyh0cnVlKTtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1GcmFtZUhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBIYW5kbGUgbW91c2UgLyBmaW5nZXIgdXAgb24gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSaXBwbGUucHJvdG90eXBlLnVwSGFuZGxlcl8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBEb24ndCBmaXJlIGZvciB0aGUgYXJ0aWZpY2lhbCBcIm1vdXNldXBcIiBnZW5lcmF0ZWQgYnkgYSBkb3VibGUtY2xpY2suXG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LmRldGFpbCAhPT0gMikge1xuICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19WSVNJQkxFKTtcbiAgICB9XG4gICAgLy8gQWxsb3cgYSByZXBhaW50IHRvIG9jY3VyIGJlZm9yZSByZW1vdmluZyB0aGlzIGNsYXNzLCBzbyB0aGUgYW5pbWF0aW9uXG4gICAgLy8gc2hvd3MgZm9yIHRhcCBldmVudHMsIHdoaWNoIHNlZW0gdG8gdHJpZ2dlciBhIG1vdXNldXAgdG9vIHNvb24gYWZ0ZXJcbiAgICAvLyBtb3VzZWRvd24uXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19WSVNJQkxFKTtcbiAgICB9LmJpbmQodGhpcyksIDApO1xufTtcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxSaXBwbGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgdmFyIHJlY2VudGVyaW5nID0gdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfQ0VOVEVSKTtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9FRkZFQ1RfSUdOT1JFX0VWRU5UUykpIHtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8gPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEUpO1xuICAgICAgICAgICAgdGhpcy5mcmFtZUNvdW50XyA9IDA7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZVNpemVfID0gMDtcbiAgICAgICAgICAgIHRoaXMueF8gPSAwO1xuICAgICAgICAgICAgdGhpcy55XyA9IDA7XG4gICAgICAgICAgICAvLyBUb3VjaCBzdGFydCBwcm9kdWNlcyBhIGNvbXBhdCBtb3VzZSBkb3duIGV2ZW50LCB3aGljaCB3b3VsZCBjYXVzZSBhXG4gICAgICAgICAgICAvLyBzZWNvbmQgcmlwcGxlcy4gVG8gYXZvaWQgdGhhdCwgd2UgdXNlIHRoaXMgcHJvcGVydHkgdG8gaWdub3JlIHRoZSBmaXJzdFxuICAgICAgICAgICAgLy8gbW91c2UgZG93biBhZnRlciBhIHRvdWNoIHN0YXJ0LlxuICAgICAgICAgICAgdGhpcy5pZ25vcmluZ01vdXNlRG93bl8gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYm91bmREb3duSGFuZGxlciA9IHRoaXMuZG93bkhhbmRsZXJfLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuYm91bmREb3duSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmJvdW5kRG93bkhhbmRsZXIpO1xuICAgICAgICAgICAgdGhpcy5ib3VuZFVwSGFuZGxlciA9IHRoaXMudXBIYW5kbGVyXy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZFVwSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmJvdW5kVXBIYW5kbGVyKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmJvdW5kVXBIYW5kbGVyKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuYm91bmRVcEhhbmRsZXIpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHRlciBmb3IgZnJhbWVDb3VudF8uXG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn0gdGhlIGZyYW1lIGNvdW50LlxuICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuZ2V0RnJhbWVDb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mcmFtZUNvdW50XztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICogU2V0dGVyIGZvciBmcmFtZUNvdW50Xy5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGZDIHRoZSBmcmFtZSBjb3VudC5cbiAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnNldEZyYW1lQ291bnQgPSBmdW5jdGlvbiAoZkMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lQ291bnRfID0gZkM7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHRlciBmb3IgcmlwcGxlRWxlbWVudF8uXG4gICAgICAgICAqIEByZXR1cm4ge0VsZW1lbnR9IHRoZSByaXBwbGUgZWxlbWVudC5cbiAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmdldFJpcHBsZUVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmlwcGxlRWxlbWVudF87XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIHJpcHBsZSBYIGFuZCBZIGNvb3JkaW5hdGVzLlxuICAgICAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IG5ld1ggdGhlIG5ldyBYIGNvb3JkaW5hdGVcbiAgICAgICAgICogQHBhcmFtICB7bnVtYmVyfSBuZXdZIHRoZSBuZXcgWSBjb29yZGluYXRlXG4gICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5zZXRSaXBwbGVYWSA9IGZ1bmN0aW9uIChuZXdYLCBuZXdZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54XyA9IG5ld1g7XG4gICAgICAgICAgICAgICAgdGhpcy55XyA9IG5ld1k7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIHJpcHBsZSBzdHlsZXMuXG4gICAgICAgICAqIEBwYXJhbSAge2Jvb2xlYW59IHN0YXJ0IHdoZXRoZXIgb3Igbm90IHRoaXMgaXMgdGhlIHN0YXJ0IGZyYW1lLlxuICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuc2V0UmlwcGxlU3R5bGVzID0gZnVuY3Rpb24gKHN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmlwcGxlRWxlbWVudF8gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyYW5zZm9ybVN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9ICd0cmFuc2xhdGUoJyArIHRoaXMueF8gKyAncHgsICcgKyB0aGlzLnlfICsgJ3B4KSc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGUgPSB0aGlzLkNvbnN0YW50Xy5JTklUSUFMX1NDQUxFO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IHRoaXMuQ29uc3RhbnRfLklOSVRJQUxfU0laRTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlID0gdGhpcy5Db25zdGFudF8uRklOQUxfU0NBTEU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplID0gdGhpcy5yaXBwbGVTaXplXyArICdweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjZW50ZXJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSAndHJhbnNsYXRlKCcgKyB0aGlzLmJvdW5kV2lkdGggLyAyICsgJ3B4LCAnICsgdGhpcy5ib3VuZEhlaWdodCAvIDIgKyAncHgpJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgPSAndHJhbnNsYXRlKC01MCUsIC01MCUpICcgKyBvZmZzZXQgKyBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8uc3R5bGUubXNUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8uc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0FOSU1BVElORyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19BTklNQVRJTkcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgKiBIYW5kbGVzIGFuIGFuaW1hdGlvbiBmcmFtZS5cbiAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmFuaW1GcmFtZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWVDb3VudF8tLSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1GcmFtZUhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRSaXBwbGVTdHlsZXMoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gICAqIERvd25ncmFkZSB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSaXBwbGUucHJvdG90eXBlLm1kbERvd25ncmFkZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmJvdW5kRG93bkhhbmRsZXIpO1xuICAgIHRoaXMuZWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuYm91bmREb3duSGFuZGxlcik7XG4gICAgdGhpcy5lbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZFVwSGFuZGxlcik7XG4gICAgdGhpcy5lbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5ib3VuZFVwSGFuZGxlcik7XG4gICAgdGhpcy5lbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuYm91bmRVcEhhbmRsZXIpO1xuICAgIHRoaXMuZWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuYm91bmRVcEhhbmRsZXIpO1xufTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbFJpcHBsZSxcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxSaXBwbGUnLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QnLFxuICAgIHdpZGdldDogZmFsc2Vcbn0pO1xufSgpKTtcbiJdfQ==
