import { useState } from "react";
import { Link } from "react-router-dom";
import { type userData, addNewUser, isNewUserExist } from "../LocalStorage";

export default function SignUp() {
  const [data, setData] = useState<userData>({ email: "", password: "" });
  const [message, setMessage] = useState<string>("");

  // const navigate = useNavigate();
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const id = event.target.id;
    const value = event.target.value;
    setData({
      ...data,
      [id]: value,
    });
    setMessage("");
  }

  function resetData() {
    setData({
      email: "",
      password: "",
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (data.password == "" || data.email == "") {
      setMessage("Please fill the form ");
      return;
    }
    if (data.password.trim().length < 6) {
      setMessage("Please enter a valid password of minimum length 6");
      return;
    }
    if (!data.email.includes("@")) {
      setMessage("Please enter a valid email");
      return;
    }
    if (isNewUserExist(data.email)) {
      setMessage("User already exists");
      return;
    }
    addNewUser(data);
    resetData();
    setMessage("User created. Click on Login");
  }

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
        className="z-10 w-full max-w-md md:max-w-lg text-center space-y-6 p-6 md:p-10 
      rounded-2xl bg-gradient-to-br from-[#2c3e50]/70 via-[#23272f]/80 to-[#365767]/70 
      shadow-2xl backdrop-blur-md border border-white/10 mx-auto"
      >
        <form onSubmit={handleSubmit}>
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6">
            Create your account
          </h2>

          {/* Email Field */}
          <div className="mb-4 text-left max-w-sm w-full mx-auto">
            <label
              htmlFor="email"
              className="block text-gray-200 text-base font-medium mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="border w-full h-10 px-3 text-sm text-gray-800 placeholder-gray-400 
    rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              value={data.email}
              onChange={handleChange}
            />
          </div>

          {/* Password Field */}
          <div className="mb-4 text-left max-w-sm w-full mx-auto">
            <label
              htmlFor="password"
              className="block text-gray-200 text-base font-medium mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="border w-full h-10 px-3 text-sm text-gray-800 placeholder-gray-400 
    rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              value={data.password}
              onChange={handleChange}
            />
          </div>

          {/* Buttons and Message */}
          <div className="max-w-sm w-full mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-300 to-blue-400 text-[#3a0e6e] text-[#3a0e6e] py-2 px-6 text-sm rounded-md hover:bg-[#50376d] 
        font-medium transition w-full sm:w-auto"
              >
                Register
              </button>

              {message && (
                <p className="text-sm text-white text-center sm:text-left">
                  {message}
                </p>
              )}

              <Link
                to="/login"
                className="text-sm text-[#b99cfb] hover:text-[#d2c2fd] underline transition text-center sm:text-left"
              >
                Already have an account? Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>

    // <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-950 to-indigo-950 px-4 py-10">
    //   {/* Curved SVG Top */}
    //   <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
    //     <svg
    //       viewBox="0 0 500 150"
    //       preserveAspectRatio="none"
    //       className="w-full h-24"
    //     >
    //       <path
    //         d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
    //         style={{ stroke: "none", fill: "#4c1d95" }}
    //       ></path>
    //     </svg>
    //   </div>

    //   {/* Login Card */}
    //   <div className="w-full max-w-[280px] sm:max-w-[320px] bg-white shadow-xl rounded-xl z-10">
    //     <div className="h-2 bg-[#a372e8] rounded-t-md"></div>
    //     <form onSubmit={handleSubmit}>
    //       <div className="px-6 py-6">
    //         <h2 className="text-lg sm:text-xl font-semibold text-gray-800 text-center mb-4">
    //           Register your account
    //         </h2>
    //         <label className="block text-gray-700 text-sm font-medium">
    //           Email
    //         </label>
    //         <input
    //           id="email"
    //           type="email"
    //           placeholder="Email"
    //           className="border w-full h-10 px-3 mt-2 mb-4 text-sm text-gray-800 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
    //           value={data.email}
    //           onChange={handleChange}
    //         />

    //         <label className="block text-gray-700 text-sm font-medium">
    //           Password
    //         </label>
    //         <input
    //           id="password"
    //           type="password"
    //           placeholder="Password"
    //           className="border w-full h-10 px-3 mt-2 text-sm text-gray-800 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
    //           value={data.password}
    //           onChange={handleChange}
    //         />
    //         <div className="flex justify-between items-center mt-4">
    //           <button className="bg-[#4f3279] text-white py-1.5 px-4 text-sm rounded-md hover:bg-[#50376d] font-medium transition">
    //             Register
    //           </button>
    //           {message && <p>{message}</p>}

    //           <Link
    //             to="/login"
    //             className="text-sm text-[#4f3279] hover:text-[#3a0e6e] underline transition"
    //           >
    //             Login
    //           </Link>
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
}
