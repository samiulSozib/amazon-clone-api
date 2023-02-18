const User = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// signup 
exports.signUp = async(req, res, next) => {
    try {
        const { name, email, password } = req.body
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ msg: 'User already exists' })
        }

        const hashPassword = await bcrypt.hash(password, 8);
        let user = new User({
            name,
            email,
            password: hashPassword
        })

        user = await user.save();
        res.json(user)
            //console.log(user)
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}

// signin 

exports.signIn = async(req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res
                .status(400)
                .json({ msg: "User with this email does not exist!" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Incorrect password." });
        }

        const token = jwt.sign({ id: user._id }, "passwordKey");
        res.json({ token, ...user._doc });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}

// check valid token
exports.checkToken = async(req, res, next) => {
    try {
        const token = req.header("x-auth-token");
        if (!token) return res.json(false);
        const verified = jwt.verify(token, "passwordKey");
        if (!verified) return res.json(false);

        const user = await User.findById(verified.id);
        if (!user) return res.json(false);
        res.json(true);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}

// get user data 

exports.getUser = async(req, res, next) => {
    try {
        const user = await User.findById(req.user);
        res.json({...user._doc, token: req.token });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}