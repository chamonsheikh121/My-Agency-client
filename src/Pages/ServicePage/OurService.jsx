import { useEffect, useState } from 'react';
import ServiceCard from "./Components/ServiceCard";
import { motion } from 'framer-motion';
import HireMessageSection from '../HomePage/Components/HireMessageSection';
import { Helmet } from 'react-helmet';


const OurService = () => {



    const [visibleCard, setVisibleCard] = useState(null);


    useEffect(() => {

        window.scrollTo(0, 0); // Scroll to the top


        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntry = entries.find(entry => entry.isIntersecting);
                if (visibleEntry) {
                    setVisibleCard(visibleEntry.target.dataset.id);
                }
            },
            { threshold: 0.5 }
        );

        const cards = document.querySelectorAll(".service-card");
        cards.forEach(card => observer.observe(card));

        return () => {
            cards.forEach(card => observer.unobserve(card));
        };
    }, []);

    const services = [
        {
            "id": 0,
            "title": "Custom Coded Web Development",
            "description": "We create custom web solutions tailored to your business needs, from design to functionality.",
            "img": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739024884/custom_coded_dskeab.png",
            "options": {
                "features": [
                    {
                        "title": "Responsive Design",
                        "description": "Ensure your website looks great on all devices, from desktop to mobile. With a responsive design approach, your site will automatically adjust its layout and content to provide the best user experience across all screen sizes and resolutions."
                    },
                    {
                        "title": "API Integrations",
                        "description": "Expand the functionality of your website by seamlessly integrating third-party APIs. Whether it’s payment gateways, data sharing, or connecting with other software, we can help you integrate APIs to streamline processes and enhance the user experience."
                    },
                    {
                        "title": "Custom CMS",
                        "description": "Build a content management system (CMS) tailored to your unique needs. Whether you're managing articles, products, or customer data, our custom CMS solution offers a flexible, easy-to-use platform to update your website content without needing to code."
                    },
                    {
                        "title": "HTML/CSS",
                        "description": "The backbone of any website, HTML and CSS give structure and style to your site. We use semantic HTML for better SEO and accessibility, paired with custom CSS for pixel-perfect designs that stand out."
                    },
                    {
                        "title": "JavaScript Development",
                        "description": "Bring dynamic, interactive elements to your website with JavaScript. From interactive forms to real-time updates, we can create custom scripts to enhance the functionality of your site and improve user engagement."
                    },
                    {
                        "title": "PHP Development",
                        "description": "Leverage the power of PHP to develop dynamic, server-side functionality. Whether it's processing forms, handling databases, or creating custom web applications, PHP is an essential part of custom web development."
                    },
                    {
                        "title": "React Framework",
                        "description": "Build fast, scalable user interfaces with React. Its component-based architecture allows for reusable UI elements, making the development process more efficient while ensuring a smooth and responsive user experience."
                    },
                    {
                        "title": "Vue Framework",
                        "description": "Build flexible and progressive web applications using Vue. Vue’s simplicity and easy-to-integrate structure make it ideal for both small projects and large-scale applications, offering great performance and fast rendering."
                    },
                    {
                        "title": "Node.js",
                        "description": "Use Node.js for server-side development with JavaScript. With Node.js, your application will handle high loads and asynchronous requests with ease, ensuring quick response times and improved user experience."
                    }
                ]
            }
        },

        {
            "id": 1,
            "title": "Landing Page Development",
            "description": "We create high-converting landing pages tailored for marketing campaigns, product launches, and lead generation.",
            "img": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739024875/landingpage_nrkr9a.png",
            "options": {
                "features": [
                    {
                        "title": "Conversion Optimization",
                        "description": "Designed to maximize leads and sales with strategic call-to-action placements."
                    },
                    {
                        "title": "Mobile-Friendly Design",
                        "description": "Ensures an optimal viewing experience across all devices."
                    },
                    {
                        "title": "Fast Loading Speed",
                        "description": "Optimized for quick loading times to reduce bounce rates."
                    },
                    {
                        "title": "SEO Ready",
                        "description": "Built with best SEO practices to improve search engine rankings."
                    }
                ]
            }
        },
        {
            "id": 2,
            "title": "Business Website Development",
            "description": "Professional business websites that enhance your online presence and credibility.",
            "img": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739024844/business_bsp5fc.png",
            "options": {
                "features": [
                    {
                        "title": "Custom Branding",
                        "description": "We design websites that align with your brand identity and goals."
                    },
                    {
                        "title": "Lead Generation",
                        "description": "Integrated contact forms, live chat, and inquiry forms for customer engagement."
                    },
                    {
                        "title": "Security Features",
                        "description": "SSL certificates, firewalls, and regular updates to protect your site."
                    }
                ]
            }
        },
        {
            "id": 3,
            "title": "Portfolio Website Development",
            "description": "Showcase your work with a stunning portfolio website tailored to your niche.",
            "img": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739024878/portfolio_z77j0n.png",
            "options": {
                "features": [
                    {
                        "title": "Elegant Design",
                        "description": "Clean, modern layouts that highlight your projects and skills."
                    },
                    {
                        "title": "Gallery & Media Support",
                        "description": "Supports high-quality images, videos, and animations."
                    },
                    {
                        "title": "Social Media Integration",
                        "description": "Easily connect with your audience across different platforms."
                    }
                ]
            }
        },
        {
            "id": 4,
            "title": "E-commerce Website Development",
            "description": "We build powerful online stores with smooth checkout experiences.",
            "img": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739024852/e-commerce_zchbul.png",
            "options": {
                "features": [
                    {
                        "title": "Product Management",
                        "description": "Add, edit, and manage product listings easily."
                    },
                    {
                        "title": "Payment Gateway Integration",
                        "description": "Supports multiple payment options like PayPal, Stripe, and credit cards."
                    },
                    {
                        "title": "Customer Account System",
                        "description": "Allows users to create accounts, track orders, and manage their profiles."
                    }
                ]
            }
        },
        {
            "id": 5,
            "title": "Blog Website Development",
            "description": "Engage your audience with a beautifully designed blog website.",
            "img": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739024839/blog_roimzw.png",
            "options": {
                "features": [
                    {
                        "title": "SEO Optimization",
                        "description": "Built with SEO-friendly structures to rank higher on search engines."
                    },
                    {
                        "title": "Content Management System",
                        "description": "Easy-to-use CMS for seamless content updates."
                    },
                    {
                        "title": "Social Sharing Features",
                        "description": "Encourages content sharing to increase reach."
                    }
                ]
            }
        },
        {
            "id": 6,
            "title": "News & Magazine Website Development",
            "description": "A fast and scalable platform for delivering real-time news and articles.",
            "img": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739024866/news_jf7akn.png",
            "options": {
                "features": [
                    {
                        "title": "Multi-Author Support",
                        "description": "Allows multiple contributors to publish articles."
                    },
                    {
                        "title": "Ad Monetization",
                        "description": "Supports Google AdSense and sponsored content."
                    },
                    {
                        "title": "Live Updates",
                        "description": "Real-time news publishing with instant updates."
                    }
                ]
            }
        },
        {
            "id": 7,
            "title": "Podcast Website Development",
            "description": "A feature-rich platform for hosting and distributing your podcasts.",
            "img": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739024875/podcast_nl5fiu.png",
            "options": {
                "features": [
                    {
                        "title": "Audio Player Integration",
                        "description": "Custom audio player for seamless podcast streaming."
                    },
                    {
                        "title": "RSS Feed Support",
                        "description": "Automatically distributes your episodes to podcast directories."
                    },
                    {
                        "title": "Subscription & Downloads",
                        "description": "Enables users to subscribe and download episodes for offline listening."
                    }
                ]
            }
        },
        {
            "id": 8,
            "title": "E-learning Website Development",
            "description": "An interactive learning platform with courses, quizzes, and certifications.",
            "img": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739024858/E-learning_tyebth.png",
            "options": {
                "features": [
                    {
                        "title": "Course Management",
                        "description": "Create and manage courses with structured lessons and quizzes."
                    },
                    {
                        "title": "Student Dashboard",
                        "description": "Personalized dashboards to track progress."
                    },
                    {
                        "title": "Payment & Subscription Plans",
                        "description": "Supports paid courses and membership subscriptions."
                    }
                ]
            }
        },
        {
            "id": 9,
            "title": "School & University Website Development",
            "description": "A professional website for educational institutions, with student and faculty portals.",
            "img": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739024880/school_jllxbe.png",
            "options": {
                "features": [
                    {
                        "title": "Student & Faculty Portals",
                        "description": "Secure access to student and staff information."
                    },
                    {
                        "title": "Online Admissions",
                        "description": "Simplifies the application and enrollment process."
                    },
                    {
                        "title": "Course Listings & Timetable",
                        "description": "Displays available courses, schedules, and academic calendars."
                    }
                ]
            }
        },
        {
            "id": 10,
            "title": "Event Website Development",
            "description": "Custom-built event websites for conferences, concerts, and ticket sales.",
            "img": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739024851/event_hwsigf.png",
            "options": {
                "features": [
                    {
                        "title": "Online Ticketing System",
                        "description": "Sell and manage event tickets online."
                    },
                    {
                        "title": "Event Scheduling",
                        "description": "Displays event details with interactive scheduling."
                    },
                    {
                        "title": "Attendee Registration",
                        "description": "Easy sign-up and check-in system for attendees."
                    }
                ]
            }
        },
        {
            "id": 11,
            "title": "Hotel & Travel Booking Website Development",
            "description": "A comprehensive platform for hotel reservations and travel bookings.",
            "img": "https://res.cloudinary.com/dcqfonnjc/image/upload/v1739024870/booking_snjf2b.png",
            "options": {
                "features": [
                    {
                        "title": "Real-Time Booking System",
                        "description": "Enables users to check availability and book rooms instantly."
                    },
                    {
                        "title": "Payment Gateway Integration",
                        "description": "Supports secure online payments and refunds."
                    },
                    {
                        "title": "Google Maps & Location Services",
                        "description": "Helps users find hotels and nearby attractions easily."
                    }
                ]
            }
        }



        // Add other services...
    ];

    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.9 }} // Start small and invisible
            animate={{ opacity: 1, scale: 1 }}  // Grow and appear
            transition={{ duration: 1, ease: "easeOut" }} // Smooth effect
            className="min-h-screen flex items-center justify-center"
            aria-label="Our Services"
        >

            <Helmet>
                <title>Team Webio | Services</title>

                <meta description='Discover our latest projects showcasing innovation, creativity, and technical excellence.
                            From web applications to impactful solutions, explore how we bring ideas to life. 🚀'/>
            </Helmet>


            <section className="relative  w-full">



                <div className="">

                    {/* Hero Section */}
                    <section className="relative py-20 px-6 md:px-16 bg-gray-900 text-white text-center">
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-600 opacity-20 blur-3xl"></div>

                        {/* Animated Heading */}
                        <motion.h2
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-5xl py-4 font-extrabold bg-gradient-to-r from-purple-400 to-purple-800 text-transparent bg-clip-text"
                        >
                            Multinational Digital Web Development
                        </motion.h2>

                        {/* Description */}
                        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            We build <strong>future-ready web experiences</strong> with <strong>React & Tailwind CSS</strong> for businesses worldwide.
                            Our <strong>high-performance, scalable, and visually stunning</strong> solutions help brands create a powerful online presence.
                        </p>

                        {/* Service Highlights */}
                        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                            <div className="px-6 py-3 md:w-auto w-full bg-white/10 border border-white/20 rounded-lg shadow-md hover:bg-white/20 transition-all">
                                🚀 Fast & Scalable
                            </div>
                            <div className="px-6 py-3 md:w-auto w-full bg-white/10 border border-white/20 rounded-lg shadow-md hover:bg-white/20 transition-all">
                                🎨 Modern UI/UX
                            </div>
                            <div className="px-6 py-3 md:w-auto w-full bg-white/10 border border-white/20 rounded-lg shadow-md hover:bg-white/20 transition-all">
                                🔍 SEO & Performance Optimized
                            </div>
                        </div>


                    </section>






                    <div className='max-w-7xl mx-auto'>
                        <div data-aos="fade-up" className="text-center my-10 py-10">
                            <h1 className="text-5xl font-bold text-gray-900">
                                Our <span className="text-purple-700">Services</span>
                            </h1>
                            <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
                                We provide world-class web development services, delivering cutting-edge solutions for businesses and individuals.
                                From custom website development to performance optimization, we build scalable, secure, and high-performing web applications
                                that drive success in the digital world. Let's turn your ideas into reality! 🌍🚀
                            </p>
                        </div>

                        {/* Services List */}
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                id={service?.id}
                                title={service.title}
                                description={service.description}
                                img={service.img}
                                isReversed={index % 2 !== 0}
                                visibleCard={visibleCard} // Pass visibleCard as a prop
                            />
                        ))}
                    </div>

                </div>

                <HireMessageSection />
            </section>
        </motion.section>
    );
};

export default OurService;
