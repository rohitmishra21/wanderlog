import React from 'react'
import useFetchData from '../Hooks/useFetchData'
import ProductCard from './ProductCard';

const MasonaryGrid = () => {
    const data = useFetchData()


    return (
        <div className=' my-20 md:columns-4'>
            {data && data.map((item) => (
                <ProductCard key={item?.id} item={item} />
            ))}
        </div>
    )
}

export default MasonaryGrid
