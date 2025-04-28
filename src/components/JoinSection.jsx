import React from 'react'
import { APP_STORE_IMG, GOOGLE_STORE_IMG, PHONE_IMG } from '../utils/config'

const JoinSection = ({ btn }) => {
    return (
        <div className='h-screen  md:px-40 py-32 flex'>
            <div className='w-1/2 h-full'>
                <img src={PHONE_IMG} className='w-[80%] border border-[#dee2e6] rounded-xl object-cover' alt="" />
            </div>
            <div className='w-1/2 flex flex-col justify-center gap-4 h-full'>
                <h1 className='text-3xl font-bold'>Join Wanderlog</h1>
                <h3 className='text-lg'> Plan your itinerary, find lodging, and import reservations — all in one <br /> app.</h3>
                <div className='flex justify-start'>
                    {btn}
                </div>
            </div>
        </div>
    )
}

export default JoinSection
