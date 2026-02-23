
export default function LogInHomepage() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h1 className="text-3xl font-bold mb-4">Welcome To My Main Home Page  !</h1>
                <p className="text-gray-600 mb-6">You have successfully logged in.</p>
                <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
                    Go to Profile
                </button>
            </div>
        </div>
        
    )
}