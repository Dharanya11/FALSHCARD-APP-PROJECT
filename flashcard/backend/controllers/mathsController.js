const Maths = require('../models/mathsModel');

exports.getAllMaths = async (req, res) => {
    try {
        const data = await Maths.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
exports.createMath = async (req, res) => {
    try {
        const newEntry = new Maths(req.body);
        const saved = await newEntry.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.updateMath = async (req, res) => {
    try {
        const updated = await Maths.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteMath = async (req, res) => {
    try {
        await Maths.findByIdAndDelete(req.params.id);
        res.json({ message: 'Deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
