import { ApiDataContext } from '@/pages/context/ApiData';
import React, { useContext } from 'react'
import Loading from '../../Loading';
import Card from '../../Card';
import Link from 'next/link';

export default function index() {
    const { anime, loading } = useContext(ApiDataContext);
    return (
      <div className=' flex flex-wrap justify-center items-center my-8'>
        {loading ? <Loading /> : anime.length && anime.map((data) => {
          return (
           <Link href={`/components/AnimeAndManga/AnimePage/${data.mal_id}`} key={data.mal_id}> <Card {...data} /></Link>
          )
        }) }
      </div>
  )
}
