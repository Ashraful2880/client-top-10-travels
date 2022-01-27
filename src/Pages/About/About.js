import React from 'react';

const About = () => {
    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
                <div className="w-full lg:w-6/12 text-left">
                    <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">
                        We are here to make a better Journey for everyone. Lets go travel with us.
                    </h2>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire,</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire,</p>
                </div>
                <div className="w-full lg:w-6/12">
                    <img className="lg:block hidden w-full" src="https://i.ibb.co/d2SN01L/about-us.png" alt="people discussing on board" />
                    <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/S608ZN2/md-about-us.png" alt="people discussing on board" />
                    <img className="sm:hidden block w-full" src="https://i.ibb.co/S608ZN2/md-about-us.png" alt="people discussing on board" />
                </div>
            </div>
            <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4 mt-12">
                <div>
                    <i className="fas fa-car-side text-2xl text-indigo-700 ring-2 ring-indigo-700 p-2 rounded-full hover:bg-indigo-700 hover:text-white"></i>
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">WE OFFER DAILY TOURS</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6 mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div>
                    <i className="fas fa-plane-departure text-2xl text-indigo-700 ring-2 ring-indigo-700 p-2 rounded-full hover:bg-indigo-700 hover:text-white"></i>
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">NEW DESTINATIONS</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                <div className="sm:block hidden">
                    <i className="far fa-handshake text-2xl text-indigo-700 ring-2 ring-indigo-700 p-2 rounded-full hover:bg-indigo-700 hover:text-white"></i>
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-4">400k Satisfied Customer</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>
            <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                <div>
                    <i className="far fa-handshake text-2xl text-indigo-700 ring-2 ring-indigo-700 p-2 rounded-full hover:bg-indigo-700 hover:text-white"></i>
                    <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">400k Satisfied Customer</p>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </div>

            <div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between lg:mt-20 mt-16">
                <div className="w-full lg:w-6/12 text-left">
                    <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Mission</h2>
                    <p className="font-normal text-base leading-6 text-gray-600 mt-6 w-full lg:w-10/12 xl:w-9/12">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                    <p className="font-normal text-base leading-6 text-gray-600 w-full lg:w-10/12 xl:w-9/12 mt-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                </div>
                <div className="w-full lg:w-6/12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                        
                        <div className="flex p-4 shadow-md">
                            <div className="mr-6 text-2xl mt-4 text-indigo-600">
                                <i className="far fa-handshake"></i>
                            </div>
                            <div className="">
                                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Team</p>
                                <p className="mt-2 font-normal text-base leading-6 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>

                        
                        <div className="flex p-4 shadow-md">
                            <div className="mr-6">
                                <i className="fas fa-people-arrows text-2xl text-indigo-600"></i>
                            </div>
                            <div className="">
                                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Board</p>
                                <p className="mt-2 font-normal text-base leading-6 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>

                        
                        <div className="flex p-4 shadow-md">
                            <div className="mr-6 mt-6">
                                <i className="far fa-envelope text-2xl text-indigo-600"></i>
                            </div>
                            <div className="">
                                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800">Press</p>
                                <p className="mt-2 font-normal text-base leading-6 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    );
};

export default About;