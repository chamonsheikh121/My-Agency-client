import { Link } from "react-router-dom";
import { FaUser, FaDollarSign, FaGlobe, FaCalendarAlt, FaCode, FaQuoteLeft, FaShieldAlt, FaCaretLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoIosLink } from "react-icons/io";
import 'aos/dist/aos.css'; // import AOS styles
import AOS from 'aos'; // import AOS library
import HireMessageSection from "../../HomePage/Components/HireMessageSection";

const ProjectDetailsPage = () => {
    const [project, setProject] = useState(null);

    useEffect(() => {

        AOS.init({
            duration: 2000,
            easing: 'ease',
            once: false,
        });

        AOS.refresh();


        // Load project from localStorage
        const storedProject = localStorage.getItem("selectedProject");
        if (storedProject) {
            setProject(JSON.parse(storedProject));
        }
    }, []);

    if (!project) {
        return <p className="text-center text-gray-500">No project details found.</p>;
    }


    return (
        <div className=" p-6">
            <div className="max-w-7xl mx-auto  rounded-2xl p-8">

                {/* Project Name */}
                <div className="my-10 text-xl">
                    <h1 className="text-4xl font-extrabold text-purple-800 text-center mb-6">{project.projectName}</h1>
                    <p className="text-center  max-w-2xl mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam autem tempore molestias quidem ullam obcaecati quaerat et recusandae quasi optio?</p>
                </div>
                <div className=" w-full vibrate">
                    {/* Project Image */}
                    {project.imageLink && (
                        <img
                            src={project.imageLink}
                            alt={project.projectName}
                            className="w-full max-h-[650px] object-cover rounded-lg shadow-lg mb-6"
                        />
                    )}
                </div>
                {/* Project Details */}
                <div

                    data-aos="fade-up"
                    className=" dark:bg-gray-800  rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300 text-lg">
                    {[
                        { icon: <FaUser className="text-purple-600 text-2xl" />, label: "Client", value: project.clientName },
                        { icon: <FaDollarSign className="text-green-600 text-2xl" />, label: "Budget", value: `$${project.budget}` },
                        { icon: <FaGlobe className="text-blue-600 text-2xl" />, label: "Country", value: project.country },
                        { icon: <FaCalendarAlt className="text-red-500 text-2xl" />, label: "Delivery Date", value: project.deliveryDate },
                        { icon: <FaCode className="text-indigo-600 text-2xl" />, label: "Technologies", value: project.technologyStack.join(", ") },
                        { icon: <FaShieldAlt className="text-yellow-600 text-2xl" />, label: "Support", value: project.postLaunchSupport },

                    ].map((item, index) => (
                        <div
                            key={index}>
                            <div
                                className="flex items-center gap-4 bg-purple-100  shadow-sm backdrop-blur-lg p-4 rounded-l transition-transform transform hover:scale-[1.02]"
                            >
                                <p className="opacity-70"> {item.icon}</p>
                                <p className="flex-1">
                                    <a className="font-semibold text-gray-900  dark:text-white ">{item.label}:</a> {item.value}
                                </p>
                            </div>

                        </div>
                    ))}<div
                        className="flex items-center gap-4 bg-purple-100  shadow-sm backdrop-blur-lg p-4 rounded-l transition-transform transform hover:scale-[1.02]"
                    >
                        <p className="opacity-70"> <IoIosLink /></p>
                        <p className="flex-1">
                            <a className="font-semibold bg-gray-300 p-2  text-gray-900 dark:text-white hover:underline cursor-pointer">Live Link:</a> Not available for security issue
                        </p>
                    </div>
                </div>


                <h5 className="text-xl font-bold mt-10">Client Review</h5>
                <div

                    data-aos="flip-down"
                    

                    className="bg-gradient-to-tr from-purple-400 to-purple-700 p-6 rounded-xl shadow-md shadow-purple-700 m-4 text-center flex flex-col md:flex-row items-center gap-6 transition-transform duration-300 hover:scale-[1.01]">
                    {/* Client Image */}
                    <img
                        src={project?.clientReview?.image}
                        alt={project?.clientReview?.name || "Client Image"}
                        className="w-20 h-20 rounded-full border-4 border-purple-300 object-cover"
                    />

                    {/* Review Content */}
                    <div className="flex flex-col items-center md:items-start text-white">
                        <p className="text-lg italic flex items-center">
                            <FaQuoteLeft className="mr-2" />
                            {project?.clientReview?.description}
                        </p>

                        {/* Client Name & Rating */}
                        <div className="mt-4 flex flex-col items-center md:items-start">
                            <h4 className="text-lg font-semibold">{project?.clientReview?.name}</h4>
                            <div className="mt-2 flex space-x-1">
                                {[...Array(5)].map((_, index) => (
                                    <span key={index} className={`${index < project?.clientReview?.rating ? "text-yellow-400" : "text-gray-300"}`}>
                                        ⭐
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>



                {/* Back Button */}

                <div
                data-aos="fade-up"
                className="mt-20">
                    <Link to="/projects" onClick={() => window.location.href = '/projects'}>
                        <button className="flex items-center bg-gradient-to-r from-purple-600 to-purple-700 text-white p-4 rounded-full font-medium transition duration-200 shadow-lg hover:scale-105">
                            <FaCaretLeft className="text-xl" /> {/* React Icon on the left */}

                        </button>
                    </Link>
                </div>
            </div>
            <HireMessageSection />

        </div>
    );
};

export default ProjectDetailsPage;
