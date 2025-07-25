import reactLogo from "../assets/react.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainContent from "./MainContent";
import { Navbar } from "./Navbar";
import {
  deleteActiveUser,
  getActiveUser,
  type userData,
} from "../util/LocalStorage";
import { Sidebar } from "./Sidebar";
export default function Home() {
  // const [activeUser, setActiveUser] = useState<userData>();
  const navigate = useNavigate();
  // useEffect(() => {
  //   const data = getActiveUser();
  //   if (data != null) {
  //     setActiveUser(data);
  //   }
  // }, []);
  function handleLogOut() {
    deleteActiveUser();
    navigate("/");
  }

  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar logout={handleLogOut} />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar logout={handleLogOut} />
          <div className="flex-1 overflow-y-auto bg-gradient-to-b from-white to-blue-100">
            <MainContent />
          </div>
        </div>
      </div>
      {/* <div
        className="relative min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-[#a372e8] via-[#65bad6] to-[#3a0e6e] 
      bg-[length:200%_200%] animate-gradient-bg text-white overflow-hidden px-4"
      >
        <h1>Welcome {activeUser?.email}</h1>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <button onClick={handleLogOut}> Log Out</button>
      </div> */}
    </>
  );
}
