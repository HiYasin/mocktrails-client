import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import RegisterInterviewee from './RegisterInterviewee';
import RegisterInterviewer from './RegisterInterviewer';

const Register = () => {
    const [tab, setTab] = useState('interviewee');
    const tabStyle = ' rounded-full lg:min-h-10 py-2 px-3'
    return (
        <div className='border max-w-screen-xl mx-auto rounded-2xl my-20 shadow-xl'>
            <div className='grid grid-cols-2  p-10'>
                <div className=''>

                </div>
                <div className=''>
                    <h2 className='text-3xl font-bold text-center'>Sign Up</h2>
                    <p className='text-lg font-semibold text-center py-3'>Enter your email and personal details to create your account</p>
                    <div className='flex justify-center'>
                        <div className='menu menu-horizontal py-0 px-0 bg-gray-300 rounded-full space-x-1 *:font-semibold'>
                            <button className={tab === 'interviewee' ? `bg-black text-white ${tabStyle}` : `text-black ${tabStyle}`} onClick={() => setTab('interviewee')}>Interviewee</button>
                            <button className={tab === 'interviewer' ? `bg-black text-white ${tabStyle}` : `text-black ${tabStyle}`} onClick={() => setTab('interviewer')}>Interviewer</button>
                        </div>
                    </div>
                    <div>
                        <div className={tab === 'interviewee' ? `` : `hidden`}>
                            <RegisterInterviewee></RegisterInterviewee>
                        </div>
                        <div className={tab === 'interviewer' ? `` : `hidden`}>
                            <RegisterInterviewer></RegisterInterviewer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;