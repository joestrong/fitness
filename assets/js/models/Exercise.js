export default class Exercise {

    /**
     * Stores a new exercise
     * @param name
     * @param reps
     */
    static add(name, reps)
    {
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
    static get()
    {
        return JSON.parse(localStorage.getItem('exercises')) || [];
    }
}