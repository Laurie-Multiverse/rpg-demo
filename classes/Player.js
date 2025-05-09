const Person = require("./Person");

class Player extends Person {
    constructor(name, type, weapon) {
        super(name, type, [-100, -100]);
        this.weapon = weapon;
        this.inventory = []
    }

    addItem(item) {
        if (!this.inventory.includes(item)) {
            this.inventory.push(item)
        }
    }
}

module.exports = Player;