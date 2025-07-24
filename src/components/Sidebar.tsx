import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "../app/store";
import {
  selectTopic,
  toggleTopicProgress,
} from "../features/Slice/topicsSlice";

export default function Sidebar() {
  const dispatch = useDispatch();
  // stored in a store
  const topics = useSelector((state: RootState) => state.topics.Topics);
  const progress = useSelector((state: RootState) => state.topics.userProgress);
  const selected = useSelector(
    (state: RootState) => state.topics.selectedTopicId
  );
  function handleClick(id: string) {
    dispatch(selectTopic(id));
  }

  return (
    <div className="min-w-[250px] h-full overflow-y-auto bg-gradient-to-b from-[#2c3e50]/70 via-[#23272f]/80 to-[#365767]/70 text-[#3a0e6e] p-4">
      <h2 className="text-xl font-bold mb-4"> Topics </h2>
      <ul className="space-y-3">
        {topics.map((topic) => (
          <li
            key={topic.id}
            onClick={() => handleClick(topic.id)}
            className={`cursor-pointer p-2 rounded-lg ${
              selected === topic.id ? "bg-[#3a0e6e]/10" : ""
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
              />
              {topic.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
