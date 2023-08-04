import React, { useContext } from 'react'
import { ApiDataContext } from '../context/ApiData';
import Loading from '../components/Loading';
import Link from 'next/link';
import Card from '../components/Card';

export default function index() {
    const { anime, loading } = useContext(ApiDataContext);
    return (
      <div className=' flex flex-wrap justify-center items-center my-8'>
        {loading ? <Loading /> : anime.length && anime.map((data) => {
          return (
           <Link href={`/AnimePage/${data.mal_id}`} key={data.mal_id}> <Card {...data} /></Link>
          )
        }) }
      </div>
  )
}
