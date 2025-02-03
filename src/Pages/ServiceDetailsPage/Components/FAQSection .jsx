import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import faq from './../../../assets/faq.png'



const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "What services do you offer?",
            answer:
                "We specialize in UI/UX design, custom-coded websites, and full-stack web development to create high-performance digital experiences.",
        },
        {
            question: "How do you approach a project?",
            answer:
                "We follow a structured process: understanding requirements, planning, designing, prototyping, development, and finally, rigorous testing before launch.",
        },
        {
            question: "Do you provide website maintenance?",
            answer:
                "Yes! We offer post-launch support, including updates, bug fixes, and performance optimization to keep your website running smoothly.",
        },
        {
            question: "Can I request a fully custom website?",
            answer:
                "Absolutely! We build fully custom-coded websites tailored to your brand and business needs.",
        },
    ];

    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center  mb-12">
                    Frequently Asked <span className="text-purple-700">
                    Questions</span> 
                </h2>

                <div className="flex justify-center items-center gap-20">
                  
                        <img className="drop-shadow-[0_10px_10px_rgba(128,128,128,0.8)]" src={faq} alt="" />
                   
                    <div className="space-y-6 w-full">
                        {faqData.map((faq, index) => (
                            <div key={index} className="bg-white bg-opacity-40 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/30">
                                <div
                                    onClick={() => toggleAnswer(index)}
                                    className="flex justify-between items-center cursor-pointer"
                                >
                                    <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
                                    {openIndex === index ? (
                                        <BiChevronUp size={24} className="text-purple-700" />
                                    ) : (
                                        <BiChevronDown size={24} className="text-purple-700" />
                                    )}
                                </div>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.p
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="mt-3 text-gray-700"
                                        >
                                            {faq.answer}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQSection;
