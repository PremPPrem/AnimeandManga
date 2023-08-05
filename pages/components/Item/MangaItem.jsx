import React, { useState } from 'react'

export default function MangaItem({image,
    title,
    type,
    english,
    japanese,
    volumes,
    chapters,
    score,
    published,
    status,
    synopsis,}) {

        const [showMore, setShowMore] = useState(false);
  return (
    <div>
          <h1 className="text-[3rem] sm:text-[2rem]   font-extrabold text-center text-amber-custom py-[3rem]">
        {title}
      </h1>
      <div className="grid grid-cols-2 sm:flex sm:justify-center  sm:flex-wrap my-[2rem]">
        <div className="flex  justify-center sm:items-center">
          <img
            src={image}
            alt={image}
            className="w-[350px] h-[500px] fold:w-[250px] fold:h-[400px] object-cover rounded-[15px]"
          />
        </div>
        <div className="ml-[2rem] mr-4 sm:mx-4">
          <p className="text-[#ffc] pb-[10px]  sm:pt-[1rem]">
            <span className=" text-amber-custom font-bold pr-1">
              English Title :
            </span>
            {english === "Unknown" || english  === null ? "No English Title" : english}
          </p>
          <p className="text-[#ffc] pb-[10px]  ">
            <span className=" text-amber-custom font-bold pr-1">
              Japanese Title :
            </span>
            {japanese  === "Unknown" || japanese  === null ? "No Japanese Title" : japanese}
          </p>
          <p className="text-[#ffc] pb-[10px]  ">
            <span className=" text-amber-custom font-bold pr-1">
            Type :
            </span>
            {type}
          </p>
          <p className="text-[#ffc] pb-[10px]  ">
            <span className=" text-amber-custom font-bold pr-1">
            Volumes :
            </span>
            {volumes === "Unknown" || volumes === null ? "No Volumes" : volumes}
          </p>
          <p className="text-[#ffc] pb-[10px]  ">
            <span className=" text-amber-custom font-bold pr-1">Chapters :</span>{" "}
            {chapters === "Unknown" || chapters === null ? "No Chapters" : chapters}
          </p>
          <p className="text-[#ffc] pb-[10px]">
            <span className=" text-amber-custom font-bold pr-1">Score :</span>{" "}
            {score === "Unknown" || score === null ? "No Score" : `${score} / 10 `}
          </p>
       
          <p className="text-[#ffc] pb-[10px]">
            <span className=" text-amber-custom font-bold pr-1">Published :</span>{" "}
            {published === "Unknown" || published === null ? "No Published" : published}
          </p>

          <p className="text-[#ffc] pb-[10px]">
            <span className=" text-amber-custom font-bold pr-1">Status :</span>{" "}
            {status === "Unknown" || status === null ? "No Status" : status}
          </p>
       
          <p className="text-[#ffc] pb-[10px] ">
            <span className=" text-amber-custom font-bold pr-1">
              Synopsis :
            </span>
             {synopsis === "Unknown" || synopsis === null ? "No Synopsis" : showMore ? synopsis : synopsis?.substring(0, 450)}
            <button
              onClick={() => {
                setShowMore(!showMore);
              }}
              className=" text-amber-custom font-bold pl-1"
            >
              {synopsis === "Unknown" || synopsis === null ? "" :showMore ? " . . . Show Less" : " . . . Show More"}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
