
import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
// import {Navgate} from "react-router-dom";

const Register = () => {

    // ================ Variable ===========================
    // const navigate = Navgate();

    // ====================== States =======================

    const [user, setUser] = useState({ email: "", password: "" })
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    // ======================= handler =======================
    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const SubmitHanddler = async (e) => { e.preventDefault(); 
        setIsLoading(true);
        try {
            await createUserWithEmailAndPassword(
                auth, 
                user.email, 
                user.password
            );
            setIsLoading(false);
            setError("");
            // navigate("./Home.jsx");

        } catch (err) {
            setError(err.message);
        }
       
    }

    



    return (
        <div className="min-h-screen flex items-center justify-center bg-primaryLight">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">
                <h2 className="text-3xl font-bold text-center text-primary mb-6">
                    Create Account
                </h2>

                <form className="space-y-4" onSubmit={SubmitHanddler}>

                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email"
                        value={user.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    />

                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Minimum 6 characters"
                        value={user.password}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none"
                    />

                    <div>
                        {!isLoading && <button className="w-full bg-primary text-red-600 py-3 rounded-lg hover:bg-primaryDark transition">Register</button>}
                        {isLoading && <button className="w-full bg-primary text-white py-3 rounded-lg cursor-not-allowed" disabled>Loading...</button>}
                        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Register;
