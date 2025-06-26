const user = require('../models/userModel')
const bcrypt = require('bcrypt')

exports.getRoute = async (req, res) => {
    const response = await user.find();
    res.status(201).json({ data: response });
}

exports.getRouteById = async (req, res) => {
    try {
        const foundUser = await user.findById(req.params.id); // ✅ use different name
        if (!foundUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(foundUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};




exports.postRoute = async (req, res) => {
    const { username, password } = req.body;
    const exist = await user.findOne({ username });
    if (exist) {
        return res.status(401).json({
            message: "User already exist"
        })
    } else {
        const hashedpassword = await bcrypt.hash(password, 10); // ✅ Now it waits for the hash to complete
        const newUser = new user({ username, password: hashedpassword });
        await newUser.save();
        res.status(201).json({ user: newUser });
    }
}
exports.signupRoute = async (req, res) => {
    const { username, password } = req.body;
    const exist = await user.findOne({ username });
    if (exist) {
        return res.status(401).json({
            message: "User already exist"
        })
    } else {
        const hashedpassword = await bcrypt.hash(password, 10); // ✅ Now it waits for the hash to complete
        const newUser = new user({ username, password: hashedpassword });
        await newUser.save();
        res.status(201).json({ user: newUser });
    }
}

exports.loginRoute = async (req, res) => {
    const { username, password } = req.body;
    const exist = await user.findOne({ username });
    if (!exist) {
        return res.status(401).json({
            message: "User not found"
        })
    }
    const valid = await bcrypt.compare(password, exist.password)
    if (valid) res.status(201).json({ message: "Login successfull" })
    res.status(401).json({ message: "password Invalid" })
}
exports.putRoute = async (req, res) => {
    const { username, password } = req.body;
    const update = await user.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!update) {
        return res.status(401).json({ message: "User not exit" });
    } else {
        res.status(201).json({ update });
    }
}

exports.deleteRoute = async (req, res) => {
    const deleteuser = await user.findByIdAndDelete(req.params.id);
    if (!deleteuser) {
        return res.status(401).json({ message: "User not exit" });
    } else {
        res.status(201).json({ deleteuser });
    }
}