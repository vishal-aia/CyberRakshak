function App() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-green-400">
          CyberRakshak
        </h1>

        <button className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-black font-semibold">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">

        <h2 className="text-5xl font-bold leading-tight">
          Stay Safe From <br />
          <span className="text-green-400">
            Online Scams & Hackers
          </span>
        </h2>

        <p className="text-gray-400 mt-6 max-w-xl">
          CyberRakshak helps you stay protected from phishing,
          fake links, online frauds, OTP scams and cyber attacks.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-xl font-semibold">
            Scan Link
          </button>

          <button className="border border-green-500 text-green-400 px-6 py-3 rounded-xl font-semibold hover:bg-green-500 hover:text-black">
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12">

        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <h3 className="text-xl font-bold text-green-400 mb-3">
            Scam Detection
          </h3>

          <p className="text-gray-400">
            Detect suspicious websites and phishing attacks instantly.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <h3 className="text-xl font-bold text-green-400 mb-3">
            Link Scanner
          </h3>

          <p className="text-gray-400">
            Scan unknown links before opening them on your device.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
          <h3 className="text-xl font-bold text-green-400 mb-3">
            Cyber Awareness
          </h3>

          <p className="text-gray-400">
            Learn how hackers work and protect yourself online.
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-800 text-gray-500">
        © 2026 CyberRakshak. All rights reserved.
      </footer>

    </div>
  );
}

export default App;
