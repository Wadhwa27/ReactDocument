import ReactLogo from "../assets/react.svg";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-[#a372e8] via-[#65bad6] to-[#3a0e6e] 
      bg-[length:200%_200%] animate-gradient-bg text-white overflow-hidden px-4"
    >
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-300 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-pink-300 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>

      {/* Glassmorphic Card */}
      <div
        className="z-10 max-w-md w-full text-center space-y-6 p-6 md:p-10 rounded-2xl bg-gradient-to-br from-[#2c3e50]/70 via-[#23272f]/80 to-[#365767]/70
          shadow-2xl backdrop-blur-md border border-white/10"
      >
        {/* Rotating React Logo */}
        <div className="flex justify-center">
          <img
            src={ReactLogo}
            alt="React Logo"
            className="w-24 h-24 animate-spin-slow saturate-150 brightness-150 contrast-125"
          />
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          React Documentation
        </h1>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link to="/signup" className="w-full md:w-1/2">
            <button className="w-full py-2 bg-gradient-to-r from-cyan-300 to-blue-400 text-[#3a0e6e] font-semibold rounded-full hover:from-blue-400 hover:to-cyan-300 transition-all duration-300 hover:scale-105">
              Register
            </button>
          </Link>

          <Link to="/login" className="w-full md:w-1/2">
            <button className="w-full py-2 bg-gradient-to-r from-cyan-300 to-blue-400 text-[#3a0e6e] font-semibold rounded-full hover:from-blue-400 hover:to-cyan-300 transition-all duration-300 hover:scale-105">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
