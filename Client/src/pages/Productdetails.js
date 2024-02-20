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
  const [counter,setCounter]=useState(0);
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
 const increment=()=>{
   setCounter(counter+1);
 }
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
      <div className="container mt-4" >
        <div style={{display:"flex",justifyContent:"center",backgroundColor:"skyblue"}}>
          <div style={{marginLeft:"100px",marginTop:"150px"}}>
            <img
              src={`http://localhost:8080/api/product/medicine-photo/${product._id}`}
              className="img-fluid rounded"
              alt={product}
            />
          </div>
          <div className="col-md-6" style={{ textAlign: "left" }}>
            <h1 className="text-center" style={{paddingTop:"15px"}}>Medicine Details</h1>
            <br />
            <div style={{backgroundColor:"whitesmoke",margin:"20px",marginRight:"30px",padding:"10px"}}>
            <h3 className="mb-3">Name: {product.name}</h3>
            <p className="lead">{product.description}</p>
            <p>MRP: <b style={{fontSize:"20px"}}>₹{product.price*2}</b></p>
            <p>incusive all taxes</p>
            <div style={{backgroundColor:"#d6c4ff",width:"70%",borderRadius:"10px",display:"flex"}}>
                {/* <strong>Price:</strong> ₹{product.price *2} */}
                <p>Get this at<b style={{fontSize:"20px",color:"red"}}>₹{product.price}</b><br/>
                simply add this item to the cart</p>
                <p style={{backgroundColor:"white",height:"50%",width:"20%",borderRadius:"5px"}}><i style={{fontSize:"20px",padding:"7px"}} class="fa-solid fa-cart-shopping"></i>cart:{counter}</p>
            </div> 
            
            <p className="lead">
              <strong>Discount:</strong> 50% 
            </p>
            <p className="lead">
              <strong>Quantity:</strong> {product.quantity}
            </p>
            <br />
            <button className="btn btn-secondary ms-2" onClick={()=> {increment();setCart([...cart, product]); toast.success("Item Added to cart");}}>ADD TO CART</button>
          </div>
          </div>
        </div>
        <br/>
        <br/>
      </div>
    </Layout>
  );
};

export default Productdetails;
