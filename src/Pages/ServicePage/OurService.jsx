import { useEffect, useState } from 'react';
import ServiceCard from "./Components/ServiceCard";
import { motion } from 'framer-motion';
import HireMessageSection from '../HomePage/Components/HireMessageSection';


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
            "img": "https://example.com/images/custom-web-development.png",
            "isReversed": false,
            "options": {
                "languages": ["HTML", "CSS", "JavaScript", "PHP"],
                "frameworks": ["React", "Vue", "Node.js"],
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
            "title": "UI/UX Design",
            "description": "Crafting intuitive and visually appealing user interfaces that provide exceptional user experiences.",
            "img": "https://example.com/images/ui-ux-design.png",
            "isReversed": true,
            "options": {
                "tools": ["Figma", "Sketch", "Adobe XD"],
                "focusAreas": [
                    {
                        "title": "Wireframing",
                        "description": "Wireframes serve as the blueprint for the design of a website or application. We create wireframes to map out the structure and layout of each page, focusing on functionality and the user journey without getting distracted by colors or details."
                    },
                    {
                        "title": "Prototyping",
                        "description": "Prototyping brings your designs to life. By creating interactive prototypes, we help you visualize how users will interact with your product, allowing you to test and iterate on your designs before development begins."
                    },
                    {
                        "title": "User Research",
                        "description": "Understanding your users is key to creating exceptional experiences. Through user research, we gather insights into user behaviors, preferences, and pain points to design solutions that meet their needs and expectations."
                    }
                ]
            }
        },
        {
            "id": 3,
            "title": "E-Commerce Development",
            "description": "Build secure, scalable online stores with optimized shopping experiences to boost sales.",
            "img": "https://example.com/images/ecommerce-development.png",
            "isReversed": false,
            "options": {
                "platforms": ["Shopify", "WooCommerce", "Magento"],
                "paymentGateways": ["Stripe", "PayPal", "Square"],
                "features": [
                    {
                        "title": "Product Management",
                        "description": "Manage your product catalog effortlessly with robust features for adding, updating, and categorizing products. Bulk upload options and detailed product descriptions make it easy to keep your online store organized."
                    },
                    {
                        "title": "Order Tracking",
                        "description": "Allow customers to track their orders from purchase to delivery. Provide real-time updates, so they know exactly when to expect their package, reducing customer inquiries and enhancing satisfaction."
                    },
                    {
                        "title": "Payment Integration",
                        "description": "Integrate secure payment gateways such as Stripe, PayPal, and Square. Customers can easily make purchases through multiple payment options, including credit cards and digital wallets, while you ensure smooth transactions."
                    },
                    {
                        "title": "Flexible Store Customization",
                        "description": "Tailor your online store to your specific business needs with fully customizable themes, layouts, and designs. Our solutions offer flexibility for both aesthetic and functional changes to match your brand’s identity."
                    },
                    {
                        "title": "Manageable Admin Dashboard",
                        "description": "A powerful, user-friendly admin dashboard where you can easily track orders, manage products, analyze traffic, and keep an eye on overall store performance. All tools you need in one place for efficient store management."
                    },
                    {
                        "title": "Secure Payment Gateways",
                        "description": "Ensure safe transactions with top-tier security standards. We integrate secure payment systems that comply with PCI-DSS regulations, so your customers' data is protected from fraud or unauthorized access."
                    },
                    {
                        "title": "Optimized Mobile Shopping Experience",
                        "description": "Reach customers on the go with a mobile-optimized shopping experience. Whether customers are browsing on smartphones or tablets, they will enjoy smooth navigation, fast loading times, and a seamless checkout process."
                    },
                    {
                        "title": "Fast Page Load Speed",
                        "description": "Minimize bounce rates by ensuring your site loads quickly. Our optimization techniques reduce image sizes, streamline code, and use content delivery networks (CDN) to ensure a lightning-fast user experience."
                    },
                    {
                        "title": "Multi-Channel Integration",
                        "description": "Expand your reach by selling across various platforms, including social media, marketplaces (like Amazon, eBay), and mobile apps. Integration across all channels is managed from a single unified dashboard, streamlining inventory and sales."
                    },
                    {
                        "title": "Customer-Friendly Checkout",
                        "description": "Simplify the checkout process to make it as quick and easy as possible. Allow guest checkouts, offer various payment methods, and ensure a smooth transition from cart to final purchase, reducing cart abandonment rates."
                    },
                    {
                        "title": "Advanced Product Management",
                        "description": "Manage thousands of products effortlessly. Organize by categories, tags, or attributes, and make bulk edits or uploads quickly. Our system ensures your store stays organized even as your inventory grows."
                    },
                    {
                        "title": "Order Tracking & Management",
                        "description": "Keep customers informed on the status of their orders with real-time tracking. From the moment of purchase to shipping and delivery, provide clear and consistent updates, improving customer satisfaction and reducing customer service inquiries."
                    },
                    {
                        "title": "SEO & Marketing Optimization",
                        "description": "Optimize your e-commerce website for search engines to ensure higher visibility and traffic. We provide SEO-friendly features, such as custom URL structures, metadata integration, and marketing tools like coupon codes, social sharing, and email campaigns."
                    }
                ]
            }
        },
        {
            "id": 4,
            "title": "Educational Platform",
            "description": "Create engaging online learning experiences with custom features and content management.",
            "img": "https://concise-studio.com/wp-content/webp-express/webp-images/themes/concise/assets/images/pages/services/2.png.webp",
            "isReversed": true,
            "options": {
                "features": [
                    {
                        "title": "Video Lessons",
                        "description": "Create rich, engaging video lessons that are tailored to your course content. With tools for streaming and recording, your educational platform can deliver high-quality video content to users anytime, anywhere."
                    },
                    {
                        "title": "Quizzes",
                        "description": "Add interactive quizzes to your educational platform to test students’ knowledge and reinforce learning. Our platform integrates quizzes that offer automatic grading, feedback, and scoring to ensure efficient learning."
                    },
                    {
                        "title": "Certification",
                        "description": "Reward your students with certification upon completing courses. This feature can help students showcase their newly acquired skills and provide value to your educational program."
                    }
                ],
                "integrations": [
                    {
                        "title": "Zoom Integration",
                        "description": "Integrate Zoom for live video classes, webinars, and interactive learning sessions. This feature is perfect for offering real-time, instructor-led lessons and workshops."
                    },
                    {
                        "title": "Google Classroom Integration",
                        "description": "Seamlessly integrate Google Classroom to manage assignments, grades, and communication between instructors and students. This enhances the learning experience with easy collaboration tools."
                    },
                    {
                        "title": "LMS Integration",
                        "description": "Integrate a Learning Management System (LMS) to streamline course administration, content delivery, and student progress tracking. LMS systems allow for easy management and scaling of your educational platform."
                    }
                ]
            }
        }
        ,
        {
            "id": 5,
            "title": "Corporate Website",
            "description": "Develop professional corporate websites that highlight your brand, products, and services.",
            "img": "https://example.com/images/corporate-website.png",
            "isReversed": false,
            "options": {
                "design": [
                    {
                        "title": "Minimalist Design",
                        "description": "A minimalist approach focuses on simplicity, with clean lines, ample white space, and a clear user interface. This design style helps highlight your content and ensures that the website is easy to navigate."
                    },
                    {
                        "title": "Corporate Branding",
                        "description": "Incorporate your company’s brand identity into the website design, ensuring that all design elements (colors, fonts, logos, etc.) align with your company’s values and image, reinforcing your brand presence online."
                    },
                    {
                        "title": "Clean Layout",
                        "description": "A clean layout ensures that your website’s structure is simple and uncluttered, with intuitive navigation and easy access to important information. This makes the site user-friendly and accessible for all visitors."
                    }
                ],
                "features": [
                    {
                        "title": "Contact Forms",
                        "description": "Incorporate contact forms for direct communication with clients. These forms are customizable to collect specific information and help streamline communication between your business and prospective clients."
                    },
                    {
                        "title": "Case Studies",
                        "description": "Showcase your company’s success stories with detailed case studies. This allows visitors to see real-world examples of how your products or services have helped clients achieve their goals."
                    },
                    {
                        "title": "Team Bios",
                        "description": "Highlight key team members and their expertise. Providing bios and professional details helps visitors connect with your company and builds trust by showcasing the people behind your brand."
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
                        <div className="mt-10 flex flex-wrap justify-center gap-6">
                            <div className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg shadow-md hover:bg-white/20 transition-all">
                                🚀 Fast & Scalable
                            </div>
                            <div className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg shadow-md hover:bg-white/20 transition-all">
                                🎨 Modern UI/UX
                            </div>
                            <div className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg shadow-md hover:bg-white/20 transition-all">
                                🔍 SEO & Performance Optimized
                            </div>
                        </div>


                    </section>






                    <div className='max-w-6xl mx-auto'>
                        <div data-aos="fade-up" className="text-center my-10 py-10">
                            <h1 className="text-5xl font-bold text-gray-900">
                                Our <span className="text-purple-700">Services</span>
                            </h1>
                            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
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
