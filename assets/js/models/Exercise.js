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
            reps: parseInt(reps),
            rest: parseInt(rest)
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

    /**
     * Get the next id to use when adding a record
     * @returns {*}
     */
    static getNewId()
    {
        var exercises = this.get();
        var lastId = exercises.reduce(function(last, exercise) {
            return Math.max(last, exercise.id);
        }, 0);
        return lastId + 1;
    }

    /**
     * Delete record matching id
     * @param id
     */
    static delete(id)
    {
        var exercises = this.get();
        exercises = exercises.filter(function(exercise) {
            return exercise.id != id;
        });
        localStorage.setItem('exercises', JSON.stringify(exercises));
    }

    /**
     * Update record matching id, replacing keys mentioned in changeData
     * @param id
     * @param changeData
     */
    static update(id, changeData)
    {
        var exercises = this.get();
        exercises = exercises.map(function(exercise) {
            if (exercise.id == id) {
                for (let attribute in changeData) {
                    if (changeData.hasOwnProperty(attribute)) {
                        exercise[attribute] = changeData[attribute];
                    }
                }
            }
            return exercise;
        });
        localStorage.setItem('exercises', JSON.stringify(exercises));
    }

    /**
     * Get records where match criteria
     * @param property
     * @param operator
     * @param value
     */
    static where(property, operator, value)
    {
        var exercises = this.get();
        exercises = exercises.filter(function(exercise) {
            var field = exercise[property];
            var greaterThan = operator == '>' && field > value;
            var lessThan = operator == '<' && field < value;
            var equalTo = operator == '=' && field == value;
            return (greaterThan || lessThan || equalTo);
        });
        return exercises;
    }

    /**
     * Gets records based on custom query method
     * @param queryMethod
     */
    static query(queryMethod)
    {
        var exercises = this.get();
        exercises = exercises.filter(queryMethod);
        return exercises;
    }
}