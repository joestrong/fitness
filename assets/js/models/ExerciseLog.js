export default class ExerciseLog {

    /**
     * Stores a new exercise Log
     * @param exerciseId
     * @param dateCompleted
     */
    static add(exerciseId, dateCompleted)
    {
        var exerciseLogs = this.get();
        var exerciseLog = {
            id: this.getNewId(),
            exerciseId: exerciseId,
            dateCompleted: dateCompleted
        };
        exerciseLogs.push(exerciseLog);
        localStorage.setItem('exerciseLogs', JSON.stringify(exerciseLogs));
        return exerciseLog;
    }

    /**
     * Returns all the stored exercise logs
     * @returns {Array}
     */
    static get()
    {
        return JSON.parse(localStorage.getItem('exerciseLogs')) || [];
    }

    /**
     * Get the next id to use when adding a record
     * @returns {*}
     */
    static getNewId()
    {
        var exerciseLogs = this.get();
        var lastId = exerciseLogs.reduce(function(last, exerciseLog) {
            return Math.max(last, exerciseLog.id);
        }, 0);
        return lastId + 1;
    }

    /**
     * Get records where match criteria
     * @param property
     * @param operator
     * @param value
     */
    static where(property, operator, value)
    {
        var exerciseLogs = this.get();
        exerciseLogs = exerciseLogs.filter(function(exerciseLog) {
            var field = exerciseLog[property];
            var greaterThan = operator == '>' && field > value;
            var lessThan = operator == '<' && field < value;
            var equalTo = operator == '=' && field == value;
            return (greaterThan || lessThan || equalTo);
        });
        return exerciseLogs;
    }

    /**
     * Gets records based on custom query method
     * @param queryMethod
     */
    static query(queryMethod)
    {
        var exerciseLogs = this.get();
        exerciseLogs = exerciseLogs.filter(queryMethod);
        return exerciseLogs;
    }
}