const mongoose = require("mongoose");

const formPrice = new mongoose.Schema({
    time: {
        type: Number,
        required: true
    },
    totalSupply: {
        type: Number,
        required: true
    },
    GCSMARKETCAP: {
        type: Number,
        required: true
    },
    USDMMARKETCAP: {
        type: Number,
        required: true
    },
    addCNH: {
        type: Number,
        require: true
    }
})

const form = new mongoose.model("Values", formPrice);

module.exports = form;