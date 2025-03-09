const express = require("express");
const Product = require("../models/Product");
const protectedRoute = require("../middlewares/authMiddleware");

const router = express.Router();

// Add Product
router.post("/", protectedRoute, async (req, res) => {
    const { name, description, price, category } = req.body;
    try {
        const product = new Product({
            name,
            description,
            price,
            category,
            user: req.user.id
        });
        await product.save();
        res.status(201).json({ message: "Product added successfully", product });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// Update Product
router.put("/:id", protectedRoute, async (req, res) => {
    const { id } = req.params;
    const { name, description, price, category } = req.body;
    try {
        const product = await Product.findByIdAndUpdate(
            id,
            { name, description, price, category },
            { new: true }
        );
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json({ message: "Product updated successfully", product });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// Delete Product
router.delete("/:id", protectedRoute, async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndDelete(id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// Get All Products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find().populate("category").populate("user");
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// Get Product by ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id).populate("category").populate("user");
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// Get Products by Category
router.get("/category/:categoryId", async (req, res) => {
    const { categoryId } = req.params;
    try {
        const products = await Product.find({ category: categoryId }).populate("category");
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

module.exports = router;
