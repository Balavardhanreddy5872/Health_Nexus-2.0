import React from 'react'
import Fotter from './Fotter'
import Header from './Header'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Layout = ({children}) => {
  return (
    <>
       <Header />
        <main style={{minHeight:'70vh'}}>{children}</main>
        <ToastContainer />
       <Fotter />
    </>
  )
}

export default Layout
