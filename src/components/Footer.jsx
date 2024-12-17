import React from 'react';

const Footer = () => {
    return (
        <div className='w-11/12 max-w-screen-xl mx-auto py-5'>
            <div className='grid lg:grid-cols-2 py-16 gap-y-5'>
                <div className='space-y-5 text-center md:text-left'>
                    <h3 className='text-3xl font-medium'>Get started with us launch your career with a boost of our experts.</h3>
                    <p className='font-bold'>FIND. BOOK. GET BETTER.</p>
                    <p className=''>Get connected</p>
                    <div className="join">
                        <input className="input  join-item focus:border-none focus:outline-none" placeholder="Email" />
                        <button className="btn join-item border-none bg-green-500">Subscribe</button>
                    </div>
                </div>
                <div className='grid gap-y-5 sm:grid-cols-2 md:grid-cols-3 justify-center text-center md:text-left'>
                    <div>
                        <h2 className='text-md font-bold text-gray-700'>Plateform</h2>
                        <ul className='text-sm text-gray-600'>
                            <li>Interviewee</li>
                            <li>Book a session</li>
                            <li>Become mentor</li>
                            <li>Testimonial</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-md font-bold text-gray-700'>Company</h2>
                        <ul className='text-sm text-gray-600'>
                            <li>About</li>
                            <li>Privacy & Policy</li>
                            <li>Terms of use</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='text-md font-bold text-gray-700'>Support</h2>
                        <ul className='text-sm text-gray-600'>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex justify-between border bg-white rounded-xl py-5 px-10'>
                <div>
                    <h1>MockTrails</h1>
                </div>
                <div>
                    All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;