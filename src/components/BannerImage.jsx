import React from 'react';

const BannerImage = () => {
    return (
        <div className='w-10/12 mx-auto mt-28 mb-10'>
            <div className='grid md:grid-cols-10 gap-5'>
                <div className='md:col-span-10 lg:col-span-5 bg-pink-500'>
                    <h1 className='text-4xl text-white'>Welcome to MockTrails</h1>
                    <p className='text-lg text-white'>Discover the hidden gems of your favorite trail</p>
                </div>
                <div className='md:col-span-4 lg:col-span-2 bg-pink-500'>
                    <h1 className='text-4xl text-white'>Welcome to MockTrails</h1>
                    <p className='text-lg text-white'>Discover the hidden gems of your favorite trail</p>
                </div>
                <div className='md:col-span-6 lg:col-span-3  grid gap-5'>
                    <div className='bg-pink-500'>
                        <h1 className='text-4xl text-white'>Welcome to MockTrails</h1>
                        <p className='text-lg text-white'>Discover the hidden gems of your favorite trail</p>
                    </div>
                    <div className='bg-pink-500'>
                        <h1 className='text-4xl text-white'>Welcome to MockTrails</h1>
                        <p className='text-lg text-white'>Discover the hidden gems of your favorite trail</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerImage;