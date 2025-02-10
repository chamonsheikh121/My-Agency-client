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

        name: "jackhurst21",
        description: "If you’re looking for a reliable web developer, I highly recommend Ali or Team Webio. They went above and beyond to bring my vision to life with professionalism and attention to detail. Thank you for your exceptional work!",
        rating: 5,
        country: 'usa',
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/73a67eb9d672b6b2af09e68be242c3b4-1650110331732/51d74721-d9aa-4bfc-80ed-7df6eab54fee.jpg",
    },

    {

        name: "jonathanncrotea",
        description: "Team webio delivered exceptional work with top-notch professionalism, coding expertise, and keen attention to detail. His clear communication, deep understanding, and timely delivery made the experience fantastic 😊. Highly recommended for any web development project!",
        rating: 5,
        country: 'usa',
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/30e62db68b16fa4c8a2916361730e460-1668361105806/951eedd0-c37c-419f-82f6-ef02262fac03.jpg",
    },
    {

        name: "averydm2015",
        description: "I was amazed by the professionalism and efficiency of Team Webio. They not only built a stunning website but also ensured it was optimized for performance and SEO. Their communication was clear, and they delivered everything on time!",
        rating: 5,
        country: 'United States',
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/236ed81d0046ecccf37a6c8f07701da5-1645501439848/b01d947b-5fb2-4aaf-ad36-eea0c038ddd3.jpg",
    },
    {

        name: "tfreed253",
        description: "Ali and his team are truly experts in web development! They took the time to understand my needs and created a website that looks great and functions flawlessly. The project was completed ahead of schedule, and the results exceeded my expectations.",
        rating: 5,
        country: 'United States',
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/a4e00e6ac56dff39a8521bff54bebdd1-1406820701671773196.357586/B4CE595B-987D-48F7-82FE-3F8DA12107B9",
    },
    {

        name: "mikedz1",
        description: "I struggled to find a reliable web development team until I found Team Webio. Their expertise, dedication, and problem-solving skills are top-notch. The final product was better than I imagined, and their support throughout the process was fantastic!",
        rating: 5,
        country: 'Netherlands',
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/bdb931f6c01a5fbd652f83ad39194162-1737455235273/4a79d056-0168-467d-9967-c088c1d9db17.jpeg",
    },
    {

        name: "atizzle7",
        description: "Team Webio is a game-changer! They transformed my outdated website into a modern, high-performing platform that attracts more visitors and conversions. Their design skills, responsiveness, and professionalism set them apart from the rest.",
        rating: 5,
        country: 'United States',
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/6d1e2fb6a1497e39611ff77f52587c6b-1930972441737644521.762051/0A77E4FE-18E7-4CD6-A926-1F49C7BFA65F",
    },
    {

        name: "achsial",
        description: "If you're looking for a web development agency that delivers high-quality results on time, look no further than Team Webio. Ali and his team went above and beyond to ensure every detail was perfect. I’m beyond satisfied with their service",
        rating: 5,
        country: 'Austria',
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/1a57aea77a99a9b6c50c32c2e8e381d3-1553341450844/41f18a91-78e7-4c0d-ac2d-7219b8d4af80.jpg",
    },
    {

        name: "nadster74",
        description: "From start to finish, Team Webio was incredible to work with. They understood my requirements, provided expert recommendations, and delivered a website that not only looks amazing but also functions seamlessly. I highly recommend them!",
        rating: 5,
        country: 'France',
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/1cec3f3b5d20540ddd6fa4aadadf30e0-1727697705673/762e575c-feed-4019-bea8-37c6bbcea053.jpg",
    },
    {

        name: "elad345",
        description: "Working with Team Webio was a fantastic experience! They built a fully responsive and visually stunning website for my business. Their professionalism and dedication made the entire process smooth and enjoyable.",
        rating: 5,
        country: 'United States',
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/566db1695f1a1c83dfb6df476aa5bf4e-10831521736636853.093014/6ADDE82B-8EB8-46FD-B5AD-6D3AD73A0B1A",
    },
    {

        name: "laceyspassports",
        description: "Ali and his team at Team Webio are the best in the industry! They designed a custom website that met all my business needs. Their fast delivery and attention to detail impressed me the most. I’ll definitely work with them again!",
        rating: 5,
        country: 'United States',
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/4fa0db8818a7c8c7738df23d91b27802-661051281681579892.0105891/9F9F206B-0F6B-4A15-A247-93306DBB58F4",
    },
    {

        name: "sharielehman",
        description: "Team webio developers have exceptional talent! I was frustrated and stuck, but he stepped in and solved my problem perfectly. His precision, attention to detail, and transparency made the process seamless. Plus, his super-fast delivery saved me valuable time. Highly recommend—definitely 5 stars!",
        rating: 5,
        country: 'usa',
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/9318ed022429b1e0bf6f9321089cba5c-1657982287457/d6a8274f-5db8-442f-9e72-273bed94b83a.jpg",
    },
    {

        name: "lolitamoore",
        description: "I was skeptical about hiring an agency online, but Team Webio proved to be the best choice. They communicated clearly, understood my business goals, and built a website that truly represents my brand. Outstanding service!",
        rating: 5,
        country: 'United States',
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/6a9c32d6929f0394f5e256b523b78d05-1606487524143/699bd4f5-c19e-4f87-9738-f9735286a515.jpg",
    },
    {

        name: "luisquinones262",
        description: "Team Webio’s work is exceptional! They delivered a website that is not only visually appealing but also fast, secure, and easy to manage. Their technical expertise is truly impressive!",
        rating: 5,
        country: 'United States',
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/e3f3c40b6e45e834aa60bb8de3c55340-805396321730174136.359225/3348CAC1-F737-4DED-9486-109C131C8B6C",
    },
    {

        name: "losteve175",
        description: "Choosing Team Webio for my website development was the best decision! They made the entire process stress-free, delivered top-notch work, and provided excellent support even after project completion.",
        rating: 5,
        country: 'United States',
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/a6ee9f4f6f459816775ca306827d7916-1439870121735850837.059329/1BE37F0B-8A7B-4FEC-A8CA-184B435A5A71",
    },
    {

        name: "jdeang",
        description: "Ali and his team at Team Webio are incredibly talented! They transformed my rough ideas into a stunning, fully functional website. Their ability to execute projects with precision and creativity is unmatched!",
        rating: 5,
        country: 'United States',
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/f95362c116ba21452384ab92688521e8-1633311441734065457.886616/672672DA-09F1-49CD-BD9B-27338D3A85D8",
    },
    {

        name: "fraternity222",
        description: "I needed an e-commerce website, and Team Webio delivered a seamless, user-friendly platform that exceeded my expectations. Their expertise in web development and commitment to quality are evident in their work.",
        rating: 5,
        country: 'United Kingdom',
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/fa3e5ae94fc29ff0c0af8bfb0541ec5b-1782790981731364339.3535352/07692F95-6B44-4C36-BF5C-85EC29844463",
    },
    {

        name: "scotthickeyf1",
        description: "Exceptional service from Team Webio! They delivered a high-quality website, handled every request with professionalism, and ensured I was satisfied at every step. I highly recommend them to anyone in need of a reliable web development team!",
        rating: 5,
        country: 'Italy',
        image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/92ecceea7a333d9f12864fa8b1c8e503-1476898581710088691.137126/53879C39-11C5-4BB2-B879-6C04CC48C1F0",
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
            <div className="h-full w-full bg-black md:py-20  bg-opacity-60">
                <div className="max-w-xl ">
                    <div className="bg-purple-700 mb-20 text-white rounded-md shadow-md shadow-purple-500 backdrop-blur-sm p-4  inline-block text-center">
                        <h2 className="md:text-5xl  font-extrabold ">
                            <span className="">What Our</span> Clients Say
                        </h2>
                        <hr className="w-1/4 border-b-2 border-white  mt-2" />
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 w-full mt-10">
                <div data-aos="zoom-in-down" className="max-w-7xl mx-auto  md:mr-0 mb-10 z-30 rounded-xl p-8 ">

                    <Swiper
                        spaceBetween={0}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        // pagination={{ clickable: true }}
                        modules={[Autoplay, Pagination]}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                    >
                        {reviews.map((review) => (
                            <SwiperSlide key={review.id}>
                                <div className="bg-gradient-to-tr from-purple-400 to-purple-800 p-6 rounded-xl shadow-md shadow-purple-700 m-4 text-center h-[400px] flex flex-col justify-between gap-1  transform transition-transform hover:scale-105">
                                    <div className="flex justify-center">
                                        <img
                                            src={review.image}
                                            alt={review.name}
                                            className="w-20 h-20 rounded-full border-4 border-white object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm text-white italic flex items-center justify-center">
                                            <FaQuoteLeft className="mr-2" />
                                            {review.description}
                                        </p>
                                    </div>
                                    <h4 className="mt-0 text-2xl font-semibold text-white">{review.name}</h4>
                                    <p className="font-bold">{review?.country}</p>
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
