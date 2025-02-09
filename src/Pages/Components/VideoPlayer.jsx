import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import 'aos/dist/aos.css'; // import AOS styles
import AOS from 'aos'; // import AOS library

const VideoPlayer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const videoSrc = "https://res.cloudinary.com/dcqfonnjc/video/upload/v1737349065/0new_gzozwk.mp4";


    useEffect(() => {
        // Initialize AOS with custom settings
        AOS.init({
            duration: 1000, // duration of the animation
            easing: 'ease', // easing function
            once: false, // whether animation should happen only once or every time it comes into view
        });

        // Refresh AOS after initialization
        AOS.refresh(); // Force AOS to trigger again in case of any issues

    }, []);

    return (
        <div
            data-aos="fade-up"
            data-aos-duration="3000"
            className="flex items-center justify-center ">
            {/* Video Thumbnail */}
            <div
                className={`${isOpen ? 'hidden' : 'block'} relative max-w-[1000px] w-[calc(100%-15px)] max-h-[700px]  cursor-pointer group`}
                onClick={() => setIsOpen(true)}
            >
                {/* Video */}
                <video src={videoSrc} className="w-full h-full object-cover rounded-lg" muted />

                {/* Transparent Play Button */}
                <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center transition">
                    <button
                        className="p-4 bg-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center"
                        style={{
                            WebkitMaskImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"black\"><path d=\"M8 5v14l11-7z\"/></svg>')",
                            maskImage: "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"black\"><path d=\"M8 5v14l11-7z\"/></svg>')",
                            WebkitMaskRepeat: "no-repeat",
                            maskRepeat: "no-repeat",
                            WebkitMaskPosition: "center",
                            maskPosition: "center",
                            backgroundColor: "white",
                        }}
                    >
                        {/* Empty content, mask will create transparency */}
                    </button>
                </div>
            </div>


            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                        onClick={() => setIsOpen(false)}
                    >
                        <button
                            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={24} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="relative shadow-2xl rounded-md shadow-black w-full max-w-5xl"
                            onClick={(e) => e.stopPropagation()}
                        >

                            <video
                                className="w-full rounded-lg shadow-lg"
                                src={videoSrc}
                                controls
                                autoPlay
                                controlsList="nodownload"
                                onContextMenu={(e) => e.preventDefault()} // Disable right-click
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default VideoPlayer;


{/* 
  import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Vimeo from "@vimeo/player";

const VideoPlayer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const videoId = "1054936036"; // Your Vimeo video ID
    const iframeRef = useRef(null);

    useEffect(() => {
        if (isOpen && iframeRef.current) {
            const player = new Vimeo(iframeRef.current);
            player.play(); // Auto-play when modal opens
        }
    }, [isOpen]);

    return (
        <div className="flex items-center justify-center">
            {/* Video Thumbnail 
        //     <div className={`${isOpen ? 'hidden' : 'block'} relative w-[800px] h-[500px] cursor-pointer group`} onClick={() => setIsOpen(true)}>
        //         <iframe
        //             src={`https://player.vimeo.com/video/${videoId}?h=ec5a395384&title=0&byline=0&portrait=0`}
        //             className="w-full h-full object-cover rounded-lg"
        //             allow="autoplay; fullscreen"
        //             allowFullScreen
        //         />
        //         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
        //             <button className="bg-white p-4 rounded-full shadow-lg">
        //                 ▶️
        //             </button>
        //         </div>
        //     </div>

        //     {/* Modal */}
//     <AnimatePresence>
//         {isOpen && (
//             <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//                 onClick={() => setIsOpen(false)}
//             >
//                 <button
//                     className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
//                     onClick={() => setIsOpen(false)}
//                 >
//                     <X size={24} />
//                 </button>
//                 <motion.div
//                     initial={{ scale: 0.8 }}
//                     animate={{ scale: 1 }}
//                     exit={{ scale: 0.8 }}
//                     className="relative shadow-2xl rounded-md shadow-black w-full max-w-5xl"
//                     onClick={(e) => e.stopPropagation()}
//                 >
//                     {/* Vimeo Player */}
//                     <iframe
//                         ref={iframeRef}
//                         src={`https://player.vimeo.com/video/${videoId}?h=ec5a395384&autoplay=1&title=0&byline=0&portrait=0`}
//                         className="w-full h-[500px] rounded-lg shadow-lg"
//                         allow="autoplay; fullscreen"
//                         allowFullScreen
//                     />
//                 </motion.div>
//             </motion.div>
//         )}
//     </AnimatePresence>
// </div>
//     );
// };

// export default VideoPlayer;



