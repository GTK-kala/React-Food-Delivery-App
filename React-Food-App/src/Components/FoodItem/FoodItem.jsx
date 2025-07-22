import { assets } from '../../assets/frontend_assets/assets'
import { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext';
import './FoodItem.css'

const FoodItem = ({id, name, price, description, image}) => {

   const { cartItems , AddToCart, RemoveFromCart } = useContext(StoreContext);

  return (
    <div className='food-item' >
      <div className='food-item-container'>
        <img className='food-item-img' src={image} alt={name} />
        {!cartItems[id] 
         ?<img className='add' src={assets.add_icon_white} alt="Add to Cart" onClick={() => AddToCart(id)} />
         :<div className='item-count'>
          <img src={assets.remove_icon_red} alt="" onClick={() => RemoveFromCart(id)} />
          <p>{cartItems[id]}</p>
          <img src={assets.add_icon_green} alt="" onClick={() => AddToCart(id)} />
         </div>
        }
      </div>
        <div className='food-item-info'>
        <div className='food-item-name-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts}  alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">$ {price}</p>
        </div>
    </div>
  )
}

export default FoodItem