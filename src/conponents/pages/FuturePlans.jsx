
const FuturePlans = () => {
  return (
    <div className="min-h-screen  bg-gray-100">

      {/* Header */}
      <div className="bg-white mt-7 shadow-md py-10 text-center">
        <h1 className="text-4xl mt-3 font-bold text-indigo-600">
          Our Future Plans
        </h1>
        <p className="text-gray-600 mt-3">
          Exciting updates and features coming soon!
        </p>
      </div>

      {/* Plans Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-indigo-600 mb-3">
            🚀 New Features
          </h3>
          <p className="text-gray-600">
            We plan to introduce advanced dashboard tools and better user
            customization options.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-purple-600 mb-3">
            🔐 Enhanced Security
          </h3>
          <p className="text-gray-600">
            Improved authentication systems and better data protection
            strategies.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
          <h3 className="text-xl font-semibold text-pink-600 mb-3">
            📱 Mobile Optimization
          </h3>
          <p className="text-gray-600">
            Fully optimized mobile experience with faster performance.
          </p>
        </div>

      </div>

      {/* Vision Section */}
      <div className="bg-indigo-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Growing Together With Our Users
        </h2>
        <p className="max-w-2xl mx-auto">
          Our mission is to continuously improve and provide the best
          experience possible for our community.
        </p>
      </div>

    </div>
  );
};

export default FuturePlans;