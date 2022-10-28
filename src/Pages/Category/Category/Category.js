import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hook/useTitle';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    useTitle("Category");

    return (
        <div>
            <h2>This is Category has news: {categoryNews.length}</h2>
            <div className='container '>
                <div className="row col-6">
                    {
                        categoryNews.map(news => <NewsSummaryCard
                            key={news._id}
                            news={news}
                        ></NewsSummaryCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Category;