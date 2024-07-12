import { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { StoreContext } from '../../Context/CreateContext'

const FoodItem = ({id ,name ,price , description , image}) => {

  const { addToCart,removeFromCart ,cartItems }= useContext(StoreContext)

console.log(cartItems)
  return (
    <div className='food-item'>
    <div className='food-item-image-container'>
        <img className='food-item-image' src={image} alt=''/>
        {
           !cartItems[id]?
          <img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=''/>
        : 
        <div className='food-item-counter'>
        <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=''/>
          <p>{cartItems[id]}</p>
        <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red } alt=''/>
        </div>
        } 

        
    </div>
    <div className='food-item-info'>
        <div className='food-item-name-rating'>
            <p >{name}</p>
            <img src={assets.rating_starts} alt=''/>
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>${price}</p>
    </div>
</div>
  )
}

export default FoodItem