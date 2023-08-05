import React, { useContext, useEffect } from "react";
import Loading from "../../Loading";
import CharacterItem from "../CharacterItem";
import { ApiDataContext } from "@/pages/context/ApiData";
import { useRouter } from "next/router";

export default function index() {
  const { loading, getCharacterAnime, animeCharacters } =
    useContext(ApiDataContext);
  const router = useRouter();
  const { mal_id } = router.query;

  useEffect(() => {
    getCharacterAnime(mal_id);
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center flex-wrap my-[2rem]">
        {loading ? (
          <Loading />
        ) : animeCharacters.length === 0 ? (
          <h1 className="text-[3rem] text-center text-amber-custom font-extrabold sm:text-[2rem] my-[2rem]">
            Characters not found!
          </h1>
        ) : (
          animeCharacters.length &&
          animeCharacters.map((data) => {
            return (
              <CharacterItem
                key={data.character.mal_id}
                link={`/components/Character/AnimeCharacter/${data.character.mal_id}`}
                image={data.character?.images.jpg.image_url}
                name={data.character?.name}
                role={data.role}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
