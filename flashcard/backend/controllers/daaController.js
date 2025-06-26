const DaaCard = require('../models/daaModel');

exports.getAllCards = async (req, res) => {
    const cards = await DaaCard.find();
    res.json(cards);
};

exports.createCard = async (req, res) => {
    const { question, answer } = req.body;
    const newCard = new DaaCard({ question, answer });
    await newCard.save();
    res.status(201).json(newCard);
};

exports.updateCard = async (req, res) => {
    const { question, answer } = req.body;
    const updated = await DaaCard.findByIdAndUpdate(req.params.id, { question, answer }, { new: true });
    res.json(updated);
};

exports.deleteCard = async (req, res) => {
    await DaaCard.findByIdAndDelete(req.params.id);
    res.json({ message: 'Card deleted' });
};
