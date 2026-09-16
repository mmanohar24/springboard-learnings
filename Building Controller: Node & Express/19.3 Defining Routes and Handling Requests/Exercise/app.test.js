const request = require("supertest");
const app = require('./app');
const items = require("./fakeDb");

let popsicle = { name: "popsicle", price: 1.45 }

beforeEach(function () {
    items.length = 0;
    items.push({ ...popsicle });
})

describe("Get /items", () => {
    test('return all items', async () => {
        const res = await request(app).get("/items");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([popsicle])
    })
})



describe("POST /items", () => {
    test('adds a new item', async () => {
        const res = await request(app).post("/items").send({ name: "cheerios", price: 3.40 });

        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual({ added: { name: "cheerios", price: 3.40 } })
    })
})


describe("GET /items/:name", () => {
    test("return one item", async () => {
        const res = await request(app).get(`/items/${popsicle.name}`);

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(popsicle);
    })

    test("invalid item", async () => {
        const res = await request(app).get("/items/popcorn");

        expect(res.statusCode).toBe(404);
    })
})



describe("PATCH /items/:name", () => {
    test("update an item", async () => {
        const res = await request(app).patch(`/items/${popsicle.name}`).send({ price: 2.50 });

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ updated: { name: 'popsicle', price: 2.50 } })
    })

    test("update an item not in the list", async () => {
        const res = await request(app).patch("/items/popcorn");

        expect(res.statusCode).toBe(404);
    })
})


describe("DELETE /items/:name", () => {
    test("delete", async () => {
        const res = await request(app).delete(`/items/${popsicle.name}`);

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: "Deleted" })
    })

    test("delete 404", async () => {
        const res = await request(app).delete("/items/popcorn");

        expect(res.statusCode).toBe(404);
    })
})


