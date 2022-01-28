import React from 'react';

const DashboardHome = () => {
    return (
        
        <div class="lg:px-6 2xl:px-0">
            <div class="mx-auto container relative z-0 px-4 xl:px-0">
                <div class="flex flex-col-reverse md:flex-row">
                    <div class="md:w-3/5 md:pt-24 pb-10 lg:py-32 xl:py-48">
                        <h1 class="text-3xl lg:text-3xl xl:text-5xl font-black text-gray-900 text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color">Welcome To Dashboard</h1>
                        <h2 class="md:w-8/12 my-4 text-center md:text-left md:my-8 text-gray-700 text-lg lg:text-2xl">Do you want to control your expenses and be always aware of how much money you have spent?</h2>
                    </div>
                    <div class="w-1/2 sm:w-2/5 h-64 md:h-auto m-auto flex items-center overflow-hidden">
                        <img class="md:absolute md:w-1/2 md:-ml-28" src="https://i.ibb.co/yWt9TRB/dashboard.png" alt="DashboardImage"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;