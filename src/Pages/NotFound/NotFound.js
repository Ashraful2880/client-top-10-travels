import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
            <div className="w-full lg:w-1/2">
                <img className="hidden lg:block" src="https://i.ibb.co/DpgPTFr/lg-Not-Found.png" alt="404Image"/>
                <img className="hidden md:block lg:hidden" src="https://i.ibb.co/ryRHvqy/md-Not-Found.png" alt="404Image"/>
            <img className="md:hidden" src="https://i.ibb.co/rfFYDHz/404-image.png" alt="404Image"/>
            </div>
            <div className="w-full lg:w-1/2 text-left">
                <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800">Looks like you've found the doorway to the great nothing</h1>
                <p className="py-4 text-base text-gray-800">The content you’re looking for doesn’t exist. Either it was removed, or you mistyped the link.</p>
                <p className="py-2 text-base text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
                <Link to="/home">
                    <button className="w-full lg:w-auto my-4 border rounded-md px-1 sm:px-16 py-5 bg-indigo-600 text-white hover:bg-indigo-700">Go back to Homepage</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;