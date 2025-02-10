import { useState, useEffect } from "react";
import { BiChevronDownCircle, BiChevronUpCircle } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

const faqData = [
  {
    "question": "What services does Team Webio offer?",
    "answer": "We provide custom web development, UI/UX design, e-commerce solutions, SEO, digital marketing, and mobile app development to help businesses establish a strong online presence."
  },
  {
    "question": "What industries do you specialize in?",
    "answer": "We work with various industries, including tech startups, healthcare, e-commerce, real estate, finance, education, and entertainment."
  },
  // {
  //   "question": "How long does it take to develop a website?",
  //   "answer": "The timeline depends on the project’s complexity. A simple website takes 3-6 weeks, while more complex platforms like SaaS or e-commerce stores may take 8-12 weeks or more."
  // },
  {
    "question": "Do you provide website redesign services?",
    "answer": "Yes! We offer modern website redesigns to improve UI/UX, speed, and SEO while maintaining brand consistency."
  },
  {
    "question": "What is your web development process?",
    "answer": "Our process includes: Consultation & Planning, Wireframing & UI/UX Design, Development & Testing, Deployment & Post-Launch Support."
  },
  // {
  //   "question": "What technologies do you use?",
  //   "answer": "We work with React, Next.js, Vue.js, Node.js, Python, Tailwind CSS, Laravel, and various CMS platforms like WordPress and Webflow."
  // },
  {
    "question": "Is my website mobile-friendly and SEO-optimized?",
    "answer": "Yes! Every website we develop is fully responsive, mobile-friendly, SEO-optimized, and built for high performance."
  },
  {
    "question": "How do you ensure website security?",
    "answer": "We follow best practices, including SSL encryption, secure authentication, regular updates, and DDoS protection, ensuring your site remains safe."
  },
  // {
  //   "question": "How much does a website cost?",
  //   "answer": "Pricing varies based on features and complexity. Basic sites start at $500, while custom platforms may range from $5,000+. Contact us for a free quote!"
  // },
  // {
  //   "question": "Do you provide post-launch support and maintenance?",
  //   "answer": "Yes! We offer maintenance plans that include updates, backups, security monitoring, and technical support."
  // },
  // {
  //   "question": "Can you build an e-commerce store?",
  //   "answer": "Absolutely! We specialize in Shopify, WooCommerce, and custom-built solutions with secure payment integrations."
  // },
  // {
  //   "question": "Can my website be integrated with third-party services?",
  //   "answer": "Yes! We integrate APIs, payment gateways, CRM systems, analytics, chatbots, and automation tools as needed."
  // },
  {
    "question": "Will I own my website after development?",
    "answer": "Yes! After project completion, you fully own your website, domain, and source code."
  },
  {
    "question": "How can I start working with Team Webio?",
    "answer": "Click on hire team webio and tell us about your need. We’ll discuss your goals and create a tailored plan!"
  }
]


const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease",
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <section
      className="relative bg-fixed bg-cover bg-center text-white py-40 px-6"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600')",
      }}
    >
      {/* Blur Overlay for Section */}
      <div className="absolute inset-0  backdrop-blur-md"></div>

      {/* Content Wrapper */}
      <div className="relative max-w-6xl mx-auto">
      
      <h2 data-aos="fade-up"  className="md:text-5xl text-4xl font-bold text-center text-white mb-20">
          Frequently <span className="text-purple-400">Asked Questions</span>
        </h2>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white bg-opacity-15 backdrop-blur-lg shadow-lg 
              rounded-tl-[50px] rounded-br-[50px] md:p-14 p-8 border border-white border-opacity-30 transition-all duration-300 
              hover:shadow-2xl hover:scale-105 hover:bg-opacity-20 hover:backdrop-blur-2xl"
            >
              <button
                className="w-full flex justify-between text-2xl items-center  font-semibold text-white transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <BiChevronUpCircle className="w-7 h-7 text-purple-500 transition-transform duration-300 rotate-180" />
                ) : (
                  <BiChevronDownCircle className="w-7 h-7 text-white transition-transform duration-300" />
                )}
              </button>

              {/* Smooth expanding animation */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-40 opacity-100 mt-3 translate-y-0"
                    : "max-h-0 opacity-0 -translate-y-2"
                }`}
              >
                <p className="text-white text-md leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
