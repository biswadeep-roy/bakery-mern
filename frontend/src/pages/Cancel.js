import React from 'react'
import cancelImage from "../images/so.png"

const Cancel = () => {
  return (
    <div className='flex my-36 items-center justify-center'>
    <img src={cancelImage} style={{ width: '450px', height: '300px' }}/>
  </div>
  )
}

export default Cancel