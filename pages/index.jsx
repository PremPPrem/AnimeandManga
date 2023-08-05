import React from "react";
import Coming from "./components/AnimeAndManga/Coming";
import Head from "next/head";
import HeaderHome from "./components/HeaderHome";
import TopAnime from "./components/AnimeAndManga/TopAnime";
import TopManga from "./components/AnimeAndManga/TopManga";
import Airing from "./components/AnimeAndManga/Airing";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <div className="min-h-screen mb-20 sm:mb-12">
        <HeaderHome />
        <div className="text-[3rem] sm:text-[2.125rem] text-amber-custom font-extrabold ml-8 sm:text-center sm:ml-0 mt-8">
        <Link
            href="/TopAnimePage"
            className=" hover:text-white hover:before:content-['Click_To'] hover:after:content-['Page']"
          >
            {" "}
            Top Anime{" "}
          </Link>
        </div>
        <div className=" border-b-2 mx-4 mt-2 mb-8"></div>
        <TopAnime />

        <div className="text-[3rem] sm:text-[2.125rem] text-amber-custom font-extrabold ml-8 sm:text-center sm:ml-0 mt-20 sm:mt-10">
          <Link
            href="/AiringPage"
            className=" hover:text-white hover:before:content-['Click_To'] hover:after:content-['Page']"
          >
            {" "}
            Airing This Season{" "}
          </Link>
        </div>
        <div className=" border-b-2 mx-4 mt-2 mb-8"></div>
        <Airing />

        <div className="text-[3rem] sm:text-[2.125rem] text-amber-custom font-extrabold ml-8 sm:text-center sm:ml-0 mt-20 sm:mt-10">
        <Link
            href="/ComingPage"
            className=" hover:text-white hover:before:content-['Click_To'] hover:after:content-['Page']"
          >
            {" "}
            Coming Soon{" "}
          </Link>
        </div>
        <div className=" border-b-2 mx-4 mt-2 mb-8"></div>
        <Coming />

        <div className="text-[3rem] sm:text-[2.125rem] text-amber-custom font-extrabold ml-8 sm:text-center sm:ml-0 mt-20 sm:mt-10">
        <Link
            href="/TopMangaPage"
            className=" hover:text-white hover:before:content-['Click_To'] hover:after:content-['Page']"
          >
            {" "}
            Top Manga{" "}
          </Link>
        </div>
        <div className=" border-b-2 mx-4 mt-2 mb-8"></div>
        <TopManga />
      </div>
    </>
  );
}
