
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'

function Footer() {
    return(
        <div>
  <footer className="footer pb-5">
    <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>
    <ul className="social-icon">
      <li className="social-icon__item"><a className="social-icon__link" href="#">
        <FaFacebook />
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
        <FaTwitter />
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
        <FaLinkedin />
        </a></li>
      <li className="social-icon__item"><a className="social-icon__link" href="#">
        <FaInstagram />
        </a></li>
    </ul>
    <ul className="menu">
      <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
      <li className="menu__item"><a className="menu__link" href="#">About</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Services</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
      <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>
    </ul>
    <p>&copy;2021 Nadine Coelho | All Rights Reserved</p>
  </footer>
          </div>
    )
}

export default Footer