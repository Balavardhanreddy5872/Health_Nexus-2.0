import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cart';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Medicine = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); 
  const [sortType, setSortType] = useState('price'); 

  // get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get('http://localhost:8080/api/product/get-medicine');
      let sortedProducts = data.products;

      // Sort the products based on the selected order and type
      if (sortType === 'price') {
        sortedProducts = sortedProducts.sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price));
      } else {
        sortedProducts = sortedProducts.sort((a, b) => (sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)));
      }

      setProducts(sortedProducts);
    } catch (error) {
      console.log(error);
      toast.error('Something Went Wrong');
    }
  };

  useEffect(() => {
    getAllProducts();
  }, [sortOrder, sortType]); // Add sortOrder and sortType as dependencies

  const toggleSortOrder = (type) => {
    setSortType(type);
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  return (
    <Layout>
      <div className="col">
        <h1 className="text-center">MEDICINES</h1>
        <div className="d-flex justify-content-end mb-3">
          <button className="btn btn-secondary me-2" onClick={() => toggleSortOrder('price')}>
            {sortType === 'price' ? `Price ${sortOrder === 'asc' ? 'Low to High' : 'High to Low'}` : 'Sort by Price'}
          </button>
          <button className="btn btn-secondary" onClick={() => toggleSortOrder('alphabetical')}>
            {sortType === 'alphabetical' ? `A-Z ${sortOrder === 'asc' ? 'Ascending' : 'Descending'}` : 'Sort Alphabetically'}
          </button>
        </div>
        <div className="d-flex flex-wrap" style={{ margin: '80px', marginTop: '20px' }}>
          {products?.map((p) => (
            <div key={p._id} onClick={() => navigate(`/productdetails/${p.slug}`)} style={{ cursor: 'pointer' }}>
              <div className="card m-2" style={{ width: '20rem', height: '65vh' }}>
                <img
                  src={`http://localhost:8080/api/product/medicine-photo/${p._id}`}
                  className="card-img-top"
                  height="200px"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description.substring(0, 30)}...</p>
                  <p className="card-text"><b>₹ {p.price}</b></p>
                  <button
                    className="btn btn-secondary ms-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCart([...cart, p]);
                      toast.success('Item Added to Cart');
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Medicine;
