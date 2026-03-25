import React from 'react';

const NavBar = () => {
    return (
        <div className="bg-base-100 shadow-sm">
            <div className='navbar container mx-auto'>
                <div className="flex-1">
                    <h1 className='font-bold text-2xl md:text-3xl text-[#130B2D]'>CS — <span className='hidden sm:inline-block'>Ticket System</span><span className='sm:hidden'>TS</span></h1>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 items-center">
                        <li className='hidden lg:block'><a>Home</a></li>
                        <li className='hidden lg:block'><a>FAQ</a></li>
                        <li className='hidden lg:block'><a>Changelog</a></li>
                        <li className='hidden lg:block'><a>Blog</a></li>
                        <li className='hidden lg:block'><a>Download</a></li>
                        <li className='hidden lg:block'><a>Contact</a></li>
                        <li>
                            <details className='lg:hidden'>
                                <summary>All Link</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a>Home</a></li>
                                    <li><a>FAQ</a></li>
                                    <li><a>Changelog</a></li>
                                    <li><a>Blog</a></li>
                                    <li><a>Download</a></li>
                                    <li><a>Contact</a></li>
                                </ul>
                            </details>
                        </li>
                        <li className='ml-3'>
                            <button className="btn btn-secondary bg-gradient-to-br from-[#632EE3] to-[#9F62F2] border-none">+ New Ticket</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;