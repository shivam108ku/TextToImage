import userModel from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import validator from 'validator';

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: 'Missing Details' });
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: 'Enter valid email' });
        }
        if (!validator.isStrongPassword(password)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Password must be at least 8 characters with uppercase, lowercase, number, and symbol' 
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = {
            name,
            email,
            password: hashedPassword
        };

        const newUser = new userModel(userData);
        const user = await newUser.save();
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        res.status(201).json({ 
            success: true, 
            token, 
            user: { 
                id: user._id,
                name: user.name,
                email: user.email 
            } 
        });

    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ success: false, message: 'Email already exists' });
        }
        console.error('Registration Error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Email and password required' });
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({ 
            success: true, 
            token, 
            user: { 
                id: user._id,
                name: user.name,
                email: user.email 
            } 
        });

    } catch (error) {
        console.error('Login Error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

const userCredits = async (req, res) => {
    try {
        // Get userId from req.user (set by auth middleware) instead of req.body
        const userId = req.user?.id;
        
        if (!userId) {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }

        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.json({
            success: true,
            credits: user.creditBalance,
            user: {
                name: user.name,
                email: user.email
            }
        });
        
    } catch (error) {
        console.error('Credits Error:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

export { registerUser, loginUser, userCredits };