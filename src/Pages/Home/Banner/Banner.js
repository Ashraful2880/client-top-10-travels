import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './Banner.css';

import SwiperCore, {
    EffectFade,Pagination,Autoplay
  } from 'swiper';
import { Link } from 'react-router-dom';
SwiperCore.use([Autoplay,EffectFade,Pagination]);

const Banner = () => {
    return (
    <div className="banner-container">
        <Swiper 
            spaceBetween={30} 
            effect={'fade'} 
            pagination={{"clickable": true}} 
            autoplay={{"delay": 3000,"disableOnInteraction": false}}
            className="mySwiper">
            <SwiperSlide>
                <img className="h-fit w-full" src="https://i.ibb.co/NtMj6wP/banner1.png" alt="SliderImage"/>
                <div className="slider-text text-left">
                    <h1 className="text-white uppercase font-bold">Book Your Destination <br /> For Tours</h1>
                    <h2 className="mb-8 text-white text-2xl">With Top 10 Travels</h2>
                    <Link to="/blog">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg">View Blog</button>
                    </Link>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full h-fit" src="https://i.ibb.co/ZHMN4nH/banner2.png" alt="SliderImage"/>
                <div className="slider-text text-left">
                    <h1 className="text-white uppercase font-bold">Travel & Explore The World <br /> For Mental Freshness</h1>
                    <h2 className="mb-8 text-white text-2xl">With Top 10 Travels</h2>
                    <Link to="/blog">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg">View Blog</button>
                    </Link>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full h-fit" src="https://i.ibb.co/JR01rjR/banner3.png" alt="SliderImage"/>
                <div className="slider-text text-left">
                    <h1 className="text-white uppercase font-bold">Explore A Different Way <br /> To Travel</h1>
                    <h2 className="mb-8 text-white text-2xl">With Top 10 Travels</h2>
                    <Link to="/blog">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg">View Blog</button>
                    </Link>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-full h-fit" src="https://i.ibb.co/mRkZXHd/banner4.png" alt="SliderImage"/>
                <div className="slider-text text-left">
                    <h1 className="text-white uppercase font-bold">Start Your Journey! <br /> In All World</h1>
                    <h2 className="mb-8 text-white text-2xl">With Top 10 Travels</h2>
                    <Link to="/blog">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg">View Blog</button>
                    </Link>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    );
};

export default Banner;