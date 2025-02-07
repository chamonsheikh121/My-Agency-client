import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import bgImage from './../../../assets/reviewbg.jpg'
import 'aos/dist/aos.css'; // import AOS styles
import AOS from 'aos'; // import AOS library

const reviews = [
    {
        id: 1,
        name: "John Doe",
        description: "Great service! Highly recommended for web development solutions.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        id: 2,
        name: "Jane Smith",
        description: "Excellent team! The project was delivered on time and exceeded expectations.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        id: 3,
        name: "Michael Brown",
        description: "Very professional and responsive. Will work with them again!",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
        id: 4,
        name: "Emily Davis",
        description: "Good experience. Support team is very helpful!",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        id: 5,
        name: "Chris Wilson",
        description: "Amazing work! The website runs smoothly and looks fantastic.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        id: 5,
        name: "Chris Wilson",
        description: "Amazing work! The website runs smoothly and looks fantastic.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        id: 5,
        name: "Chris Wilson",
        description: "Amazing work! The website runs smoothly and looks fantastic.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        id: 5,
        name: "Chris Wilson",
        description: "Amazing work! The website runs smoothly and looks fantastic.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        id: 5,
        name: "Chris Wilson",
        description: "Amazing work! The website runs smoothly and looks fantastic.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        id: 5,
        name: "Chris Wilson",
        description: "Amazing work! The website runs smoothly and looks fantastic.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
];

const Review = () => {


    useEffect(() => {

        AOS.init({
            duration: 1000,
            easing: 'ease',
            once: false,
        });


        AOS.refresh();

    }, []);


    return (
        <div
            className="h-screen  relative bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="h-full w-full bg-black py-32 bg-opacity-40">
                <div className="max-w-xl ">
                    <div className="bg-purple-700 text-white rounded-md shadow-2xl shadow-purple-400 backdrop-blur-sm p-4  inline-block text-center">
                        <h2 className="text-5xl  font-extrabold ">
                            <span className="">What Our</span> Clients Say
                        </h2>
                        <hr className="w-1/4 border-b-2 border-white  mt-2" />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 w-full ">
                <div data-aos="zoom-in-down" className="max-w-5xl mx-auto  md:mr-10 mb-10 z-30 rounded-xl p-8 ">

                    <Swiper
                        spaceBetween={0}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        modules={[Autoplay, Pagination]}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {reviews.map((review) => (
                            <SwiperSlide key={review.id}>
                                <div className="bg-gradient-to-tr from-purple-400 to-purple-800 p-6 rounded-xl shadow-md shadow-purple-700 m-4 text-center   h-[350px] flex flex-col justify-center gap-4 transform transition-transform hover:scale-105">
                                    <div className="flex justify-center">
                                        <img
                                            src={review.image}
                                            alt={review.name}
                                            className="w-20 h-20 rounded-full border-4 border-white object-cover"
                                        />
                                    </div>
                                    <p className="text-lg text-white italic flex items-center justify-center">
                                        <FaQuoteLeft className="mr-2" />
                                        {review.description}
                                    </p>
                                    <h4 className="mt-4 text-lg font-semibold text-white">{review.name}</h4>
                                    <div className="mt-2 flex justify-center space-x-1">
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <span key={index} className={`text-xl ${index < review.rating ? "text-yellow-400" : "text-gray-300"}`}>
                                                ⭐
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Review;
