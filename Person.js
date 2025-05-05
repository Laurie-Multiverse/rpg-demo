class Person {
    constructor(name, type, location) {
        this.name = name;
        this.type = type;
        this.location = location || [0, 0];
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
}
module.exports = Person;