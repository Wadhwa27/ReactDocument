import React from "react";
import ReactLogo from "../assets/react.svg"; // adjust path if needed

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#a372e8] via-[#4f3279] to-[#3a0e6e] text-white">
      <div className="text-center space-y-6 p-6 rounded-2xl bg-white/10 shadow-xl backdrop-blur-md">
        {/* Rotating React Logo */}
        <div className="flex justify-center">
          <img
            src={ReactLogo}
            alt="React Logo"
            className="w-24 h-24 animate-spin-slow"
          />
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-white">React Documentation</h1>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-2 bg-white text-[#3a0e6e] font-semibold rounded-full hover:bg-cyan-200 transition">
            Register
          </button>
          <button className="px-6 py-2 bg-white text-[#3a0e6e] font-semibold rounded-full hover:bg-cyan-200 transition">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
