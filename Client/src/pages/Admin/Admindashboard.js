import { useAuth } from "../../context/auth";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout2 from "../../components/Layout/Layout2";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CountDisplay = ({ icon, label, count }) => (
  <div className="count-display" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', 
  flexDirection: 'column', margin: '10px', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' ,
  height:'25vh' , width:'500px' , backgroundColor:'#32aeb1' }}>
    <i className={icon} style={{ fontSize: '24px', marginBottom: '10px' }}></i>
    <strong>{count}</strong>
    <span>{label}</span>
  </div>
);

const Admindashboard = () => {
  const [auth] = useAuth();
  const [orderCount, setOrderCount] = useState(0);
  const [userCount, setUserCount] = useState(0);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    // Fetch order count
    axios.get('http://localhost:8080/api/auth/ordercount')
      .then(response => setOrderCount(response.data.totalCount))
      .catch(error => console.error('Error fetching order count', error));

    // Fetch user count
    axios.get('http://localhost:8080/api/auth/userscount')
      .then(response => setUserCount(response.data.totalCount))
      .catch(error => console.error('Error fetching user count', error));

    // Fetch product count
    axios.get('http://localhost:8080/api/product/productcount')
      .then(response => setProductCount(response.data.totalCount))
      .catch(error => console.error('Error fetching product count', error));
  }, []);

  return (
    <Layout2>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9" style={{ minHeight: '90vh' }}>
            <div className="card w-75 p-3">
              <h3> Name : {auth?.user?.name}</h3>
              <h3> Email : {auth?.user?.email}</h3>
              <h3> contact : {auth?.user?.phone}</h3>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '20px' }}>
              <CountDisplay icon="fas fa-users" label="Registered Users" count={userCount} />
              <CountDisplay icon="fas fa-shopping-cart" label="Total Orders" count={orderCount} />
              <CountDisplay icon="fas fa-box" label="Products Count" count={productCount} />
            </div>
          </div>
        </div>
      </div>
    </Layout2>
  );
};

export default Admindashboard;


