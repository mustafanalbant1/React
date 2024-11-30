// const API_KEY = "";
// const BASE_URL = "http://www.omdbapi.com/";

// // FUNGSI UNTUK MENCARI FILM BERDASARKAN JUDUL

// export const searchMovies = async (query: string) => {
//   const response = await fetch(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);

//   const data = await response.json();

//   return data.Search;
// };

// // fungsi untuk mendapatkan detail film berdasarkan ID

// export const getMovieDetails = async (id: string) => {
//   const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);

//   const data = await response.json();

//   return data;
// };

import axios from "axios";

const API_KEY = "";
const BASE_URL = "http://www.omdbapi.com/";

// Film arama fonksiyonu
export const searchMovies = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        s: query,
        apikey: API_KEY,
      },
    });

    return response.data.Search; // Arama sonuçlarını döndürüyoruz
  } catch (error) {
    console.error("Error fetching movies:", error);
    return []; // Hata durumunda boş bir dizi döndürür
  }
};

// Film detaylarını getirme fonksiyonu
export const getMovieDetails = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        i: id,
        apikey: API_KEY,
      },
    });

    return response.data; // Film detaylarını döndürüyoruz
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null; // Hata durumunda null döndürüyoruz
  }
};
