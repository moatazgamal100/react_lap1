import axios from "axios";
import React, { useState } from "react";

export default function AddProduct() {
    let [prod,setProd] = useState({
        "id": '300',
        "title": "",
        "description": "",
        "price": '',
        "discountPercentage": '',
        "rating":'',
        "stock": '',
        "brand": '',
        "category": "",
        "thumbnail": "https://source.unsplash.com/random",
        "images": [
            "https://cdn.dummyjson.com/product-images/1/1.jpg",
            "https://cdn.dummyjson.com/product-images/1/2.jpg",
            "https://cdn.dummyjson.com/product-images/1/3.jpg",
            "https://cdn.dummyjson.com/product-images/1/4.jpg",
            "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
        ]
    })

    let handlechange=(e)=>{
        const{name,value}=e.target
        setProd((old) => ({ 
            ...old, [name]: value 
        }))
    }
    let addproduct = (e) => {
        e.preventDefault(); // prevent refaule();
        let data = axios.post('http://localhost:2000/products', prod);
        console.log(data);
        // setProd(data);

    }

  return (
    <>
      <form action="" onSubmit={addproduct} className="w-50 mx-auto shadow p-3 mt-3">
      
        <div className="mb-3 mt-2">
          <label htmlFor="description" className="form-label">
          Product Title
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Product Title"
                      name="title"
                      onChange={handlechange}
          />
        </div>
        <div className="mb-3 mt-2">
          <label htmlFor="description" className="form-label">
          Product Description
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Product Name"
                      name="description"
                      onChange={handlechange}
          />
        </div>
        <div className="mb-3 mt-2">
          <label htmlFor="price" className="form-label">
          Product price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Product price"
                      name="price"
                      onChange={handlechange}
          />
        </div>
        <div className="mb-3 mt-2">
          <label htmlFor="image" className="form-label">
          Product ImageUrl
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            placeholder="Product image"
            name="thumbnail"
                      value={prod.thumbnail}
                      onChange={handlechange}
          />
        </div>
        <div className="mb-3 mt-2">
          <label htmlFor="Product brand" className="form-label">
          Product Brand
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Product brand"
                      name="brand"
                      onChange={handlechange}
                  />
        </div>
        <div className="mb-3 mt-2">
          <label htmlFor="brand" className="form-label">
          Product stock
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Product stock"
                      name="stock"
                      onChange={handlechange}
          />
              </div>
              <div className="div w-100 d-flex justify-content-center">  
                <input type="submit" value={"Add Product"} className="btn btn-primary w-50 " />
              </div>
      </form>
    </>
  );
}
