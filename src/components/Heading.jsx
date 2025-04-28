import React from 'react'

const Heading = ({ bigHead, subHead }) => {
    return (
        <div className='flex flex-col items-center py-10  gap-3'>

            <h1 className='text-4xl font-bold'>{bigHead}</h1>
            <p className='text-gray-600 text-center text-lg w-1/2'>
                {subHead}
            </p>

        </div>
    )
}

export default Heading
