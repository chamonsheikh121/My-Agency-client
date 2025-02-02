import Marquee from "react-fast-marquee";


const MarqueSectionRight = () => {

    const cardSlides = [
        {
            "profilePicture": "https://randomuser.me/api/portraits/men/1.jpg",
            "name": "Liam Carter",
            "description": "The team at Webio created an outstanding website for my business. Their expertise in UI/UX design made my site look modern and professional.",
            "projectImage": "https://images.pexels.com/photos/270669/pexels-photo-270669.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            "profilePicture": "https://randomuser.me/api/portraits/women/2.jpg",
            "name": "Isabella Reed",
            "description": "They built a visually appealing and highly functional website. The team was very supportive throughout the project.",
            "projectImage": "https://images.pexels.com/photos/270669/pexels-photo-270669.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            "profilePicture": "https://randomuser.me/api/portraits/men/3.jpg",
            "name": "Noah Bennett",
            "description": "They built a sleek and high-performing website for my startup, exceeding my expectations in both design and functionality.",
            "projectImage": "https://images.pexels.com/photos/270669/pexels-photo-270669.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            "profilePicture": "https://randomuser.me/api/portraits/women/4.jpg",
            "name": "Sophia Mitchell",
            "description": "They transformed my outdated website into a modern, mobile-friendly platform with seamless functionality.",
            "projectImage": "https://images.pexels.com/photos/270669/pexels-photo-270669.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            "profilePicture": "https://randomuser.me/api/portraits/men/5.jpg",
            "name": "Lucas Foster",
            "description": "They created a custom website tailored to my business needs, and my customers love the user experience.",
            "projectImage": "https://images.pexels.com/photos/270669/pexels-photo-270669.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            "profilePicture": "https://randomuser.me/api/portraits/women/6.jpg",
            "name": "Harper Morgan",
            "description": "This team delivered a visually stunning and high-performing website, fully optimized for speed and SEO.",
            "projectImage": "https://images.pexels.com/photos/270669/pexels-photo-270669.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            "profilePicture": "https://randomuser.me/api/portraits/men/7.jpg",
            "name": "Ethan Parker",
            "description": "They turned my ideas into a functional, professional website with outstanding performance and great post-launch support.",
            "projectImage": "https://images.pexels.com/photos/270669/pexels-photo-270669.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            "profilePicture": "https://randomuser.me/api/portraits/women/8.jpg",
            "name": "Mason Hayes",
            "description": "They built a fully responsive and SEO-optimized website, which has significantly increased my business traffic.",
            "projectImage": "https://images.pexels.com/photos/270669/pexels-photo-270669.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            "profilePicture": "https://randomuser.me/api/portraits/men/9.jpg",
            "name": "Charlotte Diaz",
            "description": "They built a user-friendly, efficient website that was delivered on time with excellent post-launch support.",
            "projectImage": "https://images.pexels.com/photos/270669/pexels-photo-270669.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            "profilePicture": "https://randomuser.me/api/portraits/women/10.jpg",
            "name": "Oliver Brooks",
            "description": "I couldn’t be happier with the professional and highly functional website they developed for my business.",
            "projectImage": "https://images.pexels.com/photos/270669/pexels-photo-270669.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
    ]




    return (
        <div className="rotate-2">
            <Marquee

                pauseOnHover
                gradient
                gradientWidth={200}
                direction="right"
                
                gradientColor="#ffffff"
            >
                {
                    cardSlides?.map((item, i) => <div className="w-[500px]  h-72 bg-white mx-4 p-6 space-y-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex items-start flex-col  justify-center">
                        {/* Profile Section */}
                        <img
                                        src={item?.profilePicture}
                                        alt={item?.name}
                                        className="w-12 h-12 rounded-full object-cover border border-gray-300"
                                    />
                        <div className="flex items-start gap-10 justify-start">
                            <div>
                                <div className="">
                                   
                                    <h1 className="text-xl font-semibold text-gray-900">{item.name}</h1>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-gray-700 line-clamp-3">
                                    {item.description.length > 200
                                        ? item.description.slice(0, 200) + "..."
                                        : item.description}
                                </p>
                            </div>

                            {/* Project Image */}
                            <div className="rounded-lg w-full overflow-hidden">
                                <img
                                    src={item?.projectImage}
                                    alt="Project Preview"
                                    className="w-full border border-black h-32 object-cover rounded-md"
                                />
                            </div>
                        </div>
                    </div>

                    )
                }
            </Marquee>
        </div>
    );
};

export default MarqueSectionRight;