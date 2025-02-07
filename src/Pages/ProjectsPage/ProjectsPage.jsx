import { useEffect, useRef, useState } from "react";
import Vimeo from "@vimeo/player";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import 'aos/dist/aos.css'; // import AOS styles
import AOS from 'aos'; // import AOS library
import HireMessageSection from "../HomePage/Components/HireMessageSection";
import { Helmet } from "react-helmet";
import img from './../../assets/reviewbg.jpg'
import secondImg from './../../assets/2nd.png'

const ProjectsPage = () => {
    const projects = [
        {
            "projectName": "Tech Startup Website",
            "imageLink": img,
            "fullPageImage": secondImg, // Full-page screenshot
            "videoLink": "https://player.vimeo.com/video/1052802645?h=04f3f00889&",
            "budget": "$10,000",
            "country": "USA",
            "clientName": "John Doe",
            "deliveryDate": "2024-01-15",
            "projectType": "SaaS Website",
            "websiteURL": "https://www.techstartup.com",
            "technologyStack": ["React", "Node.js", "MongoDB", "Figma"],
            "totalBudget": "$10,000",
            "postLaunchSupport": "6 months of free support",
            "clientReview": {
                "name": "Chris Wilson",
                "description": "Amazing work! The website runs smoothly and looks fantastic.",
                "rating": 5,
                "image": "https://randomuser.me/api/portraits/men/5.jpg",
            },
        }
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
                    <h1 className="text-5xl font-bold text-gray-900">Explore Our <span className="text-purple-700">Projects</span></h1>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Discover our latest projects showcasing innovation, creativity, and technical excellence.
                    </p>
                </div>
                <div className="max-w-5xl mx-auto grid lg:grid-cols-2 mb-40 mt-20 gap-10 grid-cols-1">
                    {projects.map((project, index) => (
                        <div
                            data-aos='fade-up'
                            key={index}
                            className="shadow-2xl shadow-black rounded-md cursor-pointer"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="relative w-full h-96 md:h-[400px] bg-gray-900 rounded-3xl overflow-hidden">
                                <img
                                    src={project.imageLink}
                                    alt="Thumbnail"
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hoveredIndex === index ? "opacity-0" : "opacity-100"}`}
                                />
                                {hoveredIndex === index && (
                                    <div className="absolute inset-0 overflow-hidden">
                                        <img
                                            src={project.fullPageImage}
                                            alt="Full Page Screenshot"
                                            className="absolute w-full object-cover"
                                            style={{ animation: "scrollImage 3s linear infinite", zIndex: 10 }}
                                        />
                                    </div>
                                )}

                            </div>
                            <div

                                onClick={() => saveProjectToLocalStorage(project)}
                                className="flex justify-between  p-6 items-center">
                                <h4 className="text-2xl font-bold">{project.projectName}</h4>
                                <button className="bg-gradient-to-t from-purple-400 to-purple-800 text-purple-100 font-semibold px-14 py-2 rounded-md hover:scale-105 text-lg shadow-lg transition-all duration-300 hover:bg-purple-700 hover:text-white hover:shadow-xl">
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
