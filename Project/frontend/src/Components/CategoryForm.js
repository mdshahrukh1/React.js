import React, { useState } from "react";
import API from "../services/api";

const CategoryForm = ({ fetchCategories, selectedCategory, setSelectedCategory }) => {
    const [name, setName] = useState(selectedCategory?.name || "");
    const [description, setDescription] = useState(selectedCategory?.description || "");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (selectedCategory) {
                // Update category
                await API.put(`/category/${selectedCategory._id}`, { name, description });
                alert("Category updated successfully!");
            } else {
                // Add new category
                await API.post("/category", { name, description });
                alert("Category added successfully!");
            }

            setName("");
            setDescription("");
            setSelectedCategory(null);
            fetchCategories();
        } catch (error) {
            console.error("Error saving category:", error);
            alert("Failed to save category.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>{selectedCategory ? "Edit Category" : "Add Category"}</h3>
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
            <button type="submit">{selectedCategory ? "Update" : "Add"} Category</button>
        </form>
    );
};

export default CategoryForm;
