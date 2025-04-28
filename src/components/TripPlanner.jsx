import React from 'react'
import { TravelData } from '../utils/config'

const TripPlanner = () => {
    return (
        <div>
            {TravelData.map((data) => (
                <div key={data.id} className='h-screen justify-center items-center md:flex-row flex-col flex'>
                    <div className='w-1/2'>
                        <img className='w-[80%] object-cover' src={data?.img} alt="" />
                    </div>
                    <div className='w-[60vh]'>
                        <h1 className='text-3xl py-9 font-bold'>{data?.title}</h1>
                        <p>{data?.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TripPlanner
