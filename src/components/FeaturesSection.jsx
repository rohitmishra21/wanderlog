import React, { useState } from 'react'
import MasonaryGrid from './MasonaryGrid'

const FeaturesSection = () => {
    const [isShow, setIsShow] = useState(false)

    return (
        <div className=' md:px-52'>
            <div className='text-center'>
                <h1 className='text-3xl mt-32 font-semibold'>What travelers are raving about</h1>
                <h3 className='my-3'>
                    Over 1 million people have already tried Wanderlog and loved its easy trip <br />
                    planning features.
                </h3>
            </div>

            <div className={`${isShow ? 'overflow-visible h-auto' : 'overflow-hidden h-[200vh] md:h-[80vh]'}`}>
                <MasonaryGrid />
            </div>

            <div className='text-center py-16 font-bold text-slate-700'>
                <button
                    onClick={() => setIsShow((p) => !p)}
                    className='cursor-pointer hover:text-blue-800 py-6'
                >
                    {isShow ? "Show Less Reviews" : "See More Reviews"}
                </button>
            </div>
        </div>
    )
}

export default FeaturesSection
