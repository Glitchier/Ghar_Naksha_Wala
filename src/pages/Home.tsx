import { lazy } from "react";
import { FaSquareWhatsapp } from "react-icons/fa6";
import Review from "../components/home_components/Review";
import { motion } from "framer-motion";
import { BiSolidOffer } from "react-icons/bi";

const Experience = lazy(
  () => import("../components/home_components/Experience")
);
const Hero = lazy(() => import("../components/home_components/Hero"));
const AboutUs = lazy(() => import("../components/home_components/AboutUs"));
const Services = lazy(() => import("../components/home_components/Services"));
const LatestWork = lazy(
  () => import("../components/home_components/LatestWork")
);

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
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
        className="fixed z-[999] bottom-[5%] right-[0%] flex flex-col justify-center items-center gap-2 hover:scale-110 transition-all ease-in-out duration-200 px-6 sm:px-[6vw] md:px-[8vw] lg:px-[10vw]"
      >
        <div className="bg-white drop-shadow-md rounded-lg cursor-pointer">
          <BiSolidOffer size={"3rem"} fill="#FAAF00" />
        </div>
        <div className="bg-white drop-shadow-md rounded-lg cursor-pointer">
          <a
            aria-label="WhatsApp"
            href="https://wa.me/+919798419132"
            target="blank"
            className="cursor-pointer w-full"
          >
            <FaSquareWhatsapp size={"3rem"} fill="#25D366" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
