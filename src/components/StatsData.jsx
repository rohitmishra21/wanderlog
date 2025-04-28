import React from 'react'
import { STARS_DATA } from '../utils/config'
import { IoStar } from "react-icons/io5";
const StatsData = () => {
    return (
        <div className='flex justify-between gap-8 items-center my-16'>
            {STARS_DATA.map((data) => (
                <div key={data.id} className='text-center '>
                    <div className='flex items-center justify-center  font-bold text-blue-700'>
                        <h1 className=' text-5xl'>  {data.title}</h1>
                        <h1 className='text-xl'> {data.icon && <IoStar />}</h1>
                    </div>
                    <p className='mb-3 font-bold'>{data.subtitle}</p>
                    <p>{data.description}</p>
                </div>
            ))}
        </div>
    )
}

export default StatsData
