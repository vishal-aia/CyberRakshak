function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold text-green-400 mb-4">
        CyberRakshak
      </h1>

      <p className="text-center text-lg max-w-xl">
        Protect yourself from phishing links, online frauds,
        OTP scams and cyber attacks.
      </p>

      <button className="mt-8 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl text-lg font-semibold">
        Scan Now
      </button>
    </div>
  );
}

export default App;
