const mongoose = require('mongoose');

const mathsSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true }
});

module.exports = mongoose.model('Maths', mathsSchema);