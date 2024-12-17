import React from 'react';

const Banner = () => {
    return (
        <div className='w-10/12 mx-auto *:text-balance *:text-center grid gap-10 mt-10 mb-5 md:mt-24 md:mb-10 lg:mt-44 lg:mb-20'>
            <div className=''>
                <h1 className='font-medium text-5xl'>Your Days of Getting Mocked in the Interviews are Over</h1>
            </div>
            <div className='max-w-[500px] mx-auto text-slate-500'>
                <p className='font-medium text-2xl'>Build an epic career with expert Interviewers from all over the word, let's start today.</p>
            </div>
            <div className='space-x-2'>
                <button className="btn btn-outline rounded-xl">Interviewer</button>
                <button className="btn btn-outline rounded-xl">Interviewee</button>
            </div>
        </div>
    );
};

export default Banner;