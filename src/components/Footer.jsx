import React from "react";
import GoogleBtn from "./GoogleBtn";

const Footer = () => {
    const wanderlogLinks = [
        "Hotels", "Blog", "Report security issue", "Terms, Privacy policy & Copyright",
        "Mobile app", "Browser extension", "Travel budgeting & cost tracking",
        "Jobs", "Contact us", "Google data disclosure", "How to embed a map on your travel blog",
    ];

    const guideLinks = [
        "Trip planners by destination", "Explore cities and countries", "Road trips by destination",
        "Best places to visit by category", "Popular search terms by destination",
        "Weather around the world", "Travel questions & answers", "Travel itinerary guides",
        "Maps of cities and national parks", "Destinations at different times of the year",
        "Places to visit by destination",
    ];

    return (
        <footer className="bg-gray-100 py-10">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

                <div className="flex flex-col space-y-2 text-gray-700">
                    <p>Made with <span className="text-black">♥</span> from SF & more ©</p>
                    <p>2022 Travelchime Inc.</p>
                </div>


                <div>
                    <h4 className="text-lg font-semibold mb-4">Wanderlog</h4>
                    <ul className="space-y-2">
                        {wanderlogLinks.map((link, idx) => (
                            <li key={idx} className="text-gray-700 hover:text-gray-900 cursor-pointer">
                                {link}
                            </li>
                        ))}
                    </ul>
                </div>


                <div>
                    <h4 className="text-lg font-semibold mb-4">Guide and resources</h4>
                    <ul className="space-y-2">
                        {guideLinks.map((link, idx) => (
                            <li key={idx} className="text-gray-700 hover:text-gray-900 cursor-pointer">
                                {link}
                            </li>
                        ))}
                    </ul>
                </div>


                <div>
                    <h4 className="text-lg font-semibold mb-4">Get the app</h4>
                    <div className="flex flex-col space-y-4">
                        <GoogleBtn />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
