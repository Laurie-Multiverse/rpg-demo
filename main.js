const Person = require ("./classes/Person");
const Player = require("./classes/Player");
const NPC = require('./classes/NPC')

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

    // Player
    const player = new Player("Conina", "barbarian", "scissors")
    console.log(player)
    console.log(player.introduce())

    // NPC
    const npc = new NPC('Merlin', 'wizard', [2, 3]);
    console.log(npc);
    console.log(npc.introduce());
    console.log(`There have been ${NPC.npcTotal} NPCs created`);

    const npc2 = new NPC('Fred', 'barbarian');
    console.log(`There have been ${NPC.npcTotal} NPCs created`);

    console.log(Person.compareType(npc, person))
    console.log(Person.compareType(npc, npc2))

    // health (private)
    // console.log(npc2.#health); // doesn't work, yay
    console.log(person2.name, person2.getHealth())
    person2.takeDamage(30)
    console.log(person2.name, person2.getHealth())
    person2.drinkPotion(20)
    console.log(person2.name, person2.getHealth())
    person2.drinkPotion(20)
    console.log(person2.name, person2.getHealth())
}

main();