import React from 'react'
import {PiForkKnifeBold} from 'react-icons/pi'

const filterProduct = ({category,onClick,isActive}) => {
  return (
    <div onClick={onClick}>
        <div className={`text-4xl p-5  rounded-full cursor-pointer ${isActive ? "bg-yellow-400 text-pink-100" : "bg-purple-300"}`}>
            <PiForkKnifeBold/>
  </div>
  <p className='text-center font-medium my-1 capitalize'>{category}</p>
    </div>
  )
}

export default filterProduct