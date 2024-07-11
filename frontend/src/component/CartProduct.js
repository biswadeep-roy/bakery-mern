import React from 'react'
import{FiMinus,FiPlus} from'react-icons/fi'
import {MdDelete} from "react-icons/md"
import { useDispatch } from 'react-redux'
import { deleteCartItem , increaseQty, decreaseQty} from '../redux/productSlice'

const CartProduct = ({id,name,image,category,qty,total,price}) => {
  const dispatch=useDispatch()

  return (
    <div className='bg-pink-200 p-2 flex gap-4 rounded border-2 border-pink-100'>
        <div className='bg-white p-3 rounded overflow-hidden'>
            <img src={image} className='h-36 w-40 object-cover'/>
        </div>
        <div className='flex flex-col gap-1 w-full'>
          <div className='flex justify-between'>
        <h3 className='font-semibold mt-5 capitalize text-lg md:text-xl'>{name}</h3>
        <div className='cursor-pointer text-slate-500 hover:text-red-600 md:text-2xl'onClick={()=>dispatch(deleteCartItem(id))}>
        <MdDelete/>
        </div>
        </div>
        <p className='text-slate-700 capitalize font-medium mt-1 '>{category}</p>
        <p className='font-bold text-slate-700 text-base'><span className='text-red-500'>₹</span><span>{price}</span>
        </p>
        <div className='flex justify-between'>
        <div className='flex gap-3 items-center'>
        <button onClick={()=>dispatch(increaseQty(id))} className='bg-blue-400 text-white hover:bg-green-500 rounded-full py-1 mt-1 p-1'><FiPlus/></button>
        <p className='font-semibold p-1'>{qty}</p>
        <button onClick={()=>dispatch(decreaseQty(id))} className='bg-blue-400 text-white  hover:bg-green-500 rounded-full py-1 mt-1 p-1'><FiMinus/></button>
        </div>
        <div className='flex items-center gap-2 font-bold text-slate-600'>
          <p>Total</p>
          <p><span className='text-red-600'>₹</span>{total}</p>

        </div>
        </div>
        </div>
        
    </div>
  )
}

export default CartProduct