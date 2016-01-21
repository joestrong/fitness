export default class Model {

    /**
     * Returns the store
     * @returns {{}}
     */
    static getStore()
    {
        var store = JSON.parse(localStorage.getItem(this.getKey())) || { incrementId: 1, items: [] };
        if (!store.items) {
            return this.upgradeLegacy(store);
        }
        return store;
    }

    /**
     * Sets the store
     */
    static setStore(store)
    {
        localStorage.setItem(this.getKey(), JSON.stringify(store));
    }
}