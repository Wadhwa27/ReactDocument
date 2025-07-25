import { useSelector } from "react-redux";
import { type RootState } from "../app/store";
import { FaReact } from "react-icons/fa";

export type NavbarProp = {
  logout: () => void;
};

export const Navbar: React.FC<NavbarProp> = ({ logout }) => {
  const user = useSelector((state: RootState) => state.user.activeUser);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-[#2b3a42] to-[#334353] shadow-xl backdrop-blur-md sticky top-0 z-50">
      <div className="flex items-center gap-3 text-white font-bold text-2xl tracking-wide">
        <FaReact size={32} className="text-cyan-300 animate-spin-slow" />
        <span>React Topics</span>
      </div>

      <div className="flex items-center gap-5">
        {/* <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-xl border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-300 transition-all"
        /> */}

        <div className="w-10 h-10 rounded-full bg-white text-[#334353] flex items-center justify-center font-bold shadow-inner shadow-black/20 hover:scale-105 transition-transform duration-200">
          {user?.email?.[0]?.toUpperCase() || "U"}
        </div>

        <button
          onClick={logout}
          className="px-5 py-2 rounded-full bg-white/90 text-[#334353] font-semibold shadow-md hover:bg-white hover:shadow-xl transition-all duration-300"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};
