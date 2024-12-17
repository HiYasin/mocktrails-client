import React from 'react';

const Search = () => {
    return (
        <div className='w-10/12 mx-auto border border-gray-700 rounded-2xl p-4 my-20'>
            <div className='grid md:grid-cols-10 justify-between '>
                <input type="text" placeholder="Type here" className="w-full md:col-span-4 focus:outline-none focus:border-none"/>
                <select className="select w-full  md:col-span-2 focus:outline-none focus:border-none">
                    <option disabled selected>Categories</option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                </select>
                <select className="select w-full md:col-span-2 focus:outline-none focus:border-none">
                    <option disabled selected>Country</option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                </select>
                <div className='w-full flex justify-center items-center md:col-span-2'>
                    <button className="btn btn-sm bg-green-500 rounded-full min-h-10">Sign up</button>
                </div>
            </div>
        </div>
    );
};

export default Search;