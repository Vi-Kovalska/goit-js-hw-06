"use strict";
class Storage {
    #items;
    constructor(arr) {
        this.#items = arr;
    }
    getItems() {
        return this.#items;
    }
    addItem(newItem) {
        return this.#items.push(newItem);
    }
    removeItem(itemToRemove) {
        return this.#items = this.#items.filter((element) => element != itemToRemove );
    }
}
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]