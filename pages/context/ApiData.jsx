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
  const [animeTop, setAnimeTop] = useState([]);
  const [mangaTop, setMangaTop] = useState([]);
  const [coming, setComing] = useState([]);
  const [airing, setAiring] = useState([]);
  const [search, setSearch] = useState("");
  const router = useRouter();
  const [animeId, setAnimeId] = useState({});
  const [mangaId, setMangaId] = useState({});
  const [toggleSearch, setToggleSearch] = useState(false);

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
      // console.log(resCharacterAnime.data, "AnimeCharacter");
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
      // console.log(resCharacterManga.data, "MangaCharacter");
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
      // console.log(resPicture.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const getAnimeSearch = async (animeSearch) => {
    setLoading(true);
    try {
      const { data: resAnimeSearch } = await axios.get(
        `${baseUrl}/anime?q=${animeSearch}`
      );
      setAnimeSearch(resAnimeSearch.data);
      // console.log(resAnimeSearch.data, "AnimeSearch");
      setLoading(false);
    } catch (err) {
      console.log("AnimeSearch", err);
      setLoading(false);
    }
  };

  const getMangaSearch = async (mangaSearch) => {
    setLoading(true);
    try {
      const { data: resMangaSearch } = await axios.get(
        `${baseUrl}/manga?q=${mangaSearch}`
      );
      setMangaSearch(resMangaSearch.data);
      // console.log(resMangaSearch.data, "MangaSearch");
      setLoading(false);
    } catch (err) {
      console.log("MangaSearch", err);
      setLoading(false);
    }
  };

  const getAnimeTop = async () => {
    setLoading(true);
    try {
      const { data: resAnimeTop } = await axios.get(`${baseUrl}/top/anime`);
      setAnimeTop(resAnimeTop.data);
      console.log(resAnimeTop.data, "AnimeTop");
      setLoading(false);
    } catch (err) {
      console.log("AnimeTop", err);
      setLoading(false);
    }
  };

  const getMangaTop = async () => {
    setLoading(true);
    try {
      const { data: resMangaTop } = await axios.get(`${baseUrl}/top/manga`);
      setMangaTop(resMangaTop.data);
      console.log(resMangaTop.data, "MangaTop");
      setLoading(false);
    } catch (err) {
      console.log("MangaTop", err);
      setLoading(false);
    }
  };

  const getComing = async () => {
    setLoading(true);
    try {
      const { data: resComing } = await axios.get(`${baseUrl}/top/anime?filter=upcoming`);
      setComing(resComing.data);
      console.log(resComing.data, "Coming");
      setLoading(false);
    } catch (err) {
      console.log("Coming", err);
      setLoading(false);
    }
  };


  const getAiring = async () => {
    setLoading(true);
    try {
      const { data: resAiring } = await axios.get(`${baseUrl}/seasons/now`);
      setAiring(resAiring.data);
      console.log(resAiring.data, "Airing");
      setLoading(false);
    } catch (err) {
      console.log("Airing", err);
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
        pathname: "/Search",
        query: { search },
      });
    }
    setSearch("")
    setToggleSearch(false)
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
        mangaId,
        animeTop,
        mangaTop,
        coming,
        getComing,
        getAnimeTop,
        getMangaTop,
        toggleSearch,
        setToggleSearch,
        getAiring,
        airing
      }}
    >
      {children}
    </ApiDataContext.Provider>
  );
};
