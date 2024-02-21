import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout2 from "../../components/Layout/Layout2";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";
import axios from 'axios';

const CountDisplay = ({ icon, label, count, to }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <div
        className="count-display"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margin: "10px",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          height: "25vh",
          width: "300px",
          backgroundColor: 'darkblue',
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          color: 'white'
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
          <i className={icon} style={{ fontSize: "24px", marginBottom: "10px" }}></i>
          <strong>{count}</strong>
          <span>{label}</span>
      </div>
    </Link>
  );
};

const Dashboard = () => {
  const [auth] = useAuth();
  const [orderCount, setOrderCount] = useState(0);
  const [labCount, setLabCount] = useState(0);
  const [image, setImage] = useState(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Fetch order count
    axios.get('http://localhost:8080/api/auth/ordercnt')
      .then(response => setOrderCount(response.data.totalCount))
      .catch(error => console.error('Error fetching order count', error));
    axios.get('http://localhost:8080/api/lab/labcnt')
      .then(response => setLabCount(response.data.totalCount))
      .catch(error => console.error('Error fetching order count', error));

    // Retrieve image from localStorage if exists
    const savedImage = localStorage.getItem('dashboardImage');
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(URL.createObjectURL(selectedImage));

    // Save image to localStorage
    localStorage.setItem('dashboardImage', URL.createObjectURL(selectedImage));
  };

  const handleImageUpload = () => {
    const formData = new FormData();
    formData.append('image', image);
    axios.post('http://localhost:8080/api/upload', formData)
      .then(response => {
        console.log('Image uploaded successfully', response.data);
        // handle any further action, like showing the uploaded image, etc.
      })
      .catch(error => console.error('Error uploading image', error));
  };

  const handleEditImage = () => {
    // Trigger the file input click programmatically
    document.getElementById('image-upload').click();
  };

  return (
    <Layout2>
      <div className="container-fluid p-3" style={{backgroundColor:'whitesmoke'}}>
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
              <div
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  position: 'relative',
                  marginBottom: '10px',
                  backgroundColor: 'lightgray',
                  backgroundImage: `url(${image ? image : auth?.user?.image || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                {hovered && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '8px',
                      right: '8px',
                      backgroundColor: 'black',
                      padding: '4px',
                      borderRadius: '50%',
                      cursor: 'pointer'
                    }}
                    onClick={handleEditImage}
                  >
                    <i className="fas fa-edit" style={{ color: 'white' }}></i>
                  </div>
                )}
              </div>
              <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} id="image-upload" />
            </div>
            <br />
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '20px' }}>
              <CountDisplay
                icon="fas fa-shopping-cart"
                label="Total Orders"
                count={orderCount}
                to="/dashboard/user/orders"
              />
              <CountDisplay
                icon="fas fa-user-md"
                label="Doctor Appointments"
                count={labCount}
                to="/dashboard/user/app" 
              />
              <CountDisplay
                icon="fa-solid fa-vial-virus"
                label="Lab Reports"
                count='2'
                to="/dashboard/user/lab" 
              />

            </div>
            <br />
            <br />
            <div className="card w-75 p-3" style={{ marginLeft: '120px' ,backgroundColor:'wheat'}}>
              <h3>Name : {auth?.user?.name}</h3>
              <h3>Email : {auth?.user?.email}</h3>
              <h3>Address: {auth?.user?.address}</h3>
            </div>


          </div>
        </div>
      </div>
    </Layout2>
  );
};

export default Dashboard;
