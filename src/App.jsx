import { Routes, Route } from "react-router-dom";
import RootLayout from "./router/Rootlayout";
import DefaultHomepage from "./conponents/pages/DefaultHomepage";
import Navbar from "./conponents/Navbar";
import Register from "./conponents/pages/Register";
import Login from "./conponents/pages/Login";
import Home from "./conponents/pages/Home";
import AboutUs from "./conponents/pages/AboutUs";



// Temporary Contact Page
const Contact = () => {
  return <h1 className="text-2xl text-center mt-10">Contact Us Page</h1>;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;