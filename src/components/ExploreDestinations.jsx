import React from 'react'
import PopularPlacesCard from './PopularPlacesCard'
import { placesData } from '../utils/config'
const ExploreDestinations = () => {
    return (
        <div className='min-h-screen px-5'>
            <div className='text-3xl font-bold text-center py-20'>
                <h1>Explore hundreds of places to visit
                    <br />    for every corner of the world</h1>
            </div>

            <div className="flex flex-wrap gap-5 justify-between">
                {placesData.map((place, index) => (
                    <div
                        key={index}
                        className={place.size === "small" ? "w-96" : "w-[54vw]"}
                    >
                        <PopularPlacesCard
                            title={place.title}
                            text={place.text}
                            img={place.img}
                        />
                    </div>
                ))}
            </div>


            {/* <div className='flex gap-5 w-full justify-between'>
                <PopularPlacesCard text="Eiffel Tower · Louvre Museum · Notre-Dame Cathedral" title="Paris" img="https://wanderlog.com/p/images/66e9a04a24043fa9fcd9a0cd_66bd2d63d57b940bc1b11e26_img%20paris_explore_places.jpg" />
                <PopularPlacesCard text="Eiffel Tower · Louvre Museum · Notre-Dame Cathedral" title="Paris" img="https://wanderlog.com/p/images/66e9a04a24043fa9fcd9a0cd_66bd2d63d57b940bc1b11e26_img%20paris_explore_places.jpg" />
                <PopularPlacesCard text="Eiffel Tower · Louvre Museum · Notre-Dame Cathedral" title="Paris" img="https://wanderlog.com/p/images/66e9a04a24043fa9fcd9a0cd_66bd2d63d57b940bc1b11e26_img%20paris_explore_places.jpg" />
            </div>
            <div className='flex gap-5 h-96 my-5 justify-between'>
                <div className='w-96'>
                    <PopularPlacesCard text="Eiffel Tower · Louvre Museum · Notre-Dame Cathedral" title="Paris" img="https://wanderlog.com/p/images/66e9a04a24043fa9fcd9a0cd_66bd2d63d57b940bc1b11e26_img%20paris_explore_places.jpg" />
                </div>
                <div className='w-[54vw]'>
                    <PopularPlacesCard text="Eiffel Tower · Louvre Museum · Notre-Dame Cathedral" title="Paris" img="https://wanderlog.com/p/images/66e9a04a24043fa9fcd9a0cd_66bd2d63d57b940bc1b11e26_img%20paris_explore_places.jpg" />
                </div>

            </div>
            <div className='flex gap-5 h-96 my-5 justify-between'>
                <div className='w-[54vw]'>
                    <PopularPlacesCard text="Eiffel Tower · Louvre Museum · Notre-Dame Cathedral" title="Paris" img="https://wanderlog.com/p/images/66e9a04a24043fa9fcd9a0cd_66bd2d63d57b940bc1b11e26_img%20paris_explore_places.jpg" />
                </div>

                <div className='w-96'>
                    <PopularPlacesCard text="Eiffel Tower · Louvre Museum · Notre-Dame Cathedral" title="Paris" img="https://wanderlog.com/p/images/66e9a04a24043fa9fcd9a0cd_66bd2d63d57b940bc1b11e26_img%20paris_explore_places.jpg" />
                </div>

            </div> */}
        </div>
    )
}

export default ExploreDestinations
