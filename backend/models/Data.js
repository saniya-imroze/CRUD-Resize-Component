// Updated Data.js
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  name: String,
  profession: String,
  role: String
});

module.exports = mongoose.model('Data', dataSchema);
