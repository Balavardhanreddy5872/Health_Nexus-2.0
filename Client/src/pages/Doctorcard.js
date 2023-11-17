import React from 'react'
// import { Link } from 'react-router-dom'
const Doctorcard = (props) => {
    // const doctorId = match.params.id;
    return (
        <>
            
                    <div className="col-md-3">
                        <div className="card p-2 py-3 text-center shadow-lg p-3 mb-5 bg-white rounded ">
                            <div className="img mb-2 "> <img alt="" src="https://i.imgur.com/LohyFIN.jpg" width="70" className="rounded-circle" /> </div>
                            <h5 className="mb-0">{props.name}</h5> <small>Neurosurgeon</small>
                            <p className='my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, a. Ex expedita laboriosam recusandae saepe blanditiis ipsum vitae accusamus illo.</p>
                    <div className="mt-4 apointment"> <button className="btn btn-info text-uppercase">BOOK</button> </div>
                        </div>
                    </div>
            
            
        </>
    )
}

export default Doctorcard
