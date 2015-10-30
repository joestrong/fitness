export default class Exercise {

    /**
     * Stores a new exercise
     * @param name
     * @param reps
     */
    static add(name, reps, rest)
    {
        var exercises = this.get();
        var exercise = {
            id: this.getNewId(),
            name: name,
            reps: reps,
            rest: rest
        };
        exercises.push(exercise);
        localStorage.setItem('exercises', JSON.stringify(exercises));
        return exercise;
    }

    /**
     * Returns all the stored exercises
     * @returns {Array}
     */
    static get()
    {
        return JSON.parse(localStorage.getItem('exercises')) || [];
    }

    static getNewId()
    {
        var exercises = this.get();
        var lastId = exercises.reduce(function(last, exercise) {
            return Math.max(last, exercise.id);
        }, 0);
        return lastId + 1;
    }

    static delete(id)
    {
        var exercises = this.get();
        exercises = exercises.filter(function(exercise) {
            return exercise.id != id;
        });
        localStorage.setItem('exercises', JSON.stringify(exercises));
    }
}