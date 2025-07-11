import { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {
    const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display-container'>
        {
            food_list.map((item , i) =>{
              if(category ===  'All' || category === item.category){
                return <FoodItem key={i} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image} />
              }
            })
        }
      </div>
    </div>
  )
}

export default FoodDisplay