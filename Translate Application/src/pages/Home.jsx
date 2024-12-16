import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getLangs, translateText } from "../redux/actions";
import LanguageSelect from "../components/LanguageSelector";
import TextContainer from "../components/TextContainer";
import image from "../assets/2.png"; // Import the image correctly

const Home = () => {
  const { answer } = useSelector((store) => store.translate);
  const dispatch = useDispatch();
  const [sourceLang, setSourceLang] = useState("tr");
  const [targetLang, setTargetLang] = useState("en");
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(getLangs());
  }, []);

  useEffect(() => {
    if (text) {
      dispatch(translateText({ sourceLang, targetLang, text }));
    }
  }, [targetLang]);

  const handleTranslate = () => {
    dispatch(translateText({ sourceLang, targetLang, text }));
  };

  const handleSwap = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setText(answer);
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center p-5"
      style={{
        backgroundImage: `url(${image})`, // Correct way to reference the image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-8 space-y-6">
        <LanguageSelect
          setSourceLang={setSourceLang}
          sourceLang={sourceLang}
          setTargetLang={setTargetLang}
          targetLang={targetLang}
          handleSwap={handleSwap}
        />

        <TextContainer setText={setText} text={text} />

        <button
          onClick={handleTranslate}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition duration-300 ease-in-out disabled:opacity-50"
        >
          Translate
        </button>
      </div>
    </div>
  );
};

export default Home;
