import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
// import '../styles/Doctorreg.css'
import Layout from '../components/Layout/Layout'



const Doctorreg = () => {

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [specialization, setSpecialization] = useState('');

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

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
    specialization: "",
  });

  const testEmailValidity = (email) =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);

  const passwordRegex = (password) => /^(?=.*\d).{6,}$/.test(password);

  const passwordRe = (repass) => details.password === repass;

  const nameRegex = (namee) => /^[A-Z][a-zA-Z]*$/.test(namee);

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      password: "",
      repassword: "",
      specialization: "",
    };

    if (!nameRegex(details.name)) {
      newErrors.name = "Name is not valid";
    }

    if (!testEmailValidity(details.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!passwordRegex(details.password)) {
      newErrors.password = "Password is not valid";
    }

    if (!passwordRe(details.repassword)) {
      newErrors.repassword = "Passwords do not match";
    }

    if (!nameRegex(details.specialization)) {
      newErrors.specialization = "Specialization not entered";
    }

    setErrors(newErrors);

    // Check if there are no errors
    return Object.values(newErrors).every((error) => error === "");
  };

  const backgroundURL = 'url("https://img.freepik.com/free-vector/abstract-medical-wallpaper-template-design_53876-61811.jpg?size=626&ext=jpg&ga=GA1.1.780333128.1700286974&semt=ais")';

  return (
    // Done
    <Layout>
      <section className="vh-10" style={{ backgroundImage: backgroundURL, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11" style={{ width: "700px" }}>
              <div
                className="card text-black xyzp"
                style={{
                  borderRadius: "25px", width: "700px", height: "750px", backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1" style={{ width: "450px" }}>
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registration</p>
                      <form
                        className="mx-1 mx-md-4"
                        action="/doctorlogin"
                        method="POST"
                        onSubmit={async (e) => {
                          e.preventDefault();
                          try {

                            if (validateForm()) {
                              setDetails({
                                name: "",
                                email: "",
                                password: "",
                                repassword: "",
                                specialization: "",
                              });

                            } else {
                              setActive({
                                name: true,
                                email: true,
                                password: true,
                                repassword: true,
                                specialization: true,
                              });

                            }

                            const response = await fetch('http://localhost:8080/register', {
                              method: 'POST',
                              body: JSON.stringify({
                                name,
                                email,
                                password,
                                repassword,
                                specialization
                              }),
                              headers: { 'content-type': 'application/json' },
                            });
                            console.log(await response.json())
                            if (response.status === 200) {
                              navigate('/doctorlogin');

                            }
                          } catch (err) {
                            alert(err);
                            console.log(err)
                          }

                        }}
                      >
                        <div className="d-flex flex-row align-items-center mb-4" style={{ marginLeft: "-23px" }}>
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Your Name"
                              className={`form-control ${isActive.name && 'is-invalid'}`}
                              onChange={(e) => {
                                setName(e.target.value)
                                setDetails({
                                  ...details,
                                  name: e.target.value,
                                });
                                setActive((x) => ({ ...x, name: e.target.value !== "" }));
                              }}
                              value={details.name}
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4" style={{ marginLeft: "-23px" }}>
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Your Email"
                              className={`form-control ${isActive.email && 'is-invalid'}`}
                              onChange={(e) => {
                                setEmail(e.target.value)
                                setDetails({

                                  ...details,
                                  email: e.target.value,
                                });
                              }}
                              value={details.email}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4" style={{ marginLeft: "-23px" }}>
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password"
                              name="password"
                              placeholder="Your Password"
                              className={`form-control ${isActive.password && 'is-invalid'}`}
                              onChange={(e) => {
                                setPassword(e.target.value)
                                setDetails({
                                  ...details,
                                  password: e.target.value,
                                });
                              }}
                              value={details.password}
                            />
                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4" style={{ marginLeft: "-23px" }}>
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="repassword"
                              name="repassword"
                              placeholder="ReEnter password"
                              className={`form-control ${isActive.repassword && 'is-invalid'}`}
                              onChange={(e) => {
                                setRepassword(e.target.value)
                                setDetails({
                                  ...details,
                                  repassword: e.target.value,
                                });
                              }}
                              value={details.repassword}
                            />
                            {errors.repassword && <div className="invalid-feedback">{errors.repassword}</div>}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4" style={{ marginLeft: "-23px" }}>
                          <i className="fas fa-user-doctor fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="specialization"
                              placeholder="specialization"
                              name="specialization"
                              className={`form-control ${isActive.specialization && 'is-invalid'}`}
                              onChange={(e) => {
                                setSpecialization(e.target.value)
                                setDetails({
                                  ...details,
                                  specialization: e.target.value,
                                });
                              }}
                              value={details.specialization}
                            />
                            {errors.specialization && <div className="invalid-feedback">{errors.specialization}</div>}
                          </div>
                        </div>

                        <div className="d-grid gap-2 col-6 mx-auto">
                          <button

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
    </Layout>
  );
};

export default Doctorreg;
