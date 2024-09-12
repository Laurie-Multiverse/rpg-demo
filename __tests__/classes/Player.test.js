const Player = require("../../classes/Player")
const Item = require("../../classes/Item")

const consoleLog = console.log;

describe("Player", () => {

    beforeAll( () => {
        console.log = jest.fn();
    });


    it ("should add an item to the inventory if not already present", () => {
        const player = new Player('sword', 'John', 'Human')
        const item = new Item('potion', 5);
        player.addItem(item);
        expect(player.getInventory().length).toBe(1);
        expect(player.getInventory()[0]).toBe(item);        
    })

    it("should not add an item to the inventory if it is already present", () => {
        const player = new Player('sword', 'John', 'Human')
        const item = new Item('potion', 5);
        player.addItem(item);
        player.addItem(item);
        expect(player.getInventory().length).toBe(1);
        expect(console.log).toHaveBeenCalledWith(`${item.name} already in the inventory`)
    })

    afterAll( () => {
        console.log = consoleLog;
    });
})

// console.log("DONE")