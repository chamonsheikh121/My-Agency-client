import { useState, useEffect } from "react";
import { BiChevronDownCircle, BiChevronUpCircle } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

const faqData = [
  {
    question: "What services does your company offer?",
    answer:
      "We offer web development, UI/UX design, SEO optimization, and digital marketing to help your business grow."
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Project duration varies depending on complexity, but most websites are completed within 4-6 weeks."
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes! We offer maintenance packages to ensure your site remains secure and up to date."
  },
  {
    question: "What technologies do you use?",
    answer:
      "We work with React, Next.js, Tailwind CSS, Node.js, and various CMS platforms."
  }
];

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
      <div className="relative max-w-5xl mx-auto">
      
      <h2 data-aos="fade-up"  className="text-4xl font-bold text-center text-white mb-20">
          Frequently <span className="text-purple-400">Asked Questions</span>
        </h2>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white bg-opacity-15 backdrop-blur-lg shadow-lg 
              rounded-tl-[50px] rounded-br-[50px] p-8 border border-white border-opacity-30 transition-all duration-300 
              hover:shadow-2xl hover:scale-105 hover:bg-opacity-20 hover:backdrop-blur-2xl"
            >
              <button
                className="w-full flex justify-between items-center text-lg font-semibold text-white transition-all duration-300"
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
