import { motion } from "framer-motion";
import { LatestWorkData } from "../../assets/imports";
import { NavLink } from "react-router-dom";

const LatestWork = () => {
  return (
    <div className="flex w-full flex-col justify-center my-14 items-start gap-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
        viewport={{ once: true }}
        className="flex justify-center items-start gap-4 mb-6"
      >
        <div className="h-1 bg-dark w-10 rounded-full mt-4"></div>
        <div className="flex-col flex gap-6">
          <h1 className="text-2xl font-Kaushan text-zinc-400">Latest Work</h1>
          <h1 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl capitalize">
            Some of our
            <br /> latest works
          </h1>
        </div>
      </motion.div>
      <div className="grid grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "tween", delay: 0.2 }}
          viewport={{ once: true }}
          className="col-span-full lg2:col-span-1 flex justify-center items-center h-full w-full bg-black border drop-shadow-md rounded overflow-hidden"
        >
          <img
            loading="lazy"
            src={LatestWorkData["0001"].pic[0]}
            className="aspect-square w-full h-full opacity-70 hover:opacity-100 scale-100 transition-all duration-200 hover:scale-110"
            alt="img"
          />
          <NavLink
            to={"/latest_work/0001"}
            className="absolute text-white bg-black/50 backdrop-blur-sm text-xs font-semibold px-4 py-3 rounded-lg tracking-widest hover:scale-110 uppercase"
          >
            See Project
          </NavLink>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "tween", delay: 0.4 }}
          viewport={{ once: true }}
          className="col-span-full lg2:col-span-1 flex justify-center items-center h-full w-full bg-black border drop-shadow-md rounded overflow-hidden"
        >
          <img
            loading="lazy"
            src={LatestWorkData["0002"].pic[0]}
            className="aspect-square w-full h-full opacity-70 hover:opacity-100 scale-100 transition-all duration-200 hover:scale-110"
            alt="img"
          />
          <NavLink
            to={"/latest_work/0002"}
            className="absolute text-white bg-black/50 backdrop-blur-sm text-xs font-semibold px-4 py-3 rounded-lg tracking-widest hover:scale-110 uppercase"
          >
            See Project
          </NavLink>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "tween", delay: 0.6 }}
          viewport={{ once: true }}
          className="col-span-full lg2:col-span-1 flex justify-center items-center h-full w-full bg-black border drop-shadow-md rounded overflow-hidden"
        >
          <img
            loading="lazy"
            src={LatestWorkData["0003"].pic[0]}
            className="aspect-square w-full h-full opacity-70 hover:opacity-100 scale-100 transition-all duration-200 hover:scale-110"
            alt="img"
          />
          <NavLink
            to={"/latest_work/0003"}
            className="absolute text-white bg-black/50 backdrop-blur-sm text-xs font-semibold px-4 py-3 rounded-lg tracking-widest hover:scale-110 uppercase"
          >
            See Project
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};

export default LatestWork;
