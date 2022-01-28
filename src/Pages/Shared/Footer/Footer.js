import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (  
        <footer className="text-center lg:text-left text-gray-300 bg-gray-800 mt-10">
            <div className="container mx-auto">
                <div className="mx-6 py-10 text-center md:text-left">
                    <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <img className="w-14 mb-4" src="https://i.ibb.co/DQkTLN3/logo-2.png" alt="footer logo" />
                            <h6 className=" uppercase font-semibold mb-4 flex items-center justify-center md:justify-start"> Top 10 Travels </h6>
                            <p className="w-80 mx-auto"> Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div>
                            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            About Us
                            </h6>
                            <p className="mb-3">
                                <Link to="/home"> Terms of service </Link>
                            </p>
                            <p className="mb-3">
                                <Link to="/home"> Privacy Policy </Link>
                            </p>
                            <p className="mb-3">
                                <Link to="/home"> Security </Link>
                            </p>
                            <p className="mb-3">
                                <Link to="/home"> Sitemap </Link>
                            </p>
                        </div>
                        <div>
                            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Useful links
                            </h6>
                            <p className="mb-3">
                                <Link to="/home"> How to start a blog </Link>
                            </p>
                            <p className="mb-3">
                                <Link to="/home"> Guidelines and how to </Link>
                            </p>
                            <p className="mb-3">
                                <Link to="/home"> Marketplace </Link>
                            </p>
                            <p className="mb-3">
                                <Link to="/home"> Help </Link>
                            </p>
                        </div>
                        <div className="contact-area">
                            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                            Contact
                            </h6>
                            <p className="flex items-center justify-center md:justify-start mb-3">
                                <i className="fas fa-home mr-2"></i>
                                Jhenaidah, Dhaka, Bangladesh
                            </p>
                            <p className="flex items-center justify-center md:justify-start mb-3">
                                <i className="fas fa-envelope mr-2"></i>
                                contact.ashraful1@gmail.com
                            </p>
                            <p className="flex items-center justify-center md:justify-start mb-3">
                                <i className="fas fa-phone mr-2"></i>
                                + 88-01764238487
                            </p>
                            <p className="flex items-center justify-center md:justify-start">
                                <i className="fas fa-fax mr-2"></i>
                                + 88-01974238487
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center pb-8">
                    <span>Copyright; © 2022 - </span>
                    <a className="text-red-500 font-semibold" href="https://ashrafulislambd.com"> ashrafulislambd.com</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;