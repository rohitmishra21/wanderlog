import React from 'react';
import VideoContainer from './VideoContainer';
import ComboBtn from './ComboBtn';

const HeroSection = () => {
    return (
        <div className="min-h-screen px-4 md:px-52">

            <div className="text-center h-[60vh] flex flex-col justify-end py-10 items-center gap-6">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                    One app for all your travel planning needs
                </h1>
                <h3 className="text-base md:text-lg text-gray-600">
                    Create detailed itineraries, explore user-shared guides, and manage your
                    <br className="hidden md:block" />
                    bookings seamlessly — all in one place.
                </h3>
                <ComboBtn />
            </div>


            <VideoContainer />

            <div className="text-center my-8 space-y-3 px-2">
                <h1 className="text-xl md:text-3xl font-semibold">
                    Your itinerary and your map in one view
                </h1>
                <h4 className="text-base md:text-lg text-gray-600">
                    No more switching between different apps, tabs, and tools to keep track of your
                    <br className="hidden md:block" />
                    travel plans.
                </h4>
            </div>
        </div>
    );
};

export default HeroSection;
