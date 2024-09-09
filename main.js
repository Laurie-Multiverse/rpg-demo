const Person = require("./classes/Person")
function main() {
    console.log("this is the main function")

    const person = new Person("Bob", "Cleric");
    console.log(person.name)
    console.log(person.type)
    console.log(person.location)
    console.log(person.introduce())

    const person2 = new Person("Ava", "Warrior")
    console.log(person2)
    console.log(person2.introduce())
    person2.updateX(3);
    person2.updateY(-1);
    console.log(person2)
}
main()