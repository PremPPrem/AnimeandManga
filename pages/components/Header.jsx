import React from 'react'

export default function Header({name,title,image}) {
  return (
    <div className='h-[50vh] relative bg-headImage  bg-center bg-cover bg-no-repeat    '>
      <div className=' max-w-[80%] md:max-w-[90%] m-auto text-white py-[120px] px-0'>
        <span className={name?.length <= 10 ? 'text-[2.5rem] sm:text-[2rem] capitalize' : 'text-[1.5rem] capitalize'}>{name}</span>
        <h1 className={title?.length >= 30 ? 'text-[2.2rem] md:text-[2rem]  font-[500] sm:text-[1.2rem]' : title?.length <= 10 ? 'text-[4rem]  font-[500] fold:text-[2.5rem]' : 'text-[2.2rem]  font-[500] sm:text-[1.5rem]'}>{title}</h1>
      </div>
      <img src={image} alt="" className='h-[50vh] absolute top-0 left-0 z-[-1] object-cover  w-full ' />
    </div>
  )
}

