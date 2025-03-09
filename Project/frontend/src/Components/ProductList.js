import React from "react";

const ProductList = ({ products, onEdit, onDelete }) => {
    return (
        <div>
            <h3>Product List</h3>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        <strong>{product.name}</strong> - ${product.price} (
                        {product.category.name})
                        <button onClick={() => onEdit(product)}>Edit</button>
                        <button onClick={() => onDelete(product._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
