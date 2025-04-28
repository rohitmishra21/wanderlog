import React from 'react'
import Heading from './Heading'
import { AdeventureData } from '../utils/config'
import AdventureCard from './AdventureCard'
import ComboBtn from './ComboBtn'

const AdventureFeed = () => {
    return (
        <div className='md:px-32 md:py-20'>
            <Heading bigHead={"Find your next adventure"} subHead={"Browse through itineraries and guides crafted by fellow travelers. Get inspired by real experiences and detailed plans for your next adventure."} />
            <div className='flex gap-2 justify-between'>

                {AdeventureData.map((data) => (
                    <AdventureCard key={data.id} data={data} />
                ))}
            </div>
            <div className='py-10'>
                <ComboBtn />
            </div>
        </div>
    )
}

export default AdventureFeed
