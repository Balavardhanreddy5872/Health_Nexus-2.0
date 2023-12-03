import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutus from "./pages/Aboutus";
import Pagenotfound from "./pages/Pagenotfound";
import Medicine from "./pages/Medicine";
import Doctor from "./pages/Doctor";
import Labtest from "./pages/Labtest";
import Contact from "./pages/Contactus";
import Register from "./pages/Auth/Register";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";
import AdminRoute from "./components/Routes/AdminRoute";
import Admindashboard from "./pages/Admin/Admindashboard";
import Addmedicine from "./pages/Admin/Addmedicine";
import Users from "./pages/Admin/User";
import Doctorlogin from "./pages/Doctorlogin";
import Doctorreg from "./pages/Doctorreg";
import DoctPatient from "./pages/DoctPatient";
import Profile from "./pages/user/Profile";
import Orders from "./pages/user/Orders"
import Doctorsapp from "./pages/user/Doctorsapp";
import LabTests from "./pages/user/LabTests";
import Labreport from "./pages/Admin/Labreport";
import Products from "./pages/Admin/Product";
import UpdateProduct from "./pages/Admin/Updateproduct";
import Search from "./pages/Search";
import Productdetails from "./pages/Productdetails";
import Cart from "./pages/Cart";



function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element= {<Homepage />}/>
        <Route path = "/register" element= {<Register/>}/>
        <Route path = "/cart" element= {<Cart/>}/>
        <Route path = "/productdetails/:slug" element= {<Productdetails/>}/>
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element = {<Orders />}/>
          <Route path="user/profile" element = {<Profile />} />
          <Route path = "user/app" element = {<Doctorsapp />} />
          <Route path = "user/lab" element = {<LabTests />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute/>}>
          <Route path="admin" element={<Admindashboard/>} />
          <Route path="admin/create-product" element={<Addmedicine />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/products" element={<Products/>} />
          <Route path="admin/product/:slug" element={<UpdateProduct />} />
          <Route path = "admin/labs" element = {<Labreport/>} />
        </Route>
        <Route path = "/login" element= {<Login />}/>
        <Route path = "/aboutus" element= {<Aboutus />}/>
        <Route path = "*" element= {<Pagenotfound />}/>
        <Route path = "/medicine" element= {<Medicine />}/>
        <Route path = "/search" element={<Search />}/>
        <Route path = "/doctor" element= {<Doctor />}/>
        <Route path = "/labtests" element= {<Labtest />}/>
        <Route path = "/contact" element={<Contact />} />
        <Route path = "/doctorlogin" element={<Doctorlogin />} />
        <Route path="/doctorreg" element={<Doctorreg />} />
        <Route path="/doctorpat" element={<DoctPatient />} />

      </Routes>
    </>
  );
}

export default App;
