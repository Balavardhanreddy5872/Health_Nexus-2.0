import React from "react";
import { useSpring, animated } from "react-spring";
import Layout from "./../components/Layout/Layout";

const About = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <Layout>
      <animated.div style={fadeIn}>
        <div className="row contactus">
          <div className="col-md-6">
            <img
              src="/images/whiteboard-animation-and-explainer-video-studio.png"
              alt="contactus"
              style={{ width: "68%" }}
            />
          </div>
          <div className="col-md-4">
            <p className="text-justify mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              officiis obcaecati esse tempore unde ratione, eveniet mollitia,
              perferendis eius temporibus dicta blanditiis doloremque explicabo
              quasi sunt vero optio cum aperiam vel consectetur! Laborum enim
              accusantium atque, excepturi sapiente amet! Tenetur ducimus aut
              commodi illum quidem neque tempora nam.
            </p>
          </div>
        </div>
      </animated.div>
    </Layout>
  );
};

export default About;
