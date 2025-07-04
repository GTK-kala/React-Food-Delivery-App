import {assets} from '../../assets/frontend_assets/assets'
import './NavBar.css'
import { useState } from 'react' 

const NavBar = () => {
  const [click, setClick] = useState('Home');

  return (
    <div className='navbar'>
        <img src={assets.logo} className='logo' />
        <ul className="navbar-menu" >
          <li className={click === "Home" ? 'active' : ''} onClick={() =>setClick('Home')}>Home</li>
          <li className={click === "Menu" ? 'active' : ''} onClick={() =>setClick('Menu')}>Menu</li>
          <li className={click === "Mobile-App" ? 'active' : ''} onClick={() =>setClick('Mobile-App')}>Mobile-App</li>
          <li className={click === "Contact" ? 'active' : ''} onClick={() =>setClick('Contact')}>Contact</li>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} />
          <div className="navbar-serch-icon">
           <img src={assets.basket_icon} />
           <div className="dot"></div>
          </div>
          <button>Sign in</button>
        </div>
    </div>
  )
}

export default NavBar