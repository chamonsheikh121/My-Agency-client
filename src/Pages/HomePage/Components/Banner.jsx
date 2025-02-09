import { useEffect, useState } from 'react';
import bannerImg from './../../../assets/pexels-cottonbro-7438103.jpg'
import TextAnimation from './TextAnimation';
import { motion } from 'framer-motion';

const Banner = () => {


    const [shake, setShake] = useState(false);

    useEffect(() => {
        const toggleShake = () => {
            setShake(true);

            setTimeout(() => {
                setShake(false);
            }, 2000); // Shake for 2 seconds
        };

        toggleShake(); // Start the first shake

        const interval = setInterval(toggleShake, 5000); // Repeat every 5 seconds (3s off + 2s on)

        return () => clearInterval(interval);
    }, []);



    return (
        <section className="relative w-full ">
            <div className=" flex flex-col  md:flex-row items-center px-6 gap-40 py-12 md:py-16">
                {/* Left Content */}
                <div className="w-full space-y-4 ">
                    <div className="relative w-full   flex items-center justify-center text-center  ">
                        <div className="absolute inset-0  rounded-lg"></div>
                        <div className="relative z-10 space-y-6">
                            <h2 className="text-start text-gray-400 text-4xl font-extrabold uppercase tracking-widest">Multinational</h2>
                            <h1 className=" text-5xl text-start font-extrabold uppercase tracking-wider">Digital</h1>
                            <div className="bg-purple-600 p-1 rounded-sm text-purple-50 transition-all duration-300 hover:bg-transparent hover:scale-105 group">
                                <h1 className="text-2xl text-start font-extrabold uppercase tracking-widest transition-colors duration-300 group-hover:text-purple-700">
                                    Web
                                </h1>
                                <h1 className="md:text-5xl text-3xl text-start font-extrabold uppercase tracking-widest transition-colors duration-300 group-hover:text-purple-700">
                                    Development
                                </h1>
                            </div>


                            <h1 className=" text-5xl text-start font-extrabold uppercase tracking-widest">Solutions</h1>
                            <p className=" text-xl text-start opacity-90">
                                At Team Webio, we go beyond being just a web development service provider; we are pioneers of digital transformation, builders of cutting-edge web solutions, and dedicated partners in shaping your online presence for the future.
                            </p>
                        </div>
                    </div>

                    <button
                        className={`bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all relative 
        ${shake ? "vibrateHire" : ""}`}
                    >
                         Hire Team Webio
                    </button>

                    {/* Reviews Section */}
                    <div className="flex items-center space-x-4 pt-6">
                        <div className="flex -space-x-2">
                            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/30e62db68b16fa4c8a2916361730e460-1668361105806/951eedd0-c37c-419f-82f6-ef02262fac03.jpg" alt="User" />
                            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/f95362c116ba21452384ab92688521e8-1633311441734065457.886616/672672DA-09F1-49CD-BD9B-27338D3A85D8" alt="User" />
                            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/6d1e2fb6a1497e39611ff77f52587c6b-1930972441737644521.762051/0A77E4FE-18E7-4CD6-A926-1F49C7BFA65F" alt="User" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-purple-700">10K+ Reviews</h4>
                            <p className="text-gray-500 text-sm">Globally</p>
                        </div>
                    </div>
                </div>

                {/* Right Image */}

                <motion.div
                    initial={{ opacity: 0, y: -300 }}  // Start above the screen
                    animate={{ opacity: 1, y: 0 }}     // End at its normal position
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="md:w-3/4 w-full  mx-auto"
                >
                    <div className="w-full flex md:h-full h-[400px] justify-end relative mt-8 md:mt-0 before:absolute before:top-[-20px] before:right-[-16px] before:border-t-4 before:border-r-4 before:border-purple-600 before:w-32 before:h-32 before:rounded-tr-lg after:absolute after:bottom-[-20px] after:left-[-18px] after:border-b-4 after:border-l-4 after:border-purple-600 after:w-32 after:h-32 after:rounded-bl-lg">
                        <img
                            src={bannerImg}
                            alt="Office Environment"
                            className="w-full md:h-[600px] h-full duration-500 hover:scale-105 transition-all shadow-2xl object-cover rounded-tl-[80px] rounded-br-[80px]"
                        />
                        <div className="absolute bottom-0 left-0">
                            <TextAnimation textColor={'white'} />
                        </div>
                    </div>
                </motion.div>

            </div>

        </section>
    );
};

export default Banner;
