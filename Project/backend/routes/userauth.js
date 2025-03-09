const express = require("express");
const User = require("../models/User");
const protectedRoute = require("../middlewares/authMiddleware");

const router = express.Router();

// Protected Route Example
router.get("/profile", protectedRoute, async (req, res) => {
    try {
        // Retrieve user info using the user ID from the token
        const user = await User.findById(req.user.id).select("-password"); // Exclude the password field
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

module.exports = router;
