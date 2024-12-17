import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navStyle = ({ isActive }) => ({
        color: isActive ? 'white' : 'black',
        //borderRadius: isActive ? '50px' : '0%',
        background: isActive ? 'black' : 'none',
    })
    const navItems = <>
    <li><NavLink to={'/'} style={navStyle} className={'rounded-full min-h-10'}>Home</NavLink></li>
    <li><NavLink to={'/categories'} style={navStyle} className={'rounded-full min-h-10'}>Categories</NavLink></li>
    <li><NavLink to={'/features'} style={navStyle} className={'rounded-full min-h-10'}>Features</NavLink></li>
    <li><NavLink to={'/interviewers'} style={navStyle} className={'rounded-full min-h-10'}>Interviewers</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <a className="text-2xl font-semibold">MockTrails</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal py-0 px-0 bg-gray-300 rounded-full space-x-1 *:font-semibold">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-sm bg-green-500 rounded-full min-h-10">Sign up</button>
            </div>
        </div>
    );
};

export default Navbar;