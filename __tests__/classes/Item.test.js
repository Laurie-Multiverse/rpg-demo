const Item = require("../../classes/Item");

describe("Item", () => {

    test ("should create an instance of Item", () => {
        const item = new Item("test item", 10);
        // expect(item instanceof Item).toBe(true);
        expect(item).toBeInstanceOf(Item);
    })

    test("should set name and properties correctly", () => {
        const name = 'test item';
        const weight = 10;
        const item = new Item(name, weight);
        expect(item.name).toBe(name);
        expect(item.weight).toBe(weight);
    })

})