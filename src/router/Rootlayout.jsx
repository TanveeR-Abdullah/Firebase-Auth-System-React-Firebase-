import { Outlet } from "react-router-dom";
import Navbar from "../conponents/Navbar";
import DefaultHomepage from "../conponents/pages/DefaultHomepage";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />


      </div>
    </div>
  );
};

export default RootLayout;