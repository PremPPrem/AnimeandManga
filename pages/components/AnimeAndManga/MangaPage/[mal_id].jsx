import axios from "axios";
import React from "react";
import MangaItem from "../../Item/MangaItem";
import MangaCharacter from "../../Character/MangaCharacter";


export const getStaticPaths = async () => {
  const res = await fetch("https://api.jikan.moe/v4/manga");
  const resData = await res.json();
  const manga = await resData.data;
  const paths = manga.map((data) => `/components/AnimeAndManga/MangaPage/${data.mal_id}`);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await axios.get(
    `https://api.jikan.moe/v4/manga/${params.mal_id}`
  );
  const manga = await res.data.data;
  return {
    props: { manga },
  };
};

export default function MangaDetail({ manga }) {
  return (
    <div>
      <MangaItem
        title={manga.title}
        type={manga.type}
        image={manga.images?.jpg.large_image_url}
        english={manga.title_english}
        japanese={manga.title_japanese}
        volumes={manga.volumes}
        chapters={manga.chapters}
        score={manga.score}
        published={manga.published?.string}
        status={manga.status}
        synopsis={manga.synopsis}
      />
      <div className="text-[2.125rem] text-amber-custom font-extrabold ml-4 sm:text-center">
        Character
      </div>
       <div className=" border-b-2 mx-4 mt-2"></div>
      <MangaCharacter />
    </div>
  );
}
