import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import CartProduct from '../component/CartProduct'
import emptyCartImage from '../images/emptyy.png'
import {toast} from "react-hot-toast"
import {loadStripe} from "@stripe/stripe-js"
import { useNavigate } from 'react-router-dom'


const Cart = () => {
    const productCartItem=useSelector((state)=>state.product.cartItem)
    const user=useSelector(state=>state.user)
    const navigate=useNavigate()

    const totalPrice=productCartItem.reduce((acc,curr)=>acc+parseInt(curr.total),0)
    const totalQty=productCartItem.reduce((acc,curr)=>acc+parseInt(curr.qty),0)

      
  const handlePayment = async()=>{

    if(user.email){
        
        const stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
        const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/create-checkout-session`,{
          method : "POST",
          headers  : {
            "content-type" : "application/json"
          },
          body  : JSON.stringify(productCartItem)
        })
        if(res.statusCode === 500) return;

        const data = await res.json()
        console.log(data)

        toast("Redirect to payment Gateway...!")
        stripePromise.redirectToCheckout({sessionId : data}) 
    }
    else{
      toast("You have not Login!")
      setTimeout(()=>{
        navigate("/login")
      },1000)
    }
  
}
  return (
    <>
    
    <div className='p-2 md:p-4'> 
        <h2 className=' px-2 mt-1 font-bold text-lg md:text-3xl text-pink-700'>
            Your Bakery Cart!
        </h2>

        {productCartItem[0]?
        <div className='my-4 flex gap-6'>

            <div className='w-full max-w-3xl'>
              {
                productCartItem.map(el=>{
                  return(
                    <CartProduct 
                    key={el._id} 
                    id={el._id}
                    name={el.name}
                    image={el.image}
                    category={el.category}
                    price={el.price}
                    qty={el.qty}
                    total={el.total}
                    />
                  )
                })
              }
            </div>

            <div className='w-full h-48 max-w-3xl bg-blue-100 ml-auto'>
              <h2 className='bg-blue-400 font-bold text-white p-2 text-xl'>Overview</h2>
              <div className='flex w-full py-2 text-lg border-b'>
              <p className='px-2 font-medium'>Total Items:</p>
              <p className='px-3 ml-auto w-32 font-bold'>{totalQty}</p>
              </div>

              <div className='flex w-full py-3 text-lg border-b'>
              <p className='font-medium px-2'>To Pay:</p>
              <p className='ml-auto w-32 font-bold px-2'><span className='text-red-500'>₹</span>{totalPrice}</p>
              </div>
              <button className='bg-orange-600 mt-25 w-full text-xl rounded-full font-bold py-2 text-white hover:bg-green-500'onClick={handlePayment}>Payment</button>
      
            </div>
        </div>

        :
        <>
        <div className='flex items-center justify-center'>
          <img src={emptyCartImage} style={{ width: '300px', height: '400px' }}/>
        </div>
        </>
}
    </div>

    </>
  )
}

export default Cart