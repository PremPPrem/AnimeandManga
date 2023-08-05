import React, { useContext, useEffect, useState } from "react";
import AnimeCharacter from "../../Character/AnimeCharacter";
import AnimeItem from "../../Item/AnimeItem";
import { useRouter } from "next/router";
import { ApiDataContext } from "@/pages/context/ApiData";

// export const getStaticPaths = async () => {
//   const res = await fetch ("https://api.jikan.moe/v4/anime");
//   const resData = await res.json();
//   const anime = await resData.data;
//   const paths = anime.map((data) => `/components/AnimeAndManga/AnimePage/${data.mal_id}`);

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const res = await axios.get(
//     `https://api.jikan.moe/v4/anime/${params.mal_id}`
//   );
//   const anime = await res.data.data;
//   return {
//     props: { anime },
//   };
// };

export default function AnimeDetail() {
  const {getAnimeId,animeId } = useContext(ApiDataContext);
  const router = useRouter();
  const { mal_id } = router.query;


  useEffect(() => {
    getAnimeId(mal_id);
  }, [mal_id]);



  return (
    <div>
     <AnimeItem
        title={animeId.title}
        trailer={animeId.trailer?.embed_url}
        image={animeId.images?.jpg.large_image_url}
        english={animeId.title_english}
        japanese={animeId.title_japanese}
        rating={animeId.rating}
        score={animeId.score}
        year={animeId.year}
        aired={animeId.aired?.string}
        broadcast={animeId.broadcast?.string}
        duration={animeId.duration}
        episodes={animeId.episodes}
        season={animeId.season}
        source={animeId.source}
        type={animeId.type}
        synopsis={animeId.synopsis}
      />
      <div className="text-[2.125rem] text-amber-custom font-extrabold ml-4 sm:text-center">
        Character
      </div>
      <div className=" border-b-2 mx-4 mt-2"></div>
      <AnimeCharacter />
    </div>
  );
}
