import React from 'react'
import { IoSearch } from "react-icons/io5";

const InputBox = () => {
    return (
        <div className='border-2 border-[#dee2e6] text-[#6c757d] py-3 px-4 flex rounded-xl items-center gap-2'>
            <IoSearch size={20} />
            <input className='outline-none border-none' placeholder='Explore by destination' type="text" />
        </div>
    )
}

export default InputBox
