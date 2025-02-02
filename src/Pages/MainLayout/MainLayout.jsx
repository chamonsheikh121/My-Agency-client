import { Outlet } from "react-router-dom";
import Footer from "../HomePage/Components/Footer";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis"; // Import Lenis.js

const MainLayout = () => {
  const [isSticky, setIsSticky] = useState(false);

  // Listen for scroll events
  useEffect(() => {
    // Initialize Lenis.js for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2, // Adjust scrolling duration
      easing: (t) => 1 - Math.pow(1 - t, 3), // Custom easing function for smoothness
      smoothWheel: true, // Enable smooth scrolling for wheel events
      smoothTouch: true, // Enable smooth scrolling for touch events
    });

    // Animation frame to keep Lenis running
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Cleanup Lenis on component unmount
    return () => lenis.destroy();
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsSticky(true); // Set sticky if scrolled more than 20px
    } else {
      setIsSticky(false); // Reset sticky if scrolled back up
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
              isSticky
                ? "top-0 bg-white/40 shadow-lg backdrop-blur-md"
                : "top-[-80px] bg-transparent"
            }`}
          >
            {/* Inner container for max width */}
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 transition-all duration-500">
              {/* Left side - Mobile Drawer & Nav Items */}
              <div className="flex-none lg:flex lg:w-1/3">
                {/* Mobile Menu Button */}
                <label
                  htmlFor="my-drawer-3"
                  aria-label="open sidebar"
                  className="btn btn-square btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>

                {/* Desktop Nav Items */}
                <ul className="hidden lg:flex menu menu-horizontal text-lg font-medium transition-all duration-500">
                  <li>
                    <a className="hover:text-blue-500 transition-all">Home</a>
                  </li>
                  <li>
                    <a className="hover:text-blue-500 transition-all">About</a>
                  </li>
                  <li>
                    <a className="hover:text-blue-500 transition-all">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-blue-500 transition-all">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              {/* Center - Logo */}
              <div className="flex-1 flex justify-center">
                <div className="text-3xl md:text-4xl font-extrabold text-gray-900 flex items-center transition-all duration-500">
                  <span className="text-blue-600">Team</span>
                  <span className="ml-1 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                    Webio
                  </span>
                </div>
              </div>

              {/* Right side - Empty for alignment */}
              <div className="w-1/3 hidden lg:block"></div>
            </div>
          </div>

          {/* Page content here */}
          <Outlet />
          <Footer />
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
