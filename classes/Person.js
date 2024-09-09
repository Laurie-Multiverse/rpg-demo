class Person {
    constructor(name, type, location) {
        this.name = name
        this.type = type
        this.location = location || [0, 0]
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
}

module.exports = Person