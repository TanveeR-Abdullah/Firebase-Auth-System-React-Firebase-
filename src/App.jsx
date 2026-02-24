import { createBrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./router/Rootlayout";
import Navbar from "./conponents/Navbar";
import Register from "./conponents/pages/Register";
import Home from "./conponents/pages/Home";
import AboutUs from "./conponents/pages/AboutUs";
import LogInHomepage from "./conponents/pages/LogInHomepage";



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
        <Route path="/register/loginhomepage" element={<LogInHomepage />} />
      </Route>
    </Routes>
  );
}

export default App;