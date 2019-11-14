const db = require('../data/dbConfig')

const { insert } = require('./hobbitsModel')

beforeEach(() => db('hobbits').truncate())

describe('hobbitsModel', () => {
    describe('insert method', () => {
        test('should insert a hobbit', async () => {
            await insert({name: 'Sam'})
            const hobbits = await db('hobbits')
            expect(hobbits).toHaveLength(1)
        })

        test('should insert provided hobbit', async () => {
            await insert({name: 'Sam'})
            await insert({name: 'Bob'})
            const hobbits = await db('hobbits')
            expect(hobbits[0].name).toBe('Sam')
            expect(hobbits[1].name).toBe('Bob')
        })

        test('should return added hobbit', async () => {
            await insert({name: 'Sam'})
            const hobbits = await db('hobbits')
            expect(hobbits[0].name).toBe('Sam')
            expect(hobbits[0].id).toBeDefined()
        })
    })
})