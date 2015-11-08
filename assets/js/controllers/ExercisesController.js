import ViewController from "./ViewController.js";
import Exercise from "../models/Exercise.js";

export default class ExercisesController extends ViewController {

    constructor()
    {
        super(document.querySelector('#exercises'), 'Exercises');

        this.listEl = this.container.querySelector('.exercise-table tbody');
        this.listEl.addEventListener('click', (event) => {
            if (event.target.classList.contains('deleteExercise')) {
                this.rowToRemove = event.target.parentNode.parentNode;
                this.exerciseIdToRemove = this.rowToRemove.getAttribute('data-id');
                this.showDeleteExerciseDialog();
            }
        });
        this.populateExerciseList();

        this.addDialog = document.querySelector('#add-exercise-dialog');
        this.addExerciseName = this.addDialog.querySelector('#add-exercise-name');
        this.addExerciseReps = this.addDialog.querySelector('#add-exercise-reps');
        this.addExerciseRest = this.addDialog.querySelector('#add-exercise-rest');
        this.addDialogButtons = this.addDialog.querySelector('.mdl-dialog__actions').querySelectorAll('.mdl-button');
        this.addDialogButtons[0].addEventListener('click', () => this.addExercise());
        this.addDialogButtons[1].addEventListener('click', () => this.closeAddExerciseDialog());

        this.deleteDialog = document.querySelector('#delete-exercise-dialog');
        this.deleteDialogButtons = this.deleteDialog.querySelector('.mdl-dialog__actions').querySelectorAll('.mdl-button');
        this.deleteDialogButtons[0].addEventListener('click', () => this.deleteExercise());
        this.deleteDialogButtons[1].addEventListener('click', () => this.closeDeleteExerciseDialog());

        this.addExerciseButton = document.querySelector('#add-exercise-button');
        this.addExerciseButton.addEventListener('click', () => this.showAddExerciseDialog())
    }

    /**
     * Shows the Add Exercise dialog
     */
    showAddExerciseDialog()
    {
        this.addDialog.MaterialDialog.show();
        this.addExerciseName.focus();
    }

    /**
     * Closes the Add Exercise dialog
     */
    closeAddExerciseDialog()
    {
        this.addDialog.MaterialDialog.close();
    }

    /**
     * Adds a new exercise
     */
    addExercise()
    {
        var name = this.addExerciseName.value;
        var reps = this.addExerciseReps.value;
        var rest = this.addExerciseRest.value;
        this.addExerciseName.value = "";
        this.addExerciseReps.value = "";
        this.addExerciseRest.value = "";
        var exercise = Exercise.add(name, reps, rest);
        this.addExerciseToDom(exercise);
        this.closeAddExerciseDialog();
    }

    /**
     * Adds an exercise to the exercise list element in the dom
     * @param exercise
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
    populateExerciseList()
    {
        this.clearExercisesFromDom();
        var exercises = Exercise.get();
        for(let exercise of exercises) {
            this.addExerciseToDom(exercise);
        }
    }

    /**
     * Shows the Delete Exercise dialog
     */
    showDeleteExerciseDialog()
    {
        this.deleteDialog.MaterialDialog.show();
    }

    /**
     * Closes the Delete Exercise dialog
     */
    closeDeleteExerciseDialog()
    {
        this.deleteDialog.MaterialDialog.close();
    }

    /**
     * Delete exercise
     */
    deleteExercise()
    {
        this.listEl.removeChild(this.rowToRemove);
        Exercise.delete(this.exerciseIdToRemove);
        this.closeDeleteExerciseDialog();
    }

    /**
     * Clears the exercise list
     */
    clearExercisesFromDom()
    {
        this.listEl.innerHTML = '';
    }
}