import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleChange(identifier: string, value: string) {
    if (identifier === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  }
  const validatePassword = password.trim().length > 6;
  const validateEmail = email.includes("@");

  function handleLogin() {
    if (password.trim().length < 6) {
      alert("Please enter a valid password");
    }
    if (!email.includes("@")) {
      alert("Please enter a valid email");
    }
  }
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-950 to-indigo-950 px-4 py-10">
      {/* Curved SVG Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-24"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#4c1d95" }}
          ></path>
        </svg>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-[280px] sm:max-w-[320px] bg-white shadow-xl rounded-xl z-10">
        <div className="h-2 bg-[#a372e8] rounded-t-md"></div>
        <div className="px-6 py-6">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 text-center mb-4">
            Login to your account
          </h2>

          <label className="block text-gray-700 text-sm font-medium">
            Username or Email
          </label>
          <input
            type="text"
            placeholder="Email"
            className="border w-full h-10 px-3 mt-2 mb-4 text-sm text-gray-800 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />

          <label className="block text-gray-700 text-sm font-medium">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="border w-full h-10 px-3 mt-2 text-sm text-gray-800 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          />

          <div className="flex justify-between items-center mt-4">
            <button
              type="submit"
              className="bg-[#4f3279] text-white py-1.5 px-4 text-sm rounded-md hover:bg-[#50376d] font-medium transition"
            >
              Login
            </button>
            <a
              href="#"
              className="text-sm text-[#4f3279] hover:text-[#3a0e6e] underline transition"
            >
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
