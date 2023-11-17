import React from 'react'
import Layout from '../components/Layout/Layout'
import Doctorcard from './Doctorcard'

const Doctor = (props) => {
  return (
    <Layout>
      {/* <div className="container mt-5 mb-5">
        <div className="row g-2">
          <div className="col-md-3 ">
            <div className="card p-2 py-3 text-center shadow-lg p-3 mb-5 bg-white rounded ">
              <div className="img mb-2 "> <img alt=""  src="https://i.imgur.com/LohyFIN.jpg" width="70" className="rounded-circle"/> </div>
              <h5 className="mb-0">Patey Cruiser</h5> <small>Neurosurgeon</small>
            <p  className='my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, a. Ex expedita laboriosam recusandae saepe blanditiis ipsum vitae accusamus illo.</p>
              <div className="mt-4 apointment"> <button className="btn btn-info text-uppercase">Book Appointment</button> </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-2 py-3 text-center shadow-lg p-3 mb-5 bg-white rounded">
              <div className="img mb-2"> <img alt=""  src="https://i.imgur.com/o5uMfKo.jpg" width="70" className="rounded-circle"/> </div>
              <h5 className="mb-0">Mario Speedway</h5> <small>Cardiologist</small>
        <p  className='my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, a. Ex expedita laboriosam recusandae saepe blanditiis ipsum vitae accusamus illo.</p>
              <div className="mt-4 apointment"> <button className="btn btn-info text-uppercase">Book Appointment</button> </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-2 py-3 text-center shadow-lg p-3 mb-5 bg-white rounded">
              <div className="img mb-2"> <img alt=""  src="https://i.imgur.com/tmdHXOY.jpg" width="70" className="rounded-circle"/> </div>
              <h5 className="mb-0">Anna Sthesia</h5> <small>Surgeon</small>
               <p  className='my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, a. Ex expedita laboriosam recusandae saepe blanditiis ipsum vitae accusamus illo.</p>
              <div className="mt-4 apointment"> <button className="btn btn-info text-uppercase">Book Appointment</button> </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-2 py-3 text-center shadow-lg p-3 mb-5 bg-white rounded">
              <div className="img mb-2"> <img alt=""  src="https://i.imgur.com/C4egmYM.jpg" width="70" className="rounded-circle"/> </div>
              <h5 className="mb-0">Paul Moliv</h5> <small>Dentist</small>
 <p  className='my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, a. Ex expedita laboriosam recusandae saepe blanditiis ipsum vitae accusamus illo.</p>
              <div className="mt-4 apointment"> <button className="btn btn-info text-uppercase">Book Appointment</button> </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-2 py-3 text-center shadow-lg p-3 mb-5 bg-white rounded">
              <div className="img mb-2"> <img alt=""  src="https://i.imgur.com/0LKZQYM.jpg" width="70" className="rounded-circle"/> </div>
              <h5 className="mb-0">Anna Maul</h5> <small>Eye Specialist</small>
          <p  className='my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, a. Ex expedita laboriosam recusandae saepe blanditiis ipsum vitae accusamus illo.</p>
              <div className="mt-4 apointment"> <button className="btn btn-info text-uppercase">Book Appointment</button> </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-2 py-3 text-center shadow-lg p-3 mb-5 bg-white rounded">
              <div className="img mb-2"> <img alt=""  src="https://i.imgur.com/ZSkeqnd.jpg" width="70" className="rounded-circle"/> </div>
              <h5 className="mb-0">Gail Forcewind</h5> <small>Urology</small>
        <p  className='my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, a. Ex expedita laboriosam recusandae saepe blanditiis ipsum vitae accusamus illo.</p>
              <div className="mt-4 apointment"> <button className="btn btn-info text-uppercase">Book Appointment</button> </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-2 py-3 text-center shadow-lg p-3 mb-5 bg-white rounded">
              <div className="img mb-2"> <img alt=""  src="https://i.imgur.com/MZm1LNz.jpg" width="70" className="rounded-circle"/> </div>
              <h5 className="mb-0">Patey Cruiser</h5> <small>Neurosurgeon</small>
               <p  className='my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, a. Ex expedita laboriosam recusandae saepe blanditiis ipsum vitae accusamus illo.</p>
              <div className="mt-4 apointment"> <button className="btn btn-info text-uppercase">Book Appointment</button> </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-2 py-3 text-center shadow-lg p-3 mb-5 bg-white rounded">
              <div className="img mb-2"> <img alt=""  src="https://i.imgur.com/HFpxxJz.jpg" width="70" className="rounded-circle"/> </div>
              <h5 className="mb-0">Patey Cruiser</h5> <small>Neurosurgeon</small>
             <p className='my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, a. Ex expedita laboriosam recusandae saepe blanditiis ipsum vitae accusamus illo.</p>
              <div className="mt-4 apointment"> <button className="btn btn-info text-uppercase">Book Appointment</button> </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container mt-5 mb-5">
        <div className="row g-2">
      <Doctorcard name={"Patey Cruiser"} />
      <Doctorcard name={"Patey Cruiser"} />
      <Doctorcard name={"Patey Cruiser"} />
          <Doctorcard name={"Patey Cruiser"} />
      <Doctorcard name={"Patey Cruiser"} />
          <Doctorcard name={"Patey Cruiser"} />
      <Doctorcard name={"Patey Cruiser"} />
      <Doctorcard name={"Patey Cruiser"} />
      <Doctorcard name={"Patey Cruiser"} />
      <Doctorcard name={"Patey Cruiser"}/>
        </div>
      </div>

    </Layout>
  )
}

export default Doctor
