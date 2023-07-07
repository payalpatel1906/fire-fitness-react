import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instragram from "../../assets/instagram.png"
import Linkedin from "../../assets/linkedin.png"
import logo from '../../assets/firefitnesslogo.png'
const Footer = () => {
  return (
    <div className='footer-c'>
    <hr/>
    <div className='footer'>
    <div className='social-n'>
        <img src={Github} alt=""/>
        <img src={Instragram} alt=""/>
        <img src={Linkedin} alt=""/>
        
    </div>
    <div className='logo-f'>
    <img src={logo} alt=""/>
    </div>
    </div>
    <div className='blur foter-b1'></div>
    <div className='blur foter-b2'></div>
    </div>
  )
}

export default Footer