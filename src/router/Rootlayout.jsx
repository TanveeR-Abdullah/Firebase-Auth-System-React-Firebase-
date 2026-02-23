import { Outlet } from "react-router-dom";
import Navbar from "../conponents/Navbar";

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