import { useState } from "react";
import SmartImage from "./SmartImage";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type ImageSliderType = {
  data: string[];
};

const ImageSlider = ({ data }: ImageSliderType) => {
  const [imgNumber, setImgNumber] = useState<number>(0);

  return (
    <div className="flex max-w-[1080px] justify-center items-center gap-4 w-full">
      <picture className="relative rounded-xl overflow-hidden bg-cover bg-center justify-center items-center flex">
        <SmartImage
          src={data[imgNumber]}
          alt={`Project photo ${imgNumber + 1} of ${data.length}`}
          className="max-w-full sm:max-w-[1080px] aspect-auto"
        />
        <div className="absolute left-0 top-0 w-full h-full">
          {/* left */}
          {imgNumber === 0 ? null : (
            <button
              aria-label="Previous photo"
              onClick={() => {
                if (imgNumber !== 0) {
                  setImgNumber(imgNumber - 1);
                } else {
                  return;
                }
              }}
              className="absolute left-[0%] top-1/2 -translate-y-1/2 flex justify-center items-center h-full hover:bg-black/50 hover:backdrop-blur-sm p-2 cursor-pointer"
            >
              <IoIosArrowBack size={"2.5rem"} fill="#fff" />
            </button>
          )}
          {/* right */}
          {imgNumber === data.length - 1 ? null : (
            <button
              aria-label="Previous photo"
              onClick={() => setImgNumber(imgNumber + 1)}
              className="absolute right-[0%] top-1/2 -translate-y-1/2 flex justify-center items-center h-full cursor-pointer hover:bg-black/50 hover:backdrop-blur-sm p-2"
            >
              <IoIosArrowForward size={"2.5rem"} fill="#fff" />
            </button>
          )}
        </div>
      </picture>
    </div>
  );
};

export default ImageSlider;
