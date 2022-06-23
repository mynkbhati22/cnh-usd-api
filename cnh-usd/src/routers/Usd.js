const express = require("express");
const router = new express.Router();

const USD = require("../models/usd");


router.get("/usd", async (req, res) => {
    console.log(req.body);
    try {
        const data = await USD.find();
        res.status(201).send(data)
    } catch (e) {
        res.status(404).send(e)
    }
})

router.post("/usd", (req, res) => {
    const data = new USD(req.body)
    data.save().then(() => {
        res.status(201).send(data)
    }).catch((e) => {
        res.status(404).send(e)
    })
})

router.put("/usd/:id", (req, res) => {
    const _id = req.params.id
    USD.findByIdAndUpdate(_id, req.body).then(() => {
        res.status(201).send("update USD")
    }).catch((e) => {
        res.status(404).send(e)
    })
})


module.exports = router;