import React from "react";

const SubFooter = () => {
    const footerData = [
        {
            title: "Top 20 Cities",
            items: [
                "New York City", "London", "Paris", "Rome", "Barcelona",
                "Orlando", "Amsterdam", "Madrid", "Rio de Janeiro", "Las Vegas",
                "Singapore", "Berlin", "Bangkok", "Prague", "Lisbon",
                "Buenos Aires", "San Francisco", "Istanbul", "Sao Paulo", "Budapest",
            ],
        },
        {
            title: "Top 20 parks & nature",
            items: [
                "Banff National Park", "Grand Canyon National Park", "Yellowstone National Park", "Yosemite National Park", "Arenal Volcano National Park",
                "Jasper National Park", "Table Mountain National Park", "Parque Nacional del Iguazu", "Zion National Park", "Peak District National Park",
                "Death Valley National Park", "Snowdonia National Park", "Great Smoky Mountains National Park", "New Forest National Park", "Bryce Canyon National Park",
                "Plitvice Lakes National Park", "Dartmoor National Park", "Chapada dos Veadeiros", "Haleakala National Park", "Hawaii Volcanoes National Park",
            ],
        },
        {
            title: "Top 20 attractions",
            items: [
                "Anne Frank House", "Park Güell", "Tower of London", "Saint Mark's Basilica", "Navy Pier",
                "Colosseum", "Ryman Auditorium", "Fenway Park", "The National WWII Museum", "Space Needle",
                "Alfama", "Gardens by the Bay", "Denver Botanic Gardens", "Barton Springs Municipal Pool", "Little Havana",
                "Edinburgh Castle", "Sydney Opera House", "Hofburg", "St. Stephen's Basilica", "Brandenburg Gate",
            ],
        },
    ];

    return (
        <footer className="py-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {footerData.map((section, index) => (
                    <div key={index}>
                        <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                        <ul className="space-y-2">
                            {section.items.map((item, idx) => (
                                <li key={idx} className="text-gray-700 hover:text-gray-900 cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default SubFooter;
