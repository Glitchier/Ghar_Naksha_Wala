import { motion } from "framer-motion";
import Carousel from "../home_components/Carousel";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = "/work";
    navigate(path);
  };

  return (
    <>
      <div className="flex min-h-[50vh] w-full xmd:flex-row flex-col justify-between items-center gap-8 xmd:gap-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "tween" }}
          viewport={{ once: true }}
          className="flex flex-col mx-auto items-start gap-2 justify-start"
        >
          <div className="h-1 bg-dark w-10 rounded-full"></div>
          <p className="capitalize text-3xl xl:text-4xl xl:leading-relaxed xl:tracking-wider font-Kaushan leading-relaxed tracking-wider font-semibold">
            Design your
            <br />
            space with the
            <br />
            Experts
          </p>
          <p className="font-Montserrat w-[80%] max-w-[720px] text-sm mt-0 lg:mt-4">
            We provide a special touch to your ghar. We are the Ghar Naksha
            Wala.
          </p>
          <button
            onClick={routeChange}
            className="bg-dark text-white text-xs font-semibold tracking-wider px-4 py-3 rounded-full hover:bg-zinc-800 hover:text-white hover:scale-105 transition-all duration-200 text-nowrap mt-6"
          >
            OUR PROJECTS
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "tween" }}
          viewport={{ once: true }}
          className="max-w-[1080px] h-full drop-shadow-lg"
        >
          <Carousel />
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
