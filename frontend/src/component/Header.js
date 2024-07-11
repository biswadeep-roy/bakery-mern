import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import log from "../images/log.png"
import { FaRegUserCircle } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux"
import { logoutRedux } from '../redux/userSlice';
import { toast } from 'react-hot-toast';

const Header = () => {
    const [showMenu, setShowMenu]  = useState(false);
    const userData=useSelector((state)=>state.user)
    const dispatch=useDispatch()

    const handleShowMenu=()=>{
        setShowMenu(preve=>!preve)
    }
    const handleLogout=()=>{
        dispatch(logoutRedux())
        toast ("Logged out!")
    }

    const cartItemNumber=useSelector((state)=>state.product.cartItem)

    return (
        <header className='fixed shadow-md w-full h-33 px-2 md:px-4 z-50 bg-pink-300'>
            {/*desktop*/}
            
            <div className='flex items-center h-full justify-between '>
                <Link to={""}>
                    <div className='h-30'>
                        <img src={log} className='-ml-5 w-60 h-20' />
                    </div>
                </Link>

                <div className='flex item-center gap-4 md:gap-7'>
                    <nav className='gap-4 md:gap-6 text-base md:text-lg hidden md:flex'>
                        <Link to={""}>Home</Link>
                        <Link to={"menu/6502f85d3e81ad8a8157a166"}>Menu</Link>
                        <Link to={"about"}>About</Link>
                        <Link to={"contact"}>Contact</Link>  
                    </nav>
                    <div className='text-2xl top-1 text-slate-600 relative cursor-pointer'>
                        <Link to={"cart"}>
                            <BsCartFill />
                        <div className='absolute -top-1 -right-1 left-3 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-xs text-center'>
                            {cartItemNumber.length}
                            </div>    
                            </Link>

                    </div>
         
                    <div className='text-slate-600'onClick={handleShowMenu}>
                        <div className='text-3xl cursor-pointer w-9 h-9 rounded-full overflow-hidden'>
                            {userData.image ? (<img src ={userData.image} className='h-full w-full'/>) : (<FaRegUserCircle /> )}
                        </div>
                        {showMenu &&(
                            <div className="absolute top-15 right-1 bg-white py-3 shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                                {
                                    userData.email===process.env.REACT_APP_ADMIN_EMAIL && <Link to={'newproduct'} className='whitespace-nowrap text-s cursor-pointer  px-4'>New Product</Link>
                                }
                                
                                {
                                    userData.image ? <p className='cursor-pointer px-4 text-red-400 'onClick={handleLogout}>Logout ({userData.firstName}) </p>: <Link to={'login'} className='whitespace-nowrap text-s cursor-pointer px-4'>Login</Link>
                                }
                                <nav className='text-base md:text-lg flex flex-col md:hidden'>
                                    <Link to={""} className='px-2 py-1'>Home</Link>
                                    <Link to={"menu/6502f85d3e81ad8a8157a166"} className='px-2 py-1'>Menu</Link>
                                    <Link to={"about"}className='px-2 py-1'>About</Link>
                                    <Link to={"contact"}className='px-2 py-1'>Contact</Link>  
                    </nav>
                                

                            </div>
                        )}
                    </div>
                </div>  


            </div>

            {/*mobile*/}
        </header>
    )
}


export default Header
