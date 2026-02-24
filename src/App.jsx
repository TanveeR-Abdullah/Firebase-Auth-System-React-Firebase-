import { Routes, Route } from "react-router-dom";
import RootLayout from "./router/Rootlayout";
import Register from "./conponents/pages/Register";
import Home from "./conponents/pages/Home";
import AboutUs from "./conponents/pages/AboutUs";
import LogInHomepage from "./conponents/pages/LogInHomepage";
import Contact from "./conponents/pages/Contact";
import FuturePlans from "./conponents/pages/FuturePlans";
import PrivateRoute from "./conponents/PrivateRoute";

// Temporary Contact Page

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<Register />} />


        <Route
          path="/contact"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }
        />
        <Route
          path="/register/LogInHomepage"
          element={
            <PrivateRoute>
              <LogInHomepage />
            </PrivateRoute>
          }
        />
        <Route
          path="/aboutus"
          element={
            <PrivateRoute>
              <AboutUs />
            </PrivateRoute>
          }
        />
        <Route
          path="/futureplans"
          element={
            <PrivateRoute>
              <FuturePlans />
            </PrivateRoute>
          }
        />




      </Route>
    </Routes>
  );
}

export default App;