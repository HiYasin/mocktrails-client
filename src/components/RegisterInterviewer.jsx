import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const RegisterInterviewer = () => {
    return (
        <div className='loginForm text-sm'>
            <form>
                <div className="md:flex gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">First Name</span>
                        </label>
                        <input type="text" name="firstName" className="input input-sm input-bordered flex" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Last Name</span>
                        </label>
                        <input type="text" name="lastName" className="input input-sm input-bordered flex" required />
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" className="input input-sm input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" className="input input-sm input-bordered" required />
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" name="category" className="input input-sm input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Skill</span>
                        </label>
                        <input type="text" name="skill" className="input input-sm input-bordered" required />
                    </div>
                </div>
                <div className="md:flex gap-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Country</span>
                        </label>
                        <input type="text" name="country" className="input input-sm input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Time Zone</span>
                        </label>
                        <input type="text" name="timeZone" className="input input-sm input-bordered" required />
                    </div>
                </div>
                <div className="flex items-center pt-5">
                    <input type="checkbox" className="checkbox mr-4" />
                    <span className="label-text">I agree with the Terms and Conditions and Privacy Policy of this site. </span>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
                <div className='text-center py-3'>
                    <span className="label-text">Already have an account? <Link to={'/login'} className='text-blue-800 font-bold'>Sign In</Link> </span>
                </div>
            </form>
            <div>
                <div class="inline-flex items-center justify-center w-full relative">
                    <hr class="w-full h-px bg-gray-500 border-0" />
                    <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/4 bg-white ">OR</span>
                </div>
            </div>
            <div className='flex justify-center pt-5 btn-primary '>
                <button className='btn text-white'><FcGoogle className='text-lg' /> Continue with Google</button>
            </div>
        </div>
    );
};

export default RegisterInterviewer;