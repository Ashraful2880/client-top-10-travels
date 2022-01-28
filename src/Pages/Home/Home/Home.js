import React from 'react';
import About from '../../About/About';
import Blogs from '../../Blogs/Blogs';
import Service from '../../Service/Service';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Blogs/>
            <Service/>
            <About/>
        </div>
    );
};

export default Home;