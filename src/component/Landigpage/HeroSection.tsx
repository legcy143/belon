import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 content-start ">
                    <div className="w-full  px-4 mb-6">
                        <h1 className="title-font font-bold text-3xl mb-2 text-gray-900">
                        Welcome to Belon Enterprises - Empowering Wellness, Inspiring Change!
                        </h1>
                        <div className="leading-relaxed">
                        At Belon Enterprises, we're on a mission to redefine well-being through our diverse range of products designed to enhance every aspect of your life. With a legacy spanning over 2 years, we take pride in delivering quality solutions that make a positive impact.
                        </div>
                    </div>
                    <div className="p-4  lg:w-1/4 w-1/2">
                        <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                        <p className="leading-relaxed">Users</p>
                    </div>
                    <div className="p-4  lg:w-1/4 w-1/2">
                        <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
                        <p className="leading-relaxed">Subscribes</p>
                    </div>
                    <div className="p-4 lg:w-1/4 w-1/2">
                        <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
                        <p className="leading-relaxed">Downloads</p>
                    </div>
                    <div className="p-4 lg:w-1/4 w-1/2">
                        <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
                        <p className="leading-relaxed">Products</p>
                    </div>
                </div>
                <div className="lg:w-1/2  w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                    <img
                        className="object-cover object-center w-full h-full"
                        src="https://dummyimage.com/600x300"
                        alt="stats"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
