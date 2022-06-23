const express = require("express");
const router = new express.Router();

const newPrice = require("../models/newPrice");


router.post("/table", (req, res) => {
    const data = new newPrice(req.body)
    data.save().then(() => {
        res.status(201).send(data)
    }).catch((e) => {
        res.status(404).send(e)
    })
})

router.get("/history", (req, res) => {
    console.log(req.body);
    try {
        const data = new newPrice.find();
        res.status(201).send(data)
    } catch (e) {
        res.status(404).send(e)
    }
})


module.exports = router;