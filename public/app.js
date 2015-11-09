(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require("../../node_modules/material-design-lite/dist/material.js");

var _controllersAppControllerJs = require("./controllers/AppController.js");

var _controllersAppControllerJs2 = _interopRequireDefault(_controllersAppControllerJs);

new _controllersAppControllerJs2["default"]();

},{"../../node_modules/material-design-lite/dist/material.js":12,"./controllers/AppController.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

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

var AppController = (function () {
    function AppController() {
        _classCallCheck(this, AppController);

        this.navigation = new _NavigationControllerJs2["default"]();

        this.navigation.add('Overview', new _OverviewControllerJs2["default"](this), true);

        this.exercisesScreen = new _ExercisesControllerJs2["default"]();
        this.navigation.add('Exercises', this.exercisesScreen);

        this.scheduleScreen = new _ScheduleControllerJs2["default"]();
        this.navigation.add('Schedule', this.scheduleScreen);
    }

    _createClass(AppController, [{
        key: "switchToExercises",
        value: function switchToExercises() {
            this.navigation.switchView(this.exercisesScreen);
        }
    }, {
        key: "switchToSchedule",
        value: function switchToSchedule() {
            this.navigation.switchView(this.scheduleScreen);
        }
    }]);

    return AppController;
})();

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

        _get(Object.getPrototypeOf(ExercisesController.prototype), "constructor", this).call(this, document.querySelector('#exercises'), 'Exercises');

        this.listEl = this.container.querySelector('.exercise-table tbody');
        this.listEl.addEventListener('click', function (event) {
            if (event.target.classList.contains('deleteExercise')) {
                _this.rowToRemove = event.target.parentNode.parentNode;
                _this.exerciseIdToRemove = _this.rowToRemove.getAttribute('data-id');
                _this.showDeleteExerciseDialog();
            }
        });
        this.populateExerciseList();

        this.addDialog = document.querySelector('#add-exercise-dialog');
        this.addExerciseName = this.addDialog.querySelector('#add-exercise-name');
        this.addExerciseReps = this.addDialog.querySelector('#add-exercise-reps');
        this.addExerciseRest = this.addDialog.querySelector('#add-exercise-rest');
        this.addDialogButtons = this.addDialog.querySelector('.mdl-dialog__actions').querySelectorAll('.mdl-button');
        this.addDialogButtons[0].addEventListener('click', function () {
            return _this.addExercise();
        });
        this.addDialogButtons[1].addEventListener('click', function () {
            return _this.closeAddExerciseDialog();
        });

        this.deleteDialog = document.querySelector('#delete-exercise-dialog');
        this.deleteDialogButtons = this.deleteDialog.querySelector('.mdl-dialog__actions').querySelectorAll('.mdl-button');
        this.deleteDialogButtons[0].addEventListener('click', function () {
            return _this.deleteExercise();
        });
        this.deleteDialogButtons[1].addEventListener('click', function () {
            return _this.closeDeleteExerciseDialog();
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
            this.addDialog.MaterialDialog.show();
            this.addExerciseName.focus();
        }

        /**
         * Closes the Add Exercise dialog
         */
    }, {
        key: "closeAddExerciseDialog",
        value: function closeAddExerciseDialog() {
            this.addDialog.MaterialDialog.close();
        }

        /**
         * Adds a new exercise
         */
    }, {
        key: "addExercise",
        value: function addExercise() {
            if (this.addExerciseName.checkValidity() && this.addExerciseReps.checkValidity() && this.addExerciseRest.checkValidity()) {
                var name = this.addExerciseName.value;
                var reps = this.addExerciseReps.value;
                var rest = this.addExerciseRest.value;
                this.addExerciseName.value = "";
                this.addExerciseReps.value = "";
                this.addExerciseRest.value = "";
                var exercise = _modelsExerciseJs2["default"].add(name, reps, rest);
                this.addExerciseToDom(exercise);
                this.closeAddExerciseDialog();
            }
        }

        /**
         * Adds an exercise to the exercise list element in the dom
         * @param exercise
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
         * Shows the Delete Exercise dialog
         */
    }, {
        key: "showDeleteExerciseDialog",
        value: function showDeleteExerciseDialog() {
            this.deleteDialog.MaterialDialog.show();
        }

        /**
         * Closes the Delete Exercise dialog
         */
    }, {
        key: "closeDeleteExerciseDialog",
        value: function closeDeleteExerciseDialog() {
            this.deleteDialog.MaterialDialog.close();
        }

        /**
         * Delete exercise
         */
    }, {
        key: "deleteExercise",
        value: function deleteExercise() {
            this.listEl.removeChild(this.rowToRemove);
            _modelsExerciseJs2["default"]["delete"](this.exerciseIdToRemove);
            this.closeDeleteExerciseDialog();
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
                _this.closeDrawer();
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

var _modelsExerciseLogJs = require("../models/ExerciseLog.js");

var _modelsExerciseLogJs2 = _interopRequireDefault(_modelsExerciseLogJs);

var OverviewController = (function (_ViewController) {
    _inherits(OverviewController, _ViewController);

    function OverviewController(application) {
        var _this = this;

        _classCallCheck(this, OverviewController);

        _get(Object.getPrototypeOf(OverviewController.prototype), "constructor", this).call(this, document.querySelector('#overview'), 'Overview');

        this.application = application;

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
            var exerciseId = rowElement.getAttribute('data-id');
            var completionDate = Date.now();
            _modelsExerciseJs2["default"].update(exerciseId, {
                lastComplete: completionDate
            });
            _modelsExerciseLogJs2["default"].add(exerciseId, completionDate);
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
            if (exercises.length === 0) {
                if (_modelsExerciseJs2["default"].get().length === 0) {
                    this.showNoExercisesText();
                } else {
                    this.showNoExercisesForTodayText();
                }
            } else {
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

        /**
         * Shows a message in exercise table when no exercises are to be done today
         */
    }, {
        key: "showNoExercisesForTodayText",
        value: function showNoExercisesForTodayText() {
            var _this2 = this;

            var row = document.createElement("tr");

            var col = document.createElement("td");
            col.innerHTML = "There are no exercises left to do today. <a href='#'>Check schedule</a>.";
            col.className = "mdl-data-table__cell--non-numeric table-message";
            col.setAttribute('colspan', 3);
            col.addEventListener('click', function (event) {
                if (event.target.nodeName === "A") {
                    _this2.application.switchToSchedule();
                }
            });

            row.appendChild(col);
            this.listEl.appendChild(row);
        }

        /**
         * Shows a message in exercise table when no exercises are to be done today
         */
    }, {
        key: "showNoExercisesText",
        value: function showNoExercisesText() {
            var _this3 = this;

            var row = document.createElement("tr");

            var col = document.createElement("td");
            col.innerHTML = "You haven't added any exercises yet. <a href='#'>Manage exercises</a>";
            col.className = "mdl-data-table__cell--non-numeric table-message";
            col.setAttribute('colspan', 3);
            col.addEventListener('click', function (event) {
                if (event.target.nodeName === "A") {
                    _this3.application.switchToExercises();
                }
            });

            row.appendChild(col);
            this.listEl.appendChild(row);
        }
    }]);

    return OverviewController;
})(_ViewControllerJs2["default"]);

exports["default"] = OverviewController;
module.exports = exports["default"];

},{"../models/Exercise.js":8,"../models/ExerciseLog.js":9,"./ViewController.js":7}],6:[function(require,module,exports){
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

var dateFormat = require('dateformat');

var ScheduleController = (function (_ViewController) {
    _inherits(ScheduleController, _ViewController);

    function ScheduleController() {
        _classCallCheck(this, ScheduleController);

        _get(Object.getPrototypeOf(ScheduleController.prototype), "constructor", this).call(this, document.querySelector('#schedule'), 'Schedule');

        this.listEl = this.container.querySelector('.exercise-table tbody');
        this.populateScheduleList();
    }

    _createClass(ScheduleController, [{
        key: "populateScheduleList",
        value: function populateScheduleList() {
            this.clearScheduleFromDom();
            var exercises = _modelsExerciseJs2["default"].get();
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = exercises[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var exercise = _step.value;

                    exercise.scheduleDate = this.calculateScheduleDate(exercise);
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

            exercises = exercises.sort(function sortByScheduleDate(a, b) {
                return a.scheduleDate > b.scheduleDate ? 1 : b.scheduleDate > a.scheduleDate ? -1 : 0;
            });
            var lastGrouping = 0;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = exercises[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var exercise = _step2.value;

                    if (exercise.scheduleDate !== lastGrouping) {
                        this.addGroupToDom(exercise.scheduleDate);
                    }
                    lastGrouping = exercise.scheduleDate;
                    this.addExerciseToDom(exercise);
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
                        _iterator2["return"]();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }

        /**
         * Clears the exercise list
         */
    }, {
        key: "clearScheduleFromDom",
        value: function clearScheduleFromDom() {
            this.listEl.innerHTML = '';
        }

        /**
         * Adds a grouping to the scheduled exercises table
         */
    }, {
        key: "addGroupToDom",
        value: function addGroupToDom(scheduleDateTimestamp) {
            var now = new Date(scheduleDateTimestamp);

            var groupRow = document.createElement("tr");

            var groupRowCol = document.createElement("td");
            groupRowCol.setAttribute("colspan", "1");
            groupRowCol.textContent = dateFormat(now, "dddd");
            groupRowCol.className = "mdl-data-table__cell--non-numeric table-group";

            var groupRowCol2 = document.createElement("td");
            groupRowCol2.setAttribute("colspan", "2");
            groupRowCol2.textContent = dateFormat(now, "mmmm dS, yyyy");
            groupRowCol2.className = "table-group";

            groupRow.appendChild(groupRowCol);
            groupRow.appendChild(groupRowCol2);
            this.listEl.appendChild(groupRow);
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

            var nameCol = document.createElement("td");
            nameCol.textContent = exercise.name;
            nameCol.className = "mdl-data-table__cell--non-numeric";

            var repsCol = document.createElement("td");
            repsCol.textContent = exercise.reps;

            var restCol = document.createElement("td");
            restCol.textContent = exercise.rest;

            row.appendChild(nameCol);
            row.appendChild(repsCol);
            row.appendChild(restCol);
            this.listEl.appendChild(row);
        }

        /**
         * Calculates the date when the exercise can next be done
         * @param exercise
         */
    }, {
        key: "calculateScheduleDate",
        value: function calculateScheduleDate(exercise) {
            if (exercise.lastComplete) {
                var dayComplete = new Date(exercise.lastComplete).setHours(0, 0, 0, 0);
                var restTime = (parseInt(exercise.rest) + 1) * 24 * 60 * 60 * 1000;
                var scheduleDate = dayComplete + restTime;
                scheduleDate = scheduleDate < Date.now() ? Date.now() : scheduleDate;
                return scheduleDate;
            } else {
                return Date.now();
            }
        }
    }]);

    return ScheduleController;
})(_ViewControllerJs2["default"]);

exports["default"] = ScheduleController;
module.exports = exports["default"];

},{"../models/Exercise.js":8,"./ViewController.js":7,"dateformat":11}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ViewController = (function () {
    function ViewController(container, title) {
        _classCallCheck(this, ViewController);

        this.container = container;
        this.title = title;
        this.titleEl = document.querySelector('#viewTitle');
        this.hide();
    }

    _createClass(ViewController, [{
        key: "show",
        value: function show() {
            this.container.style.display = "block";
            this.titleEl.textContent = this.title;
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

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ModelJs = require('./Model.js');

var _ModelJs2 = _interopRequireDefault(_ModelJs);

var Exercise = (function (_Model) {
    _inherits(Exercise, _Model);

    function Exercise() {
        _classCallCheck(this, Exercise);

        _get(Object.getPrototypeOf(Exercise.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Exercise, null, [{
        key: 'getKey',

        /**
         * Returns the localstorage key to use
         * @returns {string}
         */
        value: function getKey() {
            return 'exercises';
        }

        /**
         * Stores a new exercise
         * @param name
         * @param reps
         */
    }, {
        key: 'add',
        value: function add(name, reps, rest) {
            var store = this.getStore();
            var exercise = {
                id: store.incrementId,
                name: name,
                reps: parseInt(reps),
                rest: parseInt(rest)
            };
            store.items.push(exercise);
            store.incrementId++;
            this.setStore(store);
            return exercise;
        }

        /**
         * Returns all the stored exercises
         * @returns {{}}
         */
    }, {
        key: 'get',
        value: function get() {
            var store = this.getStore();
            return store.items;
        }

        /**
         * Converts old-style store to new style
         * @param legacyStore
         * @returns {{}}
         */
    }, {
        key: 'upgradeLegacy',
        value: function upgradeLegacy(legacyStore) {
            var store = {};
            store.items = legacyStore;
            store.incrementId = (function () {
                var lastId = legacyStore.reduce(function (last, exercise) {
                    return Math.max(last, exercise.id);
                }, 0);
                return lastId + 1;
            })();
            return store;
        }

        /**
         * Delete record matching id
         * @param id
         */
    }, {
        key: 'delete',
        value: function _delete(id) {
            var store = this.getStore();
            store.items = store.items.filter(function (exercise) {
                return exercise.id != id;
            });
            this.setStore(store);
        }

        /**
         * Update record matching id, replacing keys mentioned in changeData
         * @param id
         * @param changeData
         */
    }, {
        key: 'update',
        value: function update(id, changeData) {
            var store = this.getStore();
            store.items = store.items.map(function (exercise) {
                if (exercise.id == id) {
                    for (var attribute in changeData) {
                        if (changeData.hasOwnProperty(attribute)) {
                            exercise[attribute] = changeData[attribute];
                        }
                    }
                }
                return exercise;
            });
            this.setStore(store);
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
            var store = this.getStore();
            store.items = store.items.filter(function (exercise) {
                var field = exercise[property];
                var greaterThan = operator == '>' && field > value;
                var lessThan = operator == '<' && field < value;
                var equalTo = operator == '=' && field == value;
                return greaterThan || lessThan || equalTo;
            });
            return store.items;
        }

        /**
         * Gets records based on custom query method
         * @param queryMethod
         */
    }, {
        key: 'query',
        value: function query(queryMethod) {
            var store = this.getStore();
            store.items = store.items.filter(queryMethod);
            return store.items;
        }
    }]);

    return Exercise;
})(_ModelJs2['default']);

exports['default'] = Exercise;
module.exports = exports['default'];

},{"./Model.js":10}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ModelJs = require('./Model.js');

var _ModelJs2 = _interopRequireDefault(_ModelJs);

var ExerciseLog = (function (_Model) {
    _inherits(ExerciseLog, _Model);

    function ExerciseLog() {
        _classCallCheck(this, ExerciseLog);

        _get(Object.getPrototypeOf(ExerciseLog.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(ExerciseLog, null, [{
        key: 'getKey',

        /**
         * Returns the localstorage key to use
         * @returns {string}
         */
        value: function getKey() {
            return 'exerciseLogs';
        }

        /**
         * Stores a new exercise Log
         * @param exerciseId
         * @param dateCompleted
         */
    }, {
        key: 'add',
        value: function add(exerciseId, dateCompleted) {
            var store = this.getStore();
            var exerciseLog = {
                id: store.incrementId,
                exerciseId: exerciseId,
                dateCompleted: dateCompleted
            };
            store.items.push(exerciseLog);
            store.incrementId++;
            this.setStore(store);
            return exerciseLog;
        }

        /**
         * Returns all the stored exercise logs
         * @returns {{}}
         */
    }, {
        key: 'get',
        value: function get() {
            var store = this.getStore();
            return store.items;
        }

        /**
         * Converts old-style store to new style
         * @param legacyStore
         * @returns {{}}
         */
    }, {
        key: 'upgradeLegacy',
        value: function upgradeLegacy(legacyStore) {
            var store = {};
            store.items = legacyStore;
            store.incrementId = (function () {
                var lastId = legacyStore.reduce(function (last, exercise) {
                    return Math.max(last, exercise.id);
                }, 0);
                return lastId + 1;
            })();
            return store;
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
            var store = this.getStore();
            store.items = store.items.filter(function (exerciseLog) {
                var field = exerciseLog[property];
                var greaterThan = operator == '>' && field > value;
                var lessThan = operator == '<' && field < value;
                var equalTo = operator == '=' && field == value;
                return greaterThan || lessThan || equalTo;
            });
            return store.items;
        }

        /**
         * Gets records based on custom query method
         * @param queryMethod
         */
    }, {
        key: 'query',
        value: function query(queryMethod) {
            var store = this.getStore();
            store.items = store.items.filter(queryMethod);
            return store.items;
        }
    }]);

    return ExerciseLog;
})(_ModelJs2['default']);

exports['default'] = ExerciseLog;
module.exports = exports['default'];

},{"./Model.js":10}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = (function () {
    function Model() {
        _classCallCheck(this, Model);
    }

    _createClass(Model, null, [{
        key: "getStore",

        /**
         * Returns the store
         * @returns {{}}
         */
        value: function getStore() {
            var store = JSON.parse(localStorage.getItem(this.getKey())) || { incrementId: 1, items: [] };
            if (!store.items) {
                return this.upgradeLegacy(store);
            }
            return store;
        }

        /**
         * Sets the store
         */
    }, {
        key: "setStore",
        value: function setStore(store) {
            localStorage.setItem(this.getKey(), JSON.stringify(store));
        }
    }]);

    return Model;
})();

exports["default"] = Model;
module.exports = exports["default"];

},{}],11:[function(require,module,exports){
/*
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */

(function(global) {
  'use strict';

  var dateFormat = (function() {
      var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g;
      var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
      var timezoneClip = /[^-+\dA-Z]/g;
  
      // Regexes and supporting functions are cached through closure
      return function (date, mask, utc, gmt) {
  
        // You can't provide utc if you skip other args (use the 'UTC:' mask prefix)
        if (arguments.length === 1 && kindOf(date) === 'string' && !/\d/.test(date)) {
          mask = date;
          date = undefined;
        }
  
        date = date || new Date;
  
        if(!(date instanceof Date)) {
          date = new Date(date);
        }
  
        if (isNaN(date)) {
          throw TypeError('Invalid date');
        }
  
        mask = String(dateFormat.masks[mask] || mask || dateFormat.masks['default']);
  
        // Allow setting the utc/gmt argument via the mask
        var maskSlice = mask.slice(0, 4);
        if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
          mask = mask.slice(4);
          utc = true;
          if (maskSlice === 'GMT:') {
            gmt = true;
          }
        }
  
        var _ = utc ? 'getUTC' : 'get';
        var d = date[_ + 'Date']();
        var D = date[_ + 'Day']();
        var m = date[_ + 'Month']();
        var y = date[_ + 'FullYear']();
        var H = date[_ + 'Hours']();
        var M = date[_ + 'Minutes']();
        var s = date[_ + 'Seconds']();
        var L = date[_ + 'Milliseconds']();
        var o = utc ? 0 : date.getTimezoneOffset();
        var W = getWeek(date);
        var N = getDayOfWeek(date);
        var flags = {
          d:    d,
          dd:   pad(d),
          ddd:  dateFormat.i18n.dayNames[D],
          dddd: dateFormat.i18n.dayNames[D + 7],
          m:    m + 1,
          mm:   pad(m + 1),
          mmm:  dateFormat.i18n.monthNames[m],
          mmmm: dateFormat.i18n.monthNames[m + 12],
          yy:   String(y).slice(2),
          yyyy: y,
          h:    H % 12 || 12,
          hh:   pad(H % 12 || 12),
          H:    H,
          HH:   pad(H),
          M:    M,
          MM:   pad(M),
          s:    s,
          ss:   pad(s),
          l:    pad(L, 3),
          L:    pad(Math.round(L / 10)),
          t:    H < 12 ? 'a'  : 'p',
          tt:   H < 12 ? 'am' : 'pm',
          T:    H < 12 ? 'A'  : 'P',
          TT:   H < 12 ? 'AM' : 'PM',
          Z:    gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
          o:    (o > 0 ? '-' : '+') + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
          S:    ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
          W:    W,
          N:    N
        };
  
        return mask.replace(token, function (match) {
          if (match in flags) {
            return flags[match];
          }
          return match.slice(1, match.length - 1);
        });
      };
    })();

  dateFormat.masks = {
    'default':               'ddd mmm dd yyyy HH:MM:ss',
    'shortDate':             'm/d/yy',
    'mediumDate':            'mmm d, yyyy',
    'longDate':              'mmmm d, yyyy',
    'fullDate':              'dddd, mmmm d, yyyy',
    'shortTime':             'h:MM TT',
    'mediumTime':            'h:MM:ss TT',
    'longTime':              'h:MM:ss TT Z',
    'isoDate':               'yyyy-mm-dd',
    'isoTime':               'HH:MM:ss',
    'isoDateTime':           'yyyy-mm-dd\'T\'HH:MM:sso',
    'isoUtcDateTime':        'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'',
    'expiresHeaderFormat':   'ddd, dd mmm yyyy HH:MM:ss Z'
  };

  // Internationalization strings
  dateFormat.i18n = {
    dayNames: [
      'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
      'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ],
    monthNames: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ]
  };

function pad(val, len) {
  val = String(val);
  len = len || 2;
  while (val.length < len) {
    val = '0' + val;
  }
  return val;
}

/**
 * Get the ISO 8601 week number
 * Based on comments from
 * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
 *
 * @param  {Object} `date`
 * @return {Number}
 */
function getWeek(date) {
  // Remove time components of date
  var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  // Change date to Thursday same week
  targetThursday.setDate(targetThursday.getDate() - ((targetThursday.getDay() + 6) % 7) + 3);

  // Take January 4th as it is always in week 1 (see ISO 8601)
  var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);

  // Change date to Thursday same week
  firstThursday.setDate(firstThursday.getDate() - ((firstThursday.getDay() + 6) % 7) + 3);

  // Check if daylight-saving-time-switch occured and correct for it
  var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
  targetThursday.setHours(targetThursday.getHours() - ds);

  // Number of weeks between target Thursday and first Thursday
  var weekDiff = (targetThursday - firstThursday) / (86400000*7);
  return 1 + Math.floor(weekDiff);
}

/**
 * Get ISO-8601 numeric representation of the day of the week
 * 1 (for Monday) through 7 (for Sunday)
 * 
 * @param  {Object} `date`
 * @return {Number}
 */
function getDayOfWeek(date) {
  var dow = date.getDay();
  if(dow === 0) {
    dow = 7;
  }
  return dow;
}

/**
 * kind-of shortcut
 * @param  {*} val
 * @return {String}
 */
function kindOf(val) {
  if (val === null) {
    return 'null';
  }

  if (val === undefined) {
    return 'undefined';
  }

  if (typeof val !== 'object') {
    return typeof val;
  }

  if (Array.isArray(val)) {
    return 'array';
  }

  return {}.toString.call(val)
    .slice(8, -1).toLowerCase();
};



  if (typeof define === 'function' && define.amd) {
    define(dateFormat);
  } else if (typeof exports === 'object') {
    module.exports = dateFormat;
  } else {
    global.dateFormat = dateFormat;
  }
})(this);

},{}],12:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9qb2UvcmVwb3NpdG9yaWVzL2ZpdG5lc3MvYXNzZXRzL2pzL2FwcC5qcyIsIi9ob21lL2pvZS9yZXBvc2l0b3JpZXMvZml0bmVzcy9hc3NldHMvanMvY29udHJvbGxlcnMvQXBwQ29udHJvbGxlci5qcyIsIi9ob21lL2pvZS9yZXBvc2l0b3JpZXMvZml0bmVzcy9hc3NldHMvanMvY29udHJvbGxlcnMvRXhlcmNpc2VzQ29udHJvbGxlci5qcyIsIi9ob21lL2pvZS9yZXBvc2l0b3JpZXMvZml0bmVzcy9hc3NldHMvanMvY29udHJvbGxlcnMvTmF2aWdhdGlvbkNvbnRyb2xsZXIuanMiLCIvaG9tZS9qb2UvcmVwb3NpdG9yaWVzL2ZpdG5lc3MvYXNzZXRzL2pzL2NvbnRyb2xsZXJzL092ZXJ2aWV3Q29udHJvbGxlci5qcyIsIi9ob21lL2pvZS9yZXBvc2l0b3JpZXMvZml0bmVzcy9hc3NldHMvanMvY29udHJvbGxlcnMvU2NoZWR1bGVDb250cm9sbGVyLmpzIiwiL2hvbWUvam9lL3JlcG9zaXRvcmllcy9maXRuZXNzL2Fzc2V0cy9qcy9jb250cm9sbGVycy9WaWV3Q29udHJvbGxlci5qcyIsIi9ob21lL2pvZS9yZXBvc2l0b3JpZXMvZml0bmVzcy9hc3NldHMvanMvbW9kZWxzL0V4ZXJjaXNlLmpzIiwiL2hvbWUvam9lL3JlcG9zaXRvcmllcy9maXRuZXNzL2Fzc2V0cy9qcy9tb2RlbHMvRXhlcmNpc2VMb2cuanMiLCIvaG9tZS9qb2UvcmVwb3NpdG9yaWVzL2ZpdG5lc3MvYXNzZXRzL2pzL21vZGVscy9Nb2RlbC5qcyIsIm5vZGVfbW9kdWxlcy9kYXRlZm9ybWF0L2xpYi9kYXRlZm9ybWF0LmpzIiwibm9kZV9tb2R1bGVzL21hdGVyaWFsLWRlc2lnbi1saXRlL2Rpc3QvbWF0ZXJpYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaE9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBcIi4uLy4uL25vZGVfbW9kdWxlcy9tYXRlcmlhbC1kZXNpZ24tbGl0ZS9kaXN0L21hdGVyaWFsLmpzXCI7XG5pbXBvcnQgQXBwQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVycy9BcHBDb250cm9sbGVyLmpzXCI7XG5cbm5ldyBBcHBDb250cm9sbGVyKCk7XG4iLCJpbXBvcnQgTmF2aWdhdGlvbkNvbnRyb2xsZXIgZnJvbSBcIi4vTmF2aWdhdGlvbkNvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBPdmVydmlld0NvbnRyb2xsZXIgZnJvbSBcIi4vT3ZlcnZpZXdDb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgRXhlcmNpc2VzQ29udHJvbGxlciBmcm9tIFwiLi9FeGVyY2lzZXNDb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgU2NoZWR1bGVDb250cm9sbGVyIGZyb20gXCIuL1NjaGVkdWxlQ29udHJvbGxlci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHBDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKClcbiAgICB7XG4gICAgICAgIHRoaXMubmF2aWdhdGlvbiA9IG5ldyBOYXZpZ2F0aW9uQ29udHJvbGxlcigpO1xuXG4gICAgICAgIHRoaXMubmF2aWdhdGlvbi5hZGQoJ092ZXJ2aWV3JywgbmV3IE92ZXJ2aWV3Q29udHJvbGxlcih0aGlzKSwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5leGVyY2lzZXNTY3JlZW4gPSBuZXcgRXhlcmNpc2VzQ29udHJvbGxlcigpO1xuICAgICAgICB0aGlzLm5hdmlnYXRpb24uYWRkKCdFeGVyY2lzZXMnLCB0aGlzLmV4ZXJjaXNlc1NjcmVlbik7XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZVNjcmVlbiA9IG5ldyBTY2hlZHVsZUNvbnRyb2xsZXIoKTtcbiAgICAgICAgdGhpcy5uYXZpZ2F0aW9uLmFkZCgnU2NoZWR1bGUnLCB0aGlzLnNjaGVkdWxlU2NyZWVuKTtcbiAgICB9XG5cbiAgICBzd2l0Y2hUb0V4ZXJjaXNlcygpXG4gICAge1xuICAgICAgICB0aGlzLm5hdmlnYXRpb24uc3dpdGNoVmlldyh0aGlzLmV4ZXJjaXNlc1NjcmVlbik7XG4gICAgfVxuXG4gICAgc3dpdGNoVG9TY2hlZHVsZSgpXG4gICAge1xuICAgICAgICB0aGlzLm5hdmlnYXRpb24uc3dpdGNoVmlldyh0aGlzLnNjaGVkdWxlU2NyZWVuKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgVmlld0NvbnRyb2xsZXIgZnJvbSBcIi4vVmlld0NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBFeGVyY2lzZSBmcm9tIFwiLi4vbW9kZWxzL0V4ZXJjaXNlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4ZXJjaXNlc0NvbnRyb2xsZXIgZXh0ZW5kcyBWaWV3Q29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICBzdXBlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZXhlcmNpc2VzJyksICdFeGVyY2lzZXMnKTtcblxuICAgICAgICB0aGlzLmxpc3RFbCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5leGVyY2lzZS10YWJsZSB0Ym9keScpO1xuICAgICAgICB0aGlzLmxpc3RFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZUV4ZXJjaXNlJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvd1RvUmVtb3ZlID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICB0aGlzLmV4ZXJjaXNlSWRUb1JlbW92ZSA9IHRoaXMucm93VG9SZW1vdmUuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RGVsZXRlRXhlcmNpc2VEaWFsb2coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucG9wdWxhdGVFeGVyY2lzZUxpc3QoKTtcblxuICAgICAgICB0aGlzLmFkZERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtZXhlcmNpc2UtZGlhbG9nJyk7XG4gICAgICAgIHRoaXMuYWRkRXhlcmNpc2VOYW1lID0gdGhpcy5hZGREaWFsb2cucXVlcnlTZWxlY3RvcignI2FkZC1leGVyY2lzZS1uYW1lJyk7XG4gICAgICAgIHRoaXMuYWRkRXhlcmNpc2VSZXBzID0gdGhpcy5hZGREaWFsb2cucXVlcnlTZWxlY3RvcignI2FkZC1leGVyY2lzZS1yZXBzJyk7XG4gICAgICAgIHRoaXMuYWRkRXhlcmNpc2VSZXN0ID0gdGhpcy5hZGREaWFsb2cucXVlcnlTZWxlY3RvcignI2FkZC1leGVyY2lzZS1yZXN0Jyk7XG4gICAgICAgIHRoaXMuYWRkRGlhbG9nQnV0dG9ucyA9IHRoaXMuYWRkRGlhbG9nLnF1ZXJ5U2VsZWN0b3IoJy5tZGwtZGlhbG9nX19hY3Rpb25zJykucXVlcnlTZWxlY3RvckFsbCgnLm1kbC1idXR0b24nKTtcbiAgICAgICAgdGhpcy5hZGREaWFsb2dCdXR0b25zWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5hZGRFeGVyY2lzZSgpKTtcbiAgICAgICAgdGhpcy5hZGREaWFsb2dCdXR0b25zWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5jbG9zZUFkZEV4ZXJjaXNlRGlhbG9nKCkpO1xuXG4gICAgICAgIHRoaXMuZGVsZXRlRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RlbGV0ZS1leGVyY2lzZS1kaWFsb2cnKTtcbiAgICAgICAgdGhpcy5kZWxldGVEaWFsb2dCdXR0b25zID0gdGhpcy5kZWxldGVEaWFsb2cucXVlcnlTZWxlY3RvcignLm1kbC1kaWFsb2dfX2FjdGlvbnMnKS5xdWVyeVNlbGVjdG9yQWxsKCcubWRsLWJ1dHRvbicpO1xuICAgICAgICB0aGlzLmRlbGV0ZURpYWxvZ0J1dHRvbnNbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmRlbGV0ZUV4ZXJjaXNlKCkpO1xuICAgICAgICB0aGlzLmRlbGV0ZURpYWxvZ0J1dHRvbnNbMV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmNsb3NlRGVsZXRlRXhlcmNpc2VEaWFsb2coKSk7XG5cbiAgICAgICAgdGhpcy5hZGRFeGVyY2lzZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtZXhlcmNpc2UtYnV0dG9uJyk7XG4gICAgICAgIHRoaXMuYWRkRXhlcmNpc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnNob3dBZGRFeGVyY2lzZURpYWxvZygpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIHRoZSBBZGQgRXhlcmNpc2UgZGlhbG9nXG4gICAgICovXG4gICAgc2hvd0FkZEV4ZXJjaXNlRGlhbG9nKClcbiAgICB7XG4gICAgICAgIHRoaXMuYWRkRGlhbG9nLk1hdGVyaWFsRGlhbG9nLnNob3coKTtcbiAgICAgICAgdGhpcy5hZGRFeGVyY2lzZU5hbWUuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9zZXMgdGhlIEFkZCBFeGVyY2lzZSBkaWFsb2dcbiAgICAgKi9cbiAgICBjbG9zZUFkZEV4ZXJjaXNlRGlhbG9nKClcbiAgICB7XG4gICAgICAgIHRoaXMuYWRkRGlhbG9nLk1hdGVyaWFsRGlhbG9nLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIG5ldyBleGVyY2lzZVxuICAgICAqL1xuICAgIGFkZEV4ZXJjaXNlKClcbiAgICB7XG4gICAgICAgIGlmICh0aGlzLmFkZEV4ZXJjaXNlTmFtZS5jaGVja1ZhbGlkaXR5KClcbiAgICAgICAgICAgICYmIHRoaXMuYWRkRXhlcmNpc2VSZXBzLmNoZWNrVmFsaWRpdHkoKVxuICAgICAgICAgICAgJiYgdGhpcy5hZGRFeGVyY2lzZVJlc3QuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IHRoaXMuYWRkRXhlcmNpc2VOYW1lLnZhbHVlO1xuICAgICAgICAgICAgdmFyIHJlcHMgPSB0aGlzLmFkZEV4ZXJjaXNlUmVwcy52YWx1ZTtcbiAgICAgICAgICAgIHZhciByZXN0ID0gdGhpcy5hZGRFeGVyY2lzZVJlc3QudmFsdWU7XG4gICAgICAgICAgICB0aGlzLmFkZEV4ZXJjaXNlTmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLmFkZEV4ZXJjaXNlUmVwcy52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB0aGlzLmFkZEV4ZXJjaXNlUmVzdC52YWx1ZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgZXhlcmNpc2UgPSBFeGVyY2lzZS5hZGQobmFtZSwgcmVwcywgcmVzdCk7XG4gICAgICAgICAgICB0aGlzLmFkZEV4ZXJjaXNlVG9Eb20oZXhlcmNpc2UpO1xuICAgICAgICAgICAgdGhpcy5jbG9zZUFkZEV4ZXJjaXNlRGlhbG9nKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFuIGV4ZXJjaXNlIHRvIHRoZSBleGVyY2lzZSBsaXN0IGVsZW1lbnQgaW4gdGhlIGRvbVxuICAgICAqIEBwYXJhbSBleGVyY2lzZVxuICAgICAqL1xuICAgIGFkZEV4ZXJjaXNlVG9Eb20oZXhlcmNpc2UpXG4gICAge1xuICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICByb3cuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgZXhlcmNpc2UuaWQpO1xuXG4gICAgICAgIHZhciBuYW1lQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBuYW1lQ29sLnRleHRDb250ZW50ID0gZXhlcmNpc2UubmFtZTtcbiAgICAgICAgbmFtZUNvbC5jbGFzc05hbWUgPSBcIm1kbC1kYXRhLXRhYmxlX19jZWxsLS1ub24tbnVtZXJpY1wiO1xuXG4gICAgICAgIHZhciByZXBzQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICByZXBzQ29sLnRleHRDb250ZW50ID0gZXhlcmNpc2UucmVwcztcblxuICAgICAgICB2YXIgcmVzdENvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgcmVzdENvbC50ZXh0Q29udGVudCA9IGV4ZXJjaXNlLnJlc3Q7XG5cbiAgICAgICAgdmFyIGRlbGV0ZUNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgdmFyIGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgICAgZGVsZXRlSWNvbi5jbGFzc05hbWUgPSBcImRlbGV0ZUV4ZXJjaXNlIG1hdGVyaWFsLWljb25zXCI7XG4gICAgICAgIGRlbGV0ZUljb24udGV4dENvbnRlbnQgPSBcImRlbGV0ZVwiO1xuICAgICAgICBkZWxldGVDb2wuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XG5cbiAgICAgICAgcm93LmFwcGVuZENoaWxkKG5hbWVDb2wpO1xuICAgICAgICByb3cuYXBwZW5kQ2hpbGQocmVwc0NvbCk7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChyZXN0Q29sKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGRlbGV0ZUNvbCk7XG4gICAgICAgIHRoaXMubGlzdEVsLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUG9wdWxhdGVzIHRoZSBleGVyY2lzZSBsaXN0IGZyb20gbG9jYWwgZGF0YVxuICAgICAqL1xuICAgIHBvcHVsYXRlRXhlcmNpc2VMaXN0KClcbiAgICB7XG4gICAgICAgIHRoaXMuY2xlYXJFeGVyY2lzZXNGcm9tRG9tKCk7XG4gICAgICAgIHZhciBleGVyY2lzZXMgPSBFeGVyY2lzZS5nZXQoKTtcbiAgICAgICAgZm9yKGxldCBleGVyY2lzZSBvZiBleGVyY2lzZXMpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXhlcmNpc2VUb0RvbShleGVyY2lzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyB0aGUgRGVsZXRlIEV4ZXJjaXNlIGRpYWxvZ1xuICAgICAqL1xuICAgIHNob3dEZWxldGVFeGVyY2lzZURpYWxvZygpXG4gICAge1xuICAgICAgICB0aGlzLmRlbGV0ZURpYWxvZy5NYXRlcmlhbERpYWxvZy5zaG93KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xvc2VzIHRoZSBEZWxldGUgRXhlcmNpc2UgZGlhbG9nXG4gICAgICovXG4gICAgY2xvc2VEZWxldGVFeGVyY2lzZURpYWxvZygpXG4gICAge1xuICAgICAgICB0aGlzLmRlbGV0ZURpYWxvZy5NYXRlcmlhbERpYWxvZy5jbG9zZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBleGVyY2lzZVxuICAgICAqL1xuICAgIGRlbGV0ZUV4ZXJjaXNlKClcbiAgICB7XG4gICAgICAgIHRoaXMubGlzdEVsLnJlbW92ZUNoaWxkKHRoaXMucm93VG9SZW1vdmUpO1xuICAgICAgICBFeGVyY2lzZS5kZWxldGUodGhpcy5leGVyY2lzZUlkVG9SZW1vdmUpO1xuICAgICAgICB0aGlzLmNsb3NlRGVsZXRlRXhlcmNpc2VEaWFsb2coKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGV4ZXJjaXNlIGxpc3RcbiAgICAgKi9cbiAgICBjbGVhckV4ZXJjaXNlc0Zyb21Eb20oKVxuICAgIHtcbiAgICAgICAgdGhpcy5saXN0RWwuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxufSIsImltcG9ydCBWaWV3Q29udHJvbGxlciBmcm9tICcuL1ZpZXdDb250cm9sbGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGlvbkNvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoKVxuICAgIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2aWdhdGlvbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIG1lbnUgaXRlbSB0byB0aGUgbmF2aWdhdGlvblxuICAgICAqIEBwYXJhbSBpdGVtVGV4dCBUaGUgbmFtZSBvZiB0aGUgbWVudSBpdGVtXG4gICAgICogQHBhcmFtIGNvbnRyb2xsZXIgVGhlIFZpZXdDb250cm9sbGVyIHRvIHN3aXRjaCBvbiBjbGlja1xuICAgICAqIEBwYXJhbSBzZXREZWZhdWx0IFdoZXRoZXIgdG8gc2V0IHRoaXMgaXRlbSBhcyB0aGUgZGVmYXVsdCBzZWxlY3Rpb25cbiAgICAgKi9cbiAgICBhZGQoaXRlbVRleHQsIGNvbnRyb2xsZXIsIHNldERlZmF1bHQpXG4gICAge1xuICAgICAgICBpZiAoIWNvbnRyb2xsZXIgaW5zdGFuY2VvZiBWaWV3Q29udHJvbGxlcikge1xuICAgICAgICAgICAgdGhyb3cgXCJOYXZpZ2F0aW9uIGNvbnRyb2xsZXIgbXVzdCBiZSBvZiB0eXBlIFZpZXdDb250cm9sbGVyXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGEuY2xhc3NMaXN0LmFkZCgnbWRsLW5hdmlnYXRpb25fX2xpbmsnKTtcbiAgICAgICAgYS5ocmVmID0gXCIjXCI7XG4gICAgICAgIGEudGV4dENvbnRlbnQgPSBpdGVtVGV4dDtcbiAgICAgICAgYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnN3aXRjaFZpZXcoY29udHJvbGxlcilcbiAgICAgICAgICAgIHRoaXMuY2xvc2VEcmF3ZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGEpO1xuICAgICAgICBpZiAoc2V0RGVmYXVsdCkge1xuICAgICAgICAgICAgYS5jbGljaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3dpdGNoZXMgdGhlIHZpZXcgdG8gc2hvd1xuICAgICAqIEBwYXJhbSBjb250cm9sbGVyIFRoZSBWaWV3Q29udHJvbGxlciB0byBzd2l0Y2ggdG9cbiAgICAgKi9cbiAgICBzd2l0Y2hWaWV3KGNvbnRyb2xsZXIpXG4gICAge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50Q29udHJvbGxlcikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q29udHJvbGxlci5oaWRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50Q29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4gICAgICAgIHRoaXMuY3VycmVudENvbnRyb2xsZXIuc2hvdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhdXNlcyB0aGUgbmF2aWdhdGlvbiBkcmF3ZXIgdG8gZ28gYXdheVxuICAgICAqL1xuICAgIGNsb3NlRHJhd2VyKClcbiAgICB7XG4gICAgICAgIGlmICghdGhpcy5uYXZCdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMubmF2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1kbC1sYXlvdXRfX2RyYXdlci1idXR0b24nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5uYXZCdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMubmF2QnV0dG9uLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgVmlld0NvbnRyb2xsZXIgZnJvbSBcIi4vVmlld0NvbnRyb2xsZXIuanNcIjtcbmltcG9ydCBFeGVyY2lzZSBmcm9tIFwiLi4vbW9kZWxzL0V4ZXJjaXNlLmpzXCI7XG5pbXBvcnQgRXhlcmNpc2VMb2cgZnJvbSBcIi4uL21vZGVscy9FeGVyY2lzZUxvZy5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVydmlld0NvbnRyb2xsZXIgZXh0ZW5kcyBWaWV3Q29udHJvbGxlciB7XG5cbiAgICBjb25zdHJ1Y3RvcihhcHBsaWNhdGlvbilcbiAgICB7XG4gICAgICAgIHN1cGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVydmlldycpLCAnT3ZlcnZpZXcnKTtcblxuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uID0gYXBwbGljYXRpb247XG5cbiAgICAgICAgdGhpcy5saXN0RWwgPSB0aGlzLmNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZXhlcmNpc2UtdGFibGUgdGJvZHknKTtcbiAgICAgICAgdGhpcy5saXN0RWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wbGV0ZUJ1dHRvbicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUV4ZXJjaXNlKGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnBvcHVsYXRlRXhlcmNpc2VMaXN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFyayBhbiBleGVyY2lzZSBhcyBjb21wbGV0ZSBpbiB0aGUgZXhlcmNpc2VzIHRhYmxlXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKi9cbiAgICBjb21wbGV0ZUV4ZXJjaXNlKGVsZW1lbnQpXG4gICAge1xuICAgICAgICB2YXIgcm93RWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICB2YXIgZXhlcmNpc2VJZCA9IHJvd0VsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XG4gICAgICAgIHZhciBjb21wbGV0aW9uRGF0ZSA9IERhdGUubm93KCk7XG4gICAgICAgIEV4ZXJjaXNlLnVwZGF0ZShleGVyY2lzZUlkLCB7XG4gICAgICAgICAgICBsYXN0Q29tcGxldGU6IGNvbXBsZXRpb25EYXRlXG4gICAgICAgIH0pO1xuICAgICAgICBFeGVyY2lzZUxvZy5hZGQoZXhlcmNpc2VJZCwgY29tcGxldGlvbkRhdGUpO1xuICAgICAgICB0aGlzLnBvcHVsYXRlRXhlcmNpc2VMaXN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUG9wdWxhdGVzIHRoZSBvdmVydmlldyBleGVyY2lzZSBsaXN0IHdpdGggZXhlcmNpc2VzIGR1ZVxuICAgICAqL1xuICAgIHBvcHVsYXRlRXhlcmNpc2VMaXN0KClcbiAgICB7XG4gICAgICAgIHRoaXMuY2xlYXJFeGVyY2lzZXNGcm9tRG9tKCk7XG4gICAgICAgIHZhciBleGVyY2lzZXMgPSBFeGVyY2lzZS5xdWVyeShmdW5jdGlvbihleGVyY2lzZSkge1xuICAgICAgICAgICAgdmFyIGRheUNvbXBsZXRlZCA9IG5ldyBEYXRlKGV4ZXJjaXNlLmxhc3RDb21wbGV0ZSkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgICAgICB2YXIgcmVzdFRpbWUgPSAocGFyc2VJbnQoZXhlcmNpc2UucmVzdCkgKyAxKSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4gICAgICAgICAgICByZXR1cm4gKGRheUNvbXBsZXRlZCA8IERhdGUubm93KCkgLSByZXN0VGltZSkgfHwgdHlwZW9mIGV4ZXJjaXNlLmxhc3RDb21wbGV0ZSA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoZXhlcmNpc2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKEV4ZXJjaXNlLmdldCgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd05vRXhlcmNpc2VzVGV4dCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dOb0V4ZXJjaXNlc0ZvclRvZGF5VGV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgZXhlcmNpc2Ugb2YgZXhlcmNpc2VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFeGVyY2lzZVRvRG9tKGV4ZXJjaXNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gZXhlcmNpc2UgdG8gdGhlIGV4ZXJjaXNlIGxpc3QgZWxlbWVudCBpbiB0aGUgZG9tXG4gICAgICogQHBhcmFtIG5hbWVcbiAgICAgKiBAcGFyYW0gcmVwc1xuICAgICAqL1xuICAgIGFkZEV4ZXJjaXNlVG9Eb20oZXhlcmNpc2UpXG4gICAge1xuICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICAgICAgICByb3cuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgZXhlcmNpc2UuaWQpO1xuXG4gICAgICAgIHZhciBuYW1lQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBuYW1lQ29sLnRleHRDb250ZW50ID0gZXhlcmNpc2UubmFtZTtcbiAgICAgICAgbmFtZUNvbC5jbGFzc05hbWUgPSBcIm1kbC1kYXRhLXRhYmxlX19jZWxsLS1ub24tbnVtZXJpY1wiO1xuXG4gICAgICAgIHZhciByZXBzQ29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICByZXBzQ29sLnRleHRDb250ZW50ID0gZXhlcmNpc2UucmVwcztcblxuICAgICAgICB2YXIgY29tcGxldGVDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHZhciBjb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNvbXBsZXRlQnV0dG9uLmNsYXNzTmFtZSA9ICdjb21wbGV0ZUJ1dHRvbiBtZGwtYnV0dG9uIG1kbC1idXR0b24tLXByaW1hcnknO1xuICAgICAgICBjb21wbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb21wbGV0ZSc7XG4gICAgICAgIGNvbXBsZXRlQ29sLmFwcGVuZENoaWxkKGNvbXBsZXRlQnV0dG9uKTtcblxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobmFtZUNvbCk7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChyZXBzQ29sKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGNvbXBsZXRlQ29sKTtcbiAgICAgICAgdGhpcy5saXN0RWwuYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGV4ZXJjaXNlIGxpc3RcbiAgICAgKi9cbiAgICBjbGVhckV4ZXJjaXNlc0Zyb21Eb20oKVxuICAgIHtcbiAgICAgICAgdGhpcy5saXN0RWwuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgYSBtZXNzYWdlIGluIGV4ZXJjaXNlIHRhYmxlIHdoZW4gbm8gZXhlcmNpc2VzIGFyZSB0byBiZSBkb25lIHRvZGF5XG4gICAgICovXG4gICAgc2hvd05vRXhlcmNpc2VzRm9yVG9kYXlUZXh0KClcbiAgICB7XG4gICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG5cbiAgICAgICAgdmFyIGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgY29sLmlubmVySFRNTCA9IFwiVGhlcmUgYXJlIG5vIGV4ZXJjaXNlcyBsZWZ0IHRvIGRvIHRvZGF5LiA8YSBocmVmPScjJz5DaGVjayBzY2hlZHVsZTwvYT4uXCI7XG4gICAgICAgIGNvbC5jbGFzc05hbWUgPSBcIm1kbC1kYXRhLXRhYmxlX19jZWxsLS1ub24tbnVtZXJpYyB0YWJsZS1tZXNzYWdlXCI7XG4gICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nLCAzKTtcbiAgICAgICAgY29sLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5ub2RlTmFtZSA9PT0gXCJBXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGxpY2F0aW9uLnN3aXRjaFRvU2NoZWR1bGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcm93LmFwcGVuZENoaWxkKGNvbCk7XG4gICAgICAgIHRoaXMubGlzdEVsLmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgYSBtZXNzYWdlIGluIGV4ZXJjaXNlIHRhYmxlIHdoZW4gbm8gZXhlcmNpc2VzIGFyZSB0byBiZSBkb25lIHRvZGF5XG4gICAgICovXG4gICAgc2hvd05vRXhlcmNpc2VzVGV4dCgpXG4gICAge1xuICAgICAgICB2YXIgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuXG4gICAgICAgIHZhciBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIGNvbC5pbm5lckhUTUwgPSBcIllvdSBoYXZlbid0IGFkZGVkIGFueSBleGVyY2lzZXMgeWV0LiA8YSBocmVmPScjJz5NYW5hZ2UgZXhlcmNpc2VzPC9hPlwiO1xuICAgICAgICBjb2wuY2xhc3NOYW1lID0gXCJtZGwtZGF0YS10YWJsZV9fY2VsbC0tbm9uLW51bWVyaWMgdGFibGUtbWVzc2FnZVwiO1xuICAgICAgICBjb2wuc2V0QXR0cmlidXRlKCdjb2xzcGFuJywgMyk7XG4gICAgICAgIGNvbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQubm9kZU5hbWUgPT09IFwiQVwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvbi5zd2l0Y2hUb0V4ZXJjaXNlcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQoY29sKTtcbiAgICAgICAgdGhpcy5saXN0RWwuYXBwZW5kQ2hpbGQocm93KTtcbiAgICB9XG59IiwiaW1wb3J0IFZpZXdDb250cm9sbGVyIGZyb20gXCIuL1ZpZXdDb250cm9sbGVyLmpzXCI7XG5pbXBvcnQgRXhlcmNpc2UgZnJvbSBcIi4uL21vZGVscy9FeGVyY2lzZS5qc1wiO1xudmFyIGRhdGVGb3JtYXQgPSByZXF1aXJlKCdkYXRlZm9ybWF0Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjaGVkdWxlQ29udHJvbGxlciBleHRlbmRzIFZpZXdDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKClcbiAgICB7XG4gICAgICAgIHN1cGVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY2hlZHVsZScpLCAnU2NoZWR1bGUnKTtcblxuICAgICAgICB0aGlzLmxpc3RFbCA9IHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5leGVyY2lzZS10YWJsZSB0Ym9keScpO1xuICAgICAgICB0aGlzLnBvcHVsYXRlU2NoZWR1bGVMaXN0KCk7XG4gICAgfVxuXG4gICAgcG9wdWxhdGVTY2hlZHVsZUxpc3QoKVxuICAgIHtcbiAgICAgICAgdGhpcy5jbGVhclNjaGVkdWxlRnJvbURvbSgpO1xuICAgICAgICB2YXIgZXhlcmNpc2VzID0gRXhlcmNpc2UuZ2V0KCk7XG4gICAgICAgIGZvcihsZXQgZXhlcmNpc2Ugb2YgZXhlcmNpc2VzKSB7XG4gICAgICAgICAgICBleGVyY2lzZS5zY2hlZHVsZURhdGUgPSB0aGlzLmNhbGN1bGF0ZVNjaGVkdWxlRGF0ZShleGVyY2lzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhlcmNpc2VzID0gZXhlcmNpc2VzLnNvcnQoZnVuY3Rpb24gc29ydEJ5U2NoZWR1bGVEYXRlKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBhLnNjaGVkdWxlRGF0ZSA+IGIuc2NoZWR1bGVEYXRlID8gMSA6IGIuc2NoZWR1bGVEYXRlID4gYS5zY2hlZHVsZURhdGUgPyAtMSA6IDA7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbGFzdEdyb3VwaW5nID0gMDtcbiAgICAgICAgZm9yKGxldCBleGVyY2lzZSBvZiBleGVyY2lzZXMpIHtcbiAgICAgICAgICAgIGlmIChleGVyY2lzZS5zY2hlZHVsZURhdGUgIT09IGxhc3RHcm91cGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkR3JvdXBUb0RvbShleGVyY2lzZS5zY2hlZHVsZURhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGFzdEdyb3VwaW5nID0gZXhlcmNpc2Uuc2NoZWR1bGVEYXRlO1xuICAgICAgICAgICAgdGhpcy5hZGRFeGVyY2lzZVRvRG9tKGV4ZXJjaXNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgZXhlcmNpc2UgbGlzdFxuICAgICAqL1xuICAgIGNsZWFyU2NoZWR1bGVGcm9tRG9tKClcbiAgICB7XG4gICAgICAgIHRoaXMubGlzdEVsLmlubmVySFRNTCA9ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBncm91cGluZyB0byB0aGUgc2NoZWR1bGVkIGV4ZXJjaXNlcyB0YWJsZVxuICAgICAqL1xuICAgIGFkZEdyb3VwVG9Eb20oc2NoZWR1bGVEYXRlVGltZXN0YW1wKVxuICAgIHtcbiAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKHNjaGVkdWxlRGF0ZVRpbWVzdGFtcCk7XG5cbiAgICAgICAgdmFyIGdyb3VwUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuXG4gICAgICAgIHZhciBncm91cFJvd0NvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgZ3JvdXBSb3dDb2wuc2V0QXR0cmlidXRlKFwiY29sc3BhblwiLCBcIjFcIik7XG4gICAgICAgIGdyb3VwUm93Q29sLnRleHRDb250ZW50ID0gZGF0ZUZvcm1hdChub3csIFwiZGRkZFwiKTtcbiAgICAgICAgZ3JvdXBSb3dDb2wuY2xhc3NOYW1lID0gXCJtZGwtZGF0YS10YWJsZV9fY2VsbC0tbm9uLW51bWVyaWMgdGFibGUtZ3JvdXBcIjtcblxuICAgICAgICB2YXIgZ3JvdXBSb3dDb2wyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICBncm91cFJvd0NvbDIuc2V0QXR0cmlidXRlKFwiY29sc3BhblwiLCBcIjJcIik7XG4gICAgICAgIGdyb3VwUm93Q29sMi50ZXh0Q29udGVudCA9IGRhdGVGb3JtYXQobm93LCBcIm1tbW0gZFMsIHl5eXlcIik7XG4gICAgICAgIGdyb3VwUm93Q29sMi5jbGFzc05hbWUgPSBcInRhYmxlLWdyb3VwXCI7XG5cbiAgICAgICAgZ3JvdXBSb3cuYXBwZW5kQ2hpbGQoZ3JvdXBSb3dDb2wpO1xuICAgICAgICBncm91cFJvdy5hcHBlbmRDaGlsZChncm91cFJvd0NvbDIpO1xuICAgICAgICB0aGlzLmxpc3RFbC5hcHBlbmRDaGlsZChncm91cFJvdyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBleGVyY2lzZSB0byB0aGUgZXhlcmNpc2UgbGlzdCBlbGVtZW50IGluIHRoZSBkb21cbiAgICAgKiBAcGFyYW0gbmFtZVxuICAgICAqIEBwYXJhbSByZXBzXG4gICAgICovXG4gICAgYWRkRXhlcmNpc2VUb0RvbShleGVyY2lzZSlcbiAgICB7XG4gICAgICAgIHZhciByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG5cbiAgICAgICAgdmFyIG5hbWVDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIG5hbWVDb2wudGV4dENvbnRlbnQgPSBleGVyY2lzZS5uYW1lO1xuICAgICAgICBuYW1lQ29sLmNsYXNzTmFtZSA9IFwibWRsLWRhdGEtdGFibGVfX2NlbGwtLW5vbi1udW1lcmljXCI7XG5cbiAgICAgICAgdmFyIHJlcHNDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHJlcHNDb2wudGV4dENvbnRlbnQgPSBleGVyY2lzZS5yZXBzO1xuXG4gICAgICAgIHZhciByZXN0Q29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICByZXN0Q29sLnRleHRDb250ZW50ID0gZXhlcmNpc2UucmVzdDtcblxuICAgICAgICByb3cuYXBwZW5kQ2hpbGQobmFtZUNvbCk7XG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZChyZXBzQ29sKTtcbiAgICAgICAgcm93LmFwcGVuZENoaWxkKHJlc3RDb2wpO1xuICAgICAgICB0aGlzLmxpc3RFbC5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIGRhdGUgd2hlbiB0aGUgZXhlcmNpc2UgY2FuIG5leHQgYmUgZG9uZVxuICAgICAqIEBwYXJhbSBleGVyY2lzZVxuICAgICAqL1xuICAgIGNhbGN1bGF0ZVNjaGVkdWxlRGF0ZShleGVyY2lzZSlcbiAgICB7XG4gICAgICAgIGlmIChleGVyY2lzZS5sYXN0Q29tcGxldGUpIHtcbiAgICAgICAgICAgIHZhciBkYXlDb21wbGV0ZSA9IG5ldyBEYXRlKGV4ZXJjaXNlLmxhc3RDb21wbGV0ZSkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgICAgICB2YXIgcmVzdFRpbWUgPSAocGFyc2VJbnQoZXhlcmNpc2UucmVzdCkgKyAxKSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG4gICAgICAgICAgICB2YXIgc2NoZWR1bGVEYXRlID0gZGF5Q29tcGxldGUgKyByZXN0VGltZTtcbiAgICAgICAgICAgIHNjaGVkdWxlRGF0ZSA9IHNjaGVkdWxlRGF0ZSA8IERhdGUubm93KCkgPyBEYXRlLm5vdygpIDogc2NoZWR1bGVEYXRlO1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlRGF0ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXdDb250cm9sbGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lciwgdGl0bGUpXG4gICAge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLnRpdGxlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlld1RpdGxlJyk7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cblxuICAgIHNob3coKVxuICAgIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgdGhpcy50aXRsZUVsLnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcbiAgICB9XG5cbiAgICBoaWRlKClcbiAgICB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG59IiwiaW1wb3J0IE1vZGVsIGZyb20gJy4vTW9kZWwuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGVyY2lzZSBleHRlbmRzIE1vZGVse1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbG9jYWxzdG9yYWdlIGtleSB0byB1c2VcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRLZXkoKVxuICAgIHtcbiAgICAgICAgcmV0dXJuICdleGVyY2lzZXMnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3JlcyBhIG5ldyBleGVyY2lzZVxuICAgICAqIEBwYXJhbSBuYW1lXG4gICAgICogQHBhcmFtIHJlcHNcbiAgICAgKi9cbiAgICBzdGF0aWMgYWRkKG5hbWUsIHJlcHMsIHJlc3QpXG4gICAge1xuICAgICAgICB2YXIgc3RvcmUgPSB0aGlzLmdldFN0b3JlKCk7XG4gICAgICAgIHZhciBleGVyY2lzZSA9IHtcbiAgICAgICAgICAgIGlkOiBzdG9yZS5pbmNyZW1lbnRJZCxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICByZXBzOiBwYXJzZUludChyZXBzKSxcbiAgICAgICAgICAgIHJlc3Q6IHBhcnNlSW50KHJlc3QpXG4gICAgICAgIH07XG4gICAgICAgIHN0b3JlLml0ZW1zLnB1c2goZXhlcmNpc2UpO1xuICAgICAgICBzdG9yZS5pbmNyZW1lbnRJZCsrO1xuICAgICAgICB0aGlzLnNldFN0b3JlKHN0b3JlKTtcbiAgICAgICAgcmV0dXJuIGV4ZXJjaXNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIHRoZSBzdG9yZWQgZXhlcmNpc2VzXG4gICAgICogQHJldHVybnMge3t9fVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQoKVxuICAgIHtcbiAgICAgICAgdmFyIHN0b3JlID0gdGhpcy5nZXRTdG9yZSgpO1xuICAgICAgICByZXR1cm4gc3RvcmUuaXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgb2xkLXN0eWxlIHN0b3JlIHRvIG5ldyBzdHlsZVxuICAgICAqIEBwYXJhbSBsZWdhY3lTdG9yZVxuICAgICAqIEByZXR1cm5zIHt7fX1cbiAgICAgKi9cbiAgICBzdGF0aWMgdXBncmFkZUxlZ2FjeShsZWdhY3lTdG9yZSlcbiAgICB7XG4gICAgICAgIHZhciBzdG9yZSA9IHt9O1xuICAgICAgICBzdG9yZS5pdGVtcyA9IGxlZ2FjeVN0b3JlO1xuICAgICAgICBzdG9yZS5pbmNyZW1lbnRJZCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBsYXN0SWQgPSBsZWdhY3lTdG9yZS5yZWR1Y2UoZnVuY3Rpb24gKGxhc3QsIGV4ZXJjaXNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KGxhc3QsIGV4ZXJjaXNlLmlkKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgcmV0dXJuIGxhc3RJZCArIDE7XG4gICAgICAgIH0pKCk7XG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgcmVjb3JkIG1hdGNoaW5nIGlkXG4gICAgICogQHBhcmFtIGlkXG4gICAgICovXG4gICAgc3RhdGljIGRlbGV0ZShpZClcbiAgICB7XG4gICAgICAgIHZhciBzdG9yZSA9IHRoaXMuZ2V0U3RvcmUoKTtcbiAgICAgICAgc3RvcmUuaXRlbXMgPSBzdG9yZS5pdGVtcy5maWx0ZXIoZnVuY3Rpb24oZXhlcmNpc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBleGVyY2lzZS5pZCAhPSBpZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RvcmUoc3RvcmUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSByZWNvcmQgbWF0Y2hpbmcgaWQsIHJlcGxhY2luZyBrZXlzIG1lbnRpb25lZCBpbiBjaGFuZ2VEYXRhXG4gICAgICogQHBhcmFtIGlkXG4gICAgICogQHBhcmFtIGNoYW5nZURhdGFcbiAgICAgKi9cbiAgICBzdGF0aWMgdXBkYXRlKGlkLCBjaGFuZ2VEYXRhKVxuICAgIHtcbiAgICAgICAgdmFyIHN0b3JlID0gdGhpcy5nZXRTdG9yZSgpO1xuICAgICAgICBzdG9yZS5pdGVtcyA9IHN0b3JlLml0ZW1zLm1hcChmdW5jdGlvbihleGVyY2lzZSkge1xuICAgICAgICAgICAgaWYgKGV4ZXJjaXNlLmlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYXR0cmlidXRlIGluIGNoYW5nZURhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoYW5nZURhdGEuaGFzT3duUHJvcGVydHkoYXR0cmlidXRlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhlcmNpc2VbYXR0cmlidXRlXSA9IGNoYW5nZURhdGFbYXR0cmlidXRlXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBleGVyY2lzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RvcmUoc3RvcmUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCByZWNvcmRzIHdoZXJlIG1hdGNoIGNyaXRlcmlhXG4gICAgICogQHBhcmFtIHByb3BlcnR5XG4gICAgICogQHBhcmFtIG9wZXJhdG9yXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICovXG4gICAgc3RhdGljIHdoZXJlKHByb3BlcnR5LCBvcGVyYXRvciwgdmFsdWUpXG4gICAge1xuICAgICAgICB2YXIgc3RvcmUgPSB0aGlzLmdldFN0b3JlKCk7XG4gICAgICAgIHN0b3JlLml0ZW1zID0gc3RvcmUuaXRlbXMuZmlsdGVyKGZ1bmN0aW9uKGV4ZXJjaXNlKSB7XG4gICAgICAgICAgICB2YXIgZmllbGQgPSBleGVyY2lzZVtwcm9wZXJ0eV07XG4gICAgICAgICAgICB2YXIgZ3JlYXRlclRoYW4gPSBvcGVyYXRvciA9PSAnPicgJiYgZmllbGQgPiB2YWx1ZTtcbiAgICAgICAgICAgIHZhciBsZXNzVGhhbiA9IG9wZXJhdG9yID09ICc8JyAmJiBmaWVsZCA8IHZhbHVlO1xuICAgICAgICAgICAgdmFyIGVxdWFsVG8gPSBvcGVyYXRvciA9PSAnPScgJiYgZmllbGQgPT0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gKGdyZWF0ZXJUaGFuIHx8IGxlc3NUaGFuIHx8IGVxdWFsVG8pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0b3JlLml0ZW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgcmVjb3JkcyBiYXNlZCBvbiBjdXN0b20gcXVlcnkgbWV0aG9kXG4gICAgICogQHBhcmFtIHF1ZXJ5TWV0aG9kXG4gICAgICovXG4gICAgc3RhdGljIHF1ZXJ5KHF1ZXJ5TWV0aG9kKVxuICAgIHtcbiAgICAgICAgdmFyIHN0b3JlID0gdGhpcy5nZXRTdG9yZSgpO1xuICAgICAgICBzdG9yZS5pdGVtcyA9IHN0b3JlLml0ZW1zLmZpbHRlcihxdWVyeU1ldGhvZCk7XG4gICAgICAgIHJldHVybiBzdG9yZS5pdGVtcztcbiAgICB9XG59IiwiaW1wb3J0IE1vZGVsIGZyb20gJy4vTW9kZWwuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeGVyY2lzZUxvZyBleHRlbmRzIE1vZGVsIHtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxvY2Fsc3RvcmFnZSBrZXkgdG8gdXNlXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0S2V5KClcbiAgICB7XG4gICAgICAgIHJldHVybiAnZXhlcmNpc2VMb2dzJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9yZXMgYSBuZXcgZXhlcmNpc2UgTG9nXG4gICAgICogQHBhcmFtIGV4ZXJjaXNlSWRcbiAgICAgKiBAcGFyYW0gZGF0ZUNvbXBsZXRlZFxuICAgICAqL1xuICAgIHN0YXRpYyBhZGQoZXhlcmNpc2VJZCwgZGF0ZUNvbXBsZXRlZClcbiAgICB7XG4gICAgICAgIHZhciBzdG9yZSA9IHRoaXMuZ2V0U3RvcmUoKTtcbiAgICAgICAgdmFyIGV4ZXJjaXNlTG9nID0ge1xuICAgICAgICAgICAgaWQ6IHN0b3JlLmluY3JlbWVudElkLFxuICAgICAgICAgICAgZXhlcmNpc2VJZDogZXhlcmNpc2VJZCxcbiAgICAgICAgICAgIGRhdGVDb21wbGV0ZWQ6IGRhdGVDb21wbGV0ZWRcbiAgICAgICAgfTtcbiAgICAgICAgc3RvcmUuaXRlbXMucHVzaChleGVyY2lzZUxvZyk7XG4gICAgICAgIHN0b3JlLmluY3JlbWVudElkKys7XG4gICAgICAgIHRoaXMuc2V0U3RvcmUoc3RvcmUpO1xuICAgICAgICByZXR1cm4gZXhlcmNpc2VMb2c7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgdGhlIHN0b3JlZCBleGVyY2lzZSBsb2dzXG4gICAgICogQHJldHVybnMge3t9fVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQoKVxuICAgIHtcbiAgICAgICAgdmFyIHN0b3JlID0gdGhpcy5nZXRTdG9yZSgpO1xuICAgICAgICByZXR1cm4gc3RvcmUuaXRlbXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgb2xkLXN0eWxlIHN0b3JlIHRvIG5ldyBzdHlsZVxuICAgICAqIEBwYXJhbSBsZWdhY3lTdG9yZVxuICAgICAqIEByZXR1cm5zIHt7fX1cbiAgICAgKi9cbiAgICBzdGF0aWMgdXBncmFkZUxlZ2FjeShsZWdhY3lTdG9yZSlcbiAgICB7XG4gICAgICAgIHZhciBzdG9yZSA9IHt9O1xuICAgICAgICBzdG9yZS5pdGVtcyA9IGxlZ2FjeVN0b3JlO1xuICAgICAgICBzdG9yZS5pbmNyZW1lbnRJZCA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBsYXN0SWQgPSBsZWdhY3lTdG9yZS5yZWR1Y2UoZnVuY3Rpb24gKGxhc3QsIGV4ZXJjaXNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KGxhc3QsIGV4ZXJjaXNlLmlkKTtcbiAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgcmV0dXJuIGxhc3RJZCArIDE7XG4gICAgICAgIH0pKCk7XG4gICAgICAgIHJldHVybiBzdG9yZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgcmVjb3JkcyB3aGVyZSBtYXRjaCBjcml0ZXJpYVxuICAgICAqIEBwYXJhbSBwcm9wZXJ0eVxuICAgICAqIEBwYXJhbSBvcGVyYXRvclxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqL1xuICAgIHN0YXRpYyB3aGVyZShwcm9wZXJ0eSwgb3BlcmF0b3IsIHZhbHVlKVxuICAgIHtcbiAgICAgICAgdmFyIHN0b3JlID0gdGhpcy5nZXRTdG9yZSgpO1xuICAgICAgICBzdG9yZS5pdGVtcyA9IHN0b3JlLml0ZW1zLmZpbHRlcihmdW5jdGlvbihleGVyY2lzZUxvZykge1xuICAgICAgICAgICAgdmFyIGZpZWxkID0gZXhlcmNpc2VMb2dbcHJvcGVydHldO1xuICAgICAgICAgICAgdmFyIGdyZWF0ZXJUaGFuID0gb3BlcmF0b3IgPT0gJz4nICYmIGZpZWxkID4gdmFsdWU7XG4gICAgICAgICAgICB2YXIgbGVzc1RoYW4gPSBvcGVyYXRvciA9PSAnPCcgJiYgZmllbGQgPCB2YWx1ZTtcbiAgICAgICAgICAgIHZhciBlcXVhbFRvID0gb3BlcmF0b3IgPT0gJz0nICYmIGZpZWxkID09IHZhbHVlO1xuICAgICAgICAgICAgcmV0dXJuIChncmVhdGVyVGhhbiB8fCBsZXNzVGhhbiB8fCBlcXVhbFRvKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdG9yZS5pdGVtcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHJlY29yZHMgYmFzZWQgb24gY3VzdG9tIHF1ZXJ5IG1ldGhvZFxuICAgICAqIEBwYXJhbSBxdWVyeU1ldGhvZFxuICAgICAqL1xuICAgIHN0YXRpYyBxdWVyeShxdWVyeU1ldGhvZClcbiAgICB7XG4gICAgICAgIHZhciBzdG9yZSA9IHRoaXMuZ2V0U3RvcmUoKTtcbiAgICAgICAgc3RvcmUuaXRlbXMgPSBzdG9yZS5pdGVtcy5maWx0ZXIocXVlcnlNZXRob2QpO1xuICAgICAgICByZXR1cm4gc3RvcmUuaXRlbXM7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIHtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHN0b3JlXG4gICAgICogQHJldHVybnMge3t9fVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRTdG9yZSgpXG4gICAge1xuICAgICAgICB2YXIgc3RvcmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuZ2V0S2V5KCkpKSB8fCB7IGluY3JlbWVudElkOiAxLCBpdGVtczogW10gfTtcbiAgICAgICAgaWYgKCFzdG9yZS5pdGVtcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBncmFkZUxlZ2FjeShzdG9yZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0b3JlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHN0b3JlXG4gICAgICovXG4gICAgc3RhdGljIHNldFN0b3JlKHN0b3JlKVxuICAgIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5nZXRLZXkoKSwgSlNPTi5zdHJpbmdpZnkoc3RvcmUpKTtcbiAgICB9XG59IiwiLypcbiAqIERhdGUgRm9ybWF0IDEuMi4zXG4gKiAoYykgMjAwNy0yMDA5IFN0ZXZlbiBMZXZpdGhhbiA8c3RldmVubGV2aXRoYW4uY29tPlxuICogTUlUIGxpY2Vuc2VcbiAqXG4gKiBJbmNsdWRlcyBlbmhhbmNlbWVudHMgYnkgU2NvdHQgVHJlbmRhIDxzY290dC50cmVuZGEubmV0PlxuICogYW5kIEtyaXMgS293YWwgPGNpeGFyLmNvbS9+a3Jpcy5rb3dhbC8+XG4gKlxuICogQWNjZXB0cyBhIGRhdGUsIGEgbWFzaywgb3IgYSBkYXRlIGFuZCBhIG1hc2suXG4gKiBSZXR1cm5zIGEgZm9ybWF0dGVkIHZlcnNpb24gb2YgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgZGF0ZSBkZWZhdWx0cyB0byB0aGUgY3VycmVudCBkYXRlL3RpbWUuXG4gKiBUaGUgbWFzayBkZWZhdWx0cyB0byBkYXRlRm9ybWF0Lm1hc2tzLmRlZmF1bHQuXG4gKi9cblxuKGZ1bmN0aW9uKGdsb2JhbCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGRhdGVGb3JtYXQgPSAoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgdG9rZW4gPSAvZHsxLDR9fG17MSw0fXx5eSg/Onl5KT98KFtIaE1zVHRdKVxcMT98W0xsb1NaV05dfCdbXiddKid8J1teJ10qJy9nO1xuICAgICAgdmFyIHRpbWV6b25lID0gL1xcYig/OltQTUNFQV1bU0RQXVR8KD86UGFjaWZpY3xNb3VudGFpbnxDZW50cmFsfEVhc3Rlcm58QXRsYW50aWMpICg/OlN0YW5kYXJkfERheWxpZ2h0fFByZXZhaWxpbmcpIFRpbWV8KD86R01UfFVUQykoPzpbLStdXFxkezR9KT8pXFxiL2c7XG4gICAgICB2YXIgdGltZXpvbmVDbGlwID0gL1teLStcXGRBLVpdL2c7XG4gIFxuICAgICAgLy8gUmVnZXhlcyBhbmQgc3VwcG9ydGluZyBmdW5jdGlvbnMgYXJlIGNhY2hlZCB0aHJvdWdoIGNsb3N1cmVcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZGF0ZSwgbWFzaywgdXRjLCBnbXQpIHtcbiAgXG4gICAgICAgIC8vIFlvdSBjYW4ndCBwcm92aWRlIHV0YyBpZiB5b3Ugc2tpcCBvdGhlciBhcmdzICh1c2UgdGhlICdVVEM6JyBtYXNrIHByZWZpeClcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYga2luZE9mKGRhdGUpID09PSAnc3RyaW5nJyAmJiAhL1xcZC8udGVzdChkYXRlKSkge1xuICAgICAgICAgIG1hc2sgPSBkYXRlO1xuICAgICAgICAgIGRhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGRhdGUgPSBkYXRlIHx8IG5ldyBEYXRlO1xuICBcbiAgICAgICAgaWYoIShkYXRlIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICAgICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIGlmIChpc05hTihkYXRlKSkge1xuICAgICAgICAgIHRocm93IFR5cGVFcnJvcignSW52YWxpZCBkYXRlJyk7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIG1hc2sgPSBTdHJpbmcoZGF0ZUZvcm1hdC5tYXNrc1ttYXNrXSB8fCBtYXNrIHx8IGRhdGVGb3JtYXQubWFza3NbJ2RlZmF1bHQnXSk7XG4gIFxuICAgICAgICAvLyBBbGxvdyBzZXR0aW5nIHRoZSB1dGMvZ210IGFyZ3VtZW50IHZpYSB0aGUgbWFza1xuICAgICAgICB2YXIgbWFza1NsaWNlID0gbWFzay5zbGljZSgwLCA0KTtcbiAgICAgICAgaWYgKG1hc2tTbGljZSA9PT0gJ1VUQzonIHx8IG1hc2tTbGljZSA9PT0gJ0dNVDonKSB7XG4gICAgICAgICAgbWFzayA9IG1hc2suc2xpY2UoNCk7XG4gICAgICAgICAgdXRjID0gdHJ1ZTtcbiAgICAgICAgICBpZiAobWFza1NsaWNlID09PSAnR01UOicpIHtcbiAgICAgICAgICAgIGdtdCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gIFxuICAgICAgICB2YXIgXyA9IHV0YyA/ICdnZXRVVEMnIDogJ2dldCc7XG4gICAgICAgIHZhciBkID0gZGF0ZVtfICsgJ0RhdGUnXSgpO1xuICAgICAgICB2YXIgRCA9IGRhdGVbXyArICdEYXknXSgpO1xuICAgICAgICB2YXIgbSA9IGRhdGVbXyArICdNb250aCddKCk7XG4gICAgICAgIHZhciB5ID0gZGF0ZVtfICsgJ0Z1bGxZZWFyJ10oKTtcbiAgICAgICAgdmFyIEggPSBkYXRlW18gKyAnSG91cnMnXSgpO1xuICAgICAgICB2YXIgTSA9IGRhdGVbXyArICdNaW51dGVzJ10oKTtcbiAgICAgICAgdmFyIHMgPSBkYXRlW18gKyAnU2Vjb25kcyddKCk7XG4gICAgICAgIHZhciBMID0gZGF0ZVtfICsgJ01pbGxpc2Vjb25kcyddKCk7XG4gICAgICAgIHZhciBvID0gdXRjID8gMCA6IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICAgICAgdmFyIFcgPSBnZXRXZWVrKGRhdGUpO1xuICAgICAgICB2YXIgTiA9IGdldERheU9mV2VlayhkYXRlKTtcbiAgICAgICAgdmFyIGZsYWdzID0ge1xuICAgICAgICAgIGQ6ICAgIGQsXG4gICAgICAgICAgZGQ6ICAgcGFkKGQpLFxuICAgICAgICAgIGRkZDogIGRhdGVGb3JtYXQuaTE4bi5kYXlOYW1lc1tEXSxcbiAgICAgICAgICBkZGRkOiBkYXRlRm9ybWF0LmkxOG4uZGF5TmFtZXNbRCArIDddLFxuICAgICAgICAgIG06ICAgIG0gKyAxLFxuICAgICAgICAgIG1tOiAgIHBhZChtICsgMSksXG4gICAgICAgICAgbW1tOiAgZGF0ZUZvcm1hdC5pMThuLm1vbnRoTmFtZXNbbV0sXG4gICAgICAgICAgbW1tbTogZGF0ZUZvcm1hdC5pMThuLm1vbnRoTmFtZXNbbSArIDEyXSxcbiAgICAgICAgICB5eTogICBTdHJpbmcoeSkuc2xpY2UoMiksXG4gICAgICAgICAgeXl5eTogeSxcbiAgICAgICAgICBoOiAgICBIICUgMTIgfHwgMTIsXG4gICAgICAgICAgaGg6ICAgcGFkKEggJSAxMiB8fCAxMiksXG4gICAgICAgICAgSDogICAgSCxcbiAgICAgICAgICBISDogICBwYWQoSCksXG4gICAgICAgICAgTTogICAgTSxcbiAgICAgICAgICBNTTogICBwYWQoTSksXG4gICAgICAgICAgczogICAgcyxcbiAgICAgICAgICBzczogICBwYWQocyksXG4gICAgICAgICAgbDogICAgcGFkKEwsIDMpLFxuICAgICAgICAgIEw6ICAgIHBhZChNYXRoLnJvdW5kKEwgLyAxMCkpLFxuICAgICAgICAgIHQ6ICAgIEggPCAxMiA/ICdhJyAgOiAncCcsXG4gICAgICAgICAgdHQ6ICAgSCA8IDEyID8gJ2FtJyA6ICdwbScsXG4gICAgICAgICAgVDogICAgSCA8IDEyID8gJ0EnICA6ICdQJyxcbiAgICAgICAgICBUVDogICBIIDwgMTIgPyAnQU0nIDogJ1BNJyxcbiAgICAgICAgICBaOiAgICBnbXQgPyAnR01UJyA6IHV0YyA/ICdVVEMnIDogKFN0cmluZyhkYXRlKS5tYXRjaCh0aW1lem9uZSkgfHwgWycnXSkucG9wKCkucmVwbGFjZSh0aW1lem9uZUNsaXAsICcnKSxcbiAgICAgICAgICBvOiAgICAobyA+IDAgPyAnLScgOiAnKycpICsgcGFkKE1hdGguZmxvb3IoTWF0aC5hYnMobykgLyA2MCkgKiAxMDAgKyBNYXRoLmFicyhvKSAlIDYwLCA0KSxcbiAgICAgICAgICBTOiAgICBbJ3RoJywgJ3N0JywgJ25kJywgJ3JkJ11bZCAlIDEwID4gMyA/IDAgOiAoZCAlIDEwMCAtIGQgJSAxMCAhPSAxMCkgKiBkICUgMTBdLFxuICAgICAgICAgIFc6ICAgIFcsXG4gICAgICAgICAgTjogICAgTlxuICAgICAgICB9O1xuICBcbiAgICAgICAgcmV0dXJuIG1hc2sucmVwbGFjZSh0b2tlbiwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgaWYgKG1hdGNoIGluIGZsYWdzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmxhZ3NbbWF0Y2hdO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbWF0Y2guc2xpY2UoMSwgbWF0Y2gubGVuZ3RoIC0gMSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9KSgpO1xuXG4gIGRhdGVGb3JtYXQubWFza3MgPSB7XG4gICAgJ2RlZmF1bHQnOiAgICAgICAgICAgICAgICdkZGQgbW1tIGRkIHl5eXkgSEg6TU06c3MnLFxuICAgICdzaG9ydERhdGUnOiAgICAgICAgICAgICAnbS9kL3l5JyxcbiAgICAnbWVkaXVtRGF0ZSc6ICAgICAgICAgICAgJ21tbSBkLCB5eXl5JyxcbiAgICAnbG9uZ0RhdGUnOiAgICAgICAgICAgICAgJ21tbW0gZCwgeXl5eScsXG4gICAgJ2Z1bGxEYXRlJzogICAgICAgICAgICAgICdkZGRkLCBtbW1tIGQsIHl5eXknLFxuICAgICdzaG9ydFRpbWUnOiAgICAgICAgICAgICAnaDpNTSBUVCcsXG4gICAgJ21lZGl1bVRpbWUnOiAgICAgICAgICAgICdoOk1NOnNzIFRUJyxcbiAgICAnbG9uZ1RpbWUnOiAgICAgICAgICAgICAgJ2g6TU06c3MgVFQgWicsXG4gICAgJ2lzb0RhdGUnOiAgICAgICAgICAgICAgICd5eXl5LW1tLWRkJyxcbiAgICAnaXNvVGltZSc6ICAgICAgICAgICAgICAgJ0hIOk1NOnNzJyxcbiAgICAnaXNvRGF0ZVRpbWUnOiAgICAgICAgICAgJ3l5eXktbW0tZGRcXCdUXFwnSEg6TU06c3NvJyxcbiAgICAnaXNvVXRjRGF0ZVRpbWUnOiAgICAgICAgJ1VUQzp5eXl5LW1tLWRkXFwnVFxcJ0hIOk1NOnNzXFwnWlxcJycsXG4gICAgJ2V4cGlyZXNIZWFkZXJGb3JtYXQnOiAgICdkZGQsIGRkIG1tbSB5eXl5IEhIOk1NOnNzIFonXG4gIH07XG5cbiAgLy8gSW50ZXJuYXRpb25hbGl6YXRpb24gc3RyaW5nc1xuICBkYXRlRm9ybWF0LmkxOG4gPSB7XG4gICAgZGF5TmFtZXM6IFtcbiAgICAgICdTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnLFxuICAgICAgJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J1xuICAgIF0sXG4gICAgbW9udGhOYW1lczogW1xuICAgICAgJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJyxcbiAgICAgICdKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ1xuICAgIF1cbiAgfTtcblxuZnVuY3Rpb24gcGFkKHZhbCwgbGVuKSB7XG4gIHZhbCA9IFN0cmluZyh2YWwpO1xuICBsZW4gPSBsZW4gfHwgMjtcbiAgd2hpbGUgKHZhbC5sZW5ndGggPCBsZW4pIHtcbiAgICB2YWwgPSAnMCcgKyB2YWw7XG4gIH1cbiAgcmV0dXJuIHZhbDtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIElTTyA4NjAxIHdlZWsgbnVtYmVyXG4gKiBCYXNlZCBvbiBjb21tZW50cyBmcm9tXG4gKiBodHRwOi8vdGVjaGJsb2cucHJvY3VyaW9zLm5sL2svbjYxOC9uZXdzL3ZpZXcvMzM3OTYvMTQ4NjMvQ2FsY3VsYXRlLUlTTy04NjAxLXdlZWstYW5kLXllYXItaW4tamF2YXNjcmlwdC5odG1sXG4gKlxuICogQHBhcmFtICB7T2JqZWN0fSBgZGF0ZWBcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0V2VlayhkYXRlKSB7XG4gIC8vIFJlbW92ZSB0aW1lIGNvbXBvbmVudHMgb2YgZGF0ZVxuICB2YXIgdGFyZ2V0VGh1cnNkYXkgPSBuZXcgRGF0ZShkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCkpO1xuXG4gIC8vIENoYW5nZSBkYXRlIHRvIFRodXJzZGF5IHNhbWUgd2Vla1xuICB0YXJnZXRUaHVyc2RheS5zZXREYXRlKHRhcmdldFRodXJzZGF5LmdldERhdGUoKSAtICgodGFyZ2V0VGh1cnNkYXkuZ2V0RGF5KCkgKyA2KSAlIDcpICsgMyk7XG5cbiAgLy8gVGFrZSBKYW51YXJ5IDR0aCBhcyBpdCBpcyBhbHdheXMgaW4gd2VlayAxIChzZWUgSVNPIDg2MDEpXG4gIHZhciBmaXJzdFRodXJzZGF5ID0gbmV3IERhdGUodGFyZ2V0VGh1cnNkYXkuZ2V0RnVsbFllYXIoKSwgMCwgNCk7XG5cbiAgLy8gQ2hhbmdlIGRhdGUgdG8gVGh1cnNkYXkgc2FtZSB3ZWVrXG4gIGZpcnN0VGh1cnNkYXkuc2V0RGF0ZShmaXJzdFRodXJzZGF5LmdldERhdGUoKSAtICgoZmlyc3RUaHVyc2RheS5nZXREYXkoKSArIDYpICUgNykgKyAzKTtcblxuICAvLyBDaGVjayBpZiBkYXlsaWdodC1zYXZpbmctdGltZS1zd2l0Y2ggb2NjdXJlZCBhbmQgY29ycmVjdCBmb3IgaXRcbiAgdmFyIGRzID0gdGFyZ2V0VGh1cnNkYXkuZ2V0VGltZXpvbmVPZmZzZXQoKSAtIGZpcnN0VGh1cnNkYXkuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgdGFyZ2V0VGh1cnNkYXkuc2V0SG91cnModGFyZ2V0VGh1cnNkYXkuZ2V0SG91cnMoKSAtIGRzKTtcblxuICAvLyBOdW1iZXIgb2Ygd2Vla3MgYmV0d2VlbiB0YXJnZXQgVGh1cnNkYXkgYW5kIGZpcnN0IFRodXJzZGF5XG4gIHZhciB3ZWVrRGlmZiA9ICh0YXJnZXRUaHVyc2RheSAtIGZpcnN0VGh1cnNkYXkpIC8gKDg2NDAwMDAwKjcpO1xuICByZXR1cm4gMSArIE1hdGguZmxvb3Iod2Vla0RpZmYpO1xufVxuXG4vKipcbiAqIEdldCBJU08tODYwMSBudW1lcmljIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBkYXkgb2YgdGhlIHdlZWtcbiAqIDEgKGZvciBNb25kYXkpIHRocm91Z2ggNyAoZm9yIFN1bmRheSlcbiAqIFxuICogQHBhcmFtICB7T2JqZWN0fSBgZGF0ZWBcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0RGF5T2ZXZWVrKGRhdGUpIHtcbiAgdmFyIGRvdyA9IGRhdGUuZ2V0RGF5KCk7XG4gIGlmKGRvdyA9PT0gMCkge1xuICAgIGRvdyA9IDc7XG4gIH1cbiAgcmV0dXJuIGRvdztcbn1cblxuLyoqXG4gKiBraW5kLW9mIHNob3J0Y3V0XG4gKiBAcGFyYW0gIHsqfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24ga2luZE9mKHZhbCkge1xuICBpZiAodmFsID09PSBudWxsKSB7XG4gICAgcmV0dXJuICdudWxsJztcbiAgfVxuXG4gIGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAndW5kZWZpbmVkJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiB0eXBlb2YgdmFsO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiAnYXJyYXknO1xuICB9XG5cbiAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwodmFsKVxuICAgIC5zbGljZSg4LCAtMSkudG9Mb3dlckNhc2UoKTtcbn07XG5cblxuXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoZGF0ZUZvcm1hdCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBkYXRlRm9ybWF0O1xuICB9IGVsc2Uge1xuICAgIGdsb2JhbC5kYXRlRm9ybWF0ID0gZGF0ZUZvcm1hdDtcbiAgfVxufSkodGhpcyk7XG4iLCI7KGZ1bmN0aW9uKCkge1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKipcbiAqIEEgY29tcG9uZW50IGhhbmRsZXIgaW50ZXJmYWNlIHVzaW5nIHRoZSByZXZlYWxpbmcgbW9kdWxlIGRlc2lnbiBwYXR0ZXJuLlxuICogTW9yZSBkZXRhaWxzIG9uIHRoaXMgZGVzaWduIHBhdHRlcm4gaGVyZTpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAqXG4gKiBAYXV0aG9yIEphc29uIE1heWVzLlxuICovXG4vKiBleHBvcnRlZCBjb21wb25lbnRIYW5kbGVyICovXG5cbi8vIFByZS1kZWZpbmluZyB0aGUgY29tcG9uZW50SGFuZGxlciBpbnRlcmZhY2UsIGZvciBjbG9zdXJlIGRvY3VtZW50YXRpb24gYW5kXG4vLyBzdGF0aWMgdmVyaWZpY2F0aW9uLlxudmFyIGNvbXBvbmVudEhhbmRsZXIgPSB7XG4gIC8qKlxuICAgKiBTZWFyY2hlcyBleGlzdGluZyBET00gZm9yIGVsZW1lbnRzIG9mIG91ciBjb21wb25lbnQgdHlwZSBhbmQgdXBncmFkZXMgdGhlbVxuICAgKiBpZiB0aGV5IGhhdmUgbm90IGFscmVhZHkgYmVlbiB1cGdyYWRlZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRKc0NsYXNzIHRoZSBwcm9ncmFtYXRpYyBuYW1lIG9mIHRoZSBlbGVtZW50IGNsYXNzIHdlXG4gICAqIG5lZWQgdG8gY3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mLlxuICAgKiBAcGFyYW0ge3N0cmluZz19IG9wdENzc0NsYXNzIHRoZSBuYW1lIG9mIHRoZSBDU1MgY2xhc3MgZWxlbWVudHMgb2YgdGhpc1xuICAgKiB0eXBlIHdpbGwgaGF2ZS5cbiAgICovXG4gIHVwZ3JhZGVEb206IGZ1bmN0aW9uKG9wdEpzQ2xhc3MsIG9wdENzc0NsYXNzKSB7fSxcbiAgLyoqXG4gICAqIFVwZ3JhZGVzIGEgc3BlY2lmaWMgZWxlbWVudCByYXRoZXIgdGhhbiBhbGwgaW4gdGhlIERPTS5cbiAgICpcbiAgICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB3ZSB3aXNoIHRvIHVwZ3JhZGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0SnNDbGFzcyBPcHRpb25hbCBuYW1lIG9mIHRoZSBjbGFzcyB3ZSB3YW50IHRvIHVwZ3JhZGVcbiAgICogdGhlIGVsZW1lbnQgdG8uXG4gICAqL1xuICB1cGdyYWRlRWxlbWVudDogZnVuY3Rpb24oZWxlbWVudCwgb3B0SnNDbGFzcykge30sXG4gIC8qKlxuICAgKiBVcGdyYWRlcyBhIHNwZWNpZmljIGxpc3Qgb2YgZWxlbWVudHMgcmF0aGVyIHRoYW4gYWxsIGluIHRoZSBET00uXG4gICAqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR8IUFycmF5PCFFbGVtZW50PnwhTm9kZUxpc3R8IUhUTUxDb2xsZWN0aW9ufSBlbGVtZW50c1xuICAgKiBUaGUgZWxlbWVudHMgd2Ugd2lzaCB0byB1cGdyYWRlLlxuICAgKi9cbiAgdXBncmFkZUVsZW1lbnRzOiBmdW5jdGlvbihlbGVtZW50cykge30sXG4gIC8qKlxuICAgKiBVcGdyYWRlcyBhbGwgcmVnaXN0ZXJlZCBjb21wb25lbnRzIGZvdW5kIGluIHRoZSBjdXJyZW50IERPTS4gVGhpcyBpc1xuICAgKiBhdXRvbWF0aWNhbGx5IGNhbGxlZCBvbiB3aW5kb3cgbG9hZC5cbiAgICovXG4gIHVwZ3JhZGVBbGxSZWdpc3RlcmVkOiBmdW5jdGlvbigpIHt9LFxuICAvKipcbiAgICogQWxsb3dzIHVzZXIgdG8gYmUgYWxlcnRlZCB0byBhbnkgdXBncmFkZXMgdGhhdCBhcmUgcGVyZm9ybWVkIGZvciBhIGdpdmVuXG4gICAqIGNvbXBvbmVudCB0eXBlXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBqc0NsYXNzIFRoZSBjbGFzcyBuYW1lIG9mIHRoZSBNREwgY29tcG9uZW50IHdlIHdpc2hcbiAgICogdG8gaG9vayBpbnRvIGZvciBhbnkgdXBncmFkZXMgcGVyZm9ybWVkLlxuICAgKiBAcGFyYW0ge2Z1bmN0aW9uKCFIVE1MRWxlbWVudCl9IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0byBjYWxsIHVwb24gYW5cbiAgICogdXBncmFkZS4gVGhpcyBmdW5jdGlvbiBzaG91bGQgZXhwZWN0IDEgcGFyYW1ldGVyIC0gdGhlIEhUTUxFbGVtZW50IHdoaWNoXG4gICAqIGdvdCB1cGdyYWRlZC5cbiAgICovXG4gIHJlZ2lzdGVyVXBncmFkZWRDYWxsYmFjazogZnVuY3Rpb24oanNDbGFzcywgY2FsbGJhY2spIHt9LFxuICAvKipcbiAgICogUmVnaXN0ZXJzIGEgY2xhc3MgZm9yIGZ1dHVyZSB1c2UgYW5kIGF0dGVtcHRzIHRvIHVwZ3JhZGUgZXhpc3RpbmcgRE9NLlxuICAgKlxuICAgKiBAcGFyYW0ge2NvbXBvbmVudEhhbmRsZXIuQ29tcG9uZW50Q29uZmlnUHVibGljfSBjb25maWcgdGhlIHJlZ2lzdHJhdGlvbiBjb25maWd1cmF0aW9uXG4gICAqL1xuICByZWdpc3RlcjogZnVuY3Rpb24oY29uZmlnKSB7fSxcbiAgLyoqXG4gICAqIERvd25ncmFkZSBlaXRoZXIgYSBnaXZlbiBub2RlLCBhbiBhcnJheSBvZiBub2Rlcywgb3IgYSBOb2RlTGlzdC5cbiAgICpcbiAgICogQHBhcmFtIHshTm9kZXwhQXJyYXk8IU5vZGU+fCFOb2RlTGlzdH0gbm9kZXNcbiAgICovXG4gIGRvd25ncmFkZUVsZW1lbnRzOiBmdW5jdGlvbihub2Rlcykge31cbn07XG5cbmNvbXBvbmVudEhhbmRsZXIgPSAoZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKiogQHR5cGUgeyFBcnJheTxjb21wb25lbnRIYW5kbGVyLkNvbXBvbmVudENvbmZpZz59ICovXG4gIHZhciByZWdpc3RlcmVkQ29tcG9uZW50c18gPSBbXTtcblxuICAvKiogQHR5cGUgeyFBcnJheTxjb21wb25lbnRIYW5kbGVyLkNvbXBvbmVudD59ICovXG4gIHZhciBjcmVhdGVkQ29tcG9uZW50c18gPSBbXTtcblxuICB2YXIgZG93bmdyYWRlTWV0aG9kXyA9ICdtZGxEb3duZ3JhZGVfJztcbiAgdmFyIGNvbXBvbmVudENvbmZpZ1Byb3BlcnR5XyA9ICdtZGxDb21wb25lbnRDb25maWdJbnRlcm5hbF8nO1xuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyByZWdpc3RlcmVkIGNvbXBvbmVudHMgZm9yIGEgY2xhc3Mgd2UgYXJlIGludGVyZXN0ZWQgaW4gdXNpbmcuXG4gICAqIE9wdGlvbmFsbHkgcmVwbGFjZXMgYSBtYXRjaCB3aXRoIHBhc3NlZCBvYmplY3QgaWYgc3BlY2lmaWVkLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiBhIGNsYXNzIHdlIHdhbnQgdG8gdXNlLlxuICAgKiBAcGFyYW0ge2NvbXBvbmVudEhhbmRsZXIuQ29tcG9uZW50Q29uZmlnPX0gb3B0UmVwbGFjZSBPcHRpb25hbCBvYmplY3QgdG8gcmVwbGFjZSBtYXRjaCB3aXRoLlxuICAgKiBAcmV0dXJuIHshT2JqZWN0fGJvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBmaW5kUmVnaXN0ZXJlZENsYXNzXyhuYW1lLCBvcHRSZXBsYWNlKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RlcmVkQ29tcG9uZW50c18ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChyZWdpc3RlcmVkQ29tcG9uZW50c19baV0uY2xhc3NOYW1lID09PSBuYW1lKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0UmVwbGFjZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICByZWdpc3RlcmVkQ29tcG9uZW50c19baV0gPSBvcHRSZXBsYWNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWdpc3RlcmVkQ29tcG9uZW50c19baV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBjbGFzc05hbWVzIG9mIHRoZSB1cGdyYWRlZCBjbGFzc2VzIG9uIHRoZSBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIGZldGNoIGRhdGEgZnJvbS5cbiAgICogQHJldHVybiB7IUFycmF5PHN0cmluZz59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBnZXRVcGdyYWRlZExpc3RPZkVsZW1lbnRfKGVsZW1lbnQpIHtcbiAgICB2YXIgZGF0YVVwZ3JhZGVkID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXBncmFkZWQnKTtcbiAgICAvLyBVc2UgYFsnJ11gIGFzIGRlZmF1bHQgdmFsdWUgdG8gY29uZm9ybSB0aGUgYCxuYW1lLG5hbWUuLi5gIHN0eWxlLlxuICAgIHJldHVybiBkYXRhVXBncmFkZWQgPT09IG51bGwgPyBbJyddIDogZGF0YVVwZ3JhZGVkLnNwbGl0KCcsJyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBlbGVtZW50IGhhcyBhbHJlYWR5IGJlZW4gdXBncmFkZWQgZm9yIHRoZSBnaXZlblxuICAgKiBjbGFzcy5cbiAgICpcbiAgICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB3ZSB3YW50IHRvIGNoZWNrLlxuICAgKiBAcGFyYW0ge3N0cmluZ30ganNDbGFzcyBUaGUgY2xhc3MgdG8gY2hlY2sgZm9yLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bmN0aW9uIGlzRWxlbWVudFVwZ3JhZGVkXyhlbGVtZW50LCBqc0NsYXNzKSB7XG4gICAgdmFyIHVwZ3JhZGVkTGlzdCA9IGdldFVwZ3JhZGVkTGlzdE9mRWxlbWVudF8oZWxlbWVudCk7XG4gICAgcmV0dXJuIHVwZ3JhZGVkTGlzdC5pbmRleE9mKGpzQ2xhc3MpICE9PSAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyBleGlzdGluZyBET00gZm9yIGVsZW1lbnRzIG9mIG91ciBjb21wb25lbnQgdHlwZSBhbmQgdXBncmFkZXMgdGhlbVxuICAgKiBpZiB0aGV5IGhhdmUgbm90IGFscmVhZHkgYmVlbiB1cGdyYWRlZC5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmc9fSBvcHRKc0NsYXNzIHRoZSBwcm9ncmFtYXRpYyBuYW1lIG9mIHRoZSBlbGVtZW50IGNsYXNzIHdlXG4gICAqIG5lZWQgdG8gY3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mLlxuICAgKiBAcGFyYW0ge3N0cmluZz19IG9wdENzc0NsYXNzIHRoZSBuYW1lIG9mIHRoZSBDU1MgY2xhc3MgZWxlbWVudHMgb2YgdGhpc1xuICAgKiB0eXBlIHdpbGwgaGF2ZS5cbiAgICovXG4gIGZ1bmN0aW9uIHVwZ3JhZGVEb21JbnRlcm5hbChvcHRKc0NsYXNzLCBvcHRDc3NDbGFzcykge1xuICAgIGlmICh0eXBlb2Ygb3B0SnNDbGFzcyA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgdHlwZW9mIG9wdENzc0NsYXNzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RlcmVkQ29tcG9uZW50c18ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdXBncmFkZURvbUludGVybmFsKHJlZ2lzdGVyZWRDb21wb25lbnRzX1tpXS5jbGFzc05hbWUsXG4gICAgICAgICAgICByZWdpc3RlcmVkQ29tcG9uZW50c19baV0uY3NzQ2xhc3MpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIganNDbGFzcyA9IC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAob3B0SnNDbGFzcyk7XG4gICAgICBpZiAodHlwZW9mIG9wdENzc0NsYXNzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgcmVnaXN0ZXJlZENsYXNzID0gZmluZFJlZ2lzdGVyZWRDbGFzc18oanNDbGFzcyk7XG4gICAgICAgIGlmIChyZWdpc3RlcmVkQ2xhc3MpIHtcbiAgICAgICAgICBvcHRDc3NDbGFzcyA9IHJlZ2lzdGVyZWRDbGFzcy5jc3NDbGFzcztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIG9wdENzc0NsYXNzKTtcbiAgICAgIGZvciAodmFyIG4gPSAwOyBuIDwgZWxlbWVudHMubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgdXBncmFkZUVsZW1lbnRJbnRlcm5hbChlbGVtZW50c1tuXSwganNDbGFzcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZ3JhZGVzIGEgc3BlY2lmaWMgZWxlbWVudCByYXRoZXIgdGhhbiBhbGwgaW4gdGhlIERPTS5cbiAgICpcbiAgICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB3ZSB3aXNoIHRvIHVwZ3JhZGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gb3B0SnNDbGFzcyBPcHRpb25hbCBuYW1lIG9mIHRoZSBjbGFzcyB3ZSB3YW50IHRvIHVwZ3JhZGVcbiAgICogdGhlIGVsZW1lbnQgdG8uXG4gICAqL1xuICBmdW5jdGlvbiB1cGdyYWRlRWxlbWVudEludGVybmFsKGVsZW1lbnQsIG9wdEpzQ2xhc3MpIHtcbiAgICAvLyBWZXJpZnkgYXJndW1lbnQgdHlwZS5cbiAgICBpZiAoISh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcgJiYgZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQgcHJvdmlkZWQgdG8gdXBncmFkZSBNREwgZWxlbWVudC4nKTtcbiAgICB9XG4gICAgdmFyIHVwZ3JhZGVkTGlzdCA9IGdldFVwZ3JhZGVkTGlzdE9mRWxlbWVudF8oZWxlbWVudCk7XG4gICAgdmFyIGNsYXNzZXNUb1VwZ3JhZGUgPSBbXTtcbiAgICAvLyBJZiBqc0NsYXNzIGlzIG5vdCBwcm92aWRlZCBzY2FuIHRoZSByZWdpc3RlcmVkIGNvbXBvbmVudHMgdG8gZmluZCB0aGVcbiAgICAvLyBvbmVzIG1hdGNoaW5nIHRoZSBlbGVtZW50J3MgQ1NTIGNsYXNzTGlzdC5cbiAgICBpZiAoIW9wdEpzQ2xhc3MpIHtcbiAgICAgIHZhciBjbGFzc0xpc3QgPSBlbGVtZW50LmNsYXNzTGlzdDtcbiAgICAgIHJlZ2lzdGVyZWRDb21wb25lbnRzXy5mb3JFYWNoKGZ1bmN0aW9uKGNvbXBvbmVudCkge1xuICAgICAgICAvLyBNYXRjaCBDU1MgJiBOb3QgdG8gYmUgdXBncmFkZWQgJiBOb3QgdXBncmFkZWQuXG4gICAgICAgIGlmIChjbGFzc0xpc3QuY29udGFpbnMoY29tcG9uZW50LmNzc0NsYXNzKSAmJlxuICAgICAgICAgICAgY2xhc3Nlc1RvVXBncmFkZS5pbmRleE9mKGNvbXBvbmVudCkgPT09IC0xICYmXG4gICAgICAgICAgICAhaXNFbGVtZW50VXBncmFkZWRfKGVsZW1lbnQsIGNvbXBvbmVudC5jbGFzc05hbWUpKSB7XG4gICAgICAgICAgY2xhc3Nlc1RvVXBncmFkZS5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIWlzRWxlbWVudFVwZ3JhZGVkXyhlbGVtZW50LCBvcHRKc0NsYXNzKSkge1xuICAgICAgY2xhc3Nlc1RvVXBncmFkZS5wdXNoKGZpbmRSZWdpc3RlcmVkQ2xhc3NfKG9wdEpzQ2xhc3MpKTtcbiAgICB9XG5cbiAgICAvLyBVcGdyYWRlIHRoZSBlbGVtZW50IGZvciBlYWNoIGNsYXNzZXMuXG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSBjbGFzc2VzVG9VcGdyYWRlLmxlbmd0aCwgcmVnaXN0ZXJlZENsYXNzOyBpIDwgbjsgaSsrKSB7XG4gICAgICByZWdpc3RlcmVkQ2xhc3MgPSBjbGFzc2VzVG9VcGdyYWRlW2ldO1xuICAgICAgaWYgKHJlZ2lzdGVyZWRDbGFzcykge1xuICAgICAgICAvLyBNYXJrIGVsZW1lbnQgYXMgdXBncmFkZWQuXG4gICAgICAgIHVwZ3JhZGVkTGlzdC5wdXNoKHJlZ2lzdGVyZWRDbGFzcy5jbGFzc05hbWUpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS11cGdyYWRlZCcsIHVwZ3JhZGVkTGlzdC5qb2luKCcsJykpO1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgcmVnaXN0ZXJlZENsYXNzLmNsYXNzQ29uc3RydWN0b3IoZWxlbWVudCk7XG4gICAgICAgIGluc3RhbmNlW2NvbXBvbmVudENvbmZpZ1Byb3BlcnR5X10gPSByZWdpc3RlcmVkQ2xhc3M7XG4gICAgICAgIGNyZWF0ZWRDb21wb25lbnRzXy5wdXNoKGluc3RhbmNlKTtcbiAgICAgICAgLy8gQ2FsbCBhbnkgY2FsbGJhY2tzIHRoZSB1c2VyIGhhcyByZWdpc3RlcmVkIHdpdGggdGhpcyBjb21wb25lbnQgdHlwZS5cbiAgICAgICAgZm9yICh2YXIgaiA9IDAsIG0gPSByZWdpc3RlcmVkQ2xhc3MuY2FsbGJhY2tzLmxlbmd0aDsgaiA8IG07IGorKykge1xuICAgICAgICAgIHJlZ2lzdGVyZWRDbGFzcy5jYWxsYmFja3Nbal0oZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVnaXN0ZXJlZENsYXNzLndpZGdldCkge1xuICAgICAgICAgIC8vIEFzc2lnbiBwZXIgZWxlbWVudCBpbnN0YW5jZSBmb3IgY29udHJvbCBvdmVyIEFQSVxuICAgICAgICAgIGVsZW1lbnRbcmVnaXN0ZXJlZENsYXNzLmNsYXNzTmFtZV0gPSBpbnN0YW5jZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdVbmFibGUgdG8gZmluZCBhIHJlZ2lzdGVyZWQgY29tcG9uZW50IGZvciB0aGUgZ2l2ZW4gY2xhc3MuJyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBldiA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudHMnKTtcbiAgICAgIGV2LmluaXRFdmVudCgnbWRsLWNvbXBvbmVudHVwZ3JhZGVkJywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXYpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGdyYWRlcyBhIHNwZWNpZmljIGxpc3Qgb2YgZWxlbWVudHMgcmF0aGVyIHRoYW4gYWxsIGluIHRoZSBET00uXG4gICAqXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR8IUFycmF5PCFFbGVtZW50PnwhTm9kZUxpc3R8IUhUTUxDb2xsZWN0aW9ufSBlbGVtZW50c1xuICAgKiBUaGUgZWxlbWVudHMgd2Ugd2lzaCB0byB1cGdyYWRlLlxuICAgKi9cbiAgZnVuY3Rpb24gdXBncmFkZUVsZW1lbnRzSW50ZXJuYWwoZWxlbWVudHMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZWxlbWVudHMpKSB7XG4gICAgICBpZiAodHlwZW9mIGVsZW1lbnRzLml0ZW0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCgvKiogQHR5cGUge0FycmF5fSAqLyAoZWxlbWVudHMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnRzID0gW2VsZW1lbnRzXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDAsIG4gPSBlbGVtZW50cy5sZW5ndGgsIGVsZW1lbnQ7IGkgPCBuOyBpKyspIHtcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgdXBncmFkZUVsZW1lbnRJbnRlcm5hbChlbGVtZW50KTtcbiAgICAgICAgaWYgKGVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHVwZ3JhZGVFbGVtZW50c0ludGVybmFsKGVsZW1lbnQuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhIGNsYXNzIGZvciBmdXR1cmUgdXNlIGFuZCBhdHRlbXB0cyB0byB1cGdyYWRlIGV4aXN0aW5nIERPTS5cbiAgICpcbiAgICogQHBhcmFtIHtjb21wb25lbnRIYW5kbGVyLkNvbXBvbmVudENvbmZpZ1B1YmxpY30gY29uZmlnXG4gICAqL1xuICBmdW5jdGlvbiByZWdpc3RlckludGVybmFsKGNvbmZpZykge1xuICAgIC8vIEluIG9yZGVyIHRvIHN1cHBvcnQgYm90aCBDbG9zdXJlLWNvbXBpbGVkIGFuZCB1bmNvbXBpbGVkIGNvZGUgYWNjZXNzaW5nXG4gICAgLy8gdGhpcyBtZXRob2QsIHdlIG5lZWQgdG8gYWxsb3cgZm9yIGJvdGggdGhlIGRvdCBhbmQgYXJyYXkgc3ludGF4IGZvclxuICAgIC8vIHByb3BlcnR5IGFjY2Vzcy4gWW91J2xsIHRoZXJlZm9yZSBzZWUgdGhlIGBmb28uYmFyIHx8IGZvb1snYmFyJ11gXG4gICAgLy8gcGF0dGVybiByZXBlYXRlZCBhY3Jvc3MgdGhpcyBtZXRob2QuXG4gICAgdmFyIHdpZGdldE1pc3NpbmcgPSAodHlwZW9mIGNvbmZpZy53aWRnZXQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHR5cGVvZiBjb25maWdbJ3dpZGdldCddID09PSAndW5kZWZpbmVkJyk7XG4gICAgdmFyIHdpZGdldCA9IHRydWU7XG5cbiAgICBpZiAoIXdpZGdldE1pc3NpbmcpIHtcbiAgICAgIHdpZGdldCA9IGNvbmZpZy53aWRnZXQgfHwgY29uZmlnWyd3aWRnZXQnXTtcbiAgICB9XG5cbiAgICB2YXIgbmV3Q29uZmlnID0gLyoqIEB0eXBlIHtjb21wb25lbnRIYW5kbGVyLkNvbXBvbmVudENvbmZpZ30gKi8gKHtcbiAgICAgIGNsYXNzQ29uc3RydWN0b3I6IGNvbmZpZy5jb25zdHJ1Y3RvciB8fCBjb25maWdbJ2NvbnN0cnVjdG9yJ10sXG4gICAgICBjbGFzc05hbWU6IGNvbmZpZy5jbGFzc0FzU3RyaW5nIHx8IGNvbmZpZ1snY2xhc3NBc1N0cmluZyddLFxuICAgICAgY3NzQ2xhc3M6IGNvbmZpZy5jc3NDbGFzcyB8fCBjb25maWdbJ2Nzc0NsYXNzJ10sXG4gICAgICB3aWRnZXQ6IHdpZGdldCxcbiAgICAgIGNhbGxiYWNrczogW11cbiAgICB9KTtcblxuICAgIHJlZ2lzdGVyZWRDb21wb25lbnRzXy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIGlmIChpdGVtLmNzc0NsYXNzID09PSBuZXdDb25maWcuY3NzQ2xhc3MpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcHJvdmlkZWQgY3NzQ2xhc3MgaGFzIGFscmVhZHkgYmVlbiByZWdpc3RlcmVkOiAnICsgaXRlbS5jc3NDbGFzcyk7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbS5jbGFzc05hbWUgPT09IG5ld0NvbmZpZy5jbGFzc05hbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgcHJvdmlkZWQgY2xhc3NOYW1lIGhhcyBhbHJlYWR5IGJlZW4gcmVnaXN0ZXJlZCcpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGNvbmZpZy5jb25zdHJ1Y3Rvci5wcm90b3R5cGVcbiAgICAgICAgLmhhc093blByb3BlcnR5KGNvbXBvbmVudENvbmZpZ1Byb3BlcnR5XykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnTURMIGNvbXBvbmVudCBjbGFzc2VzIG11c3Qgbm90IGhhdmUgJyArIGNvbXBvbmVudENvbmZpZ1Byb3BlcnR5XyArXG4gICAgICAgICAgJyBkZWZpbmVkIGFzIGEgcHJvcGVydHkuJyk7XG4gICAgfVxuXG4gICAgdmFyIGZvdW5kID0gZmluZFJlZ2lzdGVyZWRDbGFzc18oY29uZmlnLmNsYXNzQXNTdHJpbmcsIG5ld0NvbmZpZyk7XG5cbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICByZWdpc3RlcmVkQ29tcG9uZW50c18ucHVzaChuZXdDb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBbGxvd3MgdXNlciB0byBiZSBhbGVydGVkIHRvIGFueSB1cGdyYWRlcyB0aGF0IGFyZSBwZXJmb3JtZWQgZm9yIGEgZ2l2ZW5cbiAgICogY29tcG9uZW50IHR5cGVcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGpzQ2xhc3MgVGhlIGNsYXNzIG5hbWUgb2YgdGhlIE1ETCBjb21wb25lbnQgd2Ugd2lzaFxuICAgKiB0byBob29rIGludG8gZm9yIGFueSB1cGdyYWRlcyBwZXJmb3JtZWQuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb24oIUhUTUxFbGVtZW50KX0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGNhbGwgdXBvbiBhblxuICAgKiB1cGdyYWRlLiBUaGlzIGZ1bmN0aW9uIHNob3VsZCBleHBlY3QgMSBwYXJhbWV0ZXIgLSB0aGUgSFRNTEVsZW1lbnQgd2hpY2hcbiAgICogZ290IHVwZ3JhZGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gcmVnaXN0ZXJVcGdyYWRlZENhbGxiYWNrSW50ZXJuYWwoanNDbGFzcywgY2FsbGJhY2spIHtcbiAgICB2YXIgcmVnQ2xhc3MgPSBmaW5kUmVnaXN0ZXJlZENsYXNzXyhqc0NsYXNzKTtcbiAgICBpZiAocmVnQ2xhc3MpIHtcbiAgICAgIHJlZ0NsYXNzLmNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBncmFkZXMgYWxsIHJlZ2lzdGVyZWQgY29tcG9uZW50cyBmb3VuZCBpbiB0aGUgY3VycmVudCBET00uIFRoaXMgaXNcbiAgICogYXV0b21hdGljYWxseSBjYWxsZWQgb24gd2luZG93IGxvYWQuXG4gICAqL1xuICBmdW5jdGlvbiB1cGdyYWRlQWxsUmVnaXN0ZXJlZEludGVybmFsKCkge1xuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgcmVnaXN0ZXJlZENvbXBvbmVudHNfLmxlbmd0aDsgbisrKSB7XG4gICAgICB1cGdyYWRlRG9tSW50ZXJuYWwocmVnaXN0ZXJlZENvbXBvbmVudHNfW25dLmNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpbmRzIGEgY3JlYXRlZCBjb21wb25lbnQgYnkgYSBnaXZlbiBET00gbm9kZS5cbiAgICpcbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKiBAcmV0dXJuIHsqfVxuICAgKi9cbiAgZnVuY3Rpb24gZmluZENyZWF0ZWRDb21wb25lbnRCeU5vZGVJbnRlcm5hbChub2RlKSB7XG4gICAgZm9yICh2YXIgbiA9IDA7IG4gPCBjcmVhdGVkQ29tcG9uZW50c18ubGVuZ3RoOyBuKyspIHtcbiAgICAgIHZhciBjb21wb25lbnQgPSBjcmVhdGVkQ29tcG9uZW50c19bbl07XG4gICAgICBpZiAoY29tcG9uZW50LmVsZW1lbnRfID09PSBub2RlKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHRoZSBjb21wb25lbnQgZm9yIHRoZSBkb3duZ3JhZGUgbWV0aG9kLlxuICAgKiBFeGVjdXRlIGlmIGZvdW5kLlxuICAgKiBSZW1vdmUgY29tcG9uZW50IGZyb20gY3JlYXRlZENvbXBvbmVudHMgbGlzdC5cbiAgICpcbiAgICogQHBhcmFtIHsqfSBjb21wb25lbnRcbiAgICovXG4gIGZ1bmN0aW9uIGRlY29uc3RydWN0Q29tcG9uZW50SW50ZXJuYWwoY29tcG9uZW50KSB7XG4gICAgaWYgKGNvbXBvbmVudCAmJlxuICAgICAgICBjb21wb25lbnRbY29tcG9uZW50Q29uZmlnUHJvcGVydHlfXVxuICAgICAgICAgIC5jbGFzc0NvbnN0cnVjdG9yLnByb3RvdHlwZVxuICAgICAgICAgIC5oYXNPd25Qcm9wZXJ0eShkb3duZ3JhZGVNZXRob2RfKSkge1xuICAgICAgY29tcG9uZW50W2Rvd25ncmFkZU1ldGhvZF9dKCk7XG4gICAgICB2YXIgY29tcG9uZW50SW5kZXggPSBjcmVhdGVkQ29tcG9uZW50c18uaW5kZXhPZihjb21wb25lbnQpO1xuICAgICAgY3JlYXRlZENvbXBvbmVudHNfLnNwbGljZShjb21wb25lbnRJbmRleCwgMSk7XG5cbiAgICAgIHZhciB1cGdyYWRlcyA9IGNvbXBvbmVudC5lbGVtZW50Xy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXBncmFkZWQnKS5zcGxpdCgnLCcpO1xuICAgICAgdmFyIGNvbXBvbmVudFBsYWNlID0gdXBncmFkZXMuaW5kZXhPZihcbiAgICAgICAgICBjb21wb25lbnRbY29tcG9uZW50Q29uZmlnUHJvcGVydHlfXS5jbGFzc0FzU3RyaW5nKTtcbiAgICAgIHVwZ3JhZGVzLnNwbGljZShjb21wb25lbnRQbGFjZSwgMSk7XG4gICAgICBjb21wb25lbnQuZWxlbWVudF8uc2V0QXR0cmlidXRlKCdkYXRhLXVwZ3JhZGVkJywgdXBncmFkZXMuam9pbignLCcpKTtcblxuICAgICAgdmFyIGV2ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50cycpO1xuICAgICAgZXYuaW5pdEV2ZW50KCdtZGwtY29tcG9uZW50ZG93bmdyYWRlZCcsIHRydWUsIHRydWUpO1xuICAgICAgY29tcG9uZW50LmVsZW1lbnRfLmRpc3BhdGNoRXZlbnQoZXYpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEb3duZ3JhZGUgZWl0aGVyIGEgZ2l2ZW4gbm9kZSwgYW4gYXJyYXkgb2Ygbm9kZXMsIG9yIGEgTm9kZUxpc3QuXG4gICAqXG4gICAqIEBwYXJhbSB7IU5vZGV8IUFycmF5PCFOb2RlPnwhTm9kZUxpc3R9IG5vZGVzXG4gICAqL1xuICBmdW5jdGlvbiBkb3duZ3JhZGVOb2Rlc0ludGVybmFsKG5vZGVzKSB7XG4gICAgLyoqXG4gICAgICogQXV4aWxpYXJ5IGZ1bmN0aW9uIHRvIGRvd25ncmFkZSBhIHNpbmdsZSBub2RlLlxuICAgICAqIEBwYXJhbSAgeyFOb2RlfSBub2RlIHRoZSBub2RlIHRvIGJlIGRvd25ncmFkZWRcbiAgICAgKi9cbiAgICB2YXIgZG93bmdyYWRlTm9kZSA9IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgIGRlY29uc3RydWN0Q29tcG9uZW50SW50ZXJuYWwoZmluZENyZWF0ZWRDb21wb25lbnRCeU5vZGVJbnRlcm5hbChub2RlKSk7XG4gICAgfTtcbiAgICBpZiAobm9kZXMgaW5zdGFuY2VvZiBBcnJheSB8fCBub2RlcyBpbnN0YW5jZW9mIE5vZGVMaXN0KSB7XG4gICAgICBmb3IgKHZhciBuID0gMDsgbiA8IG5vZGVzLmxlbmd0aDsgbisrKSB7XG4gICAgICAgIGRvd25ncmFkZU5vZGUobm9kZXNbbl0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZXMgaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICBkb3duZ3JhZGVOb2RlKG5vZGVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50IHByb3ZpZGVkIHRvIGRvd25ncmFkZSBNREwgbm9kZXMuJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gTm93IHJldHVybiB0aGUgZnVuY3Rpb25zIHRoYXQgc2hvdWxkIGJlIG1hZGUgcHVibGljIHdpdGggdGhlaXIgcHVibGljbHlcbiAgLy8gZmFjaW5nIG5hbWVzLi4uXG4gIHJldHVybiB7XG4gICAgdXBncmFkZURvbTogdXBncmFkZURvbUludGVybmFsLFxuICAgIHVwZ3JhZGVFbGVtZW50OiB1cGdyYWRlRWxlbWVudEludGVybmFsLFxuICAgIHVwZ3JhZGVFbGVtZW50czogdXBncmFkZUVsZW1lbnRzSW50ZXJuYWwsXG4gICAgdXBncmFkZUFsbFJlZ2lzdGVyZWQ6IHVwZ3JhZGVBbGxSZWdpc3RlcmVkSW50ZXJuYWwsXG4gICAgcmVnaXN0ZXJVcGdyYWRlZENhbGxiYWNrOiByZWdpc3RlclVwZ3JhZGVkQ2FsbGJhY2tJbnRlcm5hbCxcbiAgICByZWdpc3RlcjogcmVnaXN0ZXJJbnRlcm5hbCxcbiAgICBkb3duZ3JhZGVFbGVtZW50czogZG93bmdyYWRlTm9kZXNJbnRlcm5hbFxuICB9O1xufSkoKTtcblxuLyoqXG4gKiBEZXNjcmliZXMgdGhlIHR5cGUgb2YgYSByZWdpc3RlcmVkIGNvbXBvbmVudCB0eXBlIG1hbmFnZWQgYnlcbiAqIGNvbXBvbmVudEhhbmRsZXIuIFByb3ZpZGVkIGZvciBiZW5lZml0IG9mIHRoZSBDbG9zdXJlIGNvbXBpbGVyLlxuICpcbiAqIEB0eXBlZGVmIHt7XG4gKiAgIGNvbnN0cnVjdG9yOiBGdW5jdGlvbixcbiAqICAgY2xhc3NBc1N0cmluZzogc3RyaW5nLFxuICogICBjc3NDbGFzczogc3RyaW5nLFxuICogICB3aWRnZXQ6IChzdHJpbmd8Ym9vbGVhbnx1bmRlZmluZWQpXG4gKiB9fVxuICovXG5jb21wb25lbnRIYW5kbGVyLkNvbXBvbmVudENvbmZpZ1B1YmxpYzsgIC8vIGpzaGludCBpZ25vcmU6bGluZVxuXG4vKipcbiAqIERlc2NyaWJlcyB0aGUgdHlwZSBvZiBhIHJlZ2lzdGVyZWQgY29tcG9uZW50IHR5cGUgbWFuYWdlZCBieVxuICogY29tcG9uZW50SGFuZGxlci4gUHJvdmlkZWQgZm9yIGJlbmVmaXQgb2YgdGhlIENsb3N1cmUgY29tcGlsZXIuXG4gKlxuICogQHR5cGVkZWYge3tcbiAqICAgY29uc3RydWN0b3I6ICFGdW5jdGlvbixcbiAqICAgY2xhc3NOYW1lOiBzdHJpbmcsXG4gKiAgIGNzc0NsYXNzOiBzdHJpbmcsXG4gKiAgIHdpZGdldDogKHN0cmluZ3xib29sZWFuKSxcbiAqICAgY2FsbGJhY2tzOiAhQXJyYXk8ZnVuY3Rpb24oIUhUTUxFbGVtZW50KT5cbiAqIH19XG4gKi9cbmNvbXBvbmVudEhhbmRsZXIuQ29tcG9uZW50Q29uZmlnOyAgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5cbi8qKlxuICogQ3JlYXRlZCBjb21wb25lbnQgKGkuZS4sIHVwZ3JhZGVkIGVsZW1lbnQpIHR5cGUgYXMgbWFuYWdlZCBieVxuICogY29tcG9uZW50SGFuZGxlci4gUHJvdmlkZWQgZm9yIGJlbmVmaXQgb2YgdGhlIENsb3N1cmUgY29tcGlsZXIuXG4gKlxuICogQHR5cGVkZWYge3tcbiAqICAgZWxlbWVudF86ICFIVE1MRWxlbWVudCxcbiAqICAgY2xhc3NOYW1lOiBzdHJpbmcsXG4gKiAgIGNsYXNzQXNTdHJpbmc6IHN0cmluZyxcbiAqICAgY3NzQ2xhc3M6IHN0cmluZyxcbiAqICAgd2lkZ2V0OiBzdHJpbmdcbiAqIH19XG4gKi9cbmNvbXBvbmVudEhhbmRsZXIuQ29tcG9uZW50OyAgLy8ganNoaW50IGlnbm9yZTpsaW5lXG5cbi8vIEV4cG9ydCBhbGwgc3ltYm9scywgZm9yIHRoZSBiZW5lZml0IG9mIENsb3N1cmUgY29tcGlsZXIuXG4vLyBObyBlZmZlY3Qgb24gdW5jb21waWxlZCBjb2RlLlxuY29tcG9uZW50SGFuZGxlclsndXBncmFkZURvbSddID0gY29tcG9uZW50SGFuZGxlci51cGdyYWRlRG9tO1xuY29tcG9uZW50SGFuZGxlclsndXBncmFkZUVsZW1lbnQnXSA9IGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnQ7XG5jb21wb25lbnRIYW5kbGVyWyd1cGdyYWRlRWxlbWVudHMnXSA9IGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnRzO1xuY29tcG9uZW50SGFuZGxlclsndXBncmFkZUFsbFJlZ2lzdGVyZWQnXSA9XG4gICAgY29tcG9uZW50SGFuZGxlci51cGdyYWRlQWxsUmVnaXN0ZXJlZDtcbmNvbXBvbmVudEhhbmRsZXJbJ3JlZ2lzdGVyVXBncmFkZWRDYWxsYmFjayddID1cbiAgICBjb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyVXBncmFkZWRDYWxsYmFjaztcbmNvbXBvbmVudEhhbmRsZXJbJ3JlZ2lzdGVyJ10gPSBjb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyO1xuY29tcG9uZW50SGFuZGxlclsnZG93bmdyYWRlRWxlbWVudHMnXSA9IGNvbXBvbmVudEhhbmRsZXIuZG93bmdyYWRlRWxlbWVudHM7XG53aW5kb3cuY29tcG9uZW50SGFuZGxlciA9IGNvbXBvbmVudEhhbmRsZXI7XG53aW5kb3dbJ2NvbXBvbmVudEhhbmRsZXInXSA9IGNvbXBvbmVudEhhbmRsZXI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBcIkN1dHRpbmcgdGhlIG11c3RhcmRcIiB0ZXN0LiBJZiB0aGUgYnJvd3NlciBzdXBwb3J0cyB0aGUgZmVhdHVyZXNcbiAgICogdGVzdGVkLCBhZGRzIGEgbWRsLWpzIGNsYXNzIHRvIHRoZSA8aHRtbD4gZWxlbWVudC4gSXQgdGhlbiB1cGdyYWRlcyBhbGwgTURMXG4gICAqIGNvbXBvbmVudHMgcmVxdWlyaW5nIEphdmFTY3JpcHQuXG4gICAqL1xuICBpZiAoJ2NsYXNzTGlzdCcgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykgJiZcbiAgICAgICdxdWVyeVNlbGVjdG9yJyBpbiBkb2N1bWVudCAmJlxuICAgICAgJ2FkZEV2ZW50TGlzdGVuZXInIGluIHdpbmRvdyAmJiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdtZGwtanMnKTtcbiAgICBjb21wb25lbnRIYW5kbGVyLnVwZ3JhZGVBbGxSZWdpc3RlcmVkKCk7XG4gIH0gZWxzZSB7XG4gICAgLyoqXG4gICAgICogRHVtbXkgZnVuY3Rpb24gdG8gYXZvaWQgSlMgZXJyb3JzLlxuICAgICAqL1xuICAgIGNvbXBvbmVudEhhbmRsZXIudXBncmFkZUVsZW1lbnQgPSBmdW5jdGlvbigpIHt9O1xuICAgIC8qKlxuICAgICAqIER1bW15IGZ1bmN0aW9uIHRvIGF2b2lkIEpTIGVycm9ycy5cbiAgICAgKi9cbiAgICBjb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyID0gZnVuY3Rpb24oKSB7fTtcbiAgfVxufSk7XG5cbi8vIFNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2Rhcml1cy9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUvYmxvYi9tYXN0ZXIvcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmpzXG4vLyBBZGFwdGVkIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcGF1bGlyaXNoLzE1Nzk2NzEgd2hpY2ggZGVyaXZlZCBmcm9tXG4vLyBodHRwOi8vcGF1bGlyaXNoLmNvbS8yMDExL3JlcXVlc3RhbmltYXRpb25mcmFtZS1mb3Itc21hcnQtYW5pbWF0aW5nL1xuLy8gaHR0cDovL215Lm9wZXJhLmNvbS9lbW9sbGVyL2Jsb2cvMjAxMS8xMi8yMC9yZXF1ZXN0YW5pbWF0aW9uZnJhbWUtZm9yLXNtYXJ0LWVyLWFuaW1hdGluZ1xuLy8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHBvbHlmaWxsIGJ5IEVyaWsgTcO2bGxlci5cbi8vIEZpeGVzIGZyb20gUGF1bCBJcmlzaCwgVGlubyBaaWpkZWwsIEFuZHJldyBNYW8sIEtsZW1lbiBTbGF2acSNLCBEYXJpdXMgQmFjb25cbi8vIE1JVCBsaWNlbnNlXG5pZiAoIURhdGUubm93KSB7XG4gICAgLyoqXG4gICAqIERhdGUubm93IHBvbHlmaWxsLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBjdXJyZW50IERhdGVcbiAgICovXG4gICAgRGF0ZS5ub3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9O1xuICAgIERhdGVbJ25vdyddID0gRGF0ZS5ub3c7XG59XG52YXIgdmVuZG9ycyA9IFtcbiAgICAnd2Via2l0JyxcbiAgICAnbW96J1xuXTtcbmZvciAodmFyIGkgPSAwOyBpIDwgdmVuZG9ycy5sZW5ndGggJiYgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7ICsraSkge1xuICAgIHZhciB2cCA9IHZlbmRvcnNbaV07XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvd1t2cCArICdSZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXTtcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSB3aW5kb3dbdnAgKyAnQ2FuY2VsQW5pbWF0aW9uRnJhbWUnXSB8fCB3aW5kb3dbdnAgKyAnQ2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lJ107XG4gICAgd2luZG93WydyZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gICAgd2luZG93WydjYW5jZWxBbmltYXRpb25GcmFtZSddID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lO1xufVxuaWYgKC9pUChhZHxob25lfG9kKS4qT1MgNi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgIXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgIXdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSkge1xuICAgIHZhciBsYXN0VGltZSA9IDA7XG4gICAgLyoqXG4gICAqIHJlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbC5cbiAgICogQHBhcmFtICB7IUZ1bmN0aW9ufSBjYWxsYmFjayB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAqL1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIHZhciBuZXh0VGltZSA9IE1hdGgubWF4KGxhc3RUaW1lICsgMTYsIG5vdyk7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGxhc3RUaW1lID0gbmV4dFRpbWUpO1xuICAgICAgICB9LCBuZXh0VGltZSAtIG5vdyk7XG4gICAgfTtcbiAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBjbGVhclRpbWVvdXQ7XG4gICAgd2luZG93WydyZXF1ZXN0QW5pbWF0aW9uRnJhbWUnXSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG4gICAgd2luZG93WydjYW5jZWxBbmltYXRpb25GcmFtZSddID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lO1xufVxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIEJ1dHRvbiBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG52YXIgTWF0ZXJpYWxCdXR0b24gPSBmdW5jdGlvbiBNYXRlcmlhbEJ1dHRvbihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsQnV0dG9uJ10gPSBNYXRlcmlhbEJ1dHRvbjtcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQnV0dG9uLnByb3RvdHlwZS5Db25zdGFudF8gPSB7fTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQnV0dG9uLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBSSVBQTEVfRUZGRUNUOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QnLFxuICAgIFJJUFBMRV9DT05UQUlORVI6ICdtZGwtYnV0dG9uX19yaXBwbGUtY29udGFpbmVyJyxcbiAgICBSSVBQTEU6ICdtZGwtcmlwcGxlJ1xufTtcbi8qKlxuICAgKiBIYW5kbGUgYmx1ciBvZiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbEJ1dHRvbi5wcm90b3R5cGUuYmx1ckhhbmRsZXJfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYmx1cigpO1xuICAgIH1cbn07XG4vLyBQdWJsaWMgbWV0aG9kcy5cbi8qKlxuICAgKiBEaXNhYmxlIGJ1dHRvbi5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsQnV0dG9uLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudF8uZGlzYWJsZWQgPSB0cnVlO1xufTtcbk1hdGVyaWFsQnV0dG9uLnByb3RvdHlwZVsnZGlzYWJsZSddID0gTWF0ZXJpYWxCdXR0b24ucHJvdG90eXBlLmRpc2FibGU7XG4vKipcbiAgICogRW5hYmxlIGJ1dHRvbi5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsQnV0dG9uLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50Xy5kaXNhYmxlZCA9IGZhbHNlO1xufTtcbk1hdGVyaWFsQnV0dG9uLnByb3RvdHlwZVsnZW5hYmxlJ10gPSBNYXRlcmlhbEJ1dHRvbi5wcm90b3R5cGUuZW5hYmxlO1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbEJ1dHRvbi5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfRUZGRUNUKSkge1xuICAgICAgICAgICAgdmFyIHJpcHBsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0NPTlRBSU5FUik7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJpcHBsZUVsZW1lbnRfKTtcbiAgICAgICAgICAgIHRoaXMuYm91bmRSaXBwbGVCbHVySGFuZGxlciA9IHRoaXMuYmx1ckhhbmRsZXJfLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kUmlwcGxlQmx1ckhhbmRsZXIpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZChyaXBwbGVDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm91bmRCdXR0b25CbHVySGFuZGxlciA9IHRoaXMuYmx1ckhhbmRsZXJfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRCdXR0b25CbHVySGFuZGxlcik7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuYm91bmRCdXR0b25CbHVySGFuZGxlcik7XG4gICAgfVxufTtcbi8qKlxuICAgKiBEb3duZ3JhZGUgdGhlIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxCdXR0b24ucHJvdG90eXBlLm1kbERvd25ncmFkZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMucmlwcGxlRWxlbWVudF8pIHtcbiAgICAgICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZFJpcHBsZUJsdXJIYW5kbGVyKTtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZEJ1dHRvbkJsdXJIYW5kbGVyKTtcbiAgICB0aGlzLmVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmJvdW5kQnV0dG9uQmx1ckhhbmRsZXIpO1xufTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbEJ1dHRvbixcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxCdXR0b24nLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLWJ1dHRvbicsXG4gICAgd2lkZ2V0OiB0cnVlXG59KTtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBDaGVja2JveCBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsQ2hlY2tib3ggPSBmdW5jdGlvbiBNYXRlcmlhbENoZWNrYm94KGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxDaGVja2JveCddID0gTWF0ZXJpYWxDaGVja2JveDtcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLkNvbnN0YW50XyA9IHsgVElOWV9USU1FT1VUOiAwLjAwMSB9O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgSU5QVVQ6ICdtZGwtY2hlY2tib3hfX2lucHV0JyxcbiAgICBCT1hfT1VUTElORTogJ21kbC1jaGVja2JveF9fYm94LW91dGxpbmUnLFxuICAgIEZPQ1VTX0hFTFBFUjogJ21kbC1jaGVja2JveF9fZm9jdXMtaGVscGVyJyxcbiAgICBUSUNLX09VVExJTkU6ICdtZGwtY2hlY2tib3hfX3RpY2stb3V0bGluZScsXG4gICAgUklQUExFX0VGRkVDVDogJ21kbC1qcy1yaXBwbGUtZWZmZWN0JyxcbiAgICBSSVBQTEVfSUdOT1JFX0VWRU5UUzogJ21kbC1qcy1yaXBwbGUtZWZmZWN0LS1pZ25vcmUtZXZlbnRzJyxcbiAgICBSSVBQTEVfQ09OVEFJTkVSOiAnbWRsLWNoZWNrYm94X19yaXBwbGUtY29udGFpbmVyJyxcbiAgICBSSVBQTEVfQ0VOVEVSOiAnbWRsLXJpcHBsZS0tY2VudGVyJyxcbiAgICBSSVBQTEU6ICdtZGwtcmlwcGxlJyxcbiAgICBJU19GT0NVU0VEOiAnaXMtZm9jdXNlZCcsXG4gICAgSVNfRElTQUJMRUQ6ICdpcy1kaXNhYmxlZCcsXG4gICAgSVNfQ0hFQ0tFRDogJ2lzLWNoZWNrZWQnLFxuICAgIElTX1VQR1JBREVEOiAnaXMtdXBncmFkZWQnXG59O1xuLyoqXG4gICAqIEhhbmRsZSBjaGFuZ2Ugb2Ygc3RhdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLm9uQ2hhbmdlXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG4vKipcbiAgICogSGFuZGxlIGZvY3VzIG9mIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLm9uRm9jdXNfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRk9DVVNFRCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBsb3N0IGZvY3VzIG9mIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLm9uQmx1cl8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbn07XG4vKipcbiAgICogSGFuZGxlIG1vdXNldXAuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLm9uTW91c2VVcF8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmJsdXJfKCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBjbGFzcyB1cGRhdGVzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLnVwZGF0ZUNsYXNzZXNfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuY2hlY2tEaXNhYmxlZCgpO1xuICAgIHRoaXMuY2hlY2tUb2dnbGVTdGF0ZSgpO1xufTtcbi8qKlxuICAgKiBBZGQgYmx1ci5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5ibHVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPOiBmaWd1cmUgb3V0IHdoeSB0aGVyZSdzIGEgZm9jdXMgZXZlbnQgYmVpbmcgZmlyZWQgYWZ0ZXIgb3VyIGJsdXIsXG4gICAgLy8gc28gdGhhdCB3ZSBjYW4gYXZvaWQgdGhpcyBoYWNrLlxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfLmJsdXIoKTtcbiAgICB9LmJpbmQodGhpcyksIHRoaXMuQ29uc3RhbnRfLlRJTllfVElNRU9VVCk7XG59O1xuLy8gUHVibGljIG1ldGhvZHMuXG4vKipcbiAgICogQ2hlY2sgdGhlIGlucHV0cyB0b2dnbGUgc3RhdGUgYW5kIHVwZGF0ZSBkaXNwbGF5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuY2hlY2tUb2dnbGVTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnRfLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ0hFQ0tFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ0hFQ0tFRCk7XG4gICAgfVxufTtcbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlWydjaGVja1RvZ2dsZVN0YXRlJ10gPSBNYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5jaGVja1RvZ2dsZVN0YXRlO1xuLyoqXG4gICAqIENoZWNrIHRoZSBpbnB1dHMgZGlzYWJsZWQgc3RhdGUgYW5kIHVwZGF0ZSBkaXNwbGF5LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuY2hlY2tEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnRfLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0RJU0FCTEVEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVNBQkxFRCk7XG4gICAgfVxufTtcbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlWydjaGVja0Rpc2FibGVkJ10gPSBNYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5jaGVja0Rpc2FibGVkO1xuLyoqXG4gICAqIERpc2FibGUgY2hlY2tib3guXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlWydkaXNhYmxlJ10gPSBNYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5kaXNhYmxlO1xuLyoqXG4gICAqIEVuYWJsZSBjaGVja2JveC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGVbJ2VuYWJsZSddID0gTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuZW5hYmxlO1xuLyoqXG4gICAqIENoZWNrIGNoZWNrYm94LlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxDaGVja2JveC5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmNoZWNrZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZVsnY2hlY2snXSA9IE1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlLmNoZWNrO1xuLyoqXG4gICAqIFVuY2hlY2sgY2hlY2tib3guXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS51bmNoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5jaGVja2VkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsQ2hlY2tib3gucHJvdG90eXBlWyd1bmNoZWNrJ10gPSBNYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS51bmNoZWNrO1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50XyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLklOUFVUKTtcbiAgICAgICAgdmFyIGJveE91dGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGJveE91dGxpbmUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkJPWF9PVVRMSU5FKTtcbiAgICAgICAgdmFyIHRpY2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHRpY2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkZPQ1VTX0hFTFBFUik7XG4gICAgICAgIHZhciB0aWNrT3V0bGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdGlja091dGxpbmUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlRJQ0tfT1VUTElORSk7XG4gICAgICAgIGJveE91dGxpbmUuYXBwZW5kQ2hpbGQodGlja091dGxpbmUpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKHRpY2tDb250YWluZXIpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKGJveE91dGxpbmUpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfRUZGRUNUKSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0lHTk9SRV9FVkVOVFMpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50XyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9DT05UQUlORVIpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0VGRkVDVCk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfQ0VOVEVSKTtcbiAgICAgICAgICAgIHRoaXMuYm91bmRSaXBwbGVNb3VzZVVwID0gdGhpcy5vbk1vdXNlVXBfLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmJvdW5kUmlwcGxlTW91c2VVcCk7XG4gICAgICAgICAgICB2YXIgcmlwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmlwcGxlLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEUpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5hcHBlbmRDaGlsZChyaXBwbGUpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZCh0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvdW5kSW5wdXRPbkNoYW5nZSA9IHRoaXMub25DaGFuZ2VfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRJbnB1dE9uRm9jdXMgPSB0aGlzLm9uRm9jdXNfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRJbnB1dE9uQmx1ciA9IHRoaXMub25CbHVyXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdW5kRWxlbWVudE1vdXNlVXAgPSB0aGlzLm9uTW91c2VVcF8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuYm91bmRJbnB1dE9uQ2hhbmdlKTtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5ib3VuZElucHV0T25Gb2N1cyk7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5ib3VuZElucHV0T25CbHVyKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZEVsZW1lbnRNb3VzZVVwKTtcbiAgICAgICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19VUEdSQURFRCk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBEb3duZ3JhZGUgdGhlIGNvbXBvbmVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbENoZWNrYm94LnByb3RvdHlwZS5tZGxEb3duZ3JhZGVfID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfKSB7XG4gICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRSaXBwbGVNb3VzZVVwKTtcbiAgICB9XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuYm91bmRJbnB1dE9uQ2hhbmdlKTtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmJvdW5kSW5wdXRPbkZvY3VzKTtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuYm91bmRJbnB1dE9uQmx1cik7XG4gICAgdGhpcy5lbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZEVsZW1lbnRNb3VzZVVwKTtcbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxDaGVja2JveCxcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxDaGVja2JveCcsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtY2hlY2tib3gnLFxuICAgIHdpZGdldDogdHJ1ZVxufSk7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgRGlhbG9nIE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG52YXIgTWF0ZXJpYWxEaWFsb2cgPSBmdW5jdGlvbiBNYXRlcmlhbERpYWxvZyhlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG59O1xud2luZG93WydNYXRlcmlhbERpYWxvZyddID0gTWF0ZXJpYWxEaWFsb2c7XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbERpYWxvZy5wcm90b3R5cGUuY3NzQ2xhc3Nlc18gPSB7IEJBQ0tEUk9QOiAnbWRsLWRpYWxvZy1iYWNrZHJvcCcgfTtcbi8qKlxuICAqIEludGVybmFsIG1ldGhvZCBmb3Igc2hvd2luZyB0aGUgZGlhbG9nLlxuICAqXG4gICogQHByaXZhdGVcbiAgKi9cbk1hdGVyaWFsRGlhbG9nLnByb3RvdHlwZS5zaG93SW50ZXJuYWxfID0gZnVuY3Rpb24gKGJhY2tkcm9wKSB7XG4gICAgaWYgKGJhY2tkcm9wID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ1lvdSBtdXN0IHByb3ZpZGUgd2hldGhlciBvciBub3QgdG8gc2hvdyB0aGUgYmFja2Ryb3AuJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmVsZW1lbnRfLmhhc0F0dHJpYnV0ZSgnb3BlbicpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGJhY2tkcm9wKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlQmFja2Ryb3BfKCk7XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudF8uc2V0QXR0cmlidXRlKCdvcGVuJywgdHJ1ZSk7XG59O1xuLyoqXG4gICogSW50ZXJuYWwgbWV0aG9kIHRvIGNyZWF0ZSBhIG1vZGFsIGJhY2tkcm9wLlxuICAqXG4gICogQHByaXZhdGVcbiAgKi9cbk1hdGVyaWFsRGlhbG9nLnByb3RvdHlwZS5jcmVhdGVCYWNrZHJvcF8gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5iYWNrZHJvcEVsZW1lbnRfID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5iYWNrZHJvcEVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5jc3NDbGFzc2VzXy5CQUNLRFJPUCk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmJhY2tkcm9wRWxlbWVudF8pO1xufTtcbi8qKlxuICAqIFNob3cgdGhlIGRpYWxvZy5cbiAgKlxuICAqIEBwdWJsaWNcbiAgKi9cbk1hdGVyaWFsRGlhbG9nLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2hvd0ludGVybmFsXyhmYWxzZSk7XG59O1xuTWF0ZXJpYWxEaWFsb2cucHJvdG90eXBlWydzaG93J10gPSBNYXRlcmlhbERpYWxvZy5wcm90b3R5cGUuc2hvdztcbi8qKlxuICAqIFNob3cgdGhlIGRpYWxvZyBhcyBhIG1vZGFsLlxuICAqXG4gICogQHB1YmxpY1xuICAqL1xuTWF0ZXJpYWxEaWFsb2cucHJvdG90eXBlLnNob3dNb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNob3dJbnRlcm5hbF8odHJ1ZSk7XG59O1xuTWF0ZXJpYWxEaWFsb2cucHJvdG90eXBlWydzaG93TW9kYWwnXSA9IE1hdGVyaWFsRGlhbG9nLnByb3RvdHlwZS5zaG93TW9kYWw7XG4vKipcbiAgKiBDbG9zZSB0aGUgZGlhbG9nLlxuICAqXG4gICogQHB1YmxpY1xuICAqL1xuTWF0ZXJpYWxEaWFsb2cucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudF8ucmVtb3ZlQXR0cmlidXRlKCdvcGVuJyk7XG4gICAgaWYgKHRoaXMuYmFja2Ryb3BFbGVtZW50Xykge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuYmFja2Ryb3BFbGVtZW50Xyk7XG4gICAgICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50XyA9IHVuZGVmaW5lZDtcbiAgICB9XG59O1xuTWF0ZXJpYWxEaWFsb2cucHJvdG90eXBlWydjbG9zZSddID0gTWF0ZXJpYWxEaWFsb2cucHJvdG90eXBlLmNsb3NlO1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsRGlhbG9nLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbERpYWxvZycsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtZGlhbG9nJyxcbiAgICB3aWRnZXQ6IHRydWVcbn0pO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIGljb24gdG9nZ2xlIE1ETCBjb21wb25lbnQuXG4gICAqIEltcGxlbWVudHMgTURMIGNvbXBvbmVudCBkZXNpZ24gcGF0dGVybiBkZWZpbmVkIGF0OlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vamFzb25tYXllcy9tZGwtY29tcG9uZW50LWRlc2lnbi1wYXR0ZXJuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSB1cGdyYWRlZC5cbiAgICovXG52YXIgTWF0ZXJpYWxJY29uVG9nZ2xlID0gZnVuY3Rpb24gTWF0ZXJpYWxJY29uVG9nZ2xlKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxJY29uVG9nZ2xlJ10gPSBNYXRlcmlhbEljb25Ub2dnbGU7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLkNvbnN0YW50XyA9IHsgVElOWV9USU1FT1VUOiAwLjAwMSB9O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBJTlBVVDogJ21kbC1pY29uLXRvZ2dsZV9faW5wdXQnLFxuICAgIEpTX1JJUFBMRV9FRkZFQ1Q6ICdtZGwtanMtcmlwcGxlLWVmZmVjdCcsXG4gICAgUklQUExFX0lHTk9SRV9FVkVOVFM6ICdtZGwtanMtcmlwcGxlLWVmZmVjdC0taWdub3JlLWV2ZW50cycsXG4gICAgUklQUExFX0NPTlRBSU5FUjogJ21kbC1pY29uLXRvZ2dsZV9fcmlwcGxlLWNvbnRhaW5lcicsXG4gICAgUklQUExFX0NFTlRFUjogJ21kbC1yaXBwbGUtLWNlbnRlcicsXG4gICAgUklQUExFOiAnbWRsLXJpcHBsZScsXG4gICAgSVNfRk9DVVNFRDogJ2lzLWZvY3VzZWQnLFxuICAgIElTX0RJU0FCTEVEOiAnaXMtZGlzYWJsZWQnLFxuICAgIElTX0NIRUNLRUQ6ICdpcy1jaGVja2VkJ1xufTtcbi8qKlxuICAgKiBIYW5kbGUgY2hhbmdlIG9mIHN0YXRlLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLm9uQ2hhbmdlXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG4vKipcbiAgICogSGFuZGxlIGZvY3VzIG9mIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUub25Gb2N1c18gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbn07XG4vKipcbiAgICogSGFuZGxlIGxvc3QgZm9jdXMgb2YgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5vbkJsdXJfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRk9DVVNFRCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBtb3VzZXVwLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLm9uTW91c2VVcF8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmJsdXJfKCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBjbGFzcyB1cGRhdGVzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUudXBkYXRlQ2xhc3Nlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jaGVja0Rpc2FibGVkKCk7XG4gICAgdGhpcy5jaGVja1RvZ2dsZVN0YXRlKCk7XG59O1xuLyoqXG4gICAqIEFkZCBibHVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuYmx1cl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gVE9ETzogZmlndXJlIG91dCB3aHkgdGhlcmUncyBhIGZvY3VzIGV2ZW50IGJlaW5nIGZpcmVkIGFmdGVyIG91ciBibHVyLFxuICAgIC8vIHNvIHRoYXQgd2UgY2FuIGF2b2lkIHRoaXMgaGFjay5cbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5ibHVyKCk7XG4gICAgfS5iaW5kKHRoaXMpLCB0aGlzLkNvbnN0YW50Xy5USU5ZX1RJTUVPVVQpO1xufTtcbi8vIFB1YmxpYyBtZXRob2RzLlxuLyoqXG4gICAqIENoZWNrIHRoZSBpbnB1dHMgdG9nZ2xlIHN0YXRlIGFuZCB1cGRhdGUgZGlzcGxheS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuY2hlY2tUb2dnbGVTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnRfLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ0hFQ0tFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ0hFQ0tFRCk7XG4gICAgfVxufTtcbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGVbJ2NoZWNrVG9nZ2xlU3RhdGUnXSA9IE1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuY2hlY2tUb2dnbGVTdGF0ZTtcbi8qKlxuICAgKiBDaGVjayB0aGUgaW5wdXRzIGRpc2FibGVkIHN0YXRlIGFuZCB1cGRhdGUgZGlzcGxheS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuY2hlY2tEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnRfLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0RJU0FCTEVEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVNBQkxFRCk7XG4gICAgfVxufTtcbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGVbJ2NoZWNrRGlzYWJsZWQnXSA9IE1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuY2hlY2tEaXNhYmxlZDtcbi8qKlxuICAgKiBEaXNhYmxlIGljb24gdG9nZ2xlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGVbJ2Rpc2FibGUnXSA9IE1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuZGlzYWJsZTtcbi8qKlxuICAgKiBFbmFibGUgaWNvbiB0b2dnbGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZVsnZW5hYmxlJ10gPSBNYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlLmVuYWJsZTtcbi8qKlxuICAgKiBDaGVjayBpY29uIHRvZ2dsZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUuY2hlY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmNoZWNrZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbEljb25Ub2dnbGUucHJvdG90eXBlWydjaGVjayddID0gTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5jaGVjaztcbi8qKlxuICAgKiBVbmNoZWNrIGljb24gdG9nZ2xlLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS51bmNoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5jaGVja2VkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGVbJ3VuY2hlY2snXSA9IE1hdGVyaWFsSWNvblRvZ2dsZS5wcm90b3R5cGUudW5jaGVjaztcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50XyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLklOUFVUKTtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSlNfUklQUExFX0VGRkVDVCkpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9JR05PUkVfRVZFTlRTKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfQ09OVEFJTkVSKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkpTX1JJUFBMRV9FRkZFQ1QpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0NFTlRFUik7XG4gICAgICAgICAgICB0aGlzLmJvdW5kUmlwcGxlTW91c2VVcCA9IHRoaXMub25Nb3VzZVVwXy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZFJpcHBsZU1vdXNlVXApO1xuICAgICAgICAgICAgdmFyIHJpcHBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHJpcHBsZS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uYXBwZW5kQ2hpbGQocmlwcGxlKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQodGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ib3VuZElucHV0T25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdW5kSW5wdXRPbkZvY3VzID0gdGhpcy5vbkZvY3VzXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdW5kSW5wdXRPbkJsdXIgPSB0aGlzLm9uQmx1cl8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZEVsZW1lbnRPbk1vdXNlVXAgPSB0aGlzLm9uTW91c2VVcF8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuYm91bmRJbnB1dE9uQ2hhbmdlKTtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5ib3VuZElucHV0T25Gb2N1cyk7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5ib3VuZElucHV0T25CbHVyKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZEVsZW1lbnRPbk1vdXNlVXApO1xuICAgICAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCgnaXMtdXBncmFkZWQnKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIERvd25ncmFkZSB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxJY29uVG9nZ2xlLnByb3RvdHlwZS5tZGxEb3duZ3JhZGVfID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfKSB7XG4gICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRSaXBwbGVNb3VzZVVwKTtcbiAgICB9XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuYm91bmRJbnB1dE9uQ2hhbmdlKTtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmJvdW5kSW5wdXRPbkZvY3VzKTtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuYm91bmRJbnB1dE9uQmx1cik7XG4gICAgdGhpcy5lbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZEVsZW1lbnRPbk1vdXNlVXApO1xufTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbEljb25Ub2dnbGUsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsSWNvblRvZ2dsZScsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtaWNvbi10b2dnbGUnLFxuICAgIHdpZGdldDogdHJ1ZVxufSk7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgZHJvcGRvd24gTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbE1lbnUgPSBmdW5jdGlvbiBNYXRlcmlhbE1lbnUoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbE1lbnUnXSA9IE1hdGVyaWFsTWVudTtcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUuQ29uc3RhbnRfID0ge1xuICAgIC8vIFRvdGFsIGR1cmF0aW9uIG9mIHRoZSBtZW51IGFuaW1hdGlvbi5cbiAgICBUUkFOU0lUSU9OX0RVUkFUSU9OX1NFQ09ORFM6IDAuMyxcbiAgICAvLyBUaGUgZnJhY3Rpb24gb2YgdGhlIHRvdGFsIGR1cmF0aW9uIHdlIHdhbnQgdG8gdXNlIGZvciBtZW51IGl0ZW0gYW5pbWF0aW9ucy5cbiAgICBUUkFOU0lUSU9OX0RVUkFUSU9OX0ZSQUNUSU9OOiAwLjgsXG4gICAgLy8gSG93IGxvbmcgdGhlIG1lbnUgc3RheXMgb3BlbiBhZnRlciBjaG9vc2luZyBhbiBvcHRpb24gKHNvIHRoZSB1c2VyIGNhbiBzZWVcbiAgICAvLyB0aGUgcmlwcGxlKS5cbiAgICBDTE9TRV9USU1FT1VUOiAxNTBcbn07XG4vKipcbiAgICogS2V5Y29kZXMsIGZvciBjb2RlIHJlYWRhYmlsaXR5LlxuICAgKlxuICAgKiBAZW51bSB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUuS2V5Y29kZXNfID0ge1xuICAgIEVOVEVSOiAxMyxcbiAgICBFU0NBUEU6IDI3LFxuICAgIFNQQUNFOiAzMixcbiAgICBVUF9BUlJPVzogMzgsXG4gICAgRE9XTl9BUlJPVzogNDBcbn07XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIENPTlRBSU5FUjogJ21kbC1tZW51X19jb250YWluZXInLFxuICAgIE9VVExJTkU6ICdtZGwtbWVudV9fb3V0bGluZScsXG4gICAgSVRFTTogJ21kbC1tZW51X19pdGVtJyxcbiAgICBJVEVNX1JJUFBMRV9DT05UQUlORVI6ICdtZGwtbWVudV9faXRlbS1yaXBwbGUtY29udGFpbmVyJyxcbiAgICBSSVBQTEVfRUZGRUNUOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QnLFxuICAgIFJJUFBMRV9JR05PUkVfRVZFTlRTOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QtLWlnbm9yZS1ldmVudHMnLFxuICAgIFJJUFBMRTogJ21kbC1yaXBwbGUnLFxuICAgIC8vIFN0YXR1c2VzXG4gICAgSVNfVVBHUkFERUQ6ICdpcy11cGdyYWRlZCcsXG4gICAgSVNfVklTSUJMRTogJ2lzLXZpc2libGUnLFxuICAgIElTX0FOSU1BVElORzogJ2lzLWFuaW1hdGluZycsXG4gICAgLy8gQWxpZ25tZW50IG9wdGlvbnNcbiAgICBCT1RUT01fTEVGVDogJ21kbC1tZW51LS1ib3R0b20tbGVmdCcsXG4gICAgLy8gVGhpcyBpcyB0aGUgZGVmYXVsdC5cbiAgICBCT1RUT01fUklHSFQ6ICdtZGwtbWVudS0tYm90dG9tLXJpZ2h0JyxcbiAgICBUT1BfTEVGVDogJ21kbC1tZW51LS10b3AtbGVmdCcsXG4gICAgVE9QX1JJR0hUOiAnbWRsLW1lbnUtLXRvcC1yaWdodCcsXG4gICAgVU5BTElHTkVEOiAnbWRsLW1lbnUtLXVuYWxpZ25lZCdcbn07XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICAvLyBDcmVhdGUgY29udGFpbmVyIGZvciB0aGUgbWVudS5cbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkNPTlRBSU5FUik7XG4gICAgICAgIHRoaXMuZWxlbWVudF8ucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCB0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudF8pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50Xyk7XG4gICAgICAgIHRoaXMuY29udGFpbmVyXyA9IGNvbnRhaW5lcjtcbiAgICAgICAgLy8gQ3JlYXRlIG91dGxpbmUgZm9yIHRoZSBtZW51IChzaGFkb3cgYW5kIGJhY2tncm91bmQpLlxuICAgICAgICB2YXIgb3V0bGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvdXRsaW5lLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5PVVRMSU5FKTtcbiAgICAgICAgdGhpcy5vdXRsaW5lXyA9IG91dGxpbmU7XG4gICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUob3V0bGluZSwgdGhpcy5lbGVtZW50Xyk7XG4gICAgICAgIC8vIEZpbmQgdGhlIFwiZm9yXCIgZWxlbWVudCBhbmQgYmluZCBldmVudHMgdG8gaXQuXG4gICAgICAgIHZhciBmb3JFbElkID0gdGhpcy5lbGVtZW50Xy5nZXRBdHRyaWJ1dGUoJ2ZvcicpIHx8IHRoaXMuZWxlbWVudF8uZ2V0QXR0cmlidXRlKCdkYXRhLW1kbC1mb3InKTtcbiAgICAgICAgdmFyIGZvckVsID0gbnVsbDtcbiAgICAgICAgaWYgKGZvckVsSWQpIHtcbiAgICAgICAgICAgIGZvckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9yRWxJZCk7XG4gICAgICAgICAgICBpZiAoZm9yRWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvckVsZW1lbnRfID0gZm9yRWw7XG4gICAgICAgICAgICAgICAgZm9yRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUZvckNsaWNrXy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICBmb3JFbC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVGb3JLZXlib2FyZEV2ZW50Xy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5JVEVNKTtcbiAgICAgICAgdGhpcy5ib3VuZEl0ZW1LZXlkb3duID0gdGhpcy5oYW5kbGVJdGVtS2V5Ym9hcmRFdmVudF8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZEl0ZW1DbGljayA9IHRoaXMuaGFuZGxlSXRlbUNsaWNrXy5iaW5kKHRoaXMpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBBZGQgYSBsaXN0ZW5lciB0byBlYWNoIG1lbnUgaXRlbS5cbiAgICAgICAgICAgIGl0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ib3VuZEl0ZW1DbGljayk7XG4gICAgICAgICAgICAvLyBBZGQgYSB0YWIgaW5kZXggdG8gZWFjaCBtZW51IGl0ZW0uXG4gICAgICAgICAgICBpdGVtc1tpXS50YWJJbmRleCA9ICctMSc7XG4gICAgICAgICAgICAvLyBBZGQgYSBrZXlib2FyZCBsaXN0ZW5lciB0byBlYWNoIG1lbnUgaXRlbS5cbiAgICAgICAgICAgIGl0ZW1zW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmJvdW5kSXRlbUtleWRvd24pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCByaXBwbGUgY2xhc3NlcyB0byBlYWNoIGl0ZW0sIGlmIHRoZSB1c2VyIGhhcyBlbmFibGVkIHJpcHBsZXMuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9FRkZFQ1QpKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfSUdOT1JFX0VWRU5UUyk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGl0ZW1zW2ldO1xuICAgICAgICAgICAgICAgIHZhciByaXBwbGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgcmlwcGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JVEVNX1JJUFBMRV9DT05UQUlORVIpO1xuICAgICAgICAgICAgICAgIHZhciByaXBwbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgcmlwcGxlLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEUpO1xuICAgICAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyaXBwbGUpO1xuICAgICAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQocmlwcGxlQ29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfRUZGRUNUKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBDb3B5IGFsaWdubWVudCBjbGFzc2VzIHRvIHRoZSBjb250YWluZXIsIHNvIHRoZSBvdXRsaW5lIGNhbiB1c2UgdGhlbS5cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uQk9UVE9NX0xFRlQpKSB7XG4gICAgICAgICAgICB0aGlzLm91dGxpbmVfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5CT1RUT01fTEVGVCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uQk9UVE9NX1JJR0hUKSkge1xuICAgICAgICAgICAgdGhpcy5vdXRsaW5lXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uQk9UVE9NX1JJR0hUKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5UT1BfTEVGVCkpIHtcbiAgICAgICAgICAgIHRoaXMub3V0bGluZV8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlRPUF9MRUZUKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5UT1BfUklHSFQpKSB7XG4gICAgICAgICAgICB0aGlzLm91dGxpbmVfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5UT1BfUklHSFQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlVOQUxJR05FRCkpIHtcbiAgICAgICAgICAgIHRoaXMub3V0bGluZV8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlVOQUxJR05FRCk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19VUEdSQURFRCk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBIYW5kbGVzIGEgY2xpY2sgb24gdGhlIFwiZm9yXCIgZWxlbWVudCwgYnkgcG9zaXRpb25pbmcgdGhlIG1lbnUgYW5kIHRoZW5cbiAgICogdG9nZ2xpbmcgaXQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2dCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLmhhbmRsZUZvckNsaWNrXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50XyAmJiB0aGlzLmZvckVsZW1lbnRfKSB7XG4gICAgICAgIHZhciByZWN0ID0gdGhpcy5mb3JFbGVtZW50Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIGZvclJlY3QgPSB0aGlzLmZvckVsZW1lbnRfLnBhcmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlVOQUxJR05FRCkpIHtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkJPVFRPTV9SSUdIVCkpIHtcbiAgICAgICAgICAgIC8vIFBvc2l0aW9uIGJlbG93IHRoZSBcImZvclwiIGVsZW1lbnQsIGFsaWduZWQgdG8gaXRzIHJpZ2h0LlxuICAgICAgICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLnJpZ2h0ID0gZm9yUmVjdC5yaWdodCAtIHJlY3QucmlnaHQgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLnRvcCA9IHRoaXMuZm9yRWxlbWVudF8ub2Zmc2V0VG9wICsgdGhpcy5mb3JFbGVtZW50Xy5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uVE9QX0xFRlQpKSB7XG4gICAgICAgICAgICAvLyBQb3NpdGlvbiBhYm92ZSB0aGUgXCJmb3JcIiBlbGVtZW50LCBhbGlnbmVkIHRvIGl0cyBsZWZ0LlxuICAgICAgICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLmxlZnQgPSB0aGlzLmZvckVsZW1lbnRfLm9mZnNldExlZnQgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLmJvdHRvbSA9IGZvclJlY3QuYm90dG9tIC0gcmVjdC50b3AgKyAncHgnO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uVE9QX1JJR0hUKSkge1xuICAgICAgICAgICAgLy8gUG9zaXRpb24gYWJvdmUgdGhlIFwiZm9yXCIgZWxlbWVudCwgYWxpZ25lZCB0byBpdHMgcmlnaHQuXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcl8uc3R5bGUucmlnaHQgPSBmb3JSZWN0LnJpZ2h0IC0gcmVjdC5yaWdodCArICdweCc7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lcl8uc3R5bGUuYm90dG9tID0gZm9yUmVjdC5ib3R0b20gLSByZWN0LnRvcCArICdweCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBEZWZhdWx0OiBwb3NpdGlvbiBiZWxvdyB0aGUgXCJmb3JcIiBlbGVtZW50LCBhbGlnbmVkIHRvIGl0cyBsZWZ0LlxuICAgICAgICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLmxlZnQgPSB0aGlzLmZvckVsZW1lbnRfLm9mZnNldExlZnQgKyAncHgnO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXJfLnN0eWxlLnRvcCA9IHRoaXMuZm9yRWxlbWVudF8ub2Zmc2V0VG9wICsgdGhpcy5mb3JFbGVtZW50Xy5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRoaXMudG9nZ2xlKGV2dCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZXMgYSBrZXlib2FyZCBldmVudCBvbiB0aGUgXCJmb3JcIiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5oYW5kbGVGb3JLZXlib2FyZEV2ZW50XyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50XyAmJiB0aGlzLmNvbnRhaW5lcl8gJiYgdGhpcy5mb3JFbGVtZW50Xykge1xuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5JVEVNICsgJzpub3QoW2Rpc2FibGVkXSknKTtcbiAgICAgICAgaWYgKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCA+IDAgJiYgdGhpcy5jb250YWluZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklTX1ZJU0lCTEUpKSB7XG4gICAgICAgICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IHRoaXMuS2V5Y29kZXNfLlVQX0FSUk9XKSB7XG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaXRlbXNbaXRlbXMubGVuZ3RoIC0gMV0uZm9jdXMoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZ0LmtleUNvZGUgPT09IHRoaXMuS2V5Y29kZXNfLkRPV05fQVJST1cpIHtcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpdGVtc1swXS5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICAgKiBIYW5kbGVzIGEga2V5Ym9hcmQgZXZlbnQgb24gYW4gaXRlbS5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUuaGFuZGxlSXRlbUtleWJvYXJkRXZlbnRfID0gZnVuY3Rpb24gKGV2dCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfICYmIHRoaXMuY29udGFpbmVyXykge1xuICAgICAgICB2YXIgaXRlbXMgPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5JVEVNICsgJzpub3QoW2Rpc2FibGVkXSknKTtcbiAgICAgICAgaWYgKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCA+IDAgJiYgdGhpcy5jb250YWluZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklTX1ZJU0lCTEUpKSB7XG4gICAgICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoaXRlbXMpLmluZGV4T2YoZXZ0LnRhcmdldCk7XG4gICAgICAgICAgICBpZiAoZXZ0LmtleUNvZGUgPT09IHRoaXMuS2V5Y29kZXNfLlVQX0FSUk9XKSB7XG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNbY3VycmVudEluZGV4IC0gMV0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtc1tpdGVtcy5sZW5ndGggLSAxXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZ0LmtleUNvZGUgPT09IHRoaXMuS2V5Y29kZXNfLkRPV05fQVJST1cpIHtcbiAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID4gY3VycmVudEluZGV4ICsgMSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtc1tjdXJyZW50SW5kZXggKyAxXS5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zWzBdLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChldnQua2V5Q29kZSA9PT0gdGhpcy5LZXljb2Rlc18uU1BBQ0UgfHwgZXZ0LmtleUNvZGUgPT09IHRoaXMuS2V5Y29kZXNfLkVOVEVSKSB7XG4gICAgICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgLy8gU2VuZCBtb3VzZWRvd24gYW5kIG1vdXNldXAgdG8gdHJpZ2dlciByaXBwbGUuXG4gICAgICAgICAgICAgICAgdmFyIGUgPSBuZXcgTW91c2VFdmVudCgnbW91c2Vkb3duJyk7XG4gICAgICAgICAgICAgICAgZXZ0LnRhcmdldC5kaXNwYXRjaEV2ZW50KGUpO1xuICAgICAgICAgICAgICAgIGUgPSBuZXcgTW91c2VFdmVudCgnbW91c2V1cCcpO1xuICAgICAgICAgICAgICAgIGV2dC50YXJnZXQuZGlzcGF0Y2hFdmVudChlKTtcbiAgICAgICAgICAgICAgICAvLyBTZW5kIGNsaWNrLlxuICAgICAgICAgICAgICAgIGV2dC50YXJnZXQuY2xpY2soKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZ0LmtleUNvZGUgPT09IHRoaXMuS2V5Y29kZXNfLkVTQ0FQRSkge1xuICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICAgKiBIYW5kbGVzIGEgY2xpY2sgZXZlbnQgb24gYW4gaXRlbS5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZ0IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUuaGFuZGxlSXRlbUNsaWNrXyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAoZXZ0LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgIT09IG51bGwpIHtcbiAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFdhaXQgc29tZSB0aW1lIGJlZm9yZSBjbG9zaW5nIG1lbnUsIHNvIHRoZSB1c2VyIGNhbiBzZWUgdGhlIHJpcHBsZS5cbiAgICAgICAgdGhpcy5jbG9zaW5nXyA9IHRydWU7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy5jbG9zaW5nXyA9IGZhbHNlO1xuICAgICAgICB9LmJpbmQodGhpcyksIHRoaXMuQ29uc3RhbnRfLkNMT1NFX1RJTUVPVVQpO1xuICAgIH1cbn07XG4vKipcbiAgICogQ2FsY3VsYXRlcyB0aGUgaW5pdGlhbCBjbGlwIChmb3Igb3BlbmluZyB0aGUgbWVudSkgb3IgZmluYWwgY2xpcCAoZm9yIGNsb3NpbmdcbiAgICogaXQpLCBhbmQgYXBwbGllcyBpdC4gVGhpcyBhbGxvd3MgdXMgdG8gYW5pbWF0ZSBmcm9tIG9yIHRvIHRoZSBjb3JyZWN0IHBvaW50LFxuICAgKiB0aGF0IGlzLCB0aGUgcG9pbnQgaXQncyBhbGlnbmVkIHRvIGluIHRoZSBcImZvclwiIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHQgSGVpZ2h0IG9mIHRoZSBjbGlwIHJlY3RhbmdsZVxuICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGggV2lkdGggb2YgdGhlIGNsaXAgcmVjdGFuZ2xlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5hcHBseUNsaXBfID0gZnVuY3Rpb24gKGhlaWdodCwgd2lkdGgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5VTkFMSUdORUQpKSB7XG4gICAgICAgIC8vIERvIG5vdCBjbGlwLlxuICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLmNsaXAgPSAnJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uQk9UVE9NX1JJR0hUKSkge1xuICAgICAgICAvLyBDbGlwIHRvIHRoZSB0b3AgcmlnaHQgY29ybmVyIG9mIHRoZSBtZW51LlxuICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLmNsaXAgPSAncmVjdCgwICcgKyB3aWR0aCArICdweCAnICsgJzAgJyArIHdpZHRoICsgJ3B4KSc7XG4gICAgfSBlbHNlIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlRPUF9MRUZUKSkge1xuICAgICAgICAvLyBDbGlwIHRvIHRoZSBib3R0b20gbGVmdCBjb3JuZXIgb2YgdGhlIG1lbnUuXG4gICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUuY2xpcCA9ICdyZWN0KCcgKyBoZWlnaHQgKyAncHggMCAnICsgaGVpZ2h0ICsgJ3B4IDApJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uVE9QX1JJR0hUKSkge1xuICAgICAgICAvLyBDbGlwIHRvIHRoZSBib3R0b20gcmlnaHQgY29ybmVyIG9mIHRoZSBtZW51LlxuICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLmNsaXAgPSAncmVjdCgnICsgaGVpZ2h0ICsgJ3B4ICcgKyB3aWR0aCArICdweCAnICsgaGVpZ2h0ICsgJ3B4ICcgKyB3aWR0aCArICdweCknO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIERlZmF1bHQ6IGRvIG5vdCBjbGlwIChzYW1lIGFzIGNsaXBwaW5nIHRvIHRoZSB0b3AgbGVmdCBjb3JuZXIpLlxuICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLmNsaXAgPSAnJztcbiAgICB9XG59O1xuLyoqXG4gICAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdG8gY2xlYW4gdXAgYWZ0ZXIgdGhlIGFuaW1hdGlvbiBlbmRzLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUuYWRkQW5pbWF0aW9uRW5kTGlzdGVuZXJfID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBjbGVhbnVwKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRUcmFuc2l0aW9uRW5kJywgY2xlYW51cCk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0FOSU1BVElORyk7XG4gICAgfS5iaW5kKHRoaXMpO1xuICAgIC8vIFJlbW92ZSBhbmltYXRpb24gY2xhc3Mgb25jZSB0aGUgdHJhbnNpdGlvbiBpcyBkb25lLlxuICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGNsZWFudXApO1xuICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignd2Via2l0VHJhbnNpdGlvbkVuZCcsIGNsZWFudXApO1xufTtcbi8qKlxuICAgKiBEaXNwbGF5cyB0aGUgbWVudS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50XyAmJiB0aGlzLmNvbnRhaW5lcl8gJiYgdGhpcy5vdXRsaW5lXykge1xuICAgICAgICAvLyBNZWFzdXJlIHRoZSBpbm5lciBlbGVtZW50LlxuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5lbGVtZW50Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAgIHZhciB3aWR0aCA9IHRoaXMuZWxlbWVudF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgICAgIC8vIEFwcGx5IHRoZSBpbm5lciBlbGVtZW50J3Mgc2l6ZSB0byB0aGUgY29udGFpbmVyIGFuZCBvdXRsaW5lLlxuICAgICAgICB0aGlzLmNvbnRhaW5lcl8uc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICAgIHRoaXMuY29udGFpbmVyXy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgICAgICB0aGlzLm91dGxpbmVfLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgICB0aGlzLm91dGxpbmVfLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG4gICAgICAgIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSB0aGlzLkNvbnN0YW50Xy5UUkFOU0lUSU9OX0RVUkFUSU9OX1NFQ09ORFMgKiB0aGlzLkNvbnN0YW50Xy5UUkFOU0lUSU9OX0RVUkFUSU9OX0ZSQUNUSU9OO1xuICAgICAgICAvLyBDYWxjdWxhdGUgdHJhbnNpdGlvbiBkZWxheXMgZm9yIGluZGl2aWR1YWwgbWVudSBpdGVtcywgc28gdGhhdCB0aGV5IGZhZGVcbiAgICAgICAgLy8gaW4gb25lIGF0IGEgdGltZS5cbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uSVRFTSk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtRGVsYXkgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uVE9QX0xFRlQpIHx8IHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uVE9QX1JJR0hUKSkge1xuICAgICAgICAgICAgICAgIGl0ZW1EZWxheSA9IChoZWlnaHQgLSBpdGVtc1tpXS5vZmZzZXRUb3AgLSBpdGVtc1tpXS5vZmZzZXRIZWlnaHQpIC8gaGVpZ2h0ICogdHJhbnNpdGlvbkR1cmF0aW9uICsgJ3MnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpdGVtRGVsYXkgPSBpdGVtc1tpXS5vZmZzZXRUb3AgLyBoZWlnaHQgKiB0cmFuc2l0aW9uRHVyYXRpb24gKyAncyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVtc1tpXS5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSBpdGVtRGVsYXk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQXBwbHkgdGhlIGluaXRpYWwgY2xpcCB0byB0aGUgdGV4dCBiZWZvcmUgd2Ugc3RhcnQgYW5pbWF0aW5nLlxuICAgICAgICB0aGlzLmFwcGx5Q2xpcF8oaGVpZ2h0LCB3aWR0aCk7XG4gICAgICAgIC8vIFdhaXQgZm9yIHRoZSBuZXh0IGZyYW1lLCB0dXJuIG9uIGFuaW1hdGlvbiwgYW5kIGFwcGx5IHRoZSBmaW5hbCBjbGlwLlxuICAgICAgICAvLyBBbHNvIG1ha2UgaXQgdmlzaWJsZS4gVGhpcyB0cmlnZ2VycyB0aGUgdHJhbnNpdGlvbnMuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQU5JTUFUSU5HKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUuY2xpcCA9ICdyZWN0KDAgJyArIHdpZHRoICsgJ3B4ICcgKyBoZWlnaHQgKyAncHggMCknO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19WSVNJQkxFKTtcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgYWZ0ZXIgdGhlIGFuaW1hdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgICAgdGhpcy5hZGRBbmltYXRpb25FbmRMaXN0ZW5lcl8oKTtcbiAgICAgICAgLy8gQWRkIGEgY2xpY2sgbGlzdGVuZXIgdG8gdGhlIGRvY3VtZW50LCB0byBjbG9zZSB0aGUgbWVudS5cbiAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiB0aGUgZG9jdW1lbnQgaXMgcHJvY2Vzc2luZyB0aGUgc2FtZSBldmVudCB0aGF0XG4gICAgICAgICAgICAvLyBkaXNwbGF5ZWQgdGhlIG1lbnUgaW4gdGhlIGZpcnN0IHBsYWNlLiBJZiBzbywgZG8gbm90aGluZy5cbiAgICAgICAgICAgIC8vIEFsc28gY2hlY2sgdG8gc2VlIGlmIHRoZSBtZW51IGlzIGluIHRoZSBwcm9jZXNzIG9mIGNsb3NpbmcgaXRzZWxmLCBhbmRcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmcgaW4gdGhhdCBjYXNlLlxuICAgICAgICAgICAgaWYgKGUgIT09IGV2dCAmJiAhdGhpcy5jbG9zaW5nXykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LmJpbmQodGhpcyk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2FsbGJhY2spO1xuICAgIH1cbn07XG5NYXRlcmlhbE1lbnUucHJvdG90eXBlWydzaG93J10gPSBNYXRlcmlhbE1lbnUucHJvdG90eXBlLnNob3c7XG4vKipcbiAgICogSGlkZXMgdGhlIG1lbnUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbE1lbnUucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8gJiYgdGhpcy5jb250YWluZXJfICYmIHRoaXMub3V0bGluZV8pIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uSVRFTSk7XG4gICAgICAgIC8vIFJlbW92ZSBhbGwgdHJhbnNpdGlvbiBkZWxheXM7IG1lbnUgaXRlbXMgZmFkZSBvdXQgY29uY3VycmVudGx5LlxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpdGVtc1tpXS5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIE1lYXN1cmUgdGhlIGlubmVyIGVsZW1lbnQuXG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmVsZW1lbnRfLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy5lbGVtZW50Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICAgICAgLy8gVHVybiBvbiBhbmltYXRpb24sIGFuZCBhcHBseSB0aGUgZmluYWwgY2xpcC4gQWxzbyBtYWtlIGludmlzaWJsZS5cbiAgICAgICAgLy8gVGhpcyB0cmlnZ2VycyB0aGUgdHJhbnNpdGlvbnMuXG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0FOSU1BVElORyk7XG4gICAgICAgIHRoaXMuYXBwbHlDbGlwXyhoZWlnaHQsIHdpZHRoKTtcbiAgICAgICAgdGhpcy5jb250YWluZXJfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19WSVNJQkxFKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgYWZ0ZXIgdGhlIGFuaW1hdGlvbiBpcyBjb21wbGV0ZS5cbiAgICAgICAgdGhpcy5hZGRBbmltYXRpb25FbmRMaXN0ZW5lcl8oKTtcbiAgICB9XG59O1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZVsnaGlkZSddID0gTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5oaWRlO1xuLyoqXG4gICAqIERpc3BsYXlzIG9yIGhpZGVzIHRoZSBtZW51LCBkZXBlbmRpbmcgb24gY3VycmVudCBzdGF0ZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsTWVudS5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKGV2dCkge1xuICAgIGlmICh0aGlzLmNvbnRhaW5lcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVklTSUJMRSkpIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93KGV2dCk7XG4gICAgfVxufTtcbk1hdGVyaWFsTWVudS5wcm90b3R5cGVbJ3RvZ2dsZSddID0gTWF0ZXJpYWxNZW51LnByb3RvdHlwZS50b2dnbGU7XG4vKipcbiAgICogRG93bmdyYWRlIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxNZW51LnByb3RvdHlwZS5tZGxEb3duZ3JhZGVfID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpdGVtcyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLkNzc0NsYXNzZXNfLklURU0pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaXRlbXNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmJvdW5kSXRlbUNsaWNrKTtcbiAgICAgICAgaXRlbXNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuYm91bmRJdGVtS2V5ZG93bik7XG4gICAgfVxufTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbE1lbnUsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsTWVudScsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtbWVudScsXG4gICAgd2lkZ2V0OiB0cnVlXG59KTtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBQcm9ncmVzcyBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsUHJvZ3Jlc3MgPSBmdW5jdGlvbiBNYXRlcmlhbFByb2dyZXNzKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxQcm9ncmVzcyddID0gTWF0ZXJpYWxQcm9ncmVzcztcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUHJvZ3Jlc3MucHJvdG90eXBlLkNvbnN0YW50XyA9IHt9O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxQcm9ncmVzcy5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7IElOREVURVJNSU5BVEVfQ0xBU1M6ICdtZGwtcHJvZ3Jlc3NfX2luZGV0ZXJtaW5hdGUnIH07XG4vKipcbiAgICogU2V0IHRoZSBjdXJyZW50IHByb2dyZXNzIG9mIHRoZSBwcm9ncmVzc2Jhci5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHAgUGVyY2VudGFnZSBvZiB0aGUgcHJvZ3Jlc3MgKDAtMTAwKVxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxQcm9ncmVzcy5wcm90b3R5cGUuc2V0UHJvZ3Jlc3MgPSBmdW5jdGlvbiAocCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLklOREVURVJNSU5BVEVfQ0xBU1MpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wcm9ncmVzc2Jhcl8uc3R5bGUud2lkdGggPSBwICsgJyUnO1xufTtcbk1hdGVyaWFsUHJvZ3Jlc3MucHJvdG90eXBlWydzZXRQcm9ncmVzcyddID0gTWF0ZXJpYWxQcm9ncmVzcy5wcm90b3R5cGUuc2V0UHJvZ3Jlc3M7XG4vKipcbiAgICogU2V0IHRoZSBjdXJyZW50IHByb2dyZXNzIG9mIHRoZSBidWZmZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwIFBlcmNlbnRhZ2Ugb2YgdGhlIGJ1ZmZlciAoMC0xMDApXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFByb2dyZXNzLnByb3RvdHlwZS5zZXRCdWZmZXIgPSBmdW5jdGlvbiAocCkge1xuICAgIHRoaXMuYnVmZmVyYmFyXy5zdHlsZS53aWR0aCA9IHAgKyAnJSc7XG4gICAgdGhpcy5hdXhiYXJfLnN0eWxlLndpZHRoID0gMTAwIC0gcCArICclJztcbn07XG5NYXRlcmlhbFByb2dyZXNzLnByb3RvdHlwZVsnc2V0QnVmZmVyJ10gPSBNYXRlcmlhbFByb2dyZXNzLnByb3RvdHlwZS5zZXRCdWZmZXI7XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsUHJvZ3Jlc3MucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsLmNsYXNzTmFtZSA9ICdwcm9ncmVzc2JhciBiYXIgYmFyMSc7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgICB0aGlzLnByb2dyZXNzYmFyXyA9IGVsO1xuICAgICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbC5jbGFzc05hbWUgPSAnYnVmZmVyYmFyIGJhciBiYXIyJztcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIHRoaXMuYnVmZmVyYmFyXyA9IGVsO1xuICAgICAgICBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbC5jbGFzc05hbWUgPSAnYXV4YmFyIGJhciBiYXIzJztcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIHRoaXMuYXV4YmFyXyA9IGVsO1xuICAgICAgICB0aGlzLnByb2dyZXNzYmFyXy5zdHlsZS53aWR0aCA9ICcwJSc7XG4gICAgICAgIHRoaXMuYnVmZmVyYmFyXy5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgdGhpcy5hdXhiYXJfLnN0eWxlLndpZHRoID0gJzAlJztcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKCdpcy11cGdyYWRlZCcpO1xuICAgIH1cbn07XG4vKipcbiAgICogRG93bmdyYWRlIHRoZSBjb21wb25lbnRcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFByb2dyZXNzLnByb3RvdHlwZS5tZGxEb3duZ3JhZGVfID0gZnVuY3Rpb24gKCkge1xuICAgIHdoaWxlICh0aGlzLmVsZW1lbnRfLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnRfLmZpcnN0Q2hpbGQpO1xuICAgIH1cbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxQcm9ncmVzcyxcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxQcm9ncmVzcycsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtcHJvZ3Jlc3MnLFxuICAgIHdpZGdldDogdHJ1ZVxufSk7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgUmFkaW8gTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbFJhZGlvID0gZnVuY3Rpb24gTWF0ZXJpYWxSYWRpbyhlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsUmFkaW8nXSA9IE1hdGVyaWFsUmFkaW87XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5Db25zdGFudF8gPSB7IFRJTllfVElNRU9VVDogMC4wMDEgfTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIElTX0ZPQ1VTRUQ6ICdpcy1mb2N1c2VkJyxcbiAgICBJU19ESVNBQkxFRDogJ2lzLWRpc2FibGVkJyxcbiAgICBJU19DSEVDS0VEOiAnaXMtY2hlY2tlZCcsXG4gICAgSVNfVVBHUkFERUQ6ICdpcy11cGdyYWRlZCcsXG4gICAgSlNfUkFESU86ICdtZGwtanMtcmFkaW8nLFxuICAgIFJBRElPX0JUTjogJ21kbC1yYWRpb19fYnV0dG9uJyxcbiAgICBSQURJT19PVVRFUl9DSVJDTEU6ICdtZGwtcmFkaW9fX291dGVyLWNpcmNsZScsXG4gICAgUkFESU9fSU5ORVJfQ0lSQ0xFOiAnbWRsLXJhZGlvX19pbm5lci1jaXJjbGUnLFxuICAgIFJJUFBMRV9FRkZFQ1Q6ICdtZGwtanMtcmlwcGxlLWVmZmVjdCcsXG4gICAgUklQUExFX0lHTk9SRV9FVkVOVFM6ICdtZGwtanMtcmlwcGxlLWVmZmVjdC0taWdub3JlLWV2ZW50cycsXG4gICAgUklQUExFX0NPTlRBSU5FUjogJ21kbC1yYWRpb19fcmlwcGxlLWNvbnRhaW5lcicsXG4gICAgUklQUExFX0NFTlRFUjogJ21kbC1yaXBwbGUtLWNlbnRlcicsXG4gICAgUklQUExFOiAnbWRsLXJpcHBsZSdcbn07XG4vKipcbiAgICogSGFuZGxlIGNoYW5nZSBvZiBzdGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUub25DaGFuZ2VfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gU2luY2Ugb3RoZXIgcmFkaW8gYnV0dG9ucyBkb24ndCBnZXQgY2hhbmdlIGV2ZW50cywgd2UgbmVlZCB0byBsb29rIGZvclxuICAgIC8vIHRoZW0gdG8gdXBkYXRlIHRoZWlyIGNsYXNzZXMuXG4gICAgdmFyIHJhZGlvcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUodGhpcy5Dc3NDbGFzc2VzXy5KU19SQURJTyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByYWRpb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGJ1dHRvbiA9IHJhZGlvc1tpXS5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uUkFESU9fQlROKTtcbiAgICAgICAgLy8gRGlmZmVyZW50IG5hbWUgPT0gZGlmZmVyZW50IGdyb3VwLCBzbyBubyBwb2ludCB1cGRhdGluZyB0aG9zZS5cbiAgICAgICAgaWYgKGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ25hbWUnKSA9PT0gdGhpcy5idG5FbGVtZW50Xy5nZXRBdHRyaWJ1dGUoJ25hbWUnKSkge1xuICAgICAgICAgICAgcmFkaW9zW2ldWydNYXRlcmlhbFJhZGlvJ10udXBkYXRlQ2xhc3Nlc18oKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vKipcbiAgICogSGFuZGxlIGZvY3VzLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5vbkZvY3VzXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0ZPQ1VTRUQpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgbG9zdCBmb2N1cy5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUub25CbHVyXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0ZPQ1VTRUQpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgbW91c2V1cC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUub25Nb3VzZXVwXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuYmx1cl8oKTtcbn07XG4vKipcbiAgICogVXBkYXRlIGNsYXNzZXMuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUudXBkYXRlQ2xhc3Nlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jaGVja0Rpc2FibGVkKCk7XG4gICAgdGhpcy5jaGVja1RvZ2dsZVN0YXRlKCk7XG59O1xuLyoqXG4gICAqIEFkZCBibHVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLmJsdXJfID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFRPRE86IGZpZ3VyZSBvdXQgd2h5IHRoZXJlJ3MgYSBmb2N1cyBldmVudCBiZWluZyBmaXJlZCBhZnRlciBvdXIgYmx1cixcbiAgICAvLyBzbyB0aGF0IHdlIGNhbiBhdm9pZCB0aGlzIGhhY2suXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmJ0bkVsZW1lbnRfLmJsdXIoKTtcbiAgICB9LmJpbmQodGhpcyksIHRoaXMuQ29uc3RhbnRfLlRJTllfVElNRU9VVCk7XG59O1xuLy8gUHVibGljIG1ldGhvZHMuXG4vKipcbiAgICogQ2hlY2sgdGhlIGNvbXBvbmVudHMgZGlzYWJsZWQgc3RhdGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5jaGVja0Rpc2FibGVkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmJ0bkVsZW1lbnRfLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0RJU0FCTEVEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVNBQkxFRCk7XG4gICAgfVxufTtcbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlWydjaGVja0Rpc2FibGVkJ10gPSBNYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5jaGVja0Rpc2FibGVkO1xuLyoqXG4gICAqIENoZWNrIHRoZSBjb21wb25lbnRzIHRvZ2dsZWQgc3RhdGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5jaGVja1RvZ2dsZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmJ0bkVsZW1lbnRfLmNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ0hFQ0tFRCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ0hFQ0tFRCk7XG4gICAgfVxufTtcbk1hdGVyaWFsUmFkaW8ucHJvdG90eXBlWydjaGVja1RvZ2dsZVN0YXRlJ10gPSBNYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5jaGVja1RvZ2dsZVN0YXRlO1xuLyoqXG4gICAqIERpc2FibGUgcmFkaW8uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYnRuRWxlbWVudF8uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZVsnZGlzYWJsZSddID0gTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuZGlzYWJsZTtcbi8qKlxuICAgKiBFbmFibGUgcmFkaW8uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5idG5FbGVtZW50Xy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZVsnZW5hYmxlJ10gPSBNYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5lbmFibGU7XG4vKipcbiAgICogQ2hlY2sgcmFkaW8uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmJ0bkVsZW1lbnRfLmNoZWNrZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZVsnY2hlY2snXSA9IE1hdGVyaWFsUmFkaW8ucHJvdG90eXBlLmNoZWNrO1xuLyoqXG4gICAqIFVuY2hlY2sgcmFkaW8uXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZS51bmNoZWNrID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYnRuRWxlbWVudF8uY2hlY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbFJhZGlvLnByb3RvdHlwZVsndW5jaGVjayddID0gTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUudW5jaGVjaztcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxSYWRpby5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICB0aGlzLmJ0bkVsZW1lbnRfID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uUkFESU9fQlROKTtcbiAgICAgICAgdmFyIG91dGVyQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBvdXRlckNpcmNsZS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUkFESU9fT1VURVJfQ0lSQ0xFKTtcbiAgICAgICAgdmFyIGlubmVyQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpbm5lckNpcmNsZS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUkFESU9fSU5ORVJfQ0lSQ0xFKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZChvdXRlckNpcmNsZSk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQoaW5uZXJDaXJjbGUpO1xuICAgICAgICB2YXIgcmlwcGxlQ29udGFpbmVyO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfRUZGRUNUKSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0lHTk9SRV9FVkVOVFMpO1xuICAgICAgICAgICAgcmlwcGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmlwcGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfQ09OVEFJTkVSKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0VGRkVDVCk7XG4gICAgICAgICAgICByaXBwbGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9DRU5URVIpO1xuICAgICAgICAgICAgcmlwcGxlQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLm9uTW91c2V1cF8uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB2YXIgcmlwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmlwcGxlLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEUpO1xuICAgICAgICAgICAgcmlwcGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpcHBsZSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKHJpcHBsZUNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5idG5FbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm9uQ2hhbmdlXy5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5idG5FbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMub25Gb2N1c18uYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuYnRuRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMub25CbHVyXy5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5vbk1vdXNldXBfLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX1VQR1JBREVEKTtcbiAgICB9XG59O1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsUmFkaW8sXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsUmFkaW8nLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLXJhZGlvJyxcbiAgICB3aWRnZXQ6IHRydWVcbn0pO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIFNsaWRlciBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsU2xpZGVyID0gZnVuY3Rpb24gTWF0ZXJpYWxTbGlkZXIoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEJyb3dzZXIgZmVhdHVyZSBkZXRlY3Rpb24uXG4gICAgdGhpcy5pc0lFXyA9IHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZDtcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxTbGlkZXInXSA9IE1hdGVyaWFsU2xpZGVyO1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlLkNvbnN0YW50XyA9IHt9O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIElFX0NPTlRBSU5FUjogJ21kbC1zbGlkZXJfX2llLWNvbnRhaW5lcicsXG4gICAgU0xJREVSX0NPTlRBSU5FUjogJ21kbC1zbGlkZXJfX2NvbnRhaW5lcicsXG4gICAgQkFDS0dST1VORF9GTEVYOiAnbWRsLXNsaWRlcl9fYmFja2dyb3VuZC1mbGV4JyxcbiAgICBCQUNLR1JPVU5EX0xPV0VSOiAnbWRsLXNsaWRlcl9fYmFja2dyb3VuZC1sb3dlcicsXG4gICAgQkFDS0dST1VORF9VUFBFUjogJ21kbC1zbGlkZXJfX2JhY2tncm91bmQtdXBwZXInLFxuICAgIElTX0xPV0VTVF9WQUxVRTogJ2lzLWxvd2VzdC12YWx1ZScsXG4gICAgSVNfVVBHUkFERUQ6ICdpcy11cGdyYWRlZCdcbn07XG4vKipcbiAgICogSGFuZGxlIGlucHV0IG9uIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5vbklucHV0XyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMudXBkYXRlVmFsdWVTdHlsZXNfKCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBjaGFuZ2Ugb24gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlLm9uQ2hhbmdlXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMudXBkYXRlVmFsdWVTdHlsZXNfKCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBtb3VzZXVwIG9uIGVsZW1lbnQuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5vbk1vdXNlVXBfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgZXZlbnQudGFyZ2V0LmJsdXIoKTtcbn07XG4vKipcbiAgICogSGFuZGxlIG1vdXNlZG93biBvbiBjb250YWluZXIgZWxlbWVudC5cbiAgICogVGhpcyBoYW5kbGVyIGlzIHB1cnBvc2UgaXMgdG8gbm90IHJlcXVpcmUgdGhlIHVzZSB0byBjbGlja1xuICAgKiBleGFjdGx5IG9uIHRoZSAycHggc2xpZGVyIGVsZW1lbnQsIGFzIEZpcmVGb3ggc2VlbXMgdG8gYmUgdmVyeVxuICAgKiBzdHJpY3QgYWJvdXQgdGhpcy5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqIEBzdXBwcmVzcyB7bWlzc2luZ1Byb3BlcnRpZXN9XG4gICAqL1xuTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlLm9uQ29udGFpbmVyTW91c2VEb3duXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vIElmIHRoaXMgY2xpY2sgaXMgbm90IG9uIHRoZSBwYXJlbnQgZWxlbWVudCAoYnV0IHJhdGhlciBzb21lIGNoaWxkKVxuICAgIC8vIGlnbm9yZS4gSXQgbWF5IHN0aWxsIGJ1YmJsZSB1cC5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ICE9PSB0aGlzLmVsZW1lbnRfLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBEaXNjYXJkIHRoZSBvcmlnaW5hbCBldmVudCBhbmQgY3JlYXRlIGEgbmV3IGV2ZW50IHRoYXRcbiAgICAvLyBpcyBvbiB0aGUgc2xpZGVyIGVsZW1lbnQuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgbmV3RXZlbnQgPSBuZXcgTW91c2VFdmVudCgnbW91c2Vkb3duJywge1xuICAgICAgICB0YXJnZXQ6IGV2ZW50LnRhcmdldCxcbiAgICAgICAgYnV0dG9uczogZXZlbnQuYnV0dG9ucyxcbiAgICAgICAgY2xpZW50WDogZXZlbnQuY2xpZW50WCxcbiAgICAgICAgY2xpZW50WTogdGhpcy5lbGVtZW50Xy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS55XG4gICAgfSk7XG4gICAgdGhpcy5lbGVtZW50Xy5kaXNwYXRjaEV2ZW50KG5ld0V2ZW50KTtcbn07XG4vKipcbiAgICogSGFuZGxlIHVwZGF0aW5nIG9mIHZhbHVlcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFNsaWRlci5wcm90b3R5cGUudXBkYXRlVmFsdWVTdHlsZXNfID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIENhbGN1bGF0ZSBhbmQgYXBwbHkgcGVyY2VudGFnZXMgdG8gZGl2IHN0cnVjdHVyZSBiZWhpbmQgc2xpZGVyLlxuICAgIHZhciBmcmFjdGlvbiA9ICh0aGlzLmVsZW1lbnRfLnZhbHVlIC0gdGhpcy5lbGVtZW50Xy5taW4pIC8gKHRoaXMuZWxlbWVudF8ubWF4IC0gdGhpcy5lbGVtZW50Xy5taW4pO1xuICAgIGlmIChmcmFjdGlvbiA9PT0gMCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19MT1dFU1RfVkFMVUUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0xPV0VTVF9WQUxVRSk7XG4gICAgfVxuICAgIGlmICghdGhpcy5pc0lFXykge1xuICAgICAgICB0aGlzLmJhY2tncm91bmRMb3dlcl8uc3R5bGUuZmxleCA9IGZyYWN0aW9uO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRMb3dlcl8uc3R5bGUud2Via2l0RmxleCA9IGZyYWN0aW9uO1xuICAgICAgICB0aGlzLmJhY2tncm91bmRVcHBlcl8uc3R5bGUuZmxleCA9IDEgLSBmcmFjdGlvbjtcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kVXBwZXJfLnN0eWxlLndlYmtpdEZsZXggPSAxIC0gZnJhY3Rpb247XG4gICAgfVxufTtcbi8vIFB1YmxpYyBtZXRob2RzLlxuLyoqXG4gICAqIERpc2FibGUgc2xpZGVyLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50Xy5kaXNhYmxlZCA9IHRydWU7XG59O1xuTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlWydkaXNhYmxlJ10gPSBNYXRlcmlhbFNsaWRlci5wcm90b3R5cGUuZGlzYWJsZTtcbi8qKlxuICAgKiBFbmFibGUgc2xpZGVyLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmRpc2FibGVkID0gZmFsc2U7XG59O1xuTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlWydlbmFibGUnXSA9IE1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5lbmFibGU7XG4vKipcbiAgICogVXBkYXRlIHNsaWRlciB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIFRoZSB2YWx1ZSB0byB3aGljaCB0byBzZXQgdGhlIGNvbnRyb2wgKG9wdGlvbmFsKS5cbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5jaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlVmFsdWVTdHlsZXNfKCk7XG59O1xuTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlWydjaGFuZ2UnXSA9IE1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5jaGFuZ2U7XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsU2xpZGVyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIGlmICh0aGlzLmlzSUVfKSB7XG4gICAgICAgICAgICAvLyBTaW5jZSB3ZSBuZWVkIHRvIHNwZWNpZnkgYSB2ZXJ5IGxhcmdlIGhlaWdodCBpbiBJRSBkdWUgdG9cbiAgICAgICAgICAgIC8vIGltcGxlbWVudGF0aW9uIGxpbWl0YXRpb25zLCB3ZSBhZGQgYSBwYXJlbnQgaGVyZSB0aGF0IHRyaW1zIGl0IGRvd24gdG9cbiAgICAgICAgICAgIC8vIGEgcmVhc29uYWJsZSBzaXplLlxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lcklFID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb250YWluZXJJRS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSUVfQ09OVEFJTkVSKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8ucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoY29udGFpbmVySUUsIHRoaXMuZWxlbWVudF8pO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudF8pO1xuICAgICAgICAgICAgY29udGFpbmVySUUuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50Xyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBGb3Igbm9uLUlFIGJyb3dzZXJzLCB3ZSBuZWVkIGEgZGl2IHN0cnVjdHVyZSB0aGF0IHNpdHMgYmVoaW5kIHRoZVxuICAgICAgICAgICAgLy8gc2xpZGVyIGFuZCBhbGxvd3MgdXMgdG8gc3R5bGUgdGhlIGxlZnQgYW5kIHJpZ2h0IHNpZGVzIG9mIGl0IHdpdGhcbiAgICAgICAgICAgIC8vIGRpZmZlcmVudCBjb2xvcnMuXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlNMSURFUl9DT05UQUlORVIpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShjb250YWluZXIsIHRoaXMuZWxlbWVudF8pO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudF8pO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudF8pO1xuICAgICAgICAgICAgdmFyIGJhY2tncm91bmRGbGV4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kRmxleC5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uQkFDS0dST1VORF9GTEVYKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kRmxleCk7XG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRMb3dlcl8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZExvd2VyXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uQkFDS0dST1VORF9MT1dFUik7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kRmxleC5hcHBlbmRDaGlsZCh0aGlzLmJhY2tncm91bmRMb3dlcl8pO1xuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kVXBwZXJfID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmRVcHBlcl8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkJBQ0tHUk9VTkRfVVBQRVIpO1xuICAgICAgICAgICAgYmFja2dyb3VuZEZsZXguYXBwZW5kQ2hpbGQodGhpcy5iYWNrZ3JvdW5kVXBwZXJfKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmJvdW5kSW5wdXRIYW5kbGVyID0gdGhpcy5vbklucHV0Xy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdW5kQ2hhbmdlSGFuZGxlciA9IHRoaXMub25DaGFuZ2VfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYm91bmRNb3VzZVVwSGFuZGxlciA9IHRoaXMub25Nb3VzZVVwXy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmJvdW5kQ29udGFpbmVyTW91c2VEb3duSGFuZGxlciA9IHRoaXMub25Db250YWluZXJNb3VzZURvd25fLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLmJvdW5kSW5wdXRIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmJvdW5kQ2hhbmdlSGFuZGxlcik7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRNb3VzZVVwSGFuZGxlcik7XG4gICAgICAgIHRoaXMuZWxlbWVudF8ucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmJvdW5kQ29udGFpbmVyTW91c2VEb3duSGFuZGxlcik7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWVTdHlsZXNfKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX1VQR1JBREVEKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIERvd25ncmFkZSB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTbGlkZXIucHJvdG90eXBlLm1kbERvd25ncmFkZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuYm91bmRJbnB1dEhhbmRsZXIpO1xuICAgIHRoaXMuZWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5ib3VuZENoYW5nZUhhbmRsZXIpO1xuICAgIHRoaXMuZWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRNb3VzZVVwSGFuZGxlcik7XG4gICAgdGhpcy5lbGVtZW50Xy5wYXJlbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuYm91bmRDb250YWluZXJNb3VzZURvd25IYW5kbGVyKTtcbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxTbGlkZXIsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsU2xpZGVyJyxcbiAgICBjc3NDbGFzczogJ21kbC1qcy1zbGlkZXInLFxuICAgIHdpZGdldDogdHJ1ZVxufSk7XG4vKipcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBTbmFja2JhciBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsU25hY2tiYXIgPSBmdW5jdGlvbiBNYXRlcmlhbFNuYWNrYmFyKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxTbmFja2JhciddID0gTWF0ZXJpYWxTbmFja2Jhcjtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU25hY2tiYXIucHJvdG90eXBlLmNzc0NsYXNzZXNfID0ge1xuICAgIFNOQUNLQkFSOiAnbWRsLXNuYWNrYmFyJyxcbiAgICBNRVNTQUdFOiAnbWRsLXNuYWNrYmFyX190ZXh0JyxcbiAgICBBQ1RJT046ICdtZGwtc25hY2tiYXJfX2FjdGlvbicsXG4gICAgQUNUSVZFOiAnaXMtYWN0aXZlJ1xufTtcbi8qKlxuICAgKiBDcmVhdGUgdGhlIGludGVybmFsIHNuYWNrYmFyIG1hcmt1cC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFNuYWNrYmFyLnByb3RvdHlwZS5jcmVhdGVTbmFja2Jhcl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zbmFja2JhckVsZW1lbnRfID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy50ZXh0RWxlbWVudF8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLnNuYWNrYmFyRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLmNzc0NsYXNzZXNfLlNOQUNLQkFSKTtcbiAgICB0aGlzLnRleHRFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuY3NzQ2xhc3Nlc18uTUVTU0FHRSk7XG4gICAgdGhpcy5zbmFja2JhckVsZW1lbnRfLmFwcGVuZENoaWxkKHRoaXMudGV4dEVsZW1lbnRfKTtcbiAgICB0aGlzLnNuYWNrYmFyRWxlbWVudF8uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuICAgIGlmICh0aGlzLmFjdGlvbkhhbmRsZXJfKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uRWxlbWVudF8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGhpcy5hY3Rpb25FbGVtZW50Xy50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIHRoaXMuYWN0aW9uRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLmNzc0NsYXNzZXNfLkFDVElPTik7XG4gICAgICAgIHRoaXMuYWN0aW9uRWxlbWVudF8udGV4dENvbnRlbnQgPSB0aGlzLmFjdGlvblRleHRfO1xuICAgICAgICB0aGlzLnNuYWNrYmFyRWxlbWVudF8uYXBwZW5kQ2hpbGQodGhpcy5hY3Rpb25FbGVtZW50Xyk7XG4gICAgICAgIHRoaXMuYWN0aW9uRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFjdGlvbkhhbmRsZXJfKTtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZCh0aGlzLnNuYWNrYmFyRWxlbWVudF8pO1xuICAgIHRoaXMudGV4dEVsZW1lbnRfLnRleHRDb250ZW50ID0gdGhpcy5tZXNzYWdlXztcbiAgICB0aGlzLnNuYWNrYmFyRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLmNzc0NsYXNzZXNfLkFDVElWRSk7XG4gICAgdGhpcy5zbmFja2JhckVsZW1lbnRfLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG4gICAgc2V0VGltZW91dCh0aGlzLmNsZWFudXBfLmJpbmQodGhpcyksIHRoaXMudGltZW91dF8pO1xufTtcbi8qKlxuICAgKiBSZW1vdmUgdGhlIGludGVybmFsIHNuYWNrYmFyIG1hcmt1cC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFNuYWNrYmFyLnByb3RvdHlwZS5yZW1vdmVTbmFja2Jhcl8gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuYWN0aW9uRWxlbWVudF8gJiYgdGhpcy5hY3Rpb25FbGVtZW50Xy5wYXJlbnROb2RlKSB7XG4gICAgICAgIHRoaXMuYWN0aW9uRWxlbWVudF8ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmFjdGlvbkVsZW1lbnRfKTtcbiAgICB9XG4gICAgdGhpcy50ZXh0RWxlbWVudF8ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnRleHRFbGVtZW50Xyk7XG4gICAgdGhpcy5zbmFja2JhckVsZW1lbnRfLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5zbmFja2JhckVsZW1lbnRfKTtcbn07XG4vKipcbiAgICogQ3JlYXRlIHRoZSBpbnRlcm5hbCBzbmFja2JhciBtYXJrdXAuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkYXRhIFRoZSBkYXRhIGZvciB0aGUgbm90aWZpY2F0aW9uLlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxTbmFja2Jhci5wcm90b3R5cGUuc2hvd1NuYWNrYmFyID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBpZiAoZGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIHByb3ZpZGUgYSBkYXRhIG9iamVjdCB3aXRoIGF0IGxlYXN0IGEgbWVzc2FnZSB0byBkaXNwbGF5LicpO1xuICAgIH1cbiAgICBpZiAoZGF0YVsnbWVzc2FnZSddID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgcHJvdmlkZSBhIG1lc3NhZ2UgdG8gYmUgZGlzcGxheWVkLicpO1xuICAgIH1cbiAgICBpZiAoZGF0YVsnYWN0aW9uSGFuZGxlciddICYmICFkYXRhWydhY3Rpb25UZXh0J10pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgcHJvdmlkZSBhY3Rpb24gdGV4dCB3aXRoIHRoZSBoYW5kbGVyLicpO1xuICAgIH1cbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5xdWV1ZWROb3RpZmljYXRpb25zXy5wdXNoKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tZXNzYWdlXyA9IGRhdGFbJ21lc3NhZ2UnXTtcbiAgICAgICAgaWYgKGRhdGFbJ3RpbWVvdXQnXSkge1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0XyA9IGRhdGFbJ3RpbWVvdXQnXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGltZW91dF8gPSA4MDAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhWydhY3Rpb25IYW5kbGVyJ10pIHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uSGFuZGxlcl8gPSBkYXRhWydhY3Rpb25IYW5kbGVyJ107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGFbJ2FjdGlvblRleHQnXSkge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25UZXh0XyA9IGRhdGFbJ2FjdGlvblRleHQnXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNyZWF0ZVNuYWNrYmFyXygpO1xuICAgIH1cbn07XG5NYXRlcmlhbFNuYWNrYmFyLnByb3RvdHlwZVsnc2hvd1NuYWNrYmFyJ10gPSBNYXRlcmlhbFNuYWNrYmFyLnByb3RvdHlwZS5zaG93U25hY2tiYXI7XG4vKipcbiAgICogQ2hlY2sgaWYgdGhlIHF1ZXVlIGhhcyBpdGVtcyB3aXRoaW4gaXQuXG4gICAqIElmIGl0IGRvZXMsIGRpc3BsYXkgdGhlIG5leHQgZW50cnkuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTbmFja2Jhci5wcm90b3R5cGUuY2hlY2tRdWV1ZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMucXVldWVkTm90aWZpY2F0aW9uc18ubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnNob3dTbmFja2Jhcih0aGlzLnF1ZXVlZE5vdGlmaWNhdGlvbnNfLnNoaWZ0KCkpO1xuICAgIH1cbn07XG4vKipcbiAgICogQ2xlYW51cCB0aGUgc25hY2tiYXIgZXZlbnQgbGlzdGVuZXJzIGFuZCBhY2Nlc3NpYmxpdHkgYXR0cmlidXRlcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFNuYWNrYmFyLnByb3RvdHlwZS5jbGVhbnVwXyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNuYWNrYmFyRWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNzc0NsYXNzZXNfLkFDVElWRSk7XG4gICAgdGhpcy5zbmFja2JhckVsZW1lbnRfLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICBpZiAodGhpcy5hY3Rpb25FbGVtZW50Xykge1xuICAgICAgICB0aGlzLmFjdGlvbkVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hY3Rpb25IYW5kbGVyXyk7XG4gICAgfVxuICAgIHRoaXMuc2V0RGVmYXVsdHNfKCk7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnJlbW92ZVNuYWNrYmFyXygpO1xuICAgIHRoaXMuY2hlY2tRdWV1ZV8oKTtcbn07XG4vKipcbiAgICogQ2xlYW4gcHJvcGVydGllcyB0byBhdm9pZCBvbmUgZW50cnkgYWZmZWN0aW5nIGFub3RoZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTbmFja2Jhci5wcm90b3R5cGUuc2V0RGVmYXVsdHNfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuYWN0aW9uSGFuZGxlcl8gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5tZXNzYWdlXyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLmFjdGlvblRleHRfID0gdW5kZWZpbmVkO1xufTtcbi8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBvYmplY3QuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFNuYWNrYmFyLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuc2V0RGVmYXVsdHNfKCk7XG4gICAgdGhpcy5xdWV1ZWROb3RpZmljYXRpb25zXyA9IFtdO1xufTtcbk1hdGVyaWFsU25hY2tiYXIucHJvdG90eXBlWydpbml0J10gPSBNYXRlcmlhbFNuYWNrYmFyLnByb3RvdHlwZS5pbml0O1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsU25hY2tiYXIsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsU25hY2tiYXInLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLXNuYWNrYmFyJyxcbiAgICB3aWRnZXQ6IHRydWVcbn0pO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIFNwaW5uZXIgTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKi9cbnZhciBNYXRlcmlhbFNwaW5uZXIgPSBmdW5jdGlvbiBNYXRlcmlhbFNwaW5uZXIoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbFNwaW5uZXInXSA9IE1hdGVyaWFsU3Bpbm5lcjtcbi8qKlxuICAgKiBTdG9yZSBjb25zdGFudHMgaW4gb25lIHBsYWNlIHNvIHRoZXkgY2FuIGJlIHVwZGF0ZWQgZWFzaWx5LlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nIHwgbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU3Bpbm5lci5wcm90b3R5cGUuQ29uc3RhbnRfID0geyBNRExfU1BJTk5FUl9MQVlFUl9DT1VOVDogNCB9O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBNRExfU1BJTk5FUl9MQVlFUjogJ21kbC1zcGlubmVyX19sYXllcicsXG4gICAgTURMX1NQSU5ORVJfQ0lSQ0xFX0NMSVBQRVI6ICdtZGwtc3Bpbm5lcl9fY2lyY2xlLWNsaXBwZXInLFxuICAgIE1ETF9TUElOTkVSX0NJUkNMRTogJ21kbC1zcGlubmVyX19jaXJjbGUnLFxuICAgIE1ETF9TUElOTkVSX0dBUF9QQVRDSDogJ21kbC1zcGlubmVyX19nYXAtcGF0Y2gnLFxuICAgIE1ETF9TUElOTkVSX0xFRlQ6ICdtZGwtc3Bpbm5lcl9fbGVmdCcsXG4gICAgTURMX1NQSU5ORVJfUklHSFQ6ICdtZGwtc3Bpbm5lcl9fcmlnaHQnXG59O1xuLyoqXG4gICAqIEF1eGlsaWFyeSBtZXRob2QgdG8gY3JlYXRlIGEgc3Bpbm5lciBsYXllci5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IEluZGV4IG9mIHRoZSBsYXllciB0byBiZSBjcmVhdGVkLlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZS5jcmVhdGVMYXllciA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgIHZhciBsYXllciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxheWVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5NRExfU1BJTk5FUl9MQVlFUik7XG4gICAgbGF5ZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk1ETF9TUElOTkVSX0xBWUVSICsgJy0nICsgaW5kZXgpO1xuICAgIHZhciBsZWZ0Q2xpcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxlZnRDbGlwcGVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5NRExfU1BJTk5FUl9DSVJDTEVfQ0xJUFBFUik7XG4gICAgbGVmdENsaXBwZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk1ETF9TUElOTkVSX0xFRlQpO1xuICAgIHZhciBnYXBQYXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdhcFBhdGNoLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5NRExfU1BJTk5FUl9HQVBfUEFUQ0gpO1xuICAgIHZhciByaWdodENsaXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByaWdodENsaXBwZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk1ETF9TUElOTkVSX0NJUkNMRV9DTElQUEVSKTtcbiAgICByaWdodENsaXBwZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk1ETF9TUElOTkVSX1JJR0hUKTtcbiAgICB2YXIgY2lyY2xlT3duZXJzID0gW1xuICAgICAgICBsZWZ0Q2xpcHBlcixcbiAgICAgICAgZ2FwUGF0Y2gsXG4gICAgICAgIHJpZ2h0Q2xpcHBlclxuICAgIF07XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaXJjbGVPd25lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjaXJjbGUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk1ETF9TUElOTkVSX0NJUkNMRSk7XG4gICAgICAgIGNpcmNsZU93bmVyc1tpXS5hcHBlbmRDaGlsZChjaXJjbGUpO1xuICAgIH1cbiAgICBsYXllci5hcHBlbmRDaGlsZChsZWZ0Q2xpcHBlcik7XG4gICAgbGF5ZXIuYXBwZW5kQ2hpbGQoZ2FwUGF0Y2gpO1xuICAgIGxheWVyLmFwcGVuZENoaWxkKHJpZ2h0Q2xpcHBlcik7XG4gICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZChsYXllcik7XG59O1xuTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZVsnY3JlYXRlTGF5ZXInXSA9IE1hdGVyaWFsU3Bpbm5lci5wcm90b3R5cGUuY3JlYXRlTGF5ZXI7XG4vKipcbiAgICogU3RvcHMgdGhlIHNwaW5uZXIgYW5pbWF0aW9uLlxuICAgKiBQdWJsaWMgbWV0aG9kIGZvciB1c2VycyB3aG8gbmVlZCB0byBzdG9wIHRoZSBzcGlubmVyIGZvciBhbnkgcmVhc29uLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG59O1xuTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZVsnc3RvcCddID0gTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZS5zdG9wO1xuLyoqXG4gICAqIFN0YXJ0cyB0aGUgc3Bpbm5lciBhbmltYXRpb24uXG4gICAqIFB1YmxpYyBtZXRob2QgZm9yIHVzZXJzIHdobyBuZWVkIHRvIG1hbnVhbGx5IHN0YXJ0IHRoZSBzcGlubmVyIGZvciBhbnkgcmVhc29uXG4gICAqIChpbnN0ZWFkIG9mIGp1c3QgYWRkaW5nIHRoZSAnaXMtYWN0aXZlJyBjbGFzcyB0byB0aGVpciBtYXJrdXApLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxTcGlubmVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xufTtcbk1hdGVyaWFsU3Bpbm5lci5wcm90b3R5cGVbJ3N0YXJ0J10gPSBNYXRlcmlhbFNwaW5uZXIucHJvdG90eXBlLnN0YXJ0O1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbFNwaW5uZXIucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gdGhpcy5Db25zdGFudF8uTURMX1NQSU5ORVJfTEFZRVJfQ09VTlQ7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVMYXllcihpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQoJ2lzLXVwZ3JhZGVkJyk7XG4gICAgfVxufTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbFNwaW5uZXIsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsU3Bpbm5lcicsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtc3Bpbm5lcicsXG4gICAgd2lkZ2V0OiB0cnVlXG59KTtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBDaGVja2JveCBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsU3dpdGNoID0gZnVuY3Rpb24gTWF0ZXJpYWxTd2l0Y2goZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbFN3aXRjaCddID0gTWF0ZXJpYWxTd2l0Y2g7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuQ29uc3RhbnRfID0geyBUSU5ZX1RJTUVPVVQ6IDAuMDAxIH07XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgSU5QVVQ6ICdtZGwtc3dpdGNoX19pbnB1dCcsXG4gICAgVFJBQ0s6ICdtZGwtc3dpdGNoX190cmFjaycsXG4gICAgVEhVTUI6ICdtZGwtc3dpdGNoX190aHVtYicsXG4gICAgRk9DVVNfSEVMUEVSOiAnbWRsLXN3aXRjaF9fZm9jdXMtaGVscGVyJyxcbiAgICBSSVBQTEVfRUZGRUNUOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QnLFxuICAgIFJJUFBMRV9JR05PUkVfRVZFTlRTOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QtLWlnbm9yZS1ldmVudHMnLFxuICAgIFJJUFBMRV9DT05UQUlORVI6ICdtZGwtc3dpdGNoX19yaXBwbGUtY29udGFpbmVyJyxcbiAgICBSSVBQTEVfQ0VOVEVSOiAnbWRsLXJpcHBsZS0tY2VudGVyJyxcbiAgICBSSVBQTEU6ICdtZGwtcmlwcGxlJyxcbiAgICBJU19GT0NVU0VEOiAnaXMtZm9jdXNlZCcsXG4gICAgSVNfRElTQUJMRUQ6ICdpcy1kaXNhYmxlZCcsXG4gICAgSVNfQ0hFQ0tFRDogJ2lzLWNoZWNrZWQnXG59O1xuLyoqXG4gICAqIEhhbmRsZSBjaGFuZ2Ugb2Ygc3RhdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5vbkNoYW5nZV8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBmb2N1cyBvZiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUub25Gb2N1c18gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbn07XG4vKipcbiAgICogSGFuZGxlIGxvc3QgZm9jdXMgb2YgZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLm9uQmx1cl8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19GT0NVU0VEKTtcbn07XG4vKipcbiAgICogSGFuZGxlIG1vdXNldXAuXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IFRoZSBldmVudCB0aGF0IGZpcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5vbk1vdXNlVXBfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5ibHVyXygpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgY2xhc3MgdXBkYXRlcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUudXBkYXRlQ2xhc3Nlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jaGVja0Rpc2FibGVkKCk7XG4gICAgdGhpcy5jaGVja1RvZ2dsZVN0YXRlKCk7XG59O1xuLyoqXG4gICAqIEFkZCBibHVyLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5ibHVyXyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBUT0RPOiBmaWd1cmUgb3V0IHdoeSB0aGVyZSdzIGEgZm9jdXMgZXZlbnQgYmVpbmcgZmlyZWQgYWZ0ZXIgb3VyIGJsdXIsXG4gICAgLy8gc28gdGhhdCB3ZSBjYW4gYXZvaWQgdGhpcyBoYWNrLlxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbnB1dEVsZW1lbnRfLmJsdXIoKTtcbiAgICB9LmJpbmQodGhpcyksIHRoaXMuQ29uc3RhbnRfLlRJTllfVElNRU9VVCk7XG59O1xuLy8gUHVibGljIG1ldGhvZHMuXG4vKipcbiAgICogQ2hlY2sgdGhlIGNvbXBvbmVudHMgZGlzYWJsZWQgc3RhdGUuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuY2hlY2tEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnRfLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0RJU0FCTEVEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVNBQkxFRCk7XG4gICAgfVxufTtcbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZVsnY2hlY2tEaXNhYmxlZCddID0gTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLmNoZWNrRGlzYWJsZWQ7XG4vKipcbiAgICogQ2hlY2sgdGhlIGNvbXBvbmVudHMgdG9nZ2xlZCBzdGF0ZS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5jaGVja1RvZ2dsZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudF8uY2hlY2tlZCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19DSEVDS0VEKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19DSEVDS0VEKTtcbiAgICB9XG59O1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlWydjaGVja1RvZ2dsZVN0YXRlJ10gPSBNYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuY2hlY2tUb2dnbGVTdGF0ZTtcbi8qKlxuICAgKiBEaXNhYmxlIHN3aXRjaC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5kaXNhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZVsnZGlzYWJsZSddID0gTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLmRpc2FibGU7XG4vKipcbiAgICogRW5hYmxlIHN3aXRjaC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5lbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmRpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZVsnZW5hYmxlJ10gPSBNYXRlcmlhbFN3aXRjaC5wcm90b3R5cGUuZW5hYmxlO1xuLyoqXG4gICAqIEFjdGl2YXRlIHN3aXRjaC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8uY2hlY2tlZCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZVsnb24nXSA9IE1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5vbjtcbi8qKlxuICAgKiBEZWFjdGl2YXRlIHN3aXRjaC5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5vZmYgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLmNoZWNrZWQgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlWydvZmYnXSA9IE1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5vZmY7XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsU3dpdGNoLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50XyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLklOUFVUKTtcbiAgICAgICAgdmFyIHRyYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRyYWNrLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5UUkFDSyk7XG4gICAgICAgIHZhciB0aHVtYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aHVtYi5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVEhVTUIpO1xuICAgICAgICB2YXIgZm9jdXNIZWxwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGZvY3VzSGVscGVyLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5GT0NVU19IRUxQRVIpO1xuICAgICAgICB0aHVtYi5hcHBlbmRDaGlsZChmb2N1c0hlbHBlcik7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYXBwZW5kQ2hpbGQodHJhY2spO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKHRodW1iKTtcbiAgICAgICAgdGhpcy5ib3VuZE1vdXNlVXBIYW5kbGVyID0gdGhpcy5vbk1vdXNlVXBfLmJpbmQodGhpcyk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9FRkZFQ1QpKSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfSUdOT1JFX0VWRU5UUyk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uUklQUExFX0NPTlRBSU5FUik7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfRUZGRUNUKTtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9DRU5URVIpO1xuICAgICAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZE1vdXNlVXBIYW5kbGVyKTtcbiAgICAgICAgICAgIHZhciByaXBwbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICByaXBwbGUuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRSk7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZUNvbnRhaW5lckVsZW1lbnRfLmFwcGVuZENoaWxkKHJpcHBsZSk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmFwcGVuZENoaWxkKHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYm91bmRDaGFuZ2VIYW5kbGVyID0gdGhpcy5vbkNoYW5nZV8uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZEZvY3VzSGFuZGxlciA9IHRoaXMub25Gb2N1c18uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ib3VuZEJsdXJIYW5kbGVyID0gdGhpcy5vbkJsdXJfLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmJvdW5kQ2hhbmdlSGFuZGxlcik7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuYm91bmRGb2N1c0hhbmRsZXIpO1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuYm91bmRCbHVySGFuZGxlcik7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuYm91bmRNb3VzZVVwSGFuZGxlcik7XG4gICAgICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKCdpcy11cGdyYWRlZCcpO1xuICAgIH1cbn07XG4vKipcbiAgICogRG93bmdyYWRlIHRoZSBjb21wb25lbnQuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxTd2l0Y2gucHJvdG90eXBlLm1kbERvd25ncmFkZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMucmlwcGxlQ29udGFpbmVyRWxlbWVudF8pIHtcbiAgICAgICAgdGhpcy5yaXBwbGVDb250YWluZXJFbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZE1vdXNlVXBIYW5kbGVyKTtcbiAgICB9XG4gICAgdGhpcy5pbnB1dEVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuYm91bmRDaGFuZ2VIYW5kbGVyKTtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmJvdW5kRm9jdXNIYW5kbGVyKTtcbiAgICB0aGlzLmlucHV0RWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuYm91bmRCbHVySGFuZGxlcik7XG4gICAgdGhpcy5lbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZE1vdXNlVXBIYW5kbGVyKTtcbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxTd2l0Y2gsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsU3dpdGNoJyxcbiAgICBjc3NDbGFzczogJ21kbC1qcy1zd2l0Y2gnLFxuICAgIHdpZGdldDogdHJ1ZVxufSk7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgVGFicyBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsVGFicyA9IGZ1bmN0aW9uIE1hdGVyaWFsVGFicyhlbGVtZW50KSB7XG4gICAgLy8gU3RvcmVzIHRoZSBIVE1MIGVsZW1lbnQuXG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsVGFicyddID0gTWF0ZXJpYWxUYWJzO1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUYWJzLnByb3RvdHlwZS5Db25zdGFudF8gPSB7fTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVGFicy5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgVEFCX0NMQVNTOiAnbWRsLXRhYnNfX3RhYicsXG4gICAgUEFORUxfQ0xBU1M6ICdtZGwtdGFic19fcGFuZWwnLFxuICAgIEFDVElWRV9DTEFTUzogJ2lzLWFjdGl2ZScsXG4gICAgVVBHUkFERURfQ0xBU1M6ICdpcy11cGdyYWRlZCcsXG4gICAgTURMX0pTX1JJUFBMRV9FRkZFQ1Q6ICdtZGwtanMtcmlwcGxlLWVmZmVjdCcsXG4gICAgTURMX1JJUFBMRV9DT05UQUlORVI6ICdtZGwtdGFic19fcmlwcGxlLWNvbnRhaW5lcicsXG4gICAgTURMX1JJUFBMRTogJ21kbC1yaXBwbGUnLFxuICAgIE1ETF9KU19SSVBQTEVfRUZGRUNUX0lHTk9SRV9FVkVOVFM6ICdtZGwtanMtcmlwcGxlLWVmZmVjdC0taWdub3JlLWV2ZW50cydcbn07XG4vKipcbiAgICogSGFuZGxlIGNsaWNrcyB0byBhIHRhYnMgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUYWJzLnByb3RvdHlwZS5pbml0VGFic18gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uTURMX0pTX1JJUFBMRV9FRkZFQ1QpKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk1ETF9KU19SSVBQTEVfRUZGRUNUX0lHTk9SRV9FVkVOVFMpO1xuICAgIH1cbiAgICAvLyBTZWxlY3QgZWxlbWVudCB0YWJzLCBkb2N1bWVudCBwYW5lbHNcbiAgICB0aGlzLnRhYnNfID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uVEFCX0NMQVNTKTtcbiAgICB0aGlzLnBhbmVsc18gPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3JBbGwoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5QQU5FTF9DTEFTUyk7XG4gICAgLy8gQ3JlYXRlIG5ldyB0YWJzIGZvciBlYWNoIHRhYiBlbGVtZW50XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRhYnNfLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5ldyBNYXRlcmlhbFRhYih0aGlzLnRhYnNfW2ldLCB0aGlzKTtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVVBHUkFERURfQ0xBU1MpO1xufTtcbi8qKlxuICAgKiBSZXNldCB0YWIgc3RhdGUsIGRyb3BwaW5nIGFjdGl2ZSBjbGFzc2VzXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUYWJzLnByb3RvdHlwZS5yZXNldFRhYlN0YXRlXyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMudGFic18ubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdGhpcy50YWJzX1trXS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uQUNUSVZFX0NMQVNTKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIFJlc2V0IHBhbmVsIHN0YXRlLCBkcm9waW5nIGFjdGl2ZSBjbGFzc2VzXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUYWJzLnByb3RvdHlwZS5yZXNldFBhbmVsU3RhdGVfID0gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgdGhpcy5wYW5lbHNfLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHRoaXMucGFuZWxzX1tqXS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uQUNUSVZFX0NMQVNTKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbFRhYnMucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgdGhpcy5pbml0VGFic18oKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIENvbnN0cnVjdG9yIGZvciBhbiBpbmRpdmlkdWFsIHRhYi5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHRhYiBUaGUgSFRNTCBlbGVtZW50IGZvciB0aGUgdGFiLlxuICAgKiBAcGFyYW0ge01hdGVyaWFsVGFic30gY3R4IFRoZSBNYXRlcmlhbFRhYnMgb2JqZWN0IHRoYXQgb3ducyB0aGUgdGFiLlxuICAgKi9cbmZ1bmN0aW9uIE1hdGVyaWFsVGFiKHRhYiwgY3R4KSB7XG4gICAgaWYgKHRhYikge1xuICAgICAgICBpZiAoY3R4LmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyhjdHguQ3NzQ2xhc3Nlc18uTURMX0pTX1JJUFBMRV9FRkZFQ1QpKSB7XG4gICAgICAgICAgICB2YXIgcmlwcGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmlwcGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY3R4LkNzc0NsYXNzZXNfLk1ETF9SSVBQTEVfQ09OVEFJTkVSKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGN0eC5Dc3NDbGFzc2VzXy5NRExfSlNfUklQUExFX0VGRkVDVCk7XG4gICAgICAgICAgICB2YXIgcmlwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgcmlwcGxlLmNsYXNzTGlzdC5hZGQoY3R4LkNzc0NsYXNzZXNfLk1ETF9SSVBQTEUpO1xuICAgICAgICAgICAgcmlwcGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpcHBsZSk7XG4gICAgICAgICAgICB0YWIuYXBwZW5kQ2hpbGQocmlwcGxlQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyIGhyZWYgPSB0YWIuaHJlZi5zcGxpdCgnIycpWzFdO1xuICAgICAgICAgICAgdmFyIHBhbmVsID0gY3R4LmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJyMnICsgaHJlZik7XG4gICAgICAgICAgICBjdHgucmVzZXRUYWJTdGF0ZV8oKTtcbiAgICAgICAgICAgIGN0eC5yZXNldFBhbmVsU3RhdGVfKCk7XG4gICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZChjdHguQ3NzQ2xhc3Nlc18uQUNUSVZFX0NMQVNTKTtcbiAgICAgICAgICAgIHBhbmVsLmNsYXNzTGlzdC5hZGQoY3R4LkNzc0NsYXNzZXNfLkFDVElWRV9DTEFTUyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbFRhYnMsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsVGFicycsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtdGFicydcbn0pO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIFRleHRmaWVsZCBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsVGV4dGZpZWxkID0gZnVuY3Rpb24gTWF0ZXJpYWxUZXh0ZmllbGQoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIHRoaXMubWF4Um93cyA9IHRoaXMuQ29uc3RhbnRfLk5PX01BWF9ST1dTO1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbFRleHRmaWVsZCddID0gTWF0ZXJpYWxUZXh0ZmllbGQ7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuQ29uc3RhbnRfID0ge1xuICAgIE5PX01BWF9ST1dTOiAtMSxcbiAgICBNQVhfUk9XU19BVFRSSUJVVEU6ICdtYXhyb3dzJ1xufTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBMQUJFTDogJ21kbC10ZXh0ZmllbGRfX2xhYmVsJyxcbiAgICBJTlBVVDogJ21kbC10ZXh0ZmllbGRfX2lucHV0JyxcbiAgICBJU19ESVJUWTogJ2lzLWRpcnR5JyxcbiAgICBJU19GT0NVU0VEOiAnaXMtZm9jdXNlZCcsXG4gICAgSVNfRElTQUJMRUQ6ICdpcy1kaXNhYmxlZCcsXG4gICAgSVNfSU5WQUxJRDogJ2lzLWludmFsaWQnLFxuICAgIElTX1VQR1JBREVEOiAnaXMtdXBncmFkZWQnXG59O1xuLyoqXG4gICAqIEhhbmRsZSBpbnB1dCBiZWluZyBlbnRlcmVkLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUub25LZXlEb3duXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHZhciBjdXJyZW50Um93Q291bnQgPSBldmVudC50YXJnZXQudmFsdWUuc3BsaXQoJ1xcbicpLmxlbmd0aDtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRSb3dDb3VudCA+PSB0aGlzLm1heFJvd3MpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gICAqIEhhbmRsZSBmb2N1cy5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLm9uRm9jdXNfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRk9DVVNFRCk7XG59O1xuLyoqXG4gICAqIEhhbmRsZSBsb3N0IGZvY3VzLlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUub25CbHVyXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0ZPQ1VTRUQpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgcmVzZXQgZXZlbnQgZnJvbSBvdXQgc2lkZS5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLm9uUmVzZXRfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhpcy51cGRhdGVDbGFzc2VzXygpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgY2xhc3MgdXBkYXRlcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUudXBkYXRlQ2xhc3Nlc18gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5jaGVja0Rpc2FibGVkKCk7XG4gICAgdGhpcy5jaGVja1ZhbGlkaXR5KCk7XG4gICAgdGhpcy5jaGVja0RpcnR5KCk7XG59O1xuLy8gUHVibGljIG1ldGhvZHMuXG4vKipcbiAgICogQ2hlY2sgdGhlIGRpc2FibGVkIHN0YXRlIGFuZCB1cGRhdGUgZmllbGQgYWNjb3JkaW5nbHkuXG4gICAqXG4gICAqIEBwdWJsaWNcbiAgICovXG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuY2hlY2tEaXNhYmxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5pbnB1dF8uZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRElTQUJMRUQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0RJU0FCTEVEKTtcbiAgICB9XG59O1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlWydjaGVja0Rpc2FibGVkJ10gPSBNYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuY2hlY2tEaXNhYmxlZDtcbi8qKlxuICAgKiBDaGVjayB0aGUgdmFsaWRpdHkgc3RhdGUgYW5kIHVwZGF0ZSBmaWVsZCBhY2NvcmRpbmdseS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5jaGVja1ZhbGlkaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlucHV0Xy52YWxpZGl0eSkge1xuICAgICAgICBpZiAodGhpcy5pbnB1dF8udmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0lOVkFMSUQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfSU5WQUxJRCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlWydjaGVja1ZhbGlkaXR5J10gPSBNYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGUuY2hlY2tWYWxpZGl0eTtcbi8qKlxuICAgKiBDaGVjayB0aGUgZGlydHkgc3RhdGUgYW5kIHVwZGF0ZSBmaWVsZCBhY2NvcmRpbmdseS5cbiAgICpcbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5jaGVja0RpcnR5ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlucHV0Xy52YWx1ZSAmJiB0aGlzLmlucHV0Xy52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0RJUlRZKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19ESVJUWSk7XG4gICAgfVxufTtcbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZVsnY2hlY2tEaXJ0eSddID0gTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmNoZWNrRGlydHk7XG4vKipcbiAgICogRGlzYWJsZSB0ZXh0IGZpZWxkLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmRpc2FibGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dF8uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGVbJ2Rpc2FibGUnXSA9IE1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5kaXNhYmxlO1xuLyoqXG4gICAqIEVuYWJsZSB0ZXh0IGZpZWxkLlxuICAgKlxuICAgKiBAcHVibGljXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmVuYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmlucHV0Xy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlQ2xhc3Nlc18oKTtcbn07XG5NYXRlcmlhbFRleHRmaWVsZC5wcm90b3R5cGVbJ2VuYWJsZSddID0gTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLmVuYWJsZTtcbi8qKlxuICAgKiBVcGRhdGUgdGV4dCBmaWVsZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFRoZSB2YWx1ZSB0byB3aGljaCB0byBzZXQgdGhlIGNvbnRyb2wgKG9wdGlvbmFsKS5cbiAgICogQHB1YmxpY1xuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5jaGFuZ2UgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdGhpcy5pbnB1dF8udmFsdWUgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmlucHV0Xy52YWx1ZSA9ICcnO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG59O1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlWydjaGFuZ2UnXSA9IE1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5jaGFuZ2U7XG4vKipcbiAgICogSW5pdGlhbGl6ZSBlbGVtZW50LlxuICAgKi9cbk1hdGVyaWFsVGV4dGZpZWxkLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIHRoaXMubGFiZWxfID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uTEFCRUwpO1xuICAgICAgICB0aGlzLmlucHV0XyA9IHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLkNzc0NsYXNzZXNfLklOUFVUKTtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRfKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnB1dF8uaGFzQXR0cmlidXRlKHRoaXMuQ29uc3RhbnRfLk1BWF9ST1dTX0FUVFJJQlVURSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1heFJvd3MgPSBwYXJzZUludCh0aGlzLmlucHV0Xy5nZXRBdHRyaWJ1dGUodGhpcy5Db25zdGFudF8uTUFYX1JPV1NfQVRUUklCVVRFKSwgMTApO1xuICAgICAgICAgICAgICAgIGlmIChpc05hTih0aGlzLm1heFJvd3MpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWF4Um93cyA9IHRoaXMuQ29uc3RhbnRfLk5PX01BWF9ST1dTO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYm91bmRVcGRhdGVDbGFzc2VzSGFuZGxlciA9IHRoaXMudXBkYXRlQ2xhc3Nlc18uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuYm91bmRGb2N1c0hhbmRsZXIgPSB0aGlzLm9uRm9jdXNfLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmJvdW5kQmx1ckhhbmRsZXIgPSB0aGlzLm9uQmx1cl8uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuYm91bmRSZXNldEhhbmRsZXIgPSB0aGlzLm9uUmVzZXRfLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmlucHV0Xy5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuYm91bmRVcGRhdGVDbGFzc2VzSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLmlucHV0Xy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuYm91bmRGb2N1c0hhbmRsZXIpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dF8uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuYm91bmRCbHVySGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLmlucHV0Xy5hZGRFdmVudExpc3RlbmVyKCdyZXNldCcsIHRoaXMuYm91bmRSZXNldEhhbmRsZXIpO1xuICAgICAgICAgICAgaWYgKHRoaXMubWF4Um93cyAhPT0gdGhpcy5Db25zdGFudF8uTk9fTUFYX1JPV1MpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBUaGlzIHNob3VsZCBoYW5kbGUgcGFzdGluZyBtdWx0aSBsaW5lIHRleHQuXG4gICAgICAgICAgICAgICAgLy8gQ3VycmVudGx5IGRvZXNuJ3QuXG4gICAgICAgICAgICAgICAgdGhpcy5ib3VuZEtleURvd25IYW5kbGVyID0gdGhpcy5vbktleURvd25fLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dF8uYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuYm91bmRLZXlEb3duSGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNsYXNzZXNfKCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19VUEdSQURFRCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gICAqIERvd25ncmFkZSB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUZXh0ZmllbGQucHJvdG90eXBlLm1kbERvd25ncmFkZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5pbnB1dF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLmJvdW5kVXBkYXRlQ2xhc3Nlc0hhbmRsZXIpO1xuICAgIHRoaXMuaW5wdXRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5ib3VuZEZvY3VzSGFuZGxlcik7XG4gICAgdGhpcy5pbnB1dF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuYm91bmRCbHVySGFuZGxlcik7XG4gICAgdGhpcy5pbnB1dF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzZXQnLCB0aGlzLmJvdW5kUmVzZXRIYW5kbGVyKTtcbiAgICBpZiAodGhpcy5ib3VuZEtleURvd25IYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuaW5wdXRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmJvdW5kS2V5RG93bkhhbmRsZXIpO1xuICAgIH1cbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxUZXh0ZmllbGQsXG4gICAgY2xhc3NBc1N0cmluZzogJ01hdGVyaWFsVGV4dGZpZWxkJyxcbiAgICBjc3NDbGFzczogJ21kbC1qcy10ZXh0ZmllbGQnLFxuICAgIHdpZGdldDogdHJ1ZVxufSk7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICAgKiBDbGFzcyBjb25zdHJ1Y3RvciBmb3IgVG9vbHRpcCBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsVG9vbHRpcCA9IGZ1bmN0aW9uIE1hdGVyaWFsVG9vbHRpcChlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50XyA9IGVsZW1lbnQ7XG4gICAgLy8gSW5pdGlhbGl6ZSBpbnN0YW5jZS5cbiAgICB0aGlzLmluaXQoKTtcbn07XG53aW5kb3dbJ01hdGVyaWFsVG9vbHRpcCddID0gTWF0ZXJpYWxUb29sdGlwO1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUb29sdGlwLnByb3RvdHlwZS5Db25zdGFudF8gPSB7fTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsVG9vbHRpcC5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7IElTX0FDVElWRTogJ2lzLWFjdGl2ZScgfTtcbi8qKlxuICAgKiBIYW5kbGUgbW91c2VlbnRlciBmb3IgdG9vbHRpcC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUb29sdGlwLnByb3RvdHlwZS5oYW5kbGVNb3VzZUVudGVyXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHZhciBwcm9wcyA9IGV2ZW50LnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgbGVmdCA9IHByb3BzLmxlZnQgKyBwcm9wcy53aWR0aCAvIDI7XG4gICAgdmFyIG1hcmdpbkxlZnQgPSAtMSAqICh0aGlzLmVsZW1lbnRfLm9mZnNldFdpZHRoIC8gMik7XG4gICAgaWYgKGxlZnQgKyBtYXJnaW5MZWZ0IDwgMCkge1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLmxlZnQgPSAwO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLm1hcmdpbkxlZnQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uc3R5bGUubGVmdCA9IGxlZnQgKyAncHgnO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnN0eWxlLm1hcmdpbkxlZnQgPSBtYXJnaW5MZWZ0ICsgJ3B4JztcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50Xy5zdHlsZS50b3AgPSBwcm9wcy50b3AgKyBwcm9wcy5oZWlnaHQgKyAxMCArICdweCc7XG4gICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQUNUSVZFKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5ib3VuZE1vdXNlTGVhdmVIYW5kbGVyLCBmYWxzZSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuYm91bmRNb3VzZUxlYXZlSGFuZGxlciwgZmFsc2UpO1xufTtcbi8qKlxuICAgKiBIYW5kbGUgbW91c2VsZWF2ZSBmb3IgdG9vbHRpcC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUb29sdGlwLnByb3RvdHlwZS5oYW5kbGVNb3VzZUxlYXZlXyA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0FDVElWRSk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuYm91bmRNb3VzZUxlYXZlSGFuZGxlcik7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIHRoaXMuYm91bmRNb3VzZUxlYXZlSGFuZGxlciwgZmFsc2UpO1xufTtcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxUb29sdGlwLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnRfKSB7XG4gICAgICAgIHZhciBmb3JFbElkID0gdGhpcy5lbGVtZW50Xy5nZXRBdHRyaWJ1dGUoJ2ZvcicpO1xuICAgICAgICBpZiAoZm9yRWxJZCkge1xuICAgICAgICAgICAgdGhpcy5mb3JFbGVtZW50XyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGZvckVsSWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZvckVsZW1lbnRfKSB7XG4gICAgICAgICAgICAvLyBUYWJpbmRleCBuZWVkcyB0byBiZSBzZXQgZm9yIGBibHVyYCBldmVudHMgdG8gYmUgZW1pdHRlZFxuICAgICAgICAgICAgaWYgKCF0aGlzLmZvckVsZW1lbnRfLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9yRWxlbWVudF8uc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmJvdW5kTW91c2VFbnRlckhhbmRsZXIgPSB0aGlzLmhhbmRsZU1vdXNlRW50ZXJfLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmJvdW5kTW91c2VMZWF2ZUhhbmRsZXIgPSB0aGlzLmhhbmRsZU1vdXNlTGVhdmVfLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmZvckVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLmJvdW5kTW91c2VFbnRlckhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuZm9yRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmJvdW5kTW91c2VFbnRlckhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuZm9yRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuYm91bmRNb3VzZUxlYXZlSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLmZvckVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmJvdW5kTW91c2VFbnRlckhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuZm9yRWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuYm91bmRNb3VzZUxlYXZlSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gICAqIERvd25ncmFkZSB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxUb29sdGlwLnByb3RvdHlwZS5tZGxEb3duZ3JhZGVfID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmZvckVsZW1lbnRfKSB7XG4gICAgICAgIHRoaXMuZm9yRWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuYm91bmRNb3VzZUVudGVySGFuZGxlciwgZmFsc2UpO1xuICAgICAgICB0aGlzLmZvckVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5ib3VuZE1vdXNlRW50ZXJIYW5kbGVyLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuZm9yRWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuYm91bmRNb3VzZUVudGVySGFuZGxlciwgZmFsc2UpO1xuICAgICAgICB0aGlzLmZvckVsZW1lbnRfLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmJvdW5kTW91c2VMZWF2ZUhhbmRsZXIpO1xuICAgIH1cbn07XG4vLyBUaGUgY29tcG9uZW50IHJlZ2lzdGVycyBpdHNlbGYuIEl0IGNhbiBhc3N1bWUgY29tcG9uZW50SGFuZGxlciBpcyBhdmFpbGFibGVcbi8vIGluIHRoZSBnbG9iYWwgc2NvcGUuXG5jb21wb25lbnRIYW5kbGVyLnJlZ2lzdGVyKHtcbiAgICBjb25zdHJ1Y3RvcjogTWF0ZXJpYWxUb29sdGlwLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbFRvb2x0aXAnLFxuICAgIGNzc0NsYXNzOiAnbWRsLXRvb2x0aXAnXG59KTtcbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE1IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gICAqIENsYXNzIGNvbnN0cnVjdG9yIGZvciBMYXlvdXQgTURMIGNvbXBvbmVudC5cbiAgICogSW1wbGVtZW50cyBNREwgY29tcG9uZW50IGRlc2lnbiBwYXR0ZXJuIGRlZmluZWQgYXQ6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNvbm1heWVzL21kbC1jb21wb25lbnQtZGVzaWduLXBhdHRlcm5cbiAgICpcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIHVwZ3JhZGVkLlxuICAgKi9cbnZhciBNYXRlcmlhbExheW91dCA9IGZ1bmN0aW9uIE1hdGVyaWFsTGF5b3V0KGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnRfID0gZWxlbWVudDtcbiAgICAvLyBJbml0aWFsaXplIGluc3RhbmNlLlxuICAgIHRoaXMuaW5pdCgpO1xufTtcbndpbmRvd1snTWF0ZXJpYWxMYXlvdXQnXSA9IE1hdGVyaWFsTGF5b3V0O1xuLyoqXG4gICAqIFN0b3JlIGNvbnN0YW50cyBpbiBvbmUgcGxhY2Ugc28gdGhleSBjYW4gYmUgdXBkYXRlZCBlYXNpbHkuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmcgfCBudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxMYXlvdXQucHJvdG90eXBlLkNvbnN0YW50XyA9IHtcbiAgICBNQVhfV0lEVEg6ICcobWF4LXdpZHRoOiAxMDI0cHgpJyxcbiAgICBUQUJfU0NST0xMX1BJWEVMUzogMTAwLFxuICAgIE1FTlVfSUNPTjogJ21lbnUnLFxuICAgIENIRVZST05fTEVGVDogJ2NoZXZyb25fbGVmdCcsXG4gICAgQ0hFVlJPTl9SSUdIVDogJ2NoZXZyb25fcmlnaHQnXG59O1xuLyoqXG4gICAqIE1vZGVzLlxuICAgKlxuICAgKiBAZW51bSB7bnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTGF5b3V0LnByb3RvdHlwZS5Nb2RlXyA9IHtcbiAgICBTVEFOREFSRDogMCxcbiAgICBTRUFNRUQ6IDEsXG4gICAgV0FURVJGQUxMOiAyLFxuICAgIFNDUk9MTDogM1xufTtcbi8qKlxuICAgKiBTdG9yZSBzdHJpbmdzIGZvciBjbGFzcyBuYW1lcyBkZWZpbmVkIGJ5IHRoaXMgY29tcG9uZW50IHRoYXQgYXJlIHVzZWQgaW5cbiAgICogSmF2YVNjcmlwdC4gVGhpcyBhbGxvd3MgdXMgdG8gc2ltcGx5IGNoYW5nZSBpdCBpbiBvbmUgcGxhY2Ugc2hvdWxkIHdlXG4gICAqIGRlY2lkZSB0byBtb2RpZnkgYXQgYSBsYXRlciBkYXRlLlxuICAgKlxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTGF5b3V0LnByb3RvdHlwZS5Dc3NDbGFzc2VzXyA9IHtcbiAgICBDT05UQUlORVI6ICdtZGwtbGF5b3V0X19jb250YWluZXInLFxuICAgIEhFQURFUjogJ21kbC1sYXlvdXRfX2hlYWRlcicsXG4gICAgRFJBV0VSOiAnbWRsLWxheW91dF9fZHJhd2VyJyxcbiAgICBDT05URU5UOiAnbWRsLWxheW91dF9fY29udGVudCcsXG4gICAgRFJBV0VSX0JUTjogJ21kbC1sYXlvdXRfX2RyYXdlci1idXR0b24nLFxuICAgIElDT046ICdtYXRlcmlhbC1pY29ucycsXG4gICAgSlNfUklQUExFX0VGRkVDVDogJ21kbC1qcy1yaXBwbGUtZWZmZWN0JyxcbiAgICBSSVBQTEVfQ09OVEFJTkVSOiAnbWRsLWxheW91dF9fdGFiLXJpcHBsZS1jb250YWluZXInLFxuICAgIFJJUFBMRTogJ21kbC1yaXBwbGUnLFxuICAgIFJJUFBMRV9JR05PUkVfRVZFTlRTOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QtLWlnbm9yZS1ldmVudHMnLFxuICAgIEhFQURFUl9TRUFNRUQ6ICdtZGwtbGF5b3V0X19oZWFkZXItLXNlYW1lZCcsXG4gICAgSEVBREVSX1dBVEVSRkFMTDogJ21kbC1sYXlvdXRfX2hlYWRlci0td2F0ZXJmYWxsJyxcbiAgICBIRUFERVJfU0NST0xMOiAnbWRsLWxheW91dF9faGVhZGVyLS1zY3JvbGwnLFxuICAgIEZJWEVEX0hFQURFUjogJ21kbC1sYXlvdXQtLWZpeGVkLWhlYWRlcicsXG4gICAgT0JGVVNDQVRPUjogJ21kbC1sYXlvdXRfX29iZnVzY2F0b3InLFxuICAgIFRBQl9CQVI6ICdtZGwtbGF5b3V0X190YWItYmFyJyxcbiAgICBUQUJfQ09OVEFJTkVSOiAnbWRsLWxheW91dF9fdGFiLWJhci1jb250YWluZXInLFxuICAgIFRBQjogJ21kbC1sYXlvdXRfX3RhYicsXG4gICAgVEFCX0JBUl9CVVRUT046ICdtZGwtbGF5b3V0X190YWItYmFyLWJ1dHRvbicsXG4gICAgVEFCX0JBUl9MRUZUX0JVVFRPTjogJ21kbC1sYXlvdXRfX3RhYi1iYXItbGVmdC1idXR0b24nLFxuICAgIFRBQl9CQVJfUklHSFRfQlVUVE9OOiAnbWRsLWxheW91dF9fdGFiLWJhci1yaWdodC1idXR0b24nLFxuICAgIFBBTkVMOiAnbWRsLWxheW91dF9fdGFiLXBhbmVsJyxcbiAgICBIQVNfRFJBV0VSOiAnaGFzLWRyYXdlcicsXG4gICAgSEFTX1RBQlM6ICdoYXMtdGFicycsXG4gICAgSEFTX1NDUk9MTElOR19IRUFERVI6ICdoYXMtc2Nyb2xsaW5nLWhlYWRlcicsXG4gICAgQ0FTVElOR19TSEFET1c6ICdpcy1jYXN0aW5nLXNoYWRvdycsXG4gICAgSVNfQ09NUEFDVDogJ2lzLWNvbXBhY3QnLFxuICAgIElTX1NNQUxMX1NDUkVFTjogJ2lzLXNtYWxsLXNjcmVlbicsXG4gICAgSVNfRFJBV0VSX09QRU46ICdpcy12aXNpYmxlJyxcbiAgICBJU19BQ1RJVkU6ICdpcy1hY3RpdmUnLFxuICAgIElTX1VQR1JBREVEOiAnaXMtdXBncmFkZWQnLFxuICAgIElTX0FOSU1BVElORzogJ2lzLWFuaW1hdGluZycsXG4gICAgT05fTEFSR0VfU0NSRUVOOiAnbWRsLWxheW91dC0tbGFyZ2Utc2NyZWVuLW9ubHknLFxuICAgIE9OX1NNQUxMX1NDUkVFTjogJ21kbC1sYXlvdXQtLXNtYWxsLXNjcmVlbi1vbmx5J1xufTtcbi8qKlxuICAgKiBIYW5kbGVzIHNjcm9sbGluZyBvbiB0aGUgY29udGVudC5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUuY29udGVudFNjcm9sbEhhbmRsZXJfID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQU5JTUFUSU5HKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmNvbnRlbnRfLnNjcm9sbFRvcCA+IDAgJiYgIXRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5JU19DT01QQUNUKSkge1xuICAgICAgICB0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkNBU1RJTkdfU0hBRE9XKTtcbiAgICAgICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19DT01QQUNUKTtcbiAgICAgICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19BTklNQVRJTkcpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb250ZW50Xy5zY3JvbGxUb3AgPD0gMCAmJiB0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ09NUEFDVCkpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5DQVNUSU5HX1NIQURPVyk7XG4gICAgICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ09NUEFDVCk7XG4gICAgICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQU5JTUFUSU5HKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIEhhbmRsZXMgY2hhbmdlcyBpbiBzY3JlZW4gc2l6ZS5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUuc2NyZWVuU2l6ZUhhbmRsZXJfID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnNjcmVlblNpemVNZWRpYVF1ZXJ5Xy5tYXRjaGVzKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX1NNQUxMX1NDUkVFTik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfU01BTExfU0NSRUVOKTtcbiAgICAgICAgLy8gQ29sbGFwc2UgZHJhd2VyIChpZiBhbnkpIHdoZW4gbW92aW5nIHRvIGEgbGFyZ2Ugc2NyZWVuIHNpemUuXG4gICAgICAgIGlmICh0aGlzLmRyYXdlcl8pIHtcbiAgICAgICAgICAgIHRoaXMuZHJhd2VyXy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRFJBV0VSX09QRU4pO1xuICAgICAgICAgICAgdGhpcy5vYmZ1c2NhdG9yXy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRFJBV0VSX09QRU4pO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8qKlxuICAgKiBIYW5kbGVzIHRvZ2dsaW5nIG9mIHRoZSBkcmF3ZXIuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxMYXlvdXQucHJvdG90eXBlLmRyYXdlclRvZ2dsZUhhbmRsZXJfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZHJhd2VyXy5jbGFzc0xpc3QudG9nZ2xlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfRFJBV0VSX09QRU4pO1xuICAgIHRoaXMub2JmdXNjYXRvcl8uY2xhc3NMaXN0LnRvZ2dsZSh0aGlzLkNzc0NsYXNzZXNfLklTX0RSQVdFUl9PUEVOKTtcbn07XG4vKipcbiAgICogSGFuZGxlcyAodW4pc2V0dGluZyB0aGUgYGlzLWFuaW1hdGluZ2AgY2xhc3NcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUuaGVhZGVyVHJhbnNpdGlvbkVuZEhhbmRsZXJfID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQU5JTUFUSU5HKTtcbn07XG4vKipcbiAgICogSGFuZGxlcyBleHBhbmRpbmcgdGhlIGhlYWRlciBvbiBjbGlja1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTGF5b3V0LnByb3RvdHlwZS5oZWFkZXJDbGlja0hhbmRsZXJfID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQ09NUEFDVCkpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19DT01QQUNUKTtcbiAgICAgICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19BTklNQVRJTkcpO1xuICAgIH1cbn07XG4vKipcbiAgICogUmVzZXQgdGFiIHN0YXRlLCBkcm9wcGluZyBhY3RpdmUgY2xhc3Nlc1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTGF5b3V0LnByb3RvdHlwZS5yZXNldFRhYlN0YXRlXyA9IGZ1bmN0aW9uICh0YWJCYXIpIHtcbiAgICBmb3IgKHZhciBrID0gMDsgayA8IHRhYkJhci5sZW5ndGg7IGsrKykge1xuICAgICAgICB0YWJCYXJba10uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0FDVElWRSk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBSZXNldCBwYW5lbCBzdGF0ZSwgZHJvcGluZyBhY3RpdmUgY2xhc3Nlc1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbk1hdGVyaWFsTGF5b3V0LnByb3RvdHlwZS5yZXNldFBhbmVsU3RhdGVfID0gZnVuY3Rpb24gKHBhbmVscykge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGFuZWxzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhbmVsc1tqXS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQUNUSVZFKTtcbiAgICB9XG59O1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbExheW91dC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uQ09OVEFJTkVSKTtcbiAgICAgICAgdGhpcy5lbGVtZW50Xy5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShjb250YWluZXIsIHRoaXMuZWxlbWVudF8pO1xuICAgICAgICB0aGlzLmVsZW1lbnRfLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50Xyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRfKTtcbiAgICAgICAgdmFyIGRpcmVjdENoaWxkcmVuID0gdGhpcy5lbGVtZW50Xy5jaGlsZE5vZGVzO1xuICAgICAgICBmb3IgKHZhciBjID0gMDsgYyA8IGRpcmVjdENoaWxkcmVuLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSBkaXJlY3RDaGlsZHJlbltjXTtcbiAgICAgICAgICAgIGlmIChjaGlsZC5jbGFzc0xpc3QgJiYgY2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSEVBREVSKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyXyA9IGNoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkLmNsYXNzTGlzdCAmJiBjaGlsZC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5EUkFXRVIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3ZXJfID0gY2hpbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hpbGQuY2xhc3NMaXN0ICYmIGNoaWxkLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkNPTlRFTlQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50XyA9IGNoaWxkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmhlYWRlcl8pIHtcbiAgICAgICAgICAgIHRoaXMudGFiQmFyXyA9IHRoaXMuaGVhZGVyXy5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uVEFCX0JBUik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1vZGUgPSB0aGlzLk1vZGVfLlNUQU5EQVJEO1xuICAgICAgICBpZiAodGhpcy5oZWFkZXJfKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkhFQURFUl9TRUFNRUQpKSB7XG4gICAgICAgICAgICAgICAgbW9kZSA9IHRoaXMuTW9kZV8uU0VBTUVEO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmhlYWRlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSEVBREVSX1dBVEVSRkFMTCkpIHtcbiAgICAgICAgICAgICAgICBtb2RlID0gdGhpcy5Nb2RlXy5XQVRFUkZBTEw7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJfLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLmhlYWRlclRyYW5zaXRpb25FbmRIYW5kbGVyXy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlcl8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhlYWRlckNsaWNrSGFuZGxlcl8uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaGVhZGVyXy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5IRUFERVJfU0NST0xMKSkge1xuICAgICAgICAgICAgICAgIG1vZGUgPSB0aGlzLk1vZGVfLlNDUk9MTDtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkhBU19TQ1JPTExJTkdfSEVBREVSKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtb2RlID09PSB0aGlzLk1vZGVfLlNUQU5EQVJEKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5DQVNUSU5HX1NIQURPVyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFiQmFyXykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYkJhcl8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkNBU1RJTkdfU0hBRE9XKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IHRoaXMuTW9kZV8uU0VBTUVEIHx8IG1vZGUgPT09IHRoaXMuTW9kZV8uU0NST0xMKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5DQVNUSU5HX1NIQURPVyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFiQmFyXykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYkJhcl8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLkNBU1RJTkdfU0hBRE9XKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1vZGUgPT09IHRoaXMuTW9kZV8uV0FURVJGQUxMKSB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIGFuZCByZW1vdmUgc2hhZG93cyBkZXBlbmRpbmcgb24gc2Nyb2xsIHBvc2l0aW9uLlxuICAgICAgICAgICAgICAgIC8vIEFsc28gYWRkL3JlbW92ZSBhdXhpbGlhcnkgY2xhc3MgZm9yIHN0eWxpbmcgb2YgdGhlIGNvbXBhY3QgdmVyc2lvbiBvZlxuICAgICAgICAgICAgICAgIC8vIHRoZSBoZWFkZXIuXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50Xy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLmNvbnRlbnRTY3JvbGxIYW5kbGVyXy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRTY3JvbGxIYW5kbGVyXygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCBkcmF3ZXIgdG9nZ2xpbmcgYnV0dG9uIHRvIG91ciBsYXlvdXQsIGlmIHdlIGhhdmUgYW4gb3BlbmFibGUgZHJhd2VyLlxuICAgICAgICBpZiAodGhpcy5kcmF3ZXJfKSB7XG4gICAgICAgICAgICB2YXIgZHJhd2VyQnV0dG9uID0gdGhpcy5lbGVtZW50Xy5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uRFJBV0VSX0JUTik7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGRyYXdlckJ1dHRvbiA9PT0gJ3VuZGVmaW5lZCcgfHwgZHJhd2VyQnV0dG9uID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZHJhd2VyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZHJhd2VyQnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5EUkFXRVJfQlROKTtcbiAgICAgICAgICAgICAgICB2YXIgZHJhd2VyQnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgICAgICBkcmF3ZXJCdXR0b25JY29uLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JQ09OKTtcbiAgICAgICAgICAgICAgICBkcmF3ZXJCdXR0b25JY29uLnRleHRDb250ZW50ID0gdGhpcy5Db25zdGFudF8uTUVOVV9JQ09OO1xuICAgICAgICAgICAgICAgIGRyYXdlckJ1dHRvbi5hcHBlbmRDaGlsZChkcmF3ZXJCdXR0b25JY29uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmRyYXdlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uT05fTEFSR0VfU0NSRUVOKSkge1xuICAgICAgICAgICAgICAgIC8vSWYgZHJhd2VyIGhhcyBPTl9MQVJHRV9TQ1JFRU4gY2xhc3MgdGhlbiBhZGQgaXQgdG8gdGhlIGRyYXdlciB0b2dnbGUgYnV0dG9uIGFzIHdlbGwuXG4gICAgICAgICAgICAgICAgZHJhd2VyQnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5PTl9MQVJHRV9TQ1JFRU4pO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRyYXdlcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uT05fU01BTExfU0NSRUVOKSkge1xuICAgICAgICAgICAgICAgIC8vSWYgZHJhd2VyIGhhcyBPTl9TTUFMTF9TQ1JFRU4gY2xhc3MgdGhlbiBhZGQgaXQgdG8gdGhlIGRyYXdlciB0b2dnbGUgYnV0dG9uIGFzIHdlbGwuXG4gICAgICAgICAgICAgICAgZHJhd2VyQnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5PTl9TTUFMTF9TQ1JFRU4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJhd2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5kcmF3ZXJUb2dnbGVIYW5kbGVyXy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIC8vIEFkZCBhIGNsYXNzIGlmIHRoZSBsYXlvdXQgaGFzIGEgZHJhd2VyLCBmb3IgYWx0ZXJpbmcgdGhlIGxlZnQgcGFkZGluZy5cbiAgICAgICAgICAgIC8vIEFkZHMgdGhlIEhBU19EUkFXRVIgdG8gdGhlIGVsZW1lbnRzIHNpbmNlIHRoaXMuaGVhZGVyXyBtYXkgb3IgbWF5XG4gICAgICAgICAgICAvLyBub3QgYmUgcHJlc2VudC5cbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkhBU19EUkFXRVIpO1xuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIGZpeGVkIGhlYWRlciwgYWRkIHRoZSBidXR0b24gdG8gdGhlIGhlYWRlciByYXRoZXIgdGhhblxuICAgICAgICAgICAgLy8gdGhlIGxheW91dC5cbiAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLkZJWEVEX0hFQURFUikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlcl8uaW5zZXJ0QmVmb3JlKGRyYXdlckJ1dHRvbiwgdGhpcy5oZWFkZXJfLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmluc2VydEJlZm9yZShkcmF3ZXJCdXR0b24sIHRoaXMuY29udGVudF8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG9iZnVzY2F0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG9iZnVzY2F0b3IuY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLk9CRlVTQ0FUT1IpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5hcHBlbmRDaGlsZChvYmZ1c2NhdG9yKTtcbiAgICAgICAgICAgIG9iZnVzY2F0b3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmRyYXdlclRvZ2dsZUhhbmRsZXJfLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5vYmZ1c2NhdG9yXyA9IG9iZnVzY2F0b3I7XG4gICAgICAgIH1cbiAgICAgICAgLy8gS2VlcCBhbiBleWUgb24gc2NyZWVuIHNpemUsIGFuZCBhZGQvcmVtb3ZlIGF1eGlsaWFyeSBjbGFzcyBmb3Igc3R5bGluZ1xuICAgICAgICAvLyBvZiBzbWFsbCBzY3JlZW5zLlxuICAgICAgICB0aGlzLnNjcmVlblNpemVNZWRpYVF1ZXJ5XyA9IHdpbmRvdy5tYXRjaE1lZGlhKHRoaXMuQ29uc3RhbnRfLk1BWF9XSURUSCk7XG4gICAgICAgIHRoaXMuc2NyZWVuU2l6ZU1lZGlhUXVlcnlfLmFkZExpc3RlbmVyKHRoaXMuc2NyZWVuU2l6ZUhhbmRsZXJfLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnNjcmVlblNpemVIYW5kbGVyXygpO1xuICAgICAgICAvLyBJbml0aWFsaXplIHRhYnMsIGlmIGFueS5cbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyXyAmJiB0aGlzLnRhYkJhcl8pIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLkhBU19UQUJTKTtcbiAgICAgICAgICAgIHZhciB0YWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhYkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVEFCX0NPTlRBSU5FUik7XG4gICAgICAgICAgICB0aGlzLmhlYWRlcl8uaW5zZXJ0QmVmb3JlKHRhYkNvbnRhaW5lciwgdGhpcy50YWJCYXJfKTtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyXy5yZW1vdmVDaGlsZCh0aGlzLnRhYkJhcl8pO1xuICAgICAgICAgICAgdmFyIGxlZnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxlZnRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlRBQl9CQVJfQlVUVE9OKTtcbiAgICAgICAgICAgIGxlZnRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlRBQl9CQVJfTEVGVF9CVVRUT04pO1xuICAgICAgICAgICAgdmFyIGxlZnRCdXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgbGVmdEJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklDT04pO1xuICAgICAgICAgICAgbGVmdEJ1dHRvbkljb24udGV4dENvbnRlbnQgPSB0aGlzLkNvbnN0YW50Xy5DSEVWUk9OX0xFRlQ7XG4gICAgICAgICAgICBsZWZ0QnV0dG9uLmFwcGVuZENoaWxkKGxlZnRCdXR0b25JY29uKTtcbiAgICAgICAgICAgIGxlZnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50YWJCYXJfLnNjcm9sbExlZnQgLT0gdGhpcy5Db25zdGFudF8uVEFCX1NDUk9MTF9QSVhFTFM7XG4gICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdmFyIHJpZ2h0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByaWdodEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uVEFCX0JBUl9CVVRUT04pO1xuICAgICAgICAgICAgcmlnaHRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlRBQl9CQVJfUklHSFRfQlVUVE9OKTtcbiAgICAgICAgICAgIHZhciByaWdodEJ1dHRvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICAgICByaWdodEJ1dHRvbkljb24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklDT04pO1xuICAgICAgICAgICAgcmlnaHRCdXR0b25JY29uLnRleHRDb250ZW50ID0gdGhpcy5Db25zdGFudF8uQ0hFVlJPTl9SSUdIVDtcbiAgICAgICAgICAgIHJpZ2h0QnV0dG9uLmFwcGVuZENoaWxkKHJpZ2h0QnV0dG9uSWNvbik7XG4gICAgICAgICAgICByaWdodEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYkJhcl8uc2Nyb2xsTGVmdCArPSB0aGlzLkNvbnN0YW50Xy5UQUJfU0NST0xMX1BJWEVMUztcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdEJ1dHRvbik7XG4gICAgICAgICAgICB0YWJDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy50YWJCYXJfKTtcbiAgICAgICAgICAgIHRhYkNvbnRhaW5lci5hcHBlbmRDaGlsZChyaWdodEJ1dHRvbik7XG4gICAgICAgICAgICAvLyBBZGQgYW5kIHJlbW92ZSBidXR0b25zIGRlcGVuZGluZyBvbiBzY3JvbGwgcG9zaXRpb24uXG4gICAgICAgICAgICB2YXIgdGFiU2Nyb2xsSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50YWJCYXJfLnNjcm9sbExlZnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxlZnRCdXR0b24uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLklTX0FDVElWRSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGVmdEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfQUNUSVZFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFiQmFyXy5zY3JvbGxMZWZ0IDwgdGhpcy50YWJCYXJfLnNjcm9sbFdpZHRoIC0gdGhpcy50YWJCYXJfLm9mZnNldFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19BQ1RJVkUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19BQ1RJVkUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0uYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMudGFiQmFyXy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0YWJTY3JvbGxIYW5kbGVyKTtcbiAgICAgICAgICAgIHRhYlNjcm9sbEhhbmRsZXIoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYkJhcl8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSlNfUklQUExFX0VGRkVDVCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhYkJhcl8uY2xhc3NMaXN0LmFkZCh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9JR05PUkVfRVZFTlRTKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNlbGVjdCBlbGVtZW50IHRhYnMsIGRvY3VtZW50IHBhbmVsc1xuICAgICAgICAgICAgdmFyIHRhYnMgPSB0aGlzLnRhYkJhcl8ucXVlcnlTZWxlY3RvckFsbCgnLicgKyB0aGlzLkNzc0NsYXNzZXNfLlRBQik7XG4gICAgICAgICAgICB2YXIgcGFuZWxzID0gdGhpcy5jb250ZW50Xy5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHRoaXMuQ3NzQ2xhc3Nlc18uUEFORUwpO1xuICAgICAgICAgICAgLy8gQ3JlYXRlIG5ldyB0YWJzIGZvciBlYWNoIHRhYiBlbGVtZW50XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBuZXcgTWF0ZXJpYWxMYXlvdXRUYWIodGFic1tpXSwgdGFicywgcGFuZWxzLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19VUEdSQURFRCk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBDb25zdHJ1Y3RvciBmb3IgYW4gaW5kaXZpZHVhbCB0YWIuXG4gICAqXG4gICAqIEBjb25zdHJ1Y3RvclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSB0YWIgVGhlIEhUTUwgZWxlbWVudCBmb3IgdGhlIHRhYi5cbiAgICogQHBhcmFtIHshQXJyYXk8SFRNTEVsZW1lbnQ+fSB0YWJzIEFycmF5IHdpdGggSFRNTCBlbGVtZW50cyBmb3IgYWxsIHRhYnMuXG4gICAqIEBwYXJhbSB7IUFycmF5PEhUTUxFbGVtZW50Pn0gcGFuZWxzIEFycmF5IHdpdGggSFRNTCBlbGVtZW50cyBmb3IgYWxsIHBhbmVscy5cbiAgICogQHBhcmFtIHtNYXRlcmlhbExheW91dH0gbGF5b3V0IFRoZSBNYXRlcmlhbExheW91dCBvYmplY3QgdGhhdCBvd25zIHRoZSB0YWIuXG4gICAqL1xuZnVuY3Rpb24gTWF0ZXJpYWxMYXlvdXRUYWIodGFiLCB0YWJzLCBwYW5lbHMsIGxheW91dCkge1xuICAgIC8qKlxuICAgICAqIEF1eGlsaWFyeSBtZXRob2QgdG8gcHJvZ3JhbW1hdGljYWxseSBzZWxlY3QgYSB0YWIgaW4gdGhlIFVJLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNlbGVjdFRhYigpIHtcbiAgICAgICAgdmFyIGhyZWYgPSB0YWIuaHJlZi5zcGxpdCgnIycpWzFdO1xuICAgICAgICB2YXIgcGFuZWwgPSBsYXlvdXQuY29udGVudF8ucXVlcnlTZWxlY3RvcignIycgKyBocmVmKTtcbiAgICAgICAgbGF5b3V0LnJlc2V0VGFiU3RhdGVfKHRhYnMpO1xuICAgICAgICBsYXlvdXQucmVzZXRQYW5lbFN0YXRlXyhwYW5lbHMpO1xuICAgICAgICB0YWIuY2xhc3NMaXN0LmFkZChsYXlvdXQuQ3NzQ2xhc3Nlc18uSVNfQUNUSVZFKTtcbiAgICAgICAgcGFuZWwuY2xhc3NMaXN0LmFkZChsYXlvdXQuQ3NzQ2xhc3Nlc18uSVNfQUNUSVZFKTtcbiAgICB9XG4gICAgaWYgKHRhYikge1xuICAgICAgICBpZiAobGF5b3V0LnRhYkJhcl8uY2xhc3NMaXN0LmNvbnRhaW5zKGxheW91dC5Dc3NDbGFzc2VzXy5KU19SSVBQTEVfRUZGRUNUKSkge1xuICAgICAgICAgICAgdmFyIHJpcHBsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGxheW91dC5Dc3NDbGFzc2VzXy5SSVBQTEVfQ09OVEFJTkVSKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGxheW91dC5Dc3NDbGFzc2VzXy5KU19SSVBQTEVfRUZGRUNUKTtcbiAgICAgICAgICAgIHZhciByaXBwbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICByaXBwbGUuY2xhc3NMaXN0LmFkZChsYXlvdXQuQ3NzQ2xhc3Nlc18uUklQUExFKTtcbiAgICAgICAgICAgIHJpcHBsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChyaXBwbGUpO1xuICAgICAgICAgICAgdGFiLmFwcGVuZENoaWxkKHJpcHBsZUNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGlmICh0YWIuZ2V0QXR0cmlidXRlKCdocmVmJykuY2hhckF0KDApID09PSAnIycpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc2VsZWN0VGFiKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0YWIuc2hvdyA9IHNlbGVjdFRhYjtcbiAgICB9XG59XG53aW5kb3dbJ01hdGVyaWFsTGF5b3V0VGFiJ10gPSBNYXRlcmlhbExheW91dFRhYjtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbExheW91dCxcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxMYXlvdXQnLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLWxheW91dCdcbn0pO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIERhdGEgVGFibGUgQ2FyZCBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsRGF0YVRhYmxlID0gZnVuY3Rpb24gTWF0ZXJpYWxEYXRhVGFibGUoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbERhdGFUYWJsZSddID0gTWF0ZXJpYWxEYXRhVGFibGU7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbERhdGFUYWJsZS5wcm90b3R5cGUuQ29uc3RhbnRfID0ge307XG4vKipcbiAgICogU3RvcmUgc3RyaW5ncyBmb3IgY2xhc3MgbmFtZXMgZGVmaW5lZCBieSB0aGlzIGNvbXBvbmVudCB0aGF0IGFyZSB1c2VkIGluXG4gICAqIEphdmFTY3JpcHQuIFRoaXMgYWxsb3dzIHVzIHRvIHNpbXBseSBjaGFuZ2UgaXQgaW4gb25lIHBsYWNlIHNob3VsZCB3ZVxuICAgKiBkZWNpZGUgdG8gbW9kaWZ5IGF0IGEgbGF0ZXIgZGF0ZS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbERhdGFUYWJsZS5wcm90b3R5cGUuQ3NzQ2xhc3Nlc18gPSB7XG4gICAgREFUQV9UQUJMRTogJ21kbC1kYXRhLXRhYmxlJyxcbiAgICBTRUxFQ1RBQkxFOiAnbWRsLWRhdGEtdGFibGUtLXNlbGVjdGFibGUnLFxuICAgIElTX1NFTEVDVEVEOiAnaXMtc2VsZWN0ZWQnLFxuICAgIElTX1VQR1JBREVEOiAnaXMtdXBncmFkZWQnXG59O1xuLyoqXG4gICAqIEdlbmVyYXRlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgdG9nZ2xlcyB0aGUgc2VsZWN0aW9uIHN0YXRlIG9mIGFcbiAgICogc2luZ2xlIHJvdyAob3IgbXVsdGlwbGUgcm93cykuXG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gY2hlY2tib3ggQ2hlY2tib3ggdGhhdCB0b2dnbGVzIHRoZSBzZWxlY3Rpb24gc3RhdGUuXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJvdyBSb3cgdG8gdG9nZ2xlIHdoZW4gY2hlY2tib3ggY2hhbmdlcy5cbiAgICogQHBhcmFtIHsoQXJyYXk8T2JqZWN0PnxOb2RlTGlzdCk9fSBvcHRfcm93cyBSb3dzIHRvIHRvZ2dsZSB3aGVuIGNoZWNrYm94IGNoYW5nZXMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxEYXRhVGFibGUucHJvdG90eXBlLnNlbGVjdFJvd18gPSBmdW5jdGlvbiAoY2hlY2tib3gsIHJvdywgb3B0X3Jvd3MpIHtcbiAgICBpZiAocm93KSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfU0VMRUNURUQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3cuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX1NFTEVDVEVEKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBpZiAob3B0X3Jvd3MpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIGVsO1xuICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgb3B0X3Jvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZWwgPSBvcHRfcm93c1tpXS5xdWVyeVNlbGVjdG9yKCd0ZCcpLnF1ZXJ5U2VsZWN0b3IoJy5tZGwtY2hlY2tib3gnKTtcbiAgICAgICAgICAgICAgICAgICAgZWxbJ01hdGVyaWFsQ2hlY2tib3gnXS5jaGVjaygpO1xuICAgICAgICAgICAgICAgICAgICBvcHRfcm93c1tpXS5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfU0VMRUNURUQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG9wdF9yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsID0gb3B0X3Jvd3NbaV0ucXVlcnlTZWxlY3RvcigndGQnKS5xdWVyeVNlbGVjdG9yKCcubWRsLWNoZWNrYm94Jyk7XG4gICAgICAgICAgICAgICAgICAgIGVsWydNYXRlcmlhbENoZWNrYm94J10udW5jaGVjaygpO1xuICAgICAgICAgICAgICAgICAgICBvcHRfcm93c1tpXS5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfU0VMRUNURUQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpO1xuICAgIH1cbn07XG4vKipcbiAgICogQ3JlYXRlcyBhIGNoZWNrYm94IGZvciBhIHNpbmdsZSBvciBvciBtdWx0aXBsZSByb3dzIGFuZCBob29rcyB1cCB0aGVcbiAgICogZXZlbnQgaGFuZGxpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJvdyBSb3cgdG8gdG9nZ2xlIHdoZW4gY2hlY2tib3ggY2hhbmdlcy5cbiAgICogQHBhcmFtIHsoQXJyYXk8T2JqZWN0PnxOb2RlTGlzdCk9fSBvcHRfcm93cyBSb3dzIHRvIHRvZ2dsZSB3aGVuIGNoZWNrYm94IGNoYW5nZXMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxEYXRhVGFibGUucHJvdG90eXBlLmNyZWF0ZUNoZWNrYm94XyA9IGZ1bmN0aW9uIChyb3csIG9wdF9yb3dzKSB7XG4gICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdtZGwtY2hlY2tib3gnKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdtZGwtanMtY2hlY2tib3gnKTtcbiAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdtZGwtanMtcmlwcGxlLWVmZmVjdCcpO1xuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ21kbC1kYXRhLXRhYmxlX19zZWxlY3QnKTtcbiAgICB2YXIgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNoZWNrYm94LnR5cGUgPSAnY2hlY2tib3gnO1xuICAgIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ21kbC1jaGVja2JveF9faW5wdXQnKTtcbiAgICBpZiAocm93KSB7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSByb3cuY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfU0VMRUNURUQpO1xuICAgICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLnNlbGVjdFJvd18oY2hlY2tib3gsIHJvdykpO1xuICAgICAgICBpZiAocm93LmRhdGFzZXRbJ21kbERhdGFUYWJsZVNlbGVjdGFibGVOYW1lJ10pIHtcbiAgICAgICAgICAgIGNoZWNrYm94Lm5hbWUgPSByb3cuZGF0YXNldFsnbWRsRGF0YVRhYmxlU2VsZWN0YWJsZU5hbWUnXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocm93LmRhdGFzZXRbJ21kbERhdGFUYWJsZVNlbGVjdGFibGVWYWx1ZSddKSB7XG4gICAgICAgICAgICBjaGVja2JveC52YWx1ZSA9IHJvdy5kYXRhc2V0WydtZGxEYXRhVGFibGVTZWxlY3RhYmxlVmFsdWUnXTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3B0X3Jvd3MpIHtcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5zZWxlY3RSb3dfKGNoZWNrYm94LCBudWxsLCBvcHRfcm93cykpO1xuICAgIH1cbiAgICBsYWJlbC5hcHBlbmRDaGlsZChjaGVja2JveCk7XG4gICAgY29tcG9uZW50SGFuZGxlci51cGdyYWRlRWxlbWVudChsYWJlbCwgJ01hdGVyaWFsQ2hlY2tib3gnKTtcbiAgICByZXR1cm4gbGFiZWw7XG59O1xuLyoqXG4gICAqIEluaXRpYWxpemUgZWxlbWVudC5cbiAgICovXG5NYXRlcmlhbERhdGFUYWJsZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50Xykge1xuICAgICAgICB2YXIgZmlyc3RIZWFkZXIgPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJ3RoJyk7XG4gICAgICAgIHZhciBib2R5Um93cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvckFsbCgndGJvZHkgdHInKSk7XG4gICAgICAgIHZhciBmb290Um93cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuZWxlbWVudF8ucXVlcnlTZWxlY3RvckFsbCgndGZvb3QgdHInKSk7XG4gICAgICAgIHZhciByb3dzID0gYm9keVJvd3MuY29uY2F0KGZvb3RSb3dzKTtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudF8uY2xhc3NMaXN0LmNvbnRhaW5zKHRoaXMuQ3NzQ2xhc3Nlc18uU0VMRUNUQUJMRSkpIHtcbiAgICAgICAgICAgIHZhciB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICB2YXIgaGVhZGVyQ2hlY2tib3ggPSB0aGlzLmNyZWF0ZUNoZWNrYm94XyhudWxsLCByb3dzKTtcbiAgICAgICAgICAgIHRoLmFwcGVuZENoaWxkKGhlYWRlckNoZWNrYm94KTtcbiAgICAgICAgICAgIGZpcnN0SGVhZGVyLnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoLCBmaXJzdEhlYWRlcik7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJvd3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZmlyc3RDZWxsID0gcm93c1tpXS5xdWVyeVNlbGVjdG9yKCd0ZCcpO1xuICAgICAgICAgICAgICAgIGlmIChmaXJzdENlbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvd3NbaV0ucGFyZW50Tm9kZS5ub2RlTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnVEJPRFknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcm93Q2hlY2tib3ggPSB0aGlzLmNyZWF0ZUNoZWNrYm94Xyhyb3dzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRkLmFwcGVuZENoaWxkKHJvd0NoZWNrYm94KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByb3dzW2ldLmluc2VydEJlZm9yZSh0ZCwgZmlyc3RDZWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19VUEdSQURFRCk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuLy8gVGhlIGNvbXBvbmVudCByZWdpc3RlcnMgaXRzZWxmLiBJdCBjYW4gYXNzdW1lIGNvbXBvbmVudEhhbmRsZXIgaXMgYXZhaWxhYmxlXG4vLyBpbiB0aGUgZ2xvYmFsIHNjb3BlLlxuY29tcG9uZW50SGFuZGxlci5yZWdpc3Rlcih7XG4gICAgY29uc3RydWN0b3I6IE1hdGVyaWFsRGF0YVRhYmxlLFxuICAgIGNsYXNzQXNTdHJpbmc6ICdNYXRlcmlhbERhdGFUYWJsZScsXG4gICAgY3NzQ2xhc3M6ICdtZGwtanMtZGF0YS10YWJsZSdcbn0pO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTUgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAgICogQ2xhc3MgY29uc3RydWN0b3IgZm9yIFJpcHBsZSBNREwgY29tcG9uZW50LlxuICAgKiBJbXBsZW1lbnRzIE1ETCBjb21wb25lbnQgZGVzaWduIHBhdHRlcm4gZGVmaW5lZCBhdDpcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2phc29ubWF5ZXMvbWRsLWNvbXBvbmVudC1kZXNpZ24tcGF0dGVyblxuICAgKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXBncmFkZWQuXG4gICAqL1xudmFyIE1hdGVyaWFsUmlwcGxlID0gZnVuY3Rpb24gTWF0ZXJpYWxSaXBwbGUoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudF8gPSBlbGVtZW50O1xuICAgIC8vIEluaXRpYWxpemUgaW5zdGFuY2UuXG4gICAgdGhpcy5pbml0KCk7XG59O1xud2luZG93WydNYXRlcmlhbFJpcHBsZSddID0gTWF0ZXJpYWxSaXBwbGU7XG4vKipcbiAgICogU3RvcmUgY29uc3RhbnRzIGluIG9uZSBwbGFjZSBzbyB0aGV5IGNhbiBiZSB1cGRhdGVkIGVhc2lseS5cbiAgICpcbiAgICogQGVudW0ge3N0cmluZyB8IG51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFJpcHBsZS5wcm90b3R5cGUuQ29uc3RhbnRfID0ge1xuICAgIElOSVRJQUxfU0NBTEU6ICdzY2FsZSgwLjAwMDEsIDAuMDAwMSknLFxuICAgIElOSVRJQUxfU0laRTogJzFweCcsXG4gICAgSU5JVElBTF9PUEFDSVRZOiAnMC40JyxcbiAgICBGSU5BTF9PUEFDSVRZOiAnMCcsXG4gICAgRklOQUxfU0NBTEU6ICcnXG59O1xuLyoqXG4gICAqIFN0b3JlIHN0cmluZ3MgZm9yIGNsYXNzIG5hbWVzIGRlZmluZWQgYnkgdGhpcyBjb21wb25lbnQgdGhhdCBhcmUgdXNlZCBpblxuICAgKiBKYXZhU2NyaXB0LiBUaGlzIGFsbG93cyB1cyB0byBzaW1wbHkgY2hhbmdlIGl0IGluIG9uZSBwbGFjZSBzaG91bGQgd2VcbiAgICogZGVjaWRlIHRvIG1vZGlmeSBhdCBhIGxhdGVyIGRhdGUuXG4gICAqXG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSaXBwbGUucHJvdG90eXBlLkNzc0NsYXNzZXNfID0ge1xuICAgIFJJUFBMRV9DRU5URVI6ICdtZGwtcmlwcGxlLS1jZW50ZXInLFxuICAgIFJJUFBMRV9FRkZFQ1RfSUdOT1JFX0VWRU5UUzogJ21kbC1qcy1yaXBwbGUtZWZmZWN0LS1pZ25vcmUtZXZlbnRzJyxcbiAgICBSSVBQTEU6ICdtZGwtcmlwcGxlJyxcbiAgICBJU19BTklNQVRJTkc6ICdpcy1hbmltYXRpbmcnLFxuICAgIElTX1ZJU0lCTEU6ICdpcy12aXNpYmxlJ1xufTtcbi8qKlxuICAgKiBIYW5kbGUgbW91c2UgLyBmaW5nZXIgZG93biBvbiBlbGVtZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBUaGUgZXZlbnQgdGhhdCBmaXJlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG5NYXRlcmlhbFJpcHBsZS5wcm90b3R5cGUuZG93bkhhbmRsZXJfID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLnJpcHBsZUVsZW1lbnRfLnN0eWxlLndpZHRoICYmICF0aGlzLnJpcHBsZUVsZW1lbnRfLnN0eWxlLmhlaWdodCkge1xuICAgICAgICB2YXIgcmVjdCA9IHRoaXMuZWxlbWVudF8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHRoaXMuYm91bmRIZWlnaHQgPSByZWN0LmhlaWdodDtcbiAgICAgICAgdGhpcy5ib3VuZFdpZHRoID0gcmVjdC53aWR0aDtcbiAgICAgICAgdGhpcy5yaXBwbGVTaXplXyA9IE1hdGguc3FydChyZWN0LndpZHRoICogcmVjdC53aWR0aCArIHJlY3QuaGVpZ2h0ICogcmVjdC5oZWlnaHQpICogMiArIDI7XG4gICAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8uc3R5bGUud2lkdGggPSB0aGlzLnJpcHBsZVNpemVfICsgJ3B4JztcbiAgICAgICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5zdHlsZS5oZWlnaHQgPSB0aGlzLnJpcHBsZVNpemVfICsgJ3B4JztcbiAgICB9XG4gICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5jbGFzc0xpc3QuYWRkKHRoaXMuQ3NzQ2xhc3Nlc18uSVNfVklTSUJMRSk7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZWRvd24nICYmIHRoaXMuaWdub3JpbmdNb3VzZURvd25fKSB7XG4gICAgICAgIHRoaXMuaWdub3JpbmdNb3VzZURvd25fID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgICAgICAgdGhpcy5pZ25vcmluZ01vdXNlRG93bl8gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmcmFtZUNvdW50ID0gdGhpcy5nZXRGcmFtZUNvdW50KCk7XG4gICAgICAgIGlmIChmcmFtZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RnJhbWVDb3VudCgxKTtcbiAgICAgICAgdmFyIGJvdW5kID0gZXZlbnQuY3VycmVudFRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgdmFyIHg7XG4gICAgICAgIHZhciB5O1xuICAgICAgICAvLyBDaGVjayBpZiB3ZSBhcmUgaGFuZGxpbmcgYSBrZXlib2FyZCBjbGljay5cbiAgICAgICAgaWYgKGV2ZW50LmNsaWVudFggPT09IDAgJiYgZXZlbnQuY2xpZW50WSA9PT0gMCkge1xuICAgICAgICAgICAgeCA9IE1hdGgucm91bmQoYm91bmQud2lkdGggLyAyKTtcbiAgICAgICAgICAgIHkgPSBNYXRoLnJvdW5kKGJvdW5kLmhlaWdodCAvIDIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGNsaWVudFggPSBldmVudC5jbGllbnRYID8gZXZlbnQuY2xpZW50WCA6IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgICAgICAgIHZhciBjbGllbnRZID0gZXZlbnQuY2xpZW50WSA/IGV2ZW50LmNsaWVudFkgOiBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gICAgICAgICAgICB4ID0gTWF0aC5yb3VuZChjbGllbnRYIC0gYm91bmQubGVmdCk7XG4gICAgICAgICAgICB5ID0gTWF0aC5yb3VuZChjbGllbnRZIC0gYm91bmQudG9wKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFJpcHBsZVhZKHgsIHkpO1xuICAgICAgICB0aGlzLnNldFJpcHBsZVN0eWxlcyh0cnVlKTtcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1GcmFtZUhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgfVxufTtcbi8qKlxuICAgKiBIYW5kbGUgbW91c2UgLyBmaW5nZXIgdXAgb24gZWxlbWVudC5cbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGV2ZW50IHRoYXQgZmlyZWQuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSaXBwbGUucHJvdG90eXBlLnVwSGFuZGxlcl8gPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBEb24ndCBmaXJlIGZvciB0aGUgYXJ0aWZpY2lhbCBcIm1vdXNldXBcIiBnZW5lcmF0ZWQgYnkgYSBkb3VibGUtY2xpY2suXG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LmRldGFpbCAhPT0gMikge1xuICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19WSVNJQkxFKTtcbiAgICB9XG4gICAgLy8gQWxsb3cgYSByZXBhaW50IHRvIG9jY3VyIGJlZm9yZSByZW1vdmluZyB0aGlzIGNsYXNzLCBzbyB0aGUgYW5pbWF0aW9uXG4gICAgLy8gc2hvd3MgZm9yIHRhcCBldmVudHMsIHdoaWNoIHNlZW0gdG8gdHJpZ2dlciBhIG1vdXNldXAgdG9vIHNvb24gYWZ0ZXJcbiAgICAvLyBtb3VzZWRvd24uXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5Dc3NDbGFzc2VzXy5JU19WSVNJQkxFKTtcbiAgICB9LmJpbmQodGhpcyksIDApO1xufTtcbi8qKlxuICAgKiBJbml0aWFsaXplIGVsZW1lbnQuXG4gICAqL1xuTWF0ZXJpYWxSaXBwbGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudF8pIHtcbiAgICAgICAgdmFyIHJlY2VudGVyaW5nID0gdGhpcy5lbGVtZW50Xy5jbGFzc0xpc3QuY29udGFpbnModGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEVfQ0VOVEVSKTtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnRfLmNsYXNzTGlzdC5jb250YWlucyh0aGlzLkNzc0NsYXNzZXNfLlJJUFBMRV9FRkZFQ1RfSUdOT1JFX0VWRU5UUykpIHtcbiAgICAgICAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8gPSB0aGlzLmVsZW1lbnRfLnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5Dc3NDbGFzc2VzXy5SSVBQTEUpO1xuICAgICAgICAgICAgdGhpcy5mcmFtZUNvdW50XyA9IDA7XG4gICAgICAgICAgICB0aGlzLnJpcHBsZVNpemVfID0gMDtcbiAgICAgICAgICAgIHRoaXMueF8gPSAwO1xuICAgICAgICAgICAgdGhpcy55XyA9IDA7XG4gICAgICAgICAgICAvLyBUb3VjaCBzdGFydCBwcm9kdWNlcyBhIGNvbXBhdCBtb3VzZSBkb3duIGV2ZW50LCB3aGljaCB3b3VsZCBjYXVzZSBhXG4gICAgICAgICAgICAvLyBzZWNvbmQgcmlwcGxlcy4gVG8gYXZvaWQgdGhhdCwgd2UgdXNlIHRoaXMgcHJvcGVydHkgdG8gaWdub3JlIHRoZSBmaXJzdFxuICAgICAgICAgICAgLy8gbW91c2UgZG93biBhZnRlciBhIHRvdWNoIHN0YXJ0LlxuICAgICAgICAgICAgdGhpcy5pZ25vcmluZ01vdXNlRG93bl8gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYm91bmREb3duSGFuZGxlciA9IHRoaXMuZG93bkhhbmRsZXJfLmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuYm91bmREb3duSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLmJvdW5kRG93bkhhbmRsZXIpO1xuICAgICAgICAgICAgdGhpcy5ib3VuZFVwSGFuZGxlciA9IHRoaXMudXBIYW5kbGVyXy5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Xy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZFVwSGFuZGxlcik7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnRfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLmJvdW5kVXBIYW5kbGVyKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmJvdW5kVXBIYW5kbGVyKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudF8uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuYm91bmRVcEhhbmRsZXIpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHRlciBmb3IgZnJhbWVDb3VudF8uXG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn0gdGhlIGZyYW1lIGNvdW50LlxuICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuZ2V0RnJhbWVDb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mcmFtZUNvdW50XztcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICogU2V0dGVyIGZvciBmcmFtZUNvdW50Xy5cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGZDIHRoZSBmcmFtZSBjb3VudC5cbiAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLnNldEZyYW1lQ291bnQgPSBmdW5jdGlvbiAoZkMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZyYW1lQ291bnRfID0gZkM7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHRlciBmb3IgcmlwcGxlRWxlbWVudF8uXG4gICAgICAgICAqIEByZXR1cm4ge0VsZW1lbnR9IHRoZSByaXBwbGUgZWxlbWVudC5cbiAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmdldFJpcHBsZUVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmlwcGxlRWxlbWVudF87XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIHJpcHBsZSBYIGFuZCBZIGNvb3JkaW5hdGVzLlxuICAgICAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IG5ld1ggdGhlIG5ldyBYIGNvb3JkaW5hdGVcbiAgICAgICAgICogQHBhcmFtICB7bnVtYmVyfSBuZXdZIHRoZSBuZXcgWSBjb29yZGluYXRlXG4gICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5zZXRSaXBwbGVYWSA9IGZ1bmN0aW9uIChuZXdYLCBuZXdZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy54XyA9IG5ld1g7XG4gICAgICAgICAgICAgICAgdGhpcy55XyA9IG5ld1k7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAqIFNldHMgdGhlIHJpcHBsZSBzdHlsZXMuXG4gICAgICAgICAqIEBwYXJhbSAge2Jvb2xlYW59IHN0YXJ0IHdoZXRoZXIgb3Igbm90IHRoaXMgaXMgdGhlIHN0YXJ0IGZyYW1lLlxuICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuc2V0UmlwcGxlU3R5bGVzID0gZnVuY3Rpb24gKHN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucmlwcGxlRWxlbWVudF8gIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRyYW5zZm9ybVN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjYWxlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9ICd0cmFuc2xhdGUoJyArIHRoaXMueF8gKyAncHgsICcgKyB0aGlzLnlfICsgJ3B4KSc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NhbGUgPSB0aGlzLkNvbnN0YW50Xy5JTklUSUFMX1NDQUxFO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZSA9IHRoaXMuQ29uc3RhbnRfLklOSVRJQUxfU0laRTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlID0gdGhpcy5Db25zdGFudF8uRklOQUxfU0NBTEU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplID0gdGhpcy5yaXBwbGVTaXplXyArICdweCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVjZW50ZXJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSAndHJhbnNsYXRlKCcgKyB0aGlzLmJvdW5kV2lkdGggLyAyICsgJ3B4LCAnICsgdGhpcy5ib3VuZEhlaWdodCAvIDIgKyAncHgpJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdHJpbmcgPSAndHJhbnNsYXRlKC01MCUsIC01MCUpICcgKyBvZmZzZXQgKyBzY2FsZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaXBwbGVFbGVtZW50Xy5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8uc3R5bGUubXNUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1TdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8uc3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtU3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmlwcGxlRWxlbWVudF8uY2xhc3NMaXN0LnJlbW92ZSh0aGlzLkNzc0NsYXNzZXNfLklTX0FOSU1BVElORyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpcHBsZUVsZW1lbnRfLmNsYXNzTGlzdC5hZGQodGhpcy5Dc3NDbGFzc2VzXy5JU19BTklNQVRJTkcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgKiBIYW5kbGVzIGFuIGFuaW1hdGlvbiBmcmFtZS5cbiAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLmFuaW1GcmFtZUhhbmRsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZnJhbWVDb3VudF8tLSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1GcmFtZUhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRSaXBwbGVTdHlsZXMoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gICAqIERvd25ncmFkZSB0aGUgY29tcG9uZW50XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuTWF0ZXJpYWxSaXBwbGUucHJvdG90eXBlLm1kbERvd25ncmFkZV8gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5lbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLmJvdW5kRG93bkhhbmRsZXIpO1xuICAgIHRoaXMuZWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMuYm91bmREb3duSGFuZGxlcik7XG4gICAgdGhpcy5lbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5ib3VuZFVwSGFuZGxlcik7XG4gICAgdGhpcy5lbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5ib3VuZFVwSGFuZGxlcik7XG4gICAgdGhpcy5lbGVtZW50Xy5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuYm91bmRVcEhhbmRsZXIpO1xuICAgIHRoaXMuZWxlbWVudF8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuYm91bmRVcEhhbmRsZXIpO1xufTtcbi8vIFRoZSBjb21wb25lbnQgcmVnaXN0ZXJzIGl0c2VsZi4gSXQgY2FuIGFzc3VtZSBjb21wb25lbnRIYW5kbGVyIGlzIGF2YWlsYWJsZVxuLy8gaW4gdGhlIGdsb2JhbCBzY29wZS5cbmNvbXBvbmVudEhhbmRsZXIucmVnaXN0ZXIoe1xuICAgIGNvbnN0cnVjdG9yOiBNYXRlcmlhbFJpcHBsZSxcbiAgICBjbGFzc0FzU3RyaW5nOiAnTWF0ZXJpYWxSaXBwbGUnLFxuICAgIGNzc0NsYXNzOiAnbWRsLWpzLXJpcHBsZS1lZmZlY3QnLFxuICAgIHdpZGdldDogZmFsc2Vcbn0pO1xufSgpKTtcbiJdfQ==
