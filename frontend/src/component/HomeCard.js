import React from 'react'
import { Link } from 'react-router-dom'

const HomeCard = ({name,image,category,price,loading,id}) => {
  return (
    <div className='bg-pink-300 shadow-xl p-2 rounded min-w-[200px]'>
     
       {
        name?(
        <>
        <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top:"0",behaviour:"smooth"})}>
         <div className='w-60'>
            <img src={image} className='w-full h-full'/>
        </div>
        <h3 className='font-semibold text-black text-center capitalize text-lg'>{name}</h3>
        <p className='text-center text-slate-700 capitalize font-medium'>{category}</p>
        <p className='text-center font-bold text-slate-700'><span className='text-red-500'>₹</span><span>{price}</span>
        </p>
        </Link>
        </>

       )
       :
       <div className='flex justify-center items-center h-full'>
        <p>{loading}</p>
       </div>
    }
    </div>
  )
}

export default HomeCard