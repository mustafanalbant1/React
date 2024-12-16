import { useSelector } from "react-redux";

const TextContainer = ({ text, setText }) => {
  const { answer } = useSelector((store) => store.translate);

  return (
    <div className="flex gap-6 mt-8 flex-col md:flex-row">
      <div className="flex-1">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-48 text-xl rounded-lg p-4 border-2 border-gray-300 focus:ring-2 focus:ring-indigo-500 transition"
        ></textarea>
      </div>
      <div className="flex-1">
        <textarea
          value={answer}
          disabled
          className="w-full h-48 text-xl rounded-lg p-4 border-2 border-gray-300 text-gray-500 bg-gray-100"
        ></textarea>
      </div>
    </div>
  );
};

export default TextContainer;
