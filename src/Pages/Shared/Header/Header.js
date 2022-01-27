import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <i className="fas fa-bars text-2xl px-2"></i>
                        </button>
                    </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/home">
                            <img className="block lg:hidden h-8 w-auto" src="https://i.ibb.co/DQkTLN3/logo-2.png" alt="Workflow"/>
                        </Link>
                        <Link to="/home">
                            <img className="hidden lg:block h-8 w-auto" src="https://i.ibb.co/DQkTLN3/logo-2.png" alt="Workflow"/>
                        </Link>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            <Link 
                                className="text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium" 
                                to="/">Home
                            </Link>
                            <Link 
                                className="text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium" 
                                to="/about">About
                            </Link>
                            <Link 
                                className="text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium" 
                                to="/blog">Blog
                            </Link>
                            <Link
                                className="text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                                to="/service">Service
                            </Link>
                            <Link
                                className="text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                                to="/contact">Contact
                            </Link>
                        </div>
                    </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                       <Link to="/home">
                        <img className="h-8 w-8 rounded-full ring-2 ring-offset-2 " src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile-Pic"/>
                       </Link>                        
                       <Link to="/signin">
                            <i className="fas fa-sign-in-alt text-white ml-4 text-lg px-2 py-1 border border-gray-800 rounded-lg hover:border-yellow-500"></i>
                       </Link>                        
                       {/* <Link to="/home">
                            <i className="fas fa-sign-out-alt text-white ml-4 text-lg px-2 border border-gray-800 rounded-lg hover:border-yellow-500"></i>
                       </Link>  */}                       
                    </div>
                </div>
            </div>
            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link 
                        to="/"
                        className="text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home
                    </Link>
                    <Link 
                        to="/"
                        className="text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home
                    </Link>
                    <Link 
                        to="/"
                        className="text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home
                    </Link>
                    <Link 
                        to="/"
                        className="text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home
                    </Link>
                    <Link 
                        to="/"
                        className="text-gray-200 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;