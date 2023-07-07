import React from 'react'
import './Program.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
const Programs = () => {
  return (
    <div className='programs' id="programs">
        {/* header */}
        <div className='program-header'>
            <span className='stroke-text'>Explore our</span>
            <span>Programs</span>
            <span  className='stroke-text'>To shape you</span>
        </div>
        <div className='program-categories'>
            {programsData.map((program)=>
            (<div className='category'>
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className='join-now'>
                <span>join now</span>
                <img src={RightArrow}/>
            </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Programs