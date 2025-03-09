const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const protectedRoute = (req, res, next) => {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const token = authHeader.split(" ")[1]; // Extract token from "Bearer <token>"

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach decoded user info to the request object
        next(); // Call next middleware or route handler
    } catch (error) {
        res.status(401).json({ message: "Invalid or expired token." });
    }
};

module.exports = protectedRoute;
