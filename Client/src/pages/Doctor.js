import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout'
import Doctorcard from './Doctorcard'
// import { Link } from 'react-router-dom'
import doctorsData from './doctorsinfo.json';
const Doctor = () => {
  const [doctorDetails, setDoctorDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming doctorsData is an array of doctor objects
        setDoctorDetails(doctorsData);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  const chunkArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const doctorRows = chunkArray(doctorDetails, 4);
 
  return (
    <Layout>
      <div>
        <h1>Doctor Details</h1>

          {doctorDetails.map((doctor, index) => ( 
            
              <div key={index} >
            
              <Doctorcard name={doctor.name} spec={doctor.specialization} desc={doctor.description} img={doctor.image} />
            
            </div>
            
          ))}    
      </div>
    </Layout>
  )
}

export default Doctor


