import React from 'react'
import { ProFeaturesData } from '../utils/config'

const ProFeatures = () => {
    return (
        <div className='flex md:px-36 flex-wrap gap-4 '>
            {ProFeaturesData.map((data) => (
                <div className='bg-[#F3F4F5] rounded-xl w-96 p-5' key={data.id}>
                    <h1 className='text-3xl font-bold'><data.icon /></h1>
                    <h1 className='text-xl py-4 font-bold'>{data.title}</h1>
                    <p className='text-sm'>{data.description}</p>
                </div>
            ))}
        </div>
    )
}

export default ProFeatures
