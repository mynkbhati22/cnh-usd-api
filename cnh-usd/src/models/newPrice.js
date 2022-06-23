const mongoose = require("mongoose");

const newPrice = new mongoose.Schema({
    Method: {
        type: String,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    },
    Date: {
        type: String,
        required: true
    },
    Hash: {
        type: String,
    },
});

const newPriceModel = new mongoose.model("NewPrice", newPrice)
module.exports = newPriceModel;