import React from 'react'

const AddToKart = ({cartImage,cartTitle}) => {
  console.log("🚀 ~ file: addToKart.js:4 ~ AddToKart ~ cartImage:", cartImage)
  return (
    <div className='add-to-cart-wrapper'>
    <div className="add-to-cart-item">
    <img src={cartImage} alt=''/>
    <h6>{cartTitle}</h6>
    </div>
    </div>
  )
}

export default AddToKart