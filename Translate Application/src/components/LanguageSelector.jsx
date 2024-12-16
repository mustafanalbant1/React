import { useMemo } from "react";
import { useSelector } from "react-redux";
import ReactSelect from "react-select";
import { BiTransferAlt } from "react-icons/bi";

const LanguageSelect = ({
  setSourceLang,
  setTargetLang,
  sourceLang,
  targetLang,
  handleSwap,
}) => {
  const { isLoading, langs } = useSelector((store) => store.lang);

  const formatted = useMemo(
    () =>
      langs.map((i) => ({
        label: i.name,
        value: i.code,
      })),
    [langs]
  );

  return (
    <div className="flex gap-4 items-center">
      <ReactSelect
        value={sourceLang}
        onChange={(e) => setSourceLang(e)}
        isLoading={isLoading}
        isDisabled={isLoading}
        options={formatted}
        className="flex-1"
        styles={{
          control: (base) => ({
            ...base,
            borderColor: "#D1D5DB",
            borderRadius: "8px",
            boxShadow: "none",
            cursor: "pointer",
          }),
        }}
      />

      <button
        onClick={handleSwap}
        className="bg-indigo-500 text-white p-3 rounded-full hover:bg-indigo-600 transition"
      >
        <BiTransferAlt size={24} />
      </button>

      <ReactSelect
        value={targetLang}
        onChange={(e) => setTargetLang(e)}
        options={formatted}
        isLoading={isLoading}
        isDisabled={isLoading}
        className="flex-1"
        styles={{
          control: (base) => ({
            ...base,
            borderColor: "#D1D5DB",
            borderRadius: "8px",
            boxShadow: "none",
            cursor: "pointer",
          }),
        }}
      />
    </div>
  );
};

export default LanguageSelect;
