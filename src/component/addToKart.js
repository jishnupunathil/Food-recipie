import React from 'react'

const AddToKart = ({cartData}) => {

    let cartDatas=cartData.map((data)=>{
        return(
            <div>
            <img src={data.img} alt=''/>
            <h6>{data.title}</h6>
            </div>
        )
    })

  return (
    <div className='add-to-cart-wrapper'>
    <div className="add-to-cart-item">
    <h6 className="text-center">Your Cart</h6>
    {cartDatas}
    </div>
    </div>
  )
}

export default AddToKart