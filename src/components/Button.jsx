import React from 'react'

const Button = ({ text }) => {
    return (
        <div className='bg-[#f75940] inline px-4 md:px-10 py-3 rounded-full'>
            <button className='text-white font-bold  text-sm'>{text}</button>
        </div>
    )
}

export default Button
