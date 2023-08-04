import axios from "axios";
import React from "react";
import MangaItem from "../components/Item/MangaItem";


export const getStaticPaths = async () => {
  const res = await fetch("https://api.jikan.moe/v4/manga");
  const resData = await res.json();
  const manga = await resData.data;
  const paths = manga.map((data) => `/MangaPage/${data.mal_id}`);

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
  <h1 className="text-amber-custom mt-20 text-center">{manga.mal_id}</h1>
  <MangaItem />
    </div>
  );
}
