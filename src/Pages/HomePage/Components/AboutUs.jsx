import { useEffect } from 'react';
import 'aos/dist/aos.css'; // import AOS styles
import AOS from 'aos'; // import AOS library

const AboutUs = () => {

    useEffect(() => {
        // Initialize AOS with custom settings
        AOS.init({
            duration: 1000, // duration of the animation
            easing: 'ease', // easing function
            once: false, // whether animation should happen only once or every time it comes into view
        });

        // Refresh AOS after initialization
        AOS.refresh(); // Force AOS to trigger again in case of any issues

    }, []);

    return (
        <section
            data-aos="fade-up"
            data-aos-duration="3000"
            className="relative py-16 px-6 md:px-12 lg:px-16 flex flex-col md:flex-row items-center gap-10"
            style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?business,technology')" }}
        >
            {/* Overlay */}
            <div

                className="absolute inset-0 bg-white opacity-60"
            ></div>

            {/* Content Wrapper */}
            <div className="relative w-full flex flex-col md:flex-row items-center gap-20">
                {/* Left Side: Images */}
                <div className="relative h-[500px] w-full md:w-1/2 flex items-center justify-center">
                    {/* Top Left Image */}
                    <div data-aos="fade-up"  className="absolute object-cover hover:shadow-2xl hover:scale-105 transition-all top-0 right-0 shadow-lg rounded-br-[100px] rounded-tl-[100px] w-40 md:w-60 h-[300px]">
                        <img
                            
                            src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Team Working"
                            className="absolute object-cover hover:shadow-2xl hover:scale-105 transition-all top-0 right-0 shadow-lg rounded-br-[100px] rounded-tl-[100px] w-40 md:w-60 h-[300px]"
                        />
                    </div>

                    {/* Bottom Right Image */}

                    <div data-aos="fade-down" className='absolute object-cover hover:shadow-2xl hover:scale-105 transition-all bottom-0 rounded-br-[100px] rounded-tl-[100px] left-0 h-[300px] shadow-lg w-40 md:w-60'>
                        <img
                            src="https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Office Environment"
                            className=" object-cover hover:shadow-2xl hover:scale-105 transition-all rounded-br-[100px] rounded-tl-[100px]  h-full shadow-lg w-full"
                        />
                    </div>

                    {/* Employee Count */}
                    <div className="absolute hover:shadow-2xl hover:scale-105 transition-all top-4 left-4 text-white bg-purple-600 px-10 py-2 rounded-lg shadow-lg">
                        <span className="text-lg font-bold">100+</span>
                        <p className="text-sm">Employees</p>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className="text-purple-500 font-semibold uppercase text-sm">About Us</h3>
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight mt-2">
                        We Provide The <span className="text-purple-700">Best Services</span> To Grow Your Business!
                    </h2>
                    <p className="text-gray-500 mt-4 text-lg font-semibold">
                        With expertise spanning multiple industries, we craft <strong>powerful and innovative</strong> custom web solutions that enhance user experience, boost engagement, and optimize performance. Whether it’s an <strong>e-commerce store, SaaS platform, enterprise website,</strong> or a <strong>custom-coded solution</strong>, we leverage the latest technologies to turn your vision into reality with precision and excellence.
                    </p>
                    <button data-aos="zoom-in" className="mt-6 text-white bg-purple-600 hover:bg-gradient-to-t from-purple-500 to-purple-700 hover:shadow-xl font-semibold px-6 py-3 rounded-lg shadow-md transition">
                        📩 Get in touch today!
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
