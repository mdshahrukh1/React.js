import { useState } from "react";

function PoductDetails({selected}) {
    const [product, setProduct] = useState(selected);
    const handleSubmit = () =>{
        
    }
    return (
          <div>
            <h3 className="text-bg-secondary p-2 text-center">Product Details</h3>
          <form onSubmit={handleSubmit}>
              <div className="form-group mt-3">
                  <label>Name</label>
                  <input type="text" placeholder="Product Name" className="form-control" value={product.name}
                  onChange={(e)=>setProduct({...product,name:e.target.value})}/>
              </div>
              <div className="form-group mt-3">
                  <label>Price</label>
                  <input type="text" placeholder="Product Price" className="form-control" value={product.price}
                  onChange={(e)=>setProduct({...product,price:e.target.value})}/>
              </div>
              <div className="form-group mt-3">
                  <label>Category</label>
                  <input type="text" placeholder="Product Category" className="form-control" value={product.category}
                  onChange={(e)=>setProduct({...product,category:e.target.value})}/>
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-3"> cancel Product</button>
          </form>
      </div>
  );
}

export default PoductDetails;