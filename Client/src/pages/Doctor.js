import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout';
import Doctorcard from './Doctorcard';
import doctorsData from './doctorsinfo.json';
import "../styles/Doctorcard.css"

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
        <br />
        <h1 style={{ textAlign: "center", textDecoration: "underline", color: "#32609e" }}>Our Doctors</h1>
        <p style={{ textAlign: "center", color: "#4fb5e6" }}>“Wherever the art of medicine is loved, there is also a love for humanity.”</p>
        <br />
        <div className="sub-main">
          <Link className="button-three" to="../doctorlogin">Join Us</Link>
        </div>
        <br />
        <hr />
        <br />
        {doctorRows.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((doctor, index) => (
              <div key={index} className="col-md-3">
                <Doctorcard name={doctor.name} spec={doctor.specialization} desc={doctor.description} img={doctor.image} />
              </div>
            ))}
          </div>
        ))}

        <br /><br />
        <hr /><br />
        {/* <div className="sub-main" style={{ marginLeft: '35%' }}>
          <Link className="button-three" to="../doctorpatient">Book Appointment</Link>
        </div>  */}

        <br /><br /><br />

      </div>
    </Layout>
  );
};

export default Doctor;

