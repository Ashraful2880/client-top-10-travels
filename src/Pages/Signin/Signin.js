import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-cyan-400">
            <div className="xl:px-20 md:px-10 sm:px-6 px-4 md:py-12 py-9 2xl:mx-auto 2xl:container md:flex items-center justify-center">
                <div className=" md:hidden sm:mb-8 mb-6">
                   <img src="https://i.ibb.co/wMtdpzN/Main-Logo.png" alt="logo"/>
                </div>
                <div className="bg-white shadow-lg rounded xl:w-1/3 lg:w-5/12 md:w-1/2 w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
                    <p className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800 mb-4">Welcome back !!!</p>
                    <p className="focus:outline-none text-xl font-extrabold leading-6 text-gray-700 mb-6">Login To Your Account</p>
                    <img className="w-16 mx-auto mb-6" src="https://i.ibb.co/DQkTLN3/logo-2.png" alt="logo"/> 
                    <form>
                        <div>
                            <label 
                                htmlFor="email" 
                                className="text-sm font-medium leading-none text-gray-800"> 
                                    Email 
                            </label>
                            <input 
                                type="email" 
                                className="bg-gray-200 border rounded text-xs font-medium leading-none placeholder-gray-500 text-gray-800 py-3 w-full pl-3 mt-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" 
                                placeholder="example@gmail.com " />
                        </div>
                        <div className="mt-6 w-full">
                            <label htmlFor="myInput" className="text-sm font-medium leading-none text-gray-800"> Password </label>
                            <div className="relative flex items-center justify-center">
                                <input
                                    type="password" 
                                    className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400" 
                                    placeholder="Your Password"
                                />
                            </div>
                        </div>
                        <div className="mt-8">
                            <button type="submit" className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded-xl hover:bg-indigo-600 py-4 w-full">Login</button>
                        </div>
                    </form>
                    <p className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">Don't have account? 
                        <Link 
                            to="/register" 
                            className="ml-2 text-red-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none cursor-pointer">
                            Sign up here
                        </Link>
                    </p>
                </div>
                <div className="xl:w-1/3 md:w-1/2 lg:ml-16 ml-8 md:mt-0 mt-6">
                    <div className="pl-8 md:block hidden">
                        <img className="w-16" src="https://i.ibb.co/DQkTLN3/logo-2.png" alt="logo"/>
                        <img src="https://i.ibb.co/wMtdpzN/Main-Logo.png" alt="logo"/> 
                    </div>
                    <div className="flex items-start mt-8">
                        <div>
                           <i className="fas fa-quote-left"></i>
                        </div>
                        <p className="sm:text-2xl text-xl leading-7 text-gray-600 pl-2.5 text-left ml-4">Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears</p>
                    </div>
                    <div className="flex items-center pl-8 mt-10">
                        <div className="w-8 h-8">
                            <img src="https://avatars.githubusercontent.com/u/86690202?v=4" alt="profile" className="w-full h-full rounded-2xl" />
                        </div>
                        <div className="ml-2">
                            <p className="text-sm font-medium leading-none text-gray-800">Ashraful Islam</p>
                            <p className="text-sm font-medium leading-none text-gray-600 mt-1 cursor-pointer hover:underline">See profile</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;