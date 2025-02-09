import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ id, title, description, img, visibleCard }) => {
    const cardRef = useRef(null);
    const isActive = visibleCard == id; // Check if this card is currently visible
    console.log(isActive, id);

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
            ref={cardRef}
            data-id={id}
            data-aos="fade-up"
            className={`service-card flex flex-col-reverse lg:flex-row items-center w-full justify-between gap-10 py-16 px-4 md:px-20 relative`}
        >
            {/* Background Styling */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-purple-100 opacity-50 rounded-2xl blur-3xl"></div>

            {/* Text Content */}
            <div className="relative w-full p-6">
                <h2 className={`text-4xl font-extrabold transition-colors duration-500 ${isActive ? "text-purple-700" : "text-gray-900"}`}>
                    {title}
                </h2>
                <p className={`mt-4 text-lg leading-relaxed transition-colors duration-500 ${isActive ? "text-purple-700" : "text-gray-900"}`}>
                    {description}
                </p>
                <div className="mt-6 flex space-x-6">
                    <Link

                        onClick={(e) => {
                            e.preventDefault(); // Prevent React Router's default navigation
                            window.location.href = `/services/${id}`// Force a full reload
                        }}


                        to={`/services/${id}`}
                        className="px-10 shadow-purple-500 border-purple-700 py-2 border hover:shadow-xl hover:shadow-purple-300 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 hover:bg-transparent hover:border hover:border-purple-700 hover:text-purple-700 transition-all"
                    >
                        Learn More
                    </Link>
                </div>
            </div>

            {/* Image with Glow Effect */}
            <div className="relative w-3/4  hover:scale-105 transition-transform duration-300">
                <div className="absolute -top-5 -left-5 w-full h-full hover:opacity-0 transition-all duration-300 bg-purple-300 rounded-xl opacity-30 blur-2xl"></div>
                <img
                    src={img || "https://concise-studio.com/wp-content/webp-express/webp-images/themes/concise/assets/images/pages/services/ec-1.png.webp"}
                    alt={title}
                    className="w-full h-auto rounded-2xl shadow-lg "
                />
            </div>
        </div>
    );
};

export default ServiceCard;
