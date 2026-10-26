import { motion } from "framer-motion";
import { LatestWorkData } from "../../assets/imports";
import { Link } from "react-router-dom";
import SmartImage from "../SmartImage";

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
        <div className="h-1 bg-primary w-10 rounded-full mt-4"></div>
        <div className="flex-col flex gap-6">
          <h1 className="text-2xl font-Kaushan text-zinc-400">Latest Work</h1>
          <h1 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl capitalize">
            Some of our
            <br /> latest works
          </h1>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 lg2:grid-cols-3 gap-8 w-full">
        {Object.entries(LatestWorkData).map(([id, work], i) => (
          <motion.div
            key={id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            // small amount so the card reveals even when only a sliver is on screen
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, type: "tween", delay: i * 0.15 }}
            className="group relative aspect-square w-full bg-black border drop-shadow-md rounded overflow-hidden"
          >
            <SmartImage
              src={work.pic[0]}
              alt={work.type}
              className="h-full w-full object-cover opacity-80 transition-all duration-200 group-hover:opacity-100 group-hover:scale-110"
            />
            <Link
              to={`/latest_work/${id}`}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-white bg-black/50 backdrop-blur-sm text-xs font-semibold px-4 py-3 rounded-lg tracking-widest uppercase transition-colors hover:bg-primary"
            >
              See Project
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LatestWork;
