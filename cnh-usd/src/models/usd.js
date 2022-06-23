const mongoose = require("mongoose");

const USD = new mongoose.Schema({
    GCS2USDM: {
        type: Number,
        required: true
    },
    USDM2USDT: {
        type: Number,
        required: true
    }
});

const USDModel = new mongoose.model("USDM", USD)
module.exports = USDModel;