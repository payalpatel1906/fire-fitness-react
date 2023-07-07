import React from 'react'
import './First.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from'../../assets/calories.png';
import v1 from '../../video/v1.mp4';
import {motion} from 'framer-motion';


const First = () => {
  const transition ={type :'spring',duration :3};
  return (
    <div className="first" id='home'>
    <div className='blur first-bl'></div>
    <div className='left-part'>

    <Header/>
    <div className='add'>
     <motion.div
      initial={{left:"238px"}}
      whileInView={{left:"8px"}}
      transition={{...transition,type:'tween'}}>
     </motion.div>
     <span>The Best Gym is Fire Fitness Gym</span>   
    </div>
    {/* heading name */}
    <div className='text-head'>
   <div>
    <span className='stroke-text'>Shape </span>
    <span>Your</span>
   </div>
   <div>
    <span>Ideal Body</span>
   </div>
   <div className='span'><span>
   IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND LIVE UP YOUR LIFE TO FULLEST.
   </span>
   </div>
    </div>
    <div className='figures'>
      <div>
        <span>+150</span>
        <span>Expert Coachs</span>
      </div>
      <div>
      <span>+600</span>
      <span>Members Join</span>
      </div>
      <div>
      <span>+50</span>
      <span>fitness Programs</span>
      </div>
    </div>
    <div className='first-button'>
    <button className='btn'>GET STARTED</button>
    <button className='btn'>LEARN MORE</button>

    </div>
    </div>
    <div className='right-part'>
    
    <button className='btn'>Join Now</button>
    {/* <div className='heart-rate'>
      <img src={Heart} alt=""/>
      <span>Heart Rate</span>
      <span>116 Bpm</span>
    </div> */}
    {/* first images  */}
    {/* <img src={hero_image} alt="" className='hero-images'/> */}
    
        
       <video src={v1} autoPlay loop muted className='vid'/>
       <img src={hero_image_back} alt="" className='hero-back-img'/>
   
{/* calery */}
<div className='calories'>
  <img src={Calories} alt="" />
  <div>
  <span>Calories Burend</span>
  <span>220 kcal</span>
  </div>
</div>

    </div>
    </div>
  )
}

export default First