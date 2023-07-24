import React, { useEffect, useState } from 'react';

const FeaturedCollege = () => {
    const [colleges, setColleges] = useState()

    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setColleges(data)
            })
    }, [])

    return (
        <div>
            <h2 className="text-center text-2xl text-orbitron my-4 font-bold">Featured Colleges</h2>

            <div className="grid grid-cols-3 gap-3">
                {
                    
                }
            </div>

        </div>
    );
};

export default FeaturedCollege;