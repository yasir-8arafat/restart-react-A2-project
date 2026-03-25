import React from 'react';
import BgImg1 from '../../assets/vector1.png'
// import BgImg2 from '../../assets/vector2.png'

const Banner = ({ task, taskResolved }) => {
    return (
        <div>
            <div className='container mx-auto px-1 grid grid-cols-1 lg:grid-cols-2 gap-5 place-content-center mt-20'>
                {/* banner Crd - 1 */}
                <div className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] rounded-xl'>
                    <div className='text-center py-14 bg-contain' style={{
                        backgroundImage: `url(${BgImg1})`
                    }}>
                        <h1 className='text-2xl font-normal text-[#FFFFFF]'>In-Progress</h1>
                        <p className='text-6xl font-semibold text-white mt-4'>{task.length}</p>
                    </div>
                </div>
                {/* Banner card - 2 */}
                <div className='bg-gradient-to-r from-[#54CF68] to-[#00827A] rounded-xl'>
                    <div className='text-center py-14 bg-contain' style={{
                        backgroundImage: `url(${BgImg1})`
                    }}>
                        <h1 className='text-2xl font-normal text-[#FFFFFF]'>Resolved</h1>
                        <p className='text-6xl font-semibold text-white mt-4'>{taskResolved.length}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;