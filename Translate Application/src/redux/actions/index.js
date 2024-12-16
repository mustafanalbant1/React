import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../server/index";

export const getLangs = createAsyncThunk("lang/getLangs", async () => {
  const res = await api.get("/getLanguages");

  return res.data.data.languages;
});

export const translateText = createAsyncThunk(
  "translate/translateText",
  async (params) => {
    const data = new FormData();
    data.append("source_language", params.sourceLang.value);
    data.append("target_language", params.targetLang.value);
    data.append("text", params.text);

    const res = await api.post("/translate", data);
    return res.data.data.translatedText;
  }
);
