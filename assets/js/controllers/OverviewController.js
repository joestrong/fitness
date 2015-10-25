import ViewController from "./ViewController.js";
import Exercise from "../models/Exercise.js";

export default class OverviewController extends ViewController {

    constructor()
    {
        super(document.querySelector('#overview'));

        this.listEl = document.querySelector('#exerciseList');
        this.populateExerciseList();

        this.addExerciseButton = document.querySelector('#addExerciseButton');
        this.addExerciseButton.addEventListener('click', () => this.addExercise())
    }

    /**
     * Adds a new exercise
     */
    addExercise()
    {
        var name = "pushups";
        var reps = 3;
        Exercise.add(name, reps);
        this.addExerciseToDom(name, reps);
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