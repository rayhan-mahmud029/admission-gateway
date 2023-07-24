import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="my-2 w-1/2 mx-auto relative">
                 <input type="search" name="search" id="" className='w-full p-2 border-[1.5px] border-blue-800 rounded-s-lg' placeholder='Search for colleges...'/>

                 <button type="submit" className='py-2 text-white bg-[#0949C0] absolute end-0 bottom-0 top-0 px-6'>Search</button>
            </div>
            
        </div>
    );
};

export default Home;