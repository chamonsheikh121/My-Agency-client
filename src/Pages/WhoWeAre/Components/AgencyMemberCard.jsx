import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import AOS from 'aos';

const AgencyMemberCard = ({img, name,position}) => {
    const [hovered, setHovered] = useState(false);



    
       useEffect(() => {
    
            AOS.init({
                duration: 2000,
                easing: 'ease',
                once: false,
            });
    
    
            AOS.refresh();
    
        }, []);


    return (
        <div
        data-aos='fade-up'
        className="flex flex-col items-center">
            <motion.div
                className="relative w-96 h-72 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-purple-700 via-gray-200 hover:via-purple-400 to-blue-600 hover:shadow-purple-900 p-6 text-center hover:shadow-2xl transition-transform duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-black to-transparent opacity-0 transition-opacity duration-500"
                    animate={{ opacity: hovered ? 0.6 : 0 }}
                />
                <motion.div
                    className="absolute inset-0 flex items-center justify-center text-7xl font-extrabold uppercase text-white opacity-0 transition-opacity duration-500"
                    animate={{ opacity: hovered ? 0.2 : 0, y: hovered ? -20 : 0 }}
                >
                    Team Webio
                </motion.div>
                <motion.img
                    className="w-72 h-72 drop-shadow-[0_10px_10px_rgba(128,128,128,0.8)] object-cover absolute bottom-0 left-[13%] -translate-x-[50px]"
                    src={img}
                    alt="Member"
                    animate={{ scale: hovered ? 1.1 : 1, y: hovered ? 20 : 0 }}
                    transition={{ duration: 0.3 }}
                />

            </motion.div>
            <h2 className="mt-4 text-xl font-bold text-purple-700">{name}</h2>
            <p className="text-gray-600 text-sm">{position}</p>
        </div>
    );
};

export default AgencyMemberCard;
