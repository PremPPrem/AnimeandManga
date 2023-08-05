import React from 'react'
import s from "@/styles/Game.module.scss";

export default function SingleCard({card,handleChoice,flipped,disabled}) {

    const handleClick = () => {
        if (!disabled) {
            handleChoice(card)
        }
      
    }
  return (
    <div className={s.card}>
    <div className={flipped ? `${s.flipped}` : ""}>
      <img src={card.src} alt="" className={s.front}/>
      <img onClick={handleClick} src="/Game_Image/Game_back.png" alt="card" className={s.back} />
    </div>
  </div>
  )
}