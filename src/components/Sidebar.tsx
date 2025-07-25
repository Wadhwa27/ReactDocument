import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "../app/store";
import {
  selectTopic,
  toggleTopicProgress,
} from "../features/Slice/topicsSlice";
import { useState, useEffect } from "react";
import { type NavbarProp } from "./Navbar";

export const Sidebar: React.FC<NavbarProp> = ({ logout }) => {
  const dispatch = useDispatch();

  const topics = useSelector((state: RootState) => state.topics.Topics);
  const progress = useSelector((state: RootState) => state.topics.userProgress);
  const selected = useSelector(
    (state: RootState) => state.topics.selectedTopicId
  );
  const [isDialog, setIsDialog] = useState(false);
  function handleClick(id: string) {
    dispatch(selectTopic(id));
  }

  useEffect(() => {
    const isCompleted = topics.every((topic) => progress[topic.id]);
    if (isCompleted && topics.length > 0) {
      setIsDialog(true);
    }
  }, [progress, topics]);
  return (
    <>
      <div className="min-w-[250px] h-full overflow-y-auto bg-[#2d3d48] text-white p-4">
        <h2 className="text-xl font-bold mb-4">Topics</h2>
        <ul className="space-y-3">
          {topics.map((topic) => (
            <li
              key={topic.id}
              onClick={() => handleClick(topic.id)}
              className={`cursor-pointer p-2 rounded-lg ${
                selected === topic.id ? "bg-white/10" : ""
              }`}
            >
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={progress[topic.id] || false}
                  onChange={(event) => {
                    event.stopPropagation();
                    dispatch(toggleTopicProgress(topic.id));
                  }}
                  className="w-4 h-4 accent-cyan-300"
                />
                {topic.title}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {isDialog && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div
            className="mx-auto w-full max-w-md md:max-w-lg 
                    text-center space-y-6 p-6 md:p-10 
                    rounded-2xl bg-[#2c3e50]/80 
                    shadow-2xl backdrop-blur-md border border-white/10 text-white"
          >
            <h2 className="text-2xl font-bold">🎉 All Topics Completed!</h2>
            <p className="text-gray-300">
              You've successfully completed all the topics. Great job!
            </p>

            <div className="flex justify-center gap-4 pt-4">
              <button
                onClick={() => setIsDialog(false)}
                className="px-4 py-2 bg-gradient-to-r from-cyan-300 to-blue-400 text-[#3a0e6e] font-semibold rounded-full hover:from-blue-400 hover:to-cyan-300 transition-all duration-300 hover:scale-105"
              >
                Close
              </button>

              <button
                onClick={logout}
                className="px-4 py-2 bg-gradient-to-r from-cyan-300 to-blue-400 text-[#3a0e6e] font-semibold rounded-full hover:from-blue-400 hover:to-cyan-300 transition-all duration-300 hover:scale-105"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
