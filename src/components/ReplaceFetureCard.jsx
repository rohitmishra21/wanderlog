import React from 'react'

const ReplaceFetureCard = ({ data }) => {
    return (
        <div className='w-96'>
            <div className='overflow-hidden border rounded-xl border-[#dee2e6]'><img src={data.img} alt="" /></div>
            <h1 className='font-bold my-2'>{data.title}</h1>
            <p className='text-zinc-700 text-sm'>{data.description}</p>
        </div>
    )
}

export default ReplaceFetureCard
