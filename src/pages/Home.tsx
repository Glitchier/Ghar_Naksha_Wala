import Experience from "../components/home_components/Experience";
import Hero from "../components/home_components/Hero";
import AboutUs from "../components/home_components/AboutUs";
import Services from "../components/home_components/Services";
import LatestWork from "../components/home_components/LatestWork";
import { FaSquareWhatsapp } from "react-icons/fa6";
import Review from "../components/home_components/Review";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex w-full flex-col justify-start items-center mt-10 gap-14">
      <Hero />
      <AboutUs />
      <Experience />
      <Services />
      <LatestWork />
      <Review />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
        className="fixed z-[999] bottom-[5%] right-[0%] flex flex-col justify-center items-center gap-2 hover:scale-110 transition-all ease-in-out duration-200 px-6 sm:px-[6vw] md:px-[8vw] lg:px-[10vw]"
      >
        <div className="bg-white drop-shadow-md rounded-lg cursor-pointer">
          <a
            aria-label="WhatsApp"
            href="https://wa.me/919876543211"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <FaSquareWhatsapp size={"3rem"} fill="#25D366" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
