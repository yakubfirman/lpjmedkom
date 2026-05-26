import TrendingUpIcon from "@/components/icons/TrendingUpIcon";
import { websiteStatsData } from "@/data/websiteConfig";

export default function HeroSectionWebsite() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5 grid-pattern" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Header Content */}
        <div className="text-center mb-12">
          {/* Website Icon Badge */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 animate-pulse">
            <svg
              className="w-9 h-9 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Laporan Perkembangan Website
          </h1>

          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
            {websiteStatsData.period}
          </p>

          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
            <span className="text-white/80 text-sm">Website:</span>
            <span className="text-white font-semibold">{websiteStatsData.profileName}</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12">
          {/* Visitors Card */}
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/20 transition-all duration-300 hover:bg-white/25 hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <TrendingUpIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-blue-100 text-sm font-medium">Pengunjung</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-white" suppressHydrationWarning>
              {websiteStatsData.currentVisitors.toLocaleString('id-ID')}
            </p>
            <p className="text-blue-200 text-xs mt-1" suppressHydrationWarning>
              Dari {websiteStatsData.initialVisitors.toLocaleString('id-ID')}
            </p>
          </div>

          {/* Growth Card */}
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/20 transition-all duration-300 hover:bg-white/25 hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-green-500/30 rounded-xl flex items-center justify-center">
                <TrendingUpIcon className="w-5 h-5 text-green-300" />
              </div>
              <span className="text-blue-100 text-sm font-medium">Pertumbuhan</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-white">
              +{websiteStatsData.growthPercentage}%
            </p>
            <p className="text-blue-200 text-xs mt-1">Total periode</p>
          </div>

          {/* Pageviews Card */}
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/20 transition-all duration-300 hover:bg-white/25 hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <span className="text-blue-100 text-sm font-medium">Tayangan</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-white" suppressHydrationWarning>
              {websiteStatsData.totalViews.toLocaleString('id-ID')}
            </p>
            <p className="text-blue-200 text-xs mt-1">Total Halaman</p>
          </div>

          {/* Session Duration Card */}
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/20 transition-all duration-300 hover:bg-white/25 hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-blue-100 text-sm font-medium">Durasi Sesi</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-white">
              {websiteStatsData.avgSessionDuration}
            </p>
            <p className="text-blue-200 text-xs mt-1">Rata-rata per sesi</p>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 50L48 45C96 40 192 30 288 35C384 40 480 60 576 65C672 70 768 60 864 50C960 40 1056 30 1152 35C1248 40 1344 60 1392 70L1440 80V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
