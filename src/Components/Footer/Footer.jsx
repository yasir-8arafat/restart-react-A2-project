import React from 'react';

const Footer = () => {
    return (
        <div className='bg-neutral text-neutral-content'>
            <footer className="footer sm:footer-horizontal p-10">
                <aside className='max-w-sm'>
                    <h1 className='text-2xl font-bold '>CS — Ticket System</h1>
                    <p className='text-gray-400'>
                        Our company provides to its customers, before, during, and after a purchase. Key elements include empathy, knowledge, and responsiveness to build loyalty, resolve issues, and enhance the customer experience.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Products & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Jobs</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <hr className='border-t-2 border-gray-600' />
            <footer class="footer sm:footer-horizontal footer-center p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by CS — Ticket System Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;