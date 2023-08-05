import React, { useContext } from 'react'
import { ApiDataContext } from '../context/ApiData';
import { FaSearch } from "react-icons/fa";

export default function HeaderHome() {
    const {handleChange, handleSubmit, search } = useContext(ApiDataContext);
  return (
    <div className=" min-h-[70vh] bg-headImageHome   bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center text-white text-center  ">
      <h2 className=" text-[4.2rem] my-[2rem] md:text-[3rem] sm:text-[1.5rem] ">
        Find You
        <span className="text-amber-custom font-extrabold underline ml-3">Anime & Manga</span>
      </h2>
      <p className="  mb-[2.8rem] max-w-[770px] opacity-[0.8] text-[1.8rem] font-[300] md:text-[1.8rem] sm:text-[0.8rem]  leading-[1.7]  ">
        There are many anime e.g. One Piece , Naruto , Bleach , Demon Slayer ,
        Chuunibyou , Tonikaku Kawaii , Yahari etc.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between px-[2.8rem] sm:px-[2rem]  rounded-[3.8rem] bg-transparent border-2 ">
          <input
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Search Anime & Manga "
            className="bg-transparent  text-[1.8rem] p-[0.6rem]  font-bold  text-amber-custom outline-none placeholder:opacity-70 placeholder:text-amber-custom/90 sm:text-[1rem] fold:text-[0.65rem]"
          />
          <button
          type='submit'
            className="flex items-center justify-center "
          >
            <FaSearch className=" text-amber-custom text-[32px] sm:text-[25px]" />
          </button>
        </div>
      </form>
    </div>
  )
}
