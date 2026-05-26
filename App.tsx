function App() {

  const scanLink = () => {
    const url = prompt("Enter link to scan");

    if (!url) return;

    if (
      url.includes("free") ||
      url.includes("upi") ||
      url.includes("gift") ||
      url.includes("loan")
    ) {
      alert("⚠ Suspicious Link Detected!");
    } else {
      alert("✅ Link Looks Safe");
    }
  };

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-5 py-4 border-b border-gray-800">

        <h1 className="text-3xl font-bold text-green-400">
          CyberRakshak
        </h1>

        <button className="bg-green-500 hover:bg-green-600 px-5 py-2 rounded-xl font-bold">
          Get Started
        </button>

      </nav>

      {/* Hero */}
      <section className="px-6 py-16 text-center max-w-5xl mx-auto">

        <h2 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Stay Safe <br />

          From <br />

          <span className="text-green-400">
            Online Scams <br /> & Hackers
          </span>
        </h2>

        <p className="text-gray-300 text-xl mt-8 leading-9 max-w-3xl mx-auto">
          CyberRakshak helps you stay protected from phishing,
          fake links, online frauds, OTP scams and cyber attacks.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mt-12">

          <button
            onClick={scanLink}
            className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl text-xl font-bold"
          >
            Scan Link
          </button>

          <button
            onClick={() =>
              window.scrollTo({
                top: document.body.scrollHeight,
                behavior: "smooth",
              })
            }
            className="border border-white px-8 py-4 rounded-2xl text-xl font-bold hover:bg-white hover:text-black"
          >
            Learn More
          </button>

        </div>

      </section>

      {/* Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-20 max-w-6xl mx-auto">

        <div className="bg-[#07132b] border border-gray-800 rounded-3xl p-8">
          <h3 className="text-green-400 text-3xl font-bold mb-4">
            Scam Detection
          </h3>

          <p className="text-gray-300 text-lg leading-8">
            Detect suspicious websites and phishing attacks instantly.
          </p>
        </div>

        <div className="bg-[#07132b] border border-gray-800 rounded-3xl p-8">
          <h3 className="text-green-400 text-3xl font-bold mb-4">
            Link Scanner
          </h3>

          <p className="text-gray-300 text-lg leading-8">
            Scan unknown links before opening them.
          </p>
        </div>

        <div className="bg-[#07132b] border border-gray-800 rounded-3xl p-8">
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
        © 2026 CyberRakshak
      </footer>

    </div>
  );
}

export default App;
