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
          "question": "How do I get started with Team Webio for my project?",
          "answer": "Simply reach out to us through our website, email, or social media. We'll schedule a free consultation to discuss your project requirements, goals, and budget."
        },
        {
          "question": "What information do you need to start my project?",
          "answer": "To begin, we need details such as your business goals, project scope, design preferences, required features, budget, and timeline expectations."
        },
        {
          "question": "How do you determine the cost of a project?",
          "answer": "We evaluate factors like project complexity, required features, design intricacy, and development time. After our initial consultation, we provide a detailed quote tailored to your needs."
        },
        {
          "question": "Do you require an upfront payment?",
          "answer": "Yes, we typically require an initial deposit (usually 30-50%) to begin work. The remaining payments are structured in milestones based on project progress."
        },
        {
          "question": "What is the typical timeline for a project?",
          "answer": "The timeline depends on project size and complexity. A standard website takes 4-6 weeks, while larger projects like SaaS platforms or e-commerce stores may take 8-12 weeks."
        },
        {
          "question": "How will I be updated on the project's progress?",
          "answer": "We provide regular updates through email, meetings, and project management tools like Trello, Notion, or Slack. You'll have full visibility of each development phase."
        },
        {
          "question": "Can I request changes during the development process?",
          "answer": "Yes! We allow revisions at key stages. However, major scope changes may affect the timeline and budget, which we’ll discuss with you in advance."
        },
        {
          "question": "Will I be involved in the design and development process?",
          "answer": "Absolutely! We value client input and involve you in the design, development, and testing phases to ensure the final product aligns with your vision."
        },
        {
          "question": "What happens after the project is completed?",
          "answer": "Once the project is complete, we provide training, documentation, and post-launch support. We also offer maintenance packages to keep your website running smoothly."
        },
        {
          "question": "Do you offer ongoing support and future updates?",
          "answer": "Yes! We offer flexible support plans, including bug fixes, updates, and feature enhancements to ensure long-term success for your project."
        }
      ]
      

    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <h2 className="md:text-5xl text-4xl font-extrabold text-center  mb-12">
                    Frequently Asked <span className="text-purple-700">
                    Questions</span> 
                </h2>

                <div className="flex justify-center flex-col lg:flex-row items-center gap-20">
                  
                        <img className="drop-shadow-[0_10px_10px_rgba(128,128,128,0.8)]" src={faq} alt="" />
                   
                    <div className="space-y-6 w-full">
                        {faqData.map((faq, index) => (
                            <div key={index} className="bg-white bg-opacity-40 backdrop-blur-md p-6 rounded-sm shadow-lg shadow-gray-300 border border-white/30">
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
