import React from 'react'
import { BsCheckCircle } from  "react-icons/bs";

export default function Modal({closeModal,btnName}) {
  return (
    <div className=" fixed inset-0 bg-black/25 backdrop-blur-sm  flex justify-center items-center z-[1000] font-bold">
    <div className="w-[420px]">
      <div className=" bg-white p-2 rounded-[0.5rem] flex flex-col">
        <button className="flex justify-end border-none text-[1.2rem] font-[900] text-red-500" onClick={()=>{closeModal(false)}}>X</button>
        <div className="flex justify-center text-green-500  text-[3rem] ">
          <BsCheckCircle  />
        </div>

        <div className=" text-center my-6">
          <p className='text-black'>Thank Yor For {btnName}</p>
        </div>

        {/* <div className="text-center my-6">
          <button className="button" onClick={()=>{closeModal(false)}}>{btnName}</button>
        </div> */}
      </div>
    </div>
  </div>
  )
}
