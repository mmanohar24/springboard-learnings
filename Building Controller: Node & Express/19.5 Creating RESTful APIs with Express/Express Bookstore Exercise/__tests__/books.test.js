const request = require("supertest");

process.env.NODE_ENV = "test";

const app = require('../app');
const db = require("../db");

beforeEach(async () => {
    await db.query(
        `
            INSERT INTO 
            books (isbn, amazon_url, author, language, pages, publisher, title, year)
            VALUES 
            (
                'B1',
                'https://a.co/d/eIrZPGt',
                'Manoj Venkatesun Manoharan',
                'English', 
                123, 
                'Manoj',
                'Testing', 
                2026
            )
        `
    );
});

afterEach(async () => {
    await db.query("DELETE FROM books");
});

afterAll(async () => {
    await db.end(); // closes the database connection when tests finish
});


describe("GET /books", () => {
    // Test the get all books API
    test("return all books", async () => {
        const res = await request(app).get("/books");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
            books: [
                {
                    "isbn": "B1",
                    "amazon_url": "https://a.co/d/eIrZPGt",
                    "author": "Manoj Venkatesun Manoharan",
                    "language": "English",
                    "pages": 123,
                    "publisher": "Manoj",
                    "title": "Testing",
                    "year": 2026
                }
            ]
        })
    })
})

describe("GET /books/:isbn", () => {

    // Test the get one book API
    test("return one book", async () => {
        const res = await request(app).get("/books/B1");

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
            book: {
                "isbn": "B1",
                "amazon_url": "https://a.co/d/eIrZPGt",
                "author": "Manoj Venkatesun Manoharan",
                "language": "English",
                "pages": 123,
                "publisher": "Manoj",
                "title": "Testing",
                "year": 2026
            }
        });
    })

    // Test the invalid book API
    test("invalid book", async () => {
        const res = await request(app).get("/books/B5");

        expect(res.statusCode).toBe(404);
    })
})

describe("POST /books", () => {

    // Test the create book API
    test("create book", async () => {
        const res = await request(app).post("/books").send({
            "isbn": "B2",
            "amazon_url": "https://a.co/d/eIrZPGt",
            "author": "Manoj Venkatesun Manoharan",
            "language": "English",
            "pages": 123,
            "publisher": "Manoj",
            "title": "Testing",
            "year": 2026
        });
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual({
            "book": {
                "isbn": "B2",
                "amazon_url": "https://a.co/d/eIrZPGt",
                "author": "Manoj Venkatesun Manoharan",
                "language": "English",
                "pages": 123,
                "publisher": "Manoj",
                "title": "Testing",
                "year": 2026
            }
        })
    })

    // Prevents creating book without required fields
    test("prevents creating book without required fields", async () => {
        const res = await request(app).post("/books").send({ isbn: "B3" });
        expect(res.statusCode).toBe(400);
    })

    // Prevents creating book with invalid page count
    test("prevents creating book with invalid page count", async () => {
        const res = await request(app).post("/books").send(
            {
                "isbn": "B3",
                "amazon_url": "https://a.co/d/eIrZPGt",
                "author": "Manoj Venkatesun Manoharan",
                "language": "English",
                "pages": "not a number",
                "publisher": "Manoj",
                "title": "Testing",
                "year": 2026
            }
        )
        expect(res.statusCode).toBe(400);
    })
})

describe("PUT /books/:isbn", () => {

    // update the book title
    test("update book", async () => {

        const res = await request(app).put("/books/B1").send({
            "amazon_url": "https://a.co/d/eIrZPGt",
            "author": "Manoj Venkatesun Manoharan",
            "language": "English",
            "pages": 123,
            "publisher": "Manoj",
            "title": "Testing-B1",
            "year": 2026
        });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
            "book": {
                "isbn": "B1",
                "amazon_url": "https://a.co/d/eIrZPGt",
                "author": "Manoj Venkatesun Manoharan",
                "language": "English",
                "pages": 123,
                "publisher": "Manoj",
                "title": "Testing-B1",
                "year": 2026
            }
        })
    })

    // Test the invalid book API
    test("update 404", async () => {
        const res = await request(app).put("/books/B5").send({
            "amazon_url": "https://a.co/d/eIrZPGt",
            "author": "Manoj Venkatesun Manoharan",
            "language": "English",
            "pages": 123,
            "publisher": "Manoj",
            "title": "Testing",
            "year": 2026
        });
        expect(res.statusCode).toBe(404);
    })

    // Prevents updating book with invalid page count
    test("prevents updating book with invalid page count", async () => {
        const res = await request(app).put("/books/B1").send({
            "pages": "not a number"
        });
        expect(res.statusCode).toBe(400);
    })

})


describe("DELETE /books/:isbn", () => {
    // Test the delete book API
    test("delete", async () => {
        const res = await request(app).delete("/books/B1");

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: "Book deleted" })
    })

    // Test the invalid book API
    test("delete 404", async () => {
        const res = await request(app).delete("/books/B5");

        expect(res.statusCode).toBe(404);
    })
})