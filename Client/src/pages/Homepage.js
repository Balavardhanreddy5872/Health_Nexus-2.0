import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import '../styles/style.css'
import '../styles/style2.css'



const Homepage = () => {
  return (
    <Layout>
      <div>
        <div>
          {/* <br/> */}
          <div className="main">
            <div id="slider">
              <figure>
                <img alt='web_home' src="/images/1677605292_Web_Home_Bannersgdgsd.jpg" />
                <img alt='web_home' src="/images/1678990885_Healthvit_wellness_web.jpg" />
                <img alt='web_home' src="/images/1677605378_Web_Home_Bannersguguui.jpg" />
                <img alt='web_home' src="/images/1677684779_Web_Homekkkkkk.jpg" />
                <img alt='web_home' src="/images/slider4.png" />
              </figure>
            </div>
          </div>
        </div>
        <br />
        <br />
        {/* discount section */}
        <section className="discount_section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-5 offset-md-2">
                <div className="detail-box">
                  <h2>
                    You get <br />
                    any medicine <br />
                    on
                    <span> 10% discount </span>
                  </h2>
                  <div>
                    <Link to="/medicine"> Buy Now </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-5">
                <div className="img-box">
                  <img alt='web_home' src="/images/download-removebg-preview-fotor-bg-remover-2023032022277.png" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end discount section */}
        {/* ----self section---- */}

        <div className="self">
          <div className="self_section" style={{ padding: 40, margin: '20px 40px' }}>
            <img
              alt="web_home"
              src="https://www.pngfind.com/pngs/m/170-1707648_truck-fast-delivery-speed-svg-png-icon-free.png"
              style={{ height: 100, marginLeft: 150 }}
            />
            <br />
            <br />
            <h4>we assure safe and fastest delivery</h4>
          </div>
          <div className="self_section" style={{ padding: 40, margin: '20px 40px' }}>
            <img
              alt="web_home"
              src="https://www.shutterstock.com/image-illustration/best-price-guarantee-label-icon-260nw-259618541.jpg"
              style={{ height: 100, marginLeft: 100 }}
            />
            <br />
            <br />
            <h4>On of the top-selling sites</h4>
          </div>
          <div className="self_section" style={{ padding: 40, margin: '20px 40px' }}>
            <img
              alt="web_home"
              src="https://www.shutterstock.com/image-vector/medical-team-icon-260nw-689072647.jpg"
              style={{ height: 100, marginLeft: 110 }}
            />
            <br />
            <br />
            <h4>Consult Top doctors for free</h4>
          </div>
        </div>

        {/* ----end of self section---- */}
        <br />
        <br />
        <div className="lab">
          <div className="headsell1">
            <h1 style={{ color: '#000' }}>
              <marquee><b>LABTESTS</b></marquee>
            </h1>
            <br />
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Link to="/labtests"><img alt='web_home' src="/images/1581428021_Web_Landingabc_Banner.jpg" style={{ height: '50vh', width: '80%' }} /></Link>
              <Link to="/labtests"><img alt='web_home' src="/images/Banner-02-scaled.jpg" style={{ height: '50vh', width: '80%' }} /></Link>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        {/* Doctors section */}
        <div className="doctor">
          <div className="headsell">
            <div>
              <h1><b>DOCTORS</b></h1>
            </div>
            <div className="offerout">
              <div className="offeron">
                <div className="doctorin">
                  <img alt='web_home' src="/images/d5.jpg" style={{ height: 200, margin: '5px 40px' }} />
                  <br />
                  <br />
                  <h5>Dr. M S Pushkala</h5>
                  <br />
                  <h6>
                    Urologist, Robotic Surgeon | Urologist And Robotic Prostate
                    Surgeon
                  </h6>
                </div>
              </div>
              <div className="offeron">
                <div className="doctorin">
                  <img alt='web_home' src="/images/d4.jpg" style={{ height: 200, margin: '5px 40px' }} />
                  <br />
                  <br />
                  <h5>Dr. R kaladevi</h5>
                  <br />
                  <h6>
                    Endocrinologists commonly treat diabetes, thyroid dysfunction,
                    and reproductive health.
                  </h6>
                </div>
              </div>
              <div className="offeron">
                <div className="doctorin">
                  <img alt='web_home' src="/images/d2.jpg" style={{ height: 200, margin: '5px 40px' }} />
                  <br />
                  <br />
                  <h5>Dr.M BhanuPriya</h5>
                  <br />
                  <h6>
                    A neurologist focuses on the anatomy, functions, and disorders
                    of the nerves and nervous systems
                  </h6>
                </div>
              </div>
              <div className="offeron">
                <div className="doctorin">
                  <img alt='web_home' src="/images/d1.jpg" style={{ height: 200, margin: '5px 40px' }} />
                  <br />
                  <br />
                  <h5>Dr Vishal Rao</h5>
                  <br />
                  <h6>
                    Allergist/Immunologists are trained to treat allergies and
                    disease of the immune system, such as asthma.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>

    </Layout>
  )
}

export default Homepage
