import React from 'react'
import '../stylesheets/Hero.css'

const Hero = ({imageSrc}) => {
    return (
        <div>
            <div className='hero'>
                <img src={imageSrc} alt='Travel' className='hero__image' />
                <h1 className='hero__title'>Travel made simple.</h1> 
            </div>
        </div>
    )
}

export default Hero
