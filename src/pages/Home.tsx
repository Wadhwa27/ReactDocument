import reactLogo from "./assets/react.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteActiveUser,
  getActiveUser,
  type userData,
} from "../LocalStorage";
export default function Home() {
  const [activeUser, setActiveUser] = useState<userData>();
  const navigate = useNavigate();
  useEffect(() => {
    const data = getActiveUser();
    if (data == null) {
      navigate("/login");
    }
    setActiveUser(data);
  }, []);
  function handleLogOut() {
    deleteActiveUser();
    navigate("/login");
  }

  return (
    <>
      <div>
        <h1 className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-800 via-purple-900 to-indigo-900 text-white">
          Welcome {activeUser?.email}
        </h1>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <button onClick={handleLogOut}> Log Out</button>
      </div>
    </>
  );
}
