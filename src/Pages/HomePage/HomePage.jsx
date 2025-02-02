import Banner from "./Components/Banner";
import Marquee from "react-fast-marquee";
import Review from "./Components/Review";
import AboutUs from "./Components/AboutUs";
import WeHaveCompleted from "./Components/WeHaveCompleted";
import Portfolio from "./Components/Portfolio";
import MarqueSectionLeft from "./Components/MarqueSectionLeft";
import MarqueSectionRight from "./Components/MarqueSectionRight";
import FAQSection from "./Components/FAQSection";
import HireMessageSection from "./Components/HireMessageSection";

const HomePage = () => {






    return (
        <div className=" space-y-40">
            <div className="max-w-7xl mx-auto">
                <Banner />
            </div>

            <div className="max-w-7xl mx-auto">
                <AboutUs />
            </div>

            <div className="space-y-20">
                <MarqueSectionLeft />
                <MarqueSectionRight />
            </div>

            <FAQSection />
            <div className="">
                <Portfolio />

                <Review />
                <HireMessageSection />

            </div>

        </div>
    );
};

export default HomePage;