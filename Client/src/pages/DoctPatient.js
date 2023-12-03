import React from 'react'
import Layout from '../components/Layout/Layout'
// import '../styles/Doctpat.css'
const Doctor = () => {
    return (
        <Layout>
            <div class="doct-appointment">
                <div class="doctor-container">
                    <img src="/images/carousel.jpg" alt="" />
                    <div class="timings-appoinment">
                        <h1 style={{ color: "rgba(0, 225, 225, 1)", paddingBottom: "15px" }}>Business Hours</h1>
                        <h3>OPENING DAYS</h3>
                        <p>Monday - Friday: 9am to 10pm</p>
                        <p>Saturday: 9am to 7pm</p>
                        <h3>Vacations</h3>
                        <p>All Sundays</p>
                        <p>All Official Holidays</p>

                        <h2 style={{ borderTop: "2px solid white", paddingTop: "10px" }}>For Emergency cases</h2>
                        <p><b>(+01) 123 456 7890</b></p>
                    </div>
                    <div class="appointment-top">
                        <div class="appointment">
                            <h4>Booking Appointment</h4>
                            <h2>Free Consultation</h2>
                            <form method="post" action="/doctor">
                                <div class="option-class">
                                    <label for="doctors"></label>
                                    <select name="doct" id="doctors1" required>
                                        <option name="doct5" selected hidden disabled>Select Issue</option>
                                        <option name="doct1">Orthopedics</option>
                                        <option name="doct2">Obstetrics and Gynecology</option>
                                        <option name="doct3">Dermatology</option>
                                        <option name="doct4">Pediatrics</option>
                                        <option name="doct4">Radiology</option>
                                    </select>
                                    <input type="text" placeholder="Your Name" name="name" pattern="[A-Za-z]+" required />
                                    <br />
                                    <input type="tel" placeholder="Phone Number" name="doctors1" pattern="[6-9][0-9]{9}" required />
                                    <input class="maill" type="email" placeholder="Your Email" name="mail" required />
                                    <br />
                                    <input type="date" class="Appointment-Date" placeholder="Appointment Date" name="date" required />
                                    <input type="time" class="Appointment-Time" placeholder="Appointment Time" name="time" required />
                                </div>
                                <input class="appointment-button" type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Doctor