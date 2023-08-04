import Link from 'next/link';
import React, { useContext } from 'react'
import Loading from '../../Loading';
import { ApiDataContext } from '@/pages/context/ApiData';
import Card from '../../Card';


export default function index() {
  const { manga, loading } = useContext(ApiDataContext);
    return (
      <div className=' flex flex-wrap justify-center items-center my-8'>
        {loading ? <Loading /> : manga.length && manga.map((data) => {
          return (
           <Link href={`/components/AnimeAndManga/MangaPage//${data.mal_id}`} key={data.mal_id}> <Card {...data} /></Link>
          )
        }) }
      </div>
  )
}
