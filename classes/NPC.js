const Person = require('./Person')

class NPC extends Person {
    static npcTotal = 0;

    constructor(name, type, location) {
        // NPCs must always be created at positive locations
        if (location && (location[0] < 0 || location[1] < 0)) {
            throw new Error("NPCs must be at positive locations");
        }

        super(name, type, location)

        NPC.npcTotal++;
    }

    static compareType(npc, player) {
        if (npc.type == player.type) {
            console.log(`We are both type ${npc.type}`)
        } else {
            console.log(`We are different types`)
        }
    }
}

module.exports = NPC;