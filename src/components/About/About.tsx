import React, { FC } from 'react'

import './About.scss'
import AboutImage from './components/AboutImage';
import AboutContent from './components/AboutContent';

const About : FC = () => {
    const className = 'about';
    return (
        <div className={className} id="about">
            <div className={`${className}_container`}>
                <AboutContent/>
                <AboutImage/>
            </div>
        </div>
    )
}

export default About
