const Person = require ("./Person")

function main() {
    
    const person = new Person("Bob", "wizard");
    console.log(person);
    console.log(person.name);
    console.log(person.location);
    console.log(person.location[1]);
    console.log(person.introduce())

    const person2 = new Person("Ava", "warrior")
    console.log(person2.introduce())

    // can method-chain if each method returns this
    person2.updateX(1).updateY(-3);
    console.log(person2)
}

main();