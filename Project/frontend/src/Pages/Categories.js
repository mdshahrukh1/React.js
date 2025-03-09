import React, { useState, useEffect } from "react";
import CategoryForm from "../Components/CategoryForm";
import CategoryList from "../Components/CategoryList";
import API from "../services/api";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const fetchCategories = async () => {
        const response = await API.get("/category");
        setCategories(response.data);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this category?")) {
            await API.delete(`/category/${id}`);
            fetchCategories();
        }
    };

    return (
        <div>
            <CategoryForm
                fetchCategories={fetchCategories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
            <CategoryList
                categories={categories}
                onEdit={setSelectedCategory}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default Categories;
