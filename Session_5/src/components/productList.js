import { useState } from "react";
import PoductDetails from "./productDetails";
import ProductForm from "./productForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";


function ProductList() {
    const [products,setProducts] = useState([]);
    const [selected,setSelected] = useState(null);
    const addProduct = (obj) =>{
        // products.push(obj);
        // setProduct(products);
        setProducts([...products,obj]);
    };

    // const handleDelete = (idToDelete) =>{  //Filter out the items with the given id
    //     const updatedItems = items.filter(item => item.id !== idToDelete); // Update the state
    //     setItems(updatedItems);
    // }
    const handleDelete = (idToDelete) =>{ 
        setProducts(products.filter(item => item.id !== idToDelete)); 
    };

    const handleView = (product) =>{
        setSelected(product); 
    };



    return (
        <div>
            <h3 className="text-light bg-dark p-2 text-center">Product List</h3>
            <table className="table table-bordered">
                <thead><tr><th>Name</th><th>Price</th><th>Category</th><th>Operations</th></tr></thead>
                <tbody>
                    {
                        products.map(item =>(
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.category}</td>
                                <td>
                                    <button className="btn btn-danger float-end"
                                    onClick={()=>handleDelete(item.id)}>X</button>
                                    <button className="btn btn-success float-end me-2"
                                    onClick={()=>handleView(item)}>< FontAwesomeIcon icon={faEye}/></button>

                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <div className="row">
                <div className="col">
                    <ProductForm addProduct={addProduct}/>
                </div>

                <div className="col">
                    {selected && <PoductDetails selected={selected}/>}
                </div>
            </div>

        </div>
    );
}

export default ProductList;