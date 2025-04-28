import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
const AdventureCard = ({ data }) => {

    return (
        <div className='w-80 overflow-hidden rounded-xl'>
            <img className='w-96 h-96  ' src={data.cardImg} alt="" />
            <h1 className='font-bold py-1'>{data.title.split(" ").slice(0, 5).join(" ")}</h1>
            <h1 className='text-sm text-gray-500 font-medium'>{data.description.split(" ").slice(0, 15).join(" ")}</h1>
            <div className='flex gap-2 py-4 items-center'>
                <img className='w-10 h-10 rounded-full  object-cover' src={data.userImg} alt="" />
                <div className=''>
                    <h1 className='font-bold'>{data.userName}</h1>
                    <div className='flex gap-3 items-center'>
                        <h2 className='text-sm gap-1 flex items-center'><CiHeart /> {data.likes}</h2>
                        <h2 className='text-sm gap-1 flex items-center'><FaEye />{data.comments}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdventureCard
