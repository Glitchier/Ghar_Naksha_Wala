import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import SmartImage from "./SmartImage";

const PREVIEW = 6;

type PropType = {
  title: string;
  gallery: string[];
};

const Gallery = ({ title, gallery }: PropType) => {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section className="flex flex-col justify-center items-center gap-10 bg-white">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "tween" }}
        className="flex justify-start items-start gap-4"
      >
        <div className="h-1 bg-primary w-10 rounded-full mt-4"></div>
        <h1 className="text-4xl font-Kaushan text-zinc-400">{title}</h1>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {gallery
          .slice(0, expanded ? gallery.length : PREVIEW)
          .map((img, idx) => (
            <motion.button
              type="button"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "tween" }}
              onClick={() => setOpen(img)}
              aria-label={`Open ${title} photo ${idx + 1}`}
              key={img}
              className="bg-zinc-50 border max-w-[480px] max-h-[260px] flex justify-center items-center overflow-hidden rounded cursor-pointer"
            >
              <SmartImage
                className="hover:scale-105 transition-all duration-300 ease-in-out aspect-square"
                src={img}
                alt={`${title} ${idx + 1}`}
              />
            </motion.button>
          ))}
      </div>
      {gallery.length > PREVIEW && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="px-4 py-2 transition-all duration-200 ease-in-out border-primary border-2 rounded bg-white drop-shadow-sm hover:bg-primary hover:text-white"
        >
          {expanded ? "View Less" : "View More"}
        </button>
      )}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(null)}
          className="fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-md z-[999] p-6 overflow-auto"
        >
          <div className="w-full h-full flex flex-col justify-center items-end gap-4">
            <button aria-label="Close" onClick={() => setOpen(null)}>
              <IoClose size={"3rem"} fill="#fff" />
            </button>
            <div className="w-full flex justify-center items-center">
              <SmartImage
                src={open}
                alt={title}
                onClick={(e) => e.stopPropagation()}
                className="rounded mx-auto max-h-[85vh] min-h-[200px] min-w-[200px]"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
