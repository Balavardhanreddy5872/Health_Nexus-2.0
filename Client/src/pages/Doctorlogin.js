import React, { useState } from "react";
import { Link } from "react-router-dom";

const Doctorlogin = () => {
    const [details, setDetails] = useState({
        email: "",
        password: "",
    });

    const [isActive, setActive] = useState({
        email: false,
        password: false,
    });

    const testEmailValidity = (email) =>
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);

    const passwordRegex = (password) => /^(?=.*\d).{6,}$/.test(password);

    return (
        <>
            <section className="vh-100" style={{ backgroundColor: "rgba(0,147,173,0.4)" }}>
                <div className="container h-100 ">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                                Login
                                            </p>
                                            <form
                                                className="mx-1 mx-md-4"
                                                action="#"
                                                method="POST"
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                    setActive({
                                                        password: true,
                                                        email: true,
                                                    });
                                                    //
                                                    //
                                                }}
                                            >
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
                                                        {(details.email || isActive.email)&&
                                                            !testEmailValidity(details.email) && (
                                                                <p style={{ color: "red" }}>
                                                                    {"*Email is not valid"}
                                                                </p>
                                                            )}
                                                        {/* {isActive.email && (
                                                            <p style={{ color: "red" }}>{"*Enter Email"}</p>
                                                        )} */}
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
                                                        {(details.password || isActive.password)&&
                                                            !passwordRegex(details.password) && (
                                                                <p style={{ color: "red" }}>
                                                                    {"*password is not valid"}
                                                                </p>
                                                            )}
                                            
                                                    </div>
                                                </div>
                                                <div className="d-grid gap-2 col-6 mx-auto">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary btn-lg"
                                                    >
                                                        Login
                                                    </button>
                                                </div>
                                                <p className="my-3">
                                                    Don't Have an account?{" "}
                                                    <Link
                                                        style={{ textDecoration: "none" }}
                                                        to="../doctorreg"
                                                    >
                                                        Register..
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
        </>
    );
};

export default Doctorlogin;
