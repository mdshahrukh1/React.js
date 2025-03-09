const express = require("express");
const Category = require("../models/Category");
const protectedRoute = require("../middlewares/authMiddleware");

const router = express.Router();

// Add Category
router.post("/", protectedRoute, async (req, res) => {
    const { name, description } = req.body;
    try {
        const category = new Category({ name, description });
        await category.save();
        res.status(201).json({ message: "Category added successfully", category });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// Update Category
router.put("/:id", protectedRoute, async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
        const category = await Category.findByIdAndUpdate(
            id,
            { name, description },
            { new: true }
        );
        if (!category) return res.status(404).json({ message: "Category not found" });
        res.status(200).json({ message: "Category updated successfully", category });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// Delete Category
router.delete("/:id", protectedRoute, async (req, res) => {
    const { id } = req.params;
    try {
        const category = await Category.findByIdAndDelete(id);
        if (!category) return res.status(404).json({ message: "Category not found" });
        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// Get All Categories
router.get("/", async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

module.exports = router;
