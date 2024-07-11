import React, {useState} from 'react'
import loginSignupImage from '../images/icon.gif';
import {Link, useNavigate } from "react-router-dom";
import {AiOutlineEye} from "react-icons/ai"
import {AiOutlineEyeInvisible} from "react-icons/ai"
import {ImagetoBase64} from '../utility/ImagetoBase64'
import { toast } from "react-hot-toast";

function Signup() {
    const navigate=useNavigate();
    const [showPassword,setShowPassword]=useState(false)
    const [showConfirmPassword,setShowConfirmPassword]=useState(false)
    const [data,setData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:"",
        image:""
    });
    const handleShowPassword=()=>{
        setShowPassword((preve)=>!preve);
    };

    const handleShowConfirmPassword=()=>{
        setShowConfirmPassword((preve)=>!preve)
    };

    const handleOnChange=(e)=>{
        const {name,value}=e.target;
        setData((preve)=>{
            return {
                ...preve,
                [name] : value
            };
        });
    };

    const handleUploadProfileImage=async (e)=>{
        const data=await ImagetoBase64(e.target.files[0])

    
        setData((preve)=>{
            return{
                ...preve,
                image: data
            }
        })
    }

    console.log(process.env.REACT_APP_SERVER_DOMIN)
    const handleSubmit = async(e) => {
    e.preventDefault();
    const { firstName, email, password, confirmPassword } = data;
    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) { 
    
          const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`,{
            method : "POST",
            headers : {
              "content-type" : "application/json"
            },
            body : JSON.stringify(data)
          })

          const dataRes = await fetchData.json()
   
          
 
        //   alert(dataRes.message);
          toast(dataRes.message)
          if(dataRes.alert){
            navigate("/login");
          }
      }
      else{
          alert("Check the password!")
      }
  }
  else{
      alert("Please Enter required field!!")
  }
};

  return (
    <div className='p-3 md:p-4'>
        <div className='w-full max-w-sm bg-white m-auto flex flex-col p-4'>
            {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
            <div className='w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative '>
                <img src = {data.image ? data.image : loginSignupImage} className='w-full h-full'/>

            <label htmlFor="profileImage">
                <div className="absolute bottom-0 h-1/3 w-full text-center cursor-pointer">
                    <p className='text-sm p-1 text-center bg-slate-600 bg-opacity-70 text-white '>Upload</p>
                </div>
                <input type={"file"} 
                id="profileImage" 
                accept='image/*' 
                className="hidden" 
                onChange={handleUploadProfileImage}/>
            </label>
            </div>

            <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit} >
                <label htmlFor="firstName" 
                className='font-bold'>First Name</label>
                <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-4 focus-within:outline focus-within:outline-purple-300'>
                <input type={"text"} 
                id="firstName" 
                name="firstName" 
                className="w-full bg-slate-200 border-none outline-none"
                value={data.firstName} 
                onChange={handleOnChange}/>
                </div>

                <label htmlFor="lastName" className='font-bold'>Last Name</label>
                <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-4 focus-within:outline focus-within:outline-purple-300'>
                <input type={"text"} id="lastName" 
                name="lastName" 
                className="w-full bg-slate-200 border-none outline-none"
                value={data.lastName} 
                onChange={handleOnChange}/>
                </div>

                <label htmlFor="Email" className='font-bold'>Email</label>
                <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-4 focus-within:outline focus-within:outline-purple-300'>
                <input type={"text"} 
                id="email" 
                name="email" 
                className="w-full bg-slate-200 border-none outline-none" 
                value={data.email} onChange={handleOnChange}/></div>

                <label htmlFor="password" className='font-bold'>Password</label>
                <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-4 focus-within:outline focus-within:outline-purple-300'>
                <input type={showPassword ? "text":"password"} 
                id="password" name="password" 
                className="w-full bg-slate-200 border-none outline-none "
                value={data.password} 
                onChange={handleOnChange}/>
                <span className='flex text-xl cursor-pointer' onClick={handleShowPassword}> {showPassword ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}</span>
                </div>

                <label htmlFor= "confirmPassword" 
                className='font-bold'>Confirm Password</label>
                <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-4 focus-within:outline focus-within:outline-purple-300'>
                <input type={showConfirmPassword ? "text":"password"} 
                id="confirmPassword" name="confirmPassword" 
                className="w-full bg-slate-200 border-none outline-none "
                value={data.confirmPassword} 
                onChange={handleOnChange}/>
                <span className='flex text-xl cursor-pointer' onClick={handleShowConfirmPassword}> {showConfirmPassword ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}</span>
                </div>

                <button className='w-full max-w-[120px] m-auto bg-purple-300 hover:bg-purple-600 text-l font-bold  py-1 rounded-full cursor-pointer text-center mt-2'>Sign up</button>
          </form>
            <p className='text-center'>Already have an account? <u><Link to={"/login"} className='text-red-700'>Login</Link></u></p>
        </div>
    </div>
  )
}
export default Signup