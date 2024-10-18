import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

type PropType = {
  gallery: string[];
};

const LivingRoom = ({ gallery }: PropType) => {
  const [more, setMore] = useState<number>(6 | 0);
  const [view, setView] = useState<boolean>(false);
  const [file, setFile] = useState<string>("");
  const [close, setClose] = useState<boolean>(false);

  const galleryTrim = gallery.slice(0, more);

  useEffect(() => {
    if (view) {
      setMore(gallery.length);
    } else {
      setMore(6);
    }
  }, [view, more, gallery]);

  return (
    <div className="flex flex-col justify-center items-center gap-10 bg-white">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, type: "tween" }}
        className="flex justify-start items-start gap-4"
      >
        <div className="h-1 bg-dark w-10 rounded-full mt-4"></div>
        <h1 className="text-4xl font-Kaushan text-zinc-400">Living Room</h1>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {galleryTrim.map((img, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "tween", staggerChildren: 0.2 }}
            onClick={() => {
              setFile(img);
              setClose(true);
            }}
            key={idx}
            className="bg-zinc-50 border max-w-[480px] max-h-[260px] flex justify-center items-center overflow-hidden rounded cursor-pointer"
          >
            <picture>
              <img
                className="hover:scale-105 transition-all duration-300 ease-in-out aspect-square"
                src={img}
                alt={`img${idx}`}
                loading="lazy"
              />
            </picture>
          </motion.div>
        ))}
      </div>
      {gallery.length > 6 ? (
        <button
          onClick={() => {
            setView(!view);
          }}
          className="px-4 py-2 transition-all duration-200 ease-in-out border-dark border-2 rounded bg-white drop-shadow-sm hover:bg-dark hover:text-white"
        >
          {view ? "View Less" : "View More"}
        </button>
      ) : null}
      {close && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-md z-[999] p-6 overflow-auto">
          <div className="w-full flex flex-col justify-center items-end gap-4">
            <IoClose
              size={"3rem"}
              className="cursor-pointer"
              fill="#fff"
              onClick={() => setClose(false)}
            />
            <div className="w-full flex justify-center items-center">
              <picture>
                <img
                  src={file}
                  alt="img"
                  loading="lazy"
                  className="rounded mx-auto max-h-[85vh]"
                />
              </picture>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LivingRoom;
