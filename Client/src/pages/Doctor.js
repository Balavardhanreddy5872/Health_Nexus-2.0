import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout';
import Doctorcard from './Doctorcard';
import "../styles/Doctorcard.css"

const Doctor = () => {
  const [doctorDetails, setDoctorDetails] = useState([]);
  useEffect(() => {
    const fetchall = async () => {
      try {
        const response = await fetch("http://localhost:8080/doctordet", {
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setDoctorDetails(data);
      } catch (error) {
        console.error('Fetch error:', error.message);
      }
    };
    fetchall();
  }, []);

  const filteredAppointments = [];
  for (let i = 0; i < doctorDetails.length; i++) {
    const appointment = doctorDetails[i];
      filteredAppointments.push(
        <div className="col-md-3 mb-4">
          <Doctorcard name={appointment.name} spec={appointment.specialization} desc={appointment.description} img={`http://localhost:8080/uploads/${appointment.profileImage}`} />
        </div>
      );
  }

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
        <div className="row">
        {filteredAppointments.length > 0 ? (
          filteredAppointments
        ) : (
          <tr>
            <td colSpan="6" className="no-appointments">No appointments found</td>
          </tr>
        )}
        </div>

        <br /><br />
        <hr /><br />

        <br /><br /><br />

      </div>
    </Layout>
  );
};

export default Doctor;

