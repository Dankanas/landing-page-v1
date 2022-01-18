import React , { FC } from 'react'

import './GetStartedVideo.scss'
import PortraitVideo from '../../../assets/Video/video3.mp4'
import LandscapeVideo from '../../../assets/Video/video4.mp4'

const GetStartedVideo : FC  = () => {
    const className = 'get-started-video';
    return (
        <div className={className}>
            <video src={PortraitVideo} className={`${className}_video_portrait`} autoPlay muted loop/>
            <video src={LandscapeVideo} className={`${className}_video_landscape`} autoPlay muted loop/>
        </div>
    )
}

export default GetStartedVideo
