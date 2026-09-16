const express = require("express");
const router = new express.Router();

const items = require('../fakeDb');
const ExpressError = require("../ExpressError");

// GET /items - return all items
router.get("/", (req, res) => {
    return res.json(items)
})

// POST /items - add a new item
router.post("/", (req, res) => {
    const { name, price } = req.body;
    const newItem = { name, price }
    items.push(newItem);
    return res.status(201).json({ added: newItem });
})

// GET /items/:name - return one item
router.get("/:name", (req, res) => {
    const item = items.find(item => item.name === req.params.name)

    if (!item) throw new ExpressError("Item not found", 404);
    return res.json(item);
})

// PATCH /items/:name - update one item
router.patch("/:name", (req, res) => {
    const item = items.find(item => item.name === req.params.name)

    if (!item) throw new ExpressError("Item not found", 404);

    if (req.body.name !== undefined) item.name = req.body.name;
    if (req.body.price !== undefined) item.price = req.body.price;

    return res.json({ updated: item })

})

// DELETE /items/:name - remove one item
router.delete("/:name", (req, res) => {

    const idx = items.findIndex(item => item.name === req.params.name);
    if (idx === -1) throw new ExpressError("Not Found", 404);

    items.splice(idx, 1);

    return res.json({ message: "Deleted" })

})

module.exports = router;