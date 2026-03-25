import React, { use, useState } from 'react';
import CardComponent from './CardComponent/CardComponent';
import TaskComponent from './TaskComponent/TaskComponent';
import ResolveComponent from './ResolveComponent/ResolveComponent';

const MainContainer = ({ cardPromise, handleTask, task, resolveTask, taskResolved }) => {
    const cardData = use(cardPromise);
    const [crntCardData, setCardData] = useState([...cardData])
    const rmvTicket = (complete) => {
        setCardData(crntCardData.filter(singlecrd => singlecrd.id !== complete.id))
    }
    // console.log(cardData)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 place-content-center gap-4 container mx-auto px-1.5 my-16'>
            {/* Card Container */}
            <div className='lg:col-span-2 xl:col-span-3'>
                <h1 className='text-2xl font-semibold text-[#34485A] mb-4'>Customer Tickets</h1>
                <div className='grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-3 place-content-center'>
                    {
                        crntCardData.map(eachCard => <CardComponent key={eachCard.id} eachCard={eachCard} handleTask={handleTask}></CardComponent>)
                    }
                </div>
            </div>
            {/* Status & resolve */}
            <div>
                {/* Task Status Container */}
                <div className='text-center'>
                    <h1 className='text-2xl font-semibold text-[#34485A] mb-4'>Task Status</h1>
                    {
                        task.length === 0 ? <h4 className='text-base font-normal text-[#627382]'>Select a ticket to add to Task Status</h4> : <div>
                            {
                                task.map(taskEachCard => <TaskComponent key={taskEachCard.id} taskEachCard={taskEachCard} resolveTask={resolveTask} rmvTicket={rmvTicket}></TaskComponent>)
                            }
                        </div>
                    }
                </div>
                <hr className='border-t-2 border-gray-300 my-5' />
                {/* Resolve Task Container */}
                <div className='text-center'>
                    <h1 className='text-2xl font-semibold text-[#34485A] mb-4'>Resolved Task</h1>
                    {
                        taskResolved.length === 0 ? <h4 className='text-base font-normal text-[#627382]'>No resolved tasks yet.</h4> : <div>
                            {
                                taskResolved.map(eachResolvedTask => <ResolveComponent key={eachResolvedTask.id} eachResolvedTask={eachResolvedTask}></ResolveComponent>)
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MainContainer;