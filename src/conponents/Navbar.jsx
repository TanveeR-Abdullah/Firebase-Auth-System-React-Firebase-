
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext"
import { signOut } from "firebase/auth";
import { auth } from "../firebase";





function Navbar() {

    const { userloggedIn } = useAuth();
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div>

            <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">

                {/* DeskTop Menu */}
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">

                        {/* Logo */}
                        <div className="text-2xl font-bold text-indigo-600">
                            Welcome to my website
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">

                            {!userloggedIn && (
                                <NavLink to="/" className="hover:text-indigo-600 font-bold transition">
                                    Home
                                </NavLink>
                            )}


                            {userloggedIn && (
                                <>
                                    <NavLink to="/register/LogInHomepage" className="hover:text-indigo-600 font-bold transition">
                                        Home
                                    </NavLink>
                                    <NavLink to="/contact" className="hover:text-indigo-600 font-bold transition">
                                        Contact
                                    </NavLink>
                                    <NavLink to="/aboutus" className="hover:text-indigo-600 font-bold transition">
                                        About us
                                    </NavLink>
                                    <NavLink to="/futureplans" className="hover:text-indigo-600 font-bold transition">
                                        Future Plans
                                    </NavLink>
                                </>
                            )}

                        </div>

                        {/* /* Button */}

                        {!userloggedIn && (<div className="hidden md:block">
                            <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
                                <NavLink to="/register" className="hover:text-indigo-600 transition">
                                    Sign up
                                </NavLink>
                            </button>
                        </div>
                        )}
                        {userloggedIn && <div className="hidden md:block">
                            <button onClick={() => signOut(auth)} className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
                                Sign Out
                            </button>
                        </div>}



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
                    <div className="md:hidden bg-white shadow-md px-6 pb-4 space-y-4 text-gray-700 font-medium flex flex-col gap-2 ">

                        <NavLink to="/" onClick={() => setIsOpen(!open)} className="hover:text-indigo-600 transition mt-2">
                            Home
                        </NavLink>

                        <NavLink to="/aboutus" onClick={() => setIsOpen(!open)} className="hover:text-indigo-600 transition">
                            About us
                        </NavLink>
                        {!userloggedIn && (<div className=" md:block">
                            <button onClick={() => setIsOpen(!open)} className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
                                <NavLink to="/register" className="hover:text-indigo-600 transition">
                                    Sign up
                                </NavLink>
                            </button>
                        </div>
                        )}

                        {userloggedIn && <div className="md:block">
                            <button onClick={() => signOut(auth) && setIsOpen(!open)} className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
                                Sign Out
                            </button>
                        </div>}
                    </div>
                )}
            </nav>

        </div>
    )
}

export default Navbar
