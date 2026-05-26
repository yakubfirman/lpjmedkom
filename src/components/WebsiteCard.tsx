"use client";

import Image from "next/image";
import { useState } from "react";
import { WebsiteConfig } from "@/data/websiteConfig";

interface WebsiteCardProps {
  website: WebsiteConfig;
}

export default function WebsiteCard({ website }: WebsiteCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <a
      href={website.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-blue-100 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/40 fade-in-up-animation flex flex-col h-full block"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-video bg-gray-100 overflow-hidden block border-b border-gray-100">
        {/* Loading Skeleton */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-50 to-blue-100 animate-pulse flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin" />
          </div>
        )}

        {/* Error State */}
        {hasError && (
          <div className="absolute inset-0 z-10 bg-blue-50 flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
              <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <p className="text-sm text-blue-400 font-medium">Gambar tidak tersedia</p>
          </div>
        )}

        {/* Actual Image */}
        {!hasError && (
          <Image
            src={website.imagePath}
            alt={website.title}
            fill
            className={`object-cover object-top transition-all duration-700 ease-out group-hover:scale-105 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <div className="bg-white text-blue-600 px-5 py-2.5 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl pointer-events-auto">
            Kunjungi Website
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col bg-white">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {website.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-2">
          {website.description}
        </p>
        <div className="flex items-center text-sm font-medium text-blue-500">
          <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          {website.url.replace(/^https?:\/\//, '')}
        </div>
      </div>
    </a>
  );
}
