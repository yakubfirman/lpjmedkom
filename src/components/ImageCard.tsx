"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface ImageCardProps {
  imagePath: string;
  imageIndex: number;      // 1, 2, 3, 4 (for progress dots)
  imageType: string;        // Label like "Aktivitas Instagram", "Jumlah Postingan", etc.
  totalImages: number;
  caption?: string;
  onImageClick?: () => void;
}

export default function ImageCard({
  imagePath,
  imageIndex,
  imageType,
  totalImages,
  caption,
  onImageClick,
}: ImageCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty("--animation-delay", `${imageIndex * 100 - 100}ms`);
    }
  }, [imageIndex]);

  return (
    <div 
      ref={containerRef}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-red-100 transition-all duration-300 hover:shadow-lg hover:shadow-red-100/30 fade-in-up-animation"
    >
      {/* Image Container - Full width, height based on content */}
      <div className="relative w-full bg-gray-100 cursor-pointer min-h-image-container group/img block" onClick={onImageClick}>
        {/* Loading Skeleton */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-red-50 to-red-100 animate-pulse flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-red-200 border-t-red-500 rounded-full animate-spin" />
          </div>
        )}

        {/* Error State */}
        {hasError && (
          <div className="absolute inset-0 z-10 bg-red-50 flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-3">
              <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-sm text-red-400 font-medium">Gambar tidak tersedia</p>
            <p className="text-xs text-red-300 mt-1">{imagePath}</p>
          </div>
        )}

        {/* Actual Image - Using aspect-square 1:1 sizing */}
        {!hasError && (
          <div className="relative w-full aspect-square block bg-gray-100">
            <Image
              src={imagePath}
              alt={imageType}
              fill
              className={`object-cover transition-all duration-700 ease-out group-hover/img:scale-105 ${
                isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 70vw"
            />
            {/* Tombol Perbesar Gambar Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
              <div className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover/img:translate-y-0 transition-all duration-300 pointer-events-auto">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
                Perbesar
              </div>
            </div>
          </div>
        )}

        {/* Image Type Badge Overlay */}
        {isLoaded && (
          <div className="absolute top-3 left-3 bg-red-600/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-md">
            <span className="text-xs font-semibold text-white">
              {imageType}
            </span>
          </div>
        )}
      </div>

      {/* Card Info Section */}
      <div className="p-4 bg-white">
        {/* Image Type and Counter */}
        <div className="flex items-center justify-end">
          <span className="text-xs text-gray-400">
            {imageIndex} / {totalImages}
          </span>
        </div>

        {/* Image Type Label */}
        <div className="mt-3">
          <h3 className="font-semibold text-gray-800">
            {imageType}
          </h3>
        </div>

        {/* Caption */}
        {caption && (
          <p className="mt-2 text-sm text-gray-500 line-clamp-2">
            {caption}
          </p>
        )}

        {/* Progress Dots */}
        <div className="mt-4 flex items-center gap-1.5">
          {Array.from({ length: totalImages }, (_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i + 1 === imageIndex
                  ? "w-6 bg-red-500"
                  : i + 1 < imageIndex
                  ? "w-2 bg-red-300"
                  : "w-2 bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}