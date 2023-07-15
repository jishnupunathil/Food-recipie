import React, { useState } from 'react'

const CardDish = ({showPopUp,menu}) => {

  
  return (
    <React.Fragment>
    <li>
    <a href="javaScript:;" onClick={()=>{showPopUp(menu.strMeal)}}>
    <img src={menu.strMealThumb} alt='none' className='br-10'/>
    <h5>{menu.strMeal}</h5>
    </a>
    </li>
    
    </React.Fragment>
  )
}

export default CardDish