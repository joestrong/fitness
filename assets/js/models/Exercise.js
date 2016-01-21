import Model from './Model.js';

export default class Exercise extends Model{

    /**
     * Returns the localstorage key to use
     * @returns {string}
     */
    static getKey()
    {
        return 'exercises';
    }

    /**
     * Stores a new exercise
     * @param name
     * @param reps
     */
    static add(name, reps, rest)
    {
        var store = this.getStore();
        var exercise = {
            id: store.incrementId,
            name: name,
            reps: parseInt(reps),
            rest: parseInt(rest)
        };
        store.items.push(exercise);
        store.incrementId++;
        this.setStore(store);
        return exercise;
    }

    /**
     * Returns all the stored exercises
     * @returns {{}}
     */
    static get()
    {
        var store = this.getStore();
        return store.items;
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
     * Delete record matching id
     * @param id
     */
    static delete(id)
    {
        var store = this.getStore();
        store.items = store.items.filter(function(exercise) {
            return exercise.id != id;
        });
        this.setStore(store);
    }

    /**
     * Update record matching id, replacing keys mentioned in changeData
     * @param id
     * @param changeData
     */
    static update(id, changeData)
    {
        var store = this.getStore();
        store.items = store.items.map(function(exercise) {
            if (exercise.id == id) {
                for (let attribute in changeData) {
                    if (changeData.hasOwnProperty(attribute)) {
                        exercise[attribute] = changeData[attribute];
                    }
                }
            }
            return exercise;
        });
        this.setStore(store);
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
        store.items = store.items.filter(function(exercise) {
            var field = exercise[property];
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
     * Sets the store and triggers Exercise update event
     */
    static setStore(store)
    {
        super.setStore(store);
        document.dispatchEvent(window.exerciseUpdateEvent);
    }
}