import React, { useEffect, useState } from 'react'
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";

const Users = () => {
  const [userInfo, setUserInfo] = useState([]);
  const appointments = [
    { id: 1, patientName: "Alice", time: "10:00 AM", date: "2024-01-10" },
    { id: 2, patientName: "Bob", time: "11:00 AM", date: "2024-01-10" },
    { id: 3, patientName: "Charlie", time: "12:00 PM", date: "2024-01-10" }
  ];


  useEffect(() => {
    const fetchall = async () => {
      const response = await fetch("http://localhost:8080/UserPat", {
        credentials: "include",
      })
      const data = await response.json();
      console.log(data)
      setUserInfo(data)

    }
    fetchall()
  }, [])


  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container-fluid p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">


            <div className="doctor-profile-page">
              <div className="appointments-container">
                <h3>Doctor Appointments</h3>
                <table className="appointments-table">
                  <thead>
                    <tr>
                      <th>Email</th>
                      <th>Patient Name</th>
                      <th>Phone No.</th>
                      <th>Date</th>
                      <th>specialization</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userInfo.map((appointment) => (
                      <tr key={appointment._id}>
                        <td>{appointment.patientEmail}</td>
                        <td>{appointment.patientName}</td>
                        <td>{appointment.patientPhone}</td>
                        <td>{appointment.appointmentDate}</td>
                        <td>{appointment.specialization}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>





          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;