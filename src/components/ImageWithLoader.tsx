import { useState } from "react";
import type { ImageWithLoadingProps } from "../types/image";

export default function ImageWithLoading({
  src,
  alt,
  className,
}: ImageWithLoadingProps) {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <img
      src={src}
      alt={alt}
      onLoad={() => setLoaded(true)}
      className={`transition-all duration-500 object-cover object-center ease-in-out ${
        loaded ? "opacity-100" : "opacity-0 blur-sm"
      } ${className}`}
    />
  );
}
