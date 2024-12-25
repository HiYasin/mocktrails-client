import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div className='w-full md:w-3/4 border max-w-screen-xl mx-auto rounded-2xl my-20 shadow-xl'>
              <div className='grid grid-cols-2  '>
                <div className='bg-custom-gradient col-span-1 m-2 rounded-2xl hidden lg:block'>
                    <div className='hero-content flex-col p-10 text-center text-white'>
                        <div><img src='src\assets\Logo\Logo-dark.png' className='w-24'></img></div>
                        <h3 className='text-3xl font-semibold'>Get Started With Us</h3>
                        <p className='text-sm font-light'>Register now to accelerate your career with our expert mentors</p>
                    </div>
                </div>
                <div className='col-span-2 p-10 lg:col-span-1 lg:p-10'>
                    <h2 className='text-3xl font-bold text-center'>Sign In</h2>
                    <p className='text-sm md:text-lg font-semibold text-center py-3'>Enter your email and personal details to create your account</p>
                    <div>
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" className="input input-sm input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" className="input input-sm input-bordered" required />
                            </div>
                            <div className="flex pt-5">
                                <span className="label-text">Forgot password?</span>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className='text-center py-3'>
                                <span className="label-text">Don't have an account? <Link to={'/register'} className='text-blue-800 font-bold'>Register</Link> </span>
                            </div>
                        </form>
                    </div>
                    <div>
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
                </div>
            </div>
        </div>
    );
};

export default Login;