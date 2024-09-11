class Person {
    #health;
    // #validateName; YOU DO NOT NEED TO DO THIS FOR METHODS

    constructor(name, type, location) {
        this.#validateName(name);

        this.name = name
        this.type = type
        this.location = location || [0, 0]

        this.#health = 100;
    }

    // private method
    #validateName(name) {
        if (!isNaN(name)) {
          throw new Error("Name cannot be a number") 
        }
    }

    setName(name) {
        this.#validateName(name);
        this.name = name;
    }

    introduce() {
        return `Hello, my name is ${this.name} and I'm a ${this.type}.`
    }

    updateX(dx) {
        this.location[0] += dx;
    }

    updateY(dy) {
        this.location[1] += dy;
    }

    // getHealth() { return this.#health; }

    getHealthString() { return `${this.#health} hp` }  

    increaseHealth(num) {
        this.#health += num;
        if (this.#health > 100) {
            this.#health = 100;
        }
    }

    decreaseHealth(num) {
        this.#health -= num;
        if (this.#health < 0) {
            this.#health = 0;
        }
    }
}

module.exports = Person