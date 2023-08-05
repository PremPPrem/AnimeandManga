import React from 'react'
import SearchPage from './components/AnimeAndManga/SearchPage'
import Header from './components/Header'

export default function Search() {
  return (
    <div className='min-h-screen'>
       <Header
          name="Search"
          title="Search for anime or manga"
          image="/Header_Image/Search_Header.jpg"
        /> 
     <SearchPage />
    </div>
  )
}
