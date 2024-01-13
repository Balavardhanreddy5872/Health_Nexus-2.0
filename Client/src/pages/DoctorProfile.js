import React, { useContext, useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import '../styles/DoctorProfile.css'
// import { UserContext } from "../context/DoctorContext";

const Doctorlogin = ({ userId }) => {
    const [userInfo, setUserInfo] = useState({});


    const appointments = [
        { id: 1, Email: "Alice@gmail.com", patientName: "Alice", time: "10:00 AM", date: "2024-01-10", Specialization: "Dentist" },
        { id: 2, Email: "Bob@gmail.com", patientName: "Bob", time: "11:00 AM", date: "2024-01-10", Specialization: "Dentist" },
        { id: 3, Email: "Charlie@gmail.com", patientName: "Charlie", time: "12:00 PM", date: "2024-01-10", Specialization: "Dentist" }
    ];

    useEffect(() => {
        // Replace with the actual endpoint where user data can be fetched
        const fetchUserData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/doctprofile`, {
                    method: 'POST',
                    body: JSON.stringify({
                        id: localStorage.getItem('id'),
                    }),
                    headers: { "Content-type": "application/json" }
                });
                const data = await response.json();

                setUserInfo(data);
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        }
        fetchUserData();
    }, []); // Only re-run the effect if userId changes

    if (!userInfo) {
        return <div>Loading...</div>;
    }

    return (
        <Layout>
            <div className="doctor-profile-page">
                <div className="doctor-profile-container">
                    <h2>Doctor Profile</h2>
                    <div className="doctor-info">
                        <p><strong>Name:</strong>{userInfo.name}</p>
                        <p><strong>Specialization:</strong> {userInfo.specialization}</p>
                        <p><strong>Experience:</strong> 10 years</p>
                        <p><strong>Email:</strong> {userInfo.email}</p>
                    </div>
                </div>
                <div className="appointments-container">
                    <h3>Appointments</h3>
                    <table className="appointments-table">
                        <thead>
                            <tr>
                                <th>S No.</th>
                                <th>Email</th>
                                <th>Patient Name</th>
                                <th>Date</th>
                                <th>Specialization</th>
                            </tr>
                        </thead>
                        <tbody>
                            {appointments.map((appointment) => (
                                <tr key={appointment.id}>
                                    <td>{appointment.id}</td>
                                    <td>{appointment.Email}</td>
                                    <td>{appointment.patientName}</td>
                                    <td>{appointment.date}</td>
                                    <td>{appointment.Specialization}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </Layout>
    );
};

export default Doctorlogin;
