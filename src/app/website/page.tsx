"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getSortedWebsiteMonths, getWebsiteMonthImages, websiteStatsData, WebsiteMonthConfig, getWebsiteImageTypeLabel } from "@/data/websiteConfig";
import HeroSectionWebsite from "@/components/HeroSectionWebsite";
import MonthNavigation from "@/components/MonthNavigation";
import ImageCard from "@/components/ImageCard";
import ChevronLeftIcon from "@/components/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";

export default function WebsiteReport() {
  const [activeMonthIndex, setActiveMonthIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // HCI: Handle Escape key & body scroll when modal is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImageIndex !== null) {
        setSelectedImageIndex(null);
      }
    };
    
    if (selectedImageIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImageIndex]);

  const sortedMonths = getSortedWebsiteMonths();
  const activeMonth: WebsiteMonthConfig = sortedMonths[activeMonthIndex];
  
  // Return early if no months configured
  if (!activeMonth) {
    return <div className="p-8 text-center text-gray-500">Belum ada data laporan website.</div>;
  }
  
  const monthImages = getWebsiteMonthImages(activeMonth.folderPath, activeMonth.imagesCount);

  // Navigation handlers
  const handlePrevious = () => {
    if (activeMonthIndex > 0) {
      setActiveMonthIndex(activeMonthIndex - 1);
      setSelectedImageIndex(null);
    }
  };

  const handleNext = () => {
    if (activeMonthIndex < sortedMonths.length - 1) {
      setActiveMonthIndex(activeMonthIndex + 1);
      setSelectedImageIndex(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <HeroSectionWebsite />

      {/* Month Navigation */}
      {/* Note: We reuse MonthNavigation, it expects 'months' prop with 'monthName' and 'year' which WebsiteMonthConfig has */}
      <MonthNavigation
        months={sortedMonths}
        activeMonthIndex={activeMonthIndex}
        onMonthChange={(index) => {
          setActiveMonthIndex(index);
          setSelectedImageIndex(null);
        }}
      />

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-b from-white to-blue-50/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          {/* Month Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Laporan Website {activeMonth.monthName} {activeMonth.year}
            </h2>
            <p className="text-gray-500 text-sm">
              {activeMonth.imagesCount} screenshot dokumentasi performa Website
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between mb-6">
            <button
              type="button"
              onClick={handlePrevious}
              disabled={activeMonthIndex === 0}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
                activeMonthIndex === 0
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-blue-50 text-blue-600 hover:bg-blue-100 hover:scale-105 active:scale-95 shadow-sm"
              }`}
              aria-label="Bulan sebelumnya"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            {/* Month Pills */}
            <div className="flex gap-2 overflow-x-auto max-w-md scrollbar-hide px-2">
              {sortedMonths.map((month, index) => (
                <button
                  type="button"
                  key={`${month.monthName}-${month.year}`}
                  onClick={() => {
                    setActiveMonthIndex(index);
                    setSelectedImageIndex(null);
                  }}
                  className={`shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    activeMonthIndex === index
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white text-gray-600 hover:bg-blue-50 border border-gray-200"
                  }`}
                >
                  {month.monthName}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              disabled={activeMonthIndex === sortedMonths.length - 1}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
                activeMonthIndex === sortedMonths.length - 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-blue-50 text-blue-600 hover:bg-blue-100 hover:scale-105 active:scale-95 shadow-sm"
              }`}
              aria-label="Bulan berikutnya"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Image Grid - 2 columns optimized for 1:1 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {monthImages.map((imagePath, index) => (
              <ImageCard
                key={`${activeMonth.monthName}-${activeMonth.year}-${index}`}
                imagePath={imagePath}
                imageIndex={index + 1}
                imageType={getWebsiteImageTypeLabel(index + 1, activeMonth.monthName)}
                totalImages={activeMonth.imagesCount}
                caption={`Laporan perkembangan Website ${activeMonth.monthName} ${activeMonth.year} - ${getWebsiteImageTypeLabel(index + 1, activeMonth.monthName)}`}
                onImageClick={() => setSelectedImageIndex(index)}
              />
            ))}
          </div>

          {/* Month Summary Card */}
          <div className="mt-10 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-6 text-white">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold mb-1">
                  Ringkasan {activeMonth.monthName} {activeMonth.year}
                </h3>
                <p className="text-blue-100 text-sm">
                  {activeMonth.imagesCount} bagian dokumentasi laporan Website
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {Array.from({ length: Math.min(activeMonth.imagesCount, 4) }, (_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center"
                    >
                      <span className="text-white text-xs font-bold">{i + 1}</span>
                    </div>
                  ))}
                </div>
                <div className="text-right">
                  <p className="text-xs text-blue-200">Total</p>
                  <p className="text-lg font-bold">{activeMonth.imagesCount} Bagian</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
      
      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <button 
              type="button"
              className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              onClick={() => setSelectedImageIndex(null)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full h-[85vh]">
              <Image
                src={monthImages[selectedImageIndex]}
                alt="Enlarged Image"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
