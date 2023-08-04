import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ApiDataContext = createContext();

export const ApiDataProvider = ({ children }) => {
  const baseUrl = "https://api.jikan.moe/v4";
  const [loading, setLoading] = useState(false);
  const [anime, setAnime] = useState([]);
  const [manga, setManga] = useState([]);
  const [animeCharacters, setAnimeCharacters] = useState([])
  const [mangaCharacters, setMangaCharacters] = useState([])
  const [Picture, setPicture] = useState([])

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

  const getCharacterAnime = async (anime) => {
    setLoading(true);
    try {
      const { data: resCharacterAnime } = await axios.get(`${baseUrl}/anime/${anime}/characters`);
      setAnimeCharacters(resCharacterAnime.data);
      console.log(resCharacterAnime.data, "AnimeCharacter");
      setLoading(false);
    } catch (err) {
      console.log("AnimeCharacter", err);
      setLoading(false);
    }
  };

  const getCharacterManga = async (manga) => {
    setLoading(true);
    try {
      const { data: resCharacterManga } = await axios.get(`${baseUrl}/manga/${manga}/characters`);
      setMangaCharacters(resCharacterManga.data);
      console.log(resCharacterManga.data, "MangaCharacter");
      setLoading(false);
    } catch (err) {
      console.log("MangaCharacter", err);
      setLoading(false);
    }
  };

  const getPicture = async (id) => {
    setLoading(true);
   try {
    const { data: resPicture} = await axios.get(`${baseUrl}/characters/${id}/pictures`);
    setPicture(resPicture.data);
    console.log(resPicture.data);
    setLoading(false);

  } catch (err) {
    console.log(err);
    setLoading(false);

  }
}

  useEffect(() => {
    getAnimeAndManga();
  }, []);


  return (
    <ApiDataContext.Provider value={{loading,anime,manga,getCharacterAnime,animeCharacters,getCharacterManga,mangaCharacters,getPicture,Picture}}>{children}</ApiDataContext.Provider>
  );
};
