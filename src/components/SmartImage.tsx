import { useState, type ImgHTMLAttributes } from "react";

// Image with a pulse skeleton while loading and a text fallback on failure.
const SmartImage = ({
  className = "",
  alt,
  onLoad,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) => {
  const [state, setState] = useState<"loading" | "ok" | "error">("loading");

  if (state === "error")
    return (
      <div
        role="img"
        aria-label={alt}
        className={`${className} flex items-center justify-center bg-zinc-100 text-xs text-zinc-400`}
      >
        Image unavailable
      </div>
    );

  return (
    <img
      loading="lazy"
      decoding="async"
      alt={alt}
      {...props}
      onLoad={(e) => {
        setState("ok");
        onLoad?.(e);
      }}
      onError={() => setState("error")}
      className={`${className} ${state === "loading" ? "animate-pulse bg-zinc-200" : ""}`}
    />
  );
};

export default SmartImage;
