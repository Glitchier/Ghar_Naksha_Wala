import { Link, useParams } from "react-router-dom";
import { LatestWorkData } from "../assets/imports";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";

const ImageSlider = lazy(() => import("./ImageSlider"));

const LatestWorkDetails = () => {
  const { id } = useParams();
  const data = id ? LatestWorkData[id] : undefined;

  if (!data)
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <p className="text-zinc-500">That project doesn't exist.</p>
        <Link
          to="/"
          className="rounded bg-primary px-6 py-2 font-semibold text-white"
        >
          Back to home
        </Link>
      </div>
    );
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

      <Suspense
        fallback={
          <div className="aspect-video w-full max-w-[1080px] animate-pulse rounded-xl bg-zinc-200" />
        }
      >
        <ImageSlider data={data.pic} />
      </Suspense>
    </div>
  );
};

export default LatestWorkDetails;
