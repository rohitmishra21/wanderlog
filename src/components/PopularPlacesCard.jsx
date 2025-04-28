import React from 'react'

const PopularPlacesCard = ({ img, text, title }) => {
    return (
        <div className="relative w-full h-96 object-conver rounded-xl overflow-hidden">
            <img className='h-full hover:scale-105 duration-300 transition-all w-full object-cover' src={img} alt="" />
            <div className='absolute  h-32 py-4 px-6 bottom-0 left-0'>
                <h1 className='text-3xl text-white font-bold'>{title}</h1>
                <h1 className='text-white font-semibold'>{text}</h1>

            </div>

        </div>
    )
}

export default PopularPlacesCard
