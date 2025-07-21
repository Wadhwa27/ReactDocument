import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./components/Home";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";

// import { getActiveUser } from "./LocalStorage";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/" element={<PrivateRoute />} /> */}
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
