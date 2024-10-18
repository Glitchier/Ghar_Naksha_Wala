import { OtherPhotos } from "../assets/imports";

const Masonry = () => {
  return (
    <div className="columns-3 gap-3 space-y-3 max-w-[1080px]">
      {OtherPhotos.map((item, idx) => (
        <picture key={idx} className="max-w-[200px] h-fit break-inside-avoid">
          <img
            src={item}
            loading="lazy"
            className="mb-3 aspect-auto"
            alt={`img${idx}`}
          />
        </picture>
      ))}
    </div>
  );
};

export default Masonry;
