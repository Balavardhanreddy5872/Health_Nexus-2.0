import React from 'react'
// import { Link } from 'react-router-dom'
const Doctorcard = (props) => {
    // const doctorId = match.params.id;
    return (
        <>
            
                    <div className="col-md-3">
                        <div className="card p-2 py-3 text-center shadow-lg p-3 mb-5 bg-white rounded ">
                            <div className="img mb-2 "> <img alt="x" src={props.img} width="70" className="rounded-circle" /> </div>
                            <h5 className="mb-0">{props.name}</h5> <small>{props.spec}</small>
                            <p className='my-3'>{props.desc}</p>
                        </div>
                    </div>
            
            
        </>
    )
}

export default Doctorcard
