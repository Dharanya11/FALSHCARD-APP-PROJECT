const mongoose = require('mongoose');

const daaSchema = new mongoose.Schema({
    question: String,
    answer: String
});

module.exports = mongoose.model('DaaCard', daaSchema);