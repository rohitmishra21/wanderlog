import React from 'react';
import Heading from './Heading';
import { IoStar } from "react-icons/io5";
import GoogleBtn from './GoogleBtn';

const ItineraryIntro = () => {
    const imgClass = 'w-9 h-9 rounded-full object-cover';

    const users = [
        "https://wanderlog.com/p/images/66eab7227e361a67150e2e19_Ellipse%202.png",
        "https://wanderlog.com/p/images/66eab722194f8ba08ab23bb4_Ellipse%205.png",
        "https://wanderlog.com/p/images/66eab72294fdca03dcfe22a4_Ellipse%201.png",
        "https://wanderlog.com/p/images/66eab72279f294b409c3e3f3_Ellipse%203.png"
    ];

    return (
        <div>
            <Heading bigHead={"Create your ultimate travel itinerary"} />

            <div className='flex justify-center'>
                <div className='px-4 flex items-center border border-[#dee2e6] rounded-xl p-3 gap-6'>
                    <div className='flex'>
                        {users.map((src, index) => (
                            <img key={index} className={imgClass} src={src} alt="user" />
                        ))}
                    </div>

                    <div>
                        <h1 className='text-sm'>
                            <span className='font-bold mx-1'>4.9</span>on App Store,
                            <span className='font-bold mx-1'>4.7</span>on Google Play
                        </h1>
                        <div className='flex text-xl text-gray-500'>
                            {[...Array(5)].map((_, index) => (
                                <IoStar key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center py-14'>
                <GoogleBtn />
            </div>
        </div>
    );
};

export default ItineraryIntro;
