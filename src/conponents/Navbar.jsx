
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate(<Register />);
    };

    return (
        <div>

            <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">

                        {/* Logo */}
                        <div className="text-2xl font-bold text-indigo-600">
                            Welcome to my website
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">

                            <NavLink to="/" className="hover:text-indigo-600 transition">
                                Home
                            </NavLink>

                            <NavLink to="/aboutus" className="hover:text-indigo-600 transition">
                                About us
                            </NavLink>

                           




                        </div>

                        {/* Button */}
                        <div className="hidden md:block">
                            <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
                                <NavLink to="/register" className="hover:text-indigo-600 transition">
                                    Sign up
                                </NavLink>
                            </button>
                        </div>





                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? <X size={28} /> : <Menu size={28} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white shadow-md px-6 pb-4 space-y-4 text-gray-700 font-medium">
                        <a href="/" className="block hover:text-indigo-600">
                            Home
                        </a>
                        <a href="/about" className="block hover:text-indigo-600">
                            About
                        </a>
                        <a href="/services" className="block hover:text-indigo-600">
                            Services
                        </a>
                        <a href="/contact" className="block hover:text-indigo-600">
                            Contact
                        </a>
                        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                            Login
                        </button>
                    </div>
                )}
            </nav>

        </div>
    )
}

export default Navbar
