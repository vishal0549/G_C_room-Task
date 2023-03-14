import React from 'react'
import Card from './Card'
import pic from '../assets/rocket.png';
import pic1 from '../assets/landing-page.png';
import pic2 from '../assets/group.png';

const Social = () => {
  return (
    <div className='social-container'>
        <Card pic={pic} title="2,500" detail="enterprise orgainzations sucessfull launched" />
        <Card pic={pic1} title="45,000" detail="enterprise users onboarded seamlessly" />
        <Card pic={pic2} title="200,000+" detail="professionals trained on product and strategy" />
    </div>
  )
}

export default Social