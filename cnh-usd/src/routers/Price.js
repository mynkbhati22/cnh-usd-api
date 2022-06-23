const express = require("express");
const router = new express.Router();

const priceModal = require("../models/price")

router.get("/", (req, res) => {
    res.send("hello from the server");
})

router.get("/price", async (req, res) => {
    console.log(req.body);
    try {
        const data = await priceModal.find();
        res.status(201).send(data)
    } catch (e) {
        res.status(404).send(e)
    }
})

router.post("/price", (req, res) => {
    const data = new priceModal(req.body)
    data.save().then(() => {
        res.status(201).send(data)
    }).catch((e) => {
        res.status(404).send(e)
    })

})

// router.put("/price/:id", (req, res) => {
//     try {
//         const _id = req.params.id;
//         const studentData = await Student.findById(_id);
//         if (!studentData) {
//             return res.status(404).send();
//         }
//         else {
//             res.send(studentData);
//         }
//     } catch (e) {
//         res.status(500).send(e);
//     }
// })

router.put("/price/:id", (req, res) => {
    const _id = req.params.id
    priceModal.findByIdAndUpdate(_id, req.body).then(() => {
        res.status(201).send("update price")
    }).catch((e) => {
        res.status(404).send(e)
    })
})

module.exports = router; 