import React, { useEffect, useState } from 'react';

const FeaturedCollege = () => {
    const [colleges, setColleges] = useState()

    useEffect(() => {
        fetch('http://localhost:5000/colleges')
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                setColleges(data)
                console.log(colleges);
            })
    }, [])

    return (
        <div>
            <h2 className="text-center text-2xl text-orbitron my-4 font-bold">Featured Colleges</h2>

            <div className="grid grid-cols-3 gap-3">
                {/* {
                    colleges.map(college => {
                        <div className="card w-96 bg-base-100 shadow-xl" key={college._id}>
                            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Shoes!
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <div className="badge badge-outline">Fashion</div>
                                    <div className="badge badge-outline">Products</div>
                                </div>
                            </div>
                        </div>
                    })
                } */}
            </div>

        </div>
    );
};

export default FeaturedCollege;