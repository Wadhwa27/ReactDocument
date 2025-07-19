import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { type userData, addNewUser, isNewUserExist } from "../LocalStorage";
import Dialog, { type DialogHandle } from "../components/Dialog";

export default function SignUp() {
  const [data, setData] = useState<userData>({ email: "", password: "" });
  const [message, setMessage] = useState<string>("");
  const dialog = useRef<DialogHandle>(null);

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
      dialog.current?.open();
      return;
    }
    if (data.password.trim().length < 6) {
      setMessage("Please enter a valid password of minimum length 6");
      dialog.current?.open();
      return;
    }
    if (!data.email.includes("@")) {
      setMessage("Please enter a valid email");
      dialog.current?.open();
      return;
    }
    if (isNewUserExist(data.email)) {
      setMessage("User already exists");
      dialog.current?.open();
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
                className="bg-gradient-to-r from-cyan-300 to-blue-400  text-[#3a0e6e] py-2 px-6 text-sm rounded-full hover:bg-[#50376d] 
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
                className="text-sm text-white hover:text-cyan-400 underline transition text-center sm:text-left"
              >
                Already have an account? Login
              </Link>
            </div>
          </div>
        </form>
        <Dialog message={message} ref={dialog} />
      </div>
    </div>
  );
}
