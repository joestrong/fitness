import ViewController from "./ViewController.js";
import Exercise from "../models/Exercise.js";

export default class OverviewController extends ViewController {

    constructor()
    {
        super(document.querySelector('#overview'));

        this.listEl = this.container.querySelector('.exercise-table tbody');
        this.listEl.addEventListener('click', (event) => {
            if (event.target.classList.contains('completeButton')) {
                this.completeExercise(event.target);
            }
        });
        this.populateExerciseList();
    }

    /**
     * Mark an exercise as complete in the exercises table
     * @param element
     */
    completeExercise(element)
    {
        var rowElement = element.parentNode.parentNode;
        var completeId = rowElement.getAttribute('data-id');
        Exercise.update(completeId, {
            lastComplete: Date.now()
        });
        this.populateExerciseList();
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
        for(let exercise of exercises) {
            this.addExerciseToDom(exercise);
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
}