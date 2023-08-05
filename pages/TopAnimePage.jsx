import React, { useContext, useEffect } from 'react'
import Header from './components/Header'
import Loading from './components/Loading';
import Link from 'next/link';
import Card from './components/Card';
import { ApiDataContext } from './context/ApiData';

export default function AiringPage() {
    const { loading,animeTop,getAnimeTop } = useContext(ApiDataContext);
    useEffect(() => {
      getAnimeTop();
      }, []);
  return (
    <div className=' min-h-screen'>
    <Header
    name="Anime"
    title="Top Anime"
    image="/Header_Image/Other_Header.jpg"
  />
    <div className=' flex flex-wrap justify-center items-center my-8'>
        {loading ? <Loading /> : animeTop.length && animeTop.map((data) => {
          return (
           <Link href={`/components/AnimeAndManga/AnimePage/${data.mal_id}`} key={data.mal_id}> <Card {...data} /></Link>
          )
        }) }
      </div>


</div>
  )
}
