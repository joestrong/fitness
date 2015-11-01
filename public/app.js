(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require("../../node_modules/material-design-lite/dist/material.js");

var _controllersAppControllerJs = require("./controllers/AppController.js");

var _controllersAppControllerJs2 = _interopRequireDefault(_controllersAppControllerJs);

new _controllersAppControllerJs2["default"]();

},{"../../node_modules/material-design-lite/dist/material.js":9,"./controllers/AppController.js":2}],2:[function(require,module,exports){
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

var _ExercisesControllerJs = require("./ExercisesController.js");

var _ExercisesControllerJs2 = _interopRequireDefault(_ExercisesControllerJs);

var _ScheduleControllerJs = require("./ScheduleController.js");

var _ScheduleControllerJs2 = _interopRequireDefault(_ScheduleControllerJs);

var AppController = function AppController() {
    _classCallCheck(this, AppController);

    var navigation = new _NavigationControllerJs2["default"]();
    navigation.add('Overview', new _OverviewControllerJs2["default"](), true);
    navigation.add('Exercises', new _ExercisesControllerJs2["default"]());
    navigation.add('Schedule', new _ScheduleControllerJs2["default"]());
};

exports["default"] = AppController;
module.exports = exports["default"];

},{"./ExercisesController.js":3,"./NavigationController.js":4,"./OverviewController.js":5,"./ScheduleController.js":6}],3:[function(require,module,exports){
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

var ExercisesController = (function (_ViewController) {
    _inherits(ExercisesController, _ViewController);

    function ExercisesController() {
        var _this = this;

        _classCallCheck(this, ExercisesController);

        _get(Object.getPrototypeOf(ExercisesController.prototype), "constructor", this).call(this, document.querySelector('#exercises'));

        this.listEl = this.container.querySelector('.exercise-table tbody');
        this.listEl.addEventListener('click', function (event) {
            if (event.target.classList.contains('deleteExercise')) {
                _this.deleteExercise(event.target);
            }
        });
        this.populateExerciseList();

        this.dialog = document.querySelector('#add-exercise-dialog');
        this.addExerciseName = this.dialog.querySelector('#add-exercise-name');
        this.addExerciseReps = this.dialog.querySelector('#add-exercise-reps');
        this.addExerciseRest = this.dialog.querySelector('#add-exercise-rest');
        this.dialogButtons = this.dialog.querySelector('.mdl-dialog__actions').querySelectorAll('.mdl-button');
        this.dialogButtons[0].addEventListener('click', function () {
            return _this.addExercise();
        });
        this.dialogButtons[1].addEventListener('click', function () {
            return _this.closeAddExerciseDialog();
        });

        this.addExerciseButton = document.querySelector('#add-exercise-button');
        this.addExerciseButton.addEventListener('click', function () {
            return _this.showAddExerciseDialog();
        });
    }

    /**
     * Shows the Add Exercise dialog
     */

    _createClass(ExercisesController, [{
        key: "showAddExerciseDialog",
        value: function showAddExerciseDialog() {
            this.dialog.MaterialDialog.show();
            this.addExerciseName.focus();
        }

        /**
         * Closes the Add Exercise dialog
         */
    }, {
        key: "closeAddExerciseDialog",
        value: function closeAddExerciseDialog() {
            this.dialog.MaterialDialog.close();
        }

        /**
         * Adds a new exercise
         */
    }, {
        key: "addExercise",
        value: function addExercise() {
            var name = this.addExerciseName.value;
            var reps = this.addExerciseReps.value;
            var rest = this.addExerciseRest.value;
            this.addExerciseName.value = "";
            this.addExerciseReps.value = "3";
            this.addExerciseRest.value = "2";
            var exercise = _modelsExerciseJs2["default"].add(name, reps, rest);
            this.addExerciseToDom(exercise);
            this.closeAddExerciseDialog();
        }

        /**
         * Adds an exercise to the exercise list element in the dom
         * @param name
         * @param reps
         */
    }, {
        key: "addExerciseToDom",
        value: function addExerciseToDom(exercise) {
            var row = document.createElement("tr");
            row.setAttribute('data-id', exercise.id);

            var nameCol = document.createElement("td");
            nameCol.textContent = exercise.name;
            nameCol.className = "mdl-data-table__cell--non-numeric";

            var repsCol = document.createElement("td");
            repsCol.textContent = exercise.reps;

            var restCol = document.createElement("td");
            restCol.textContent = exercise.rest;

            var deleteCol = document.createElement("td");
            var deleteIcon = document.createElement("i");
            deleteIcon.className = "deleteExercise material-icons";
            deleteIcon.textContent = "delete";
            deleteCol.appendChild(deleteIcon);

            row.appendChild(nameCol);
            row.appendChild(repsCol);
            row.appendChild(restCol);
            row.appendChild(deleteCol);
            this.listEl.appendChild(row);
        }

        /**
         * Populates the exercise list from local data
         */
    }, {
        key: "populateExerciseList",
        value: function populateExerciseList() {
            this.clearExercisesFromDom();
            var exercises = _modelsExerciseJs2["default"].get();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = exercises[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var exercise = _step.value;

                    this.addExerciseToDom(exercise);
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

        /**
         * Delete exercise
         */
    }, {
        key: "deleteExercise",
        value: function deleteExercise(element) {
            var rowToRemove = element.parentNode.parentNode;
            this.listEl.removeChild(rowToRemove);
            var idToRemove = rowToRemove.getAttribute('data-id');
            _modelsExerciseJs2["default"]["delete"](idToRemove);
        }

        /**
         * Clears the exercise list
         */
    }, {
        key: "clearExercisesFromDom",
        value: function clearExercisesFromDom() {
            this.listEl.innerHTML = '';
        }
    }]);

    return ExercisesController;
})(_ViewControllerJs2["default"]);

exports["default"] = ExercisesController;
module.exports = exports["default"];

},{"../models/Exercise.js":8,"./ViewController.js":7}],4:[function(require,module,exports){
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

},{"./ViewController.js":7}],5:[function(require,module,exports){
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

        this.listEl = this.container.querySelector('.exercise-table tbody');
        this.listEl.addEventListener('click', function (event) {
            if (event.target.classList.contains('completeButton')) {
                _this.completeExercise(event.target);
            }
        });
        this.populateExerciseList();
    }

    /**
     * Mark an exercise as complete in the exercises table
     * @param element
     */

    _createClass(OverviewController, [{
        key: "completeExercise",
        value: function completeExercise(element) {
            var rowElement = element.parentNode.parentNode;
            var completeId = rowElement.getAttribute('data-id');
            _modelsExerciseJs2["default"].update(completeId, {
                lastComplete: Date.now()
            });
            this.populateExerciseList();
        }

        /**
         * Populates the overview exercise list with exercises due
         */
    }, {
        key: "populateExerciseList",
        value: function populateExerciseList() {
            this.clearExercisesFromDom();
            var exercises = _modelsExerciseJs2["default"].query(function (exercise) {
                var dayCompleted = new Date(exercise.lastComplete).setHours(0, 0, 0, 0);
                var restTime = (parseInt(exercise.rest) + 1) * 24 * 60 * 60 * 1000;
                return dayCompleted < Date.now() - restTime || typeof exercise.lastComplete === 'undefined';
            });
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = exercises[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var exercise = _step.value;

                    this.addExerciseToDom(exercise);
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

        /**
         * Adds an exercise to the exercise list element in the dom
         * @param name
         * @param reps
         */
    }, {
        key: "addExerciseToDom",
        value: function addExerciseToDom(exercise) {
            var row = document.createElement("tr");
            row.setAttribute('data-id', exercise.id);

            var nameCol = document.createElement("td");
            nameCol.textContent = exercise.name;
            nameCol.className = "mdl-data-table__cell--non-numeric";

            var repsCol = document.createElement("td");
            repsCol.textContent = exercise.reps;

            var completeCol = document.createElement("td");
            var completeButton = document.createElement("button");
            completeButton.className = 'completeButton mdl-button mdl-button--primary';
            completeButton.textContent = 'Complete';
            completeCol.appendChild(completeButton);

            row.appendChild(nameCol);
            row.appendChild(repsCol);
            row.appendChild(completeCol);
            this.listEl.appendChild(row);
        }

        /**
         * Clears the exercise list
         */
    }, {
        key: "clearExercisesFromDom",
        value: function clearExercisesFromDom() {
            this.listEl.innerHTML = '';
        }
    }]);

    return OverviewController;
})(_ViewControllerJs2["default"]);

exports["default"] = OverviewController;
module.exports = exports["default"];

},{"../models/Exercise.js":8,"./ViewController.js":7}],6:[function(require,module,exports){
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

},{"./ViewController.js":7}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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
        value: function add(name, reps, rest) {
            var exercises = this.get();
            var exercise = {
                id: this.getNewId(),
                name: name,
                reps: parseInt(reps),
                rest: parseInt(rest)
            };
            exercises.push(exercise);
            localStorage.setItem('exercises', JSON.stringify(exercises));
            return exercise;
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

        /**
         * Get the next id to use when adding a record
         * @returns {*}
         */
    }, {
        key: 'getNewId',
        value: function getNewId() {
            var exercises = this.get();
            var lastId = exercises.reduce(function (last, exercise) {
                return Math.max(last, exercise.id);
            }, 0);
            return lastId + 1;
        }

        /**
         * Delete record matching id
         * @param id
         */
    }, {
        key: 'delete',
        value: function _delete(id) {
            var exercises = this.get();
            exercises = exercises.filter(function (exercise) {
                return exercise.id != id;
            });
            localStorage.setItem('exercises', JSON.stringify(exercises));
        }

        /**
         * Update record matching id, replacing keys mentioned in changeData
         * @param id
         * @param changeData
         */
    }, {
        key: 'update',
        value: function update(id, changeData) {
            var exercises = this.get();
            exercises = exercises.map(function (exercise) {
                if (exercise.id == id) {
                    for (var attribute in changeData) {
                        if (changeData.hasOwnProperty(attribute)) {
                            exercise[attribute] = changeData[attribute];
                        }
                    }
                }
                return exercise;
            });
            localStorage.setItem('exercises', JSON.stringify(exercises));
        }

        /**
         * Get records where match criteria
         * @param property
         * @param operator
         * @param value
         */
    }, {
        key: 'where',
        value: function where(property, operator, value) {
            var exercises = this.get();
            exercises = exercises.filter(function (exercise) {
                var field = exercise[property];
                var greaterThan = operator == '>' && field > value;
                var lessThan = operator == '<' && field < value;
                var equalTo = operator == '=' && field == value;
                return greaterThan || lessThan || equalTo;
            });
            return exercises;
        }

        /**
         * Gets records based on custom query method
         * @param queryMethod
         */
    }, {
        key: 'query',
        value: function query(queryMethod) {
            var exercises = this.get();
            exercises = exercises.filter(queryMethod);
            return exercises;
        }
    }]);

    return Exercise;
})();

