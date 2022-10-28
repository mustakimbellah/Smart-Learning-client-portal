import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CartPart from './CartPart/CartPart';

const Course = () => {
    const [categories, setCategories] = useState([]);
    // console.log(categories[0]);

    useEffect(() => {
        fetch('https://smart-learning-server-alpha.vercel.app/news')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])


    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-5 col-md-4 col-lg-3">
                        {
                            categories.map(category =>
                                <div>
                                    <Link to={`/course/${category._id}`} className='w-100 my-2'>{category.title}</Link>
                                </div>
                            )
                        }

                    </div>

                    <div className="col-7 col-md-8 col-lg-9">
                        <div className='text-success'>
                            <div className="container">
                                <div className="row d-flex">
                                    {
                                        categories.map(news =>
                                            <div className="col-12 col-md-6">
                                                <CartPart key={news._id}
                                                    news={news}></CartPart>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div >
    );
};

export default Course;