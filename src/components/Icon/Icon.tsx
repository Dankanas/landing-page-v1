import React , {FC } from 'react'

import MenuIcon from './components/Menu.icon';
import CloseIcon from './components/Close.icon';
import MusicIcon from './components/Music.icon';
import ArrowIcon from './components/Arrow.icon';
import NextIcon from './components/Next.icon';
import PrevIcon from './components/Prev.icon';
import PlayIcon from './components/Play.icon';
import PauseIcon from './components/Pause.icon';
import FacebookIcon from './components/Facebook.icon';
import InstagramIcon from './components/Instagram.icon';

import './Icon.scss'

const Icon : FC<IconProps> = ({ name }: IconProps) => {
    const className= 'icon';
    switch (name) {
        case 'menu' :
        return (<div className={className}><MenuIcon/></div>)
        case 'close':
        return (<div className={className}><CloseIcon/></div>)   
        case 'music':
        return (<div className={className}><MusicIcon/></div>)  
        case 'arrow':
        return (<div className={className}><ArrowIcon/></div>)  
        case 'next':
        return (<div className={className}><NextIcon/></div>)
        case 'prev':
        return (<div className={className}><PrevIcon/></div>) 
        case 'play':
        return (<div className={className}><PlayIcon/></div>) 
        case 'pause':
        return (<div className={className}><PauseIcon/></div>) 
        case 'facebook':
        return (<div className={className}><FacebookIcon/></div>) 
        case 'instagram':
        return (<div className={className}><InstagramIcon/></div>)


    }
}

export default Icon

interface IconProps {
    name: IconName,
}

type IconName = 'menu' | 'close' | 'music' | 'arrow' | 'next' | 'prev' | 'play' | 'pause' | 'facebook' | 'instagram';


