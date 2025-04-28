import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles.css';
import { Pagination } from 'swiper/modules';
import { Collaborate_DATA_ARR } from '../utils/config';
import ComboBtn from './ComboBtn';

const ColloborateSlider = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <>
            <Swiper
                slidesPerView={7.5}
                spaceBetween={20}
                modules={[Pagination]}
                className="mySwiper"
            >
                {Collaborate_DATA_ARR.map((data, i) => (
                    <SwiperSlide key={i}>
                        <div
                            className="cursor-pointer flex flex-col items-center"
                            onClick={() => setSelectedIndex(i)}
                        >
                            <h1 className="text-3xl font-bold">{data?.icon && <data.icon />}</h1>
                            <p className="py-5 text-sm">{data.iconName}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="img-contaner h-screen">
                <h1 className="py-10 text-center">
                    Track your flight status in real time
                </h1>
                <img
                    className="object-cover"
                    src={Collaborate_DATA_ARR[selectedIndex]?.ImgSrc}
                    alt="Selected"
                />
            </div>

            <div className="md:py-10">
                <ComboBtn />
            </div>
        </>
    );
};

export default ColloborateSlider;
