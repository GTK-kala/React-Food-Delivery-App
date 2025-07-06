import {assets} from '../../assets/frontend_assets/assets'
import './NavBar.css'
import { useState } from 'react' 
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [click, setClick] = useState('Home');

  return (
    <div className='navbar'>
       <Link to="/"><img src={assets.logo} className='logo' /></Link>
        <ul className="navbar-menu" >
          <li className={click === "Home" ? 'active' : ''} onClick={() =>setClick('Home')}><Link to="/">Home</Link></li>
          <li className={click === "Menu" ? 'active' : ''} onClick={() =>setClick('Menu')}><Link to="/menu">Menu</Link></li>
          <li className={click === "Mobile-App" ? 'active' : ''} onClick={() =>setClick('Mobile-App')}><Link to="/mobile-app">Mobile-App</Link></li>
          <li className={click === "Contact" ? 'active' : ''} onClick={() =>setClick('Contact')}><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} />
          <div className="navbar-serch-icon">
         <Link to="/cart"><img src={assets.basket_icon} /></Link>
           <div className="dot"></div>
          </div>
          <button>Sign in</button>
        </div>
    </div>
  )
}

export default NavBar