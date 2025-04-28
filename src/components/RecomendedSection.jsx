import React from 'react'
import Slide from './Slide'
import StatsData from './StatsData'
import Heading from './Heading'

const RecomendedSection = () => {
    return (
        <div className='bg-[#EBEDFC] py-16'>
            <Heading bigHead={"Recommended by the press"} subHead={"Leading companies and media outlets are talking about Wanderlog. Discover why we re their top choice for travel planning."} />

            <div className=' md:px-52'>
                <Slide />
            </div>
            <div className=' md:px-52'>
                <StatsData />
            </div>
        </div>
    )
}

export default RecomendedSection
