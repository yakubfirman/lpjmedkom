"use client";

import { useState } from "react";
import { getSortedMonths, getMonthImages, statsData, MonthConfig } from "@/data/monthConfig";
import HeroSection from "@/components/HeroSection";
import MonthNavigation from "@/components/MonthNavigation";
import ImageCard from "@/components/ImageCard";
import InstagramIcon from "@/components/icons/InstagramIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import FacebookIcon from "@/components/icons/FacebookIcon";
import HeartIcon from "@/components/icons/HeartIcon";

export default function Home() {
  const [activeMonthIndex, setActiveMonthIndex] = useState(0);
  const sortedMonths = getSortedMonths();
  const activeMonth: MonthConfig = sortedMonths[activeMonthIndex];
  const monthImages = getMonthImages(activeMonth.folderPath, activeMonth.imagesCount);

  // Generate dates for each week (assuming 4 weeks per month or actual count)
  const getWeekDates = (monthName: string, year: number, weekIndex: number, totalWeeks: number): string => {
    const monthNames = [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    const monthIndex = monthNames.indexOf(monthName);
    // Estimate week 1, 2, 3, 4 dates based on month
    const weekStartDays = [5, 12, 19, 26];
    const day = weekStartDays[weekIndex] || 20;
    return `${day} ${monthNames[monthIndex]} ${year}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Month Navigation */}
      <MonthNavigation
        months={sortedMonths}
        activeMonthIndex={activeMonthIndex}
        onMonthChange={setActiveMonthIndex}
      />

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-b from-white to-red-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              Screenshot Perkembangan
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Dokumentasi visual pertumbuhan akun Instagram dari minggu ke minggu
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {monthImages.map((imagePath, index) => (
              <ImageCard
                key={`${activeMonth.monthName}-${activeMonth.year}-${index}`}
                imagePath={imagePath}
                weekNumber={index + 1}
                totalWeeks={activeMonth.imagesCount}
                date={getWeekDates(activeMonth.monthName, activeMonth.year, index, activeMonth.imagesCount)}
                caption={`Screenshot minggu ke-${index + 1} - ${activeMonth.monthName} ${activeMonth.year}`}
              />
            ))}
          </div>

          {/* Month Summary */}
          <div className="mt-12 bg-gradient-to-r from-red-50 to-white rounded-2xl p-6 sm:p-8 border border-red-100">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Ringkasan {activeMonth.monthName} {activeMonth.year}
                </h3>
                <p className="text-gray-500 text-sm">
                  {activeMonth.imagesCount} screenshot dokumentasi perkembangan Instagram bulan ini
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {Array.from({ length: Math.min(activeMonth.imagesCount, 4) }, (_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-red-400 to-red-600 border-2 border-white flex items-center justify-center"
                    >
                      <span className="text-white text-xs font-bold">{i + 1}</span>
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-500">{activeMonth.imagesCount} minggu</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-red-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Logo & Info */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-200">
                <InstagramIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Laporan Perkembangan Instagram</h4>
                <p className="text-sm text-gray-500">{statsData.profileName}</p>
              </div>
            </div>

            {/* Social Share */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500 mr-2">Share:</span>
              <button type="button" aria-label="Share ke Instagram" className="w-10 h-10 rounded-xl bg-red-50 hover:bg-red-100 flex items-center justify-center transition-colors group">
                <InstagramIcon className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
              </button>
              <button type="button" aria-label="Share ke Twitter" className="w-10 h-10 rounded-xl bg-red-50 hover:bg-red-100 flex items-center justify-center transition-colors group">
                <TwitterIcon className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
              </button>
              <button type="button" aria-label="Share ke Facebook" className="w-10 h-10 rounded-xl bg-red-50 hover:bg-red-100 flex items-center justify-center transition-colors group">
                <FacebookIcon className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-red-50 text-center">
            <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
              Made with <HeartIcon className="w-4 h-4 text-red-400" /> for Instagram Analytics
            </p>
          </div>
        </div>
      </footer>

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
    </div>
  );
}