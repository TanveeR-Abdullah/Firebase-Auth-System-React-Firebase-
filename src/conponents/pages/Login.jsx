

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-md p-8">
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Welcome Back
        </h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <button className="w-full bg-primary text-red-300 py-3 rounded-lg hover:bg-primaryDark transition">
            Login
          </button>
        </form>

        <div className="mt-6 space-y-3">
          <button className="w-full border border-primary text-primary py-2 rounded-lg hover:bg-primary hover:text-blue-500 transition">
            Continue with Google
          </button>

          <button className="w-full border border-primary text-primary py-2 rounded-lg hover:bg-primary hover:text-blue-500 transition">
            Continue with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
