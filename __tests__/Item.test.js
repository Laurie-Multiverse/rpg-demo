const Item = require('../classes/Item')
const { test, describe, expect } = require('@jest/globals')

describe('Item', () => {
    test("should create an instance of Item", () => {
        const item = new Item("test item", 10)
        expect(item).toBeInstanceOf(Item);
    })

    test("should set name and weight of the Item", () => {
        const name = "test item"
        const weight = 10
        const item = new Item(name, weight)
        expect(item.name).toEqual(name)
        expect(item.weight).toEqual(weight)
    })
})