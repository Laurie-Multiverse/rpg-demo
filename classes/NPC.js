const Person = require("./Person")

class NPC extends Person {
    static npcTotal = 0;

    constructor(name, type, location) {
        super(name, type, location);

        NPC.npcTotal++;
    }
}

module.exports = NPC;