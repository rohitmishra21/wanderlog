import React from 'react'
import Slide from './Slide'
import StatsData from './StatsData'

const RecomendedSection = () => {
    return (
        <div className='bg-[#EBEDFC] py-16'>

            <div className='my-9 text-center'>
                <h1 className='text-4xl my-6 font-bold'>Recommended by the press</h1>
                <p className='text-gray-600 text-lg'>Leading companies and media outlets are talking about Wanderlog. <br />
                    Discover why we're their top choice for travel planning.
                </p>
            </div>
            <div className=''>
                <Slide />
            </div>
            <div>
                <StatsData />
            </div>
        </div>
    )
}

export default RecomendedSection
