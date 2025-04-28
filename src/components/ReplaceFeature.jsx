import React from 'react';
import { ReplaceCardData } from '../utils/config';
import ReplaceFetureCard from './ReplaceFetureCard';
import ComboBtn from './ComboBtn';

const ReplaceFeature = () => {
    return (
        <div className="px-4   py-16">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
                Features to replace all your other tools
            </h1>

            <div className="flex flex-wrap justify-center gap-8">
                {ReplaceCardData.map((data) => (
                    <ReplaceFetureCard key={data.id} data={data} />
                ))}
            </div>

            <div className="mt-16 flex justify-center">
                <ComboBtn />
            </div>
        </div>
    );
};

export default ReplaceFeature;
