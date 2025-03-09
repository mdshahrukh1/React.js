import React, { useState, useEffect } from "react";
import ProductForm from "../Components/ProductForm";
import ProductList from "../Components/ProductList";
import API from "../services/api";

const Product = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const fetchProducts = async () => {
        const response = await API.get("/product");
        setProducts(response.data);
    };

    const fetchCategories = async () => {
        const response = await API.get("/category");
        setCategories(response.data);
    };

    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            await API.delete(`/product/${id}`);
            fetchProducts();
        }
    };

    return (
        <div>
            <ProductForm
                fetchProducts={fetchProducts}
                categories={categories}
                selectedProduct={selectedProduct}
                setSelectedProduct={setSelectedProduct}
            />
            <ProductList
                products={products}
                onEdit={setSelectedProduct}
                onDelete={handleDelete}
            />
        </div>
    );
};

export default Product;
