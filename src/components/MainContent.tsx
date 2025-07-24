import { useSelector } from "react-redux";
import { type RootState } from "../app/store";
export default function MainContext() {
  const { Topics, selectedTopicId } = useSelector(
    (state: RootState) => state.topics
  );
  const topic = Topics.find((topic) => topic.id === selectedTopicId);
  if (!topic) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-600">
          Select a topic to view content
        </h2>
      </div>
    );
  }
  return (
    <div className="p-6 flex flex-col gap-6">
      <h1 className="text-3xl font-bold text-[#3a0e6e]">{topic.title}</h1>

      <div className="grid grid-cols-1 gap-4">
        <div className="bg-[#2c3e50]/70 text-white p-4 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Details</h3>
          <p>{topic.description}</p>
        </div>

        <div className="bg-[#2c3e50]/70 text-white p-4 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Code</h3>
          <pre className="bg-black/20 p-2 rounded">{topic.code}</pre>
        </div>

        <div className="bg-[#2c3e50]/70 text-white p-4 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Conclusion</h3>
          <p>{topic.conclusion}</p>
        </div>
      </div>
    </div>
  );
}
