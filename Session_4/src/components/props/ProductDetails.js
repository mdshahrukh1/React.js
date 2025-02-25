function ProductDetails({selected}) {

    return ( 
        <div>
            <h1>Products Details Page</h1><hr/>
            <h3>Name:{selected.name}</h3>
            <h3>Price:{selected.price}</h3>
            <img src={selected.imageurl} height="250" width="250" alt="im" />
        </div>
     );
}

export default ProductDetails;