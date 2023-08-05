import axios from "axios";
import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

export const ApiDataContext = createContext();

export const ApiDataProvider = ({ children }) => {
  const baseUrl = "https://api.jikan.moe/v4";
  const [loading, setLoading] = useState(false);
  const [anime, setAnime] = useState([]);
  const [manga, setManga] = useState([]);
  const [animeCharacters, setAnimeCharacters] = useState([]);
  const [mangaCharacters, setMangaCharacters] = useState([]);
  const [Picture, setPicture] = useState([]);
  const [animeSearch, setAnimeSearch] = useState([]);
  const [mangaSearch, setMangaSearch] = useState([]);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const [animeId, setAnimeId] = useState({});
  const [mangaId, setMangaId] = useState({});


  const getAnime = async () => {
    setLoading(true);
    try {
      const { data: resAnime } = await axios.get(`${baseUrl}/anime`);
      setAnime(resAnime.data);
      console.log(resAnime.data, "AnimePage");
      setLoading(false);
    } catch (err) {
      console.log("AnimePage", err);
      setLoading(false);
    }
  };


  const getAnimeId = async (id) => {
    try {
      const { data: resAnimeId } = await axios.get(`${baseUrl}/anime/${id}`);
      setAnimeId(resAnimeId.data);
      // console.log(resAnimeId.data, "AnimeId");
   
    } catch (err) {
      console.log("AnimeId", err);
    }
  };



  const getManga = async () => {
    setLoading(true);
    try {
      const { data: resManga } = await axios.get(`${baseUrl}/manga`);
      setManga(resManga.data);
      console.log(resManga.data, "MangaPage");
      setLoading(false);
    } catch (err) {
      console.log("MangaPage", err);
      setLoading(false);
    }
  };

  
  const getMangaId = async (id) => {
    try {
      const { data: resMangaId } = await axios.get(`${baseUrl}/manga/${id}`);
      setMangaId(resMangaId.data);
      // console.log(resAnimeId.data, "AnimeId");
   
    } catch (err) {
      console.log("MangaId", err);
    }
  };

  const getCharacterAnime = async (anime) => {
    setLoading(true);
    try {
      const { data: resCharacterAnime } = await axios.get(
        `${baseUrl}/anime/${anime}/characters`
      );
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
      const { data: resCharacterManga } = await axios.get(
        `${baseUrl}/manga/${manga}/characters`
      );
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
      const { data: resPicture } = await axios.get(
        `${baseUrl}/characters/${id}/pictures`
      );
      setPicture(resPicture.data);
      console.log(resPicture.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };



  // const getAnimeAndMangaSearch = async (animeSearch, mangaSearch) => {
  //   setLoading(true);
  //   try {
  //     const { data: resAnimeSearch } = await axios.get(
  //       `${baseUrl}/anime?q=${animeSearch}`
  //     );
  //     const { data: resMangaSearch } = await axios.get(
  //       `${baseUrl}/manga?q=${mangaSearch}`
  //     );
  //     setAnimeSearch(resAnimeSearch.data);
  //     setMangaSearch(resMangaSearch.data);
  //     console.log(resAnimeSearch.data, "AnimeSearch");
  //     console.log(resMangaSearch.data, "MangaSearch");
  //     setLoading(false);
  //   } catch (err) {
  //     console.log("AnimePage", err);
  //     setLoading(false);
  //   }
  // };

  const getAnimeSearch = async (animeSearch) => {
    setLoading(true);
    try {
      const { data: resAnimeSearch } = await axios.get(
        `${baseUrl}/anime?q=${animeSearch}`
      );
      // const { data: resMangaSearch } = await axios.get(
      //   `${baseUrl}/manga?q=${mangaSearch}`
      // );
      setAnimeSearch(resAnimeSearch.data);
      // setMangaSearch(resMangaSearch.data);
      console.log(resAnimeSearch.data, "AnimeSearch");
      // console.log(resMangaSearch.data, "MangaSearch");
      setLoading(false);
    } catch (err) {
      console.log("AnimePage", err);
      setLoading(false);
    }
  };


  const getMangaSearch = async (mangaSearch) => {
    setLoading(true);
    try {
      // const { data: resAnimeSearch } = await axios.get(
      //   `${baseUrl}/anime?q=${animeSearch}`
      // );
      const { data: resMangaSearch } = await axios.get(
        `${baseUrl}/manga?q=${mangaSearch}`
      );
      // setAnimeSearch(resAnimeSearch.data);
      setMangaSearch(resMangaSearch.data);
      // console.log(resAnimeSearch.data, "AnimeSearch");
      console.log(resMangaSearch.data, "MangaSearch");
      setLoading(false);
    } catch (err) {
      console.log("AnimePage", err);
      setLoading(false);
    }
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    getAnimeSearch(search);
    getMangaSearch(search);
    setLoading(true);
    if (search) {
      router.push({
        pathname: '/Search',
        query: {search},
      })
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAnime();
    getManga();
  }, []);

  useEffect(() => {
    getAnimeSearch();
    getMangaSearch();
  }, []);

  return (
    <ApiDataContext.Provider
      value={{
        loading,
        anime,
        manga,
        getCharacterAnime,
        animeCharacters,
        getCharacterManga,
        mangaCharacters,
        getPicture,
        Picture,
        handleChange,
        handleSubmit,
        search,
        animeSearch,
        mangaSearch,
        getAnimeId,
        animeId,
        getMangaId,
        mangaId
      }}
    >
      {children}
    </ApiDataContext.Provider>
  );
};
