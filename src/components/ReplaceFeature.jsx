import React from 'react';
import { ReplaceCardData } from '../utils/config';
import ReplaceFetureCard from './ReplaceFetureCard';
import ComboBtn from './ComboBtn';
import Heading from './Heading';

const ReplaceFeature = () => {
    return (
        <div className="px-4  md:px-32   py-16">
            <Heading bigHead={"   Features to replace all your other tools"} />

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
