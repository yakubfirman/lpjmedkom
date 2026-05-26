"use client";

import { websitesList } from "@/data/websiteConfig";
import HeroSectionWebsite from "@/components/HeroSectionWebsite";
import WebsiteCard from "@/components/WebsiteCard";

export default function WebsiteReport() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <HeroSectionWebsite />

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-b from-white to-blue-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Jelajahi Portal Kami
            </h2>
            <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto" />
          </div>

          {/* Website Grid - 3 columns on large desktop, 2 on tablet, 1 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {websitesList.map((website, index) => (
              <div 
                key={website.url} 
                className="fade-in-up-animation h-full" 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <WebsiteCard website={website} />
              </div>
            ))}
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

        .fade-in-up-animation {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
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
