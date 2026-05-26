function App() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* Header */}
      <header className="flex justify-between items-center px-5 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-green-400">
          CyberRakshak
        </h1>

        <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold">
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center px-6 py-16">

        <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Stay Safe <br />
          From <br />
          <span className="text-green-400">
            Online Scams
          </span>
        </h2>

        <p className="text-gray-300 mt-8 text-lg max-w-2xl mx-auto">
          CyberRakshak helps you stay protected from phishing,
          fake links, OTP scams and cyber attacks.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">

          <button className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl text-lg font-bold">
            Scan Link
          </button>

          <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-4 rounded-xl text-lg font-bold">
            Learn More
          </button>

        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-6 py-12">

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold text-green-400 mb-4">
            Scam Detection
          </h3>

          <p className="text-gray-300">
            Detect suspicious websites and phishing attacks instantly.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold text-green-400 mb-4">
            Link Scanner
          </h3>

          <p className="text-gray-300">
            Scan unknown links before opening them on your device.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl">
          <h3 className="text-2xl font-bold text-green-400 mb-4">
            Cyber Awareness
          </h3>

          <p className="text-gray-300">
            Learn how hackers work and protect yourself online.
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-8 border-t border-gray-800">
        © 2026 CyberRakshak. All rights reserved.
      </footer>

    </div>
  );
}

export default App;
