import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { useParams } from "react-router-dom";
import { useCart } from "../context/cart";
import axios from 'axios';
import toast from 'react-hot-toast';
import "../styles/Productdetails.css"


const Productdetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [cart, setCart] = useCart();
  
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/product/get-medicine/${params.slug}`
      );
      setProduct(data?.product);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <img
              src={`http://localhost:8080/api/product/medicine-photo/${product._id}`}
              className="img-fluid rounded"
              alt={product}
            />
          </div>
          <div className="col-md-6" style={{ textAlign: "left" }}>
            <h1 className="text-center">Medicine Details</h1>
            <br />
            <h3 className="mb-3">Name: {product.name}</h3>
            <p className="lead">{product.description}</p>
            <p className="lead">
              <strong>Sale-Price:</strong> ₹{product.price}
            </p>
            <p className="lead">
              <strong>Price:</strong> ₹{product.price *2}
            </p>
            <p className="lead">
              <strong>Discount:</strong> 50% 
            </p>
            <p className="lead">
              <strong>Quantity:</strong> {product.quantity}
            </p>
            <br />
            <button className="btn btn-secondary ms-2" onClick={()=> {setCart([...cart, product]); toast.success("Item Added to cart");}}>ADD TO CART</button>
          </div>
        </div>
        <br/>
        <br/>
      </div>
    </Layout>
  );
};

export default Productdetails;
