const Person = require("./Person")

class Player extends Person {
    #inventory;

    constructor(weapon, name, type, location) {
        super(name, type, location)
        this.weapon = weapon
        this.#inventory = []
    }

    addItem(item) {
        if (this.#inventory.includes(item)) {
            console.log(`${item.name} already in the inventory`)
        } else {
            this.#inventory.push(item);
        }
    }

    getInventory() {
        return this.#inventory;
    }
}

module.exports = Player;