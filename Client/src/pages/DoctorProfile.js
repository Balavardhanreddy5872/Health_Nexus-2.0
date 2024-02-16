import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import '../styles/DoctorProfile.css';


const Doctorlogin = ({ userId }) => {
    const [userInfo, setUserInfo] = useState({});
    const [userInfoo, setUserInfoo] = useState([]);

    const handleRejectAppointment = async (id) => {
        try {
            // Make a POST request to update the appointment status
            const response = await fetch(`http://localhost:8080/rejectAppointment`, {
                method: 'POST',
                body: JSON.stringify({
                    appointmentId: id,
                }),
                headers: { "Content-type": "application/json" }
            });
            if (response.ok) {
                setUserInfoo(prevAppointments => prevAppointments.filter(appointment => appointment._id !== id));
                console.log(`Appointment with id ${id} rejected successfully`);
            } else {
                console.error(`Failed to reject appointment with id ${id}`);
            }
        } catch (err) {
            console.error('Failed to reject appointment:', err);
        }
    };



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
            try {
                const response = await fetch("http://localhost:8080/UserPat2", {
                    credentials: "include",
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
                setUserInfoo(data);
            } catch (error) {
                console.error('Fetch error:', error.message);
            }
        };
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

    const backgroundURL = 'url("https://img.freepik.com/free-photo/simple-blue-white-background-with-text-space_1017-46764.jpg?size=626&ext=jpg&ga=GA1.1.1583734797.1707733052&semt=ais")';


    return (
        <Layout>
            <div className="doctor-profile-page1" style={{ backgroundImage: backgroundURL, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="doctor-profile-page1">
                    <div className="doctor-profile-container1">
                        <h2>Doctor Profile</h2>
                        <div className="doctor-info1">
                            <div className="profile-image1">
                                {userInfo.profileImage && (
                                    <img
                                        src={`http://localhost:8080/uploads/${userInfo.profileImage}`}
                                        alt=""
                                        className="img-fluid"
                                    />
                                )}
                            </div>
                            <div className="text-content1">
                                <p><strong>Name:</strong>{userInfo.name}</p>
                                <p><strong>Specialization:</strong> {userInfo.specialization}</p>
                                <p><strong>Experience:</strong> 10 years</p>
                                <p><strong>Email:</strong> {userInfo.email}</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="appointments-container1">
                    <h3>Appointments</h3>
                    <table className="appointments-table1">
                        <thead>
                            <tr>
                                <th>Specialization</th>
                                <th>Email</th>
                                <th>Patient Name</th>
                                <th>Date</th>
                                <th>Phone Number</th>
                                <th>Actions</th>
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


