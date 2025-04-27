import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import VideoContainer from './VideoContainer';

const HeroSection = () => {
    return (
        <div className="min-h-screen">
            <div className="text-center h-96 flex flex-col justify-end py-10 items-center gap-7">
                <h1 className="text-5xl font-bold">One app for all your travel planning needs</h1>
                <h3>
                    Create detailed itineraries, explore user-shared guides, and manage your
                    <br />
                    bookings seamlessly — all in one place.
                </h3>
                <div className="flex items-center">
                    <Button text="Start planning" />
                    <Link
                        to="/get-app"
                        className="flex items-center font-semibold ml-5 hover:text-blue-800 transition-all duration-300"
                    >
                        Get the app
                        <FaArrowRight className="ml-2" />
                    </Link>
                </div>
            </div>

            <div>
                <VideoContainer />
            </div>

            <div className="text-center my-5">
                <h1 className="text-2xl">Your itinerary and your map in one view</h1>
                <h4>
                    No more switching between different apps, tabs, and tools to keep track of your
                    <br />
                    travel plans.
                </h4>
            </div>
        </div>
    );
};

export default HeroSection;
