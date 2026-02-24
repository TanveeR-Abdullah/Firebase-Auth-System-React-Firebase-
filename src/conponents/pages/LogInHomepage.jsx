
export default function LogInHomepage() {
    return (
        <div className="min-h-screen bg-gray-100">

            {/* Welcome Section */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="bg-white rounded-2xl shadow-lg p-10 text-center">

                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Welcome To The Log In page! 🎉
                    </h2>

                    <p className="text-gray-600 text-lg mb-8">
                        You have successfully logged into your account.
                        Explore your dashboard and manage your profile.
                    </p>

                    <div className="flex justify-center gap-6 flex-wrap">
                        <button className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
                            Go to Profile
                        </button>

                        <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition">
                            Browse Features
                        </button>
                    </div>
                </div>

                {/* Info Cards */}
                <div className="grid md:grid-cols-3 gap-8 mt-12">

                    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                            Account Status
                        </h3>
                        <p className="text-gray-600">
                            Your account is active and running smoothly.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold mb-2 text-purple-600">
                            Latest Updates
                        </h3>
                        <p className="text-gray-600">
                            Check out new features and improvements.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
                        <h3 className="text-xl font-semibold mb-2 text-pink-600">
                            Support
                        </h3>
                        <p className="text-gray-600">
                            Need help? Contact our support team anytime.
                        </p>
                    </div>

                </div>
            </div>
        </div>

    )
}