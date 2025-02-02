import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const steps = [
  { step: "01", title: "Tell Us What You Need", description: "Submit your project and tell us all the important details. We’ll ask everything necessary to ensure a smooth process." },
  { step: "02", title: "We Plan & Research", description: "We analyze your project, conduct research, and define a clear strategy with a structured roadmap for development." },
  { step: "03", title: "UI/UX Wireframing & Design", description: "Our expert designers craft wireframes and intuitive UI/UX designs to enhance user experience and engagement." },
  { step: "04", title: "Prototyping & User Testing", description: "We create interactive prototypes and test usability to ensure smooth interactions and a seamless user journey." },
  { step: "05", title: "Custom Development", description: "We build custom-coded websites using modern technologies, ensuring speed, security, and scalability." },
  { step: "06", title: "Frontend & Backend Integration", description: "Our developers integrate stunning frontend designs with robust backend functionalities to bring your vision to life." },
  { step: "07", title: "Performance Optimization", description: "We optimize your website for speed, responsiveness, and SEO to enhance user experience and search rankings." },
  { step: "08", title: "Quality Assurance & Testing", description: "Rigorous testing is performed to identify and fix any bugs, ensuring a flawless user experience across all devices." },
  { step: "09", title: "Deployment & Launch", description: "Once everything is tested and approved, we deploy your website to a live environment for public access." },
  { step: "10", title: "Post-Launch Support & Maintenance", description: "We offer ongoing support, maintenance, and feature updates to keep your website running smoothly." },
];

const OurWorkProcess = () => {
  const [activeStep, setActiveStep] = useState(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative py-20"
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl font-extrabold text-black mb-6">
          OUR WORK <span className="text-purple-700">PROCESS</span>
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          We at Concise Studio take our work process very seriously and ensure it’s transparent,
          so you can track your project’s progress at every stage.
        </p>

        {/* Steps */}
        <div className="relative">
          {/* Vertical Connector Line */}
          <div className="absolute left-8 top-0 h-full w-1 bg-gray-300 hidden md:block"></div>

          {steps.map((item, index) => (
            <motion.div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-center gap-6 mb-10 md:mb-16 relative"
            >
              {/* Step Number - Changes Color When Active */}
              <div
                className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-2xl font-bold rounded-full relative z-10 transition-all duration-500 ${activeStep === index
                  ? "bg-purple-700 text-white shadow-lg scale-110"
                  : "bg-gray-300 text-gray-700"
                  }`}
              >
                {item.step}
              </div>

              {/* Step Content - Changes Text Color When Active */}
              <div
                className={`text-left transition duration-500 ${activeStep === index ? "text-purple-700" : "text-gray-900"
                  }`}
              >
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default OurWorkProcess;
