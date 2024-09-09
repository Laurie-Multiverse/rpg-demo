const Person = require("./classes/Person")
function main() {
    console.log("this is the main function")

    const person = new Person("Bob", "Cleric");
    console.log(person.name)
    console.log(person.type)
    console.log(person.location)
}
main()