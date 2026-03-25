import React from 'react';

const ResolveComponent = ({ eachResolvedTask }) => {
    return (
        <div className='px-4 py-5 rounded-xl shadow-sm bg-[#E0E7FF] mb-3'>
            <h1 className='text-center text-lg font-medium text-[#001931]'>{eachResolvedTask.title}</h1>
            <p className='text-center text-sm font-normal text-gray-600 mt-1'>Task ID: {eachResolvedTask.id}</p>
        </div>
    );
};

export default ResolveComponent;