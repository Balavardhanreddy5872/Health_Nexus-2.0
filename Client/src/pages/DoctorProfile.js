import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import '../styles/DoctorProfile.css';


const Doctorlogin = ({ userId }) => {
    const [userInfo, setUserInfo] = useState({});
    const [userInfoo, setUserInfoo] = useState([]);

    const handleRejectAppointment = async(id)=>{
        try{
            
        }catch(err){
            console.error('Failed to fetch user data:', err);
        }
    }

    useEffect(() => {
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
    }, []);

    useEffect(() => {
        const fetchall = async () => {
            const response = await fetch("http://localhost:8080/UserPat2", {
                credentials: "include",
            });
            const data = await response.json();
            console.log(data);
            setUserInfoo(data);
        }
        fetchall();
    }, []);

    if (!userInfo) {
        return <div>Loading...</div>;
    }

    const targetSpecialization = userInfo.specialization; 

    const filteredAppointments = [];
    for (let i = 0; i < userInfoo.length; i++) {
        const appointment = userInfoo[i];
        if (appointment.specialization === targetSpecialization) {
            filteredAppointments.push(
                <tr key={appointment.id}>
                    <td>{appointment.specialization}</td>
                    <td>{appointment.patientEmail}</td>
                    <td>{appointment.patientName}</td>
                    <td>{appointment.appointmentDate}</td>
                    <td>{appointment.patientPhone}</td>
                    <td>
                        <button onClick={() => handleRejectAppointment(appointment._id)}>Reject</button>
                    </td>
                </tr>
            );
        }
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
                                <th>Specialization</th>
                                <th>Email</th>
                                <th>Patient Name</th>
                                <th>Date</th>
                                <th>Phone Number</th>
                                <th>Actions</th> {/* New column for Accept/Reject buttons */}
                            </tr>
                        </thead>
                        <tbody>
                            {filteredAppointments.length > 0 ? (
                                filteredAppointments
                            ) : (
                                <tr>
                                    <td colSpan="6" className="no-appointments">No appointments found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
};

export default Doctorlogin;


