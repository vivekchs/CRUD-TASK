const mongoose = require('mongoose')
const orderSchema = new mongoose.Schema({
    name: String, 
    OrderNumber: Number,
    Bill: Number
})

const Order = new mongoose.model("Order", orderSchema)
module.exports = Order