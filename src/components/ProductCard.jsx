import React from 'react'

const ProductCard = ({ item }) => {
  return (
    <div className=' my-2 p-5 break-inside-avoid border rounded-xl border-[#dee2e6] '>
      <div className='flex items-center pb-2'>
        <img className='object-center h-10 rounded-full w-10 object-cover' src={item?.images[0]} alt="" />
        <div>
          <h1 className='text-lg font-semibold'>{item?.brand}</h1>
        </div>
      </div>
      <p className='text-sm text-gray-500'>{item?.description}</p>
    </div>
  )
}

export default ProductCard
