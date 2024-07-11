import React, {useState} from 'react'
import loginSignupImage from '../images/icon.gif';
import {Link, useNavigate} from "react-router-dom";
import {AiOutlineEye} from "react-icons/ai"
import {AiOutlineEyeInvisible} from "react-icons/ai"
import {toast} from "react-hot-toast";
import { useDispatch, useSelector } from 'react-redux';
import { loginRedux } from '../redux/userSlice';

const Login = () => {
  const [showPassword,setShowPassword]=useState(false)
  const [data,setData]=useState({
      email:"",
      password:"",
  })
  const navigate=useNavigate()

  const userData=useSelector(state=>state)

  const dispatch=useDispatch()

  const handleShowPassword=()=>{
      setShowPassword((preve)=>!preve)
  }


  const handleOnChange=(e)=>{
      const {name,value}=e.target
      setData((preve)=>{
          return {
              ...preve,
              [name]: value
          };
      });
  };
  const handleSubmit=async(e)=>{
      e.preventDefault()
      const {email,password}=data
      if( email && password){
        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/login`,{
            method : "POST",
            headers : {
              "content-type" : "application/json"
            },
            body : JSON.stringify(data)
          })

          const dataRes = await fetchData.json()
         
          toast(dataRes.message)

          if(dataRes.alert){
            dispatch(loginRedux(dataRes))
            setTimeout(()=>{
                navigate("/")
            },1000);
            }  
            console.log(userData)
          }
      else{
        alert("Please enter required fields")
      }
    }

  return (
    
    <div className='p-3 md:p-4'>
    <div className='w-full max-w-sm bg-white m-auto flex flex-col p-4'>
        {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
        <div className='w-10 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto flex items-center'>
            <img src ={loginSignupImage} className='w-full'/>
        </div>
        <form className="w-full py-3 flex flex-col"onSubmit={handleSubmit} >

            <label htmlFor="Email" className='font-bold'>Email</label>
            <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-4 focus-within:outline focus-within:outline-purple-300'>
            <input type={"text"} 
            id="email" name="email" 
            className="w-full bg-slate-200 border-none outline-none"
            value={data.email} 
            onChange={handleOnChange}/>
            </div>

            <label htmlFor="password" className='font-bold'>Password</label>
            <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-4 focus-within:outline focus-within:outline-purple-300'>
            <input type={showPassword ? "text":"password"} 
            id="password" name="password" 
            className="w-full bg-slate-200 border-none outline-none "
            value={data.password} 
            onChange={handleOnChange}/>


            <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}> {showPassword ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}</span>
            </div>

            <button className='w-full max-w-[120px] m-auto bg-green-400 hover:bg-green-600 text-l font-bold  py-1 rounded-full cursor-pointer text-center mt-2'>Login</button>
      </form>
        <p className='text-center'>Don't have an account? <u><Link to={"/signup"} className='text-red-700'>Sign Up</Link></u></p>
    </div>
</div>

  )
}

export default Login

