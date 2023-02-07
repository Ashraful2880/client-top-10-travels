import React, { useState } from 'react';
import { useEffect } from 'react';
import Rating from 'react-rating';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { blogID } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_PATH}/details/${blogID}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);

    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
                <div className="w-full lg:w-6/12 text-left">
                    <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">
                        {details?.name}
                    </h2>
                    <p className="text-xl font-bold leading-6 text-gray-600 mt-4">Duration: {details?.duration}</p>
                    <p className="text-xl font-bold leading-6 text-gray-600 mt-2">Cost: {details?.cost}</p>
                    <Rating
                        className="mt-2 text-yellow-500"
                        readonly
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        initialRating={details.rating}>
                    </Rating>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">{details.description}</p>
                    <h4 className="mt-3 text-xl">By- {details.by}</h4>
                </div>
                <div className="w-full lg:w-6/12">
                    <img className="lg:block hidden w-full" src={details?.url} alt="blog images" />
                    <img className="lg:hidden sm:block hidden w-full" src={details?.url} alt="people discussing on board" />
                    <img className="sm:hidden block w-full" src={details?.url} alt="people discussing on board" />
                </div>
            </div>
        </div>
    );
};

export default Details;