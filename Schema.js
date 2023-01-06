const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const product_Schema = new Schema({
  productID : { type: String, unique: true },
  product_type: { type: String },
  product_name: { type: String },
  product_price: { type: Number },
  available_quantity: { type: Number },
});
const customer_Schema = new Schema({
  customerID: { type: String, unique: true },
  customer_name: { type: String },
  customer_email: { type: String, unique: true },
  balance: { type: Number },
});

const orders_Schema = new Schema({
  customer_id: { type: String, unique: true },
  product_id: { type: String, unique: true },
  product_name: { type: String },
  quantity: { type: Number  },
});

const product_model = mongoose.model("product_model", product_Schema);
const customer_model = mongoose.model("customer_model", customer_Schema);
const orders_model = mongoose.model("orders_model", orders_Schema);

module.exports = { product_model, customer_model, orders_model };
