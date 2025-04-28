import React from 'react'
import Slide from './Slide'
import StatsData from './StatsData'
import Heading from './Heading'

const RecomendedSection = () => {
    return (
        <div className='bg-[#EBEDFC] py-16'>
            <Heading bigHead={"Recommended by the press"} subHead={"Leading companies and media outlets are talking about Wanderlog. Discover why we re their top choice for travel planning."} />

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
