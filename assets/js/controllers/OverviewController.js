import ViewController from "./ViewController.js";
import Exercise from "../models/Exercise.js";

export default class OverviewController extends ViewController {

    constructor()
    {
        super(document.querySelector('#overview'));

        this.listEl = document.querySelector('#exerciseList');
        this.populateExerciseList();

        this.dialog = document.querySelector('#add-exercise-dialog');
        this.addExerciseName = this.dialog.querySelector('#add-exercise-name');
        this.addExerciseReps = this.dialog.querySelector('#add-exercise-reps');
        this.dialogButtons = this.dialog.querySelector('.mdl-dialog__actions').querySelectorAll('.mdl-button');
        this.dialogButtons[0].addEventListener('click', () => this.addExercise());
        this.dialogButtons[1].addEventListener('click', () => this.closeAddExerciseDialog());

        this.addExerciseButton = document.querySelector('#add-exercise-button');
        this.addExerciseButton.addEventListener('click', () => this.showAddExerciseDialog())
    }

    /**
     * Shows the Add Exercise dialog
     */
    showAddExerciseDialog()
    {
        this.dialog.MaterialDialog.show();
    }

    /**
     * Closes the Add Exercise dialog
     */
    closeAddExerciseDialog()
    {
        this.dialog.MaterialDialog.close();
    }

    /**
     * Adds a new exercise
     */
    addExercise()
    {
        var name = this.addExerciseName.value;
        var reps = this.addExerciseReps.value;
        this.addExerciseName.value = "";
        this.addExerciseReps.value = "";
        Exercise.add(name, reps);
        this.addExerciseToDom(name, reps);
        this.closeAddExerciseDialog();
    }

    /**
     * Adds an exercise to the exercise list element in the dom
     * @param name
     * @param reps
     */
    addExerciseToDom(name, reps)
    {
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
    populateExerciseList()
    {
        var exercises = Exercise.get();
        for(let exercise of exercises) {
            this.addExerciseToDom(exercise.name, exercise.reps);
        }
    }
}