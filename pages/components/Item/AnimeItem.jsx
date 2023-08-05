import React, { useState } from "react";
import { IoVideocamOffSharp } from "react-icons/io5";
import Header from "../Header";

export default function AnimeItem({
  trailer,
  image,
  title,
  english,
  japanese,
  rating,
  score,
  year,
  aired,
  broadcast,
  duration,
  episodes,
  season,
  source,
  type,
  synopsis,
}) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <Header name={type} title={title} image={image} />
      <h1 className="text-[3rem] sm:text-[2rem]   font-extrabold text-center text-amber-custom py-[3rem]">
        {title}
      </h1>
      <div className="flex items-center justify-center pb-[5rem] ">
        {trailer ? (
          <iframe
            src={trailer}
            width="800"
            height="400"
            allow="accelerometer;   clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="video"
            allowFullScreen
            className=" md:mx-4"
          ></iframe>
        ) : (
          <>
            <div className="flex items-center justify-center flex-col text-amber-custom/30  w-[800px] h-[400px] mx-4 relative shadow-miniCardShadow rounded-[15px]  ">
              <p className="text-center text-[3rem] sm:text-[2rem]">
                Trailer not available
              </p>
              <IoVideocamOffSharp className=" text-[5rem] mt-4 " />
            </div>
          </>
        )}
      </div>
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
            {english === "Unknown" || english === null
              ? "No English Title"
              : english}
          </p>
          <p className="text-[#ffc] pb-[10px]  ">
            <span className=" text-amber-custom font-bold pr-1">
              Japanese Title :
            </span>{" "}
            {japanese === "Unknown" || japanese === null
              ? "No Japanese Title"
              : japanese}
          </p>
          <p className="text-[#ffc] pb-[10px]  ">
            <span className=" text-amber-custom font-bold pr-1">Rating :</span>{" "}
            {rating === "Unknown" || rating === null ? "No Rating" : rating}
          </p>
          <p className="text-[#ffc] pb-[10px]">
            <span className=" text-amber-custom font-bold pr-1">Score :</span>{" "}
            {score === "Unknown" || score === null
              ? "No Score"
              : `${score} / 10 `}
          </p>
          <p className="text-[#ffc] pb-[10px]">
            <span className=" text-amber-custom font-bold pr-1">Year :</span>{" "}
            {year === "Unknown" || year === null ? "No Year" : year}
          </p>
          <p className="text-[#ffc] pb-[10px]">
            <span className=" text-amber-custom font-bold pr-1">Aired :</span>{" "}
            {aired === "Unknown" || aired === null ? "Not Available" : aired}
          </p>
          <p className="text-[#ffc] pb-[10px]">
            <span className=" text-amber-custom font-bold pr-1">
              Broadcast :
            </span>{" "}
            {broadcast === "Unknown" || broadcast === null
              ? "No Broadcast"
              : broadcast}
          </p>
          <p className="text-[#ffc] pb-[10px]">
            <span className=" text-amber-custom font-bold pr-1">
              Duration :
            </span>{" "}
            {duration === "Unknown" || duration === null
              ? "No Duration"
              : duration}
          </p>
          <p className="text-[#ffc] pb-[10px]">
            <span className=" text-amber-custom font-bold pr-1">
              Episodes :
            </span>{" "}
            {episodes === "Unknown" || episodes === null
              ? "No Episodes"
              : episodes}
          </p>
          <p className="text-[#ffc] pb-[10px]">
            <span className=" text-amber-custom font-bold pr-1">Season :</span>{" "}
            {season === "Unknown" || season === null ? "No Season" : season}
          </p>
          <p className="text-[#ffc] pb-[10px]">
            <span className=" text-amber-custom font-bold pr-1">source :</span>{" "}
            {source === "Unknown" || source === null ? "No Source" : source}
          </p>
          <p className="text-[#ffc] pb-[10px]">
            <span className=" text-amber-custom font-bold pr-1">Type :</span>{" "}
            {type === "Unknown" || type === null ? "No Type" : type}
          </p>
          <p className="text-[#ffc] pb-[10px] ">
            <span className=" text-amber-custom font-bold pr-1">
              Synopsis :
            </span>
            {synopsis === "Unknown" || synopsis === null
              ? "No Synopsis"
              : showMore
              ? synopsis
              : synopsis?.substring(0, 450)}
            <button
              onClick={() => {
                setShowMore(!showMore);
              }}
              className=" text-amber-custom font-bold pl-1"
            >
              {synopsis === "Unknown" || synopsis === null || synopsis?.length <= 451
                ? ""
                :showMore ? " . . . Show Less" : " . . . Show More"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
