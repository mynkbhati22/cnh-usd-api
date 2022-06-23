const express = require("express");
require("./db/conn");

const PriceRouter = require("./routers/Price")
const FormRouter = require("./routers/Form")
const UsdRouter = require("./routers/Usd")
const newPriceRouter = require("./routers/NewPrice")


const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(PriceRouter);
app.use(FormRouter);
app.use(UsdRouter);
app.use(newPriceRouter);



app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});






app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
})