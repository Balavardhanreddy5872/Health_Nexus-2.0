import React, { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import {toast} from 'react-toastify'

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");
    
    // form function 
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(name,email,password,number,address);
        toast.success('Register Successfully')
    }
    return (
        <Layout>
            <div className='register'>
                <form onSubmit={handleSubmit}>
                    <h1>Register-Page</h1>
                    <div className="mb-3" style={{ width: '500px' }}>
                        <label htmlFor="exampleInputname" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name="name" placeholder='Enter your name...' value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="mb-3" style={{ width: '500px' }}>
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" placeholder='Enter your Email....' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3" style={{ width: '500px' }}>
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" placeholder='Enter your Password....' value={password}  onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    <div className="mb-3" style={{ width: '500px' }}>
                        <label htmlFor="exampleInputPassword1" className="form-label">Mobile</label>
                        <input type="text" className="form-control" id="number" name="number" placeholder='Enter your Number....' value={number}  onChange={(e) => setNumber(e.target.value)} required/>
                    </div>
                    <div className="mb-3" style={{ width: '500px' }}>
                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" name="Address" placeholder='Enter your Address....' value={address} onChange={(e) => setAddress(e.target.value)} required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </Layout>
    )
}

export default Register
