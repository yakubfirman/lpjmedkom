"use client";

import { useState } from "react";
import Image from "next/image";
import CalendarIcon from "@/components/icons/CalendarIcon";
import ZoomInIcon from "@/components/icons/ZoomInIcon";

interface ImageCardProps {
  imagePath: string;
  weekNumber: number;
  totalWeeks: number;
  date: string;
  caption?: string;
}

export default function ImageCard({
  imagePath,
  weekNumber,
  totalWeeks,
  date,
  caption,
}: ImageCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-red-100 transition-all duration-500 hover:shadow-xl hover:shadow-red-100/50 hover:-translate-y-1"
      style={{
        animationDelay: `${weekNumber * 100 - 100}ms`,
        animation: "fadeInUp 0.5s ease-out forwards",
        opacity: 0,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-red-50">
        {/* Loading Skeleton */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-red-50 to-white animate-pulse" />
        )}

        {/* Error State */}
        {hasError && (
          <div className="absolute inset-0 bg-red-50 flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-3">
              <svg
                className="w-8 h-8 text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-sm text-red-400">Gambar tidak tersedia</p>
          </div>
        )}

        {/* Actual Image */}
        {!hasError && (
          <Image
            src={imagePath}
            alt={`Screenshot minggu ke-${weekNumber}`}
            fill
            className={`object-cover transition-all duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } ${isHovered ? "scale-105" : "scale-100"}`}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}

        {/* Week Badge */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-lg border border-red-100">
          <span className="text-xs font-semibold text-red-600">
            Minggu {weekNumber}
          </span>
        </div>

        {/* Hover Overlay with Zoom Icon */}
        <div
          className={`absolute inset-0 bg-black/0 group-hover:bg-black/20 flex items-center justify-center transition-all duration-300 ${
            isHovered && !hasError ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <ZoomInIcon className="w-7 h-7 text-red-600" />
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5">
        {/* Date Badge */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">
            <CalendarIcon className="w-4 h-4 text-red-500" />
          </div>
          <span className="text-sm font-medium text-red-600">{date}</span>
        </div>

        {/* Caption */}
        {caption && (
          <h3 className="font-semibold text-gray-800 group-hover:text-red-700 transition-colors duration-200 line-clamp-2">
            {caption}
          </h3>
        )}

        {/* Week Indicator */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-400">Minggu</span>
            <span className="text-sm font-bold text-red-500">{weekNumber}</span>
            <span className="text-xs text-gray-400">dari {totalWeeks}</span>
          </div>

          {/* Progress Bar */}
          <div className="flex gap-1">
            {Array.from({ length: totalWeeks }, (_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i < weekNumber ? "w-4 bg-red-500" : "w-1.5 bg-red-100"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div
        className={`absolute inset-0 rounded-2xl border-2 border-red-300 pointer-events-none transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
