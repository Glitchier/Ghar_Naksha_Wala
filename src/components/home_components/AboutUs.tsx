import { motion } from "framer-motion";
import { lazy } from "react";

const Masonry = lazy(() => import("../Masonry"));

const AboutUs = () => {
  return (
    <div className="flex flex-col xmd:flex-row justify-between items-center xmd:items-start mt-4 lg:mt-10 w-full gap-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
        viewport={{ once: true }}
        className="flex justify-center items-start gap-4 mb-6"
      >
        <div className="h-1 bg-dark w-10 rounded-full mt-4"></div>
        <div className="flex-col flex justify-center items-start gap-6">
          <h1 className="text-2xl font-Kaushan text-zinc-400">About Us</h1>
          <h1 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl capitalize">
            A different kind
            <br /> of architectural firm.
          </h1>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-[480px] leading-relaxed">
            Architecture is both the process and the product of planning,
            designing and constructing buildings or any other structures.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
        viewport={{ once: true }}
        className="flex justify-center w-full items-end max-w-[500px]"
      >
        <Masonry />
      </motion.div>
    </div>
  );
};

export default AboutUs;
