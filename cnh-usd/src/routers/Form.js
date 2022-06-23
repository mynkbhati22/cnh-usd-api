const express = require("express");
const router = new express.Router();

const formPrice = require("../models/form")

router.get("/form", async (req, res) => {
    console.log(req.body);
    try {
        const data = await formPrice.find();
        res.status(201).send(data)
    } catch (e) {
        res.status(404).send(e)
    }
})

router.post("/form", (req, res) => {
    const data = new formPrice(req.body)
    data.save().then(() => {
        res.status(201).send(data)
    }).catch((e) => {
        res.status(404).send(e)
    })
})


router.put("/form/:id", (req, res) => {
    const _id = req.params.id
    formPrice.findByIdAndUpdate(_id, req.body).then(() => {
        res.status(201).send("update form")
    }).catch((e) => {
        res.status(404).send(e)
    })
})
module.exports = router;