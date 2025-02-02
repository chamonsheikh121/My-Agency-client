import { Link } from "react-router-dom";
import { FaUser, FaDollarSign, FaGlobe, FaCalendarAlt, FaCode, FaQuoteLeft, FaShieldAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

const ProjectDetailsPage = () => {
    const [project, setProject] = useState(null);

    useEffect(() => {
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
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-50 to-blue-50 p-6">
            <div className="max-w-4xl w-full bg-white/80 shadow-xl backdrop-blur-lg rounded-2xl p-8">
                
                {/* Project Name */}
                <h1 className="text-4xl font-extrabold text-purple-800 text-center mb-6">{project.projectName}</h1>

                {/* Project Image */}
                {project.imageLink && (
                    <img src={project.imageLink} alt={project.projectName} className="w-full h-64 object-cover rounded-lg shadow-lg mb-6" />
                )}

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-lg">
                    <p className="flex items-center gap-2"><FaUser className="text-purple-600" /> <strong>Client:</strong> {project.clientName}</p>
                    <p className="flex items-center gap-2"><FaDollarSign className="text-green-600" /> <strong>Budget:</strong> ${project.budget}</p>
                    <p className="flex items-center gap-2"><FaGlobe className="text-blue-600" /> <strong>Country:</strong> {project.country}</p>
                    <p className="flex items-center gap-2"><FaCalendarAlt className="text-red-500" /> <strong>Delivery Date:</strong> {project.deliveryDate}</p>
                    <p className="flex items-center gap-2"><FaCode className="text-indigo-600" /> <strong>Technologies:</strong> {project.technologyStack.join(", ")}</p>
                    <p className="flex items-center gap-2"><FaShieldAlt className="text-yellow-600" /> <strong>Support:</strong> {project.postLaunchSupport}</p>
                </div>

                {/* Client Review */}
                <div className="mt-6 p-4 bg-gray-100 rounded-lg text-gray-800 italic flex items-center gap-3">
                    <FaQuoteLeft className="text-gray-400 text-2xl" />
                    "{project.clientReview}"
                </div>

                {/* Website Link */}
                <div className="mt-6 text-center">
                    <a href={project.websiteURL} target="_blank" rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 shadow-md">
                        Visit Project
                    </a>
                </div>

                {/* Back Button */}
                <div className="mt-8 text-center">
                    <Link to="/projects">
                        <button className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-8 rounded-lg font-medium transition duration-200 shadow-lg">
                            Back to Projects
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ProjectDetailsPage;
