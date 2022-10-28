import React from 'react';
import { useEffect, useState } from 'react';
import NewsSummaryCard from '../Shared/NewsSummaryCard/NewsSummaryCard';

const Course = () => {
    const [categories, setCategories] = useState([]);
    console.log(categories[0]);

    useEffect(() => {
        fetch('http://localhost:5000/news')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        {
                            categories.map(category =>
                                <div className='btn btn-primary w-75 my-2'>{category.title}</div>
                            )
                        }

                    </div>
                    <div className="col-8">
                        <div className="container">
                            <div className="row d-flex">
                                <div className="">
                                    {
                                        categories.map(category =>
                                            // <div className='m-2 '>{category.title}</div>

                                            <div className='col-5 m-2'>
                                                <NewsSummaryCard
                                                    news={category}>
                                                </NewsSummaryCard>
                                            </div>
                                        )

                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;