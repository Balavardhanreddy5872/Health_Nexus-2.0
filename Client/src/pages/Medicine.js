import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import axios from 'axios';
import toast from 'react-hot-toast';

const Medicine = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);

  // get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get('http://localhost:8080/api/product/get-medicine');
      // Sort the products based on the 'letter' property
      const sortedProducts = data.products.sort((a, b) => a.letter.localeCompare(b.letter));
      setProducts(sortedProducts);
    } catch (error) {
      console.log(error);
      toast.error('Something Went Wrong');
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="col ">
        <h1 className="text-center">MEDICINES</h1>
        <div className="d-flex flex-wrap" style={{ margin: '80px', marginTop: '20px'}}>
          {products?.map((p) => (
            <div className="card m-2" style={{ width: '20rem', height: '65vh' }} key={p._id}>
              <img
                src={`http://localhost:8080/api/product/medicine-photo/${p._id}`}
                className="card-img-top"
                height= '200px'
                alt={p.name}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.letter}</p>
                <p className="card-text">{p.description.substring(0, 30)}...</p>
                <p className="card-text"><b>₹ {p.price}</b></p>
                <button className="btn btn-success ms-1" onClick={() => navigate(`/productdetails/${p.slug}`)}>More Details</button>
                <button className="btn btn-secondary ms-1" onClick={()=> {setCart([...cart, p]); toast.success("Item Added to cart");}}>ADD TO CART</button>
              </div>
            </div> 
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Medicine;
