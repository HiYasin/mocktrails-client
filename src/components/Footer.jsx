import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='w-11/12 max-w-screen-xl mx-auto py-5'>
            <div className='grid md:grid-cols-2 py-16 gap-10'>
                <div className='space-y-5 md:text-left md:col-span-1'>
                    <h3 className='text-2xl font-medium'>Get started with us launch your career with a boost of our experts.</h3>
                    <p className='font-semibold text-gray-500'>FIND. BOOK. GET BETTER.</p>
                    <p className='text-lg'>Get connected</p>
                    <div className="join w-full ">
                        <input className="input input-sm w-full join-item focus:border-none focus:outline-none" placeholder="Email" />
                        <button className="btn btn-sm join-item border-none bg-green-500">Subscribe</button>
                    </div>
                </div>
                <div className='grid grid-cols-12 gap-y-5 justify-center md:text-right md:col-span-1'>
                    <div className='col-span-4'>
                        <h2 className='text-md py-2 font-semibold text-gray-700'>Plateform</h2>
                        <ul className='text-sm text-gray-600 flex flex-col gap-2'>
                            <li>Interviewee</li>
                            <li>Book a session</li>
                            <li>Become mentor</li>
                            <li>Testimonial</li>
                        </ul>
                    </div>
                    <div className='col-span-4 '>
                        <h2 className='text-md font-semibold py-2 text-gray-700'>Company</h2>
                        <ul className='text-sm flex flex-col gap-2 text-gray-600'>
                            <li>About</li>
                            <li>Privacy & Policy</li>
                            <li>Terms of use</li>
                        </ul>
                    </div>
                    <div className='col-span-4'>
                        <h2 className='text-md py-2 font-semibold text-gray-700'>Support</h2>
                        <ul className='text-sm flex flex-col gap-2 text-gray-600'>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center border bg-white rounded-xl py-5 px-4'>
                <div>
                <img src='src\assets\Logo\Logo-default.png' className='w-20'></img>
                </div>
                <div className='flex gap-2 md:gap-6'>
                    <FaFacebook></FaFacebook>
                    <FaTwitter></FaTwitter>
                    <FaYoutube></FaYoutube>
                    <FaLinkedin></FaLinkedin>
                </div>
            </div>
        </div>
    );
};

export default Footer;