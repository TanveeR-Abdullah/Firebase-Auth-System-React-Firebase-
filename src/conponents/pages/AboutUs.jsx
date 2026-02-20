

 export default  function AboutUs(){
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            We build modern, user-friendly, and scalable web applications
            using the latest technologies.
          </p>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Team"
              className="rounded-2xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Who We Are
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We are passionate developers focused on creating high-quality
              digital experiences. Our expertise includes React, Node.js,
              MongoDB, Firebase, and modern UI frameworks like Tailwind CSS.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our goal is to deliver fast, secure, and scalable applications
              that solve real-world problems and provide seamless user
              experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-indigo-600">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To build innovative and efficient web solutions that empower
              businesses and individuals.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-purple-600">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To become a trusted technology partner by delivering excellence
              and value through modern development practices.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-3 text-pink-600">
              Our Values
            </h3>
            <p className="text-gray-600">
              Integrity, innovation, teamwork, and continuous learning are the
              core values that drive our success.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Build Something Amazing Together
        </h2>
        <p className="mb-6">
          Contact us today and bring your ideas to life.
        </p>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

