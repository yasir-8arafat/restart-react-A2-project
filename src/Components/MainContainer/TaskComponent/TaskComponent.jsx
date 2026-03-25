import React from 'react';

const TaskComponent = ({ taskEachCard, resolveTask, rmvTicket }) => {
    return (
        <div className='text-center p-4 shadow-sm rounded-lg mb-3 bg-white'>
            <h1 className='text-lg font-medium text-[#001931] mb-1'>{taskEachCard.title}</h1>
            <p className='text-sm font-normal text-gray-500 mb-2'>ID: {taskEachCard.id}</p>
            <button onClick={() => { resolveTask(taskEachCard), rmvTicket(taskEachCard) }} className="btn btn-wide bg-[#02A53B] text-white">Complete</button>
        </div>
    );
};

export default TaskComponent;