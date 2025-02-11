import React from 'react';
import TextAnimation from './TextAnimation';
import { NavLink } from 'react-router-dom';

const Footer = () => {

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/who_we_are", label: "Who we are" },
        { path: "/projects", label: "Projects" },
        { path: "/services", label: "Services" },
    ];

    return (
        <div>
            <footer className="flex justify-around text-white items-center bg-black  p-10">

                <div className='flex justify-center w-full flex-col items-center '>
                    <h5 className='text-2xl font-bold border-b-2 py-2'>Pages</h5>
                    <div className='flex flex-col'>
                        {navLinks.map(({ path, label }) => (
                            <NavLink

                                onClick={(e) => {
                                    e.preventDefault(); // Prevent React Router's default navigation
                                    window.location.href = path// Force a full reload
                                }}
                                key={path}
                                to={path}
                                className={({ isActive }) =>
                                    `relative my-2  backdrop-blur-md hover:text-purple-700   mr-1 rounded-sm  text-nowrap text-sm  transition-all
                        ${isActive ? "text-purple-400 after:w-full font-extrabold" : "duration-500"}`
                                }
                            >
                                {label}
                            </NavLink>
                        ))}
                    </div>
                </div>

                <aside className='w-full text-center'>
                    <div className='text-white mb-6'>
                        <TextAnimation textColor={'white'} />
                    </div>
                    <p className="font-bold text-xl mb-1">
                        Multinational Digital Web Development Solutions
                    </p>
                    <p> Delivering reliable technology solutions since 2015.</p>
                    <p className='mt-4'>Team Webio © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <div className='w-full'>

                </div>

            </footer>
        </div>
    );
};

export default Footer;