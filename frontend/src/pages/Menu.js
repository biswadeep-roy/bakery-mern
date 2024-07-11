import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import AllProduct from '../component/AllProduct'
import { addCartItem } from '../redux/productSlice'
import LogoImage from '../images/s-logo.png'

const Menu = () => {
  const {filterby}=useParams()
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const productData=useSelector(state=>state.product.productList)

  const productDisplay=productData.filter(el=>el._id===filterby)[0]

  const handleAddCartProduct=(e)=>{
    dispatch(addCartItem(productDisplay))
  }
  const handleBuy=()=>{
    dispatch(addCartItem(productDisplay))
    navigate("/cart")
  }
  return (
    <div className='p-2 md:p-4'>
      <div className='w-full max-w-4xl m-auto md:flex bg-purple-200 rounded-md shadow drop-shadow'>
        <div className='max-w-sm overflow-hidden cursor-pointer w-full p-6'>
          <img src={productDisplay.image} className='hover:scale-105 transition-all h-full'/>
        </div>
        <div className='flex flex-col gap-2'>
        <h3 className='font-semibold mt-5 capitalize text-2xl md:text-4xl'>{productDisplay.name}</h3>
        <p className='text-slate-700 capitalize font-medium text-2xl'>{productDisplay.category}</p>
        <p className='font-bold text-slate-700 md:text-2xl'><span className='text-red-500'>₹</span><span>{productDisplay.price}</span>
        </p>
        <div className='flex gap-3'>
        <button onClick={handleBuy} className='bg-pink-500 hover:bg-green-500 text-white mt-2 font-bold rounded-md py-2 px-5 my-4'>Buy</button>
        <button onClick={handleAddCartProduct} className='bg-pink-500 hover:bg-green-500 text-white mt-2 font-bold rounded-md py-2 px-5 my-4'>Add to Cart</button>
        </div>
        <div>
          <p className='font-medium text-slate-700 '>Description:</p>
          <p>{productDisplay.description}</p>
        </div>
        </div>
      </div>
      <AllProduct heading={"You Might Like:"}/>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='-mt-38'>
        <img src={LogoImage} style={{width: '250px', height: '250px' }} alt="Logo" />
      </div>
    </div>
          
  )
}

export default Menu