const { Schema } = require("mongoose");
const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  Mode: String,
});
module.exports = { OrdersSchema };
