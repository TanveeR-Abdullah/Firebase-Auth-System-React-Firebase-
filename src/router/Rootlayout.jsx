import { Outlet } from "react-router-dom";
import Navbar from "../conponents/Navbar";

const RootLayout = () => {
  return (
    <div>
      
      <Navbar />
      <Outlet />


      
    </div>
  );
};

export default RootLayout;