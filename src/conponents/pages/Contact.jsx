

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <div className="bg-white mt-7 shadow-md py-10 text-center">
        <h1 className="text-4xl mt-3 font-bold text-indigo-600">Contact Us</h1>
        <p className="text-gray-600 mt-3">
          We'd love to hear from you. Send us your message.
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Send a Message
          </h2>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            Get in Touch
          </h2>

          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="font-semibold text-indigo-600">Address</h3>
              <p>Kaliganj, Bangladesh</p>
            </div>

            <div>
              <h3 className="font-semibold text-indigo-600">Email</h3>
              <p>support@mywebsite.com</p>
            </div>

            <div>
              <h3 className="font-semibold text-indigo-600">Phone</h3>
              <p>+880 1234 567 890</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;