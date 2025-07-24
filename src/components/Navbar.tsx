import { useSelector } from "react-redux";
import { type RootState } from "../app/store";
import { FaReact } from "react-icons/fa";

type NavbarProp = {
  logout: () => void;
};
export const Navbar: React.FC<NavbarProp> = ({ logout }) => {
  const user = useSelector((state: RootState) => state.user.activeUser);
  console.log("user is this ", user);
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-cyan-300 to-blue-400">
      <div className="flex items-center gap-2 text-[#3a0e6e] font-bold text-lg">
        <FaReact size={28} />
        <span>React Topics</span>
      </div>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 rounded-md border"
        />
        <div className="w-10 -10 rounded-full bg-white text-[#3a0e6e] flex items-center justify-center font-semibold">
          {user?.email?.[0]?.toUpperCase() || "U"}
        </div>
        <div
          className="w-20 -10 rounded-full bg-white text-[#3a0e6e] flex items-center justify-center font-semibold"
          onClick={logout}
        >
          Logout
        </div>
      </div>
    </nav>
  );
};
