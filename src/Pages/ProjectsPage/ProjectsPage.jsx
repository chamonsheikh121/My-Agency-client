import { useEffect, useRef, useState } from "react";
import Vimeo from "@vimeo/player";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ProjectsPage = () => {
    const projects = [
        {
            "projectName": "Tech Startup Website",
            "imageLink": "https://cdn.pixabay.com/photo/2020/05/22/08/17/breakfast-5204352_640.jpg",
            "videoLink": "https://player.vimeo.com/video/1052802645?h=04f3f00889&",
            "budget": "$10,000",
            "country": "USA",
            "clientName": "John Doe",
            "deliveryDate": "2024-01-15",
            "projectType": "SaaS Website",
            "websiteURL": "https://www.techstartup.com",
            "technologyStack": ["React", "Node.js", "MongoDB", "Figma"],
            "totalBudget": "$10,000",
            "clientReview": "Excellent work! The website exceeded our expectations.",
            "postLaunchSupport": "6 months of free support"
        },
        {
            "projectName": "E-Commerce Platform",
            "imageLink": "https://cdn.pixabay.com/photo/2020/05/22/08/17/breakfast-5204352_640.jpg",
            "videoLink": "https://player.vimeo.com/video/1052802645?h=04f3f00889&",
            "budget": "$15,000",
            "country": "UK",
            "clientName": "Jane Smith",
            "deliveryDate": "2024-02-10",
            "projectType": "E-Commerce",
            "websiteURL": "https://www.ecommerce.com",
            "technologyStack": ["Next.js", "Firebase", "Stripe", "TailwindCSS"],
            "totalBudget": "$15,000",
            "clientReview": "Great job! Smooth and fast website.",
            "postLaunchSupport": "12 months of ongoing support"
        },
        {
            "projectName": "Portfolio Website",
            "imageLink": "https://cdn.pixabay.com/photo/2020/05/22/08/17/breakfast-5204352_640.jpg",
            "videoLink": "https://player.vimeo.com/video/1052802645?h=04f3f00889&",
            "budget": "$5,000",
            "country": "Canada",
            "clientName": "Emily Johnson",
            "deliveryDate": "2023-12-20",
            "projectType": "Portfolio",
            "websiteURL": "https://www.emilyportfolio.com",
            "technologyStack": ["Gatsby", "GraphQL", "Styled Components"],
            "totalBudget": "$5,000",
            "clientReview": "Beautifully designed and functional!",
            "postLaunchSupport": "3 months of free updates"
        },
        {
            "projectName": "Real Estate Website",
            "imageLink": "https://cdn.pixabay.com/photo/2020/05/22/08/17/breakfast-5204352_640.jpg",
            "videoLink": "https://player.vimeo.com/video/1052802645?h=04f3f00889&",
            "budget": "$18,000",
            "country": "Australia",
            "clientName": "Michael Brown",
            "deliveryDate": "2024-03-01",
            "projectType": "Real Estate",
            "websiteURL": "https://www.realestatehub.com",
            "technologyStack": ["Vue.js", "Laravel", "MySQL"],
            "totalBudget": "$18,000",
            "clientReview": "Perfect for our needs. Very professional work!",
            "postLaunchSupport": "Ongoing support and maintenance"
        },
        {
            "projectName": "Healthcare Dashboard",
            "imageLink": "https://cdn.pixabay.com/photo/2020/05/22/08/17/breakfast-5204352_640.jpg",
            "videoLink": "https://player.vimeo.com/video/1052802645?h=04f3f00889&",
            "budget": "$20,000",
            "country": "Germany",
            "clientName": "Dr. Alice Cooper",
            "deliveryDate": "2024-02-25",
            "projectType": "Healthcare Management",
            "websiteURL": "https://www.healthdashboard.com",
            "technologyStack": ["Angular", "Spring Boot", "PostgreSQL"],
            "totalBudget": "$20,000",
            "clientReview": "Secure and efficient system!",
            "postLaunchSupport": "24/7 technical support"
        },
        {
            "projectName": "E-Learning Platform",
            "imageLink": "https://cdn.pixabay.com/photo/2020/05/22/08/17/breakfast-5204352_640.jpg",
            "videoLink": "https://player.vimeo.com/video/1052802645?h=04f3f00889&",
            "budget": "$22,000",
            "country": "India",
            "clientName": "Rajesh Patel",
            "deliveryDate": "2024-01-30",
            "projectType": "Education",
            "websiteURL": "https://www.onlinelearning.com",
            "technologyStack": ["Django", "React", "AWS S3"],
            "totalBudget": "$22,000",
            "clientReview": "Interactive and user-friendly!",
            "postLaunchSupport": "Ongoing feature updates"
        },
        {
            "projectName": "Travel Agency Website",
            "imageLink": "https://cdn.pixabay.com/photo/2020/05/22/08/17/breakfast-5204352_640.jpg",
            "videoLink": "https://player.vimeo.com/video/1052802645?h=04f3f00889&",
            "budget": "$12,000",
            "country": "France",
            "clientName": "Sophie Martin",
            "deliveryDate": "2024-02-05",
            "projectType": "Travel & Tourism",
            "websiteURL": "https://www.traveladventure.com",
            "technologyStack": ["WordPress", "WooCommerce", "PHP"],
            "totalBudget": "$12,000",
            "clientReview": "Smooth booking experience!",
            "postLaunchSupport": "6 months of free maintenance"
        },
        {
            "projectName": "Blogging Platform",
            "imageLink": "https://cdn.pixabay.com/photo/2020/05/22/08/17/breakfast-5204352_640.jpg",
            "videoLink": "https://player.vimeo.com/video/1052802645?h=04f3f00889&",
            "budget": "$8,000",
            "country": "Spain",
            "clientName": "Carlos Ruiz",
            "deliveryDate": "2024-02-18",
            "projectType": "Content Publishing",
            "websiteURL": "https://www.blogspot.com",
            "technologyStack": ["JAMstack", "Markdown", "Netlify"],
            "totalBudget": "$8,000",
            "clientReview": "SEO-friendly and easy to use!",
            "postLaunchSupport": "Free SSL and hosting setup"
        },
        {
            "projectName": "Fitness App Website",
            "imageLink": "https://cdn.pixabay.com/photo/2020/05/22/08/17/breakfast-5204352_640.jpg",
            "videoLink": "https://player.vimeo.com/video/1052802645?h=04f3f00889&",
            "budget": "$14,000",
            "country": "Brazil",
            "clientName": "Lucas Silva",
            "deliveryDate": "2024-01-28",
            "projectType": "Health & Fitness",
            "websiteURL": "https://www.fitlife.com",
            "technologyStack": ["Flutter Web", "Firebase", "GraphQL"],
            "totalBudget": "$14,000",
            "clientReview": "Modern design and great UI!",
            "postLaunchSupport": "3 months of free consultation"
        },
        {
            "projectName": "Corporate Business Website",
            "imageLink": "https://cdn.pixabay.com/photo/2020/05/22/08/17/breakfast-5204352_640.jpg",
            "videoLink": "https://player.vimeo.com/video/1052802645?h=04f3f00889&",
            "budget": "$16,500",
            "country": "Japan",
            "clientName": "Hiroshi Tanaka",
            "deliveryDate": "2024-03-10",
            "projectType": "Corporate",
            "websiteURL": "https://www.businesscorp.com",
            "technologyStack": ["ASP.NET", "Azure", "Bootstrap"],
            "totalBudget": "$16,500",
            "clientReview": "Highly professional and secure.",
            "postLaunchSupport": "Ongoing security updates"
        }
    ]

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const iframeRefs = useRef([]);

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

    const navigate = useNavigate();

    const handleClick = (project) => {
        localStorage.setItem("selectedProject", JSON.stringify(project));
        navigate("/project/details"); // Navigate after saving
    };

    

    return (
        <div className="max-w-7xl w-full mx-auto">
            <h1 className="text-6xl font-bold mb-10">Our <span className="text-purple-700">Projects</span></h1>

            <div className="grid lg:grid-cols-2 gap-10 grid-cols-1">
                {projects.map((project, index) => (
                    <div key={index}>

                        <div

                            className="relative w-full h-96 md:h-[400px] bg-gray-900 rounded-lg overflow-hidden cursor-pointer"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {/* Default Image */}
                            <img
                                src={project.imageLink}
                                alt="Thumbnail"
                                className={`absolute inset-0 w-full hf object-cover transition-opacity duration-500 ${hoveredIndex === index ? "opacity-0" : "opacity-100"}`}
                            />

                            {/* Dynamic Vimeo Iframe */}
                            <iframe
                                ref={(el) => (iframeRefs.current[index] = el)}
                                src={`${project.videoLink}?autoplay=1&muted=1&controls=0&background=1`}
                                width="600"
                                height="400"
                                frameBorder="0"
                                allow="autoplay; fullscreen"
                                className={`absolute inset-0 w-full hf object-cover transition-opacity duration-500 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
                                title="Vimeo Video"
                            ></iframe>



                        </div>
                        <div className="flex justify-between py-4 pl-1 pt-6 items-center bg-blue-100">
                            <h4 className="text-2xl font-bold">{project?.projectName}</h4>
                            <div>
                              
                                    <button
                                        onClick={()=>handleClick(project)}
                                        className="bg-gradient-to-t from-purple-400 to-purple-800 text-purple-100 font-semibold px-14 py-2 rounded-md hover:scale-105 text-lg shadow-lg transition-all duration-300 hover:bg-purple-700 hover:text-white hover:shadow-xl"
                                    >
                                        Details
                                    </button>
                              
                            </div>
                        </div>

                    </div>
                ))}
            </div>







        </div>
    );
};

export default ProjectsPage;


