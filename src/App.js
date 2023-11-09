import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutus from "./pages/Aboutus";
import Pagenotfound from "./pages/Pagenotfound";
import Medicine from "./pages/Medicine";
import Doctor from "./pages/Doctor";
import Labtest from "./pages/Labtest";
import Contact from "./pages/Contactus";


function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element= {<Homepage />}/>
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
