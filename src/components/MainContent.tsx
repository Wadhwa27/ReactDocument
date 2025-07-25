import { useSelector } from "react-redux";
import { type RootState } from "../app/store";
import { FaReact } from "react-icons/fa";

export default function MainContext() {
  const { Topics, selectedTopicId } = useSelector(
    (state: RootState) => state.topics
  );
  const topic = Topics.find((topic) => topic.id === selectedTopicId);

  if (!topic) {
    return (
      <div
        className="p-10 flex flex-col items-center justify-center gap-8 
                 bg-[#23272f] bg-gradient-to-br from-[#1b232a]/80 
                 via-[#1f2b35]/90 to-[#1b232a]/80 
                 bg-[length:300%_300%] animate-gradient-bg h-full"
      >
        <FaReact className="text-7xl text-cyan-300 animate-spin-slow" />
        <h2 className="text-3xl font-bold text-white text-center">
          Select a topic to view content
        </h2>
      </div>
    );
  }

  return (
    <div
      className="p-6 flex flex-col gap-6 bg-[#23272f]
           bg-gradient-to-br from-[#1b232a]/80 via-[#1f2b35]/90 to-[#1b232a]/80 
           bg-[length:300%_300%] animate-gradient-bg h-full"
    >
      <h1 className="text-3xl font-bold text-white">{topic.title}</h1>

      <div className="grid grid-cols-1 gap-4">
        <div className="bg-[#2d3d48] text-white p-4 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Details</h3>
          <p>{topic.description}</p>
        </div>

        <div className="bg-[#2d3d48] text-white p-4 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Code</h3>
          <pre className="bg-black/20 p-2 rounded">{topic.code}</pre>
        </div>

        <div className="bg-[#2d3d48] text-white p-4 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Conclusion</h3>
          <p>{topic.conclusion}</p>
        </div>
      </div>
    </div>
  );
}
