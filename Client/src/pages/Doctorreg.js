<<<<<<< HEAD
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Doctorreg.css";
=======
import React from 'react'
import {Link} from 'react-router-dom' 
import '../styles/Doctorreg.css'
import Layout from '../components/Layout/Layout'
>>>>>>> 89f0e82903cfadcc1ab00548914251cbbdf5874e

const Doctorreg = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
    specialization: "",
  });

  const [isActive, setActive] = useState({
    name: false,
    email: false,
    password: false,
    repassword: false,
    specialization: false,
  });

  const testEmailValidity = (email) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);

  const passwordRegex = (password) => /^(?=.*\d).{6,}$/.test(password);

  const passwordRe = (repass) => details.password === repass;

  const nameRegex = (namee) => /^[A-Z]{4,}$/.test(namee);

  return (
<<<<<<< HEAD
    <>
      <section className="vh-100" style={{ backgroundColor: "rgba(0,147,173,0.4)" }}>
=======
    <Layout>
      {/* <div class="shadow-lg p-3 mb-5 bg-white rounded" style={{marginTop:"60px",}}>
      <form className=' mx-auto col-10 col-md-8 col-lg-4'>
        <div className="form-group input-group my-3 ">
          <div className="input-group-prepend">
            <span className="input-group-text h-100"> <i className="fa fa-user"></i> </span>
          </div>
          <div className="w-50">
            <input className="form-control" placeholder="Full name" type="text" /></div>
        </div>

        <div className="form-group input-group  my-3">
          <div className="input-group-prepend">
            <span className="input-group-text h-100"> <i className="fa fa-envelope"></i> </span>
          </div>
           <div className="w-50">
            <input className="form-control" placeholder="Email address" type="email" />
            </div>
        </div>  

        <div className="form-group input-group my-3">
          <div className="input-group-prepend">
            <span className="input-group-text h-100"> <i className="fa fa-lock"></i> </span>
          </div>
          <div className="w-50">
          <input className="form-control" placeholder="Create password" type="password" /></div>
        </div> 

        <div className="form-group input-group my-3">
          <div className="input-group-prepend">
            <span className="input-group-text h-100"> <i className="fas fa-key"></i> </span>
          </div>
          <div className="w-50">
          <input className="form-control" placeholder="Repeat password" type="password" /></div>
        </div>

        // <div className="form-group input-group my-3">
        //   <div className="input-group-prepend">
        //     <span className="input-group-text h-100"><i className="fa-solid fa-user-doctor"></i> </span>
        //   </div>
        //   <div className="w-50">
        //     <input className="form-control" placeholder="Specialization" type="text" /></div>
        // </div>

        <div className="form-group input-group my-3">
          <textarea className="form-control" placeholder="Description" style={{maxWidth:"450px"}} rows={7}>Description</textarea>
        </div> 
        
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
        </div> 
        <p className="my-2">Have an account? <Link style={{textDecoration:"none"}} to="./doctorlogin">Log In..</Link> </p>
      </form>
      </div> */}


      <section className="vh-100" style={{ backgroundColor: "#00BFFF" }}>
>>>>>>> 89f0e82903cfadcc1ab00548914251cbbdf5874e
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div
                className="card text-black xyzp"
                style={{ backgroundColor: "", borderRadius: "25px" }}
              >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Registration
                      </p>
                      <form
                        className="mx-1 mx-md-4"
                        action="#"
                        method="POST"
                        onSubmit={(e) => {
                          e.preventDefault();


                          setActive({
                            name: true,
                            email: true,
                            password: true,
                            repassword: true,
                            specialization: true,
                          });
                          //
                          //
                        }}
                      >
                        <div className="d-flex flex-row align-items-center mb-4 ">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Your Name"
                              className="form-control"
                              onChange={(e) => {
                                setDetails({
                                  ...details,
                                  name: e.target.value,
                                });
                                setActive(x => ({ ...x, name: e.target.value !== "" }))
                              }}
                              value={details.name}
                            />
                            {(isActive.name) && !nameRegex(details.name) && <p style={{ color: "red" }}>{"*name is not Entered"}</p>}


                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Your Email"
                              className="form-control"
                              onChange={(e) => {
                                setDetails({
                                  ...details,
                                  email: e.target.value,
                                });
                              }}
                              value={details.email}
                            />
                            {(details.email || isActive.email) &&
                              !testEmailValidity(details.email) && (
                                <p style={{ color: "red" }}>
                                  {"*Email is not valid"}
                                </p>
                              )}

                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password"
                              name="password"
                              placeholder="Your Password"
                              className="form-control"
                              onChange={(e) => {
                                setDetails({
                                  ...details,
                                  password: e.target.value,
                                });
                              }}
                              value={details.password}
                            />
                            {(details.password || isActive.password) &&
                              !passwordRegex(details.password) && (
                                <p style={{ color: "red" }}>
                                  {"*password is not valid"}
                                </p>
                              )}

                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="repassword"
                              name="repassword"
                              placeholder="ReEnter password"
                              className="form-control"
                              onChange={(e) => {
                                setDetails({
                                  ...details,
                                  repassword: e.target.value,
                                });
                              }}
                              value={details.repassword}
                            />
                            {isActive.repassword &&
                              !passwordRe(details.repassword) && <p style={{ color: "red" }}>
                                {"*password doesn't match"}
                              </p>}

                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user-doctor fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="specialization"
                              placeholder="specialization"
                              name="specialization"
                              className="form-control"
                              onChange={(e) => {
                                setDetails({
                                  ...details,
                                  specialization: e.target.value,
                                });
                              }}
                              value={details.specialization}
                            />
                            {(isActive.specialization) && !nameRegex(details.specialization) && true && <p style={{ color: "red" }}>
                              {"*specialization not entered"}
                            </p>}
                          </div>
                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                        <p className="my-2">
                          Have an account?{" "}
                          <Link
                            style={{ textDecoration: "none" }}
                            to="../doctorlogin"
                          >
                            Log In..
                          </Link>{" "}
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
    </>
  );
};
=======
    </Layout>
  )
}
>>>>>>> 89f0e82903cfadcc1ab00548914251cbbdf5874e

export default Doctorreg;