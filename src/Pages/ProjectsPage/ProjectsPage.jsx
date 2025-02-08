import { useEffect, useRef, useState } from "react";
import Vimeo from "@vimeo/player";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import 'aos/dist/aos.css'; // import AOS styles
import AOS from 'aos'; // import AOS library
import HireMessageSection from "../HomePage/Components/HireMessageSection";
import { Helmet } from "react-helmet";


const ProjectsPage = () => {
    const projects = [
        {
            "projectName": "Travel agency",
            "imageLink": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739008163/project1_iglyke.png",
            "fullPageImage": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739008448/project12_ctdikz.png",
            "budget": "$1000",
            "deliveryDate": "2024-01-15",
            "totalBudget": "$1100",
            "postLaunchSupport": "6 months of free support",
            "clientReview": {
                name: "jackhurst21",
                description: "If you’re looking for a reliable web developer, I highly recommend Ali or Team Webio. They went above and beyond to bring my vision to life with professionalism and attention to detail. Thank you for your exceptional work!",
                rating: 5,
                country: 'USA',
                image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/73a67eb9d672b6b2af09e68be242c3b4-1650110331732/51d74721-d9aa-4bfc-80ed-7df6eab54fee.jpg",
            }
        },
        {
            "projectName": "Trade Development Corporation",
            "imageLink": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739008025/proejct5_evijvr.png",
            "fullPageImage": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739007699/project52_wkzmqq.png",
            "budget": "$900",
            "deliveryDate": "2023-12-05",
            "totalBudget": "$1100",
            "postLaunchSupport": "1 year of free maintenance",
            "clientReview": {

                name: "jonathanncrotea",
                description: "Team webio delivered exceptional work with top-notch professionalism, coding expertise, and keen attention to detail. His clear communication, deep understanding, and timely delivery made the experience fantastic 😊. Highly recommended for any web development project!",
                rating: 5,
                country: 'USA',
                image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/30e62db68b16fa4c8a2916361730e460-1668361105806/951eedd0-c37c-419f-82f6-ef02262fac03.jpg",
            },

        },
        {
            "projectName": "Restaurant management system",
            "imageLink": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739007755/project3_rghw7d.png",
            "fullPageImage": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739007702/project32_vuo1mn.png",
            "budget": "$800",
            "deliveryDate": "2024-02-20",
            "totalBudget": "$1000",
            "postLaunchSupport": "3 months of free updates",
            "clientReview": {

                name: "tfreed253",
                description: "Ali and his team are truly experts in web development! They took the time to understand my needs and created a website that looks great and functions flawlessly. The project was completed ahead of schedule, and the results exceeded my expectations.",
                rating: 5,
                country: 'United States',
                image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/a4e00e6ac56dff39a8521bff54bebdd1-1406820701671773196.357586/B4CE595B-987D-48F7-82FE-3F8DA12107B9",
            },
        },
        {
            "projectName": "Online Restaurant",
            "imageLink": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739007691/project4_kef8iw.png",
            "fullPageImage": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739007688/project42_eecm8g.png",
            "budget": "$1000",
            "deliveryDate": "2023-11-10",
            "totalBudget": "$1100",
            "postLaunchSupport": "Lifetime minor updates",
            "clientReview": {

                name: "mikedz1",
                description: "I struggled to find a reliable web development team until I found Team Webio. Their expertise, dedication, and problem-solving skills are top-notch. The final product was better than I imagined, and their support throughout the process was fantastic!",
                rating: 5,
                country: 'Netherlands',
                image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/bdb931f6c01a5fbd652f83ad39194162-1737455235273/4a79d056-0168-467d-9967-c088c1d9db17.jpeg",
            },
        },
        {
            "projectName": "Car selling",
            "imageLink": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739007699/project6_pcguzz.png",
            "fullPageImage": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739007950/project62_slp60t.png",
            "budget": "$2000",
            "deliveryDate": "2023-09-15",
            "totalBudget": "$2200",
            "postLaunchSupport": "6 months of free bug fixes",
            "clientReview": {
                name: "atizzle7",
                description: "Team Webio is a game-changer! They transformed my outdated website into a modern, high-performing platform that attracts more visitors and conversions. Their design skills, responsiveness, and professionalism set them apart from the rest.",
                rating: 5,
                country: 'United States',
                image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/6d1e2fb6a1497e39611ff77f52587c6b-1930972441737644521.762051/0A77E4FE-18E7-4CD6-A926-1F49C7BFA65F",
            },
        },
        {
            "projectName": "bLood Donation non-profit",
            "imageLink": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739007681/project2_rbgwdy.png",
            "fullPageImage": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739007688/project22_nauyai.png",
            "budget": "$400",
            "deliveryDate": "2024-03-12",
            "totalBudget": "$500",
            "postLaunchSupport": "1 year of free consultations",
            "clientReview": {

                name: "achsial",
                description: "If you're looking for a web development agency that delivers high-quality results on time, look no further than Team Webio. Ali and his team went above and beyond to ensure every detail was perfect. I’m beyond satisfied with their service",
                rating: 5,
                country: 'Austria',
                image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/1a57aea77a99a9b6c50c32c2e8e381d3-1553341450844/41f18a91-78e7-4c0d-ac2d-7219b8d4af80.jpg",
            },
        },
        {
            "projectName": "E-commerce, gadget selling",
            "imageLink": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739029426/headphone_nmfzer.png",
            "fullPageImage": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739029420/headphone2_m1hp7x.png",
            "budget": "$850",
            "deliveryDate": "2023-10-25",
            "totalBudget": "$1000",
            "postLaunchSupport": "2 years of free updates",
            "clientReview": {

                name: "nadster74",
                description: "From start to finish, Team Webio was incredible to work with. They understood my requirements, provided expert recommendations, and delivered a website that not only looks amazing but also functions seamlessly. I highly recommend them!",
                rating: 5,
                country: 'France',
                image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/1cec3f3b5d20540ddd6fa4aadadf30e0-1727697705673/762e575c-feed-4019-bea8-37c6bbcea053.jpg",
            },
        },
        {
            "projectName": "Photography website",
            "imageLink": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739029448/camera_b5qfzi.png",
            "fullPageImage": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739029419/camera_2_kadmrm.png",
            "budget": "$750",
            "deliveryDate": "2023-08-30",
            "totalBudget": "$800",
            "postLaunchSupport": "3 months of performance monitoring",
            "clientReview": {

                name: "elad345",
                description: "Working with Team Webio was a fantastic experience! They built a fully responsive and visually stunning website for my business. Their professionalism and dedication made the entire process smooth and enjoyable.",
                rating: 5,
                country: 'United States',
                image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/566db1695f1a1c83dfb6df476aa5bf4e-10831521736636853.093014/6ADDE82B-8EB8-46FD-B5AD-6D3AD73A0B1A",
            },
        },
        {
            "projectName": "Sports",
            "imageLink": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739029441/play_muhkcp.png",
            "fullPageImage": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739029427/play2_u1w2tc.png",
            "budget": "$1000",
            "deliveryDate": "2023-07-22",
            "totalBudget": "$1200",
            "postLaunchSupport": "1 year of security updates",
            "clientReview": {

                name: "sharielehman",
                description: "Team webio developers have exceptional talent! I was frustrated and stuck, but he stepped in and solved my problem perfectly. His precision, attention to detail, and transparency made the process seamless. Plus, his super-fast delivery saved me valuable time. Highly recommend—definitely 5 stars!",
                rating: 5,
                country: 'usa',
                image: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_small/v1/attachments/profile/photo/9318ed022429b1e0bf6f9321089cba5c-1657982287457/d6a8274f-5db8-442f-9e72-273bed94b83a.jpg",
            },
        },

    ];





    const navigate = useNavigate()


    const [hoveredIndex, setHoveredIndex] = useState(null);
    const iframeRefs = useRef([]);

    const saveProjectToLocalStorage = (project) => {
        localStorage.setItem("selectedProject", JSON.stringify(project));
        navigate('/project/details');
    };

    useEffect(() => {
        iframeRefs.current.forEach((iframe, index) => {
            if (iframe && !iframeRefs.current[index]?.player) {
                iframeRefs.current[index].player = new Vimeo(iframe);
            }
        });
    }, []);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
        if (iframeRefs.current[index]?.player) {
            iframeRefs.current[index].player.play();
        }
    };

    const handleMouseLeave = () => {
        if (hoveredIndex !== null && iframeRefs.current[hoveredIndex]?.player) {
            iframeRefs.current[hoveredIndex].player.pause();
        }
        setHoveredIndex(null);
    };

    useEffect(() => {
        const styles = `
        @keyframes scrollImage {
            from { transform: translateY(0); }
            to { transform: translateY(-100%); }
        }`;

        const styleSheet = document.createElement("style");
        styleSheet.type = "text/css";
        styleSheet.innerText = styles;
        document.head.appendChild(styleSheet);

        return () => {
            document.head.removeChild(styleSheet); // Cleanup when component unmounts
        };
    }, []);


    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className=""
            aria-label="Our Services"
        >
            <Helmet>
                <title>Team Webio | Projects</title>
                <meta description='Discover our latest projects showcasing innovation, creativity, and technical excellence.' />
            </Helmet>

            <div className="max-w-7xl w-full mx-auto">
                <div data-aos='fade-up' className="text-center my-10 py-10">
                    <h1 className="text-6xl font-extrabold text-gray-900">Explore Our <span className="text-purple-700">Projects</span></h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our latest projects showcasing innovation, creativity, and technical excellence.
                    </p>
                </div>
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 mb-40 mt-20 gap-20 grid-cols-1">
                    {projects.map((project, index) => (
                        <div
                            data-aos='fade-up'
                            key={index}
                            className="shadow-2xl shadow-black rounded-md cursor-pointer"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="relative w-full border-b border-b-purple-700 h-96 md:h-[400px] bg-gray-900 rounded-3xl overflow-hidden">
                                <img
                                    src={project.imageLink}
                                    alt="Thumbnail"
                                    className={`absolute  inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredIndex === index ? "opacity-0" : "opacity-100"}`}
                                />
                                {hoveredIndex === index && (
                                    <div className="absolute inset-0 overflow-hidden">
                                        <img
                                            src={project.fullPageImage}
                                            alt="Full Page Screenshot"
                                            className="absolute w-full object-cover"
                                            style={{ animation: "scrollImage 5s linear infinite", zIndex: 10 }}
                                        />
                                    </div>
                                )}

                            </div>
                            <div

                                onClick={() => saveProjectToLocalStorage(project)}
                                className="flex justify-between bg-white p-6 items-center">
                                <h4 className="text-2xl font-bold">{project.projectName}</h4>
                                <button className="bg-gradient-to-t from-purple-400 to-purple-800 text-purple-100 font-semibold px-14 py-2 my-1 rounded-md hover:scale-105 text-lg shadow-lg transition-all duration-300 hover:bg-purple-700 hover:text-white hover:shadow-xl">
                                    Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <HireMessageSection firstPart={'Let’s Elevate Your Business '} lastPart={'Together !'} />
        </motion.section>
    );
};

export default ProjectsPage;
