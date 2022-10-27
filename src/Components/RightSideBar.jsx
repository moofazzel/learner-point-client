import React from 'react';
import { Link } from 'react-router-dom';

const RightSideBar = ({image_url,title}) => {
    return (
        <div className='min-w-[350px] flex flex-col justify-center items-center h-full'>
            <img src={image_url} alt="" />
            <h3 className='my-10'> {title} </h3>
            <Link
            to={'/login'}
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 darkk:bg-blue-600 darkk:hover:bg-blue-700 darkk:focus:ring-blue-800"
          >
            Get Premium Access
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 ml-2"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path></svg>
            </Link>
            
        </div>
    );
};

export default RightSideBar;