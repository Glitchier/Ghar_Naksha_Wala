import Rating from "@mui/material/Rating";
import { useState } from "react";

type ReviewType = {
  profilePic: string;
  name: string;
  stars: number;
  comment: string;
};

const ReviewCards = (item: ReviewType) => {
  const [view, setView] = useState(false);
  return (
    <div className="flex min-w-[256px] mb-4 flex-col justify-center text-center items-center gap-4 px-4 py-6 border rounded-lg bg-white drop-shadow-md max-h-[400px]">
      <img
        src={item.profilePic}
        alt="profile"
        height={72}
        width={72}
        className="rounded-full"
      />
      <p className="capitalize font-semibold text-sm">{item.name}</p>
      <div className="flex flex-col justify-center items-center gap-2">
        <Rating name="read-only" value={item.stars} size="small" readOnly />
        <div className="overflow-y-auto max-h-[80px]">
          <p
            className={`${
              view ? "line-clamp-none" : "line-clamp-4"
            } text-sm max-w-[256px]`}
          >
            {item.comment}
          </p>
        </div>
        <button onClick={() => setView(!view)} className="text-sm">
          {view ? "read less..." : "read more..."}
        </button>
      </div>
    </div>
  );
};

export default ReviewCards;
