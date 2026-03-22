import Image from "next/image";

type ProtestPosterProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export function ProtestPoster({
  src,
  alt,
  width = 640,
  height = 640,
}: ProtestPosterProps) {
  return (
    <div className="my-14 flex justify-center sm:my-16">
      <div className="relative max-w-md overflow-hidden rounded-lg border-2 border-white/90 shadow-[0_0_40px_rgba(82,183,136,0.35)]">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full object-cover"
        />
      </div>
    </div>
  );
}
