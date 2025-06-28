import Image from "next/image";
import { ReactNode } from "react";

interface BackgroundPageProps {
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
}

export default function BackgroundPage({ imageSrc, imageAlt, children }: BackgroundPageProps) {
  return (
    <div className="h-screen relative">
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center h-screen text-white">
        {children}
      </div>
    </div>
  );
} 