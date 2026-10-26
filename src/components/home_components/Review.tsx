import { motion } from "framer-motion";
import ReviewCards from "./ReviewCards";
import { ReviewData } from "../../assets/imports";

const Review = () => {
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
          <h1 className="text-2xl font-Kaushan text-zinc-400">Feedbacks</h1>
          <h1 className="text-3xl md:text-2xl lg:text-3xl xl:text-4xl capitalize">
            Our Clients
            <br />
            Experience
          </h1>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          type: "tween",
          delay: 0.3,
        }}
        viewport={{ once: true }}
        className="overflow-hidden w-full"
      >
        <div className="flex justify-start items-start gap-6 flex-nowrap overflow-x-scroll py-4">
          {ReviewData.map((item, i) => (
            <ReviewCards
              key={i}
              profilePic={item.profilePic}
              stars={item.stars}
              name={item.name}
              comment={item.comment}
            />
          ))}
        </div>
      </motion.div>
      <a
        href="https://www.example.com/reviews"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 transition-all duration-200 ease-in-out border-primary border-2 rounded bg-white drop-shadow-sm hover:bg-primary hover:text-white"
      >
        More Reviews
      </a>
    </div>
  );
};

export default Review;
