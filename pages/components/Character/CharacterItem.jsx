import Link from "next/link";
import React from "react";

export default function CharacterItem({ image,name,role,link }) {
  return (
    <div>
      <div className="m-2 w-[200px] h-[270px] text-amber-custom border-[1px] border-white scale-1 transition hover:scale-110  hover:ease-in-out   hover:border-amber-500 ">
        <Link href={link} >
          <div className="flex justify-center my-2">
            <img src={image} alt={image} className="w-[120px] h-[150px] " />
          </div>
          <h4 className="text-[1.2rem] text-center font-bold">{name}</h4>
          <p className="text-center text-amber-custom/50">{role}</p>
        </Link>
      </div>
    </div>
  );
}
