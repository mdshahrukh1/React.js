import React, { useState } from "react";
import API from "../services/api";

const ProductForm = ({ categories, fetchProducts, selectedProduct, setSelectedProduct }) => {
    const [name, setName] = useState(selectedProduct?.name || "");
    const [description, setDescription] = useState(selectedProduct?.description || "");
    const [price, setPrice] = useState(selectedProduct?.price || "");
    const [category, setCategory] = useState(selectedProduct?.category || "");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (selectedProduct) {
                // Update product
                await API.put(`/product/${selectedProduct._id}`, {
                    name,
                    description,
                    price,
                    category,
                });
                alert("Product updated successfully!");
            } else {
                // Add new product
                await API.post("/product", {
                    name,
                    description,
                    price,
                    category,
                });
                alert("Product added successfully!");
            }

            setName("");
            setDescription("");
            setPrice("");
            setCategory("");
            setSelectedProduct(null);
            fetchProducts();
        } catch (error) {
            console.error("Error saving product:", error);
            alert("Failed to save product.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>{selectedProduct ? "Edit Product" : "Add Product"}</h3>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
            <div>
                <label>Price:</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Category:</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                        <option key={cat._id} value={cat._id}>
                            {cat.name}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit">{selectedProduct ? "Update" : "Add"} Product</button>
        </form>
    );
};

export default ProductForm;
