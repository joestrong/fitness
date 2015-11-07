import ViewController from "./ViewController.js";
import Exercise from "../models/Exercise.js";
var dateFormat = require('dateformat');

export default class ScheduleController extends ViewController {

    constructor()
    {
        super(document.querySelector('#schedule'), 'Schedule');

        this.listEl = this.container.querySelector('.exercise-table tbody');
        this.populateScheduleList();
    }

    populateScheduleList()
    {
        this.clearScheduleFromDom();
        var exercises = Exercise.get();
        for(let exercise of exercises) {
            exercise.scheduleDate = this.calculateScheduleDate(exercise);
        }
        exercises = exercises.sort(function sortByScheduleDate(a, b) {
            return a.scheduleDate > b.scheduleDate ? 1 : b.scheduleDate > a.scheduleDate ? -1 : 0;
        });
        var lastGrouping = 0;
        for(let exercise of exercises) {
            if (exercise.scheduleDate !== lastGrouping) {
                this.addGroupToDom(exercise.scheduleDate);
            }
            lastGrouping = exercise.scheduleDate;
            this.addExerciseToDom(exercise);
        }
    }

    /**
     * Clears the exercise list
     */
    clearScheduleFromDom()
    {
        this.listEl.innerHTML = '';
    }

    /**
     * Adds a grouping to the scheduled exercises table
     */
    addGroupToDom(scheduleDateTimestamp)
    {
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
    addExerciseToDom(exercise)
    {
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
    calculateScheduleDate(exercise)
    {
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
}