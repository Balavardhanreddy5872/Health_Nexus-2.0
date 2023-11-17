import React from 'react'
import { Link } from 'react-router-dom'

const Doctorlogin = () => {
    return (
        <>
            <section className="vh-100" style={{ backgroundColor: "#00BFFF" }}>
                <div className="container h-100 ">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>
                                            <form className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="email" id="email" name='email' placeholder='Your Email' className="form-control" />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="password" name='password' placeholder='Your Password' className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="d-grid gap-2 col-6 mx-auto">
                                                    <button type="button" className="btn btn-primary btn-lg">Register</button>
                                                </div>
                                                <p className="my-3">Don't Have an account? <Link style={{ textDecoration: "none" }} to="../doctorreg">Register..</Link> </p>
                                            </form>
                                        </div>
                                        {/* <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="" />
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Doctorlogin
