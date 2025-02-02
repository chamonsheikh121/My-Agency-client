import { motion } from 'framer-motion';
import Banner from "./Components/Banner";
import Marquee from "react-fast-marquee";
import Review from "./Components/Review";
import AboutUs from "./Components/AboutUs";
import WeHaveCompleted from "./Components/WeHaveCompleted";
import Portfolio from "./Components/Portfolio";
import MarqueSectionLeft from "./Components/MarqueSectionLeft";
import MarqueSectionRight from "./Components/MarqueSectionRight";
import FAQSection from "./Components/FAQSection";
import HireMessageSection from "./Components/HireMessageSection";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const HomePage = () => {
    const services = [
        { title: 'web development' },
        { title: 'web design' },
        { title: 'E-commerce website' },
        { title: 'web development' },
        { title: 'web development' },
    ];

    return (
        <div className="space-y-40">
            {/* Banner Section with Animation */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="max-w-7xl mx-auto"
            >
                <Banner />
            </motion.div>
            
            {/* Starry Marquee Section with Animation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            >
                <Link to='/services'>
                    <div className="relative bg-purple-900 py-10 mt-20 hover:scale-105 duration-500 transition-all overflow-hidden shadow-2xl">
                        {/* Starry Background */}
                        <div className="absolute inset-0 opacity-100 pointer-events-none">
                            {[...Array(100)].map((_, i) => (
                                <FaStar
                                    key={i}
                                    className="absolute text-white animate-pulse"
                                    style={{
                                        top: `${Math.random() * 100}%`,
                                        left: `${Math.random() * 100}%`,
                                        fontSize: `${Math.random() * 1.2 + 0.3}rem`,
                                        animationDuration: `${Math.random() * 3 + 2}s`,
                                    }}
                                />
                            ))}
                        </div>

                        {/* Animated Grid Overlay */}
                        <div className="absolute inset-0 bg-transparent bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20 pointer-events-none animate-pulse"></div>

                        {/* Neon Glow Effect */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(173,216,230,0.07),_transparent),radial-gradient(circle_at_bottom_right,_rgba(238,130,238,0.07),_transparent)]"></div>

                        {/* Outer Shadow for Depth */}
                        <div className="absolute -inset-4 blur-3xl opacity-30 bg-purple-500/20"></div>

                        {/* Marquee Content */}
                        <Marquee speed={150}>
                            {services.map((item, i) => (
                                <div className="mx-20 p-6 space-y-4 bg-white/10 backdrop-blur-lg shadow-lg duration-300 ease-in-out flex items-start flex-col justify-center">
                                    <h1 className="text-2xl font-semibold text-gray-100">{item.title}</h1>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </Link>
            </motion.div>

            {/* About Us Section with Animation */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="max-w-7xl mx-auto"
            >
                <AboutUs />
            </motion.div>

            {/* Marquee Sections with Different Animations */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                className="space-y-20"
            >
                <MarqueSectionLeft />
                <MarqueSectionRight />
            </motion.div>

            {/* FAQ Section with Animation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                className="pb-40"
            >
                <FAQSection />
            </motion.div>

            {/* Portfolio, Review, and Hire Message Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
            >
                <Portfolio />
                <Review />
                <HireMessageSection />
            </motion.div>
        </div>
    );
};

export default HomePage;
