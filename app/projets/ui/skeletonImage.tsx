'use client'
import Image from 'next/image';
import { useState } from 'react';

interface SkeletonImageProps {
  src: string;
  alt: string;
}

export function SkeletonImage({ src, alt }: SkeletonImageProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-full h-full">
      {loading && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse rounded-lg"></div>
      )}
      <Image
        src={src}
        alt={alt}
        width={600}
        height={400}
        className={`transform transition duration-300 ease-in-out hover:scale-110 object-cover ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}