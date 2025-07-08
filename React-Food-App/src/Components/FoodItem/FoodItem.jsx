import { assets } from '../../assets/frontend_assets/assets'
import { useState } from 'react'
import './FoodItem.css'

const FoodItem = ({id, name, description, price, image}) => {

  const [itemCount, setItemCount] = useState(0);

  return (
    <div className='food-item' id={id}>
      <div className='food-item-container'>
        <img className='food-item-img' src={image} alt={name} />
        {!itemCount ?
         <img className='add' src={assets.add_icon_white} alt="Add to Cart" onClick={() => setItemCount(prev => prev + 1)} />
         : <div className='item-count'>
          <img src={assets.remove_icon_red} alt="" onClick={() => setItemCount(prev => prev - 1)} />
          <p>{itemCount}</p>
          <img src={assets.add_icon_green} alt="" onClick={() => setItemCount(prev => prev + 1)} />
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