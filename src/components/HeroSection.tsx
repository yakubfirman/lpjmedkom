import TrendingUpIcon from "@/components/icons/TrendingUpIcon";
import { statsData } from "@/data/monthConfig";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-red-700">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-300 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-5 grid-pattern" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        {/* Header Content */}
        <div className="text-center mb-12">
          {/* Instagram Icon Badge */}
          <div className="flex justify-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-sm mb-6 animate-pulse">
            <svg
              className="w-9 h-9 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Laporan Perkembangan Instagram
          </h1>

          <p className="text-lg sm:text-xl text-red-100 max-w-2xl mx-auto">
            Juli 2025 - {new Date().getDate()} {["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"][new Date().getMonth()]} {new Date().getFullYear()}
          </p>

          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
            <span className="text-white/80 text-sm">Profil:</span>
            <span className="text-white font-semibold">{statsData.profileName}</span>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-12 max-w-2xl mx-auto">
          {/* Followers Card */}
          <div className="bg-white/15 backdrop-blur-md rounded-sm p-5 sm:p-6 transition-all duration-300 hover:bg-white/25 hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-sm flex items-center justify-center">
                <TrendingUpIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-red-100 text-sm font-medium">Followers</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-white" suppressHydrationWarning>
              +{(statsData.currentFollowers - statsData.initialFollowers).toLocaleString('id-ID')}
            </p>
            <p className="text-red-200 text-xs mt-1" suppressHydrationWarning>
              Juli 2025 - {new Date().getDate()} {["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"][new Date().getMonth()]} {new Date().getFullYear()}
            </p>
          </div>
          {/* Posts Card */}
          <div className="bg-white/15 backdrop-blur-md rounded-sm p-5 sm:p-6 transition-all duration-300 hover:bg-white/25 hover:scale-105">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-white/20 rounded-sm flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
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
              <span className="text-red-100 text-sm font-medium">Total Post</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-white">
              +{statsData.totalPosts - statsData.initialPosts}
            </p>
            <p className="text-red-200 text-xs mt-1">
              Juli 2025 - {new Date().getDate()} {["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agt", "Sep", "Okt", "Nov", "Des"][new Date().getMonth()]} {new Date().getFullYear()}
            </p>
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