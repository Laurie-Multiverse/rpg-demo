class Person {
    #health;

    constructor(name, type, location) {
        this.name = name;
        this.type = type;
        this.location = location || [0, 0];
        this.#health = 100;
    }

    introduce() {
        return `Hi my name is ${this.name} and I'm a ${this.type}`
    }

    updateX(val) {
        this.location[0] += val;

        // this is optional, but you can do it for method chaining
        return this;
    }

    updateY(val) {
        this.location[1] += val;

        // this is optional, but you can do it for method chaining
        return this;
    }

    static compareType(person1, person2) {
        return person1.type == person2.type;
    }

    getHealth() {
        return `${this.#health} HP`
    }

    takeDamage(val) {
        this.#health = (this.#health - val < 0) ? 0 : this.#health - val;
    }

    drinkPotion(val) {
        this.#health = (this.#health + val > 100) ? 100 : this.#health + val;
    }
}
module.exports = Person;