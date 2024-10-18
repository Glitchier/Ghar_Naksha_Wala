import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      viewport={{ once: true }}
      className="w-full mx-auto grid-cols-1 md:grid-cols-2 grid xl:grid-cols-4 justify-center items-center gap-8 py-14 bg-bgSVG bg-center rounded-xl bg-repeat-space"
    >
      <div className="col-span-1 flex justify-center items-center gap-6 p-4 backdrop-blur-sm border rounded-lg">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "tween" }}
          viewport={{ once: true }}
          className="text-4xl text-dark font-semibold"
        >
          500+
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, type: "tween" }}
          viewport={{ once: true }}
          className="text-lg"
        >
          Projects
          <br /> Succeed
        </motion.p>
      </div>
      <div className="col-span-1 flex justify-center items-center gap-6 p-6 backdrop-blur-sm border rounded-lg">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "tween" }}
          viewport={{ once: true }}
          className="text-4xl text-dark font-semibold"
        >
          100+
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, type: "tween" }}
          viewport={{ once: true }}
          className="text-lg"
        >
          Satisfied
          <br /> Client
        </motion.p>
      </div>
      <div className="col-span-1 flex justify-center items-center gap-6 p-6 backdrop-blur-sm border rounded-lg">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4, type: "tween" }}
          viewport={{ once: true }}
          className="text-4xl text-dark font-semibold"
        >
          3+
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, type: "tween" }}
          viewport={{ once: true }}
          className="text-lg"
        >
          Professional
          <br /> Engineer
        </motion.p>
      </div>
      <div className="col-span-1 flex justify-center items-center gap-6 p-6 backdrop-blur-sm border rounded-lg">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4, type: "tween" }}
          viewport={{ once: true }}
          className="text-4xl text-dark font-semibold"
        >
          5+
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, type: "tween" }}
          viewport={{ once: true }}
          className="text-lg"
        >
          Year of
          <br /> Experience
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Experience;
