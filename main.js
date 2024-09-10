const Person = require("./classes/Person")
const Player = require("./classes/Player")
const NPC = require('./classes/NPC')

function main() {
    console.log("this is the main function")

    console.log("***** Person *****")
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

    console.log("****** Player ******")
    const player = new Player("Scissors", "Conina", "Barbarian", [10, 2]);
    console.log(player.weapon);
    console.log(player)
    console.log(player.introduce())

    console.log("****** NPC ******")
    const npc = new NPC("Rincewind", "Wizard");
    console.log(NPC.npcTotal)
    console.log(npc.name)
    NPC.compareType(npc, player);
}
main()