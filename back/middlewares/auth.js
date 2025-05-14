import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1] || req.headers.token;
    
    if (!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: decoded.id };  // ✅ Attach to req.user
        next();
    } catch (error) {
        res.status(401).json({ success: false, message: 'Invalid token' });
    }
};

export default authUser;