import React, { useContext, useEffect } from "react";
import MangaItem from "../../Item/MangaItem";
import MangaCharacter from "../../Character/MangaCharacter";
import { useRouter } from "next/router";
import { ApiDataContext } from "@/pages/context/ApiData";


// export const getStaticPaths = async () => {
//   const res = await fetch("https://api.jikan.moe/v4/manga");
//   const resData = await res.json();
//   const manga = await resData.data;
//   const paths = manga.map((data) => `/components/AnimeAndManga/MangaPage/${data.mal_id}`);

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async ({ params }) => {
//   const res = await axios.get(
//     `https://api.jikan.moe/v4/manga/${params.mal_id}`
//   );
//   const manga = await res.data.data;
//   return {
//     props: { manga },
//   };
// };

export default function MangaDetail() {
  const {getMangaId,mangaId } = useContext(ApiDataContext);
  const router = useRouter();
  const { mal_id } = router.query;


  useEffect(() => {
    getMangaId(mal_id);
  }, [mal_id]);

  return (
    <div>
      <MangaItem
        title={mangaId.title}
        type={mangaId.type}
        image={mangaId.images?.jpg.large_image_url}
        english={mangaId.title_english}
        japanese={mangaId.title_japanese}
        volumes={mangaId.volumes}
        chapters={mangaId.chapters}
        score={mangaId.score}
        published={mangaId.published?.string}
        status={mangaId.status}
        synopsis={mangaId.synopsis}
      />
      <div className="text-[2.125rem] text-amber-custom font-extrabold ml-4 sm:text-center">
        Character
      </div>
       <div className=" border-b-2 mx-4 mt-2"></div>
      <MangaCharacter />
    </div>
  );
}
