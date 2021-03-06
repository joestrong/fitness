import ViewController from "./ViewController.js";
import Exercise from "../models/Exercise.js";
import ExerciseLog from "../models/ExerciseLog.js";

export default class OverviewController extends ViewController {

    constructor(application)
    {
        super(document.querySelector('#overview'), 'Overview');

        this.application = application;

        this.listEl = this.container.querySelector('.exercise-table tbody');
        this.listEl.addEventListener('click', (event) => {
            if (event.target.classList.contains('completeButton')) {
                this.completeExercise(event.target);
            }
        });
        this.populateExerciseList();
        document.addEventListener('exerciseUpdate', this.populateExerciseList.bind(this));
    }

    /**
     * Mark an exercise as complete in the exercises table
     * @param element
     */
    completeExercise(element)
    {
        var rowElement = element.parentNode.parentNode;
        var exerciseId = rowElement.getAttribute('data-id');
        var completionDate = Date.now();
        Exercise.update(exerciseId, {
            lastComplete: completionDate
        });
        ExerciseLog.add(exerciseId, completionDate);
    }

    /**
     * Populates the overview exercise list with exercises due
     */
    populateExerciseList()
    {
        this.clearExercisesFromDom();
        var exercises = Exercise.query(function(exercise) {
            var dayCompleted = new Date(exercise.lastComplete).setHours(0, 0, 0, 0);
            var restTime = (parseInt(exercise.rest) + 1) * 24 * 60 * 60 * 1000;
            return (dayCompleted < Date.now() - restTime) || typeof exercise.lastComplete === 'undefined';
        });
        if (exercises.length === 0) {
            if (Exercise.get().length === 0) {
                this.showNoExercisesText();
            } else {
                this.showNoExercisesForTodayText();
            }
        } else {
            for (let exercise of exercises) {
                this.addExerciseToDom(exercise);
            }
        }
    }

    /**
     * Adds an exercise to the exercise list element in the dom
     * @param name
     * @param reps
     */
    addExerciseToDom(exercise)
    {
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
    clearExercisesFromDom()
    {
        this.listEl.innerHTML = '';
    }

    /**
     * Shows a message in exercise table when no exercises are to be done today
     */
    showNoExercisesForTodayText()
    {
        var row = document.createElement("tr");

        var col = document.createElement("td");
        col.innerHTML = "There are no exercises left to do today. <a href='#'>Check schedule</a>.";
        col.className = "mdl-data-table__cell--non-numeric table-message";
        col.setAttribute('colspan', 3);
        col.addEventListener('click', event => {
            if (event.target.nodeName === "A") {
                this.application.switchToSchedule();
            }
        });

        row.appendChild(col);
        this.listEl.appendChild(row);
    }

    /**
     * Shows a message in exercise table when no exercises are to be done today
     */
    showNoExercisesText()
    {
        var row = document.createElement("tr");

        var col = document.createElement("td");
        col.innerHTML = "You haven't added any exercises yet. <a href='#'>Manage exercises</a>";
        col.className = "mdl-data-table__cell--non-numeric table-message";
        col.setAttribute('colspan', 3);
        col.addEventListener('click', event => {
            if (event.target.nodeName === "A") {
                this.application.switchToExercises();
            }
        });

        row.appendChild(col);
        this.listEl.appendChild(row);
    }
}