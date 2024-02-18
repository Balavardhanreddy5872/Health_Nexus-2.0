import React, { useState, useEffect } from 'react';
import UserMenu from '../../components/Layout/UserMenu';
import Layout2 from '../../components/Layout/Layout2';
import './doct.css';
import { useAuth } from "../../context/auth";

const Doctorsapp = () => {
  const [userInfoo, setUserInfoo] = useState([]);
  const [auth] = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/UserPat2', {
        credentials: 'include',
      });
      const data = await response.json();
      console.log(data);

      // Filter appointments based on the condition
      const filteredAppointments = data.filter(user => auth?.user?.email === user.patientEmail);

      setUserInfoo(filteredAppointments);
    };
    fetchData();
  }, [auth?.user?.name]); // Add auth?.user?.email as a dependency to re-fetch data when the email changes

  return (
    <Layout2>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="user-account-page">
              <div className="user-appointments-container">
                <h2>My Appointments</h2>

                {/* Display userInfoo details in a table */}
                <table className="user-appointments-table">
                  <thead>
                    <tr>
                      <th>Email</th>
                      <th>Patient Name</th>
                      <th>Specialization</th>
                      <th>Date</th>
                      <th>Phone number</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userInfoo.map((user, index) => (
                      <tr key={index}>
                        <td>{user.patientEmail}</td>
                        <td>{user.patientName}</td>
                        <td>{user.specialization}</td>
                        <td>{user.appointmentDate}</td>
                        <td>{user.patientPhone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout2>
  );
};

export default Doctorsapp;