exports['default'] = Exercise;
module.exports = exports['default'];

},{}],9:[function(require,module,exports){
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
   * Class constructor for Dialog MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @constructor
   * @param {HTMLElement} element The element that will be upgraded.
   */
var MaterialDialog = function MaterialDialog(element) {
    this.element_ = element;
};
window['MaterialDialog'] = MaterialDialog;
/**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */
MaterialDialog.prototype.cssClasses_ = { BACKDROP: 'mdl-dialog-backdrop' };
/**
  * Internal method for showing the dialog.
  *
  * @private
  */
MaterialDialog.prototype.showInternal_ = function (backdrop) {
    if (backdrop === undefined) {
        throw Error('You must provide whether or not to show the backdrop.');
    }
    if (this.element_.hasAttribute('open')) {
        return;
    }
    if (backdrop) {
        this.createBackdrop_();
    }
    this.element_.setAttribute('open', true);
};
/**
  * Internal method to create a modal backdrop.
  *
  * @private
  */
MaterialDialog.prototype.createBackdrop_ = function () {
    this.backdropElement_ = document.createElement('div');
    this.backdropElement_.classList.add(this.cssClasses_.BACKDROP);
    document.body.appendChild(this.backdropElement_);
};
/**
  * Show the dialog.
  *
  * @public
  */
MaterialDialog.prototype.show = function () {
    this.showInternal_(false);
};
MaterialDialog.prototype['show'] = MaterialDialog.prototype.show;
/**
  * Show the dialog as a modal.
  *
  * @public
  */
MaterialDialog.prototype.showModal = function () {
    this.showInternal_(true);
};
MaterialDialog.prototype['showModal'] = MaterialDialog.prototype.showModal;
/**
  * Close the dialog.
  *
  * @public
  */
MaterialDialog.prototype.close = function () {
    this.element_.removeAttribute('open');
    if (this.backdropElement_) {
        document.body.removeChild(this.backdropElement_);
        this.backdropElement_ = undefined;
    }
};
MaterialDialog.prototype['close'] = MaterialDialog.prototype.close;
// The component registers itself. It can assume componentHandler is available
// in the global scope.
componentHandler.register({
    constructor: MaterialDialog,
    classAsString: 'MaterialDialog',
    cssClass: 'mdl-js-dialog',
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
        var forElId = this.element_.getAttribute('for') || this.element_.getAttribute('data-mdl-for');
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
   * Class constructor for Snackbar MDL component.
   * Implements MDL component design pattern defined at:
   * https://github.com/jasonmayes/mdl-component-design-pattern
   *
   * @constructor
   * @param {HTMLElement} element The element that will be upgraded.
   */
var MaterialSnackbar = function MaterialSnackbar(element) {
    this.element_ = element;
    this.active = false;
    this.init();
};
window['MaterialSnackbar'] = MaterialSnackbar;
/**
   * Store strings for class names defined by this component that are used in
   * JavaScript. This allows us to simply change it in one place should we
   * decide to modify at a later date.
   *
   * @enum {string}
   * @private
   */
MaterialSnackbar.prototype.cssClasses_ = {
    SNACKBAR: 'mdl-snackbar',
    MESSAGE: 'mdl-snackbar__text',
    ACTION: 'mdl-snackbar__action',
    ACTIVE: 'is-active'
};
/**
   * Create the internal snackbar markup.
   *
   * @private
   */
MaterialSnackbar.prototype.createSnackbar_ = function () {
    this.snackbarElement_ = document.createElement('div');
    this.textElement_ = document.createElement('div');
    this.snackbarElement_.classList.add(this.cssClasses_.SNACKBAR);
    this.textElement_.classList.add(this.cssClasses_.MESSAGE);
    this.snackbarElement_.appendChild(this.textElement_);
    this.snackbarElement_.setAttribute('aria-hidden', true);
    if (this.actionHandler_) {
        this.actionElement_ = document.createElement('button');
        this.actionElement_.type = 'button';
        this.actionElement_.classList.add(this.cssClasses_.ACTION);
        this.actionElement_.textContent = this.actionText_;
        this.snackbarElement_.appendChild(this.actionElement_);
        this.actionElement_.addEventListener('click', this.actionHandler_);
    }
    this.element_.appendChild(this.snackbarElement_);
    this.textElement_.textContent = this.message_;
    this.snackbarElement_.classList.add(this.cssClasses_.ACTIVE);
    this.snackbarElement_.setAttribute('aria-hidden', false);
    setTimeout(this.cleanup_.bind(this), this.timeout_);
};
/**
   * Remove the internal snackbar markup.
   *
   * @private
   */
MaterialSnackbar.prototype.removeSnackbar_ = function () {
    if (this.actionElement_ && this.actionElement_.parentNode) {
        this.actionElement_.parentNode.removeChild(this.actionElement_);
    }
    this.textElement_.parentNode.removeChild(this.textElement_);
    this.snackbarElement_.parentNode.removeChild(this.snackbarElement_);
};
/**
   * Create the internal snackbar markup.
   *
   * @param {Object} data The data for the notification.
   * @public
   */
MaterialSnackbar.prototype.showSnackbar = function (data) {
    if (data === undefined) {
        throw new Error('Please provide a data object with at least a message to display.');
    }
    if (data['message'] === undefined) {
        throw new Error('Please provide a message to be displayed.');
    }
    if (data['actionHandler'] && !data['actionText']) {
        throw new Error('Please provide action text with the handler.');
    }
    if (this.active) {
        this.queuedNotifications_.push(data);
    } else {
        this.active = true;
        this.message_ = data['message'];
        if (data['timeout']) {
            this.timeout_ = data['timeout'];
        } else {
            this.timeout_ = 8000;
        }
        if (data['actionHandler']) {
            this.actionHandler_ = data['actionHandler'];
        }
        if (data['actionText']) {
            this.actionText_ = data['actionText'];
        }
        this.createSnackbar_();
    }
};
MaterialSnackbar.prototype['showSnackbar'] = MaterialSnackbar.prototype.showSnackbar;
/**
   * Check if the queue has items within it.
   * If it does, display the next entry.
   *
   * @private
   */
MaterialSnackbar.prototype.checkQueue_ = function () {
    if (this.queuedNotifications_.length > 0) {
        this.showSnackbar(this.queuedNotifications_.shift());
    }
};
/**
   * Cleanup the snackbar event listeners and accessiblity attributes.
   *
   * @private
   */
MaterialSnackbar.prototype.cleanup_ = function () {
    this.snackbarElement_.classList.remove(this.cssClasses_.ACTIVE);
    this.snackbarElement_.setAttribute('aria-hidden', true);
    if (this.actionElement_) {
        this.actionElement_.removeEventListener('click', this.actionHandler_);
    }
    this.setDefaults_();
    this.active = false;
    this.removeSnackbar_();
    this.checkQueue_();
};
/**
   * Clean properties to avoid one entry affecting another.
   *
   * @private
   */
MaterialSnackbar.prototype.setDefaults_ = function () {
    this.actionHandler_ = undefined;
    this.message_ = undefined;
    this.actionText_ = undefined;
};
/**
   * Initialize the object.
   *
   * @public
   */
MaterialSnackbar.prototype.init = function () {
    this.setDefaults_();
    this.queuedNotifications_ = [];
};
MaterialSnackbar.prototype['init'] = MaterialSnackbar.prototype.init;
// The component registers itself. It can assume componentHandler is available
// in the global scope.
componentHandler.register({
    constructor: MaterialSnackbar,
    classAsString: 'MaterialSnackbar',
    cssClass: 'mdl-js-snackbar',
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
   * Handle reset event from out side.
   *
   * @param {Event} event The event that fired.
   * @private
   */
MaterialTextfield.prototype.onReset_ = function (event) {
    this.updateClasses_();
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
    if (this.input_.validity) {
        if (this.input_.validity.valid) {
            this.element_.classList.remove(this.CssClasses_.IS_INVALID);
        } else {
            this.element_.classList.add(this.CssClasses_.IS_INVALID);
        }
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
            this.boundResetHandler = this.onReset_.bind(this);
            this.input_.addEventListener('input', this.boundUpdateClassesHandler);
            this.input_.addEventListener('focus', this.boundFocusHandler);
            this.input_.addEventListener('blur', this.boundBlurHandler);
            this.input_.addEventListener('reset', this.boundResetHandler);
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
    this.input_.removeEventListener('reset', this.boundResetHandler);
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
            this.obfuscator_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN);
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
    this.obfuscator_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN);
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
            this.obfuscator_ = obfuscator;
        }
        // Keep an eye on screen size, and add/remove auxiliary class for styling
        // of small screens.
        this.screenSizeMediaQuery_ = window.matchMedia(this.Constant_.MAX_WIDTH);
        this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this));
        this.screenSizeHandler_();
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
    /**
     * Auxiliary method to programmatically select a tab in the UI.
     */
    function selectTab() {
        var href = tab.href.split('#')[1];
        var panel = layout.content_.querySelector('#' + href);
        layout.resetTabState_(tabs);
        layout.resetPanelState_(panels);
        tab.classList.add(layout.CssClasses_.IS_ACTIVE);
        panel.classList.add(layout.CssClasses_.IS_ACTIVE);
    }
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
            if (tab.getAttribute('href').charAt(0) === '#') {
                e.preventDefault();
                selectTab();
            }
        });
        tab.show = selectTab;
    }
}
window['MaterialLayoutTab'] = MaterialLayoutTab;
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
        checkbox.checked = row.classList.contains(this.CssClasses_.IS_SELECTED);
        checkbox.addEventListener('change', this.selectRow_(checkbox, row));
        if (row.dataset['mdlDataTableSelectableName']) {
            checkbox.name = row.dataset['mdlDataTableSelectableName'];
        }
        if (row.dataset['mdlDataTableSelectableValue']) {
            checkbox.value = row.dataset['mdlDataTableSelectableValue'];
        }
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
        var bodyRows = Array.prototype.slice.call(this.element_.querySelectorAll('tbody tr'));
        var footRows = Array.prototype.slice.call(this.element_.querySelectorAll('tfoot tr'));
        var rows = bodyRows.concat(footRows);
        if (this.element_.classList.contains(this.CssClasses_.SELECTABLE)) {
            var th = document.createElement('th');
            var headerCheckbox = this.createCheckbox_(null, rows);
            th.appendChild(headerCheckbox);
            firstHeader.parentElement.insertBefore(th, firstHeader);
            for (var i = 0; i < rows.length; i++) {
                var firstCell = rows[i].querySelector('td');
                if (firstCell) {
                    var td = document.createElement('td');
                    if (rows[i].parentNode.nodeName.toUpperCase() === 'TBODY') {
                        var rowCheckbox = this.createCheckbox_(rows[i]);
                        td.appendChild(rowCheckbox);
                    }
                    rows[i].insertBefore(td, firstCell);
                }
            }
            this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
        }
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9qb2UvcmVwb3NpdG9yaWVzL2ZpdG5lc3MvYXNzZXRzL2pzL2FwcC5qcyIsIi9ob21lL2pvZS9yZXBvc2l0b3JpZXMvZml0bmVzcy9hc3NldHMvanMvY29udHJvbGxlcnMvQXBwQ29udHJvbGxlci5qcyIsIi9ob21lL2pvZS9yZXBvc2l0b3JpZXMvZml0bmVzcy9hc3NldHMvanMvY29udHJvbGxlcnMvRXhlcmNpc2VzQ29udHJvbGxlci5qcyIsIi9ob21lL2pvZS9yZXBvc2l0b3JpZXMvZml0bmVzcy9hc3NldHMvanMvY29udHJvbGxlcnMvTmF2aWdhdGlvbkNvbnRyb2xsZXIuanMiLCIvaG9tZS9qb2UvcmVwb3NpdG9yaWVzL2ZpdG5lc3MvYXNzZXRzL2pzL2NvbnRyb2xsZXJzL092ZXJ2aWV3Q29udHJvbGxlci5qcyIsIi9ob21lL2pvZS9yZXBvc2l0b3JpZXMvZml0bmVzcy9hc3NldHMvanMvY29udHJvbGxlcnMvU2NoZWR1bGVDb250cm9sbGVyLmpzIiwiL2hvbWUvam9lL3JlcG9zaXRvcmllcy9maXRuZXNzL2Fzc2V0cy9qcy9jb250cm9sbGVycy9WaWV3Q29udHJvbGxlci5qcyIsIi9ob21lL2pvZS9yZXBvc2l0b3JpZXMvZml0bmVzcy9hc3NldHMvanMvbW9kZWxzL0V4ZXJjaXNlLmpzIiwibm9kZV9tb2R1bGVzL21hdGVyaWFsLWRlc2lnbi1saXRlL2Rpc3QvbWF0ZXJpYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O1FDQU8sMERBQTBEOzswQ0FDdkMsZ0NBQWdDOzs7O0FBRTFELDZDQUFtQixDQUFDOzs7Ozs7Ozs7Ozs7O3NDQ0hhLDJCQUEyQjs7OztvQ0FDN0IseUJBQXlCOzs7O3FDQUN4QiwwQkFBMEI7Ozs7b0NBQzNCLHlCQUF5Qjs7OztJQUVuQyxhQUFhLEdBRW5CLFNBRk0sYUFBYSxHQUc5QjswQkFIaUIsYUFBYTs7QUFJMUIsUUFBSSxVQUFVLEdBQUcseUNBQTBCLENBQUM7QUFDNUMsY0FBVSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsdUNBQXdCLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDM0QsY0FBVSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsd0NBQXlCLENBQUMsQ0FBQztBQUN2RCxjQUFVLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSx1Q0FBd0IsQ0FBQyxDQUFDO0NBQ3hEOztxQkFSZ0IsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NDTFAscUJBQXFCOzs7O2dDQUMzQix1QkFBdUI7Ozs7SUFFdkIsbUJBQW1CO2NBQW5CLG1CQUFtQjs7QUFFekIsYUFGTSxtQkFBbUIsR0FHcEM7Ozs4QkFIaUIsbUJBQW1COztBQUloQyxtQ0FKYSxtQkFBbUIsNkNBSTFCLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEVBQUU7O0FBRTVDLFlBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNwRSxZQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQUssRUFBSztBQUM3QyxnQkFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtBQUNuRCxzQkFBSyxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3JDO1NBQ0osQ0FBQyxDQUFDO0FBQ0gsWUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7O0FBRTVCLFlBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQzdELFlBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUN2RSxZQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDdkUsWUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQ3ZFLFlBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUN2RyxZQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTttQkFBTSxNQUFLLFdBQVcsRUFBRTtTQUFBLENBQUMsQ0FBQztBQUMxRSxZQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTttQkFBTSxNQUFLLHNCQUFzQixFQUFFO1NBQUEsQ0FBQyxDQUFDOztBQUVyRixZQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ3hFLFlBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7bUJBQU0sTUFBSyxxQkFBcUIsRUFBRTtTQUFBLENBQUMsQ0FBQTtLQUN2Rjs7Ozs7O2lCQXhCZ0IsbUJBQW1COztlQTZCZixpQ0FDckI7QUFDSSxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDbEMsZ0JBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDaEM7Ozs7Ozs7ZUFLcUIsa0NBQ3RCO0FBQ0ksZ0JBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3RDOzs7Ozs7O2VBS1UsdUJBQ1g7QUFDSSxnQkFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7QUFDdEMsZ0JBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDO0FBQ3RDLGdCQUFJLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztBQUN0QyxnQkFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2hDLGdCQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7QUFDakMsZ0JBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztBQUNqQyxnQkFBSSxRQUFRLEdBQUcsOEJBQVMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDOUMsZ0JBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNoQyxnQkFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDakM7Ozs7Ozs7OztlQU9lLDBCQUFDLFFBQVEsRUFDekI7QUFDSSxnQkFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QyxlQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7O0FBRXpDLGdCQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNDLG1CQUFPLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDcEMsbUJBQU8sQ0FBQyxTQUFTLEdBQUcsbUNBQW1DLENBQUM7O0FBRXhELGdCQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNDLG1CQUFPLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7O0FBRXBDLGdCQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNDLG1CQUFPLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7O0FBRXBDLGdCQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdDLGdCQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzdDLHNCQUFVLENBQUMsU0FBUyxHQUFHLCtCQUErQixDQUFDO0FBQ3ZELHNCQUFVLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztBQUNsQyxxQkFBUyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7QUFFbEMsZUFBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6QixlQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pCLGVBQUcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekIsZUFBRyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMzQixnQkFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEM7Ozs7Ozs7ZUFLbUIsZ0NBQ3BCO0FBQ0ksZ0JBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0FBQzdCLGdCQUFJLFNBQVMsR0FBRyw4QkFBUyxHQUFHLEVBQUUsQ0FBQzs7Ozs7O0FBQy9CLHFDQUFvQixTQUFTLDhIQUFFO3dCQUF2QixRQUFROztBQUNaLHdCQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ25DOzs7Ozs7Ozs7Ozs7Ozs7U0FDSjs7Ozs7OztlQUthLHdCQUFDLE9BQU8sRUFDdEI7QUFDSSxnQkFBSSxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7QUFDaEQsZ0JBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3JDLGdCQUFJLFVBQVUsR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3JELG1EQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDL0I7Ozs7Ozs7ZUFLb0IsaUNBQ3JCO0FBQ0ksZ0JBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztTQUM5Qjs7O1dBekhnQixtQkFBbUI7OztxQkFBbkIsbUJBQW1COzs7Ozs7Ozs7Ozs7Ozs7O2dDQ0hiLHFCQUFxQjs7OztJQUUzQixvQkFBb0I7QUFFMUIsYUFGTSxvQkFBb0IsR0FHckM7OEJBSGlCLG9CQUFvQjs7QUFJakMsWUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQzFEOzs7Ozs7Ozs7aUJBTGdCLG9CQUFvQjs7ZUFhbEMsYUFBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFDcEM7OztBQUNJLGdCQUFJLENBQUMsVUFBVSx5Q0FBMEIsRUFBRTtBQUN2QyxzQkFBTSxzREFBc0QsQ0FBQzthQUNoRTtBQUNELGdCQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3BDLGFBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDeEMsYUFBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7QUFDYixhQUFDLENBQUMsV0FBVyxHQUFHLFFBQVEsQ0FBQztBQUN6QixhQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBQyxFQUFLO0FBQy9CLGlCQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDbkIsc0JBQUssVUFBVSxDQUFDLFVBQVUsQ0FBQyxDQUFBO2FBQzlCLENBQUMsQ0FBQztBQUNILGdCQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUM5QixnQkFBSSxVQUFVLEVBQUU7QUFDWixpQkFBQyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2I7U0FDSjs7Ozs7Ozs7ZUFNUyxvQkFBQyxVQUFVLEVBQ3JCO0FBQ0ksZ0JBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO0FBQ3hCLG9CQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDakM7QUFDRCxnQkFBSSxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQztBQUNwQyxnQkFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO0FBQzlCLGdCQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7Ozs7Ozs7ZUFLVSx1QkFDWDtBQUNJLGdCQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNqQixvQkFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDLENBQUM7YUFDekU7QUFDRCxnQkFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQ2hCLG9CQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQzFCO1NBQ0o7OztXQXpEZ0Isb0JBQW9COzs7cUJBQXBCLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NDRmQscUJBQXFCOzs7O2dDQUMzQix1QkFBdUI7Ozs7SUFFdkIsa0JBQWtCO2NBQWxCLGtCQUFrQjs7QUFFeEIsYUFGTSxrQkFBa0IsR0FHbkM7Ozs4QkFIaUIsa0JBQWtCOztBQUkvQixtQ0FKYSxrQkFBa0IsNkNBSXpCLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQUU7O0FBRTNDLFlBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUNwRSxZQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDLEtBQUssRUFBSztBQUM3QyxnQkFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtBQUNuRCxzQkFBSyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDdkM7U0FDSixDQUFDLENBQUM7QUFDSCxZQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztLQUMvQjs7Ozs7OztpQkFiZ0Isa0JBQWtCOztlQW1CbkIsMEJBQUMsT0FBTyxFQUN4QjtBQUNJLGdCQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztBQUMvQyxnQkFBSSxVQUFVLEdBQUcsVUFBVSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNwRCwwQ0FBUyxNQUFNLENBQUMsVUFBVSxFQUFFO0FBQ3hCLDRCQUFZLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTthQUMzQixDQUFDLENBQUM7QUFDSCxnQkFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDL0I7Ozs7Ozs7ZUFLbUIsZ0NBQ3BCO0FBQ0ksZ0JBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0FBQzdCLGdCQUFJLFNBQVMsR0FBRyw4QkFBUyxLQUFLLENBQUMsVUFBUyxRQUFRLEVBQUU7QUFDOUMsb0JBQUksWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEUsb0JBQUksUUFBUSxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUEsR0FBSSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDbkUsdUJBQU8sQUFBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLFFBQVEsSUFBSyxPQUFPLFFBQVEsQ0FBQyxZQUFZLEtBQUssV0FBVyxDQUFDO2FBQ2pHLENBQUMsQ0FBQzs7Ozs7O0FBQ0gscUNBQW9CLFNBQVMsOEhBQUU7d0JBQXZCLFFBQVE7O0FBQ1osd0JBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDbkM7Ozs7Ozs7Ozs7Ozs7OztTQUNKOzs7Ozs7Ozs7ZUFPZSwwQkFBQyxRQUFRLEVBQ3pCO0FBQ0ksZ0JBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkMsZUFBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztBQUV6QyxnQkFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzQyxtQkFBTyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQ3BDLG1CQUFPLENBQUMsU0FBUyxHQUFHLG1DQUFtQyxDQUFDOztBQUV4RCxnQkFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMzQyxtQkFBTyxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDOztBQUVwQyxnQkFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMvQyxnQkFBSSxjQUFjLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0RCwwQkFBYyxDQUFDLFNBQVMsR0FBRywrQ0FBK0MsQ0FBQztBQUMzRSwwQkFBYyxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7QUFDeEMsdUJBQVcsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7O0FBRXhDLGVBQUcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekIsZUFBRyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6QixlQUFHLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzdCLGdCQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoQzs7Ozs7OztlQUtvQixpQ0FDckI7QUFDSSxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1NBQzlCOzs7V0FoRmdCLGtCQUFrQjs7O3FCQUFsQixrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0NIWixxQkFBcUI7Ozs7SUFFM0Isa0JBQWtCO2NBQWxCLGtCQUFrQjs7QUFFeEIsYUFGTSxrQkFBa0IsR0FHbkM7OEJBSGlCLGtCQUFrQjs7QUFJL0IsbUNBSmEsa0JBQWtCLDZDQUl6QixRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxFQUFFO0tBQzlDOztXQUxnQixrQkFBa0I7OztxQkFBbEIsa0JBQWtCOzs7Ozs7Ozs7Ozs7OztJQ0ZsQixjQUFjO0FBRXBCLGFBRk0sY0FBYyxDQUVuQixTQUFTLEVBQ3JCOzhCQUhpQixjQUFjOztBQUkzQixZQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUMzQixZQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDZjs7aUJBTmdCLGNBQWM7O2VBUTNCLGdCQUNKO0FBQ0ksZ0JBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDMUM7OztlQUVHLGdCQUNKO0FBQ0ksZ0JBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7U0FDekM7OztXQWhCZ0IsY0FBYzs7O3FCQUFkLGNBQWM7Ozs7Ozs7Ozs7Ozs7O0lDQWQsUUFBUTthQUFSLFFBQVE7OEJBQVIsUUFBUTs7O2lCQUFSLFFBQVE7Ozs7Ozs7O2VBT2YsYUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFDM0I7QUFDSSxnQkFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzNCLGdCQUFJLFFBQVEsR0FBRztBQUNYLGtCQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUNuQixvQkFBSSxFQUFFLElBQUk7QUFDVixvQkFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDcEIsb0JBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDO2FBQ3ZCLENBQUM7QUFDRixxQkFBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN6Qix3QkFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzdELG1CQUFPLFFBQVEsQ0FBQztTQUNuQjs7Ozs7Ozs7ZUFNUyxlQUNWO0FBQ0ksbUJBQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzlEOzs7Ozs7OztlQU1jLG9CQUNmO0FBQ0ksZ0JBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUMzQixnQkFBSSxNQUFNLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFTLElBQUksRUFBRSxRQUFRLEVBQUU7QUFDbkQsdUJBQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQ3RDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDTixtQkFBTyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ3JCOzs7Ozs7OztlQU1ZLGlCQUFDLEVBQUUsRUFDaEI7QUFDSSxnQkFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzNCLHFCQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFTLFFBQVEsRUFBRTtBQUM1Qyx1QkFBTyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUM1QixDQUFDLENBQUM7QUFDSCx3QkFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQ2hFOzs7Ozs7Ozs7ZUFPWSxnQkFBQyxFQUFFLEVBQUUsVUFBVSxFQUM1QjtBQUNJLGdCQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDM0IscUJBQVMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVMsUUFBUSxFQUFFO0FBQ3pDLG9CQUFJLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFO0FBQ25CLHlCQUFLLElBQUksU0FBUyxJQUFJLFVBQVUsRUFBRTtBQUM5Qiw0QkFBSSxVQUFVLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxFQUFFO0FBQ3RDLG9DQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3lCQUMvQztxQkFDSjtpQkFDSjtBQUNELHVCQUFPLFFBQVEsQ0FBQzthQUNuQixDQUFDLENBQUM7QUFDSCx3QkFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1NBQ2hFOzs7Ozs7Ozs7O2VBUVcsZUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFDdEM7QUFDSSxnQkFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzNCLHFCQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFTLFFBQVEsRUFBRTtBQUM1QyxvQkFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLG9CQUFJLFdBQVcsR0FBRyxRQUFRLElBQUksR0FBRyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkQsb0JBQUksUUFBUSxHQUFHLFFBQVEsSUFBSSxHQUFHLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNoRCxvQkFBSSxPQUFPLEdBQUcsUUFBUSxJQUFJLEdBQUcsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDO0FBQ2hELHVCQUFRLFdBQVcsSUFBSSxRQUFRLElBQUksT0FBTyxDQUFFO2FBQy9DLENBQUMsQ0FBQztBQUNILG1CQUFPLFNBQVMsQ0FBQztTQUNwQjs7Ozs7Ozs7ZUFNVyxlQUFDLFdBQVcsRUFDeEI7QUFDSSxnQkFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzNCLHFCQUFTLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUMxQyxtQkFBTyxTQUFTLENBQUM7U0FDcEI7OztXQXpHZ0IsUUFBUTs7O3FCQUFSLFFBQVE7Ozs7QUNBN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFwiLi4vLi4vbm9kZV9tb2R1bGVzL21hdGVyaWFsLWRlc2lnbi1saXRlL2Rpc3QvbWF0ZXJpYWwuanNcIjtcbmltcG9ydCBBcHBDb250cm9sbGVyIGZyb20gXCIuL2NvbnRyb2xsZXJzL0FwcENvbnRyb2xsZXIuanNcIjtcblxubmV3IEFwcENvbnRyb2xsZXIoKTtcbiIsImltcG9ydCBOYXZpZ2F0aW9uQ29udHJvbGxlciBmcm9tIFwiLi9OYXZpZ2F0aW9uQ29udHJvbGxlci5qc1wiO1xuaW1wb3J0IE92ZXJ2aWV3Q29udHJvbGxlciBmcm9tIFwiLi9PdmVydmlld0NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBFeGVyY2lzZXNDb250cm9sbGVyIGZyb20gXCIuL0V4ZXJjaXNlc0NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBTY2hlZHVsZUNvbnRyb2xsZXIgZnJvbSBcIi4vU2NoZWR1bGVDb250cm9sbGVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcENvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgdmFyIG5hdmlnYXRpb24gPSBuZXcgTmF2aWdhdGlvbkNvbnRyb2xsZXIoKTtcbiAgICAgICAgbmF2aWdhdGlvbi5hZGQoJ092ZXJ2aWV3JywgbmV3IE92ZXJ2aWV3Q29udHJvbGxlcigpLCB0cnVlKTtcbiAgICAgICAgbmF2aWdhdGlvbi5hZGQoJ0V4ZXJjaXNlcycsIG5ldyBFeGVyY2lzZXNDb250cm9sbGVyKCkpO1xuICAgICAgICBuYXZpZ2F0aW9uLmFkZCgnU2NoZWR1bGUnLCBuZXcgU2NoZWR1bGVDb250cm9sbGVyKCkpO1xuICAgIH1cbn1cbiIsImltcG9ydCBWaWV3Q29udHJvbGxlciBmcm9tIFwiLi9WaWV3Q29udHJvbGxlci5qc1wiO1xuaW1wb3J0IEV4ZXJjaXNlIGZyb20gXCIuLi9tb2RlbHMvRXhlcmNpc2UuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhlcmNpc2VzQ29udHJvbGxlciBleHRlbmRzIFZpZXdDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKClcbiAgICB7XG4gICAgICAgIHN1cGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNleGVyY2lzZXMnKSk7XG5cbiAgICAgICAgdGhpcy5saXN0RWwgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZXhlcmNpc2UtdGFibGUgdGJvZHknKTtcbiAgICAgICAgdGhpcy5saXN0RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGVFeGVyY2lzZScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVFeGVyY2lzZShldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUV4ZXJjaXNlTGlzdCgpO1xuXG4gICAgICAgIHRoaXMuZGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1leGVyY2lzZS1kaWFsb2cnKTtcbiAgICAgICAgdGhpcy5hZGRFeGVyY2lzZU5hbWUgPSB0aGlzLmRpYWxvZy5xdWVyeVNlbGVjdG9yKCcjYWRkLWV4ZXJjaXNlLW5hbWUnKTtcbiAgICAgICAgdGhpcy5hZGRFeGVyY2lzZVJlcHMgPSB0aGlzLmRpYWxvZy5xdWVyeVNlbGVjdG9yKCcjYWRkLWV4ZXJjaXNlLXJlcHMnKTtcbiAgICAgICAgdGhpcy5hZGRFeGVyY2lzZVJlc3QgPSB0aGlzLmRpYWxvZy5xdWVyeVNlbGVjdG9yKCcjYWRkLWV4ZXJjaXNlLXJlc3QnKTtcbiAgICAgICAgdGhpcy5kaWFsb2dCdXR0b25zID0gdGhpcy5kaWFsb2cucXVlcnlTZWxlY3RvcignLm1kbC1kaWFsb2dfX2FjdGlvbnMnKS5xdWVyeVNlbGVjdG9yQWxsKCcubWRsLWJ1dHRvbicpO1xuICAgICAgICB0aGlzLmRpYWxvZ0J1dHRvbnNbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmFkZEV4ZXJjaXNlKCkpO1xuICAgICAgICB0aGlzLmRpYWxvZ0J1dHRvbnNbMV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmNsb3NlQWRkRXhlcmNpc2VEaWFsb2coKSk7XG5cbiAgICAgICAgdGhpcy5hZGRFeGVyY2lzZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtZXhlcmNpc2UtYnV0dG9uJyk7XG4gICAgICAgIHRoaXMuYWRkRXhlcmNpc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnNob3dBZGRFeGVyY2lzZURpYWxvZygpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIHRoZSBBZGQgRXhlcmNpc2UgZGlhbG9nXG4gICAgICovXG4gICAgc2hvd0FkZEV4ZXJjaXNlRGlhbG9nKClcbiAgICB7XG4gICAgICAgIHRoaXMuZGlhbG9nLk1hdGVyaWFsRGlhbG9nLnNob3coKTtcbiAgICAgICAgdGhpcy5hZGRFeGVyY2lzZU5hbWUuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhlIEFkZCBFeGVyY2lzZSBkaWFsb2dcbiAgICAgKi9cbiAgICBjbG9zZUFkZEV4ZXJjaXNlRGlhbG9nKClcbiAgICB7XG4gICAgICAgIHRoaXMuZGlhbG9nLk1hdGVyaWFsRGlhbG9nLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIG5ldyBleGVyY2lzZVxuICAgICAqL1xuICAgIGFkZEV4ZXJjaXNlKClcbiAgICB7XG4gICAgICAgIHZhciBuYW1lID0gdGhpcy5hZGRFeGVyY2lzZU5hbWUudmFsdWU7XG4gICAgICAgIHZhciByZXBzID0gdGhpcy5hZGRFeGVyY2lzZVJlcHMudmFsdWU7XG4gICAgICAgIHZhciByZXN0ID0gdGhpcy5hZGRFeGVyY2lzZVJlc3QudmFsdWU7XG4gICAgICAgIHRoaXMuYWRkRXhlcmNpc2VOYW1lLnZhbHVlID0gXCJcIjtcbiAgICAgICAgdGhpcy5hZGRFeGVyY2lzZVJlcHMudmFsdWUgPSBcIjNcIjtcbiAgICAgICAgdGhpcy5hZGRFeGVyY2lzZVJlc3QudmFsdWUgPSBcIjJcIjtcbiAgICAgICAgdmFyIGV4ZXJjaXNlID0gRXhlcmNpc2UuYWRkKG5hbWUsIHJlcHMsIHJlc3QpO1xuICAgICAgICB0aGlzLmFkZEV4ZXJjaXNlVG9Eb20oZXhlcmNpc2UpO1xuICAgICAgICB0aGlzLmNsb3NlQWRkRXhlcmNpc2VEaWFsb2coKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFuIGV4ZXJjaXNlIHRvIHRoZSBleGVyY2lzZSBsaXN0IGVsZW1lbnQgaW4gdGhlIGRvbVxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIHJlcHNcbiAgICAgKi9cbiAgICBhZGRFeGVyY2lzZVRvRG9tKGV4ZXJjaXNlKVxuICAgIHtcbiAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgcm93LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGV4ZXJjaXNlLmlkKTtcblxuICAgICAgICB2YXIgbmFtZUNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgbmFtZUNvbC50ZXh0Q29udGVudCA9IGV4ZXJjaXNlLm5hbWU7XG4gICAgICAgIG5hbWVDb2wuY2xhc3NOYW1lID0gXCJtZGwtZGF0YS10YWJsZV9fY2VsbC0tbm9uLW51bWVyaWNcIjtcblxuICAgICAgICB2YXIgcmVwc0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgcmVwc0NvbC50ZXh0Q29udGVudCA9IGV4ZXJjaXNlLnJlcHM7XG5cbiAgICAgICAgdmFyIHJlc3RDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHJlc3RDb2wudGV4dENvbnRlbnQgPSBleGVyY2lzZS5yZXN0O1xuXG4gICAgICAgIHZhciBkZWxldGVDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHZhciBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgICAgIGRlbGV0ZUljb24uY2xhc3NOYW1lID0gXCJkZWxldGVFeGVyY2lzZSBtYXRlcmlhbC1pY29uc1wiO1xuICAgICAgICBkZWxldGVJY29uLnRleHRDb250ZW50ID0gXCJkZWxldGVcIjtcbiAgICAgICAgZGVsZXRlQ29sLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChuYW1lQ29sKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHJlcHNDb2wpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQocmVzdENvbCk7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChkZWxldGVDb2wpO1xuICAgICAgICB0aGlzLmxpc3RFbC5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBvcHVsYXRlcyB0aGUgZXhlcmNpc2UgbGlzdCBmcm9tIGxvY2FsIGRhdGFcbiAgICAgKi9cbiAgICBwb3B1bGF0ZUV4ZXJjaXNlTGlzdCgpXG4gICAge1xuICAgICAgICB0aGlzLmNsZWFyRXhlcmNpc2VzRnJvbURvbSgpO1xuICAgICAgICB2YXIgZXhlcmNpc2VzID0gRXhlcmNpc2UuZ2V0KCk7XG4gICAgICAgIGZvcihsZXQgZXhlcmNpc2Ugb2YgZXhlcmNpc2VzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEV4ZXJjaXNlVG9Eb20oZXhlcmNpc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGV4ZXJjaXNlXG4gICAgICovXG4gICAgZGVsZXRlRXhlcmNpc2UoZWxlbWVudClcbiAgICB7XG4gICAgICAgIHZhciByb3dUb1JlbW92ZSA9IGVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICB0aGlzLmxpc3RFbC5yZW1vdmVDaGlsZChyb3dUb1JlbW92ZSk7XG4gICAgICAgIHZhciBpZFRvUmVtb3ZlID0gcm93VG9SZW1vdmUuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIEV4ZXJjaXNlLmRlbGV0ZShpZFRvUmVtb3ZlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGV4ZXJjaXNlIGxpc3RcbiAgICAgKi9cbiAgICBjbGVhckV4ZXJjaXNlc0Zyb21Eb20oKVxuICAgIHtcbiAgICAgICAgdGhpcy5saXN0RWwuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxufSIsImltcG9ydCBWaWV3Q29udHJvbGxlciBmcm9tICcuL1ZpZXdDb250cm9sbGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbkNvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2aWdhdGlvbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIG1lbnUgaXRlbSB0byB0aGUgbmF2aWdhdGlvblxuICAgICAqIEBwYXJhbSBpdGVtVGV4dCBUaGUgbmFtZSBvZiB0aGUgbWVudSBpdGVtXG4gICAgICogQHBhcmFtIGNvbnRyb2xsZXIgVGhlIFZpZXdDb250cm9sbGVyIHRvIHN3aXRjaCBvbiBjbGlja1xuICAgICAqIEBwYXJhbSBzZXREZWZhdWx0IFdoZXRoZXIgdG8gc2V0IHRoaXMgaXRlbSBhcyB0aGUgZGVmYXVsdCBzZWxlY3Rpb25cbiAgICAgKi9cbiAgICBhZGQoaXRlbVRleHQsIGNvbnRyb2xsZXIsIHNldERlZmF1bHQpXG4gICAge1xuICAgICAgICBpZiAoIWNvbnRyb2xsZXIgaW5zdGFuY2VvZiBWaWV3Q29udHJvbGxlcikge1xuICAgICAgICAgICAgdGhyb3cgXCJOYXZpZ2F0aW9uIGNvbnRyb2xsZXIgbXVzdCBiZSBvZiB0eXBlIFZpZXdDb250cm9sbGVyXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGEuY2xhc3NMaXN0LmFkZCgnbWRsLW5hdmlnYXRpb25fX2xpbmsnKTtcbiAgICAgICAgYS5ocmVmID0gXCIjXCI7XG4gICAgICAgIGEudGV4dENvbnRlbnQgPSBpdGVtVGV4dDtcbiAgICAgICAgYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnN3aXRjaFZpZXcoY29udHJvbGxlcilcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGEpO1xuICAgICAgICBpZiAoc2V0RGVmYXVsdCkge1xuICAgICAgICAgICAgYS5jbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3dpdGNoZXMgdGhlIHZpZXcgdG8gc2hvd1xuICAgICAqIEBwYXJhbSBjb250cm9sbGVyIFRoZSBWaWV3Q29udHJvbGxlciB0byBzd2l0Y2ggdG9cbiAgICAgKi9cbiAgICBzd2l0Y2hWaWV3KGNvbnRyb2xsZXIpXG4gICAge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50Q29udHJvbGxlcikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29udHJvbGxlci5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50Q29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgICAgIHRoaXMuY3VycmVudENvbnRyb2xsZXIuc2hvdygpO1xuICAgICAgICB0aGlzLmNsb3NlRHJhd2VyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2F1c2VzIHRoZSBuYXZpZ2F0aW9uIGRyYXdlciB0byBnbyBhd2F5XG4gICAgICovXG4gICAgY2xvc2VEcmF3ZXIoKVxuICAgIHtcbiAgICAgICAgaWYgKCF0aGlzLm5hdkJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5uYXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWRsLWxheW91dF9fZHJhd2VyLWJ1dHRvbicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm5hdkJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5uYXZCdXR0b24uY2xpY2soKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBWaWV3Q29udHJvbGxlciBmcm9tIFwiLi9WaWV3Q29udHJvbGxlci5qc1wiO1xuaW1wb3J0IEV4ZXJjaXNlIGZyb20gXCIuLi9tb2RlbHMvRXhlcmNpc2UuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlcnZpZXdDb250cm9sbGVyIGV4dGVuZHMgVmlld0NvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJ2aWV3JykpO1xuXG4gICAgICAgIHRoaXMubGlzdEVsID0gdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvcignLmV4ZXJjaXNlLXRhYmxlIHRib2R5Jyk7XG4gICAgICAgIHRoaXMubGlzdEVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY29tcGxldGVCdXR0b24nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVFeGVyY2lzZShldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUV4ZXJjaXNlTGlzdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hcmsgYW4gZXhlcmNpc2UgYXMgY29tcGxldGUgaW4gdGhlIGV4ZXJjaXNlcyB0YWJsZVxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICovXG4gICAgY29tcGxldGVFeGVyY2lzZShlbGVtZW50KVxuICAgIHtcbiAgICAgICAgdmFyIHJvd0VsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgdmFyIGNvbXBsZXRlSWQgPSByb3dFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICBFeGVyY2lzZS51cGRhdGUoY29tcGxldGVJZCwge1xuICAgICAgICAgICAgbGFzdENvbXBsZXRlOiBEYXRlLm5vdygpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnBvcHVsYXRlRXhlcmNpc2VMaXN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUG9wdWxhdGVzIHRoZSBvdmVydmlldyBleGVyY2lzZSBsaXN0IHdpdGggZXhlcmNpc2VzIGR1ZVxuICAgICAqL1xuICAgIHBvcHVsYXRlRXhlcmNpc2VMaXN0KClcbiAgICB7XG4gICAgICAgIHRoaXMuY2xlYXJFeGVyY2lzZXNGcm9tRG9tKCk7XG4gICAgICAgIHZhciBleGVyY2lzZXMgPSBFeGVyY2lzZS5xdWVyeShmdW5jdGlvbihleGVyY2lzZSkge1xuICAgICAgICAgICAgdmFyIGRheUNvbXBsZXRlZCA9IG5ldyBEYXRlKGV4ZXJjaXNlLmxhc3RDb21wbGV0ZSkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgICAgICB2YXIgcmVzdFRpbWUgPSAocGFyc2VJbnQoZXhlcmNpc2UucmVzdCkgKyAxKSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4gICAgICAgICAgICByZXR1cm4gKGRheUNvbXBsZXRlZCA8IERhdGUubm93KCkgLSByZXN0VGltZSkgfHwgdHlwZW9mIGV4ZXJjaXNlLmxhc3RDb21wbGV0ZSA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIH0pO1xuICAgICAgICBmb3IobGV0IGV4ZXJjaXNlIG9mIGV4ZXJjaXNlcykge1xuICAgICAgICAgICAgdGhpcy5hZGRFeGVyY2lzZVRvRG9tKGV4ZXJjaXNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gZXhlcmNpc2UgdG8gdGhlIGV4ZXJjaXNlIGxpc3QgZWxlbWVudCBpbiB0aGUgZG9tXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gcmVwc1xuICAgICAqL1xuICAgIGFkZEV4ZXJjaXNlVG9Eb20oZXhlcmNpc2UpXG4gICAge1xuICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICByb3cuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgZXhlcmNpc2UuaWQpO1xuXG4gICAgICAgIHZhciBuYW1lQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBuYW1lQ29sLnRleHRDb250ZW50ID0gZXhlcmNpc2UubmFtZTtcbiAgICAgICAgbmFtZUNvbC5jbGFzc05hbWUgPSBcIm1kbC1kYXRhLXRhYmxlX19jZWxsLS1ub24tbnVtZXJpY1wiO1xuXG4gICAgICAgIHZhciByZXBzQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICByZXBzQ29sLnRleHRDb250ZW50ID0gZXhlcmNpc2UucmVwcztcblxuICAgICAgICB2YXIgY29tcGxldGVDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHZhciBjb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbXBsZXRlQnV0dG9uLmNsYXNzTmFtZSA9ICdjb21wbGV0ZUJ1dHRvbiBtZGwtYnV0dG9uIG1kbC1idXR0b24tLXByaW1hcnknO1xuICAgICAgICBjb21wbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb21wbGV0ZSc7XG4gICAgICAgIGNvbXBsZXRlQ29sLmFwcGVuZENoaWxkKGNvbXBsZXRlQnV0dG9uKTtcblxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobmFtZUNvbCk7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChyZXBzQ29sKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGNvbXBsZXRlQ29sKTtcbiAgICAgICAgdGhpcy5saXN0RWwuYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGV4ZXJjaXNlIGxpc3RcbiAgICAgKi9cbiAgICBjbGVhckV4ZXJjaXNlc0Zyb21Eb20oKVxuICAgIHtcbiAgICAgICAgdGhpcy5saXN0RWwuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxufSIsImltcG9ydCBWaWV3Q29udHJvbGxlciBmcm9tIFwiLi9WaWV3Q29udHJvbGxlci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY2hlZHVsZUNvbnRyb2xsZXIgZXh0ZW5kcyBWaWV3Q29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICBzdXBlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NoZWR1bGUnKSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcilcbiAgICB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG5cbiAgICBzaG93KClcbiAgICB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuXG4gICAgaGlkZSgpXG4gICAge1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4ZXJjaXNlIHtcblxuICAgIC8qKlxuICAgICAqIFN0b3JlcyBhIG5ldyBleGVyY2lzZVxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIHJlcHNcbiAgICAgKi9cbiAgICBzdGF0aWMgYWRkKG5hbWUsIHJlcHMsIHJlc3QpXG4gICAge1xuICAgICAgICB2YXIgZXhlcmNpc2VzID0gdGhpcy5nZXQoKTtcbiAgICAgICAgdmFyIGV4ZXJjaXNlID0ge1xuICAgICAgICAgICAgaWQ6IHRoaXMuZ2V0TmV3SWQoKSxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICByZXBzOiBwYXJzZUludChyZXBzKSxcbiAgICAgICAgICAgIHJlc3Q6IHBhcnNlSW50KHJlc3QpXG4gICAgICAgIH07XG4gICAgICAgIGV4ZXJjaXNlcy5wdXNoKGV4ZXJjaXNlKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2V4ZXJjaXNlcycsIEpTT04uc3RyaW5naWZ5KGV4ZXJjaXNlcykpO1xuICAgICAgICByZXR1cm4gZXhlcmNpc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgdGhlIHN0b3JlZCBleGVyY2lzZXNcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgc3RhdGljIGdldCgpXG4gICAge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXhlcmNpc2VzJykpIHx8IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbmV4dCBpZCB0byB1c2Ugd2hlbiBhZGRpbmcgYSByZWNvcmRcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0TmV3SWQoKVxuICAgIHtcbiAgICAgICAgdmFyIGV4ZXJjaXNlcyA9IHRoaXMuZ2V0KCk7XG4gICAgICAgIHZhciBsYXN0SWQgPSBleGVyY2lzZXMucmVkdWNlKGZ1bmN0aW9uKGxhc3QsIGV4ZXJjaXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgobGFzdCwgZXhlcmNpc2UuaWQpO1xuICAgICAgICB9LCAwKTtcbiAgICAgICAgcmV0dXJuIGxhc3RJZCArIDE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIHJlY29yZCBtYXRjaGluZyBpZFxuICAgICAqIEBwYXJhbSBpZFxuICAgICAqL1xuICAgIHN0YXRpYyBkZWxldGUoaWQpXG4gICAge1xuICAgICAgICB2YXIgZXhlcmNpc2VzID0gdGhpcy5nZXQoKTtcbiAgICAgICAgZXhlcmNpc2VzID0gZXhlcmNpc2VzLmZpbHRlcihmdW5jdGlvbihleGVyY2lzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGV4ZXJjaXNlLmlkICE9IGlkO1xuICAgICAgICB9KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2V4ZXJjaXNlcycsIEpTT04uc3RyaW5naWZ5KGV4ZXJjaXNlcykpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSByZWNvcmQgbWF0Y2hpbmcgaWQsIHJlcGxhY2luZyBrZXlzIG1lbnRpb25lZCBpbiBjaGFuZ2VEYXRhXG4gICAgICogQHBhcmFtIGlkXG4gICAgICogQHBhcmFtIGNoYW5nZURhdGFcbiAgICAgKi9cbiAgICBzdGF0aWMgdXBkYXRlKGlkLCBjaGFuZ2VEYXRhKVxuICAgIHtcbiAgICAgICAgdmFyIGV4ZXJjaXNlcyA9IHRoaXMuZ2V0KCk7XG4gICAgICAgIGV4ZXJjaXNlcyA9IGV4ZXJjaXNlcy5tYXAoZnVuY3Rpb24oZXhlcmNpc2UpIHtcbiAgICAgICAgICAgIGlmIChleGVyY2lzZS5pZCA9PSBpZCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGF0dHJpYnV0ZSBpbiBjaGFuZ2VEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGFuZ2VEYXRhLmhhc093blByb3BlcnR5KGF0dHJpYnV0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4ZXJjaXNlW2F0dHJpYnV0ZV0gPSBjaGFuZ2VEYXRhW2F0dHJpYnV0ZV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZXhlcmNpc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZXhlcmNpc2VzJywgSlNPTi5zdHJpbmdpZnkoZXhlcmNpc2VzKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHJlY29yZHMgd2hlcmUgbWF0Y2ggY3JpdGVyaWFcbiAgICAgKiBAcGFyYW0gcHJvcGVydHlcbiAgICAgKiBAcGFyYW0gb3BlcmF0b3JcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKi9cbiAgICBzdGF0aWMgd2hlcmUocHJvcGVydHksIG9wZXJhdG9yLCB2YWx1ZSlcbiAgICB7XG4gICAgICAgIHZhciBleGVyY2lzZXMgPSB0aGlzLmdldCgpO1xuICAgICAgICBleGVyY2lzZXMgPSBleGVyY2lzZXMuZmlsdGVyKGZ1bmN0aW9uKGV4ZXJjaXNlKSB7XG4gICAgICAgICAgICB2YXIgZmllbGQgPSBleGVyY2lzZVtwcm9wZXJ0eV07XG4gICAgICAgICAgICB2YXIgZ3JlYXRlclRoYW4gPSBvcGVyYXRvciA9PSAnPicgJiYgZmllbGQgPiB2YWx1ZTtcbiAgICAgICAgICAgIHZhciBsZXNzVGhhbiA9IG9wZXJhdG9yID09ICc8JyAmJiBmaWVsZCA8IHZhbHVlO1xuICAgICAgICAgICAgdmFyIGVxdWFsVG8gPSBvcGVyYXRvciA9PSAnPScgJiYgZmllbGQgPT0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gKGdyZWF0ZXJUaGFuIHx8IGxlc3NUaGFuIHx8IGVxdWFsVG8pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGV4ZXJjaXNlcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHJlY29yZHMgYmFzZWQgb24gY3VzdG9tIHF1ZXJ5IG1ldGhvZFxuICAgICAqIEBwYXJhbSBxdWVyeU1ldGhvZFxuICAgICAqL1xuICAgIHN0YXRpYyBxdWVyeShxdWVyeU1ldGhvZClcbiAgICB7XG4gICAgICAgIHZhciBleGVyY2lzZXMgPSB0aGlzLmdldCgpO1xuICAgICAgICBleGVyY2lzZXMgPSBleGVyY2lzZXMuZmlsdGVyKHF1ZXJ5TWV0aG9kKTtcbiAgICAgICAgcmV0dXJuIGV4ZXJjaXNlcztcbiAgICB9XG59IiwiOyhmdW5jdGlvbigpIHtcblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLyoqXG4gKiBBIGNvbXBvbmVudCBoYW5kbGVyIGludGVyZmFjZSB1c2luZyB0aGUgcmV2ZWFsaW5nIG1vZHVsZSBkZXNpZ24gcGF0dGVybi5cbiAqIE1vcmUgZGV0YWlscyBvbiB0aGlzIGRlc2lnbiBwYXR0ZXJuIGhlcmU6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gKlxuICogQGF1dGhvciBKYXNvbiBNYXllcy5cbiAqL1xuLyogZXhwb3J0ZWQgY29tcG9uZW50SGFuZGxlciAqL1xuXG4vLyBQcmUtZGVmaW5pbmcgdGhlIGNvbXBvbmVudEhhbmRsZXIgaW50ZXJmYWNlLCBmb3IgY2xvc3VyZSBkb2N1bWVudGF0aW9uIGFuZFxuLy8gc3RhdGljIHZlcmlmaWNhdGlvbi5cbnZhciBjb21wb25lbnRIYW5kbGVyID0ge1xuICAvKipcbiAgICogU2VhcmNoZXMgZXhpc3RpbmcgRE9NIGZvciBlbGVtZW50cyBvZiBvdXIgY29tcG9uZW50IHR5cGUgYW5kIHVwZ3JhZGVzIHRoZW1cbiAgICogaWYgdGhleSBoYXZlIG5vdCBhbHJlYWR5IGJlZW4gdXBncmFkZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0SnNDbGFzcyB0aGUgcHJvZ3JhbWF0aWMgbmFtZSBvZiB0aGUgZWxlbWVudCBjbGFzcyB3ZVxuICAgKiBuZWVkIHRvIGNyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZi5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRDc3NDbGFzcyB0aGUgbmFtZSBvZiB0aGUgQ1NTIGNsYXNzIGVsZW1lbnRzIG9mIHRoaXNcbiAgICogdHlwZSB3aWxsIGhhdmUuXG4gICAqL1xuICB1cGdyYWRlRG9tOiBmdW5jdGlvbihvcHRKc0NsYXNzLCBvcHRDc3NDbGFzcykge30sXG4gIC8qKlxuICAgKiBVcGdyYWRlcyBhIHNwZWNpZmljIGVsZW1lbnQgcmF0aGVyIHRoYW4gYWxsIGluIHRoZSBET00uXG4gICAqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgd2Ugd2lzaCB0byB1cGdyYWRlLlxuICAgKiBAcGFyYW0ge3N0cmluZz19IG9wdEpzQ2xhc3MgT3B0aW9uYWwgbmFtZSBvZiB0aGUgY2xhc3Mgd2Ugd2FudCB0byB1cGdyYWRlXG4gICAqIHRoZSBlbGVtZW50IHRvLlxuICAgKi9cbiAgdXBncmFkZUVsZW1lbnQ6IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdEpzQ2xhc3MpIHt9LFxuICAvKipcbiAgICogVXBncmFkZXMgYSBzcGVjaWZpYyBsaXN0IG9mIGVsZW1lbnRzIHJhdGhlciB0aGFuIGFsbCBpbiB0aGUgRE9NLlxuICAgKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fCFBcnJheTwhRWxlbWVudD58IU5vZGVMaXN0fCFIVE1MQ29sbGVjdGlvbn0gZWxlbWVudHNcbiAgICogVGhlIGVsZW1lbnRzIHdlIHdpc2ggdG8gdXBncmFkZS5cbiAgICovXG4gIHVwZ3JhZGVFbGVtZW50czogZnVuY3Rpb24oZWxlbWVudHMpIHt9LFxuICAvKipcbiAgICogVXBncmFkZXMgYWxsIHJlZ2lzdGVyZWQgY29tcG9uZW50cyBmb3VuZCBpbiB0aGUgY3VycmVudCBET00uIFRoaXMgaXNcbiAgICogYXV0b21hdGljYWxseSBjYWxsZWQgb24gd2luZG93IGxvYWQuXG4gICAqL1xuICB1cGdyYWRlQWxsUmVnaXN0ZXJlZDogZnVuY3Rpb24oKSB7fSxcbiAgLyoqXG4gICAqIEFsbG93cyB1c2VyIHRvIGJlIGFsZXJ0ZWQgdG8gYW55IHVwZ3JhZGVzIHRoYXQgYXJlIHBlcmZvcm1lZCBmb3IgYSBnaXZlblxuICAgKiBjb21wb25lbnQgdHlwZVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30ganNDbGFzcyBUaGUgY2xhc3MgbmFtZSBvZiB0aGUgTURMIGNvbXBvbmVudCB3ZSB3aXNoXG4gICAqIHRvIGhvb2sgaW50byBmb3IgYW55IHVwZ3JhZGVzIHBlcmZvcm1lZC5cbiAgICogQHBhcmFtIHtmdW5jdGlvbighSFRNTEVsZW1lbnQpfSBjYWxsYmFjayBUaGUgZnVuY3Rpb24gdG8gY2FsbCB1cG9uIGFuXG4gICAqIHVwZ3JhZGUuIFRoaXMgZnVuY3Rpb24gc2hvdWxkIGV4cGVjdCAxIHBhcmFtZXRlciAtIHRoZSBIVE1MRWxlbWVudCB3aGljaFxuICAgKiBnb3QgdXBncmFkZWQuXG4gICAqL1xuICByZWdpc3RlclVwZ3JhZGVkQ2FsbGJhY2s6IGZ1bmN0aW9uKGpzQ2xhc3MsIGNhbGxiYWNrKSB7fSxcbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGNsYXNzIGZvciBmdXR1cmUgdXNlIGFuZCBhdHRlbXB0cyB0byB1cGdyYWRlIGV4aXN0aW5nIERPTS5cbiAgICpcbiAgICogQHBhcmFtIHtjb21wb25lbnRIYW5kbGVyLkNvbXBvbmVudENvbmZpZ1B1YmxpY30gY29uZmlnIHRoZSByZWdpc3RyYXRpb24gY29uZmlndXJhdGlvblxuICAgKi9cbiAgcmVnaXN0ZXI6IGZ1bmN0aW9uKGNvbmZpZykge30sXG4gIC8qKlxuICAgKiBEb3duZ3JhZGUgZWl0aGVyIGEgZ2l2ZW4gbm9kZSwgYW4gYXJyYXkgb2Ygbm9kZXMsIG9yIGEgTm9kZUxpc3QuXG4gICAqXG4gICAqIEBwYXJhbSB7IU5vZGV8IUFycmF5PCFOb2RlPnwhTm9kZUxpc3R9IG5vZGVzXG4gICAqL1xuICBkb3duZ3JhZGVFbGVtZW50czogZnVuY3Rpb24obm9kZXMpIHt9XG59O1xuXG5jb21wb25lbnRIYW5kbGVyID0gKGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqIEB0eXBlIHshQXJyYXk8Y29tcG9uZW50SGFuZGxlci5Db21wb25lbnRDb25maWc+fSAqL1xuICB2YXIgcmVnaXN0ZXJlZENvbXBvbmVudHNfID0gW107XG5cbiAgLyoqIEB0eXBlIHshQXJyYXk8Y29tcG9uZW50SGFuZGxlci5Db21wb25lbnQ+fSAqL1xuICB2YXIgY3JlYXRlZENvbXBvbmVudHNfID0gW107XG5cbiAgdmFyIGRvd25ncmFkZU1ldGhvZF8gPSAnbWRsRG93bmdyYWRlXyc7XG4gIHZhciBjb21wb25lbnRDb25maWdQcm9wZXJ0eV8gPSAnbWRsQ29tcG9uZW50Q29uZmlnSW50ZXJuYWxfJztcblxuICAvKipcbiAgICogU2VhcmNoZXMgcmVnaXN0ZXJlZCBjb21wb25lbnRzIGZvciBhIGNsYXNzIHdlIGFyZSBpbnRlcmVzdGVkIGluIHVzaW5nLlxuICAgKiBPcHRpb25hbGx5IHJlcGxhY2VzIGEgbWF0Y2ggd2l0aCBwYXNzZWQgb2JqZWN0IGlmIHNwZWNpZmllZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgYSBjbGFzcyB3ZSB3YW50IHRvIHVzZS5cbiAgICogQHBhcmFtIHtjb21wb25lbnRIYW5kbGVyLkNvbXBvbmVudENvbmZpZz19IG9wdFJlcGxhY2UgT3B0aW9uYWwgb2JqZWN0IHRvIHJlcGxhY2UgbWF0Y2ggd2l0aC5cbiAgICogQHJldHVybiB7IU9iamVjdHxib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gZmluZFJlZ2lzdGVyZWRDbGFzc18obmFtZSwgb3B0UmVwbGFjZSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0ZXJlZENvbXBvbmVudHNfLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVnaXN0ZXJlZENvbXBvbmVudHNfW2ldLmNsYXNzTmFtZSA9PT0gbmFtZSkge1xuICAgICAgICBpZiAodHlwZW9mIG9wdFJlcGxhY2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmVnaXN0ZXJlZENvbXBvbmVudHNfW2ldID0gb3B0UmVwbGFjZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVnaXN0ZXJlZENvbXBvbmVudHNfW2ldO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiB0aGUgY2xhc3NOYW1lcyBvZiB0aGUgdXBncmFkZWQgY2xhc3NlcyBvbiB0aGUgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0byBmZXRjaCBkYXRhIGZyb20uXG4gICAqIEByZXR1cm4geyFBcnJheTxzdHJpbmc+fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0VXBncmFkZWRMaXN0T2ZFbGVtZW50XyhlbGVtZW50KSB7XG4gICAgdmFyIGRhdGFVcGdyYWRlZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXVwZ3JhZGVkJyk7XG4gICAgLy8gVXNlIGBbJyddYCBhcyBkZWZhdWx0IHZhbHVlIHRvIGNvbmZvcm0gdGhlIGAsbmFtZSxuYW1lLi4uYCBzdHlsZS5cbiAgICByZXR1cm4gZGF0YVVwZ3JhZGVkID09PSBudWxsID8gWycnXSA6IGRhdGFVcGdyYWRlZC5zcGxpdCgnLCcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gZWxlbWVudCBoYXMgYWxyZWFkeSBiZWVuIHVwZ3JhZGVkIGZvciB0aGUgZ2l2ZW5cbiAgICogY2xhc3MuXG4gICAqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgd2Ugd2FudCB0byBjaGVjay5cbiAgICogQHBhcmFtIHtzdHJpbmd9IGpzQ2xhc3MgVGhlIGNsYXNzIHRvIGNoZWNrIGZvci5cbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBpc0VsZW1lbnRVcGdyYWRlZF8oZWxlbWVudCwganNDbGFzcykge1xuICAgIHZhciB1cGdyYWRlZExpc3QgPSBnZXRVcGdyYWRlZExpc3RPZkVsZW1lbnRfKGVsZW1lbnQpO1xuICAgIHJldHVybiB1cGdyYWRlZExpc3QuaW5kZXhPZihqc0NsYXNzKSAhPT0gLTE7XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoZXMgZXhpc3RpbmcgRE9NIGZvciBlbGVtZW50cyBvZiBvdXIgY29tcG9uZW50IHR5cGUgYW5kIHVwZ3JhZGVzIHRoZW1cbiAgICogaWYgdGhleSBoYXZlIG5vdCBhbHJlYWR5IGJlZW4gdXBncmFkZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0SnNDbGFzcyB0aGUgcHJvZ3JhbWF0aWMgbmFtZSBvZiB0aGUgZWxlbWVudCBjbGFzcyB3ZVxuICAgKiBuZWVkIHRvIGNyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZi5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRDc3NDbGFzcyB0aGUgbmFtZSBvZiB0aGUgQ1NTIGNsYXNzIGVsZW1lbnRzIG9mIHRoaXNcbiAgICogdHlwZSB3aWxsIGhhdmUuXG4gICAqL1xuICBmdW5jdGlvbiB1cGdyYWRlRG9tSW50ZXJuYWwob3B0SnNDbGFzcywgb3B0Q3NzQ2xhc3MpIHtcbiAgICBpZiAodHlwZW9mIG9wdEpzQ2xhc3MgPT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHR5cGVvZiBvcHRDc3NDbGFzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0ZXJlZENvbXBvbmVudHNfLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHVwZ3JhZGVEb21JbnRlcm5hbChyZWdpc3RlcmVkQ29tcG9uZW50c19baV0uY2xhc3NOYW1lLFxuICAgICAgICAgICAgcmVnaXN0ZXJlZENvbXBvbmVudHNfW2ldLmNzc0NsYXNzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGpzQ2xhc3MgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKG9wdEpzQ2xhc3MpO1xuICAgICAgaWYgKHR5cGVvZiBvcHRDc3NDbGFzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIHJlZ2lzdGVyZWRDbGFzcyA9IGZpbmRSZWdpc3RlcmVkQ2xhc3NfKGpzQ2xhc3MpO1xuICAgICAgICBpZiAocmVnaXN0ZXJlZENsYXNzKSB7XG4gICAgICAgICAgb3B0Q3NzQ2xhc3MgPSByZWdpc3RlcmVkQ2xhc3MuY3NzQ2xhc3M7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBvcHRDc3NDbGFzcyk7XG4gICAgICBmb3IgKHZhciBuID0gMDsgbiA8IGVsZW1lbnRzLmxlbmd0aDsgbisrKSB7XG4gICAgICAgIHVwZ3JhZGVFbGVtZW50SW50ZXJuYWwoZWxlbWVudHNbbl0sIGpzQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGdyYWRlcyBhIHNwZWNpZmljIGVsZW1lbnQgcmF0aGVyIHRoYW4gYWxsIGluIHRoZSBET00uXG4gICAqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgd2Ugd2lzaCB0byB1cGdyYWRlLlxuICAgKiBAcGFyYW0ge3N0cmluZz19IG9wdEpzQ2xhc3MgT3B0aW9uYWwgbmFtZSBvZiB0aGUgY2xhc3Mgd2Ugd2FudCB0byB1cGdyYWRlXG4gICAqIHRoZSBlbGVtZW50IHRvLlxuICAgKi9cbiAgZnVuY3Rpb24gdXBncmFkZUVsZW1lbnRJbnRlcm5hbChlbGVtZW50LCBvcHRKc0NsYXNzKSB7XG4gICAgLy8gVmVyaWZ5IGFyZ3VtZW50IHR5cGUuXG4gICAgaWYgKCEodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50IHByb3ZpZGVkIHRvIHVwZ3JhZGUgTURMIGVsZW1lbnQuJyk7XG4gICAgfVxuICAgIHZhciB1cGdyYWRlZExpc3QgPSBnZXRVcGdyYWRlZExpc3RPZkVsZW1lbnRfKGVsZW1lbnQpO1xuICAgIHZhciBjbGFzc2VzVG9VcGdyYWRlID0gW107XG4gICAgLy8gSWYganNDbGFzcyBpcyBub3QgcHJvdmlkZWQgc2NhbiB0aGUgcmVnaXN0ZXJlZCBjb21wb25lbnRzIHRvIGZpbmQgdGhlXG4gICAgLy8gb25lcyBtYXRjaGluZyB0aGUgZWxlbWVudCdzIENTUyBjbGFzc0xpc3QuXG4gICAgaWYgKCFvcHRKc0NsYXNzKSB7XG4gICAgICB2YXIgY2xhc3NMaXN0ID0gZWxlbWVudC5jbGFzc0xpc3Q7XG4gICAgICByZWdpc3RlcmVkQ29tcG9uZW50c18uZm9yRWFjaChmdW5jdGlvbihjb21wb25lbnQpIHtcbiAgICAgICAgLy8gTWF0Y2ggQ1NTICYgTm90IHRvIGJlIHVwZ3JhZGVkICYgTm90IHVwZ3JhZGVkLlxuICAgICAgICBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKGNvbXBvbmVudC5jc3NDbGFzcykgJiZcbiAgICAgICAgICAgIGNsYXNzZXNUb1VwZ3JhZGUuaW5kZXhPZihjb21wb25lbnQpID09PSAtMSAmJlxuICAgICAgICAgICAgIWlzRWxlbWVudFVwZ3JhZGVkXyhlbGVtZW50LCBjb21wb25lbnQuY2xhc3NOYW1lKSkge1xuICAgICAgICAgIGNsYXNzZXNUb1VwZ3JhZGUucHVzaChjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKCFpc0VsZW1lbnRVcGdyYWRlZF8oZWxlbWVudCwgb3B0SnNDbGFzcykpIHtcbiAgICAgIGNsYXNzZXNUb1VwZ3JhZGUucHVzaChmaW5kUmVnaXN0ZXJlZENsYXNzXyhvcHRKc0NsYXNzKSk7XG4gICAgfVxuXG4gICAgLy8gVXBncmFkZSB0aGUgZWxlbWVudCBmb3IgZWFjaCBjbGFzc2VzLlxuICAgIGZvciAodmFyIGkgPSAwLCBuID0gY2xhc3Nlc1RvVXBncmFkZS5sZW5ndGgsIHJlZ2lzdGVyZWRDbGFzczsgaSA8IG47IGkrKykge1xuICAgICAgcmVnaXN0ZXJlZENsYXNzID0gY2xhc3Nlc1RvVXBncmFkZVtpXTtcbiAgICAgIGlmIChyZWdpc3RlcmVkQ2xhc3MpIHtcbiAgICAgICAgLy8gTWFyayBlbGVtZW50IGFzIHVwZ3JhZGVkLlxuICAgICAgICB1cGdyYWRlZExpc3QucHVzaChyZWdpc3RlcmVkQ2xhc3MuY2xhc3NOYW1lKTtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXBncmFkZWQnLCB1cGdyYWRlZExpc3Quam9pbignLCcpKTtcbiAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IHJlZ2lzdGVyZWRDbGFzcy5jbGFzc0NvbnN0cnVjdG9yKGVsZW1lbnQpO1xuICAgICAgICBpbnN0YW5jZVtjb21wb25lbnRDb25maWdQcm9wZXJ0eV9dID0gcmVnaXN0ZXJlZENsYXNzO1xuICAgICAgICBjcmVhdGVkQ29tcG9uZW50c18ucHVzaChpbnN0YW5jZSk7XG4gICAgICAgIC8vIENhbGwgYW55IGNhbGxiYWNrcyB0aGUgdXNlciBoYXMgcmVnaXN0ZXJlZCB3aXRoIHRoaXMgY29tcG9uZW50IHR5cGUuXG4gICAgICAgIGZvciAodmFyIGogPSAwLCBtID0gcmVnaXN0ZXJlZENsYXNzLmNhbGxiYWNrcy5sZW5ndGg7IGogPCBtOyBqKyspIHtcbiAgICAgICAgICByZWdpc3RlcmVkQ2xhc3MuY2FsbGJhY2tzW2pdKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlZ2lzdGVyZWRDbGFzcy53aWRnZXQpIHtcbiAgICAgICAgICAvLyBBc3NpZ24gcGVyIGVsZW1lbnQgaW5zdGFuY2UgZm9yIGNvbnRyb2wgb3ZlciBBUElcbiAgICAgICAgICBlbGVtZW50W3JlZ2lzdGVyZWRDbGFzcy5jbGFzc05hbWVdID0gaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnVW5hYmxlIHRvIGZpbmQgYSByZWdpc3RlcmVkIGNvbXBvbmVudCBmb3IgdGhlIGdpdmVuIGNsYXNzLicpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZXYgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnRzJyk7XG4gICAgICBldi5pbml0RXZlbnQoJ21kbC1jb21wb25lbnR1cGdyYWRlZCcsIHRydWUsIHRydWUpO1xuICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBncmFkZXMgYSBzcGVjaWZpYyBsaXN0IG9mIGVsZW1lbnRzIHJhdGhlciB0aGFuIGFsbCBpbiB0aGUgRE9NLlxuICAgKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fCFBcnJheTwhRWxlbWVudD58IU5vZGVMaXN0fCFIVE1MQ29sbGVjdGlvbn0gZWxlbWVudHNcbiAgICogVGhlIGVsZW1lbnRzIHdlIHdpc2ggdG8gdXBncmFkZS5cbiAgICovXG4gIGZ1bmN0aW9uIHVwZ3JhZGVFbGVtZW50c0ludGVybmFsKGVsZW1lbnRzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGVsZW1lbnRzKSkge1xuICAgICAgaWYgKHR5cGVvZiBlbGVtZW50cy5pdGVtID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoLyoqIEB0eXBlIHtBcnJheX0gKi8gKGVsZW1lbnRzKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50cyA9IFtlbGVtZW50c107XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwLCBuID0gZWxlbWVudHMubGVuZ3RoLCBlbGVtZW50OyBpIDwgbjsgaSsrKSB7XG4gICAgICBlbGVtZW50ID0gZWxlbWVudHNbaV07XG4gICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIHVwZ3JhZGVFbGVtZW50SW50ZXJuYWwoZWxlbWVudCk7XG4gICAgICAgIGlmIChlbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB1cGdyYWRlRWxlbWVudHNJbnRlcm5hbChlbGVtZW50LmNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBjbGFzcyBmb3IgZnV0dXJlIHVzZSBhbmQgYXR0ZW1wdHMgdG8gdXBncmFkZSBleGlzdGluZyBET00uXG4gICAqXG4gICAqIEBwYXJhbSB7Y29tcG9uZW50SGFuZGxlci5Db21wb25lbnRDb25maWdQdWJsaWN9IGNvbmZpZ1xuICAgKi9cbiAgZnVuY3Rpb24gcmVnaXN0ZXJJbnRlcm5hbChjb25maWcpIHtcbiAgICAvLyBJbiBvcmRlciB0byBzdXBwb3J0IGJvdGggQ2xvc3VyZS1jb21waWxlZCBhbmQgdW5jb21waWxlZCBjb2RlIGFjY2Vzc2luZ1xuICAgIC8vIHRoaXMgbWV0aG9kLCB3ZSBuZWVkIHRvIGFsbG93IGZvciBib3RoIHRoZSBkb3QgYW5kIGFycmF5IHN5bnRheCBmb3JcbiAgICAvLyBwcm9wZXJ0eSBhY2Nlc3MuIFlvdSdsbCB0aGVyZWZvcmUgc2VlIHRoZSBgZm9vLmJhciB8fCBmb29bJ2JhciddYFxuICAgIC8vIHBhdHRlcm4gcmVwZWF0ZWQgYWNyb3NzIHRoaXMgbWV0aG9kLlxuICAgIHZhciB3aWRnZXRNaXNzaW5nID0gKHR5cGVvZiBjb25maWcud2lkZ2V0ID09PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB0eXBlb2YgY29uZmlnWyd3aWRnZXQnXSA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgIHZhciB3aWRnZXQgPSB0cnVlO1xuXG4gICAgaWYgKCF3aWRnZXRNaXNzaW5nKSB7XG4gICAgICB3aWRnZXQgPSBjb25maWcud2lkZ2V0IHx8IGNvbmZpZ1snd2lkZ2V0J107XG4gICAgfVxuXG4gICAgdmFyIG5ld0NvbmZpZyA9IC8qKiBAdHlwZSB7Y29tcG9uZW50SGFuZGxlci5Db21wb25lbnRDb25maWd9ICovICh7XG4gICAgICBjbGFzc0NvbnN0cnVjdG9yOiBjb25maWcuY29uc3RydWN0b3IgfHwgY29uZmlnWydjb25zdHJ1Y3RvciddLFxuICAgICAgY2xhc3NOYW1lOiBjb25maWcuY2xhc3NBc1N0cmluZyB8fCBjb25maWdbJ2NsYXNzQXNTdHJpbmcnXSxcbiAgICAgIGNzc0NsYXNzOiBjb25maWcuY3NzQ2xhc3MgfHwgY29uZmlnWydjc3NDbGFzcyddLFxuICAgICAgd2lkZ2V0OiB3aWRnZXQsXG4gICAgICBjYWxsYmFja3M6IFtdXG4gICAgfSk7XG5cbiAgICByZWdpc3RlcmVkQ29tcG9uZW50c18uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICBpZiAoaXRlbS5jc3NDbGFzcyA9PT0gbmV3Q29uZmlnLmNzc0NsYXNzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHByb3ZpZGVkIGNzc0NsYXNzIGhhcyBhbHJlYWR5IGJlZW4gcmVnaXN0ZXJlZDogJyArIGl0ZW0uY3NzQ2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW0uY2xhc3NOYW1lID09PSBuZXdDb25maWcuY2xhc3NOYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHByb3ZpZGVkIGNsYXNzTmFtZSBoYXMgYWxyZWFkeSBiZWVuIHJlZ2lzdGVyZWQnKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChjb25maWcuY29uc3RydWN0b3IucHJvdG90eXBlXG4gICAgICAgIC5oYXNPd25Qcm9wZXJ0eShjb21wb25lbnRDb25maWdQcm9wZXJ0eV8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgJ01ETCBjb21wb25lbnQgY2xhc3NlcyBtdXN0IG5vdCBoYXZlICcgKyBjb21wb25lbnRDb25maWdQcm9wZXJ0eV8gK1xuICAgICAgICAgICcgZGVmaW5lZCBhcyBhIHByb3BlcnR5LicpO1xuICAgIH1cblxuICAgIHZhciBmb3VuZCA9IGZpbmRSZWdpc3RlcmVkQ2xhc3NfKGNvbmZpZy5jbGFzc0FzU3RyaW5nLCBuZXdDb25maWcpO1xuXG4gICAgaWYgKCFmb3VuZCkge1xuICAgICAgcmVnaXN0ZXJlZENvbXBvbmVudHNfLnB1c2gobmV3Q29uZmlnKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWxsb3dzIHVzZXIgdG8gYmUgYWxlcnRlZCB0byBhbnkgdXBncmFkZXMgdGhhdCBhcmUgcGVyZm9ybWVkIGZvciBhIGdpdmVuXG4gICAqIGNvbXBvbmVudCB0eXBlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBqc0NsYXNzIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBNREwgY29tcG9uZW50IHdlIHdpc2hcbiAgICogdG8gaG9vayBpbnRvIGZvciBhbnkgdXBncmFkZXMgcGVyZm9ybWVkLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFIVE1MRWxlbWVudCl9IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0byBjYWxsIHVwb24gYW5cbiAgICogdXBncmFkZS4gVGhpcyBmdW5jdGlvbiBzaG91bGQgZXhwZWN0IDEgcGFyYW1ldGVyIC0gdGhlIEhUTUxFbGVtZW50IHdoaWNoXG4gICAqIGdvdCB1cGdyYWRlZC5cbiAgICovXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyVXBncmFkZWRDYWxsYmFja0ludGVybmFsKGpzQ2xhc3MsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHJlZ0NsYXNzID0gZmluZFJlZ2lzdGVyZWRDbGFzc18oanNDbGFzcyk7XG4gICAgaWYgKHJlZ0NsYXNzKSB7XG4gICAgICByZWdDbGFzcy5jYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZ3JhZGVzIGFsbCByZWdpc3RlcmVkIGNvbXBvbmVudHMgZm91bmQgaW4gdGhlIGN1cnJlbnQgRE9NLiBUaGlzIGlzXG4gICAqIGF1dG9tYXRpY2FsbHkgY2FsbGVkIG9uIHdpbmRvdyBsb2FkLlxuICAgKi9cbiAgZnVuY3Rpb24gdXBncmFkZUFsbFJlZ2lzdGVyZWRJbnRlcm5hbCgpIHtcbiAgICBmb3IgKHZhciBuID0gMDsgbiA8IHJlZ2lzdGVyZWRDb21wb25lbnRzXy5sZW5ndGg7IG4rKykge1xuICAgICAgdXBncmFkZURvbUludGVybmFsKHJlZ2lzdGVyZWRDb21wb25lbnRzX1tuXS5jbGFzc05hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kcyBhIGNyZWF0ZWQgY29tcG9uZW50IGJ5IGEgZ2l2ZW4gRE9NIG5vZGUuXG4gICAqXG4gICAqIEBwYXJhbSB7IU5vZGV9IG5vZGVcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGZ1bmN0aW9uIGZpbmRDcmVhdGVkQ29tcG9uZW50QnlOb2RlSW50ZXJuYWwobm9kZSkge1xuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgY3JlYXRlZENvbXBvbmVudHNfLmxlbmd0aDsgbisrKSB7XG4gICAgICB2YXIgY29tcG9uZW50ID0gY3JlYXRlZENvbXBvbmVudHNfW25dO1xuICAgICAgaWYgKGNvbXBvbmVudC5lbGVtZW50XyA9PT0gbm9kZSkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50IGZvciB0aGUgZG93bmdyYWRlIG1ldGhvZC5cbiAgICogRXhlY3V0ZSBpZiBmb3VuZC5cbiAgICogUmVtb3ZlIGNvbXBvbmVudCBmcm9tIGNyZWF0ZWRDb21wb25lbnRzIGxpc3QuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gY29tcG9uZW50XG4gICAqL1xuICBmdW5jdGlvbiBkZWNvbnN0cnVjdENvbXBvbmVudEludGVybmFsKGNvbXBvbmVudCkge1xuICAgIGlmIChjb21wb25lbnQgJiZcbiAgICAgICAgY29tcG9uZW50W2NvbXBvbmVudENvbmZpZ1Byb3BlcnR5X11cbiAgICAgICAgICAuY2xhc3NDb25zdHJ1Y3Rvci5wcm90b3R5cGVcbiAgICAgICAgICAuaGFzT3duUHJvcGVydHkoZG93bmdyYWRlTWV0aG9kXykpIHtcbiAgICAgIGNvbXBvbmVudFtkb3duZ3JhZGVNZXRob2RfXSgpO1xuICAgICAgdmFyIGNvbXBvbmVudEluZGV4ID0gY3JlYXRlZENvbXBvbmVudHNfLmluZGV4T2YoY29tcG9uZW50KTtcbiAgICAgIGNyZWF0ZWRDb21wb25lbnRzXy5zcGxpY2UoY29tcG9uZW50SW5kZXgsIDEpO1xuXG4gICAgICB2YXIgdXBncmFkZXMgPSBjb21wb25lbnQuZWxlbWVudF8uZ2V0QXR0cmlidXRlKCdkYXRhLXVwZ3JhZGVkJykuc3BsaXQoJywnKTtcbiAgICAgIHZhciBjb21wb25lbnRQbGFjZSA9IHVwZ3JhZGVzLmluZGV4T2YoXG4gICAgICAgICAgY29tcG9uZW50W2NvbXBvbmVudENvbmZpZ1Byb3BlcnR5X10uY2xhc3NBc1N0cmluZyk7XG4gICAgICB1cGdyYWRlcy5zcGxpY2UoY29tcG9uZW50UGxhY2UsIDEpO1xuICAgICAgY29tcG9uZW50LmVsZW1lbnRfLnNldEF0dHJpYnV0ZSgnZGF0YS11cGdyYWRlZCcsIHVwZ3JhZGVzLmpvaW4oJywnKSk7XG5cbiAgICAgIHZhciBldiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudHMnKTtcbiAgICAgIGV2LmluaXRFdmVudCgnbWRsLWNvbXBvbmVudGRvd25ncmFkZWQnLCB0cnVlLCB0cnVlKTtcbiAgICAgIGNvbXBvbmVudC5lbGVtZW50Xy5kaXNwYXRjaEV2ZW50KGV2KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRG93bmdyYWRlIGVpdGhlciBhIGdpdmVuIG5vZGUsIGFuIGFycmF5IG9mIG5vZGVzLCBvciBhIE5vZGVMaXN0LlxuICAgKlxuICAgKiBAcGFyYW0geyFOb2RlfCFBcnJheTwhTm9kZT58IU5vZGVMaXN0fSBub2Rlc1xuICAgKi9cbiAgZnVuY3Rpb24gZG93bmdyYWRlTm9kZXNJbnRlcm5hbChub2Rlcykge1xuICAgIC8qKlxuICAgICAqIEF1eGlsaWFyeSBmdW5jdGlvbiB0byBkb3duZ3JhZGUgYSBzaW5nbGUgbm9kZS5cbiAgICAgKiBAcGFyYW0gIHshTm9kZX0gbm9kZSB0aGUgbm9kZSB0byBiZSBkb3duZ3JhZGVkXG4gICAgICovXG4gICAgdmFyIGRvd25ncmFkZU5vZGUgPSBmdW5jdGlvbihub2RlKSB7XG4gICAgICBkZWNvbnN0cnVjdENvbXBvbmVudEludGVybmFsKGZpbmRDcmVhdGVkQ29tcG9uZW50QnlOb2RlSW50ZXJuYWwobm9kZSkpO1xuICAgIH07XG4gICAgaWYgKG5vZGVzIGluc3RhbmNlb2YgQXJyYXkgfHwgbm9kZXMgaW5zdGFuY2VvZiBOb2RlTGlzdCkge1xuICAgICAgZm9yICh2YXIgbiA9IDA7IG4gPCBub2Rlcy5sZW5ndGg7IG4rKykge1xuICAgICAgICBkb3duZ3JhZGVOb2RlKG5vZGVzW25dKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGVzIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgZG93bmdyYWRlTm9kZShub2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudCBwcm92aWRlZCB0byBkb3duZ3JhZGUgTURMIG5vZGVzLicpO1xuICAgIH1cbiAgfVxuXG4gIC8vIE5vdyByZXR1cm4gdGhlIGZ1bmN0aW9ucyB0aGF0IHNob3VsZCBiZSBtYWRlIHB1YmxpYyB3aXRoIHRoZWlyIHB1YmxpY2x5XG4gIC8vIGZhY2luZyBuYW1lcy4uLlxuICByZXR1cm4ge1xuICAgIHVwZ3JhZGVEb206IHVwZ3JhZGVEb21JbnRlcm5hbCxcbiAgICB1cGdyYWRlRWxlbWVudDogdXBncmFkZUVsZW1lbnRJbnRlcm5hbCxcbiAgICB1cGdyYWRlRWxlbWVudHM6IHVwZ3JhZGVFbGVtZW50c0ludGVybmFsLFxuICAgIHVwZ3JhZGVBbGxSZWdpc3RlcmVkOiB1cGdyYWRlQWxsUmVnaXN0ZXJlZEludGVybmFsLFxuICAgIHJlZ2lzdGVyVXBncmFkZWRDYWxsYmFjazogcmVnaXN0ZXJVcGdyYWRlZENhbGxiYWNrSW50ZXJuYWwsXG4gICAgcmVnaXN0ZXI6IHJlZ2lzdGVySW50ZXJuYWwsXG4gICAgZG93bmdyYWRlRWxlbWVudHM6IGRvd25ncmFkZU5vZGVzSW50ZXJuYWxcbiAgfTtcbn0pKCk7XG5cbi8qKlxuICogRGVzY3JpYmVzIHRoZSB0eXBlIG9mIGEgcmVnaXN0ZXJlZCBjb21wb25lbnQgdHlwZSBtYW5hZ2VkIGJ5XG4gKiBjb21wb25lbnRIYW5kbGVyLiBQcm92aWRlZCBmb3IgYmVuZWZpdCBvZiB0aGUgQ2xvc3VyZSBjb21waWxlci5cbiAqXG4gKiBAdHlwZWRlZiB7e1xuICogICBjb25zdHJ1Y3RvcjogRnVuY3Rpb24sXG4gKiAgIGNsYXNzQXNTdHJpbmc6IHN0cmluZyxcbiAqICAgY3NzQ2xhc3M6IHN0cmluZyxcbiAqICAgd2lkZ2V0OiAoc3RyaW5nfGJvb2xlYW58dW5kZWZpbmVkKVxuICogfX1cbiAqL1xuY29tcG9uZW50SGFuZGxlci5Db21wb25lbnRDb25maWdQdWJsaWM7ICAvLyBqc2hpbnQgaWdub3JlOmxpbmVcblxuLyoqXG4gKiBEZXNjcmliZXMgdGhlIHR5cGUgb2YgYSByZWdpc3RlcmVkIGNvbXBvbmVudCB0eXBlIG1hbmFnZWQgYnlcbiAqIGNvbXBvbmVudEhhbmRsZXIuIFByb3ZpZGVkIGZvciBiZW5lZml0IG9mIHRoZSBDbG9zdXJlIGNvbXBpbGVyLlxuICpcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGNvbnN0cnVjdG9yOiAhRnVuY3Rpb24sXG4gKiAgIGNsYXNzTmFtZTogc3RyaW5nLFxuICogICBjc3NDbGFzczogc3RyaW5nLFxuICogICB3aWRnZXQ6IChzdHJpbmd8Ym9vbGVhbiksXG4gKiAgIGNhbGxiYWNrczogIUFycmF5PGZ1bmN0aW9uKCFIVE1MRWxlbWVudCk+XG4gKiB9fVxuICovXG5jb21wb25lbnRIYW5kbGVyLkNvbXBvbmVudENvbmZpZzsgIC8vIGpzaGludCBpZ25vcmU6bGluZVxuXG4vKipcbiAqIENyZWF0ZWQgY29tcG9uZW50IChpLmUuLCB1cGdyYWRlZCBlbGVtZW50KSB0eXBlIGFzIG1hbmFnZWQgYnlcbiAqIGNvbXBvbmVudEhhbmRsZXIuIFByb3ZpZGVkIGZvciBiZW5lZml0IG9mIHRoZSBDbG9zdXJlIGNvbXBpbGVyLlxuICpcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGVsZW1lbnRfOiAhSFRNTEVsZW1lbnQsXG4gKiAgIGNsYXNzTmFtZTogc3RyaW5nLFxuICogICBjbGFzc0FzU3RyaW5nOiBzdHJpbmcsXG4gKiAgIGNzc0NsYXNzOiBzdHJpbmcsXG4gKiAgIHdpZGdldDogc3RyaW5nXG4gKiB9fVxuICovXG5jb21wb25lbnRIYW5kbGVyLkNvbXBvbmVudDsgIC8vIGpzaGludCBpZ25vcmU6bGluZVxuXG4vLyBFeHBvcnQgYWxsIHN5bWJvbHMsIGZvciB0aGUgYmVuZWZpdCBvZiBDbG9zdXJlIGNvbXBpbGVyLlxuLy8gTm8gZWZmZWN0IG9uIHVuY29tcGlsZWQgY29kZS5cbmNvbXBvbmVudEhhbmRsZXJbJ3VwZ3JhZGVEb20nXSA9IGNvbXBvbmVudEhhbmRsZXIudXBncmFkZURvbTtcbmNvbXBvbmVudEhhbmRsZXJbJ3VwZ3JhZGVFbGVtZW50J10gPSBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVFbGVtZW50O1xuY29tcG9uZW50SGFuZGxlclsndXBncmFkZUVsZW1lbnRzJ10gPSBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVFbGVtZW50cztcbmNvbXBvbmVudEhhbmRsZXJbJ3VwZ3JhZGVBbGxSZWdpc3RlcmVkJ10gPVxuICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUFsbFJlZ2lzdGVyZWQ7XG5jb21wb25lbnRIYW5kbGVyWydyZWdpc3RlclVwZ3JhZGVkQ2FsbGJhY2snXSA9XG4gICAgY29tcG9uZW50SGFuZGxlci5yZWdpc3RlclVwZ3JhZGVkQ2FsbGJhY2s7XG5jb21wb25lbnRIYW5kbGVyWydyZWdpc3RlciddID0gY29tcG9uZW50SGFuZGxlci5yZWdpc3RlcjtcbmNvbXBvbmVudEhhbmRsZXJbJ2Rvd25ncmFkZUVsZW1lbnRzJ10gPSBjb21wb25lbnRIYW5kbGVyLmRvd25ncmFkZUVsZW1lbnRzO1xud2luZG93LmNvbXBvbmVudEhhbmRsZXIgPSBjb21wb25lbnRIYW5kbGVyO1xud2luZG93Wydjb21wb25lbnRIYW5kbGVyJ10gPSBjb21wb25lbnRIYW5kbGVyO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgXCJDdXR0aW5nIHRoZSBtdXN0YXJkXCIgdGVzdC4gSWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgdGhlIGZlYXR1cmVzXG4gICAqIHRlc3RlZCwgYWRkcyBhIG1kbC1qcyBjbGFzcyB0byB0aGUgPGh0bWw+IGVsZW1lbnQuIEl0IHRoZW4gdXBncmFkZXMgYWxsIE1ETFxuICAgKiBjb21wb25lbnRzIHJlcXVpcmluZyBKYXZhU2NyaXB0LlxuICAgKi9cbiAgaWYgKCdjbGFzc0xpc3QnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpICYmXG4gICAgICAncXVlcnlTZWxlY3RvcicgaW4gZG9jdW1lbnQgJiZcbiAgICAgICdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cgJiYgQXJyYXkucHJvdG90eXBlLmZvckVhY2gpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbWRsLWpzJyk7XG4gICAgY29tcG9uZW50SGFuZGxlci51cGdyYWRlQWxsUmVnaXN0ZXJlZCgpO1xuICB9IGVsc2Uge1xuICAgIC8qKlxuICAgICAqIER1bW15IGZ1bmN0aW9uIHRvIGF2b2lkIEpTIGVycm9ycy5cbiAgICAgKi9cbiAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVFbGVtZW50ID0gZnVuY3Rpb24oKSB7fTtcbiAgICAvKipcbiAgICAgKiBEdW1teSBmdW5jdGlvbiB0byBhdm9pZCBKUyBlcnJvcnMuXG4gICAgICovXG4gICAgY29tcG9uZW50SGFuZGxlci5yZWdpc3RlciA9IGZ1bmN0aW9uKCkge307XG4gIH1cbn0pO1xuXG4vLyBTb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXJpdXMvcmVxdWVzdEFuaW1hdGlvbkZyYW1lL2Jsb2IvbWFzdGVyL3JlcXVlc3RBbmltYXRpb25GcmFtZS5qc1xuLy8gQWRhcHRlZCBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BhdWxpcmlzaC8xNTc5NjcxIHdoaWNoIGRlcml2ZWQgZnJvbVxuLy8gaHR0cDovL3BhdWxpcmlzaC5jb20vMjAxMS9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWFuaW1hdGluZy9cbi8vIGh0dHA6Ly9teS5vcGVyYS5jb20vZW1vbGxlci9ibG9nLzIwMTEvMTIvMjAvcmVxdWVzdGFuaW1hdGlvbmZyYW1lLWZvci1zbWFydC1lci1hbmltYXRpbmdcbi8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBieSBFcmlrIE3DtmxsZXIuXG4vLyBGaXhlcyBmcm9tIFBhdWwgSXJpc2gsIFRpbm8gWmlqZGVsLCBBbmRyZXcgTWFvLCBLbGVtZW4gU2xhdmnEjSwgRGFyaXVzIEJhY29uXG4vLyBNSVQgbGljZW5zZVxuaWYgKCFEYXRlLm5vdykge1xuICAgIC8qKlxuICAgKiBEYXRlLm5vdyBwb2x5ZmlsbC5cbiAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgY3VycmVudCBEYXRlXG4gICAqL1xuICAgIERhdGUubm93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgfTtcbiAgICBEYXRlWydub3cnXSA9IERhdGUubm93O1xufVxudmFyIHZlbmRvcnMgPSBbXG4gICAgJ3dlYmtpdCcsXG4gICAgJ21veidcbl07XG5mb3IgKHZhciBpID0gMDsgaSA8IHZlbmRvcnMubGVuZ3RoICYmICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lOyArK2kpIHtcbiAgICB2YXIgdnAgPSB2ZW5kb3JzW2ldO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdnAgKyAnUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93W3ZwICsgJ0NhbmNlbEFuaW1hdGlvbkZyYW1lJ10gfHwgd2luZG93W3ZwICsgJ0NhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZSddO1xuICAgIHdpbmRvd1sncmVxdWVzdEFuaW1hdGlvbkZyYW1lJ10gPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICAgIHdpbmRvd1snY2FuY2VsQW5pbWF0aW9uRnJhbWUnXSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZTtcbn1cbmlmICgvaVAoYWR8aG9uZXxvZCkuKk9TIDYvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpIHx8ICF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8ICF3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcbiAgICB2YXIgbGFzdFRpbWUgPSAwO1xuICAgIC8qKlxuICAgKiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgcG9seWZpbGwuXG4gICAqIEBwYXJhbSAgeyFGdW5jdGlvbn0gY2FsbGJhY2sgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgKi9cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICB2YXIgbmV4dFRpbWUgPSBNYXRoLm1heChsYXN0VGltZSArIDE2LCBub3cpO1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhsYXN0VGltZSA9IG5leHRUaW1lKTtcbiAgICAgICAgfSwgbmV4dFRpbWUgLSBub3cpO1xuICAgIH07XG4gICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gY2xlYXJUaW1lb3V0O1xuICAgIHdpbmRvd1sncmVxdWVzdEFuaW1hdGlvbkZyYW1lJ10gPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuICAgIHdpbmRvd1snY2FuY2VsQW5pbWF0aW9uRnJhbWUnXSA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZTtcbn1cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBCdXR0b24gTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsQnV0dG9uID0gZnVuY3Rpb24gTWF0ZXJpYWxCdXR0b24oZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbEJ1dHRvbiddID0gTWF0ZXJpYWxCdXR0b247XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbEJ1dHRvbi5wcm90b3R5cGUuQ29uc3RhbnRfID0ge307XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbEJ1dHRvbi5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgUklQUExFX0VGRkVDVDogJ21kbC1qcy1yaXBwbGUtZWZmZWN0JyxcbiAgICBSSVBQTEVfQ09OVEFJTkVSOiAnbWRsLWJ1dHRvbl9fcmlwcGxlLWNvbnRhaW5lcicsXG4gICAgUklQUExFOiAnbWRsLXJpcHBsZSdcbn07XG4vKipcbiAgICogSGFuZGxlIGJsdXIgb2YgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxCdXR0b24ucHJvdG90eXBlLmJsdXJIYW5kbGVyXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmIChldmVudCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmJsdXIoKTtcbiAgICB9XG59O1xuLy8gUHVibGljIG1ldGhvZHMuXG4vKipcbiAgICogRGlzYWJsZSBidXR0b24uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbEJ1dHRvbi5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmRpc2FibGVkID0gdHJ1ZTtcbn07XG5NYXRlcmlhbEJ1dHRvbi5wcm90b3R5cGVbJ2Rpc2FibGUnXSA9IE1hdGVyaWFsQnV0dG9uLnByb3RvdHlwZS5kaXNhYmxlO1xuLyoqXG4gICAqIEVuYWJsZSBidXR0b24uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbEJ1dHRvbi5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudF8uZGlzYWJsZWQgPSBmYWxzZTtcbn07XG5NYXRlcmlhbEJ1dHRvbi5wcm90b3R5cGVbJ2VuYWJsZSddID0gTWF0ZXJpYWxCdXR0b24ucHJvdG90eXBlLmVuYWJsZTtcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxCdXR0b24ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0VGRkVDVCkpIHtcbiAgICAgICAgICAgIHZhciByaXBwbGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICByaXBwbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9DT05UQUlORVIpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVFbGVtZW50XyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRSk7XG4gICAgICAgICAgICByaXBwbGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yaXBwbGVFbGVtZW50Xyk7XG4gICAgICAgICAgICB0aGlzLmJvdW5kUmlwcGxlQmx1ckhhbmRsZXIgPSB0aGlzLmJsdXJIYW5kbGVyXy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZFJpcHBsZUJsdXJIYW5kbGVyKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQocmlwcGxlQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvdW5kQnV0dG9uQmx1ckhhbmRsZXIgPSB0aGlzLmJsdXJIYW5kbGVyXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kQnV0dG9uQmx1ckhhbmRsZXIpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmJvdW5kQnV0dG9uQmx1ckhhbmRsZXIpO1xuICAgIH1cbn07XG4vKipcbiAgICogRG93bmdyYWRlIHRoZSBlbGVtZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQnV0dG9uLnByb3RvdHlwZS5tZGxEb3duZ3JhZGVfID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnJpcHBsZUVsZW1lbnRfKSB7XG4gICAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRSaXBwbGVCbHVySGFuZGxlcik7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRCdXR0b25CbHVySGFuZGxlcik7XG4gICAgdGhpcy5lbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5ib3VuZEJ1dHRvbkJsdXJIYW5kbGVyKTtcbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxCdXR0b24sXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsQnV0dG9uJyxcbiAgICBjc3NDbGFzczogJ21kbC1qcy1idXR0b24nLFxuICAgIHdpZGdldDogdHJ1ZVxufSk7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgQ2hlY2tib3ggTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbENoZWNrYm94ID0gZnVuY3Rpb24gTWF0ZXJpYWxDaGVja2JveChlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsQ2hlY2tib3gnXSA9IE1hdGVyaWFsQ2hlY2tib3g7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5Db25zdGFudF8gPSB7IFRJTllfVElNRU9VVDogMC4wMDEgfTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIElOUFVUOiAnbWRsLWNoZWNrYm94X19pbnB1dCcsXG4gICAgQk9YX09VVExJTkU6ICdtZGwtY2hlY2tib3hfX2JveC1vdXRsaW5lJyxcbiAgICBGT0NVU19IRUxQRVI6ICdtZGwtY2hlY2tib3hfX2ZvY3VzLWhlbHBlcicsXG4gICAgVElDS19PVVRMSU5FOiAnbWRsLWNoZWNrYm94X190aWNrLW91dGxpbmUnLFxuICAgIFJJUFBMRV9FRkZFQ1Q6ICdtZGwtanMtcmlwcGxlLWVmZmVjdCcsXG4gICAgUklQUExFX0lHTk9SRV9FVkVOVFM6ICdtZGwtanMtcmlwcGxlLWVmZmVjdC0taWdub3JlLWV2ZW50cycsXG4gICAgUklQUExFX0NPTlRBSU5FUjogJ21kbC1jaGVja2JveF9fcmlwcGxlLWNvbnRhaW5lcicsXG4gICAgUklQUExFX0NFTlRFUjogJ21kbC1yaXBwbGUtLWNlbnRlcicsXG4gICAgUklQUExFOiAnbWRsLXJpcHBsZScsXG4gICAgSVNfRk9DVVNFRDogJ2lzLWZvY3VzZWQnLFxuICAgIElTX0RJU0FCTEVEOiAnaXMtZGlzYWJsZWQnLFxuICAgIElTX0NIRUNLRUQ6ICdpcy1jaGVja2VkJyxcbiAgICBJU19VUEdSQURFRDogJ2lzLXVwZ3JhZGVkJ1xufTtcbi8qKlxuICAgKiBIYW5kbGUgY2hhbmdlIG9mIHN0YXRlLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5vbkNoYW5nZV8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBmb2N1cyBvZiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5vbkZvY3VzXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0ZPQ1VTRUQpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgbG9zdCBmb2N1cyBvZiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5vbkJsdXJfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRk9DVVNFRCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBtb3VzZXVwLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5vbk1vdXNlVXBfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5ibHVyXygpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgY2xhc3MgdXBkYXRlcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS51cGRhdGVDbGFzc2VzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmNoZWNrRGlzYWJsZWQoKTtcbiAgICB0aGlzLmNoZWNrVG9nZ2xlU3RhdGUoKTtcbn07XG4vKipcbiAgICogQWRkIGJsdXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuYmx1cl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVE9ETzogZmlndXJlIG91dCB3aHkgdGhlcmUncyBhIGZvY3VzIGV2ZW50IGJlaW5nIGZpcmVkIGFmdGVyIG91ciBibHVyLFxuICAgIC8vIHNvIHRoYXQgd2UgY2FuIGF2b2lkIHRoaXMgaGFjay5cbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5ibHVyKCk7XG4gICAgfS5iaW5kKHRoaXMpLCB0aGlzLkNvbnN0YW50Xy5USU5ZX1RJTUVPVVQpO1xufTtcbi8vIFB1YmxpYyBtZXRob2RzLlxuLyoqXG4gICAqIENoZWNrIHRoZSBpbnB1dHMgdG9nZ2xlIHN0YXRlIGFuZCB1cGRhdGUgZGlzcGxheS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLmNoZWNrVG9nZ2xlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50Xy5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0NIRUNLRUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0NIRUNLRUQpO1xuICAgIH1cbn07XG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZVsnY2hlY2tUb2dnbGVTdGF0ZSddID0gTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuY2hlY2tUb2dnbGVTdGF0ZTtcbi8qKlxuICAgKiBDaGVjayB0aGUgaW5wdXRzIGRpc2FibGVkIHN0YXRlIGFuZCB1cGRhdGUgZGlzcGxheS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLmNoZWNrRGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50Xy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVNBQkxFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRElTQUJMRUQpO1xuICAgIH1cbn07XG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZVsnY2hlY2tEaXNhYmxlZCddID0gTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuY2hlY2tEaXNhYmxlZDtcbi8qKlxuICAgKiBEaXNhYmxlIGNoZWNrYm94LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZVsnZGlzYWJsZSddID0gTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuZGlzYWJsZTtcbi8qKlxuICAgKiBFbmFibGUgY2hlY2tib3guXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlWydlbmFibGUnXSA9IE1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLmVuYWJsZTtcbi8qKlxuICAgKiBDaGVjayBjaGVja2JveC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5jaGVja2VkID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGVbJ2NoZWNrJ10gPSBNYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5jaGVjaztcbi8qKlxuICAgKiBVbmNoZWNrIGNoZWNrYm94LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUudW5jaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uY2hlY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZVsndW5jaGVjayddID0gTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUudW5jaGVjaztcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8gPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5JTlBVVCk7XG4gICAgICAgIHZhciBib3hPdXRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBib3hPdXRsaW5lLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5CT1hfT1VUTElORSk7XG4gICAgICAgIHZhciB0aWNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICB0aWNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5GT0NVU19IRUxQRVIpO1xuICAgICAgICB2YXIgdGlja091dGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRpY2tPdXRsaW5lLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5USUNLX09VVExJTkUpO1xuICAgICAgICBib3hPdXRsaW5lLmFwcGVuZENoaWxkKHRpY2tPdXRsaW5lKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZCh0aWNrQ29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZChib3hPdXRsaW5lKTtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0VGRkVDVCkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9JR05PUkVfRVZFTlRTKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfQ09OVEFJTkVSKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9FRkZFQ1QpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0NFTlRFUik7XG4gICAgICAgICAgICB0aGlzLmJvdW5kUmlwcGxlTW91c2VVcCA9IHRoaXMub25Nb3VzZVVwXy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZFJpcHBsZU1vdXNlVXApO1xuICAgICAgICAgICAgdmFyIHJpcHBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHJpcHBsZS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uYXBwZW5kQ2hpbGQocmlwcGxlKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQodGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib3VuZElucHV0T25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdW5kSW5wdXRPbkZvY3VzID0gdGhpcy5vbkZvY3VzXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdW5kSW5wdXRPbkJsdXIgPSB0aGlzLm9uQmx1cl8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZEVsZW1lbnRNb3VzZVVwID0gdGhpcy5vbk1vdXNlVXBfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmJvdW5kSW5wdXRPbkNoYW5nZSk7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuYm91bmRJbnB1dE9uRm9jdXMpO1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuYm91bmRJbnB1dE9uQmx1cik7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRFbGVtZW50TW91c2VVcCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVVBHUkFERUQpO1xuICAgIH1cbn07XG4vKipcbiAgICogRG93bmdyYWRlIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUubWRsRG93bmdyYWRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xykge1xuICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kUmlwcGxlTW91c2VVcCk7XG4gICAgfVxuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmJvdW5kSW5wdXRPbkNoYW5nZSk7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5ib3VuZElucHV0T25Gb2N1cyk7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLmJvdW5kSW5wdXRPbkJsdXIpO1xuICAgIHRoaXMuZWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRFbGVtZW50TW91c2VVcCk7XG59O1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsQ2hlY2tib3gsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsQ2hlY2tib3gnLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLWNoZWNrYm94JyxcbiAgICB3aWRnZXQ6IHRydWVcbn0pO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIERpYWxvZyBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsRGlhbG9nID0gZnVuY3Rpb24gTWF0ZXJpYWxEaWFsb2coZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xufTtcbndpbmRvd1snTWF0ZXJpYWxEaWFsb2cnXSA9IE1hdGVyaWFsRGlhbG9nO1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxEaWFsb2cucHJvdG90eXBlLmNzc0NsYXNzZXNfID0geyBCQUNLRFJPUDogJ21kbC1kaWFsb2ctYmFja2Ryb3AnIH07XG4vKipcbiAgKiBJbnRlcm5hbCBtZXRob2QgZm9yIHNob3dpbmcgdGhlIGRpYWxvZy5cbiAgKlxuICAqIEBwcml2YXRlXG4gICovXG5NYXRlcmlhbERpYWxvZy5wcm90b3R5cGUuc2hvd0ludGVybmFsXyA9IGZ1bmN0aW9uIChiYWNrZHJvcCkge1xuICAgIGlmIChiYWNrZHJvcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IEVycm9yKCdZb3UgbXVzdCBwcm92aWRlIHdoZXRoZXIgb3Igbm90IHRvIHNob3cgdGhlIGJhY2tkcm9wLicpO1xuICAgIH1cbiAgICBpZiAodGhpcy5lbGVtZW50Xy5oYXNBdHRyaWJ1dGUoJ29wZW4nKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChiYWNrZHJvcCkge1xuICAgICAgICB0aGlzLmNyZWF0ZUJhY2tkcm9wXygpO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnRfLnNldEF0dHJpYnV0ZSgnb3BlbicsIHRydWUpO1xufTtcbi8qKlxuICAqIEludGVybmFsIG1ldGhvZCB0byBjcmVhdGUgYSBtb2RhbCBiYWNrZHJvcC5cbiAgKlxuICAqIEBwcml2YXRlXG4gICovXG5NYXRlcmlhbERpYWxvZy5wcm90b3R5cGUuY3JlYXRlQmFja2Ryb3BfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50XyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuY3NzQ2xhc3Nlc18uQkFDS0RST1ApO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5iYWNrZHJvcEVsZW1lbnRfKTtcbn07XG4vKipcbiAgKiBTaG93IHRoZSBkaWFsb2cuXG4gICpcbiAgKiBAcHVibGljXG4gICovXG5NYXRlcmlhbERpYWxvZy5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNob3dJbnRlcm5hbF8oZmFsc2UpO1xufTtcbk1hdGVyaWFsRGlhbG9nLnByb3RvdHlwZVsnc2hvdyddID0gTWF0ZXJpYWxEaWFsb2cucHJvdG90eXBlLnNob3c7XG4vKipcbiAgKiBTaG93IHRoZSBkaWFsb2cgYXMgYSBtb2RhbC5cbiAgKlxuICAqIEBwdWJsaWNcbiAgKi9cbk1hdGVyaWFsRGlhbG9nLnByb3RvdHlwZS5zaG93TW9kYWwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zaG93SW50ZXJuYWxfKHRydWUpO1xufTtcbk1hdGVyaWFsRGlhbG9nLnByb3RvdHlwZVsnc2hvd01vZGFsJ10gPSBNYXRlcmlhbERpYWxvZy5wcm90b3R5cGUuc2hvd01vZGFsO1xuLyoqXG4gICogQ2xvc2UgdGhlIGRpYWxvZy5cbiAgKlxuICAqIEBwdWJsaWNcbiAgKi9cbk1hdGVyaWFsRGlhbG9nLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnRfLnJlbW92ZUF0dHJpYnV0ZSgnb3BlbicpO1xuICAgIGlmICh0aGlzLmJhY2tkcm9wRWxlbWVudF8pIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmJhY2tkcm9wRWxlbWVudF8pO1xuICAgICAgICB0aGlzLmJhY2tkcm9wRWxlbWVudF8gPSB1bmRlZmluZWQ7XG4gICAgfVxufTtcbk1hdGVyaWFsRGlhbG9nLnByb3RvdHlwZVsnY2xvc2UnXSA9IE1hdGVyaWFsRGlhbG9nLnByb3RvdHlwZS5jbG9zZTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbERpYWxvZyxcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxEaWFsb2cnLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLWRpYWxvZycsXG4gICAgd2lkZ2V0OiB0cnVlXG59KTtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBpY29uIHRvZ2dsZSBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsSWNvblRvZ2dsZSA9IGZ1bmN0aW9uIE1hdGVyaWFsSWNvblRvZ2dsZShlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsSWNvblRvZ2dsZSddID0gTWF0ZXJpYWxJY29uVG9nZ2xlO1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5Db25zdGFudF8gPSB7IFRJTllfVElNRU9VVDogMC4wMDEgfTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgSU5QVVQ6ICdtZGwtaWNvbi10b2dnbGVfX2lucHV0JyxcbiAgICBKU19SSVBQTEVfRUZGRUNUOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QnLFxuICAgIFJJUFBMRV9JR05PUkVfRVZFTlRTOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QtLWlnbm9yZS1ldmVudHMnLFxuICAgIFJJUFBMRV9DT05UQUlORVI6ICdtZGwtaWNvbi10b2dnbGVfX3JpcHBsZS1jb250YWluZXInLFxuICAgIFJJUFBMRV9DRU5URVI6ICdtZGwtcmlwcGxlLS1jZW50ZXInLFxuICAgIFJJUFBMRTogJ21kbC1yaXBwbGUnLFxuICAgIElTX0ZPQ1VTRUQ6ICdpcy1mb2N1c2VkJyxcbiAgICBJU19ESVNBQkxFRDogJ2lzLWRpc2FibGVkJyxcbiAgICBJU19DSEVDS0VEOiAnaXMtY2hlY2tlZCdcbn07XG4vKipcbiAgICogSGFuZGxlIGNoYW5nZSBvZiBzdGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5vbkNoYW5nZV8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBmb2N1cyBvZiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLm9uRm9jdXNfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRk9DVVNFRCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBsb3N0IGZvY3VzIG9mIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUub25CbHVyXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0ZPQ1VTRUQpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgbW91c2V1cC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5vbk1vdXNlVXBfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5ibHVyXygpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgY2xhc3MgdXBkYXRlcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLnVwZGF0ZUNsYXNzZXNfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2hlY2tEaXNhYmxlZCgpO1xuICAgIHRoaXMuY2hlY2tUb2dnbGVTdGF0ZSgpO1xufTtcbi8qKlxuICAgKiBBZGQgYmx1ci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmJsdXJfID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFRPRE86IGZpZ3VyZSBvdXQgd2h5IHRoZXJlJ3MgYSBmb2N1cyBldmVudCBiZWluZyBmaXJlZCBhZnRlciBvdXIgYmx1cixcbiAgICAvLyBzbyB0aGF0IHdlIGNhbiBhdm9pZCB0aGlzIGhhY2suXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8uYmx1cigpO1xuICAgIH0uYmluZCh0aGlzKSwgdGhpcy5Db25zdGFudF8uVElOWV9USU1FT1VUKTtcbn07XG4vLyBQdWJsaWMgbWV0aG9kcy5cbi8qKlxuICAgKiBDaGVjayB0aGUgaW5wdXRzIHRvZ2dsZSBzdGF0ZSBhbmQgdXBkYXRlIGRpc3BsYXkuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmNoZWNrVG9nZ2xlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50Xy5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0NIRUNLRUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0NIRUNLRUQpO1xuICAgIH1cbn07XG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlWydjaGVja1RvZ2dsZVN0YXRlJ10gPSBNYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmNoZWNrVG9nZ2xlU3RhdGU7XG4vKipcbiAgICogQ2hlY2sgdGhlIGlucHV0cyBkaXNhYmxlZCBzdGF0ZSBhbmQgdXBkYXRlIGRpc3BsYXkuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmNoZWNrRGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50Xy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVNBQkxFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRElTQUJMRUQpO1xuICAgIH1cbn07XG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlWydjaGVja0Rpc2FibGVkJ10gPSBNYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmNoZWNrRGlzYWJsZWQ7XG4vKipcbiAgICogRGlzYWJsZSBpY29uIHRvZ2dsZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlWydkaXNhYmxlJ10gPSBNYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmRpc2FibGU7XG4vKipcbiAgICogRW5hYmxlIGljb24gdG9nZ2xlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGVbJ2VuYWJsZSddID0gTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5lbmFibGU7XG4vKipcbiAgICogQ2hlY2sgaWNvbiB0b2dnbGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5jaGVja2VkID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZVsnY2hlY2snXSA9IE1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuY2hlY2s7XG4vKipcbiAgICogVW5jaGVjayBpY29uIHRvZ2dsZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUudW5jaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uY2hlY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlWyd1bmNoZWNrJ10gPSBNYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLnVuY2hlY2s7XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8gPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5JTlBVVCk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkpTX1JJUFBMRV9FRkZFQ1QpKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfSUdOT1JFX0VWRU5UUyk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0NPTlRBSU5FUik7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5KU19SSVBQTEVfRUZGRUNUKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9DRU5URVIpO1xuICAgICAgICAgICAgdGhpcy5ib3VuZFJpcHBsZU1vdXNlVXAgPSB0aGlzLm9uTW91c2VVcF8uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRSaXBwbGVNb3VzZVVwKTtcbiAgICAgICAgICAgIHZhciByaXBwbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICByaXBwbGUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRSk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmFwcGVuZENoaWxkKHJpcHBsZSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm91bmRJbnB1dE9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZV8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZElucHV0T25Gb2N1cyA9IHRoaXMub25Gb2N1c18uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZElucHV0T25CbHVyID0gdGhpcy5vbkJsdXJfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRFbGVtZW50T25Nb3VzZVVwID0gdGhpcy5vbk1vdXNlVXBfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmJvdW5kSW5wdXRPbkNoYW5nZSk7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuYm91bmRJbnB1dE9uRm9jdXMpO1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuYm91bmRJbnB1dE9uQmx1cik7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRFbGVtZW50T25Nb3VzZVVwKTtcbiAgICAgICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQoJ2lzLXVwZ3JhZGVkJyk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBEb3duZ3JhZGUgdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUubWRsRG93bmdyYWRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xykge1xuICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kUmlwcGxlTW91c2VVcCk7XG4gICAgfVxuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmJvdW5kSW5wdXRPbkNoYW5nZSk7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5ib3VuZElucHV0T25Gb2N1cyk7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLmJvdW5kSW5wdXRPbkJsdXIpO1xuICAgIHRoaXMuZWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRFbGVtZW50T25Nb3VzZVVwKTtcbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxJY29uVG9nZ2xlLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbEljb25Ub2dnbGUnLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLWljb24tdG9nZ2xlJyxcbiAgICB3aWRnZXQ6IHRydWVcbn0pO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIGRyb3Bkb3duIE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG52YXIgTWF0ZXJpYWxNZW51ID0gZnVuY3Rpb24gTWF0ZXJpYWxNZW51KGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxNZW51J10gPSBNYXRlcmlhbE1lbnU7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLkNvbnN0YW50XyA9IHtcbiAgICAvLyBUb3RhbCBkdXJhdGlvbiBvZiB0aGUgbWVudSBhbmltYXRpb24uXG4gICAgVFJBTlNJVElPTl9EVVJBVElPTl9TRUNPTkRTOiAwLjMsXG4gICAgLy8gVGhlIGZyYWN0aW9uIG9mIHRoZSB0b3RhbCBkdXJhdGlvbiB3ZSB3YW50IHRvIHVzZSBmb3IgbWVudSBpdGVtIGFuaW1hdGlvbnMuXG4gICAgVFJBTlNJVElPTl9EVVJBVElPTl9GUkFDVElPTjogMC44LFxuICAgIC8vIEhvdyBsb25nIHRoZSBtZW51IHN0YXlzIG9wZW4gYWZ0ZXIgY2hvb3NpbmcgYW4gb3B0aW9uIChzbyB0aGUgdXNlciBjYW4gc2VlXG4gICAgLy8gdGhlIHJpcHBsZSkuXG4gICAgQ0xPU0VfVElNRU9VVDogMTUwXG59O1xuLyoqXG4gICAqIEtleWNvZGVzLCBmb3IgY29kZSByZWFkYWJpbGl0eS5cbiAgICpcbiAgICogQGVudW0ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLktleWNvZGVzXyA9IHtcbiAgICBFTlRFUjogMTMsXG4gICAgRVNDQVBFOiAyNyxcbiAgICBTUEFDRTogMzIsXG4gICAgVVBfQVJST1c6IDM4LFxuICAgIERPV05fQVJST1c6IDQwXG59O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBDT05UQUlORVI6ICdtZGwtbWVudV9fY29udGFpbmVyJyxcbiAgICBPVVRMSU5FOiAnbWRsLW1lbnVfX291dGxpbmUnLFxuICAgIElURU06ICdtZGwtbWVudV9faXRlbScsXG4gICAgSVRFTV9SSVBQTEVfQ09OVEFJTkVSOiAnbWRsLW1lbnVfX2l0ZW0tcmlwcGxlLWNvbnRhaW5lcicsXG4gICAgUklQUExFX0VGRkVDVDogJ21kbC1qcy1yaXBwbGUtZWZmZWN0JyxcbiAgICBSSVBQTEVfSUdOT1JFX0VWRU5UUzogJ21kbC1qcy1yaXBwbGUtZWZmZWN0LS1pZ25vcmUtZXZlbnRzJyxcbiAgICBSSVBQTEU6ICdtZGwtcmlwcGxlJyxcbiAgICAvLyBTdGF0dXNlc1xuICAgIElTX1VQR1JBREVEOiAnaXMtdXBncmFkZWQnLFxuICAgIElTX1ZJU0lCTEU6ICdpcy12aXNpYmxlJyxcbiAgICBJU19BTklNQVRJTkc6ICdpcy1hbmltYXRpbmcnLFxuICAgIC8vIEFsaWdubWVudCBvcHRpb25zXG4gICAgQk9UVE9NX0xFRlQ6ICdtZGwtbWVudS0tYm90dG9tLWxlZnQnLFxuICAgIC8vIFRoaXMgaXMgdGhlIGRlZmF1bHQuXG4gICAgQk9UVE9NX1JJR0hUOiAnbWRsLW1lbnUtLWJvdHRvbS1yaWdodCcsXG4gICAgVE9QX0xFRlQ6ICdtZGwtbWVudS0tdG9wLWxlZnQnLFxuICAgIFRPUF9SSUdIVDogJ21kbC1tZW51LS10b3AtcmlnaHQnLFxuICAgIFVOQUxJR05FRDogJ21kbC1tZW51LS11bmFsaWduZWQnXG59O1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgLy8gQ3JlYXRlIGNvbnRhaW5lciBmb3IgdGhlIG1lbnUuXG4gICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5DT05UQUlORVIpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lciwgdGhpcy5lbGVtZW50Xyk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudF8pO1xuICAgICAgICB0aGlzLmNvbnRhaW5lcl8gPSBjb250YWluZXI7XG4gICAgICAgIC8vIENyZWF0ZSBvdXRsaW5lIGZvciB0aGUgbWVudSAoc2hhZG93IGFuZCBiYWNrZ3JvdW5kKS5cbiAgICAgICAgdmFyIG91dGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgb3V0bGluZS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uT1VUTElORSk7XG4gICAgICAgIHRoaXMub3V0bGluZV8gPSBvdXRsaW5lO1xuICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKG91dGxpbmUsIHRoaXMuZWxlbWVudF8pO1xuICAgICAgICAvLyBGaW5kIHRoZSBcImZvclwiIGVsZW1lbnQgYW5kIGJpbmQgZXZlbnRzIHRvIGl0LlxuICAgICAgICB2YXIgZm9yRWxJZCA9IHRoaXMuZWxlbWVudF8uZ2V0QXR0cmlidXRlKCdmb3InKSB8fCB0aGlzLmVsZW1lbnRfLmdldEF0dHJpYnV0ZSgnZGF0YS1tZGwtZm9yJyk7XG4gICAgICAgIHZhciBmb3JFbCA9IG51bGw7XG4gICAgICAgIGlmIChmb3JFbElkKSB7XG4gICAgICAgICAgICBmb3JFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvckVsSWQpO1xuICAgICAgICAgICAgaWYgKGZvckVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JFbGVtZW50XyA9IGZvckVsO1xuICAgICAgICAgICAgICAgIGZvckVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVGb3JDbGlja18uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgZm9yRWwuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlRm9yS2V5Ym9hcmRFdmVudF8uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uSVRFTSk7XG4gICAgICAgIHRoaXMuYm91bmRJdGVtS2V5ZG93biA9IHRoaXMuaGFuZGxlSXRlbUtleWJvYXJkRXZlbnRfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRJdGVtQ2xpY2sgPSB0aGlzLmhhbmRsZUl0ZW1DbGlja18uYmluZCh0aGlzKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy8gQWRkIGEgbGlzdGVuZXIgdG8gZWFjaCBtZW51IGl0ZW0uXG4gICAgICAgICAgICBpdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYm91bmRJdGVtQ2xpY2spO1xuICAgICAgICAgICAgLy8gQWRkIGEgdGFiIGluZGV4IHRvIGVhY2ggbWVudSBpdGVtLlxuICAgICAgICAgICAgaXRlbXNbaV0udGFiSW5kZXggPSAnLTEnO1xuICAgICAgICAgICAgLy8gQWRkIGEga2V5Ym9hcmQgbGlzdGVuZXIgdG8gZWFjaCBtZW51IGl0ZW0uXG4gICAgICAgICAgICBpdGVtc1tpXS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5ib3VuZEl0ZW1LZXlkb3duKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgcmlwcGxlIGNsYXNzZXMgdG8gZWFjaCBpdGVtLCBpZiB0aGUgdXNlciBoYXMgZW5hYmxlZCByaXBwbGVzLlxuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfRUZGRUNUKSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0lHTk9SRV9FVkVOVFMpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBpdGVtc1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgcmlwcGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVRFTV9SSVBQTEVfQ09OVEFJTkVSKTtcbiAgICAgICAgICAgICAgICB2YXIgcmlwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIHJpcHBsZS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFKTtcbiAgICAgICAgICAgICAgICByaXBwbGVDb250YWluZXIuYXBwZW5kQ2hpbGQocmlwcGxlKTtcbiAgICAgICAgICAgICAgICBpdGVtLmFwcGVuZENoaWxkKHJpcHBsZUNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0VGRkVDVCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ29weSBhbGlnbm1lbnQgY2xhc3NlcyB0byB0aGUgY29udGFpbmVyLCBzbyB0aGUgb3V0bGluZSBjYW4gdXNlIHRoZW0uXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkJPVFRPTV9MRUZUKSkge1xuICAgICAgICAgICAgdGhpcy5vdXRsaW5lXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uQk9UVE9NX0xFRlQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkJPVFRPTV9SSUdIVCkpIHtcbiAgICAgICAgICAgIHRoaXMub3V0bGluZV8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkJPVFRPTV9SSUdIVCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uVE9QX0xFRlQpKSB7XG4gICAgICAgICAgICB0aGlzLm91dGxpbmVfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5UT1BfTEVGVCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uVE9QX1JJR0hUKSkge1xuICAgICAgICAgICAgdGhpcy5vdXRsaW5lXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVE9QX1JJR0hUKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5VTkFMSUdORUQpKSB7XG4gICAgICAgICAgICB0aGlzLm91dGxpbmVfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5VTkFMSUdORUQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVVBHUkFERUQpO1xuICAgIH1cbn07XG4vKipcbiAgICogSGFuZGxlcyBhIGNsaWNrIG9uIHRoZSBcImZvclwiIGVsZW1lbnQsIGJ5IHBvc2l0aW9uaW5nIHRoZSBtZW51IGFuZCB0aGVuXG4gICAqIHRvZ2dsaW5nIGl0LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5oYW5kbGVGb3JDbGlja18gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8gJiYgdGhpcy5mb3JFbGVtZW50Xykge1xuICAgICAgICB2YXIgcmVjdCA9IHRoaXMuZm9yRWxlbWVudF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciBmb3JSZWN0ID0gdGhpcy5mb3JFbGVtZW50Xy5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5VTkFMSUdORUQpKSB7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5CT1RUT01fUklHSFQpKSB7XG4gICAgICAgICAgICAvLyBQb3NpdGlvbiBiZWxvdyB0aGUgXCJmb3JcIiBlbGVtZW50LCBhbGlnbmVkIHRvIGl0cyByaWdodC5cbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyXy5zdHlsZS5yaWdodCA9IGZvclJlY3QucmlnaHQgLSByZWN0LnJpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyXy5zdHlsZS50b3AgPSB0aGlzLmZvckVsZW1lbnRfLm9mZnNldFRvcCArIHRoaXMuZm9yRWxlbWVudF8ub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlRPUF9MRUZUKSkge1xuICAgICAgICAgICAgLy8gUG9zaXRpb24gYWJvdmUgdGhlIFwiZm9yXCIgZWxlbWVudCwgYWxpZ25lZCB0byBpdHMgbGVmdC5cbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyXy5zdHlsZS5sZWZ0ID0gdGhpcy5mb3JFbGVtZW50Xy5vZmZzZXRMZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyXy5zdHlsZS5ib3R0b20gPSBmb3JSZWN0LmJvdHRvbSAtIHJlY3QudG9wICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlRPUF9SSUdIVCkpIHtcbiAgICAgICAgICAgIC8vIFBvc2l0aW9uIGFib3ZlIHRoZSBcImZvclwiIGVsZW1lbnQsIGFsaWduZWQgdG8gaXRzIHJpZ2h0LlxuICAgICAgICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLnJpZ2h0ID0gZm9yUmVjdC5yaWdodCAtIHJlY3QucmlnaHQgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLmJvdHRvbSA9IGZvclJlY3QuYm90dG9tIC0gcmVjdC50b3AgKyAncHgnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRGVmYXVsdDogcG9zaXRpb24gYmVsb3cgdGhlIFwiZm9yXCIgZWxlbWVudCwgYWxpZ25lZCB0byBpdHMgbGVmdC5cbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyXy5zdHlsZS5sZWZ0ID0gdGhpcy5mb3JFbGVtZW50Xy5vZmZzZXRMZWZ0ICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyXy5zdHlsZS50b3AgPSB0aGlzLmZvckVsZW1lbnRfLm9mZnNldFRvcCArIHRoaXMuZm9yRWxlbWVudF8ub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnRvZ2dsZShldnQpO1xufTtcbi8qKlxuICAgKiBIYW5kbGVzIGEga2V5Ym9hcmQgZXZlbnQgb24gdGhlIFwiZm9yXCIgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUuaGFuZGxlRm9yS2V5Ym9hcmRFdmVudF8gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8gJiYgdGhpcy5jb250YWluZXJfICYmIHRoaXMuZm9yRWxlbWVudF8pIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uSVRFTSArICc6bm90KFtkaXNhYmxlZF0pJyk7XG4gICAgICAgIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwICYmIHRoaXMuY29udGFpbmVyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5JU19WSVNJQkxFKSkge1xuICAgICAgICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSB0aGlzLktleWNvZGVzXy5VUF9BUlJPVykge1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGl0ZW1zW2l0ZW1zLmxlbmd0aCAtIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2dC5rZXlDb2RlID09PSB0aGlzLktleWNvZGVzXy5ET1dOX0FSUk9XKSB7XG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaXRlbXNbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAgICogSGFuZGxlcyBhIGtleWJvYXJkIGV2ZW50IG9uIGFuIGl0ZW0uXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLmhhbmRsZUl0ZW1LZXlib2FyZEV2ZW50XyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50XyAmJiB0aGlzLmNvbnRhaW5lcl8pIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uSVRFTSArICc6bm90KFtkaXNhYmxlZF0pJyk7XG4gICAgICAgIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwICYmIHRoaXMuY29udGFpbmVyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5JU19WSVNJQkxFKSkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGl0ZW1zKS5pbmRleE9mKGV2dC50YXJnZXQpO1xuICAgICAgICAgICAgaWYgKGV2dC5rZXlDb2RlID09PSB0aGlzLktleWNvZGVzXy5VUF9BUlJPVykge1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50SW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zW2N1cnJlbnRJbmRleCAtIDFdLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbaXRlbXMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2dC5rZXlDb2RlID09PSB0aGlzLktleWNvZGVzXy5ET1dOX0FSUk9XKSB7XG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA+IGN1cnJlbnRJbmRleCArIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbY3VycmVudEluZGV4ICsgMV0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtc1swXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZ0LmtleUNvZGUgPT09IHRoaXMuS2V5Y29kZXNfLlNQQUNFIHx8IGV2dC5rZXlDb2RlID09PSB0aGlzLktleWNvZGVzXy5FTlRFUikge1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIC8vIFNlbmQgbW91c2Vkb3duIGFuZCBtb3VzZXVwIHRvIHRyaWdnZXIgcmlwcGxlLlxuICAgICAgICAgICAgICAgIHZhciBlID0gbmV3IE1vdXNlRXZlbnQoJ21vdXNlZG93bicpO1xuICAgICAgICAgICAgICAgIGV2dC50YXJnZXQuZGlzcGF0Y2hFdmVudChlKTtcbiAgICAgICAgICAgICAgICBlID0gbmV3IE1vdXNlRXZlbnQoJ21vdXNldXAnKTtcbiAgICAgICAgICAgICAgICBldnQudGFyZ2V0LmRpc3BhdGNoRXZlbnQoZSk7XG4gICAgICAgICAgICAgICAgLy8gU2VuZCBjbGljay5cbiAgICAgICAgICAgICAgICBldnQudGFyZ2V0LmNsaWNrKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2dC5rZXlDb2RlID09PSB0aGlzLktleWNvZGVzXy5FU0NBUEUpIHtcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAgICogSGFuZGxlcyBhIGNsaWNrIGV2ZW50IG9uIGFuIGl0ZW0uXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLmhhbmRsZUl0ZW1DbGlja18gPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKGV2dC50YXJnZXQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpICE9PSBudWxsKSB7XG4gICAgICAgIGV2dC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBXYWl0IHNvbWUgdGltZSBiZWZvcmUgY2xvc2luZyBtZW51LCBzbyB0aGUgdXNlciBjYW4gc2VlIHRoZSByaXBwbGUuXG4gICAgICAgIHRoaXMuY2xvc2luZ18gPSB0cnVlO1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMuY2xvc2luZ18gPSBmYWxzZTtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCB0aGlzLkNvbnN0YW50Xy5DTE9TRV9USU1FT1VUKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIGluaXRpYWwgY2xpcCAoZm9yIG9wZW5pbmcgdGhlIG1lbnUpIG9yIGZpbmFsIGNsaXAgKGZvciBjbG9zaW5nXG4gICAqIGl0KSwgYW5kIGFwcGxpZXMgaXQuIFRoaXMgYWxsb3dzIHVzIHRvIGFuaW1hdGUgZnJvbSBvciB0byB0aGUgY29ycmVjdCBwb2ludCxcbiAgICogdGhhdCBpcywgdGhlIHBvaW50IGl0J3MgYWxpZ25lZCB0byBpbiB0aGUgXCJmb3JcIiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0IEhlaWdodCBvZiB0aGUgY2xpcCByZWN0YW5nbGVcbiAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoIFdpZHRoIG9mIHRoZSBjbGlwIHJlY3RhbmdsZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUuYXBwbHlDbGlwXyA9IGZ1bmN0aW9uIChoZWlnaHQsIHdpZHRoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uVU5BTElHTkVEKSkge1xuICAgICAgICAvLyBEbyBub3QgY2xpcC5cbiAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5jbGlwID0gJyc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkJPVFRPTV9SSUdIVCkpIHtcbiAgICAgICAgLy8gQ2xpcCB0byB0aGUgdG9wIHJpZ2h0IGNvcm5lciBvZiB0aGUgbWVudS5cbiAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5jbGlwID0gJ3JlY3QoMCAnICsgd2lkdGggKyAncHggJyArICcwICcgKyB3aWR0aCArICdweCknO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5UT1BfTEVGVCkpIHtcbiAgICAgICAgLy8gQ2xpcCB0byB0aGUgYm90dG9tIGxlZnQgY29ybmVyIG9mIHRoZSBtZW51LlxuICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLmNsaXAgPSAncmVjdCgnICsgaGVpZ2h0ICsgJ3B4IDAgJyArIGhlaWdodCArICdweCAwKSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlRPUF9SSUdIVCkpIHtcbiAgICAgICAgLy8gQ2xpcCB0byB0aGUgYm90dG9tIHJpZ2h0IGNvcm5lciBvZiB0aGUgbWVudS5cbiAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5jbGlwID0gJ3JlY3QoJyArIGhlaWdodCArICdweCAnICsgd2lkdGggKyAncHggJyArIGhlaWdodCArICdweCAnICsgd2lkdGggKyAncHgpJztcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBEZWZhdWx0OiBkbyBub3QgY2xpcCAoc2FtZSBhcyBjbGlwcGluZyB0byB0aGUgdG9wIGxlZnQgY29ybmVyKS5cbiAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5jbGlwID0gJyc7XG4gICAgfVxufTtcbi8qKlxuICAgKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGNsZWFuIHVwIGFmdGVyIHRoZSBhbmltYXRpb24gZW5kcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLmFkZEFuaW1hdGlvbkVuZExpc3RlbmVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgY2xlYW51cCk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIGNsZWFudXApO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19BTklNQVRJTkcpO1xuICAgIH0uYmluZCh0aGlzKTtcbiAgICAvLyBSZW1vdmUgYW5pbWF0aW9uIGNsYXNzIG9uY2UgdGhlIHRyYW5zaXRpb24gaXMgZG9uZS5cbiAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBjbGVhbnVwKTtcbiAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBjbGVhbnVwKTtcbn07XG4vKipcbiAgICogRGlzcGxheXMgdGhlIG1lbnUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8gJiYgdGhpcy5jb250YWluZXJfICYmIHRoaXMub3V0bGluZV8pIHtcbiAgICAgICAgLy8gTWVhc3VyZSB0aGUgaW5uZXIgZWxlbWVudC5cbiAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMuZWxlbWVudF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICB2YXIgd2lkdGggPSB0aGlzLmVsZW1lbnRfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICAvLyBBcHBseSB0aGUgaW5uZXIgZWxlbWVudCdzIHNpemUgdG8gdGhlIGNvbnRhaW5lciBhbmQgb3V0bGluZS5cbiAgICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgICB0aGlzLmNvbnRhaW5lcl8uc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgdGhpcy5vdXRsaW5lXy5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgdGhpcy5vdXRsaW5lXy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgICAgICB2YXIgdHJhbnNpdGlvbkR1cmF0aW9uID0gdGhpcy5Db25zdGFudF8uVFJBTlNJVElPTl9EVVJBVElPTl9TRUNPTkRTICogdGhpcy5Db25zdGFudF8uVFJBTlNJVElPTl9EVVJBVElPTl9GUkFDVElPTjtcbiAgICAgICAgLy8gQ2FsY3VsYXRlIHRyYW5zaXRpb24gZGVsYXlzIGZvciBpbmRpdmlkdWFsIG1lbnUgaXRlbXMsIHNvIHRoYXQgdGhleSBmYWRlXG4gICAgICAgIC8vIGluIG9uZSBhdCBhIHRpbWUuXG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLkNzc0NsYXNzZXNfLklURU0pO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaXRlbURlbGF5ID0gbnVsbDtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlRPUF9MRUZUKSB8fCB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlRPUF9SSUdIVCkpIHtcbiAgICAgICAgICAgICAgICBpdGVtRGVsYXkgPSAoaGVpZ2h0IC0gaXRlbXNbaV0ub2Zmc2V0VG9wIC0gaXRlbXNbaV0ub2Zmc2V0SGVpZ2h0KSAvIGhlaWdodCAqIHRyYW5zaXRpb25EdXJhdGlvbiArICdzJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaXRlbURlbGF5ID0gaXRlbXNbaV0ub2Zmc2V0VG9wIC8gaGVpZ2h0ICogdHJhbnNpdGlvbkR1cmF0aW9uICsgJ3MnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbXNbaV0uc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gaXRlbURlbGF5O1xuICAgICAgICB9XG4gICAgICAgIC8vIEFwcGx5IHRoZSBpbml0aWFsIGNsaXAgdG8gdGhlIHRleHQgYmVmb3JlIHdlIHN0YXJ0IGFuaW1hdGluZy5cbiAgICAgICAgdGhpcy5hcHBseUNsaXBfKGhlaWdodCwgd2lkdGgpO1xuICAgICAgICAvLyBXYWl0IGZvciB0aGUgbmV4dCBmcmFtZSwgdHVybiBvbiBhbmltYXRpb24sIGFuZCBhcHBseSB0aGUgZmluYWwgY2xpcC5cbiAgICAgICAgLy8gQWxzbyBtYWtlIGl0IHZpc2libGUuIFRoaXMgdHJpZ2dlcnMgdGhlIHRyYW5zaXRpb25zLlxuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0FOSU1BVElORyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLmNsaXAgPSAncmVjdCgwICcgKyB3aWR0aCArICdweCAnICsgaGVpZ2h0ICsgJ3B4IDApJztcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVklTSUJMRSk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgIC8vIENsZWFuIHVwIGFmdGVyIHRoZSBhbmltYXRpb24gaXMgY29tcGxldGUuXG4gICAgICAgIHRoaXMuYWRkQW5pbWF0aW9uRW5kTGlzdGVuZXJfKCk7XG4gICAgICAgIC8vIEFkZCBhIGNsaWNrIGxpc3RlbmVyIHRvIHRoZSBkb2N1bWVudCwgdG8gY2xvc2UgdGhlIG1lbnUuXG4gICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBDaGVjayB0byBzZWUgaWYgdGhlIGRvY3VtZW50IGlzIHByb2Nlc3NpbmcgdGhlIHNhbWUgZXZlbnQgdGhhdFxuICAgICAgICAgICAgLy8gZGlzcGxheWVkIHRoZSBtZW51IGluIHRoZSBmaXJzdCBwbGFjZS4gSWYgc28sIGRvIG5vdGhpbmcuXG4gICAgICAgICAgICAvLyBBbHNvIGNoZWNrIHRvIHNlZSBpZiB0aGUgbWVudSBpcyBpbiB0aGUgcHJvY2VzcyBvZiBjbG9zaW5nIGl0c2VsZiwgYW5kXG4gICAgICAgICAgICAvLyBkbyBub3RoaW5nIGluIHRoYXQgY2FzZS5cbiAgICAgICAgICAgIGlmIChlICE9PSBldnQgJiYgIXRoaXMuY2xvc2luZ18pIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNhbGxiYWNrKTtcbiAgICB9XG59O1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZVsnc2hvdyddID0gTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5zaG93O1xuLyoqXG4gICAqIEhpZGVzIHRoZSBtZW51LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfICYmIHRoaXMuY29udGFpbmVyXyAmJiB0aGlzLm91dGxpbmVfKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLkNzc0NsYXNzZXNfLklURU0pO1xuICAgICAgICAvLyBSZW1vdmUgYWxsIHRyYW5zaXRpb24gZGVsYXlzOyBtZW51IGl0ZW1zIGZhZGUgb3V0IGNvbmN1cnJlbnRseS5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaXRlbXNbaV0uc3R5bGUudHJhbnNpdGlvbkRlbGF5ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBNZWFzdXJlIHRoZSBpbm5lciBlbGVtZW50LlxuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5lbGVtZW50Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMuZWxlbWVudF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIC8vIFR1cm4gb24gYW5pbWF0aW9uLCBhbmQgYXBwbHkgdGhlIGZpbmFsIGNsaXAuIEFsc28gbWFrZSBpbnZpc2libGUuXG4gICAgICAgIC8vIFRoaXMgdHJpZ2dlcnMgdGhlIHRyYW5zaXRpb25zLlxuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19BTklNQVRJTkcpO1xuICAgICAgICB0aGlzLmFwcGx5Q2xpcF8oaGVpZ2h0LCB3aWR0aCk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyXy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVklTSUJMRSk7XG4gICAgICAgIC8vIENsZWFuIHVwIGFmdGVyIHRoZSBhbmltYXRpb24gaXMgY29tcGxldGUuXG4gICAgICAgIHRoaXMuYWRkQW5pbWF0aW9uRW5kTGlzdGVuZXJfKCk7XG4gICAgfVxufTtcbk1hdGVyaWFsTWVudS5wcm90b3R5cGVbJ2hpZGUnXSA9IE1hdGVyaWFsTWVudS5wcm90b3R5cGUuaGlkZTtcbi8qKlxuICAgKiBEaXNwbGF5cyBvciBoaWRlcyB0aGUgbWVudSwgZGVwZW5kaW5nIG9uIGN1cnJlbnQgc3RhdGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAodGhpcy5jb250YWluZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklTX1ZJU0lCTEUpKSB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2hvdyhldnQpO1xuICAgIH1cbn07XG5NYXRlcmlhbE1lbnUucHJvdG90eXBlWyd0b2dnbGUnXSA9IE1hdGVyaWFsTWVudS5wcm90b3R5cGUudG9nZ2xlO1xuLyoqXG4gICAqIERvd25ncmFkZSB0aGUgY29tcG9uZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUubWRsRG93bmdyYWRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaXRlbXMgPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5JVEVNKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGl0ZW1zW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ib3VuZEl0ZW1DbGljayk7XG4gICAgICAgIGl0ZW1zW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmJvdW5kSXRlbUtleWRvd24pO1xuICAgIH1cbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxNZW51LFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbE1lbnUnLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLW1lbnUnLFxuICAgIHdpZGdldDogdHJ1ZVxufSk7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgUHJvZ3Jlc3MgTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbFByb2dyZXNzID0gZnVuY3Rpb24gTWF0ZXJpYWxQcm9ncmVzcyhlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsUHJvZ3Jlc3MnXSA9IE1hdGVyaWFsUHJvZ3Jlc3M7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFByb2dyZXNzLnByb3RvdHlwZS5Db25zdGFudF8gPSB7fTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUHJvZ3Jlc3MucHJvdG90eXBlLkNzc0NsYXNzZXNfID0geyBJTkRFVEVSTUlOQVRFX0NMQVNTOiAnbWRsLXByb2dyZXNzX19pbmRldGVybWluYXRlJyB9O1xuLyoqXG4gICAqIFNldCB0aGUgY3VycmVudCBwcm9ncmVzcyBvZiB0aGUgcHJvZ3Jlc3NiYXIuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwIFBlcmNlbnRhZ2Ugb2YgdGhlIHByb2dyZXNzICgwLTEwMClcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsUHJvZ3Jlc3MucHJvdG90eXBlLnNldFByb2dyZXNzID0gZnVuY3Rpb24gKHApIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5JTkRFVEVSTUlOQVRFX0NMQVNTKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucHJvZ3Jlc3NiYXJfLnN0eWxlLndpZHRoID0gcCArICclJztcbn07XG5NYXRlcmlhbFByb2dyZXNzLnByb3RvdHlwZVsnc2V0UHJvZ3Jlc3MnXSA9IE1hdGVyaWFsUHJvZ3Jlc3MucHJvdG90eXBlLnNldFByb2dyZXNzO1xuLyoqXG4gICAqIFNldCB0aGUgY3VycmVudCBwcm9ncmVzcyBvZiB0aGUgYnVmZmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gcCBQZXJjZW50YWdlIG9mIHRoZSBidWZmZXIgKDAtMTAwKVxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxQcm9ncmVzcy5wcm90b3R5cGUuc2V0QnVmZmVyID0gZnVuY3Rpb24gKHApIHtcbiAgICB0aGlzLmJ1ZmZlcmJhcl8uc3R5bGUud2lkdGggPSBwICsgJyUnO1xuICAgIHRoaXMuYXV4YmFyXy5zdHlsZS53aWR0aCA9IDEwMCAtIHAgKyAnJSc7XG59O1xuTWF0ZXJpYWxQcm9ncmVzcy5wcm90b3R5cGVbJ3NldEJ1ZmZlciddID0gTWF0ZXJpYWxQcm9ncmVzcy5wcm90b3R5cGUuc2V0QnVmZmVyO1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbFByb2dyZXNzLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbC5jbGFzc05hbWUgPSAncHJvZ3Jlc3NiYXIgYmFyIGJhcjEnO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc2Jhcl8gPSBlbDtcbiAgICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gJ2J1ZmZlcmJhciBiYXIgYmFyMic7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICB0aGlzLmJ1ZmZlcmJhcl8gPSBlbDtcbiAgICAgICAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gJ2F1eGJhciBiYXIgYmFyMyc7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICB0aGlzLmF1eGJhcl8gPSBlbDtcbiAgICAgICAgdGhpcy5wcm9ncmVzc2Jhcl8uc3R5bGUud2lkdGggPSAnMCUnO1xuICAgICAgICB0aGlzLmJ1ZmZlcmJhcl8uc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIHRoaXMuYXV4YmFyXy5zdHlsZS53aWR0aCA9ICcwJSc7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCgnaXMtdXBncmFkZWQnKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIERvd25ncmFkZSB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxQcm9ncmVzcy5wcm90b3R5cGUubWRsRG93bmdyYWRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICB3aGlsZSAodGhpcy5lbGVtZW50Xy5maXJzdENoaWxkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8ucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50Xy5maXJzdENoaWxkKTtcbiAgICB9XG59O1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsUHJvZ3Jlc3MsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsUHJvZ3Jlc3MnLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLXByb2dyZXNzJyxcbiAgICB3aWRnZXQ6IHRydWVcbn0pO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIFJhZGlvIE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG52YXIgTWF0ZXJpYWxSYWRpbyA9IGZ1bmN0aW9uIE1hdGVyaWFsUmFkaW8oZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbFJhZGlvJ10gPSBNYXRlcmlhbFJhZGlvO1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuQ29uc3RhbnRfID0geyBUSU5ZX1RJTUVPVVQ6IDAuMDAxIH07XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBJU19GT0NVU0VEOiAnaXMtZm9jdXNlZCcsXG4gICAgSVNfRElTQUJMRUQ6ICdpcy1kaXNhYmxlZCcsXG4gICAgSVNfQ0hFQ0tFRDogJ2lzLWNoZWNrZWQnLFxuICAgIElTX1VQR1JBREVEOiAnaXMtdXBncmFkZWQnLFxuICAgIEpTX1JBRElPOiAnbWRsLWpzLXJhZGlvJyxcbiAgICBSQURJT19CVE46ICdtZGwtcmFkaW9fX2J1dHRvbicsXG4gICAgUkFESU9fT1VURVJfQ0lSQ0xFOiAnbWRsLXJhZGlvX19vdXRlci1jaXJjbGUnLFxuICAgIFJBRElPX0lOTkVSX0NJUkNMRTogJ21kbC1yYWRpb19faW5uZXItY2lyY2xlJyxcbiAgICBSSVBQTEVfRUZGRUNUOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QnLFxuICAgIFJJUFBMRV9JR05PUkVfRVZFTlRTOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QtLWlnbm9yZS1ldmVudHMnLFxuICAgIFJJUFBMRV9DT05UQUlORVI6ICdtZGwtcmFkaW9fX3JpcHBsZS1jb250YWluZXInLFxuICAgIFJJUFBMRV9DRU5URVI6ICdtZGwtcmlwcGxlLS1jZW50ZXInLFxuICAgIFJJUFBMRTogJ21kbC1yaXBwbGUnXG59O1xuLyoqXG4gICAqIEhhbmRsZSBjaGFuZ2Ugb2Ygc3RhdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLm9uQ2hhbmdlXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIFNpbmNlIG90aGVyIHJhZGlvIGJ1dHRvbnMgZG9uJ3QgZ2V0IGNoYW5nZSBldmVudHMsIHdlIG5lZWQgdG8gbG9vayBmb3JcbiAgICAvLyB0aGVtIHRvIHVwZGF0ZSB0aGVpciBjbGFzc2VzLlxuICAgIHZhciByYWRpb3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHRoaXMuQ3NzQ2xhc3Nlc18uSlNfUkFESU8pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmFkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBidXR0b24gPSByYWRpb3NbaV0ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLlJBRElPX0JUTik7XG4gICAgICAgIC8vIERpZmZlcmVudCBuYW1lID09IGRpZmZlcmVudCBncm91cCwgc28gbm8gcG9pbnQgdXBkYXRpbmcgdGhvc2UuXG4gICAgICAgIGlmIChidXR0b24uZ2V0QXR0cmlidXRlKCduYW1lJykgPT09IHRoaXMuYnRuRWxlbWVudF8uZ2V0QXR0cmlidXRlKCduYW1lJykpIHtcbiAgICAgICAgICAgIHJhZGlvc1tpXVsnTWF0ZXJpYWxSYWRpbyddLnVwZGF0ZUNsYXNzZXNfKCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gICAqIEhhbmRsZSBmb2N1cy5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUub25Gb2N1c18gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbn07XG4vKipcbiAgICogSGFuZGxlIGxvc3QgZm9jdXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLm9uQmx1cl8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbn07XG4vKipcbiAgICogSGFuZGxlIG1vdXNldXAuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLm9uTW91c2V1cF8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmJsdXJfKCk7XG59O1xuLyoqXG4gICAqIFVwZGF0ZSBjbGFzc2VzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLnVwZGF0ZUNsYXNzZXNfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2hlY2tEaXNhYmxlZCgpO1xuICAgIHRoaXMuY2hlY2tUb2dnbGVTdGF0ZSgpO1xufTtcbi8qKlxuICAgKiBBZGQgYmx1ci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5ibHVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPOiBmaWd1cmUgb3V0IHdoeSB0aGVyZSdzIGEgZm9jdXMgZXZlbnQgYmVpbmcgZmlyZWQgYWZ0ZXIgb3VyIGJsdXIsXG4gICAgLy8gc28gdGhhdCB3ZSBjYW4gYXZvaWQgdGhpcyBoYWNrLlxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5idG5FbGVtZW50Xy5ibHVyKCk7XG4gICAgfS5iaW5kKHRoaXMpLCB0aGlzLkNvbnN0YW50Xy5USU5ZX1RJTUVPVVQpO1xufTtcbi8vIFB1YmxpYyBtZXRob2RzLlxuLyoqXG4gICAqIENoZWNrIHRoZSBjb21wb25lbnRzIGRpc2FibGVkIHN0YXRlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuY2hlY2tEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5idG5FbGVtZW50Xy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVNBQkxFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRElTQUJMRUQpO1xuICAgIH1cbn07XG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZVsnY2hlY2tEaXNhYmxlZCddID0gTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuY2hlY2tEaXNhYmxlZDtcbi8qKlxuICAgKiBDaGVjayB0aGUgY29tcG9uZW50cyB0b2dnbGVkIHN0YXRlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuY2hlY2tUb2dnbGVTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5idG5FbGVtZW50Xy5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0NIRUNLRUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0NIRUNLRUQpO1xuICAgIH1cbn07XG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZVsnY2hlY2tUb2dnbGVTdGF0ZSddID0gTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuY2hlY2tUb2dnbGVTdGF0ZTtcbi8qKlxuICAgKiBEaXNhYmxlIHJhZGlvLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJ0bkVsZW1lbnRfLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGVbJ2Rpc2FibGUnXSA9IE1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLmRpc2FibGU7XG4vKipcbiAgICogRW5hYmxlIHJhZGlvLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYnRuRWxlbWVudF8uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGVbJ2VuYWJsZSddID0gTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuZW5hYmxlO1xuLyoqXG4gICAqIENoZWNrIHJhZGlvLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5idG5FbGVtZW50Xy5jaGVja2VkID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGVbJ2NoZWNrJ10gPSBNYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5jaGVjaztcbi8qKlxuICAgKiBVbmNoZWNrIHJhZGlvLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUudW5jaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJ0bkVsZW1lbnRfLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGVbJ3VuY2hlY2snXSA9IE1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLnVuY2hlY2s7XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgdGhpcy5idG5FbGVtZW50XyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLlJBRElPX0JUTik7XG4gICAgICAgIHZhciBvdXRlckNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgb3V0ZXJDaXJjbGUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJBRElPX09VVEVSX0NJUkNMRSk7XG4gICAgICAgIHZhciBpbm5lckNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgaW5uZXJDaXJjbGUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJBRElPX0lOTkVSX0NJUkNMRSk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQob3V0ZXJDaXJjbGUpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKGlubmVyQ2lyY2xlKTtcbiAgICAgICAgdmFyIHJpcHBsZUNvbnRhaW5lcjtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0VGRkVDVCkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9JR05PUkVfRVZFTlRTKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0NPTlRBSU5FUik7XG4gICAgICAgICAgICByaXBwbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9FRkZFQ1QpO1xuICAgICAgICAgICAgcmlwcGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfQ0VOVEVSKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNldXBfLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdmFyIHJpcHBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHJpcHBsZS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyaXBwbGUpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZChyaXBwbGVDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYnRuRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5vbkNoYW5nZV8uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYnRuRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLm9uRm9jdXNfLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmJ0bkVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLm9uQmx1cl8uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMub25Nb3VzZXVwXy5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19VUEdSQURFRCk7XG4gICAgfVxufTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbFJhZGlvLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbFJhZGlvJyxcbiAgICBjc3NDbGFzczogJ21kbC1qcy1yYWRpbycsXG4gICAgd2lkZ2V0OiB0cnVlXG59KTtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBTbGlkZXIgTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbFNsaWRlciA9IGZ1bmN0aW9uIE1hdGVyaWFsU2xpZGVyKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBCcm93c2VyIGZlYXR1cmUgZGV0ZWN0aW9uLlxuICAgIHRoaXMuaXNJRV8gPSB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsU2xpZGVyJ10gPSBNYXRlcmlhbFNsaWRlcjtcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5Db25zdGFudF8gPSB7fTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBJRV9DT05UQUlORVI6ICdtZGwtc2xpZGVyX19pZS1jb250YWluZXInLFxuICAgIFNMSURFUl9DT05UQUlORVI6ICdtZGwtc2xpZGVyX19jb250YWluZXInLFxuICAgIEJBQ0tHUk9VTkRfRkxFWDogJ21kbC1zbGlkZXJfX2JhY2tncm91bmQtZmxleCcsXG4gICAgQkFDS0dST1VORF9MT1dFUjogJ21kbC1zbGlkZXJfX2JhY2tncm91bmQtbG93ZXInLFxuICAgIEJBQ0tHUk9VTkRfVVBQRVI6ICdtZGwtc2xpZGVyX19iYWNrZ3JvdW5kLXVwcGVyJyxcbiAgICBJU19MT1dFU1RfVkFMVUU6ICdpcy1sb3dlc3QtdmFsdWUnLFxuICAgIElTX1VQR1JBREVEOiAnaXMtdXBncmFkZWQnXG59O1xuLyoqXG4gICAqIEhhbmRsZSBpbnB1dCBvbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFNsaWRlci5wcm90b3R5cGUub25JbnB1dF8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlU3R5bGVzXygpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgY2hhbmdlIG9uIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5vbkNoYW5nZV8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlU3R5bGVzXygpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgbW91c2V1cCBvbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFNsaWRlci5wcm90b3R5cGUub25Nb3VzZVVwXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnRhcmdldC5ibHVyKCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBtb3VzZWRvd24gb24gY29udGFpbmVyIGVsZW1lbnQuXG4gICAqIFRoaXMgaGFuZGxlciBpcyBwdXJwb3NlIGlzIHRvIG5vdCByZXF1aXJlIHRoZSB1c2UgdG8gY2xpY2tcbiAgICogZXhhY3RseSBvbiB0aGUgMnB4IHNsaWRlciBlbGVtZW50LCBhcyBGaXJlRm94IHNlZW1zIHRvIGJlIHZlcnlcbiAgICogc3RyaWN0IGFib3V0IHRoaXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAc3VwcHJlc3Mge21pc3NpbmdQcm9wZXJ0aWVzfVxuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5vbkNvbnRhaW5lck1vdXNlRG93bl8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBJZiB0aGlzIGNsaWNrIGlzIG5vdCBvbiB0aGUgcGFyZW50IGVsZW1lbnQgKGJ1dCByYXRoZXIgc29tZSBjaGlsZClcbiAgICAvLyBpZ25vcmUuIEl0IG1heSBzdGlsbCBidWJibGUgdXAuXG4gICAgaWYgKGV2ZW50LnRhcmdldCAhPT0gdGhpcy5lbGVtZW50Xy5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gRGlzY2FyZCB0aGUgb3JpZ2luYWwgZXZlbnQgYW5kIGNyZWF0ZSBhIG5ldyBldmVudCB0aGF0XG4gICAgLy8gaXMgb24gdGhlIHNsaWRlciBlbGVtZW50LlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIG5ld0V2ZW50ID0gbmV3IE1vdXNlRXZlbnQoJ21vdXNlZG93bicsIHtcbiAgICAgICAgdGFyZ2V0OiBldmVudC50YXJnZXQsXG4gICAgICAgIGJ1dHRvbnM6IGV2ZW50LmJ1dHRvbnMsXG4gICAgICAgIGNsaWVudFg6IGV2ZW50LmNsaWVudFgsXG4gICAgICAgIGNsaWVudFk6IHRoaXMuZWxlbWVudF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkueVxuICAgIH0pO1xuICAgIHRoaXMuZWxlbWVudF8uZGlzcGF0Y2hFdmVudChuZXdFdmVudCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSB1cGRhdGluZyBvZiB2YWx1ZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlLnVwZGF0ZVZhbHVlU3R5bGVzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBDYWxjdWxhdGUgYW5kIGFwcGx5IHBlcmNlbnRhZ2VzIHRvIGRpdiBzdHJ1Y3R1cmUgYmVoaW5kIHNsaWRlci5cbiAgICB2YXIgZnJhY3Rpb24gPSAodGhpcy5lbGVtZW50Xy52YWx1ZSAtIHRoaXMuZWxlbWVudF8ubWluKSAvICh0aGlzLmVsZW1lbnRfLm1heCAtIHRoaXMuZWxlbWVudF8ubWluKTtcbiAgICBpZiAoZnJhY3Rpb24gPT09IDApIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfTE9XRVNUX1ZBTFVFKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19MT1dFU1RfVkFMVUUpO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuaXNJRV8pIHtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kTG93ZXJfLnN0eWxlLmZsZXggPSBmcmFjdGlvbjtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kTG93ZXJfLnN0eWxlLndlYmtpdEZsZXggPSBmcmFjdGlvbjtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kVXBwZXJfLnN0eWxlLmZsZXggPSAxIC0gZnJhY3Rpb247XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZFVwcGVyXy5zdHlsZS53ZWJraXRGbGV4ID0gMSAtIGZyYWN0aW9uO1xuICAgIH1cbn07XG4vLyBQdWJsaWMgbWV0aG9kcy5cbi8qKlxuICAgKiBEaXNhYmxlIHNsaWRlci5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudF8uZGlzYWJsZWQgPSB0cnVlO1xufTtcbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZVsnZGlzYWJsZSddID0gTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlLmRpc2FibGU7XG4vKipcbiAgICogRW5hYmxlIHNsaWRlci5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50Xy5kaXNhYmxlZCA9IGZhbHNlO1xufTtcbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZVsnZW5hYmxlJ10gPSBNYXRlcmlhbFNsaWRlci5wcm90b3R5cGUuZW5hYmxlO1xuLyoqXG4gICAqIFVwZGF0ZSBzbGlkZXIgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBUaGUgdmFsdWUgdG8gd2hpY2ggdG8gc2V0IHRoZSBjb250cm9sIChvcHRpb25hbCkuXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFNsaWRlci5wcm90b3R5cGUuY2hhbmdlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZVZhbHVlU3R5bGVzXygpO1xufTtcbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZVsnY2hhbmdlJ10gPSBNYXRlcmlhbFNsaWRlci5wcm90b3R5cGUuY2hhbmdlO1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbFNsaWRlci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICBpZiAodGhpcy5pc0lFXykge1xuICAgICAgICAgICAgLy8gU2luY2Ugd2UgbmVlZCB0byBzcGVjaWZ5IGEgdmVyeSBsYXJnZSBoZWlnaHQgaW4gSUUgZHVlIHRvXG4gICAgICAgICAgICAvLyBpbXBsZW1lbnRhdGlvbiBsaW1pdGF0aW9ucywgd2UgYWRkIGEgcGFyZW50IGhlcmUgdGhhdCB0cmltcyBpdCBkb3duIHRvXG4gICAgICAgICAgICAvLyBhIHJlYXNvbmFibGUgc2l6ZS5cbiAgICAgICAgICAgIHZhciBjb250YWluZXJJRSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29udGFpbmVySUUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklFX0NPTlRBSU5FUik7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lcklFLCB0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgICAgIGNvbnRhaW5lcklFLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudF8pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gRm9yIG5vbi1JRSBicm93c2Vycywgd2UgbmVlZCBhIGRpdiBzdHJ1Y3R1cmUgdGhhdCBzaXRzIGJlaGluZCB0aGVcbiAgICAgICAgICAgIC8vIHNsaWRlciBhbmQgYWxsb3dzIHVzIHRvIHN0eWxlIHRoZSBsZWZ0IGFuZCByaWdodCBzaWRlcyBvZiBpdCB3aXRoXG4gICAgICAgICAgICAvLyBkaWZmZXJlbnQgY29sb3JzLlxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5TTElERVJfQ09OVEFJTkVSKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8ucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCB0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kRmxleCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYmFja2dyb3VuZEZsZXguY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkJBQ0tHUk9VTkRfRkxFWCk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZEZsZXgpO1xuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kTG93ZXJfID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRMb3dlcl8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkJBQ0tHUk9VTkRfTE9XRVIpO1xuICAgICAgICAgICAgYmFja2dyb3VuZEZsZXguYXBwZW5kQ2hpbGQodGhpcy5iYWNrZ3JvdW5kTG93ZXJfKTtcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZFVwcGVyXyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kVXBwZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5CQUNLR1JPVU5EX1VQUEVSKTtcbiAgICAgICAgICAgIGJhY2tncm91bmRGbGV4LmFwcGVuZENoaWxkKHRoaXMuYmFja2dyb3VuZFVwcGVyXyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib3VuZElucHV0SGFuZGxlciA9IHRoaXMub25JbnB1dF8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZENoYW5nZUhhbmRsZXIgPSB0aGlzLm9uQ2hhbmdlXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdW5kTW91c2VVcEhhbmRsZXIgPSB0aGlzLm9uTW91c2VVcF8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZENvbnRhaW5lck1vdXNlRG93bkhhbmRsZXIgPSB0aGlzLm9uQ29udGFpbmVyTW91c2VEb3duXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5ib3VuZElucHV0SGFuZGxlcik7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5ib3VuZENoYW5nZUhhbmRsZXIpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kTW91c2VVcEhhbmRsZXIpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5ib3VuZENvbnRhaW5lck1vdXNlRG93bkhhbmRsZXIpO1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlU3R5bGVzXygpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19VUEdSQURFRCk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBEb3duZ3JhZGUgdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5tZGxEb3duZ3JhZGVfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLmJvdW5kSW5wdXRIYW5kbGVyKTtcbiAgICB0aGlzLmVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuYm91bmRDaGFuZ2VIYW5kbGVyKTtcbiAgICB0aGlzLmVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kTW91c2VVcEhhbmRsZXIpO1xuICAgIHRoaXMuZWxlbWVudF8ucGFyZW50RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmJvdW5kQ29udGFpbmVyTW91c2VEb3duSGFuZGxlcik7XG59O1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsU2xpZGVyLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbFNsaWRlcicsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtc2xpZGVyJyxcbiAgICB3aWRnZXQ6IHRydWVcbn0pO1xuLyoqXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgU25hY2tiYXIgTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbFNuYWNrYmFyID0gZnVuY3Rpb24gTWF0ZXJpYWxTbmFja2JhcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsU25hY2tiYXInXSA9IE1hdGVyaWFsU25hY2tiYXI7XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFNuYWNrYmFyLnByb3RvdHlwZS5jc3NDbGFzc2VzXyA9IHtcbiAgICBTTkFDS0JBUjogJ21kbC1zbmFja2JhcicsXG4gICAgTUVTU0FHRTogJ21kbC1zbmFja2Jhcl9fdGV4dCcsXG4gICAgQUNUSU9OOiAnbWRsLXNuYWNrYmFyX19hY3Rpb24nLFxuICAgIEFDVElWRTogJ2lzLWFjdGl2ZSdcbn07XG4vKipcbiAgICogQ3JlYXRlIHRoZSBpbnRlcm5hbCBzbmFja2JhciBtYXJrdXAuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTbmFja2Jhci5wcm90b3R5cGUuY3JlYXRlU25hY2tiYXJfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc25hY2tiYXJFbGVtZW50XyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMudGV4dEVsZW1lbnRfID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5zbmFja2JhckVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5jc3NDbGFzc2VzXy5TTkFDS0JBUik7XG4gICAgdGhpcy50ZXh0RWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLmNzc0NsYXNzZXNfLk1FU1NBR0UpO1xuICAgIHRoaXMuc25hY2tiYXJFbGVtZW50Xy5hcHBlbmRDaGlsZCh0aGlzLnRleHRFbGVtZW50Xyk7XG4gICAgdGhpcy5zbmFja2JhckVsZW1lbnRfLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICBpZiAodGhpcy5hY3Rpb25IYW5kbGVyXykge1xuICAgICAgICB0aGlzLmFjdGlvbkVsZW1lbnRfID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRoaXMuYWN0aW9uRWxlbWVudF8udHlwZSA9ICdidXR0b24nO1xuICAgICAgICB0aGlzLmFjdGlvbkVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5jc3NDbGFzc2VzXy5BQ1RJT04pO1xuICAgICAgICB0aGlzLmFjdGlvbkVsZW1lbnRfLnRleHRDb250ZW50ID0gdGhpcy5hY3Rpb25UZXh0XztcbiAgICAgICAgdGhpcy5zbmFja2JhckVsZW1lbnRfLmFwcGVuZENoaWxkKHRoaXMuYWN0aW9uRWxlbWVudF8pO1xuICAgICAgICB0aGlzLmFjdGlvbkVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hY3Rpb25IYW5kbGVyXyk7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQodGhpcy5zbmFja2JhckVsZW1lbnRfKTtcbiAgICB0aGlzLnRleHRFbGVtZW50Xy50ZXh0Q29udGVudCA9IHRoaXMubWVzc2FnZV87XG4gICAgdGhpcy5zbmFja2JhckVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5jc3NDbGFzc2VzXy5BQ1RJVkUpO1xuICAgIHRoaXMuc25hY2tiYXJFbGVtZW50Xy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuICAgIHNldFRpbWVvdXQodGhpcy5jbGVhbnVwXy5iaW5kKHRoaXMpLCB0aGlzLnRpbWVvdXRfKTtcbn07XG4vKipcbiAgICogUmVtb3ZlIHRoZSBpbnRlcm5hbCBzbmFja2JhciBtYXJrdXAuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTbmFja2Jhci5wcm90b3R5cGUucmVtb3ZlU25hY2tiYXJfID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmFjdGlvbkVsZW1lbnRfICYmIHRoaXMuYWN0aW9uRWxlbWVudF8ucGFyZW50Tm9kZSkge1xuICAgICAgICB0aGlzLmFjdGlvbkVsZW1lbnRfLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5hY3Rpb25FbGVtZW50Xyk7XG4gICAgfVxuICAgIHRoaXMudGV4dEVsZW1lbnRfLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy50ZXh0RWxlbWVudF8pO1xuICAgIHRoaXMuc25hY2tiYXJFbGVtZW50Xy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuc25hY2tiYXJFbGVtZW50Xyk7XG59O1xuLyoqXG4gICAqIENyZWF0ZSB0aGUgaW50ZXJuYWwgc25hY2tiYXIgbWFya3VwLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gZGF0YSBUaGUgZGF0YSBmb3IgdGhlIG5vdGlmaWNhdGlvbi5cbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU25hY2tiYXIucHJvdG90eXBlLnNob3dTbmFja2JhciA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBwcm92aWRlIGEgZGF0YSBvYmplY3Qgd2l0aCBhdCBsZWFzdCBhIG1lc3NhZ2UgdG8gZGlzcGxheS4nKTtcbiAgICB9XG4gICAgaWYgKGRhdGFbJ21lc3NhZ2UnXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGUgYSBtZXNzYWdlIHRvIGJlIGRpc3BsYXllZC4nKTtcbiAgICB9XG4gICAgaWYgKGRhdGFbJ2FjdGlvbkhhbmRsZXInXSAmJiAhZGF0YVsnYWN0aW9uVGV4dCddKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGUgYWN0aW9uIHRleHQgd2l0aCB0aGUgaGFuZGxlci4nKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICAgIHRoaXMucXVldWVkTm90aWZpY2F0aW9uc18ucHVzaChkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubWVzc2FnZV8gPSBkYXRhWydtZXNzYWdlJ107XG4gICAgICAgIGlmIChkYXRhWyd0aW1lb3V0J10pIHtcbiAgICAgICAgICAgIHRoaXMudGltZW91dF8gPSBkYXRhWyd0aW1lb3V0J107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRfID0gODAwMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0YVsnYWN0aW9uSGFuZGxlciddKSB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbkhhbmRsZXJfID0gZGF0YVsnYWN0aW9uSGFuZGxlciddO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhWydhY3Rpb25UZXh0J10pIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uVGV4dF8gPSBkYXRhWydhY3Rpb25UZXh0J107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jcmVhdGVTbmFja2Jhcl8oKTtcbiAgICB9XG59O1xuTWF0ZXJpYWxTbmFja2Jhci5wcm90b3R5cGVbJ3Nob3dTbmFja2JhciddID0gTWF0ZXJpYWxTbmFja2Jhci5wcm90b3R5cGUuc2hvd1NuYWNrYmFyO1xuLyoqXG4gICAqIENoZWNrIGlmIHRoZSBxdWV1ZSBoYXMgaXRlbXMgd2l0aGluIGl0LlxuICAgKiBJZiBpdCBkb2VzLCBkaXNwbGF5IHRoZSBuZXh0IGVudHJ5LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU25hY2tiYXIucHJvdG90eXBlLmNoZWNrUXVldWVfID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnF1ZXVlZE5vdGlmaWNhdGlvbnNfLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5zaG93U25hY2tiYXIodGhpcy5xdWV1ZWROb3RpZmljYXRpb25zXy5zaGlmdCgpKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIENsZWFudXAgdGhlIHNuYWNrYmFyIGV2ZW50IGxpc3RlbmVycyBhbmQgYWNjZXNzaWJsaXR5IGF0dHJpYnV0ZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTbmFja2Jhci5wcm90b3R5cGUuY2xlYW51cF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zbmFja2JhckVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jc3NDbGFzc2VzXy5BQ1RJVkUpO1xuICAgIHRoaXMuc25hY2tiYXJFbGVtZW50Xy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgaWYgKHRoaXMuYWN0aW9uRWxlbWVudF8pIHtcbiAgICAgICAgdGhpcy5hY3Rpb25FbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWN0aW9uSGFuZGxlcl8pO1xuICAgIH1cbiAgICB0aGlzLnNldERlZmF1bHRzXygpO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5yZW1vdmVTbmFja2Jhcl8oKTtcbiAgICB0aGlzLmNoZWNrUXVldWVfKCk7XG59O1xuLyoqXG4gICAqIENsZWFuIHByb3BlcnRpZXMgdG8gYXZvaWQgb25lIGVudHJ5IGFmZmVjdGluZyBhbm90aGVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU25hY2tiYXIucHJvdG90eXBlLnNldERlZmF1bHRzXyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmFjdGlvbkhhbmRsZXJfID0gdW5kZWZpbmVkO1xuICAgIHRoaXMubWVzc2FnZV8gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hY3Rpb25UZXh0XyA9IHVuZGVmaW5lZDtcbn07XG4vKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgb2JqZWN0LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxTbmFja2Jhci5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldERlZmF1bHRzXygpO1xuICAgIHRoaXMucXVldWVkTm90aWZpY2F0aW9uc18gPSBbXTtcbn07XG5NYXRlcmlhbFNuYWNrYmFyLnByb3RvdHlwZVsnaW5pdCddID0gTWF0ZXJpYWxTbmFja2Jhci5wcm90b3R5cGUuaW5pdDtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbFNuYWNrYmFyLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbFNuYWNrYmFyJyxcbiAgICBjc3NDbGFzczogJ21kbC1qcy1zbmFja2JhcicsXG4gICAgd2lkZ2V0OiB0cnVlXG59KTtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBTcGlubmVyIE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKiBAY29uc3RydWN0b3JcbiAgICovXG52YXIgTWF0ZXJpYWxTcGlubmVyID0gZnVuY3Rpb24gTWF0ZXJpYWxTcGlubmVyKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxTcGlubmVyJ10gPSBNYXRlcmlhbFNwaW5uZXI7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFNwaW5uZXIucHJvdG90eXBlLkNvbnN0YW50XyA9IHsgTURMX1NQSU5ORVJfTEFZRVJfQ09VTlQ6IDQgfTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU3Bpbm5lci5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgTURMX1NQSU5ORVJfTEFZRVI6ICdtZGwtc3Bpbm5lcl9fbGF5ZXInLFxuICAgIE1ETF9TUElOTkVSX0NJUkNMRV9DTElQUEVSOiAnbWRsLXNwaW5uZXJfX2NpcmNsZS1jbGlwcGVyJyxcbiAgICBNRExfU1BJTk5FUl9DSVJDTEU6ICdtZGwtc3Bpbm5lcl9fY2lyY2xlJyxcbiAgICBNRExfU1BJTk5FUl9HQVBfUEFUQ0g6ICdtZGwtc3Bpbm5lcl9fZ2FwLXBhdGNoJyxcbiAgICBNRExfU1BJTk5FUl9MRUZUOiAnbWRsLXNwaW5uZXJfX2xlZnQnLFxuICAgIE1ETF9TUElOTkVSX1JJR0hUOiAnbWRsLXNwaW5uZXJfX3JpZ2h0J1xufTtcbi8qKlxuICAgKiBBdXhpbGlhcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIHNwaW5uZXIgbGF5ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBJbmRleCBvZiB0aGUgbGF5ZXIgdG8gYmUgY3JlYXRlZC5cbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU3Bpbm5lci5wcm90b3R5cGUuY3JlYXRlTGF5ZXIgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICB2YXIgbGF5ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsYXllci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uTURMX1NQSU5ORVJfTEFZRVIpO1xuICAgIGxheWVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5NRExfU1BJTk5FUl9MQVlFUiArICctJyArIGluZGV4KTtcbiAgICB2YXIgbGVmdENsaXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZWZ0Q2xpcHBlci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uTURMX1NQSU5ORVJfQ0lSQ0xFX0NMSVBQRVIpO1xuICAgIGxlZnRDbGlwcGVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5NRExfU1BJTk5FUl9MRUZUKTtcbiAgICB2YXIgZ2FwUGF0Y2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBnYXBQYXRjaC5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uTURMX1NQSU5ORVJfR0FQX1BBVENIKTtcbiAgICB2YXIgcmlnaHRDbGlwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmlnaHRDbGlwcGVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5NRExfU1BJTk5FUl9DSVJDTEVfQ0xJUFBFUik7XG4gICAgcmlnaHRDbGlwcGVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5NRExfU1BJTk5FUl9SSUdIVCk7XG4gICAgdmFyIGNpcmNsZU93bmVycyA9IFtcbiAgICAgICAgbGVmdENsaXBwZXIsXG4gICAgICAgIGdhcFBhdGNoLFxuICAgICAgICByaWdodENsaXBwZXJcbiAgICBdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2lyY2xlT3duZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2lyY2xlLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5NRExfU1BJTk5FUl9DSVJDTEUpO1xuICAgICAgICBjaXJjbGVPd25lcnNbaV0uYXBwZW5kQ2hpbGQoY2lyY2xlKTtcbiAgICB9XG4gICAgbGF5ZXIuYXBwZW5kQ2hpbGQobGVmdENsaXBwZXIpO1xuICAgIGxheWVyLmFwcGVuZENoaWxkKGdhcFBhdGNoKTtcbiAgICBsYXllci5hcHBlbmRDaGlsZChyaWdodENsaXBwZXIpO1xuICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQobGF5ZXIpO1xufTtcbk1hdGVyaWFsU3Bpbm5lci5wcm90b3R5cGVbJ2NyZWF0ZUxheWVyJ10gPSBNYXRlcmlhbFNwaW5uZXIucHJvdG90eXBlLmNyZWF0ZUxheWVyO1xuLyoqXG4gICAqIFN0b3BzIHRoZSBzcGlubmVyIGFuaW1hdGlvbi5cbiAgICogUHVibGljIG1ldGhvZCBmb3IgdXNlcnMgd2hvIG5lZWQgdG8gc3RvcCB0aGUgc3Bpbm5lciBmb3IgYW55IHJlYXNvbi5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU3Bpbm5lci5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xufTtcbk1hdGVyaWFsU3Bpbm5lci5wcm90b3R5cGVbJ3N0b3AnXSA9IE1hdGVyaWFsU3Bpbm5lci5wcm90b3R5cGUuc3RvcDtcbi8qKlxuICAgKiBTdGFydHMgdGhlIHNwaW5uZXIgYW5pbWF0aW9uLlxuICAgKiBQdWJsaWMgbWV0aG9kIGZvciB1c2VycyB3aG8gbmVlZCB0byBtYW51YWxseSBzdGFydCB0aGUgc3Bpbm5lciBmb3IgYW55IHJlYXNvblxuICAgKiAoaW5zdGVhZCBvZiBqdXN0IGFkZGluZyB0aGUgJ2lzLWFjdGl2ZScgY2xhc3MgdG8gdGhlaXIgbWFya3VwKS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU3Bpbm5lci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbn07XG5NYXRlcmlhbFNwaW5uZXIucHJvdG90eXBlWydzdGFydCddID0gTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZS5zdGFydDtcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHRoaXMuQ29uc3RhbnRfLk1ETF9TUElOTkVSX0xBWUVSX0NPVU5UOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTGF5ZXIoaSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKCdpcy11cGdyYWRlZCcpO1xuICAgIH1cbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxTcGlubmVyLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbFNwaW5uZXInLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLXNwaW5uZXInLFxuICAgIHdpZGdldDogdHJ1ZVxufSk7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgQ2hlY2tib3ggTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbFN3aXRjaCA9IGZ1bmN0aW9uIE1hdGVyaWFsU3dpdGNoKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxTd2l0Y2gnXSA9IE1hdGVyaWFsU3dpdGNoO1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLkNvbnN0YW50XyA9IHsgVElOWV9USU1FT1VUOiAwLjAwMSB9O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIElOUFVUOiAnbWRsLXN3aXRjaF9faW5wdXQnLFxuICAgIFRSQUNLOiAnbWRsLXN3aXRjaF9fdHJhY2snLFxuICAgIFRIVU1COiAnbWRsLXN3aXRjaF9fdGh1bWInLFxuICAgIEZPQ1VTX0hFTFBFUjogJ21kbC1zd2l0Y2hfX2ZvY3VzLWhlbHBlcicsXG4gICAgUklQUExFX0VGRkVDVDogJ21kbC1qcy1yaXBwbGUtZWZmZWN0JyxcbiAgICBSSVBQTEVfSUdOT1JFX0VWRU5UUzogJ21kbC1qcy1yaXBwbGUtZWZmZWN0LS1pZ25vcmUtZXZlbnRzJyxcbiAgICBSSVBQTEVfQ09OVEFJTkVSOiAnbWRsLXN3aXRjaF9fcmlwcGxlLWNvbnRhaW5lcicsXG4gICAgUklQUExFX0NFTlRFUjogJ21kbC1yaXBwbGUtLWNlbnRlcicsXG4gICAgUklQUExFOiAnbWRsLXJpcHBsZScsXG4gICAgSVNfRk9DVVNFRDogJ2lzLWZvY3VzZWQnLFxuICAgIElTX0RJU0FCTEVEOiAnaXMtZGlzYWJsZWQnLFxuICAgIElTX0NIRUNLRUQ6ICdpcy1jaGVja2VkJ1xufTtcbi8qKlxuICAgKiBIYW5kbGUgY2hhbmdlIG9mIHN0YXRlLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUub25DaGFuZ2VfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgZm9jdXMgb2YgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLm9uRm9jdXNfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRk9DVVNFRCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBsb3N0IGZvY3VzIG9mIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5vbkJsdXJfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRk9DVVNFRCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBtb3VzZXVwLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUub25Nb3VzZVVwXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuYmx1cl8oKTtcbn07XG4vKipcbiAgICogSGFuZGxlIGNsYXNzIHVwZGF0ZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLnVwZGF0ZUNsYXNzZXNfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2hlY2tEaXNhYmxlZCgpO1xuICAgIHRoaXMuY2hlY2tUb2dnbGVTdGF0ZSgpO1xufTtcbi8qKlxuICAgKiBBZGQgYmx1ci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuYmx1cl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVE9ETzogZmlndXJlIG91dCB3aHkgdGhlcmUncyBhIGZvY3VzIGV2ZW50IGJlaW5nIGZpcmVkIGFmdGVyIG91ciBibHVyLFxuICAgIC8vIHNvIHRoYXQgd2UgY2FuIGF2b2lkIHRoaXMgaGFjay5cbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5ibHVyKCk7XG4gICAgfS5iaW5kKHRoaXMpLCB0aGlzLkNvbnN0YW50Xy5USU5ZX1RJTUVPVVQpO1xufTtcbi8vIFB1YmxpYyBtZXRob2RzLlxuLyoqXG4gICAqIENoZWNrIHRoZSBjb21wb25lbnRzIGRpc2FibGVkIHN0YXRlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLmNoZWNrRGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50Xy5kaXNhYmxlZCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVNBQkxFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRElTQUJMRUQpO1xuICAgIH1cbn07XG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGVbJ2NoZWNrRGlzYWJsZWQnXSA9IE1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5jaGVja0Rpc2FibGVkO1xuLyoqXG4gICAqIENoZWNrIHRoZSBjb21wb25lbnRzIHRvZ2dsZWQgc3RhdGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuY2hlY2tUb2dnbGVTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnRfLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ0hFQ0tFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ0hFQ0tFRCk7XG4gICAgfVxufTtcbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZVsnY2hlY2tUb2dnbGVTdGF0ZSddID0gTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLmNoZWNrVG9nZ2xlU3RhdGU7XG4vKipcbiAgICogRGlzYWJsZSBzd2l0Y2guXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuZGlzYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGVbJ2Rpc2FibGUnXSA9IE1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5kaXNhYmxlO1xuLyoqXG4gICAqIEVuYWJsZSBzd2l0Y2guXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuZW5hYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGVbJ2VuYWJsZSddID0gTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLmVuYWJsZTtcbi8qKlxuICAgKiBBY3RpdmF0ZSBzd2l0Y2guXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUub24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmNoZWNrZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGVbJ29uJ10gPSBNYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUub247XG4vKipcbiAgICogRGVhY3RpdmF0ZSBzd2l0Y2guXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5jaGVja2VkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZVsnb2ZmJ10gPSBNYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUub2ZmO1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8gPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5JTlBVVCk7XG4gICAgICAgIHZhciB0cmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0cmFjay5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVFJBQ0spO1xuICAgICAgICB2YXIgdGh1bWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGh1bWIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlRIVU1CKTtcbiAgICAgICAgdmFyIGZvY3VzSGVscGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBmb2N1c0hlbHBlci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uRk9DVVNfSEVMUEVSKTtcbiAgICAgICAgdGh1bWIuYXBwZW5kQ2hpbGQoZm9jdXNIZWxwZXIpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKHRyYWNrKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZCh0aHVtYik7XG4gICAgICAgIHRoaXMuYm91bmRNb3VzZVVwSGFuZGxlciA9IHRoaXMub25Nb3VzZVVwXy5iaW5kKHRoaXMpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfRUZGRUNUKSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0lHTk9SRV9FVkVOVFMpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50XyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9DT05UQUlORVIpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0VGRkVDVCk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfQ0VOVEVSKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRNb3VzZVVwSGFuZGxlcik7XG4gICAgICAgICAgICB2YXIgcmlwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmlwcGxlLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEUpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5hcHBlbmRDaGlsZChyaXBwbGUpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZCh0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvdW5kQ2hhbmdlSGFuZGxlciA9IHRoaXMub25DaGFuZ2VfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRGb2N1c0hhbmRsZXIgPSB0aGlzLm9uRm9jdXNfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRCbHVySGFuZGxlciA9IHRoaXMub25CbHVyXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5ib3VuZENoYW5nZUhhbmRsZXIpO1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmJvdW5kRm9jdXNIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLmJvdW5kQmx1ckhhbmRsZXIpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kTW91c2VVcEhhbmRsZXIpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCgnaXMtdXBncmFkZWQnKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIERvd25ncmFkZSB0aGUgY29tcG9uZW50LlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5tZGxEb3duZ3JhZGVfID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfKSB7XG4gICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRNb3VzZVVwSGFuZGxlcik7XG4gICAgfVxuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmJvdW5kQ2hhbmdlSGFuZGxlcik7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5ib3VuZEZvY3VzSGFuZGxlcik7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLmJvdW5kQmx1ckhhbmRsZXIpO1xuICAgIHRoaXMuZWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRNb3VzZVVwSGFuZGxlcik7XG59O1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsU3dpdGNoLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbFN3aXRjaCcsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtc3dpdGNoJyxcbiAgICB3aWRnZXQ6IHRydWVcbn0pO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIFRhYnMgTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbFRhYnMgPSBmdW5jdGlvbiBNYXRlcmlhbFRhYnMoZWxlbWVudCkge1xuICAgIC8vIFN0b3JlcyB0aGUgSFRNTCBlbGVtZW50LlxuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbFRhYnMnXSA9IE1hdGVyaWFsVGFicztcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVGFicy5wcm90b3R5cGUuQ29uc3RhbnRfID0ge307XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRhYnMucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIFRBQl9DTEFTUzogJ21kbC10YWJzX190YWInLFxuICAgIFBBTkVMX0NMQVNTOiAnbWRsLXRhYnNfX3BhbmVsJyxcbiAgICBBQ1RJVkVfQ0xBU1M6ICdpcy1hY3RpdmUnLFxuICAgIFVQR1JBREVEX0NMQVNTOiAnaXMtdXBncmFkZWQnLFxuICAgIE1ETF9KU19SSVBQTEVfRUZGRUNUOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QnLFxuICAgIE1ETF9SSVBQTEVfQ09OVEFJTkVSOiAnbWRsLXRhYnNfX3JpcHBsZS1jb250YWluZXInLFxuICAgIE1ETF9SSVBQTEU6ICdtZGwtcmlwcGxlJyxcbiAgICBNRExfSlNfUklQUExFX0VGRkVDVF9JR05PUkVfRVZFTlRTOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QtLWlnbm9yZS1ldmVudHMnXG59O1xuLyoqXG4gICAqIEhhbmRsZSBjbGlja3MgdG8gYSB0YWJzIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVGFicy5wcm90b3R5cGUuaW5pdFRhYnNfID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLk1ETF9KU19SSVBQTEVfRUZGRUNUKSkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5NRExfSlNfUklQUExFX0VGRkVDVF9JR05PUkVfRVZFTlRTKTtcbiAgICB9XG4gICAgLy8gU2VsZWN0IGVsZW1lbnQgdGFicywgZG9jdW1lbnQgcGFuZWxzXG4gICAgdGhpcy50YWJzXyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLkNzc0NsYXNzZXNfLlRBQl9DTEFTUyk7XG4gICAgdGhpcy5wYW5lbHNfID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uUEFORUxfQ0xBU1MpO1xuICAgIC8vIENyZWF0ZSBuZXcgdGFicyBmb3IgZWFjaCB0YWIgZWxlbWVudFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50YWJzXy5sZW5ndGg7IGkrKykge1xuICAgICAgICBuZXcgTWF0ZXJpYWxUYWIodGhpcy50YWJzX1tpXSwgdGhpcyk7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlVQR1JBREVEX0NMQVNTKTtcbn07XG4vKipcbiAgICogUmVzZXQgdGFiIHN0YXRlLCBkcm9wcGluZyBhY3RpdmUgY2xhc3Nlc1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVGFicy5wcm90b3R5cGUucmVzZXRUYWJTdGF0ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLnRhYnNfLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHRoaXMudGFic19ba10uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLkFDVElWRV9DTEFTUyk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBSZXNldCBwYW5lbCBzdGF0ZSwgZHJvcGluZyBhY3RpdmUgY2xhc3Nlc1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVGFicy5wcm90b3R5cGUucmVzZXRQYW5lbFN0YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMucGFuZWxzXy5sZW5ndGg7IGorKykge1xuICAgICAgICB0aGlzLnBhbmVsc19bal0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLkFDVElWRV9DTEFTUyk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxUYWJzLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIHRoaXMuaW5pdFRhYnNfKCk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgYW4gaW5kaXZpZHVhbCB0YWIuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWIgVGhlIEhUTUwgZWxlbWVudCBmb3IgdGhlIHRhYi5cbiAgICogQHBhcmFtIHtNYXRlcmlhbFRhYnN9IGN0eCBUaGUgTWF0ZXJpYWxUYWJzIG9iamVjdCB0aGF0IG93bnMgdGhlIHRhYi5cbiAgICovXG5mdW5jdGlvbiBNYXRlcmlhbFRhYih0YWIsIGN0eCkge1xuICAgIGlmICh0YWIpIHtcbiAgICAgICAgaWYgKGN0eC5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnMoY3R4LkNzc0NsYXNzZXNfLk1ETF9KU19SSVBQTEVfRUZGRUNUKSkge1xuICAgICAgICAgICAgdmFyIHJpcHBsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGN0eC5Dc3NDbGFzc2VzXy5NRExfUklQUExFX0NPTlRBSU5FUik7XG4gICAgICAgICAgICByaXBwbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChjdHguQ3NzQ2xhc3Nlc18uTURMX0pTX1JJUFBMRV9FRkZFQ1QpO1xuICAgICAgICAgICAgdmFyIHJpcHBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHJpcHBsZS5jbGFzc0xpc3QuYWRkKGN0eC5Dc3NDbGFzc2VzXy5NRExfUklQUExFKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyaXBwbGUpO1xuICAgICAgICAgICAgdGFiLmFwcGVuZENoaWxkKHJpcHBsZUNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciBocmVmID0gdGFiLmhyZWYuc3BsaXQoJyMnKVsxXTtcbiAgICAgICAgICAgIHZhciBwYW5lbCA9IGN0eC5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yKCcjJyArIGhyZWYpO1xuICAgICAgICAgICAgY3R4LnJlc2V0VGFiU3RhdGVfKCk7XG4gICAgICAgICAgICBjdHgucmVzZXRQYW5lbFN0YXRlXygpO1xuICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQoY3R4LkNzc0NsYXNzZXNfLkFDVElWRV9DTEFTUyk7XG4gICAgICAgICAgICBwYW5lbC5jbGFzc0xpc3QuYWRkKGN0eC5Dc3NDbGFzc2VzXy5BQ1RJVkVfQ0xBU1MpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxUYWJzLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbFRhYnMnLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLXRhYnMnXG59KTtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBUZXh0ZmllbGQgTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbFRleHRmaWVsZCA9IGZ1bmN0aW9uIE1hdGVyaWFsVGV4dGZpZWxkKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICB0aGlzLm1heFJvd3MgPSB0aGlzLkNvbnN0YW50Xy5OT19NQVhfUk9XUztcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxUZXh0ZmllbGQnXSA9IE1hdGVyaWFsVGV4dGZpZWxkO1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLkNvbnN0YW50XyA9IHtcbiAgICBOT19NQVhfUk9XUzogLTEsXG4gICAgTUFYX1JPV1NfQVRUUklCVVRFOiAnbWF4cm93cydcbn07XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgTEFCRUw6ICdtZGwtdGV4dGZpZWxkX19sYWJlbCcsXG4gICAgSU5QVVQ6ICdtZGwtdGV4dGZpZWxkX19pbnB1dCcsXG4gICAgSVNfRElSVFk6ICdpcy1kaXJ0eScsXG4gICAgSVNfRk9DVVNFRDogJ2lzLWZvY3VzZWQnLFxuICAgIElTX0RJU0FCTEVEOiAnaXMtZGlzYWJsZWQnLFxuICAgIElTX0lOVkFMSUQ6ICdpcy1pbnZhbGlkJyxcbiAgICBJU19VUEdSQURFRDogJ2lzLXVwZ3JhZGVkJ1xufTtcbi8qKlxuICAgKiBIYW5kbGUgaW5wdXQgYmVpbmcgZW50ZXJlZC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLm9uS2V5RG93bl8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgY3VycmVudFJvd0NvdW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlLnNwbGl0KCdcXG4nKS5sZW5ndGg7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIGlmIChjdXJyZW50Um93Q291bnQgPj0gdGhpcy5tYXhSb3dzKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICAgKiBIYW5kbGUgZm9jdXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5vbkZvY3VzXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0ZPQ1VTRUQpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgbG9zdCBmb2N1cy5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLm9uQmx1cl8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbn07XG4vKipcbiAgICogSGFuZGxlIHJlc2V0IGV2ZW50IGZyb20gb3V0IHNpZGUuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5vblJlc2V0XyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG4vKipcbiAgICogSGFuZGxlIGNsYXNzIHVwZGF0ZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLnVwZGF0ZUNsYXNzZXNfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2hlY2tEaXNhYmxlZCgpO1xuICAgIHRoaXMuY2hlY2tWYWxpZGl0eSgpO1xuICAgIHRoaXMuY2hlY2tEaXJ0eSgpO1xufTtcbi8vIFB1YmxpYyBtZXRob2RzLlxuLyoqXG4gICAqIENoZWNrIHRoZSBkaXNhYmxlZCBzdGF0ZSBhbmQgdXBkYXRlIGZpZWxkIGFjY29yZGluZ2x5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmNoZWNrRGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaW5wdXRfLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0RJU0FCTEVEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVNBQkxFRCk7XG4gICAgfVxufTtcbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZVsnY2hlY2tEaXNhYmxlZCddID0gTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmNoZWNrRGlzYWJsZWQ7XG4vKipcbiAgICogQ2hlY2sgdGhlIHZhbGlkaXR5IHN0YXRlIGFuZCB1cGRhdGUgZmllbGQgYWNjb3JkaW5nbHkuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuY2hlY2tWYWxpZGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pbnB1dF8udmFsaWRpdHkpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRfLnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19JTlZBTElEKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0lOVkFMSUQpO1xuICAgICAgICB9XG4gICAgfVxufTtcbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZVsnY2hlY2tWYWxpZGl0eSddID0gTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmNoZWNrVmFsaWRpdHk7XG4vKipcbiAgICogQ2hlY2sgdGhlIGRpcnR5IHN0YXRlIGFuZCB1cGRhdGUgZmllbGQgYWNjb3JkaW5nbHkuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuY2hlY2tEaXJ0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pbnB1dF8udmFsdWUgJiYgdGhpcy5pbnB1dF8udmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVJUWSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRElSVFkpO1xuICAgIH1cbn07XG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGVbJ2NoZWNrRGlydHknXSA9IE1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5jaGVja0RpcnR5O1xuLyoqXG4gICAqIERpc2FibGUgdGV4dCBmaWVsZC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRfLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlWydkaXNhYmxlJ10gPSBNYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuZGlzYWJsZTtcbi8qKlxuICAgKiBFbmFibGUgdGV4dCBmaWVsZC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dF8uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlWydlbmFibGUnXSA9IE1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5lbmFibGU7XG4vKipcbiAgICogVXBkYXRlIHRleHQgZmllbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgdmFsdWUgdG8gd2hpY2ggdG8gc2V0IHRoZSBjb250cm9sIChvcHRpb25hbCkuXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuY2hhbmdlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaW5wdXRfLnZhbHVlID0gdmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbnB1dF8udmFsdWUgPSAnJztcbiAgICB9XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZVsnY2hhbmdlJ10gPSBNYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuY2hhbmdlO1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICB0aGlzLmxhYmVsXyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLkxBQkVMKTtcbiAgICAgICAgdGhpcy5pbnB1dF8gPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5JTlBVVCk7XG4gICAgICAgIGlmICh0aGlzLmlucHV0Xykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRfLmhhc0F0dHJpYnV0ZSh0aGlzLkNvbnN0YW50Xy5NQVhfUk9XU19BVFRSSUJVVEUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXhSb3dzID0gcGFyc2VJbnQodGhpcy5pbnB1dF8uZ2V0QXR0cmlidXRlKHRoaXMuQ29uc3RhbnRfLk1BWF9ST1dTX0FUVFJJQlVURSksIDEwKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4odGhpcy5tYXhSb3dzKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1heFJvd3MgPSB0aGlzLkNvbnN0YW50Xy5OT19NQVhfUk9XUztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmJvdW5kVXBkYXRlQ2xhc3Nlc0hhbmRsZXIgPSB0aGlzLnVwZGF0ZUNsYXNzZXNfLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmJvdW5kRm9jdXNIYW5kbGVyID0gdGhpcy5vbkZvY3VzXy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5ib3VuZEJsdXJIYW5kbGVyID0gdGhpcy5vbkJsdXJfLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmJvdW5kUmVzZXRIYW5kbGVyID0gdGhpcy5vblJlc2V0Xy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dF8uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLmJvdW5kVXBkYXRlQ2xhc3Nlc0hhbmRsZXIpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dF8uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmJvdW5kRm9jdXNIYW5kbGVyKTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXRfLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLmJvdW5kQmx1ckhhbmRsZXIpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dF8uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCB0aGlzLmJvdW5kUmVzZXRIYW5kbGVyKTtcbiAgICAgICAgICAgIGlmICh0aGlzLm1heFJvd3MgIT09IHRoaXMuQ29uc3RhbnRfLk5PX01BWF9ST1dTKSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogVGhpcyBzaG91bGQgaGFuZGxlIHBhc3RpbmcgbXVsdGkgbGluZSB0ZXh0LlxuICAgICAgICAgICAgICAgIC8vIEN1cnJlbnRseSBkb2Vzbid0LlxuICAgICAgICAgICAgICAgIHRoaXMuYm91bmRLZXlEb3duSGFuZGxlciA9IHRoaXMub25LZXlEb3duXy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRfLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmJvdW5kS2V5RG93bkhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVVBHUkFERUQpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICAgKiBEb3duZ3JhZGUgdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5tZGxEb3duZ3JhZGVfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5ib3VuZFVwZGF0ZUNsYXNzZXNIYW5kbGVyKTtcbiAgICB0aGlzLmlucHV0Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuYm91bmRGb2N1c0hhbmRsZXIpO1xuICAgIHRoaXMuaW5wdXRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLmJvdW5kQmx1ckhhbmRsZXIpO1xuICAgIHRoaXMuaW5wdXRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgdGhpcy5ib3VuZFJlc2V0SGFuZGxlcik7XG4gICAgaWYgKHRoaXMuYm91bmRLZXlEb3duSGFuZGxlcikge1xuICAgICAgICB0aGlzLmlucHV0Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5ib3VuZEtleURvd25IYW5kbGVyKTtcbiAgICB9XG59O1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsVGV4dGZpZWxkLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbFRleHRmaWVsZCcsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtdGV4dGZpZWxkJyxcbiAgICB3aWRnZXQ6IHRydWVcbn0pO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIFRvb2x0aXAgTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbFRvb2x0aXAgPSBmdW5jdGlvbiBNYXRlcmlhbFRvb2x0aXAoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbFRvb2x0aXAnXSA9IE1hdGVyaWFsVG9vbHRpcDtcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVG9vbHRpcC5wcm90b3R5cGUuQ29uc3RhbnRfID0ge307XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRvb2x0aXAucHJvdG90eXBlLkNzc0NsYXNzZXNfID0geyBJU19BQ1RJVkU6ICdpcy1hY3RpdmUnIH07XG4vKipcbiAgICogSGFuZGxlIG1vdXNlZW50ZXIgZm9yIHRvb2x0aXAuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVG9vbHRpcC5wcm90b3R5cGUuaGFuZGxlTW91c2VFbnRlcl8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB2YXIgcHJvcHMgPSBldmVudC50YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIGxlZnQgPSBwcm9wcy5sZWZ0ICsgcHJvcHMud2lkdGggLyAyO1xuICAgIHZhciBtYXJnaW5MZWZ0ID0gLTEgKiAodGhpcy5lbGVtZW50Xy5vZmZzZXRXaWR0aCAvIDIpO1xuICAgIGlmIChsZWZ0ICsgbWFyZ2luTGVmdCA8IDApIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5sZWZ0ID0gMDtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5tYXJnaW5MZWZ0ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLmxlZnQgPSBsZWZ0ICsgJ3B4JztcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5zdHlsZS5tYXJnaW5MZWZ0ID0gbWFyZ2luTGVmdCArICdweCc7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudF8uc3R5bGUudG9wID0gcHJvcHMudG9wICsgcHJvcHMuaGVpZ2h0ICsgMTAgKyAncHgnO1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0FDVElWRSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuYm91bmRNb3VzZUxlYXZlSGFuZGxlciwgZmFsc2UpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmJvdW5kTW91c2VMZWF2ZUhhbmRsZXIsIGZhbHNlKTtcbn07XG4vKipcbiAgICogSGFuZGxlIG1vdXNlbGVhdmUgZm9yIHRvb2x0aXAuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVG9vbHRpcC5wcm90b3R5cGUuaGFuZGxlTW91c2VMZWF2ZV8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19BQ1RJVkUpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmJvdW5kTW91c2VMZWF2ZUhhbmRsZXIpO1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmJvdW5kTW91c2VMZWF2ZUhhbmRsZXIsIGZhbHNlKTtcbn07XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsVG9vbHRpcC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICB2YXIgZm9yRWxJZCA9IHRoaXMuZWxlbWVudF8uZ2V0QXR0cmlidXRlKCdmb3InKTtcbiAgICAgICAgaWYgKGZvckVsSWQpIHtcbiAgICAgICAgICAgIHRoaXMuZm9yRWxlbWVudF8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JFbElkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mb3JFbGVtZW50Xykge1xuICAgICAgICAgICAgLy8gVGFiaW5kZXggbmVlZHMgdG8gYmUgc2V0IGZvciBgYmx1cmAgZXZlbnRzIHRvIGJlIGVtaXR0ZWRcbiAgICAgICAgICAgIGlmICghdGhpcy5mb3JFbGVtZW50Xy5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvckVsZW1lbnRfLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ib3VuZE1vdXNlRW50ZXJIYW5kbGVyID0gdGhpcy5oYW5kbGVNb3VzZUVudGVyXy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5ib3VuZE1vdXNlTGVhdmVIYW5kbGVyID0gdGhpcy5oYW5kbGVNb3VzZUxlYXZlXy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5mb3JFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5ib3VuZE1vdXNlRW50ZXJIYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmZvckVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ib3VuZE1vdXNlRW50ZXJIYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmZvckVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLmJvdW5kTW91c2VMZWF2ZUhhbmRsZXIpO1xuICAgICAgICAgICAgdGhpcy5mb3JFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5ib3VuZE1vdXNlRW50ZXJIYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLmZvckVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmJvdW5kTW91c2VMZWF2ZUhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICAgKiBEb3duZ3JhZGUgdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVG9vbHRpcC5wcm90b3R5cGUubWRsRG93bmdyYWRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5mb3JFbGVtZW50Xykge1xuICAgICAgICB0aGlzLmZvckVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLmJvdW5kTW91c2VFbnRlckhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5mb3JFbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYm91bmRNb3VzZUVudGVySGFuZGxlciwgZmFsc2UpO1xuICAgICAgICB0aGlzLmZvckVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmJvdW5kTW91c2VFbnRlckhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5mb3JFbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5ib3VuZE1vdXNlTGVhdmVIYW5kbGVyKTtcbiAgICB9XG59O1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsVG9vbHRpcCxcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxUb29sdGlwJyxcbiAgICBjc3NDbGFzczogJ21kbC10b29sdGlwJ1xufSk7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgTGF5b3V0IE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG52YXIgTWF0ZXJpYWxMYXlvdXQgPSBmdW5jdGlvbiBNYXRlcmlhbExheW91dChlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsTGF5b3V0J10gPSBNYXRlcmlhbExheW91dDtcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTGF5b3V0LnByb3RvdHlwZS5Db25zdGFudF8gPSB7XG4gICAgTUFYX1dJRFRIOiAnKG1heC13aWR0aDogMTAyNHB4KScsXG4gICAgVEFCX1NDUk9MTF9QSVhFTFM6IDEwMCxcbiAgICBNRU5VX0lDT046ICdtZW51JyxcbiAgICBDSEVWUk9OX0xFRlQ6ICdjaGV2cm9uX2xlZnQnLFxuICAgIENIRVZST05fUklHSFQ6ICdjaGV2cm9uX3JpZ2h0J1xufTtcbi8qKlxuICAgKiBNb2Rlcy5cbiAgICpcbiAgICogQGVudW0ge251bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUuTW9kZV8gPSB7XG4gICAgU1RBTkRBUkQ6IDAsXG4gICAgU0VBTUVEOiAxLFxuICAgIFdBVEVSRkFMTDogMixcbiAgICBTQ1JPTEw6IDNcbn07XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgQ09OVEFJTkVSOiAnbWRsLWxheW91dF9fY29udGFpbmVyJyxcbiAgICBIRUFERVI6ICdtZGwtbGF5b3V0X19oZWFkZXInLFxuICAgIERSQVdFUjogJ21kbC1sYXlvdXRfX2RyYXdlcicsXG4gICAgQ09OVEVOVDogJ21kbC1sYXlvdXRfX2NvbnRlbnQnLFxuICAgIERSQVdFUl9CVE46ICdtZGwtbGF5b3V0X19kcmF3ZXItYnV0dG9uJyxcbiAgICBJQ09OOiAnbWF0ZXJpYWwtaWNvbnMnLFxuICAgIEpTX1JJUFBMRV9FRkZFQ1Q6ICdtZGwtanMtcmlwcGxlLWVmZmVjdCcsXG4gICAgUklQUExFX0NPTlRBSU5FUjogJ21kbC1sYXlvdXRfX3RhYi1yaXBwbGUtY29udGFpbmVyJyxcbiAgICBSSVBQTEU6ICdtZGwtcmlwcGxlJyxcbiAgICBSSVBQTEVfSUdOT1JFX0VWRU5UUzogJ21kbC1qcy1yaXBwbGUtZWZmZWN0LS1pZ25vcmUtZXZlbnRzJyxcbiAgICBIRUFERVJfU0VBTUVEOiAnbWRsLWxheW91dF9faGVhZGVyLS1zZWFtZWQnLFxuICAgIEhFQURFUl9XQVRFUkZBTEw6ICdtZGwtbGF5b3V0X19oZWFkZXItLXdhdGVyZmFsbCcsXG4gICAgSEVBREVSX1NDUk9MTDogJ21kbC1sYXlvdXRfX2hlYWRlci0tc2Nyb2xsJyxcbiAgICBGSVhFRF9IRUFERVI6ICdtZGwtbGF5b3V0LS1maXhlZC1oZWFkZXInLFxuICAgIE9CRlVTQ0FUT1I6ICdtZGwtbGF5b3V0X19vYmZ1c2NhdG9yJyxcbiAgICBUQUJfQkFSOiAnbWRsLWxheW91dF9fdGFiLWJhcicsXG4gICAgVEFCX0NPTlRBSU5FUjogJ21kbC1sYXlvdXRfX3RhYi1iYXItY29udGFpbmVyJyxcbiAgICBUQUI6ICdtZGwtbGF5b3V0X190YWInLFxuICAgIFRBQl9CQVJfQlVUVE9OOiAnbWRsLWxheW91dF9fdGFiLWJhci1idXR0b24nLFxuICAgIFRBQl9CQVJfTEVGVF9CVVRUT046ICdtZGwtbGF5b3V0X190YWItYmFyLWxlZnQtYnV0dG9uJyxcbiAgICBUQUJfQkFSX1JJR0hUX0JVVFRPTjogJ21kbC1sYXlvdXRfX3RhYi1iYXItcmlnaHQtYnV0dG9uJyxcbiAgICBQQU5FTDogJ21kbC1sYXlvdXRfX3RhYi1wYW5lbCcsXG4gICAgSEFTX0RSQVdFUjogJ2hhcy1kcmF3ZXInLFxuICAgIEhBU19UQUJTOiAnaGFzLXRhYnMnLFxuICAgIEhBU19TQ1JPTExJTkdfSEVBREVSOiAnaGFzLXNjcm9sbGluZy1oZWFkZXInLFxuICAgIENBU1RJTkdfU0hBRE9XOiAnaXMtY2FzdGluZy1zaGFkb3cnLFxuICAgIElTX0NPTVBBQ1Q6ICdpcy1jb21wYWN0JyxcbiAgICBJU19TTUFMTF9TQ1JFRU46ICdpcy1zbWFsbC1zY3JlZW4nLFxuICAgIElTX0RSQVdFUl9PUEVOOiAnaXMtdmlzaWJsZScsXG4gICAgSVNfQUNUSVZFOiAnaXMtYWN0aXZlJyxcbiAgICBJU19VUEdSQURFRDogJ2lzLXVwZ3JhZGVkJyxcbiAgICBJU19BTklNQVRJTkc6ICdpcy1hbmltYXRpbmcnLFxuICAgIE9OX0xBUkdFX1NDUkVFTjogJ21kbC1sYXlvdXQtLWxhcmdlLXNjcmVlbi1vbmx5JyxcbiAgICBPTl9TTUFMTF9TQ1JFRU46ICdtZGwtbGF5b3V0LS1zbWFsbC1zY3JlZW4tb25seSdcbn07XG4vKipcbiAgICogSGFuZGxlcyBzY3JvbGxpbmcgb24gdGhlIGNvbnRlbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxMYXlvdXQucHJvdG90eXBlLmNvbnRlbnRTY3JvbGxIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklTX0FOSU1BVElORykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb250ZW50Xy5zY3JvbGxUb3AgPiAwICYmICF0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ09NUEFDVCkpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5DQVNUSU5HX1NIQURPVyk7XG4gICAgICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ09NUEFDVCk7XG4gICAgICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQU5JTUFUSU5HKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udGVudF8uc2Nyb2xsVG9wIDw9IDAgJiYgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklTX0NPTVBBQ1QpKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uQ0FTVElOR19TSEFET1cpO1xuICAgICAgICB0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0NPTVBBQ1QpO1xuICAgICAgICB0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0FOSU1BVElORyk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBIYW5kbGVzIGNoYW5nZXMgaW4gc2NyZWVuIHNpemUuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxMYXlvdXQucHJvdG90eXBlLnNjcmVlblNpemVIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5zY3JlZW5TaXplTWVkaWFRdWVyeV8ubWF0Y2hlcykge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19TTUFMTF9TQ1JFRU4pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX1NNQUxMX1NDUkVFTik7XG4gICAgICAgIC8vIENvbGxhcHNlIGRyYXdlciAoaWYgYW55KSB3aGVuIG1vdmluZyB0byBhIGxhcmdlIHNjcmVlbiBzaXplLlxuICAgICAgICBpZiAodGhpcy5kcmF3ZXJfKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdlcl8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0RSQVdFUl9PUEVOKTtcbiAgICAgICAgICAgIHRoaXMub2JmdXNjYXRvcl8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0RSQVdFUl9PUEVOKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAgICogSGFuZGxlcyB0b2dnbGluZyBvZiB0aGUgZHJhd2VyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTGF5b3V0LnByb3RvdHlwZS5kcmF3ZXJUb2dnbGVIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmRyYXdlcl8uY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLkNzc0NsYXNzZXNfLklTX0RSQVdFUl9PUEVOKTtcbiAgICB0aGlzLm9iZnVzY2F0b3JfLmNsYXNzTGlzdC50b2dnbGUodGhpcy5Dc3NDbGFzc2VzXy5JU19EUkFXRVJfT1BFTik7XG59O1xuLyoqXG4gICAqIEhhbmRsZXMgKHVuKXNldHRpbmcgdGhlIGBpcy1hbmltYXRpbmdgIGNsYXNzXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxMYXlvdXQucHJvdG90eXBlLmhlYWRlclRyYW5zaXRpb25FbmRIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0FOSU1BVElORyk7XG59O1xuLyoqXG4gICAqIEhhbmRsZXMgZXhwYW5kaW5nIHRoZSBoZWFkZXIgb24gY2xpY2tcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUuaGVhZGVyQ2xpY2tIYW5kbGVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklTX0NPTVBBQ1QpKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ09NUEFDVCk7XG4gICAgICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQU5JTUFUSU5HKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIFJlc2V0IHRhYiBzdGF0ZSwgZHJvcHBpbmcgYWN0aXZlIGNsYXNzZXNcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUucmVzZXRUYWJTdGF0ZV8gPSBmdW5jdGlvbiAodGFiQmFyKSB7XG4gICAgZm9yICh2YXIgayA9IDA7IGsgPCB0YWJCYXIubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdGFiQmFyW2tdLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19BQ1RJVkUpO1xuICAgIH1cbn07XG4vKipcbiAgICogUmVzZXQgcGFuZWwgc3RhdGUsIGRyb3BpbmcgYWN0aXZlIGNsYXNzZXNcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUucmVzZXRQYW5lbFN0YXRlXyA9IGZ1bmN0aW9uIChwYW5lbHMpIHtcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBhbmVscy5sZW5ndGg7IGorKykge1xuICAgICAgICBwYW5lbHNbal0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0FDVElWRSk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxMYXlvdXQucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkNPTlRBSU5FUik7XG4gICAgICAgIHRoaXMuZWxlbWVudF8ucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCB0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudF8pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50Xyk7XG4gICAgICAgIHZhciBkaXJlY3RDaGlsZHJlbiA9IHRoaXMuZWxlbWVudF8uY2hpbGROb2RlcztcbiAgICAgICAgZm9yICh2YXIgYyA9IDA7IGMgPCBkaXJlY3RDaGlsZHJlbi5sZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gZGlyZWN0Q2hpbGRyZW5bY107XG4gICAgICAgICAgICBpZiAoY2hpbGQuY2xhc3NMaXN0ICYmIGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkhFQURFUikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlcl8gPSBjaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaGlsZC5jbGFzc0xpc3QgJiYgY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uRFJBV0VSKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd2VyXyA9IGNoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkLmNsYXNzTGlzdCAmJiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5DT05URU5UKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudF8gPSBjaGlsZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5oZWFkZXJfKSB7XG4gICAgICAgICAgICB0aGlzLnRhYkJhcl8gPSB0aGlzLmhlYWRlcl8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLlRBQl9CQVIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtb2RlID0gdGhpcy5Nb2RlXy5TVEFOREFSRDtcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyXykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5IRUFERVJfU0VBTUVEKSkge1xuICAgICAgICAgICAgICAgIG1vZGUgPSB0aGlzLk1vZGVfLlNFQU1FRDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkhFQURFUl9XQVRFUkZBTEwpKSB7XG4gICAgICAgICAgICAgICAgbW9kZSA9IHRoaXMuTW9kZV8uV0FURVJGQUxMO1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyXy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5oZWFkZXJUcmFuc2l0aW9uRW5kSGFuZGxlcl8uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJfLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oZWFkZXJDbGlja0hhbmRsZXJfLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSEVBREVSX1NDUk9MTCkpIHtcbiAgICAgICAgICAgICAgICBtb2RlID0gdGhpcy5Nb2RlXy5TQ1JPTEw7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5IQVNfU0NST0xMSU5HX0hFQURFUik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobW9kZSA9PT0gdGhpcy5Nb2RlXy5TVEFOREFSRCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uQ0FTVElOR19TSEFET1cpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhYkJhcl8pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJCYXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5DQVNUSU5HX1NIQURPVyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSB0aGlzLk1vZGVfLlNFQU1FRCB8fCBtb2RlID09PSB0aGlzLk1vZGVfLlNDUk9MTCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uQ0FTVElOR19TSEFET1cpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhYkJhcl8pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YWJCYXJfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5DQVNUSU5HX1NIQURPVyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChtb2RlID09PSB0aGlzLk1vZGVfLldBVEVSRkFMTCkge1xuICAgICAgICAgICAgICAgIC8vIEFkZCBhbmQgcmVtb3ZlIHNoYWRvd3MgZGVwZW5kaW5nIG9uIHNjcm9sbCBwb3NpdGlvbi5cbiAgICAgICAgICAgICAgICAvLyBBbHNvIGFkZC9yZW1vdmUgYXV4aWxpYXJ5IGNsYXNzIGZvciBzdHlsaW5nIG9mIHRoZSBjb21wYWN0IHZlcnNpb24gb2ZcbiAgICAgICAgICAgICAgICAvLyB0aGUgaGVhZGVyLlxuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudF8uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5jb250ZW50U2Nyb2xsSGFuZGxlcl8uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50U2Nyb2xsSGFuZGxlcl8oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBBZGQgZHJhd2VyIHRvZ2dsaW5nIGJ1dHRvbiB0byBvdXIgbGF5b3V0LCBpZiB3ZSBoYXZlIGFuIG9wZW5hYmxlIGRyYXdlci5cbiAgICAgICAgaWYgKHRoaXMuZHJhd2VyXykge1xuICAgICAgICAgICAgdmFyIGRyYXdlckJ1dHRvbiA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLkRSQVdFUl9CVE4pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBkcmF3ZXJCdXR0b24gPT09ICd1bmRlZmluZWQnIHx8IGRyYXdlckJ1dHRvbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRyYXdlckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRyYXdlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uRFJBV0VSX0JUTik7XG4gICAgICAgICAgICAgICAgdmFyIGRyYXdlckJ1dHRvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICAgICAgICAgZHJhd2VyQnV0dG9uSWNvbi5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSUNPTik7XG4gICAgICAgICAgICAgICAgZHJhd2VyQnV0dG9uSWNvbi50ZXh0Q29udGVudCA9IHRoaXMuQ29uc3RhbnRfLk1FTlVfSUNPTjtcbiAgICAgICAgICAgICAgICBkcmF3ZXJCdXR0b24uYXBwZW5kQ2hpbGQoZHJhd2VyQnV0dG9uSWNvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5kcmF3ZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLk9OX0xBUkdFX1NDUkVFTikpIHtcbiAgICAgICAgICAgICAgICAvL0lmIGRyYXdlciBoYXMgT05fTEFSR0VfU0NSRUVOIGNsYXNzIHRoZW4gYWRkIGl0IHRvIHRoZSBkcmF3ZXIgdG9nZ2xlIGJ1dHRvbiBhcyB3ZWxsLlxuICAgICAgICAgICAgICAgIGRyYXdlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uT05fTEFSR0VfU0NSRUVOKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5kcmF3ZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLk9OX1NNQUxMX1NDUkVFTikpIHtcbiAgICAgICAgICAgICAgICAvL0lmIGRyYXdlciBoYXMgT05fU01BTExfU0NSRUVOIGNsYXNzIHRoZW4gYWRkIGl0IHRvIHRoZSBkcmF3ZXIgdG9nZ2xlIGJ1dHRvbiBhcyB3ZWxsLlxuICAgICAgICAgICAgICAgIGRyYXdlckJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uT05fU01BTExfU0NSRUVOKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRyYXdlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZHJhd2VyVG9nZ2xlSGFuZGxlcl8uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAvLyBBZGQgYSBjbGFzcyBpZiB0aGUgbGF5b3V0IGhhcyBhIGRyYXdlciwgZm9yIGFsdGVyaW5nIHRoZSBsZWZ0IHBhZGRpbmcuXG4gICAgICAgICAgICAvLyBBZGRzIHRoZSBIQVNfRFJBV0VSIHRvIHRoZSBlbGVtZW50cyBzaW5jZSB0aGlzLmhlYWRlcl8gbWF5IG9yIG1heVxuICAgICAgICAgICAgLy8gbm90IGJlIHByZXNlbnQuXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5IQVNfRFJBV0VSKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSBmaXhlZCBoZWFkZXIsIGFkZCB0aGUgYnV0dG9uIHRvIHRoZSBoZWFkZXIgcmF0aGVyIHRoYW5cbiAgICAgICAgICAgIC8vIHRoZSBsYXlvdXQuXG4gICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5GSVhFRF9IRUFERVIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJfLmluc2VydEJlZm9yZShkcmF3ZXJCdXR0b24sIHRoaXMuaGVhZGVyXy5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5pbnNlcnRCZWZvcmUoZHJhd2VyQnV0dG9uLCB0aGlzLmNvbnRlbnRfKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBvYmZ1c2NhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBvYmZ1c2NhdG9yLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5PQkZVU0NBVE9SKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQob2JmdXNjYXRvcik7XG4gICAgICAgICAgICBvYmZ1c2NhdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kcmF3ZXJUb2dnbGVIYW5kbGVyXy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMub2JmdXNjYXRvcl8gPSBvYmZ1c2NhdG9yO1xuICAgICAgICB9XG4gICAgICAgIC8vIEtlZXAgYW4gZXllIG9uIHNjcmVlbiBzaXplLCBhbmQgYWRkL3JlbW92ZSBhdXhpbGlhcnkgY2xhc3MgZm9yIHN0eWxpbmdcbiAgICAgICAgLy8gb2Ygc21hbGwgc2NyZWVucy5cbiAgICAgICAgdGhpcy5zY3JlZW5TaXplTWVkaWFRdWVyeV8gPSB3aW5kb3cubWF0Y2hNZWRpYSh0aGlzLkNvbnN0YW50Xy5NQVhfV0lEVEgpO1xuICAgICAgICB0aGlzLnNjcmVlblNpemVNZWRpYVF1ZXJ5Xy5hZGRMaXN0ZW5lcih0aGlzLnNjcmVlblNpemVIYW5kbGVyXy5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5zY3JlZW5TaXplSGFuZGxlcl8oKTtcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSB0YWJzLCBpZiBhbnkuXG4gICAgICAgIGlmICh0aGlzLmhlYWRlcl8gJiYgdGhpcy50YWJCYXJfKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5IQVNfVEFCUyk7XG4gICAgICAgICAgICB2YXIgdGFiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YWJDb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlRBQl9DT05UQUlORVIpO1xuICAgICAgICAgICAgdGhpcy5oZWFkZXJfLmluc2VydEJlZm9yZSh0YWJDb250YWluZXIsIHRoaXMudGFiQmFyXyk7XG4gICAgICAgICAgICB0aGlzLmhlYWRlcl8ucmVtb3ZlQ2hpbGQodGhpcy50YWJCYXJfKTtcbiAgICAgICAgICAgIHZhciBsZWZ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZWZ0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5UQUJfQkFSX0JVVFRPTik7XG4gICAgICAgICAgICBsZWZ0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5UQUJfQkFSX0xFRlRfQlVUVE9OKTtcbiAgICAgICAgICAgIHZhciBsZWZ0QnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgIGxlZnRCdXR0b25JY29uLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JQ09OKTtcbiAgICAgICAgICAgIGxlZnRCdXR0b25JY29uLnRleHRDb250ZW50ID0gdGhpcy5Db25zdGFudF8uQ0hFVlJPTl9MRUZUO1xuICAgICAgICAgICAgbGVmdEJ1dHRvbi5hcHBlbmRDaGlsZChsZWZ0QnV0dG9uSWNvbik7XG4gICAgICAgICAgICBsZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMudGFiQmFyXy5zY3JvbGxMZWZ0IC09IHRoaXMuQ29uc3RhbnRfLlRBQl9TQ1JPTExfUElYRUxTO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHZhciByaWdodEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcmlnaHRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlRBQl9CQVJfQlVUVE9OKTtcbiAgICAgICAgICAgIHJpZ2h0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5UQUJfQkFSX1JJR0hUX0JVVFRPTik7XG4gICAgICAgICAgICB2YXIgcmlnaHRCdXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgcmlnaHRCdXR0b25JY29uLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JQ09OKTtcbiAgICAgICAgICAgIHJpZ2h0QnV0dG9uSWNvbi50ZXh0Q29udGVudCA9IHRoaXMuQ29uc3RhbnRfLkNIRVZST05fUklHSFQ7XG4gICAgICAgICAgICByaWdodEJ1dHRvbi5hcHBlbmRDaGlsZChyaWdodEJ1dHRvbkljb24pO1xuICAgICAgICAgICAgcmlnaHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJCYXJfLnNjcm9sbExlZnQgKz0gdGhpcy5Db25zdGFudF8uVEFCX1NDUk9MTF9QSVhFTFM7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRCdXR0b24pO1xuICAgICAgICAgICAgdGFiQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMudGFiQmFyXyk7XG4gICAgICAgICAgICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRCdXR0b24pO1xuICAgICAgICAgICAgLy8gQWRkIGFuZCByZW1vdmUgYnV0dG9ucyBkZXBlbmRpbmcgb24gc2Nyb2xsIHBvc2l0aW9uLlxuICAgICAgICAgICAgdmFyIHRhYlNjcm9sbEhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFiQmFyXy5zY3JvbGxMZWZ0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19BQ1RJVkUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0FDVElWRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhYkJhcl8uc2Nyb2xsTGVmdCA8IHRoaXMudGFiQmFyXy5zY3JvbGxXaWR0aCAtIHRoaXMudGFiQmFyXy5vZmZzZXRXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICByaWdodEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQUNUSVZFKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByaWdodEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQUNUSVZFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnRhYkJhcl8uYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGFiU2Nyb2xsSGFuZGxlcik7XG4gICAgICAgICAgICB0YWJTY3JvbGxIYW5kbGVyKCk7XG4gICAgICAgICAgICBpZiAodGhpcy50YWJCYXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkpTX1JJUFBMRV9FRkZFQ1QpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJCYXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfSUdOT1JFX0VWRU5UUyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTZWxlY3QgZWxlbWVudCB0YWJzLCBkb2N1bWVudCBwYW5lbHNcbiAgICAgICAgICAgIHZhciB0YWJzID0gdGhpcy50YWJCYXJfLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5UQUIpO1xuICAgICAgICAgICAgdmFyIHBhbmVscyA9IHRoaXMuY29udGVudF8ucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLkNzc0NsYXNzZXNfLlBBTkVMKTtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgdGFicyBmb3IgZWFjaCB0YWIgZWxlbWVudFxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbmV3IE1hdGVyaWFsTGF5b3V0VGFiKHRhYnNbaV0sIHRhYnMsIHBhbmVscywgdGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVVBHUkFERUQpO1xuICAgIH1cbn07XG4vKipcbiAgICogQ29uc3RydWN0b3IgZm9yIGFuIGluZGl2aWR1YWwgdGFiLlxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gdGFiIFRoZSBIVE1MIGVsZW1lbnQgZm9yIHRoZSB0YWIuXG4gICAqIEBwYXJhbSB7IUFycmF5PEhUTUxFbGVtZW50Pn0gdGFicyBBcnJheSB3aXRoIEhUTUwgZWxlbWVudHMgZm9yIGFsbCB0YWJzLlxuICAgKiBAcGFyYW0geyFBcnJheTxIVE1MRWxlbWVudD59IHBhbmVscyBBcnJheSB3aXRoIEhUTUwgZWxlbWVudHMgZm9yIGFsbCBwYW5lbHMuXG4gICAqIEBwYXJhbSB7TWF0ZXJpYWxMYXlvdXR9IGxheW91dCBUaGUgTWF0ZXJpYWxMYXlvdXQgb2JqZWN0IHRoYXQgb3ducyB0aGUgdGFiLlxuICAgKi9cbmZ1bmN0aW9uIE1hdGVyaWFsTGF5b3V0VGFiKHRhYiwgdGFicywgcGFuZWxzLCBsYXlvdXQpIHtcbiAgICAvKipcbiAgICAgKiBBdXhpbGlhcnkgbWV0aG9kIHRvIHByb2dyYW1tYXRpY2FsbHkgc2VsZWN0IGEgdGFiIGluIHRoZSBVSS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZWxlY3RUYWIoKSB7XG4gICAgICAgIHZhciBocmVmID0gdGFiLmhyZWYuc3BsaXQoJyMnKVsxXTtcbiAgICAgICAgdmFyIHBhbmVsID0gbGF5b3V0LmNvbnRlbnRfLnF1ZXJ5U2VsZWN0b3IoJyMnICsgaHJlZik7XG4gICAgICAgIGxheW91dC5yZXNldFRhYlN0YXRlXyh0YWJzKTtcbiAgICAgICAgbGF5b3V0LnJlc2V0UGFuZWxTdGF0ZV8ocGFuZWxzKTtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5hZGQobGF5b3V0LkNzc0NsYXNzZXNfLklTX0FDVElWRSk7XG4gICAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQobGF5b3V0LkNzc0NsYXNzZXNfLklTX0FDVElWRSk7XG4gICAgfVxuICAgIGlmICh0YWIpIHtcbiAgICAgICAgaWYgKGxheW91dC50YWJCYXJfLmNsYXNzTGlzdC5jb250YWlucyhsYXlvdXQuQ3NzQ2xhc3Nlc18uSlNfUklQUExFX0VGRkVDVCkpIHtcbiAgICAgICAgICAgIHZhciByaXBwbGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICByaXBwbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChsYXlvdXQuQ3NzQ2xhc3Nlc18uUklQUExFX0NPTlRBSU5FUik7XG4gICAgICAgICAgICByaXBwbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChsYXlvdXQuQ3NzQ2xhc3Nlc18uSlNfUklQUExFX0VGRkVDVCk7XG4gICAgICAgICAgICB2YXIgcmlwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmlwcGxlLmNsYXNzTGlzdC5hZGQobGF5b3V0LkNzc0NsYXNzZXNfLlJJUFBMRSk7XG4gICAgICAgICAgICByaXBwbGVDb250YWluZXIuYXBwZW5kQ2hpbGQocmlwcGxlKTtcbiAgICAgICAgICAgIHRhYi5hcHBlbmRDaGlsZChyaXBwbGVDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAodGFiLmdldEF0dHJpYnV0ZSgnaHJlZicpLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHNlbGVjdFRhYigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGFiLnNob3cgPSBzZWxlY3RUYWI7XG4gICAgfVxufVxud2luZG93WydNYXRlcmlhbExheW91dFRhYiddID0gTWF0ZXJpYWxMYXlvdXRUYWI7XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxMYXlvdXQsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsTGF5b3V0JyxcbiAgICBjc3NDbGFzczogJ21kbC1qcy1sYXlvdXQnXG59KTtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBEYXRhIFRhYmxlIENhcmQgTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbERhdGFUYWJsZSA9IGZ1bmN0aW9uIE1hdGVyaWFsRGF0YVRhYmxlKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxEYXRhVGFibGUnXSA9IE1hdGVyaWFsRGF0YVRhYmxlO1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxEYXRhVGFibGUucHJvdG90eXBlLkNvbnN0YW50XyA9IHt9O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxEYXRhVGFibGUucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIERBVEFfVEFCTEU6ICdtZGwtZGF0YS10YWJsZScsXG4gICAgU0VMRUNUQUJMRTogJ21kbC1kYXRhLXRhYmxlLS1zZWxlY3RhYmxlJyxcbiAgICBJU19TRUxFQ1RFRDogJ2lzLXNlbGVjdGVkJyxcbiAgICBJU19VUEdSQURFRDogJ2lzLXVwZ3JhZGVkJ1xufTtcbi8qKlxuICAgKiBHZW5lcmF0ZXMgYW5kIHJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHRvZ2dsZXMgdGhlIHNlbGVjdGlvbiBzdGF0ZSBvZiBhXG4gICAqIHNpbmdsZSByb3cgKG9yIG11bHRpcGxlIHJvd3MpLlxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGNoZWNrYm94IENoZWNrYm94IHRoYXQgdG9nZ2xlcyB0aGUgc2VsZWN0aW9uIHN0YXRlLlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByb3cgUm93IHRvIHRvZ2dsZSB3aGVuIGNoZWNrYm94IGNoYW5nZXMuXG4gICAqIEBwYXJhbSB7KEFycmF5PE9iamVjdD58Tm9kZUxpc3QpPX0gb3B0X3Jvd3MgUm93cyB0byB0b2dnbGUgd2hlbiBjaGVja2JveCBjaGFuZ2VzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsRGF0YVRhYmxlLnByb3RvdHlwZS5zZWxlY3RSb3dfID0gZnVuY3Rpb24gKGNoZWNrYm94LCByb3csIG9wdF9yb3dzKSB7XG4gICAgaWYgKHJvdykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICByb3cuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX1NFTEVDVEVEKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19TRUxFQ1RFRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKTtcbiAgICB9XG4gICAgaWYgKG9wdF9yb3dzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIHZhciBlbDtcbiAgICAgICAgICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG9wdF9yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsID0gb3B0X3Jvd3NbaV0ucXVlcnlTZWxlY3RvcigndGQnKS5xdWVyeVNlbGVjdG9yKCcubWRsLWNoZWNrYm94Jyk7XG4gICAgICAgICAgICAgICAgICAgIGVsWydNYXRlcmlhbENoZWNrYm94J10uY2hlY2soKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0X3Jvd3NbaV0uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX1NFTEVDVEVEKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBvcHRfcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBlbCA9IG9wdF9yb3dzW2ldLnF1ZXJ5U2VsZWN0b3IoJ3RkJykucXVlcnlTZWxlY3RvcignLm1kbC1jaGVja2JveCcpO1xuICAgICAgICAgICAgICAgICAgICBlbFsnTWF0ZXJpYWxDaGVja2JveCddLnVuY2hlY2soKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0X3Jvd3NbaV0uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX1NFTEVDVEVEKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0uYmluZCh0aGlzKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIENyZWF0ZXMgYSBjaGVja2JveCBmb3IgYSBzaW5nbGUgb3Igb3IgbXVsdGlwbGUgcm93cyBhbmQgaG9va3MgdXAgdGhlXG4gICAqIGV2ZW50IGhhbmRsaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByb3cgUm93IHRvIHRvZ2dsZSB3aGVuIGNoZWNrYm94IGNoYW5nZXMuXG4gICAqIEBwYXJhbSB7KEFycmF5PE9iamVjdD58Tm9kZUxpc3QpPX0gb3B0X3Jvd3MgUm93cyB0byB0b2dnbGUgd2hlbiBjaGVja2JveCBjaGFuZ2VzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsRGF0YVRhYmxlLnByb3RvdHlwZS5jcmVhdGVDaGVja2JveF8gPSBmdW5jdGlvbiAocm93LCBvcHRfcm93cykge1xuICAgIHZhciBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnbWRsLWNoZWNrYm94Jyk7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnbWRsLWpzLWNoZWNrYm94Jyk7XG4gICAgbGFiZWwuY2xhc3NMaXN0LmFkZCgnbWRsLWpzLXJpcHBsZS1lZmZlY3QnKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdtZGwtZGF0YS10YWJsZV9fc2VsZWN0Jyk7XG4gICAgdmFyIGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjaGVja2JveC50eXBlID0gJ2NoZWNrYm94JztcbiAgICBjaGVja2JveC5jbGFzc0xpc3QuYWRkKCdtZGwtY2hlY2tib3hfX2lucHV0Jyk7XG4gICAgaWYgKHJvdykge1xuICAgICAgICBjaGVja2JveC5jaGVja2VkID0gcm93LmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklTX1NFTEVDVEVEKTtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5zZWxlY3RSb3dfKGNoZWNrYm94LCByb3cpKTtcbiAgICAgICAgaWYgKHJvdy5kYXRhc2V0WydtZGxEYXRhVGFibGVTZWxlY3RhYmxlTmFtZSddKSB7XG4gICAgICAgICAgICBjaGVja2JveC5uYW1lID0gcm93LmRhdGFzZXRbJ21kbERhdGFUYWJsZVNlbGVjdGFibGVOYW1lJ107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdy5kYXRhc2V0WydtZGxEYXRhVGFibGVTZWxlY3RhYmxlVmFsdWUnXSkge1xuICAgICAgICAgICAgY2hlY2tib3gudmFsdWUgPSByb3cuZGF0YXNldFsnbWRsRGF0YVRhYmxlU2VsZWN0YWJsZVZhbHVlJ107XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9wdF9yb3dzKSB7XG4gICAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuc2VsZWN0Um93XyhjaGVja2JveCwgbnVsbCwgb3B0X3Jvd3MpKTtcbiAgICB9XG4gICAgbGFiZWwuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnQobGFiZWwsICdNYXRlcmlhbENoZWNrYm94Jyk7XG4gICAgcmV0dXJuIGxhYmVsO1xufTtcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxEYXRhVGFibGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgdmFyIGZpcnN0SGVhZGVyID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yKCd0aCcpO1xuICAgICAgICB2YXIgYm9keVJvd3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5IHRyJykpO1xuICAgICAgICB2YXIgZm9vdFJvd3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rmb290IHRyJykpO1xuICAgICAgICB2YXIgcm93cyA9IGJvZHlSb3dzLmNvbmNhdChmb290Um93cyk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlNFTEVDVEFCTEUpKSB7XG4gICAgICAgICAgICB2YXIgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICAgICAgdmFyIGhlYWRlckNoZWNrYm94ID0gdGhpcy5jcmVhdGVDaGVja2JveF8obnVsbCwgcm93cyk7XG4gICAgICAgICAgICB0aC5hcHBlbmRDaGlsZChoZWFkZXJDaGVja2JveCk7XG4gICAgICAgICAgICBmaXJzdEhlYWRlci5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZSh0aCwgZmlyc3RIZWFkZXIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpcnN0Q2VsbCA9IHJvd3NbaV0ucXVlcnlTZWxlY3RvcigndGQnKTtcbiAgICAgICAgICAgICAgICBpZiAoZmlyc3RDZWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyb3dzW2ldLnBhcmVudE5vZGUubm9kZU5hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1RCT0RZJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJvd0NoZWNrYm94ID0gdGhpcy5jcmVhdGVDaGVja2JveF8ocm93c1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZC5hcHBlbmRDaGlsZChyb3dDaGVja2JveCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcm93c1tpXS5pbnNlcnRCZWZvcmUodGQsIGZpcnN0Q2VsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVVBHUkFERUQpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbERhdGFUYWJsZSxcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxEYXRhVGFibGUnLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLWRhdGEtdGFibGUnXG59KTtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBSaXBwbGUgTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbFJpcHBsZSA9IGZ1bmN0aW9uIE1hdGVyaWFsUmlwcGxlKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxSaXBwbGUnXSA9IE1hdGVyaWFsUmlwcGxlO1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSaXBwbGUucHJvdG90eXBlLkNvbnN0YW50XyA9IHtcbiAgICBJTklUSUFMX1NDQUxFOiAnc2NhbGUoMC4wMDAxLCAwLjAwMDEpJyxcbiAgICBJTklUSUFMX1NJWkU6ICcxcHgnLFxuICAgIElOSVRJQUxfT1BBQ0lUWTogJzAuNCcsXG4gICAgRklOQUxfT1BBQ0lUWTogJzAnLFxuICAgIEZJTkFMX1NDQUxFOiAnJ1xufTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUmlwcGxlLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBSSVBQTEVfQ0VOVEVSOiAnbWRsLXJpcHBsZS0tY2VudGVyJyxcbiAgICBSSVBQTEVfRUZGRUNUX0lHTk9SRV9FVkVOVFM6ICdtZGwtanMtcmlwcGxlLWVmZmVjdC0taWdub3JlLWV2ZW50cycsXG4gICAgUklQUExFOiAnbWRsLXJpcHBsZScsXG4gICAgSVNfQU5JTUFUSU5HOiAnaXMtYW5pbWF0aW5nJyxcbiAgICBJU19WSVNJQkxFOiAnaXMtdmlzaWJsZSdcbn07XG4vKipcbiAgICogSGFuZGxlIG1vdXNlIC8gZmluZ2VyIGRvd24gb24gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSaXBwbGUucHJvdG90eXBlLmRvd25IYW5kbGVyXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGlmICghdGhpcy5yaXBwbGVFbGVtZW50Xy5zdHlsZS53aWR0aCAmJiAhdGhpcy5yaXBwbGVFbGVtZW50Xy5zdHlsZS5oZWlnaHQpIHtcbiAgICAgICAgdmFyIHJlY3QgPSB0aGlzLmVsZW1lbnRfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICB0aGlzLmJvdW5kSGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG4gICAgICAgIHRoaXMuYm91bmRXaWR0aCA9IHJlY3Qud2lkdGg7XG4gICAgICAgIHRoaXMucmlwcGxlU2l6ZV8gPSBNYXRoLnNxcnQocmVjdC53aWR0aCAqIHJlY3Qud2lkdGggKyByZWN0LmhlaWdodCAqIHJlY3QuaGVpZ2h0KSAqIDIgKyAyO1xuICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLnN0eWxlLndpZHRoID0gdGhpcy5yaXBwbGVTaXplXyArICdweCc7XG4gICAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8uc3R5bGUuaGVpZ2h0ID0gdGhpcy5yaXBwbGVTaXplXyArICdweCc7XG4gICAgfVxuICAgIHRoaXMucmlwcGxlRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX1ZJU0lCTEUpO1xuICAgIGlmIChldmVudC50eXBlID09PSAnbW91c2Vkb3duJyAmJiB0aGlzLmlnbm9yaW5nTW91c2VEb3duXykge1xuICAgICAgICB0aGlzLmlnbm9yaW5nTW91c2VEb3duXyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChldmVudC50eXBlID09PSAndG91Y2hzdGFydCcpIHtcbiAgICAgICAgICAgIHRoaXMuaWdub3JpbmdNb3VzZURvd25fID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZnJhbWVDb3VudCA9IHRoaXMuZ2V0RnJhbWVDb3VudCgpO1xuICAgICAgICBpZiAoZnJhbWVDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEZyYW1lQ291bnQoMSk7XG4gICAgICAgIHZhciBib3VuZCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHZhciB4O1xuICAgICAgICB2YXIgeTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgYXJlIGhhbmRsaW5nIGEga2V5Ym9hcmQgY2xpY2suXG4gICAgICAgIGlmIChldmVudC5jbGllbnRYID09PSAwICYmIGV2ZW50LmNsaWVudFkgPT09IDApIHtcbiAgICAgICAgICAgIHggPSBNYXRoLnJvdW5kKGJvdW5kLndpZHRoIC8gMik7XG4gICAgICAgICAgICB5ID0gTWF0aC5yb3VuZChib3VuZC5oZWlnaHQgLyAyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBjbGllbnRYID0gZXZlbnQuY2xpZW50WCA/IGV2ZW50LmNsaWVudFggOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgICAgICB2YXIgY2xpZW50WSA9IGV2ZW50LmNsaWVudFkgPyBldmVudC5jbGllbnRZIDogZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuICAgICAgICAgICAgeCA9IE1hdGgucm91bmQoY2xpZW50WCAtIGJvdW5kLmxlZnQpO1xuICAgICAgICAgICAgeSA9IE1hdGgucm91bmQoY2xpZW50WSAtIGJvdW5kLnRvcCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRSaXBwbGVYWSh4LCB5KTtcbiAgICAgICAgdGhpcy5zZXRSaXBwbGVTdHlsZXModHJ1ZSk7XG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltRnJhbWVIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgIH1cbn07XG4vKipcbiAgICogSGFuZGxlIG1vdXNlIC8gZmluZ2VyIHVwIG9uIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUmlwcGxlLnByb3RvdHlwZS51cEhhbmRsZXJfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gRG9uJ3QgZmlyZSBmb3IgdGhlIGFydGlmaWNpYWwgXCJtb3VzZXVwXCIgZ2VuZXJhdGVkIGJ5IGEgZG91YmxlLWNsaWNrLlxuICAgIGlmIChldmVudCAmJiBldmVudC5kZXRhaWwgIT09IDIpIHtcbiAgICAgICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVklTSUJMRSk7XG4gICAgfVxuICAgIC8vIEFsbG93IGEgcmVwYWludCB0byBvY2N1ciBiZWZvcmUgcmVtb3ZpbmcgdGhpcyBjbGFzcywgc28gdGhlIGFuaW1hdGlvblxuICAgIC8vIHNob3dzIGZvciB0YXAgZXZlbnRzLCB3aGljaCBzZWVtIHRvIHRyaWdnZXIgYSBtb3VzZXVwIHRvbyBzb29uIGFmdGVyXG4gICAgLy8gbW91c2Vkb3duLlxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVklTSUJMRSk7XG4gICAgfS5iaW5kKHRoaXMpLCAwKTtcbn07XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsUmlwcGxlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIHZhciByZWNlbnRlcmluZyA9IHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0NFTlRFUik7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfRUZGRUNUX0lHTk9SRV9FVkVOVFMpKSB7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFKTtcbiAgICAgICAgICAgIHRoaXMuZnJhbWVDb3VudF8gPSAwO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVTaXplXyA9IDA7XG4gICAgICAgICAgICB0aGlzLnhfID0gMDtcbiAgICAgICAgICAgIHRoaXMueV8gPSAwO1xuICAgICAgICAgICAgLy8gVG91Y2ggc3RhcnQgcHJvZHVjZXMgYSBjb21wYXQgbW91c2UgZG93biBldmVudCwgd2hpY2ggd291bGQgY2F1c2UgYVxuICAgICAgICAgICAgLy8gc2Vjb25kIHJpcHBsZXMuIFRvIGF2b2lkIHRoYXQsIHdlIHVzZSB0aGlzIHByb3BlcnR5IHRvIGlnbm9yZSB0aGUgZmlyc3RcbiAgICAgICAgICAgIC8vIG1vdXNlIGRvd24gYWZ0ZXIgYSB0b3VjaCBzdGFydC5cbiAgICAgICAgICAgIHRoaXMuaWdub3JpbmdNb3VzZURvd25fID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJvdW5kRG93bkhhbmRsZXIgPSB0aGlzLmRvd25IYW5kbGVyXy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmJvdW5kRG93bkhhbmRsZXIpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5ib3VuZERvd25IYW5kbGVyKTtcbiAgICAgICAgICAgIHRoaXMuYm91bmRVcEhhbmRsZXIgPSB0aGlzLnVwSGFuZGxlcl8uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRVcEhhbmRsZXIpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5ib3VuZFVwSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5ib3VuZFVwSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLmJvdW5kVXBIYW5kbGVyKTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgKiBHZXR0ZXIgZm9yIGZyYW1lQ291bnRfLlxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBmcmFtZSBjb3VudC5cbiAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmdldEZyYW1lQ291bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJhbWVDb3VudF87XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHRlciBmb3IgZnJhbWVDb3VudF8uXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBmQyB0aGUgZnJhbWUgY291bnQuXG4gICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5zZXRGcmFtZUNvdW50ID0gZnVuY3Rpb24gKGZDKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmFtZUNvdW50XyA9IGZDO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgKiBHZXR0ZXIgZm9yIHJpcHBsZUVsZW1lbnRfLlxuICAgICAgICAgKiBAcmV0dXJuIHtFbGVtZW50fSB0aGUgcmlwcGxlIGVsZW1lbnQuXG4gICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5nZXRSaXBwbGVFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJpcHBsZUVsZW1lbnRfO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSByaXBwbGUgWCBhbmQgWSBjb29yZGluYXRlcy5cbiAgICAgICAgICogQHBhcmFtICB7bnVtYmVyfSBuZXdYIHRoZSBuZXcgWCBjb29yZGluYXRlXG4gICAgICAgICAqIEBwYXJhbSAge251bWJlcn0gbmV3WSB0aGUgbmV3IFkgY29vcmRpbmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuc2V0UmlwcGxlWFkgPSBmdW5jdGlvbiAobmV3WCwgbmV3WSkge1xuICAgICAgICAgICAgICAgIHRoaXMueF8gPSBuZXdYO1xuICAgICAgICAgICAgICAgIHRoaXMueV8gPSBuZXdZO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgKiBTZXRzIHRoZSByaXBwbGUgc3R5bGVzLlxuICAgICAgICAgKiBAcGFyYW0gIHtib29sZWFufSBzdGFydCB3aGV0aGVyIG9yIG5vdCB0aGlzIGlzIHRoZSBzdGFydCBmcmFtZS5cbiAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnNldFJpcHBsZVN0eWxlcyA9IGZ1bmN0aW9uIChzdGFydCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJpcHBsZUVsZW1lbnRfICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNpemU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSAndHJhbnNsYXRlKCcgKyB0aGlzLnhfICsgJ3B4LCAnICsgdGhpcy55XyArICdweCknO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlID0gdGhpcy5Db25zdGFudF8uSU5JVElBTF9TQ0FMRTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemUgPSB0aGlzLkNvbnN0YW50Xy5JTklUSUFMX1NJWkU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZSA9IHRoaXMuQ29uc3RhbnRfLkZJTkFMX1NDQUxFO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IHRoaXMucmlwcGxlU2l6ZV8gKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlY2VudGVyaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gJ3RyYW5zbGF0ZSgnICsgdGhpcy5ib3VuZFdpZHRoIC8gMiArICdweCwgJyArIHRoaXMuYm91bmRIZWlnaHQgLyAyICsgJ3B4KSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtU3RyaW5nID0gJ3RyYW5zbGF0ZSgtNTAlLCAtNTAlKSAnICsgb2Zmc2V0ICsgc2NhbGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8uc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLnN0eWxlLm1zVHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19BTklNQVRJTkcpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQU5JTUFUSU5HKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICogSGFuZGxlcyBhbiBhbmltYXRpb24gZnJhbWUuXG4gICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5hbmltRnJhbWVIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZyYW1lQ291bnRfLS0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltRnJhbWVIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UmlwcGxlU3R5bGVzKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICAgKiBEb3duZ3JhZGUgdGhlIGNvbXBvbmVudFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUmlwcGxlLnByb3RvdHlwZS5tZGxEb3duZ3JhZGVfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5ib3VuZERvd25IYW5kbGVyKTtcbiAgICB0aGlzLmVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmJvdW5kRG93bkhhbmRsZXIpO1xuICAgIHRoaXMuZWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRVcEhhbmRsZXIpO1xuICAgIHRoaXMuZWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuYm91bmRVcEhhbmRsZXIpO1xuICAgIHRoaXMuZWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmJvdW5kVXBIYW5kbGVyKTtcbiAgICB0aGlzLmVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLmJvdW5kVXBIYW5kbGVyKTtcbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxSaXBwbGUsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsUmlwcGxlJyxcbiAgICBjc3NDbGFzczogJ21kbC1qcy1yaXBwbGUtZWZmZWN0JyxcbiAgICB3aWRnZXQ6IGZhbHNlXG59KTtcbn0oKSk7XG4iXX0=
