
const mongoose = require('mongoose');

const clickSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now,
    required: true
  }
});

module.exports = mongoose.model('Click', clickSchema);
