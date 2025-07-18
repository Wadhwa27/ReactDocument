import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

// import { getActiveUser } from "./LocalStorage";
import HomePage from "./components/HomePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/" element={<PrivateRoute />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
// const PrivateRoute = () => {
//   const activeUser = getActiveUser();
//   if (activeUser == null) {
//     return <Navigate to="/login" />;
//   }
//   return <Outlet />;
// };
export default App;
