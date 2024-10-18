import { IoDiamondOutline } from "react-icons/io5";
import { RiPaintBrushLine } from "react-icons/ri";
import { RiArmchairLine } from "react-icons/ri";
import { PiHeadsetBold } from "react-icons/pi";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="flex w-full flex-col justify-center items-start gap-6">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
        viewport={{ once: true }}
        className="flex justify-center items-start gap-4 mb-6"
      >
        <div className="h-1 bg-dark w-10 rounded-full mt-4"></div>
        <div className="flex-col flex gap-6">
          <h1 className="text-2xl font-Kaushan text-zinc-400">What we do</h1>
          <h1 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl capitalize">
            Provide the best
            <br /> services
          </h1>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          type: "tween",
        }}
        viewport={{ once: true }}
        className="grid grid-cols-12 gap-4 w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
          viewport={{ once: true }}
          className="xl:col-span-3 sm:col-span-6 col-span-full p-10 rounded-md border bg-white drop-shadow-md"
        >
          <div className="flex w-full flex-col justify-center items-start gap-4">
            <IoDiamondOutline size={"2rem"} fill="#86B9B0" stroke="#86B9B0" />
            <h1 className="text-xl font-semibold leading-wide">Architecture</h1>
            <p className="text-sm max-w-[300px] text-zinc-600">
              Architecture has to do with planning and designing form, space and
              ambience to reflect functional.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "tween", delay: 0.4 }}
          viewport={{ once: true }}
          className="xl:col-span-3 sm:col-span-6 col-span-full p-10 rounded-md border bg-white drop-shadow-md"
        >
          <div className="flex w-full flex-col justify-center items-start gap-4">
            <RiPaintBrushLine size={"2rem"} fill="#86B9B0" stroke="#86B9B0" />
            <h1 className="text-xl font-semibold leading-wide">
              Interior Design
            </h1>
            <p className="text-sm max-w-[300px] text-zinc-600">
              Is the process of shaping the experience of interior space,
              through the manipulation of spatial volume.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "tween", delay: 0.6 }}
          viewport={{ once: true }}
          className="xl:col-span-3 sm:col-span-6 col-span-full p-10 rounded-md border bg-white drop-shadow-md"
        >
          <div className="flex w-full flex-col justify-center items-start gap-4">
            <RiArmchairLine size={"2rem"} fill="#86B9B0" stroke="#86B9B0" />
            <h1 className="text-xl font-semibold leading-wide">
              Furniture Design
            </h1>
            <p className="text-sm max-w-[300px] text-zinc-600">
              Furniture refers to movable objects intended to support various
              human activities such as seating.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "tween", delay: 0.8 }}
          viewport={{ once: true }}
          className="xl:col-span-3 sm:col-span-6 col-span-full p-10 rounded-md border bg-white drop-shadow-md"
        >
          <div className="flex w-full flex-col justify-center items-start gap-4">
            <PiHeadsetBold size={"2rem"} fill="#86B9B0" stroke="#86B9B0" />
            <h1 className="text-xl font-semibold leading-wide">Consulting</h1>
            <p className="text-sm max-w-[300px] text-zinc-600">
              Consultant: Someone who is employed externally to the client,
              either by a consulting firm or some other agency.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Services;
