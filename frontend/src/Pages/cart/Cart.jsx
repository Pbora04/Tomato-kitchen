import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './Cart.css'
import { StoreContext } from '../../Context/CreateContext'

const Cart = () => {
  const navigate = useNavigate()
 const {food_list , cartItems ,removeFromCart , getTotalCartAmount} = useContext(StoreContext) 
  return(
<div className='cart'>
<div className='cart-item'>
<div className='cart-item-title'>
   <ul>
    <p>Items</p>
    <p>Title</p>
    <p>Price</p>
    <p>Quantity </p>
    <p>Total</p>
    <p>Remove</p>
   </ul>
   <hr/>
</div>

  {
    food_list.map((items,index)=>{
      {/* console.log(cartItems[items._id]) */}
      if(cartItems[items._id] > 0){
        return(
        <div key={index}>
        <div className='cart-item-info'>
        <ul>
        <p><img src={items.image} alt=''/></p>
         <p>{items.name}</p>
         <p>{items.price}</p>
         <p>{cartItems[items._id]} </p>
         <p>{cartItems[items._id] * items.price}</p>
         <p onClick={()=>removeFromCart(items._id)}>x</p>
        </ul>
         <hr/>
        </div>
      </div>
       )}
    })
  }
  </div>

  <div className="cart-bottom">
  <div className="cart-total">
          <h2> Cart - Total </h2>
          <div>
            <div className="cart-total-details">
              <p>Sub-Total</p>
              <p>${  getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${   getTotalCartAmount()===0 ? 0:  getTotalCartAmount ()+2}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/order')}>Proceed To Checkout</button>
        </div>
        <div className="cart-promocode">
          <div>
           <p>If you have promocode,Enter it here</p>
           <div className="cart-promocode-input"><input type="text " placeholder="Promocode"/>
           <button>Apply Code</button>
           </div>
          </div>
        </div>
</div> 
</div>
 )
}

export default Cart