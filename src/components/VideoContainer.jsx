import React from 'react'
import { MapVidio } from '../utils/config'

const VideoContainer = () => {
    return (
        <div className='h-screen  mx-auto'>
            <video className='w-full h-full object-cover' autoPlay muted loop src={MapVidio}></video>
        </div>
    )
}

export default VideoContainer
