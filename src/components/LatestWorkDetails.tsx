import { useParams } from "react-router-dom";
import { LatestWorkData } from "../assets/imports";
import { motion } from "framer-motion";
import { lazy } from "react";

const ImageSlider = lazy(() => import("./ImageSlider"));

const LatestWorkDetails = () => {
  const { id } = useParams();
  if (!id) return null;
  const data = LatestWorkData[id];

  if (!data) return null;
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
        <h1 className="text-2xl font-Kaushan text-zinc-400">Project Details</h1>
      </motion.div>
      <div className="flex flex-col justify-center items-start w-full gap-4">
        <h1 className="text-3xl font-semibold">{data.type}</h1>
        <div className="flex flex-col justify-center items-start gap-2">
          <p className="capitalize text-lg">Location: {data.location}</p>
          <p className="capitalize text-lg">Area: {data.area}</p>
          <p className="capitalize text-lg">
            Status: {!data.status ? "On-Going" : "Completed"}
          </p>
        </div>
      </div>

      <ImageSlider data={data.pic} />
    </div>
  );
};

export default LatestWorkDetails;
