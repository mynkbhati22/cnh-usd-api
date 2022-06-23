const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema({
    currentPrice: {
        type: String,
        required: true
    },
    lastPrice: {
        type: String,
        required: true
    }
})

const priceModal = new mongoose.model('Price', priceSchema)

module.exports = priceModal;