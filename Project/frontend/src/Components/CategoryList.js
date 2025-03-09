import React from "react";

const CategoryList = ({ categories, onEdit, onDelete }) => {
    return (
        <div>
            <h3>Category List</h3>
            <ul>
                {categories.map((category) => (
                    <li key={category._id}>
                        <strong>{category.name}</strong>: {category.description}
                        <button onClick={() => onEdit(category)}>Edit</button>
                        <button onClick={() => onDelete(category._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;
