import React from 'react';
import './Plan.css';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

const Plan = () => {
  return (
    <div className='plan-container' id="plans">
    <div className='blur plans-b1'></div>
    <div className='blur plans-b2'></div>
      <div className='program-header' style={{ gap: '2rem' }}>
        <span className='stroke-text'>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className='stroke-text'>NOW WITH US</span>
      </div>
      {/* cards */}
      <div className='plans'>
        {plansData.map((plan, index) => (
          <div className='plan' key={index}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>${plan.price}</span>
            <div className='features'>
              {plan.features.map((feature, subIndex) => (
                <div className='feature' key={subIndex}>
                  <img src={whiteTick} alt='' />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits</span>
            </div>
                <button className='btn'>Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
