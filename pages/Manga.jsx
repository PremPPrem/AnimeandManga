import React from 'react'
import MangaPage from './components/AnimeAndManga/MangaPage'
import Header from './components/Header'

export default function Manga() {
  return (
    <div className=' min-h-screen'>
          <Header
          name="Manga"
          title="Welcome to the manga page"
          image="/Header_Image/Manga_Header.jpg"
        />
      <MangaPage />
    </div>
  )
}
