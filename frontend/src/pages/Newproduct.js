import React,{useState}from 'react'
import {BsCloudUpload} from "react-icons/bs"
import { ImagetoBase64 } from '../utility/ImagetoBase64'
import {toast} from "react-hot-toast"

const Newproduct = () => {
  const [data,setData]=useState({
    name : "",
    category:"",
    image:"",
    price:"",
    description:""
  })

  const handleOnchange=(e)=>{
    const{name, value}=e.target
    setData((preve)=>{
      return{
        ...preve,
        [name]:value
      }
    })
  }

  const uploadImage= async(e)=>{
    const data=await ImagetoBase64(e.target.files[0])
    // console.log(data)
    setData((preve)=>{
      return{
        ...preve,
        image:data
      }
    })
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(data)
    const{name,image,category,price}=data
    if(name&&image&&category&&price){
      const fetchData= await fetch (`${process.env.REACT_APP_SERVER_DOMIN}/uploadProduct`,{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify(data)
      })
  
      const fetchRes=await fetchData.json()
      console.log(fetchRes)
      toast(fetchRes.message)
      setData(()=>{
        return{
          name : "",
          category:"",
          image:"",
          price:"",
          description:""
        }
      })
    }
    else{
      toast("enter required field!")
    }
  }

  return (

    <div className='p-5'>
      <form className='m-auto w-full max-w-md shadow flex flex-col p-2 bg-white'onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type={'text'} name='name' className='bg-purple-100 p-1 my-1 rounded'onChange={handleOnchange} value={data.name}/>


        <label htmlFor='category' className='rounded'>Category</label>
        <select className='bg-purple-100 p-1 my-1 rounded cursor-pointer' id='category'name='category' onChange={handleOnchange} value = {data.category}>
          <option value={"other"}>Select category</option>
          <option value={"cupcakes"}>Cupcakes</option>
          <option value={"cakes"}>Cakes</option>
          <option value={"coffee"}>Coffee</option>
          <option value={"crossaint"}>Crossaint</option>
          <option value={"pancakes"}>Pancakes</option>
          <option value={"cheesecake"}>Cheesecakes</option>
          <option value={"macarons"}>Macarons</option>
          <option value={"bentocakes"}>Bento Treats</option>
          <option value={"sweetboxes"}>Sweet Boxes</option>
        </select>

        <label htmlFor='image' className='my-1 cursor-pointer'>Image
        <div className='h-40 w-full bg-purple-100 rounded flex items-center justify-center'>
          {
            data.image ? <img src={data.image} className='h-full'/>: <span className='text-5xl'><BsCloudUpload/></span>
          }
       
        <input type={'file'} accept="image/*" id="image" onChange={uploadImage} className='hidden'/>
        </div>
        </label>

        
        <label htmlFor='price' className='my-1 '>Price</label>
        <input type={'text'} className='bg-purple-100 p-1 rounded'name='price' onChange={handleOnchange} value={data.price}/>


        <label htmlFor='description'>Description</label>
        <textarea rows={2} value={data.description} className='bg-purple-100 p-1 resize-none rounded' name='description' onChange={handleOnchange}></textarea>


        <button className='my-3 bg-green-400 hover:bg-green-600 text-white text-lg font-medium drop-shadow rounded-full'>Save</button>
      </form>
    </div>
  )
}

export default Newproduct