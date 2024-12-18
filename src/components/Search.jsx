import React from 'react';

const ShadowStyle = () => ({
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
  });
const Search = () => {
    return (
        <div className='w-full md:w-10/12 mx-auto rounded-2xl p-2 my-20' style={ShadowStyle()}>
            <div className='grid grid-cols-10 justify-between'>
                <div className='col-span-1 flex items-center justify-center'>
                   <img src='src\assets\Icons\magnifying-glass.png' className='w-4 h-4'></img>
                </div>
                <input type="text" placeholder="search by name, category or country" className="w-full text-xs col-span-7 md:col-span-3 focus:outline-none focus:border-none"/>
                <select className="select w-full hidden md:col-span-2 md:block focus:outline-none focus:border-none">
                    <option disabled selected>Categories</option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                </select>
                <select className="select w-full hidden md:col-span-2 md:block focus:outline-none focus:border-none">
                    <option disabled selected>Country</option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                </select>
                <div className='w-full col-span-2 flex justify-center items-center md:col-span-2'>
                    <button className="btn btn-sm bg-green-500 rounded-xl min-h-10 text-xs">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Search;