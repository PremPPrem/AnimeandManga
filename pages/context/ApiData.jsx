import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ApiDataContext = createContext();

export const ApiDataProvider = ({ children }) => {
  const baseUrl = "https://api.jikan.moe/v4";
  const [loading, setLoading] = useState(false);
  const [anime, setAnime] = useState([]);
  const [manga, setManga] = useState([]);

  const getAnimeAndManga = async () => {
    setLoading(true);
    try {
      const { data: resAnime } = await axios.get(`${baseUrl}/anime`);
      const { data: resManga } = await axios.get(`${baseUrl}/manga`);
      setAnime(resAnime.data);
      setManga(resManga.data);
      console.log(resAnime.data, "AnimePage");
      console.log(resManga.data, "MangaPage");
      setLoading(false);
    } catch (err) {
      console.log("AnimePage", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAnimeAndManga();
  }, []);


  return (
    <ApiDataContext.Provider value={{loading,anime,manga}}>{children}</ApiDataContext.Provider>
  );
};
