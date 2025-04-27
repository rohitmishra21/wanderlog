import React from 'react'
import MasonaryGrid from './MasonaryGrid'

const FeaturesSection = () => {
    return (
        <div>
            <div className='text-center'><h1 className='text-3xl mt-32 font-semibold'>What travelers are raving about</h1>
                <h3 className='my-3'>Over 1 million people have already tried Wanderlog and loved its easy trip <br /> planning features.</h3></div>
            <MasonaryGrid />
        </div>
    )
}

export default FeaturesSection
