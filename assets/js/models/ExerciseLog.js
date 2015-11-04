export default class ExerciseLog {

    /**
     * Stores a new exercise Log
     * @param exerciseId
     * @param dateCompleted
     */
    static add(exerciseId, dateCompleted)
    {
        var store = this.getStore();
        var exerciseLog = {
            id: store.incrementId,
            exerciseId: exerciseId,
            dateCompleted: dateCompleted
        };
        store.items.push(exerciseLog);
        store.incrementId++;
        this.setStore(store);
        return exerciseLog;
    }

    /**
     * Returns all the stored exercise logs
     * @returns {{}}
     */
    static get()
    {
        var store = this.getStore();
        return store.items;
    }

    /**
     * Returns the store
     * @returns {{}}
     */
    static getStore()
    {
        var store = JSON.parse(localStorage.getItem('exerciseLogs')) || { incrementId: 1, items: [] };
        if (!store.items) {
            return this.upgradeLegacy(store);
        }
        return store;
    }

    /**
     * Converts old-style store to new style
     * @param legacyStore
     * @returns {{}}
     */
    static upgradeLegacy(legacyStore)
    {
        var store = {};
        store.items = legacyStore;
        store.incrementId = (function() {
            var lastId = legacyStore.reduce(function (last, exercise) {
                return Math.max(last, exercise.id);
            }, 0);
            return lastId + 1;
        })();
        return store;
    }

    /**
     * Get records where match criteria
     * @param property
     * @param operator
     * @param value
     */
    static where(property, operator, value)
    {
        var store = this.getStore();
        store.items = store.items.filter(function(exerciseLog) {
            var field = exerciseLog[property];
            var greaterThan = operator == '>' && field > value;
            var lessThan = operator == '<' && field < value;
            var equalTo = operator == '=' && field == value;
            return (greaterThan || lessThan || equalTo);
        });
        return store.items;
    }

    /**
     * Gets records based on custom query method
     * @param queryMethod
     */
    static query(queryMethod)
    {
        var store = this.getStore();
        store.items = store.items.filter(queryMethod);
        return store.items;
    }

    /**
     * Sets the store
     */
    static setStore(store)
    {
        localStorage.setItem('exerciseLogs', JSON.stringify(store));
    }
}