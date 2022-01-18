import React, { FC } from 'react'
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import AboutImage from './components/AboutImage';
import AboutContent from './components/AboutContent';

import './About.scss'
import { ApplicationState } from '../../store/types';

const About : FC = () => {
    const className = 'about';
    const isSidebarOpen = useSelector((state: ApplicationState) => state.isSidebarOpen);
    const classNameAbout = classNames(className, {"sidebar-open" : isSidebarOpen });
    return (
        <div className={classNameAbout} id="about">
            <div className={`${className}_container`}>
                <AboutContent/>
                <AboutImage/>
            </div>
        </div>
    )
}

export default About
