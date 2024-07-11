import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import HomeCard from "../component/HomeCard";
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterProduct from "../component/FilterProduct";
import { useNavigate } from 'react-router-dom'
import AllProduct from "../component/AllProduct";
import LogoImage from '../images/s-logo.png'

const Home = () => {
  const productData=useSelector((state)=>state.product.productList)
  const homeProductCartList=productData.slice(17,23)
  const homeProductCartListCakes=productData.filter((el)=>el.category==="cakes",[])
  const navigate=useNavigate()

  const loadingArray= new Array(6).fill(null)
  const loadingArrayFeature= new Array(10).fill(null);
  const slideProductRef=useRef()
  const nextProduct=()=>{
    slideProductRef.current.scrollLeft+=200
  }
  const preveProduct=()=>{
    slideProductRef.current.scrollLeft -=200
  }

  const handleOrder=()=>{
    navigate("menu/6502f85d3e81ad8a8157a166")
  }


  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-5 py-1'>
        <div className='md:w-1/2'>
          <div className='flex gap-1 bg-purple-300 w-32 h-9 px-2 items-center rounded-full'>
            <p className='text-medium font-medium text-black'>Delivery</p>
            <img src="https://www.iconpacks.net/icons/2/free-delivery-truck-icon-2009-thumb.png" className='h-12'></img>
          </div>
          <h2 className='text-4xl md:text-7xl font-bold py-4'>The Fastest Bakery Delivery to <span className='text-pink-600'>Your Home</span></h2>
          <p className='font-bold py-3 text-3xl text-pink-500'>Welcome to Heavenly Bites by Biswadeep - Your Sweet Escape!</p>
          <p className='font-bold text-xl text-pink-700'>About Us:</p>
          <p className='text-base font-medium py-2 '>Indulge in a world of delightful flavors and artisanal creations at Heavenly Bites by Biswadeep. Our bakery store is a labor of love, where every confectionery masterpiece is crafted with precision, and the finest ingredients. Whether you're a fan of classic pastries, crave the latest dessert trends, or seek gluten-free and vegan options, we have something to satisfy every palate. Discover our delectable cupcakes, scrumptious macarons, mouthwatering cakes, and more. Our rotating seasonal specials will keep you coming back for more.</p>
          <button onClick={handleOrder} className='font-bold text-medium py-2 px-4 text-white bg-green-500 rounded-full hover:bg-green-600'>Order Now!</button>
        </div>

        <div className='md:w-1/2 flex flex-wrap gap-3 p-1 justify-center'>
          {
            homeProductCartList[0] ? homeProductCartList.map((el)=>{
              return(
                <HomeCard
                key={el._id}
                id={el._id}
                image={el.image}
                name={el.name}
                price={el.price}
                category={el.category}
                />
              )
            })
            :
            loadingArray.map((el,index)=>{
              return(
                <HomeCard
                key={index+"loading"}
                loading={("Loading...")}
                />
              )
            })
          }
        </div>
      </div>
      <div className=''>
        <div className='flex w-full items-center'>
          <h2 className='font-bold text-2xl text-slate-800 mb-3'>Cakes</h2>
          <div className='ml-auto flex gap-4'>
            <button onClick={preveProduct} className='bg-blue-400 hover:bg-blue-600 text-lg p-2 rounded-full'><GrPrevious/></button>
            <button onClick={nextProduct} className='bg-blue-400 hover:bg-blue-600 text-lg p-2 rounded-full'><GrNext/></button>
          </div>
          </div>
          <div className='flex gap-6 overflow-scroll scrollbar-none scroll-smooth transition-all' ref={slideProductRef}>
            { homeProductCartListCakes[0] ? homeProductCartListCakes.map((el)=>{
              return(
                <CardFeature
                key={el._id+"cakes"}
                id={el._id}
                name={el.name}
                category={el.category}
                price={el.price}
                image={el.image}

                />
              );
            })
            :
            loadingArrayFeature.map((el,index)=> (<CardFeature loading='Loading...' key={index+"cartLoading"}/>)
          )}
            
          </div>
        </div>
        <AllProduct heading={"Your Product"}/>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='-mt-38'>
        <img src={LogoImage} style={{width: '250px', height: '250px' }} alt="Logo" />
      </div>
    </div>
  )
}

export default Home