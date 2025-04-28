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
                className="mySwiper h-[400px]"
            >
                {SLIDECARD_DATA.map((data) => (
                    <SwiperSlide className='p-2 rounded-xl' key={data.id}>
                        <div className='h-[450px]  py-6 px-3 flex-col flex justify-between '>
                            <div>
                                <div className='h-12 '> <img className='h-full object-cover' src={data?.source} alt="" /></div>
                                <p className='py-5 text-slate-800'>{data.quote}</p>
                            </div>
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
