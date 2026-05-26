function App() {

  const scanLink = () => {
    const url = prompt("Enter website link to scan:");

    if (!url) {
      alert("Please enter a link");
      return;
    }

    if (
      url.includes("upi") ||
      url.includes("free") ||
      url.includes("gift") ||
      url.includes("loan")
    ) {
      alert("⚠ Warning: This link looks suspicious!");
    } else {
      alert("✅ This link looks safe.");
    }
  };

  const learnMore = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-green-400">
          CyberRakshak
        </h1>

        <button className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-full font-semibold transition">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="text-center px-6 py-16">

        <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Stay Safe <br />
          From <br />
          <span className="text-green-400">
            Online Scams & Hackers
          </span>
        </h2>

        <p className="text-gray-300 mt-8 max-w-2xl mx-auto text-lg leading-8">
          CyberRakshak helps you stay protected from phishing,
          fake links, online frauds, OTP scams and cyber attacks.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-10 flex-wrap">

          <button
            onClick={scanLink}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl text-lg font-bold transition"
          >
            Scan Link
          </button>

          <button
            onClick={learnMore}
            className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-2xl text-lg font-bold transition"
          >
            Learn More
          </button>

        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 px-6 pb-20">

        <div className="bg-[#07132b] border border-gray-800 rounded-3xl p-6">
          <h3 className="text-green-400 text-3xl font-bold mb-4">
            Scam Detection
          </h3>

          <p className="text-gray-300 text-lg leading-8">
            Detect suspicious websites and phishing attacks instantly.
          </p>
        </div>

        <div className="bg-[#07132b] border border-gray-800 rounded-3xl p-6">
          <h3 className="text-green-400 text-3xl font-bold mb-4">
            Link Scanner
          </h3>

          <p className="text-gray-300 text-lg leading-8">
            Scan unknown links before opening them on your device.
          </p>
        </div>

        <div className="bg-[#07132b] border border-gray-800 rounded-3xl p-6">
          <h3 className="text-green-400 text-3xl font-bold mb-4">
            Cyber Awareness
          </h3>

          <p className="text-gray-300 text-lg leading-8">
            Learn how hackers work and protect yourself online.
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 pb-10">
        © 2026 CyberRakshak. All rights reserved.
      </footer>

    </div>
  );
}

export default App;
