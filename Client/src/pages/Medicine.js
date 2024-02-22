import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cart';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Medicine = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortType, setSortType] = useState('price');
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [loading, setLoading] = useState(true);

  const getAllProducts = async () => {
    try {
      setLoading(true); 
      const { data } = await axios.get('http://localhost:8080/api/product/get-medicine');
      let sortedProducts = data.products;

      if (selectedLetter) {
        sortedProducts = sortedProducts.filter((p) => p.name.charAt(0).toUpperCase() === selectedLetter);
      }

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
    finally {
      setTimeout(() => setLoading(false), 500); 
    }
  };

  useEffect(() => {
    getAllProducts();
  }, [sortOrder, sortType, selectedLetter]);

  const toggleSortOrder = (type) => {
    setSortType(type);
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  const filterByLetter = (letter) => {
    setSelectedLetter(letter);
  };

  const resetFilters = () => {
    setSelectedLetter(null);
    setSortOrder('asc');
    setSortType('price');
  };

  const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));

  return (
    <Layout>
      <div className="col">
        <h1 className="text-center">MEDICINES</h1>
        <div className="d-flex justify-content-between align-items-center flex-wrap" style={{ margin: "30px" }}>
          <div className="row" style={{ maxWidth: '98vw' }}>
            {alphabet.map((letter) => (
              <div className="col-auto" key={letter} style={{ margin: '5px' }}>
                <button
                  type="button"
                  className={`btn btn-outline-secondary ${selectedLetter === letter ? 'active' : ''}`}
                  onClick={() => filterByLetter(letter)}
                >
                  {letter}
                </button>
              </div>
            ))}
          </div>
          <br/>
          <br/>
          <div className="col-auto">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="sortDropdown"
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                style={{width:'15vw', backgroundColor:'#32aeb1', color:'black'}}
              >
                Sort your Products
              </button>
              <div className={`dropdown-menu ${showSortDropdown ? 'show' : ''}`} aria-labelledby="sortDropdown">
                <button
                  className="dropdown-item"
                  onClick={() => {
                    toggleSortOrder('alphabetical');
                    setShowSortDropdown(false);
                  }}
                >
                  Sort Alphabetically
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    toggleSortOrder('price');
                    setShowSortDropdown(false);
                  }}
                >
                  Sort Price
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    resetFilters();
                    setShowSortDropdown(false);
                  }}
                >
                  Full Medicines List
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-wrap" style={{ margin: '80px', marginTop: '30px' }}>
          {
            (products?.length === 0 ? (loading ? (
              <div className="text-center">
                <FontAwesomeIcon icon={faSpinner} spin />
                <span className="ms-2">Please wait...</span>
              </div>
            ) :
              <div className="alert alert-warning" role="alert">
                Medicines not available yet. Please check back later.
                <Link to="#" onClick={resetFilters}> Go back to full list</Link>
              </div>
            ) : (
              products?.map((p) => (
                <div key={p._id} onClick={() => navigate(`/productdetails/${p.slug}`)}>
                  <div className="card m-2" style={{ width: '20rem', height: '60vh', cursor: 'pointer' }}>
                    <img
                      src={`http://localhost:8080/api/product/medicine-photo/${p._id}`}
                      className="card-img-top"
                      height="200px"
                      alt={p.name}
                    />
                    <div className="card-body">
                      <h4 style={{ textAlign: "center" }}>{p.name}</h4>
                      <p className="card-text">{p.description.substring(0, 30)}...</p>
                      <p className="card-text">MRP:<b style={{ color: "red" }}>₹ {p.price}</b></p>
                      <button
                        style={{ background: "#24aeb1", width: "100%" }}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (cart.find(item => item._id === p._id)) {
                            toast.error('Item already in cart');
                          } else {
                            setCart([...cart, p]);
                            toast.success('Item Added to Cart');
                          }
                        }}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Medicine;
