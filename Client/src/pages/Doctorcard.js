import React from 'react'
// import $ from 'jquery';
// import { Link } from 'react-router-dom'
import "../styles/Doctorcard.css"

const Doctorcard = (props) => {

    return (
        <>
            {/* <div className="col-md-3">
                <div className="card p-2 py-3 text-center shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '300px',height:"350px" }}>
                    <div className="img mb-2 "> <img alt="x" src={props.img} width="70" className="rounded-circle" /> </div>
                    <h5 className="mb-0">{props.name}</h5> <small>{props.spec}</small>
                    <p className='my-3'>{props.desc}</p>
                </div>
            </div> */}

            <div className="box22">
                <div className="card2">
                    <div className="imgBx">
                        <img src={props.img} alt="images" />
                    </div>
                    <div className="details">
                        <h2>{props.name}<br /><span>{props.spec}</span></h2>
                    </div>
                </div>

            </div>







        </>
    );
}

export default Doctorcard
