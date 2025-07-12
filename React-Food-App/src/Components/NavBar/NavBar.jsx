import {assets} from '../../assets/frontend_assets/assets'
import './NavBar.css'
import { useState } from 'react' 
import { Link } from 'react-router-dom'

const NavBar = ({setShowLogin}) => {
  const [click, setClick] = useState('Home');

  return (
    <div className='navbar'>
       <Link to="/"><img src={assets.logo} className='logo' /></Link>
        <ul className="navbar-menu" >
          <Link to={'/'} className={click === "Home" ? 'active' : ''} onClick={() =>setClick('Home')}>Home</Link>
          <a href='#menu' className={click === "Menu" ? 'active' : ''} onClick={() =>setClick('Menu')}>Menu</a>
          <a href='#app-download' className={click === "Mobile-App" ? 'active' : ''} onClick={() =>setClick('Mobile-App')}>Mobile-App</a>
          <a href='#footer' className={click === "Contact" ? 'active' : ''} onClick={() =>setClick('Contact')}>Contact</a>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} />
          <div className="navbar-serch-icon">
         <Link to="/cart"><img src={assets.basket_icon} /></Link>
           <div className="dot"></div>
          </div>
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        </div>
    </div>
  )
}

export default NavBar