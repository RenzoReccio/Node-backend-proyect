const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var restauranteSchema = new Schema({
    name: { required: true, type: String },
    type: String
  });

const Restaurant = mongoose.model("Restaurant", restauranteSchema);

module.exports = Restaurant;