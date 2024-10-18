import { motion } from "framer-motion";
import { Employee } from "../assets/imports";
import aboutLogo from "../assets/aboutBG.svg";

const About = () => {
  return (
    <div className="flex w-full flex-col justify-center items-center my-10 gap-6">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
        viewport={{ once: true }}
        className="flex justify-center items-center gap-4 w-full"
      >
        <div className="h-1 w-10 bg-dark rounded-full"></div>
        <h1 className="text-3xl text-zinc-500 font-Kaushan">About Us</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
        viewport={{ once: true }}
        className="flex flex-col xmd:flex-row justify-center items-center gap-4 w-full"
      >
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
          viewport={{ once: true }}
          src={aboutLogo}
          alt="about"
          height={400}
          width={400}
          loading="lazy"
          className="aspect-square p-4"
        />
        <div className="flex flex-col max-w-[500px] justify-center items-start gap-8 ml-0 xmd:ml-6">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, type: "tween" }}
            viewport={{ once: true }}
            className="text-3xl tracking-wide font-Kaushan"
          >
            Who we are
            <div className="h-1 w-10 bg-dark rounded-full mt-2"></div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, type: "tween" }}
            viewport={{ once: true }}
            className="text-sm lg:text-md"
          >
            Ghar Naksha Wala is an architecture and design based company founded
            in Jharkhand, India in 2020. Our investigations occur at multiple
            scales; from objects and interiors to residential and commercial
            buildings. Current work includes private residences, residential
            interiors, hospitality and institutional projects across Jharkhand.
            <br />
            <br />
            As a Design company, our work is process driven — combining spatial
            narratives, landscape, and materials to create projects that are
            responsive and carefully considered. Our approach is open and fluid
            — drawing inspiration from site, culture, environment and
            technology.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
        viewport={{ once: true }}
        className="flex justify-center items-center gap-4 w-full my-6"
      >
        <div className="h-1 w-10 bg-dark rounded-full"></div>
        <h1 className="text-3xl font-Kaushan">Meet our team</h1>
      </motion.div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-full bg-bgAboutSVG rounded p-4">
        {Employee.map((item, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "tween", staggerChildren: 0.4 }}
            viewport={{ once: true }}
            key={idx}
            className="flex flex-col justify-center items-center gap-6 p-4 bg-dark/10 backdrop-blur-sm rounded-lg m-6"
          >
            <img
              src={item.pic}
              alt={`img${item.pic}`}
              height={240}
              width={240}
              loading="lazy"
            />
            <div className="flex flex-col justify-center items-center">
              <p className="capitalize text-xl">{item.name}</p>
              <p className="capitalize text-zinc-500">{item.designation}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
