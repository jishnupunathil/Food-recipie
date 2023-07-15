import React from 'react'

const CardDish = (props) => {
  return (
    <React.Fragment>
    <li>
    <img src={props.menu.strMealThumb} alt='none' className='br-10'/>
    <h5>{props.menu.strMeal}</h5>
    </li>
    </React.Fragment>
  )
}

export default CardDish