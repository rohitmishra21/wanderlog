import React from 'react'
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles.css';
import { Pagination } from 'swiper/modules';
import { SLIDECARD_DATA } from '../utils/config';

const Slide = () => {
    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                modules={[Pagination]}
                className="mySwiper"
            >
                {SLIDECARD_DATA.map((data) => (
                    <SwiperSlide className='p-2' key={data.id}>
                        <div className=''>
                            <img className='object-cover w-52' src={data?.source} alt="" />
                            <p className='py-5'>{data.quote}</p>
                            <div className='flex items-center gap-4'>
                                <h1>{data?.author}</h1>
                                <span className='text-blue-600'>{data?.link}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slide
