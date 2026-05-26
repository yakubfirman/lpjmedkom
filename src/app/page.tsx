"use client";

import Link from "next/link";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="text-center mb-16 fade-in-up-animation">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white shadow-md rounded-sm mb-6">
            <svg className="w-8 h-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Portal Laporan Medkom
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Pilih platform untuk melihat laporan dokumentasi bulanan yang disusun oleh Bidang Medkom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl fade-in-up-animation" style={{ animationDelay: "100ms" }}>
          {/* Instagram Card */}
          <Link href="/instagram" className="group outline-none">
            <div className="bg-white rounded-sm p-8 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-100/50 group-hover:-translate-y-1 group-focus-visible:ring-2 ring-red-500 text-center h-full flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-sm flex items-center justify-center shadow-md shadow-red-200/50 mb-6 group-hover:scale-105 transition-transform duration-300">
                <InstagramIcon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Laporan Instagram</h2>
              <p className="text-gray-500 leading-relaxed">
                Lihat statistik pertumbuhan followers, total tayangan, engagement, dan performa konten Instagram.
              </p>
              
              <div className="mt-6 flex items-center text-red-600 font-semibold group-hover:gap-2 transition-all">
                <span>Lihat Laporan</span>
                <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>

          {/* Website Card */}
          <Link href="/website" className="group outline-none">
            <div className="bg-white rounded-sm p-8 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-red-100/50 group-hover:-translate-y-1 group-focus-visible:ring-2 ring-red-500 text-center h-full flex flex-col items-center justify-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-sm flex items-center justify-center shadow-md shadow-red-200/50 mb-6 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Laporan Website</h2>
              <p className="text-gray-500 leading-relaxed">
                Pantau trafik kunjungan, total tayangan halaman, dan durasi sesi pengguna di portal website.
              </p>

              <div className="mt-6 flex items-center text-red-600 font-semibold group-hover:gap-2 transition-all">
                <span>Lihat Laporan</span>
                <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="py-12 text-center px-4 mt-auto">
        <p className="text-sm font-semibold text-gray-600 tracking-wide uppercase">
          Dibuat Oleh Bidang Media dan Komunikasi
        </p>
        <p className="text-xs text-gray-400 mt-1.5 font-medium">
          PC IMM Kota Surakarta &copy; 2024/2025
        </p>
      </footer>
      
      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-up-animation {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}