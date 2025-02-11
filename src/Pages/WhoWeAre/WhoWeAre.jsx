import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AgencyMemberCard from './Components/AgencyMemberCard';
import HireMessageSection from '../HomePage/Components/HireMessageSection';
import { Helmet } from 'react-helmet';
import VideoPlayer from '../Components/VideoPlayer';



const AboutUs = () => {


    const members = [
        {
            "name": "Ali",
            "position": "Founder & CEO",
            "img": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739258448/Remove_background_project_5_qy63tx.png"
        },
        {
            "name": "Hasibul Hasan",
            "position": "Managing Director (MD)",
            "img": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739123012/hasib_mbylcl.png"
        },
        {
            "name": "Ruhul Amin",
            "position": "Project Manager",
            "img": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739194737/Remove_background_project_3_asnrfw.png"
        },
        {
            "name": "Emon",
            "position": "Senior Full Stack Engineer",
            "img": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739257904/1_pubyif.png"
        },
        {
            "name": "Abdullah",
            "position": "Full Stack Engineer",
            "img": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739187495/Remove_basckground_project_fzlhcq.png"
        },
        {
            "name": "Nahid",
            "position": "UI/UX Designer",
            "img": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739189468/Remove_background_project_1_lz2eks.png"
        },
        {
            "name": "Parvej",
            "position": "Full Stack Engineer",
            "img": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739189617/Remove_background_project_2_odx4na.png"
        },
        {
            "name": "Shakil",
            "position": "Front End Expert",
            "img": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739212206/Remove_background_project_4_xzd172.png"
        },
        
        {
            "name": "Rahul",
            "position": "Back End Expert",
            "img": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739257901/2_ptjzzt.png"
        },
      
    ]







    return (

        <motion.section
            initial={{ opacity: 0, scale: 0.9 }} // Start small and invisible
            animate={{ opacity: 1, scale: 1 }}  // Grow and appear
            transition={{ duration: 1, ease: "easeOut" }} // Smooth effect
            className=""
            aria-label="Our Services"
        >

            <Helmet>
                <title>Team Webio | WHO WE ARE</title>
            </Helmet>
            <div className='w-full'>
                <section className="relative py-20 px-6 md:px-16 bg-gray-900 text-white text-center">
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-600 opacity-20 blur-3xl"></div>

                    {/* Animated Heading */}
                    <motion.h2
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-5xl py-4 font-extrabold bg-gradient-to-r from-purple-400 to-purple-800 text-transparent bg-clip-text"
                    >
                        Innovation Digital Excellence
                    </motion.h2>

                    {/* Description */}

                    <motion.p
                        className="mt-4 text-lg text-gray-300 mx-auto leading-relaxed md:text-xl max-w-5xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        At <span className="font-bold">Team Website</span>, we are more than just a web development agency.
                        We craft innovative digital solutions, pushing the boundaries of technology to empower businesses.
                        Our expertise in cutting-edge web development transforms visions into reality, ensuring a future-proof online presence.
                    </motion.p>

                    {/* Service Highlights */}
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                        <div className="px-6 py-3 md:w-auto w-full bg-white/10 border border-white/20 rounded-lg shadow-md hover:bg-white/20 transition-all">
                            🚀 Fast & Scalable
                        </div>
                        <div className="px-6 py-3 md:w-auto w-full bg-white/10 border border-white/20 rounded-lg shadow-md hover:bg-white/20 transition-all">
                            🎨 Modern UI/UX
                        </div>
                        <div className="px-6 py-3 md:w-auto w-full bg-white/10 border border-white/20 rounded-lg shadow-md hover:bg-white/20 transition-all">
                            🔍 SEO & Performance Optimized
                        </div>
                    </div>
                </section>

                <div className='max-w-7xl mx-auto my-32  flex justify-center items-center'>

                    <div className=' w-full mx-auto  leading-relaxed md:ml-2'>
                        <h4 className='text-5xl font-bold mb-28'>Meet <span className='text-purple-700'>Our Team</span></h4>
                        <div
                            className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 '
                        >
                            {members?.length > 0 && members?.map((member, i) => <AgencyMemberCard
                            data-aos='fade-up'
                            img={member?.img} name={member?.name} position={member?.position} />)}
                        </div>

                    </div>
                </div>
              

                <HireMessageSection/>
            </div>
        </motion.section>


    );
};

export default AboutUs;
