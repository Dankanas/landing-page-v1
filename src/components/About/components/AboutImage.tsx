import React , { FC } from 'react'

import './AboutImage.scss'

import image from '../../../assets/Images/pic1.jpg';

const AboutImage : FC  = () => {
    const className = 'aboutimage';
    return (
        <div className={className}>
            <img src={image} className={`${className}_img`} width="1000"/>
        </div>
    )
}

export default AboutImage
