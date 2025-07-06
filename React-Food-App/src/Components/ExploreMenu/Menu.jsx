import './Menu.css'
import { menu_list } from '../../assets/frontend_assets/assets'

const Menu = ({category, setCategory}) => {
  return (
    <div className='menu' id='menu'>
        <h1>Explore our menu</h1>
        <p className="menu-text">Choose from a diverse menu featuring delectable array of dishes.Our mission is to satisfy your cravings and elevate your dining experience.one delicious meal at a time</p>
        <div className="menu-list">
            {
            menu_list.map((item,i) => {
                return (
                    <div className="menu-items" onClick={() => setCategory(prev=> prev === item.menu_name ? 'All' : item.menu_name)} key={i}>
                        <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} alt={item.name} />
                        <p>{item.menu_name}</p>
                    </div>
                 )
              })
             }
        </div>
      <hr />
    </div>
  )
}

export default Menu