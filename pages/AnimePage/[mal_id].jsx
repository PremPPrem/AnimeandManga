import axios from "axios";
import React from "react";
import AnimeItem from "../components/Item/AnimeItem";

export const getStaticPaths = async () => {
  const res = await fetch("https://api.jikan.moe/v4/anime");
  const resData = await res.json();
  const anime = await resData.data;
  const paths = anime.map((data) => `/AnimePage/${data.mal_id}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await axios.get(
    `https://api.jikan.moe/v4/anime/${params.mal_id}`
  );
  const anime = await res.data.data;
  return {
    props: { anime },
  };
};

export default function AnimeDetail({ anime }) {
  return (
    <div>
      <AnimeItem
        title={anime.title}
        trailer={anime.trailer?.embed_url}
        image={anime.images?.jpg.large_image_url}
        english={anime.title_english}
        japanese={anime.title_japanese}
        rating={anime.rating}
        score={anime.score}
        year={anime.year}
        aired={anime.aired?.string}
        broadcast={anime.broadcast?.string}
        duration={anime.duration}
        episodes={anime.episodes}
        season={anime.season}
        source={anime.source}
        type={anime.type}
        synopsis={anime.synopsis}
      />
    </div>
  );
}
