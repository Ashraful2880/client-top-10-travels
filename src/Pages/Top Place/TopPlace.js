import React, { useState } from 'react';
import { useEffect } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const TopPlace = () => {
    const [places, setPlaces]=useState([]);
    useEffect(()=>{
        fetch('https://young-meadow-11819.herokuapp.com/topPlace')
        .then(res=>res.json())
        .then(data=>setPlaces(data))
    },[])

    return (
        <div className="container xl:w-full w-11/12 mx-auto pt-8">
        <div className="xl:flex lg:flex md:flex sm:flex flex-wrap justify-evenly pt-12 mx-1">
        {
            places.map(place=>
                <div className="xl:w-4/12 lg:w-2/4 md:w-2/5 sm:w-2/5 max-w-sm mb-8 border-b border-gray-300 pb-6 mx-auto shadow-md" key={place._id}>
                    <div className="w-full rounded h-56">
                        <img src={place.url} alt="blog" className="object-cover h-full w-full overflow-hidden rounded shadow" />
                    </div>
                    <div className="text-left px-2">
                        <p className="text-gray-600 text-xl font-bold mt-4">{place.name}</p>
                        <p className="text-gray-600 text-lg font-bold">Cost: ${place.cost}</p>
                        <p className="text-gray-600 pb-1 italic">{place.date}</p>
                        <Rating className="mb-2 text-yellow-500" readonly emptySymbol="far fa-star" fullSymbol="fas fa-star" initialRating={place.rating}>
                        </Rating>
                        <p className="text-sm text-gray-600 leading-6 font-normal">{place.description}</p>
                        <Link to="/home">
                            <button className="bg-indigo-700 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg mt-4">Explore</button>
                        </Link>
                    </div>
                </div>
                )
        }
        </div>
    </div>
                    
    );
};

export default TopPlace;