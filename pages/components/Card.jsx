import React from 'react'
import { AiFillStar } from "react-icons/ai";


export default function Card({images,mal_id,title,score,type}) {
    const scoreCheck = (num) => {
        if(num >= 8) {
            return  "text-[#00FF00]"
        } else if (num >= 5) {
            return "text-[#FF8c00]"
        } else {
            return "text-[#FF0800]"
        }
    }
  return (
    <div className=' hover:scale-110 transition-all ease-in-out'>
        <div className='w-[300px] fold:w-[250px] fold:h-[400px] h-[450px] m-4 shadow-[0.2px_2px_5px_rgba(255,193,7,0.4)] relative overflow-hidden rounded-[3px]'>
            <img src={images?.jpg.large_image_url} alt={mal_id} className='w-full h-full' />
            <div className=' text-amber-custom top-0 right-0  absolute p-1  flex items-center justify-center capitalize  '><span className=' p-2 bg-gray-900/80 rounded-[10px] font-bold shadow-miniCardShadow'>{type}</span></div>
            <div className=" text-amber-custom flex items-center justify-between px-4 pt-2 pb-4 tracking-[0.5px] absolute bottom-0 bg-black/70 w-full font-bold ">
                <h1 className='mt-0'>{title}</h1>
             <span className={`${scoreCheck(score)} ml-2 py-1 px-2 bg-gray-900 rounded-[10px] font-extrabold shadow-miniCardShadow text-center  `}><div className='flex justify-center text-yellow-400'><AiFillStar /></div>{score ? score?.toFixed(2) : 0?.toFixed(2)}</span>
            </div>
        </div>
      
    </div>
  )
}
