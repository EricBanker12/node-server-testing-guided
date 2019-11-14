const request = require('supertest')

const server = require('./server')

test('should set DB_ENV to "testing"', () => {
    expect(process.env.DB_ENV).toBe("testing")
})

describe('server', () => {
    describe('GET /', () => {
        test('responds 200', () => {
            return request(server).get('/')
                .then(resp => {
                    expect(resp.status).toBe(200)
                })
        })

        test('type includes json', () => {
            return request(server).get('/')
                .then(resp => {
                    expect(resp.type).toMatch(/json/i)
                })
        })

        test('body is object with api: "up"', () => {
            return request(server).get('/')
                .then(resp => {
                    expect(resp.body).toEqual({api: "up"})
                })
        })
    })
})