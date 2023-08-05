import React from 'react'
import AnimePage from './components/AnimeAndManga/AnimePage'
import Header from './components/Header'

export default function Anime() {
  return (
    <div className=' min-h-screen'>
          <Header
          name="Anime"
          title="Welcome to the anime page"
          image="/Header_Image/Anime_Header.jpg"
        />
      <AnimePage />
    </div>
  )
}
