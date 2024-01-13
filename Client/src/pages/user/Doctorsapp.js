import React from 'react'
import UserMenu from '../../components/Layout/UserMenu'
import Layout from '../../components/Layout/Layout'
import "./doct.css"

const Doctorsapp = () => {

  const userAppointments = [
    {
      id: 1,
      doctorName: 'Dr. John Doe',
      time: '10:00 AM',
      date: '30-10-2024',
      status: 'completed',
    },
    {
      id: 2,
      doctorName: 'Dr. Jane Smith',
      time: '02:00 PM',
      date: '13-09-2024',
      status: 'Upcoming',
    },

  ];

  return (
    <Layout>
      <div className="container-flui p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div class="user-account-page">
              <div class="user-appointments-container">
                <h2>My Appointments</h2>
                <table className="user-appointments-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Doctor Name</th>
                      <th>Time</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userAppointments.map((appointment) => (
                      <tr key={appointment.id}>
                        <td>{appointment.id}</td>
                        <td>{appointment.doctorName}</td>
                        <td>{appointment.time}</td>
                        <td>{appointment.date}</td>
                        <td>{appointment.status}</td>
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
  )
}

export default Doctorsapp
