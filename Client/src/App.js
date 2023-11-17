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
import CreateCategory from "./pages/Admin/Createcategory";
import Addmedicine from "./pages/Admin/Addmedicine";
import Users from "./pages/Admin/User";


function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element= {<Homepage />}/>
        <Route path = "/register" element= {<Register/>}/>
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute/>}>
          <Route path="admin" element={<Admindashboard/>} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<Addmedicine />} />
          <Route path="admin/users" element={<Users />} />
        </Route>
        <Route path = "/login" element= {<Login />}/>
        <Route path = "/aboutus" element= {<Aboutus />}/>
        <Route path = "*" element= {<Pagenotfound />}/>
        <Route path = "/medicine" element= {<Medicine />}/>
        <Route path = "/doctor" element= {<Doctor />}/>
        <Route path = "/labtests" element= {<Labtest />}/>
        <Route path = "/contact" element= {<Contact />}/>
      </Routes>
    </>
  );
}

export default App;
