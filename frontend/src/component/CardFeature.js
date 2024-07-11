import React from 'react'
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { addCartItem, increaseQty } from '../redux/productSlice'

const CardFeature = ({image,name,price,category,loading,id}) => {
  const dispatch =useDispatch()

  const handleAddCartProduct=(e)=>{
    dispatch(addCartItem({
      _id:id,
      name:name,
      price:price,
      category:category,
      image:image
    }))
  }
  return (
    <div className='w-full min-w-[200px] max-w-[200px] rounded-md bg-pink-200 hover:shadow-lg drop-shadow-2xl py-3 px-4 cursor-pointer flex flex-col card-feature'>
        {
          image ? <>
          <Link to={`/menu/${id}`} onClick={()=>window.scrollTo({top:"0",behaviour:"smooth"})}>
           <div className='h-28 flex flex-col justify-center items-center'>
            <img src={image} className='h-full'/>
        </div>
        <h3 className='font-semibold text-black  capitalize text-lg mt-4 whitespace-nowrap overflow-hidden'>{name}</h3>
        <p className=' text-slate-700 capitalize font-medium'>{category}</p>
        <p className=' font-bold text-slate-700'><span className='text-red-500'>₹</span><span>{price}</span>
        </p> </Link>
        <button className='bg-pink-400 hover:bg-green-500 text-white mt-2 font-bold rounded-full py-1 my-2 w-full' onClick={handleAddCartProduct}>Add to Cart</button>
       
          </>

          :
          <div className='min-h-[150px] flex justify-center items-center'><p>{loading}</p></div>
        }

    </div>

  )
}

export default CardFeature