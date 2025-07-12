import {assets} from '../../assets/frontend_assets/assets'

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate natus debitis ad consequatur? Amet quae, recusandae quas consectetur, quasi culpa ducimus qui quaerat officiis neque, ipsum corporis veniam ad ullam.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="Instagram" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>CONTACT US</h2>
          <ul>
            <li>+251-910-0907-54</li>
            <li>gtkkala1110@gmail.com</li>
            </ul>
        </div> 
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 Food Delivery App. All rights reserved.</p>
    </div>
  )
}

export default Footer