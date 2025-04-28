import React from 'react';

const CityCard = ({ name, attractions }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-4">{name}</h2>
            <ul className="list-disc list-inside text-gray-600">
                {attractions.map((place, idx) => (
                    <li key={idx}>{place}</li>
                ))}
            </ul>
        </div>
    );
};

export default CityCard;