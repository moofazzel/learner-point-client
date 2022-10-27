import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SinglePage = () => {
    const {title,author_name,students,love,lesson} = useLoaderData()
    return (
        <div className='container p-6 mx-auto'>
            <div>
                <h2 className='text-4xl font-bold text-slate-600'>{title} </h2>
                <div>
                        
                </div>
            </div>
        </div>
    );
};

export default SinglePage;