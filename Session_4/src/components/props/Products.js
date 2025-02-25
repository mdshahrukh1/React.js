import { useState } from 'react';
import products from '../../Assets/products.json';
import ProductDetails from './ProductDetails.js';

function Products() {
    const [selected,setSelected] = useState(null);
    //You can use handler also

    return ( 
    <div>
        <h3>Products Page</h3>
        <table>
            <thead>
                <tr>
                    {
                        products.map((item) =>(
                            <td onClick={()=>setSelected(item)}>
                                <img src={item.imageurl} height='250' width='250' alt={item.name}/>
                            </td>
                        ))
                    }
                </tr>
            </thead>
        </table>

        {
            selected &&  <ProductDetails selected={selected}/>

        }

    </div> );
}

export default Products;