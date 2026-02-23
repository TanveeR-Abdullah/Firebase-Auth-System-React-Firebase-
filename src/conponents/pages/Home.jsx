import { NavLink } from "react-router-dom";


export default function Home() {


  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-primary text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Auth System</h1>
        <button className="bg-white text-primary px-4 py-2 rounded-lg hover:bg-gray-200 transition">
          Logout
        </button>
      </nav>

      <div className="flex flex-col items-center justify-center h-[80vh] text-center px-4">
        <h2 className="text-4xl font-bold text-primary mb-4">
          Welcome 🎉
        </h2>

        <p className="text-gray-600 max-w-md">
          This page is protected. Only authenticated users can access this
          page. Your session will persist even after refresh.
        </p>

        <div className="mt-8 bg-white shadow-xl p-6 rounded-2xl w-full max-w-sm">
          <div className="hidden md:block">
            <button className=" px-5 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-200 transition ">
              <NavLink to="/register" className="hover:text-indigo-600 transition">
                Sign up
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
