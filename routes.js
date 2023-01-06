const { product_model, customer_model, orders_model } = require("./Schema.js");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();


router.post("/product", async (req, res) => {
  try {
    const products = await product_model.create(req.body);
    res.status(200).json({
      products: products,
      status: "success",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
      status: "Failure",
    });
  }
});

router.post("/customer", async (req, res) => {
  try {
    const customer = await customer_model.create(req.body);
    res.status(200).json({
      customer: customer,
      status: "success",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
      status: "Failure",
    });
  }
});

router.post("/orders", async (req, res) => {
  try {
    const orders = await orders_model.create(req.body);
    res.status(200).json({
      orders: orders,
      status: "success",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
      status: "Failure",
    });
  }
});

router.get("/orders/:orderID", async (req, res) => {
  try {
    const orders = await orders_model.findOne({ _id: req.params.orderID });
    res.status(200).json({
      orders: orders,
      status: "success",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
      status: "Failure",
    });
  }
});

router.get("/product/:productID", async (req, res) => {
  try {
    const product = await product_model.findOne({
      productID: req.params.productID,
    });
    res.status(200).json({
      product: product,
      status: "success",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
      status: "Failure",
    });
  }
});

router.get("/product/product_type", async (req, res) => {
  try {
    const product = await product_model.findOne({
      product_type: req.params.product_type,
    });
    res.status(200).json({
      product: product,
      status: "success",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
      status: "Failure",
    });
  }
});

router.get("/customer/:customerID", async (req, res) => {
  try {
    const customer = await customer_model.findOne({
      customerID: req.params.customerID,
    });
    res.status(200).json({
      customer: customer,
      status: "success",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
      status: "Failure",
    });
  }
});

router.put("/:product_name/:available_quantity", async (req, res) => {
  try {
    const product = await product_model.updateOne(req.body);
    res.status(200).json({
      product: product,
      status: "Success",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
      status: "Failure",
    });
  }
});

router.put("/:email/costOfAnOrder", async (req, res) => {
  try {
    const customer = await customer_model.updateOne(req.body);
    res.status(200).json({
      customer: customer,
      status: "Success",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
      status: "Failure",
    });
  }
});

module.exports = router;
