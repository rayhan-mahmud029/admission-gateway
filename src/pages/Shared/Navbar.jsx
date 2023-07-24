import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between py-4'>
            <div className="bg-[#0949C0]">
                <h1 className='text-2xl lg:text-4xl font-bold p-4 text-white text-orbitron'>Admission <br />Gateway</h1>
            </div>

            <div className="items-center text-xl flex gap-4 text-black  text-poppins">
                <Link to='/'>Home</Link>
                <Link to='/'>Colleges</Link>
                <Link to='/'>Admission</Link>
                <Link to='/'>My College</Link>
            </div>
        </div>
    );
};

export default Navbar;