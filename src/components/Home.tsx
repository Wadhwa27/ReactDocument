import { useNavigate } from "react-router-dom";
import MainContent from "./MainContent";
import { Navbar } from "./Navbar";
import { deleteActiveUser } from "../util/LocalStorage";
import { Sidebar } from "./Sidebar";
export default function Home() {
  const navigate = useNavigate();
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
    </>
  );
}
