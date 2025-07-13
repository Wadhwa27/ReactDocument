// import reactLogo from "./assets/react.svg";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;

{
  /* <div>
        <h1 className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 via-purple-900 to-indigo-900 text-white">
          React Documentaion{" "}
        </h1>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */
}
