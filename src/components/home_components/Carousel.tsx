import { useEffect, useState } from "react";
import { CarouselPhotos } from "../../assets/imports";

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrent(current + 1);
      if (current === CarouselPhotos.length - 1) {
        setCurrent(0);
      }
    }, 5000);
  });

  return (
    <div className="flex flex-col gap-4 h-full max-w-[1080px] mx-auto aspect-[16/9] overflow-hidden drop-shadow-lg rounded-md">
      <div className="relative w-full h-full flex flex-col justify-center items-center gap-4">
        {CarouselPhotos.map((item, idx) => {
          return (
            <div
              key={idx}
              className={
                idx === current
                  ? "max-w-[1080px] object-cover opacity-100 overflow-hidden"
                  : "flex opacity-0 absolute w-full h-full overflow-hidden max-w-[1080px] object-cover"
              }
            >
              <div className="max-w-[1080px] object-cover">
                <img
                  src={item.url}
                  className="object-cover bg-center aspect-[16/9]"
                  loading="lazy"
                  alt={`img${idx}`}
                />
                <div className="absolute top-0 left-0 z-[10] w-full h-full flex flex-col justify-center items-center gap-2 sm:gap-4 bg-gradient-to-t from-black/90 to-transparent">
                  <h1 className="text-white text-2xl sm:text-4xl lg:text-4xl xl:text-5xl lg:py-2 py-0 capitalize tracking-widest font-Kaushan">
                    Ghar naksha wala
                  </h1>
                  <p className="text-white text-xs sm:text-md lg:text-md xl:text-lg uppercase tracking-widest">
                    construction and planner pvt. ltd.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Page Dots */}

      <div className="absolute z-[12] bottom-5 left-[50%] -translate-x-[50%] flex justify-center items-center gap-1">
        {CarouselPhotos.map((_, idx) => {
          return (
            <div
              key={idx}
              className={
                idx === current
                  ? "bg-dark rounded-full w-2 h-2 z-[10]"
                  : "bg-zinc-400 rounded-full w-1 h-1 z-[10]"
              }
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
