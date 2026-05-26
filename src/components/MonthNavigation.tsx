"use client";

import ChevronLeftIcon from "@/components/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import CalendarIcon from "@/components/icons/CalendarIcon";
import { MonthConfig } from "@/data/monthConfig";

interface MonthNavigationProps {
  months: MonthConfig[];
  activeMonthIndex: number;
  onMonthChange: (index: number) => void;
}

export default function MonthNavigation({
  months,
  activeMonthIndex,
  onMonthChange,
}: MonthNavigationProps) {
  const handlePrevious = () => {
    if (activeMonthIndex > 0) {
      onMonthChange(activeMonthIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeMonthIndex < months.length - 1) {
      onMonthChange(activeMonthIndex + 1);
    }
  };

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-red-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrevious}
            disabled={activeMonthIndex === 0}
            className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
              activeMonthIndex === 0
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-red-50 text-red-600 hover:bg-red-100 hover:scale-110 active:scale-95"
            }`}
            aria-label="Bulan sebelumnya"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          {/* Month Pills Container with HCI scroll indicators (fade masks) */}
          <div 
            className="flex-1 relative overflow-hidden" 
            style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)' }}
          >
            <div className="flex items-center sm:justify-center gap-2 overflow-x-auto scrollbar-hide py-2 px-2 sm:px-4">
              {months.map((month, index) => (
              <button
                type="button"
                key={`${month.monthName}-${month.year}`}
                onClick={() => onMonthChange(index)}
                className={`relative shrink-0 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ease-out ${
                  activeMonthIndex === index
                    ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-200 scale-105"
                    : "bg-red-50 text-red-700 hover:bg-red-100 hover:scale-102"
                }`}
              >
                <span className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  {month.monthName} {month.year}
                </span>

                {/* Active indicator dot */}
                {activeMonthIndex === index && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                )}
              </button>
            ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={handleNext}
            disabled={activeMonthIndex === months.length - 1}
            className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
              activeMonthIndex === months.length - 1
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-red-50 text-red-600 hover:bg-red-100 hover:scale-110 active:scale-95"
            }`}
            aria-label="Bulan berikutnya"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Current Month Label */}
        <div className="mt-3 text-center">
          <p className="text-sm text-gray-500">
            Menampilkan:{" "}
            <span className="font-semibold text-red-600">
              {months[activeMonthIndex]?.monthName} {months[activeMonthIndex]?.year}
            </span>
          </p>
        </div>
      </div>
    </nav>
  );
}