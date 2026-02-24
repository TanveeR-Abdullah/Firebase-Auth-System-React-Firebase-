
import { useState } from "react";
import { auth, db, GoogleAuth, GithubAuth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
import { signInWithPopup } from "firebase/auth";


const Register = () => {

    // ================ Variable ===========================
    const navigate = useNavigate();

    // ====================== States =======================
    const [user, setUser] = useState({ email: "", password: "" })
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    

    // ======================= handler =======================
    const handleInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    // ===================register Handler ================
    const SubmitHanddler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await createUserWithEmailAndPassword(
                auth,
                user.email,
                user.password
            );

            await setDoc(doc(db, "user", auth.currentUser.uid), {
                email: user.email,
                role: "user",
                createdAt: new Date(),
            })

            setIsLoading(false);
            setError("");
            navigate("/register/loginhomepage");

        } catch (err) {
            setIsLoading(false);
            setError(err.message);
        }

    }

    // ====================Log in Handler=====================
    const loginHanddler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await signInWithEmailAndPassword(
                auth,
                user.email,
                user.password
            );
            setIsLoading(false);
            setError("");
            navigate("/register/loginhomepage");

        } catch (err) {
            setIsLoading(false);
            setError(err.message);
        }

    }

    // ======================Google Auth register ========================
    const handleGoogleAuth = async () => {
        setIsLoading(true);
        try {
            const result = await signInWithPopup(auth, GoogleAuth);
            const user = result.user;

            await setDoc(
                doc(db, "users", user.uid),
                {
                    email: user.email,
                    provider: "google",
                    role: "user",
                    createdAt: new Date(),
                },
                await setDoc(doc(db, "user", auth.currentUser.uid), {
                    email: user.email,
                    role: "user",
                    createdAt: new Date(),
                }),
            );

            setError("");
            navigate("/register/loginhomepage");

        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    // ======================GitHub Auth register ========================
    const handleGithubAuth = async () => {
        setIsLoading(true);
        try {
            const result = await signInWithPopup(auth, GithubAuth);
            const user = result.user;

            await setDoc(
                doc(db, "users", user.uid),
                {
                    email: user.email,
                    provider: "google",
                    role: "user",
                    createdAt: new Date(),
                },
                await setDoc(doc(db, "user", auth.currentUser.uid), {
                    email: user.email,
                    role: "user",
                    createdAt: new Date(),
                }),
                { merge: true }
            );

            setError("");
            navigate("/register/loginhomepage");

        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };








    return (
        <div className="min-h-screen flex items-center justify-center bg-primaryLight">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8">
                <h2 className="text-3xl font-bold text-center text-primary mb-6">
                    Create Account
                </h2>

                <form className="space-y-4" >

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

                    <div className="flex justify-center gap-1 ">
                        {!isLoading && <button onClick={SubmitHanddler} className="w-full bg-primary text-blue-700 py-3 rounded-lg hover:bg-primaryDark transition">Register</button>}
                        {isLoading && <button className="w-full bg-primary text-white py-3 rounded-lg cursor-not-allowed" disabled>Loading...</button>}
                        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                        <samp className="flex items-center ">OR</samp>



                        {!isLoading && <button onClick={loginHanddler} className="w-full bg-primary text-blue-700 py-3 rounded-lg hover:bg-primaryDark transition">Log in</button>}
                        {isLoading && <button className="w-full bg-primary text-white py-3 rounded-lg cursor-not-allowed" disabled>Loading...</button>}
                        {error && <p className="text-red-500 text-center mt-2">{error}</p>}


                    </div>


                    <div className="mt-6 space-y-3">
                        <button onClick={handleGoogleAuth} className="w-full border border-primary text-primary py-2 rounded-lg hover:bg-primary hover:text-blue-500 transition">
                            Continue with Google
                        </button>

                        <button onClick={handleGithubAuth} className="w-full border border-primary text-primary py-2 rounded-lg hover:bg-primary hover:text-blue-500 transition">
                            Continue with GitHub
                        </button>
                    </div>

                </form>

            </div>
        </div >
    );
};

export default Register;
