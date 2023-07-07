import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/firefitnesslogo.png'
import Bars from '../../assets/bars.png'
import { Link } from 'react-scroll'
const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <div className='header'>

      <img src={Logo} alt="" className='logo' />
      {(menuOpened === false && mobile === true) ? (
        <div onClick={() => setMenuOpened(true)} style={{backgroundColor:"transparent",padding:"0.5rem",borderRadius:"5px"}}>
          <img src={Bars} alt="" style={{ marginLeft: "150px", width: "1.5rem", height: "1.5rem" }} />
        </div>
      ) : <ul className='header-menu'>
        <li >
          <Link to='home' onClick={() => setMenuOpened(false)}
            spy={true}
            smooth={true}>Home</Link></li>
        <li>
        <Link to='programs' onClick={() => setMenuOpened(false)}
          spy={true}
          smooth={true}>Programs</Link>
          </li>
        <li >
        <Link to='reasons' onClick={() => setMenuOpened(false)}
          spy={true}
          smooth={true}>Why us</Link>
          </li>
        <li >
        <Link to='plans' onClick={() => setMenuOpened(false)}
          spy={true}
          smooth={true}>Plans</Link>
          </li>
        <li >
        <Link to='testinomials' onClick={() => setMenuOpened(false)}
          spy={true}
          smooth={true}>Testimonials</Link>
          </li>
      </ul>}

    </div>

  )
}

export default Header