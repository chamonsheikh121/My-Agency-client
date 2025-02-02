import { useEffect, useState } from 'react';
import bannerImg from './../../../assets/pexels-cottonbro-7438103.jpg'
import TextAnimation from './TextAnimation';

const Banner = () => {


    const [shake, setShake] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        setShake(true);
        setTimeout(() => setShake(false), 300); // Shake for 300ms, then stop
      }, 2000); // Every 5 seconds
  
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
                                <h1 className="text-5xl text-start font-extrabold uppercase tracking-widest transition-colors duration-300 group-hover:text-purple-700">
                                    Development
                                </h1>
                            </div>


                            <h1 className=" text-5xl text-start font-extrabold uppercase tracking-widest">Solutions</h1>
                            <p className=" text-xl text-start opacity-90">
                                At Team Website, we go beyond being just a web development service provider; we are pioneers of digital transformation, builders of cutting-edge web solutions, and dedicated partners in shaping your online presence for the future.
                            </p>
                        </div>
                    </div>

                    <button
      className={`bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all relative 
      ${shake ? "animate-shake" : ""}`}
    >
      🚀 Hire Now
    </button>

                    {/* Reviews Section */}
                    <div className="flex items-center space-x-4 pt-6">
                        <div className="flex -space-x-2">
                            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/1.jpg" alt="User" />
                            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/2.jpg" alt="User" />
                            <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/3.jpg" alt="User" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-purple-700">19.5K+ Reviews</h4>
                            <p className="text-gray-500 text-sm">Internationally</p>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-3/4 flex justify-end relative mt-8 md:mt-0 before:absolute before:top-[-20px] before:right-[-16px] before:border-t-4 before:border-r-4 before:border-purple-600 before:w-32 before:h-32 before:rounded-tr-lg after:absolute after:bottom-[-20px] after:left-[-18px] after:border-b-4 after:border-l-4 after:border-purple-600 after:w-32 after:h-32 after:rounded-bl-lg">
                    <img
                        src={bannerImg}
                        alt="Office Environment"
                        className="w-full h-[600px] hover:scale-105 transition-all shadow-2xl object-cover rounded-tl-[80px] rounded-br-[80px]"
                    />
                    <div className="absolute bottom-0 left-0">
                        <TextAnimation />
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Banner;
