import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo-2.png';
import logo2 from '../../../Images/Main-Logo.png';

const Header = () => {
    return (
        <nav className="bg-purple-600">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                        <img className="block lg:hidden h-8 w-auto" src={logo} alt="Workflow"/>
                        <img className="hidden lg:block h-8 w-auto" src={logo2} alt="Workflow"/>
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex space-x-4">
                            <Link 
                                className="text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium" 
                                to="/">Home
                            </Link>
                            <Link 
                                className="text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium" 
                                to="/">Home
                            </Link>
                            <Link 
                                className="text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium" 
                                to="/">Home
                            </Link>
                            <Link
                                className="text-gray-200 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                                to="/">Home
                            </Link>
                        </div>
                    </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                            <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                        </button>
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