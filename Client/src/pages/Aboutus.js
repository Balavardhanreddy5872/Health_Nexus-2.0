import React from "react";
import { useSpring, animated } from "react-spring";
import Layout from "./../components/Layout/Layout";

const About = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  // Dummy data for project members
  const projectMembers = [
    {
      id: 1,
      name: "VENKAT",
      email: "venkat.k21@iiits.in",
      photo: "/images/member1.jpg",
    },
    {
      id: 2,
      name: "SUMANTH",
      email: "sumanth.d21@iiits.in",
      photo: "/images/member2.jpg",
    },
    {
      id: 3,
      name: "BALAVARDHAN",
      email: "vardhan.k21@iiits.in",
      photo: "/images/member3.jpg",
    },
    {
      id: 4,
      name: "PRAJWAL",
      email: "prajwal.b21@iiits.in",
      photo: "/images/member4.jpg",
    },
    {
      id: 5,
      name: "JOSHIT",
      email: "joshit.b21@iiits.in",
      photo: "/images/member5.jpg",
    },
    // Add more members as needed
  ];

  return (
    <Layout>
      <div className="content-container" style={{ backgroundColor: "aquamarine", width: '60vw', marginLeft: '300px', height: '30vh', marginTop: '20px' }}>
        <animated.div style={fadeIn}>
          <div className="container">
            <div className="row my-5">
              <div className="col-md-12 text-center">
                <h2 className="mb-4" style={{ fontSize: "28px" }}>Health Nexus</h2>
                <p className="lead" style={{ fontSize: "18px", lineHeight: "1.6" }}>
                  Health Nexus is your go-to platform for accessing essential
                  healthcare services. We provide a wide range of medicines, lab
                  tests, and doctor appointments, ensuring you can easily manage
                  your health needs from the comfort of your home. Our mission is
                  to make healthcare accessible and convenient for everyone.
                </p>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          {projectMembers.map((member) => (
            <div className="col-md-2" key={member.id} style={{width:'17vw', left:'0'}}>
              <div className="card mb-2">
                <div className="rounded-circle overflow-hidden d-flex justify-content-center align-items-center" style={{ width: '200px', height: '200px', margin: '0 auto', border: '5px solid black' }}>
                  <img src={member.photo} className="card-img-top" alt={member.name} style={{ width: '100%', height: 'auto', borderRadius: '50%' }} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text">{member.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default About;
