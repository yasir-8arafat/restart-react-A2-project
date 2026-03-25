
import { useState } from 'react';
import btnCircle from '../../../assets/Ellipse 22.png'
import calender from '../../../assets/ri_calendar-line.png'

const CardComponent = ({ eachCard, handleTask }) => {


    const [disabled, setDisabled] = useState(false);
    const handleDisable = () => {
        setDisabled(true);
    };

    return (
        // card
        <button onClick={() => { handleTask(eachCard), handleDisable() }} disabled={disabled}>
            <div className='p-4 bg-white shadow-sm rounded-lg space-y-4 cursor-pointer'>
                {/* top part */}
                <div className='flex items-center justify-between'>
                    <h1>{eachCard.title}</h1>
                    <div className="btn btn-active bg-[#B9F8CF] border-none px-4 rounded-full"><img src={btnCircle} alt="" /> <span className='text-base text-[#001931] font-medium'>{eachCard.status}</span></div>
                </div>
                {/* mid part */}
                <p className='text-base font-normal text-[#627382] text-left'>{eachCard.description}</p>
                {/* btm part */}
                <div className='flex items-center justify-between'>
                    {/* id & priority */}
                    <div className='flex items-center gap-2 sm:ga-4'>
                        <p className='text-sm font-medium text-[#627382]'>#{eachCard.id}</p>
                        <p className='font-medium text-[#F83044] text-sm'>{eachCard.priority}</p>
                    </div>
                    {/* date & customer */}
                    <div className='flex items-center gap-2 sm:gap-4'>
                        <p className='text-sm font-normal text-[#627382]'>{eachCard.customer}</p>
                        <p className='text-sm font-normal text-[#627382] flex items-center gap-1'><img src={calender} alt="" />{eachCard.createdAt}</p>
                    </div>
                </div>
            </div>
        </button>
    );
};

export default CardComponent;