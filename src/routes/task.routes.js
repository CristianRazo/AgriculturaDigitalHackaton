const express = require("express")
const router = express.Router();



// import SessionController from './app/controllers/SessionController';

const Product = require("../models/task");

// Add routes
router.get('/', async (req, res) =>{
  const tasks =  await Product.find();
  res.json(tasks);
});

router.post('/', async (req, res) =>{
  const { name, category, sub_category, stock, description, price, foto_url } = req.body;
  const product = new Product({name, category, sub_category, stock, description, price, foto_url});
  await product.save();
  res.json({status: "Product Saved"});
});


module.exports = router;
