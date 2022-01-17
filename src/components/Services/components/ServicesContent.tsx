import React, { FC } from 'react'
import Button from '../../Button';

import './ServicesContent.scss'

const ServicesContent : FC = () => {
    const className = 'servicescontent';
    const paragraph = "A recording studio is a specialized facility for sound recording, mixing, and audio production of instrumental or vocal musical performances, spoken words, and other sounds. The story of On The Move Studios is the story of recorded music. In 1929, when recordings were still being made acoustically through a large wooden horn and a wax disc, the Gramophone Company were looking for a location to dedicate to this new industry. They found a nine-bedroom house with a large garden for sale in St John’s Wood, North West London, and bought it for £16,500 before spending two years building the world’s first purpose-built recording studio."
    return (
        <div className={className}>
            <p className={`${className}_subtitle`}>UNLEASHING SOUND IN THE VALLEY DOWNTOWN</p>
            <h1 className={`${className}_title`}>
                Our Services
            </h1>
            
        </div>
    )
}

export default ServicesContent
