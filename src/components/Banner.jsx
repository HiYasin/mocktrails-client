import React, { useState } from 'react';

const Banner = () => {
    const [tab, setTab] = useState(true);

    return (
        <div className='w-10/12 mx-auto *:text-balance *:text-center grid gap-10 mt-10 mb-5 md:mt-24 md:mb-10 lg:mt-44 lg:mb-20'>
            <div>
                <div className={!tab? `hidden`:``}>
                    <div>
                        <h1 className='font-medium text-5xl'>Your Days of Getting Mocked in the Interviews are Over</h1>
                    </div>
                    <div className='max-w-[500px] mx-auto text-slate-500'>
                        <p className='font-medium text-2xl'>Build an epic career with expert Interviewers from all over the word, let's start today.</p>
                    </div>
                </div>
                <div className={tab?`hidden`:``}>
                    <div className=''>
                        <h1 className='font-medium text-5xl'>Convert regular Job Seekers to Elite Candidates with your Expertise </h1>
                    </div>
                    <div className='max-w-[500px] mx-auto text-slate-500'>
                        <p className='font-medium text-2xl'>Build confidence as a leader, grow your network, and define your legacy.</p>
                    </div>
                </div>
            </div>
            <div className='space-x-2'>
                <button className={tab ? `bg-black text-white btn btn-outline rounded-xl` : `btn btn-outline rounded-xl`} onClick={() => setTab(true)}>Interviewee</button>
                <button className={tab ? `btn btn-outline rounded-xl` : `btn btn-outline rounded-xl text-white bg-black`} onClick={() => setTab(false)}>Interviewer</button>
            </div>
        </div>
    );
};

export default Banner;
