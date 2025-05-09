const Player = require("../classes/Player")
const Item = require("../classes/Item")
const { expect, describe, test, it, afterAll} = require("@jest/globals")

describe("Player", () => {
    test("item is added to inventory if not already there", () => {
        const player = new Player("John", "warrior", "sword")
        const item = new Item("potion", 5)
        player.addItem(item)
        expect(player.inventory).toContain(item)
    })

    test("item is not added to inventory if already there", () => {
        const player = new Player("John", "warrior", "sword")
        const item = new Item("potion", 5)
        player.addItem(item)
        player.addItem(item)
        expect(player.inventory.length).toEqual(1)
    })
})