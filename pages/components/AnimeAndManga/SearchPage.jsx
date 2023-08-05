import { ApiDataContext } from '@/pages/context/ApiData';
import React, { useContext } from 'react'
import Loading from '../Loading';
import Card from '../Card';
import Link from 'next/link';
import { data } from 'autoprefixer';

export default function SearchPage() {
    const { loading,animeSearch,mangaSearch } = useContext(ApiDataContext);
    return (
      <div className=' flex flex-wrap justify-center items-center my-8'>
          {loading ?  <Loading /> : animeSearch.length === 0 || mangaSearch.length === 0 ?       <h1 className="text-[3rem] text-center text-amber-500 font-extrabold sm:text-[2rem] my-[2rem]">
          Search results not found!
        </h1> : animeSearch.length && animeSearch.map((data) => {
            return (
                <Link href={`/components/AnimeAndManga/AnimePage/${data.mal_id}`} key={data.mal_id}> <Card {...data} /></Link>
            )
          }).concat(mangaSearch.length && mangaSearch.map((data) => {
            return (
                <Link href={`/components/AnimeAndManga/MangaPage/${data.mal_id}`} key={data.mal_id}> <Card {...data} /></Link>
            )
          })) }
        </div>
    )
}
