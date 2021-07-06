const mongoose = require("mongoose");
const { Schema } = mongoose;

// const UserSchema = new Schema({
//   name: { type: String, required: true },
//   fathers_last_name: { type: String, required: true },
//   mothers_last_name: { type: String, default: '' },
//   phone_number: { type: String,required: true },
//   email: { type: String, required: true },
//   username: { type: String, required: true },
//   age: { type: Number, min: 18, max: 99, required: true },
//   birthday: { type: Date, default: '' },
//   hashed_password: { type: String, required: true },
// });

// model.exports = mongoose.model("User", UserSchema);

const ProductSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  sub_category: { type: String, required: true },
  stock: { type: Number, min: 0, required: true },
  description: { type: String, default: '' },
  price: { type: Number, min: 0, required: true },
  foto_url: { type: String, required: true },
  
});

module.exports = mongoose.model("Product", ProductSchema);