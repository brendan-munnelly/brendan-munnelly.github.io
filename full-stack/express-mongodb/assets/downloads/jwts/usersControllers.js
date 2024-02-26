import asyncHandler from 'express-async-handler';
import UserModel from '../models/userModel.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
const secret = process.env.JWT_SECRET; // Import secret from .env file

// Sign up user
const user_add = asyncHandler(async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10); // 10 is the saltRounds, you can adjust it as needed 
        const newUser = new UserModel({
            email: req.body.email,
            password: hashedPassword, // store the hashed password
            firstName: req.body.firstName, // add this line
            lastName: req.body.lastName, // add this line
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }});

// Login user
const user_login = asyncHandler(async (req, res) => {
    console.log("hello user login")
    try {
        const user = await UserModel.findOne({ email: req.body.email });
        console.log("user with email", req.body.email, "does not exist")

        if (!user) {
            return res.status(400).json({ message: 'Cannot find user' });
        }
        console.log("user with email", req.body.email, "exists")

        if (await bcrypt.compare(req.body.password, user.password)) {
            // User's email and password are correct
            // Generate a token for the user
            const token = jwt.sign({ id: user._id }, secret, { expiresIn: '1h' });
            // Send the token back to the client
            // res.json({ message: 'Success', token: token });        
        } else {
            res.status(403).json({ message: 'Not Allowed' }); 
        }
    } catch (error) {
        console.error(error); // Log the error stack trace
        res.status(500).json({ message: error.message });
    }
});

export { user_add, user_login }