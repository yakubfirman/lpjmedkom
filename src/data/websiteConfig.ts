// Month configuration - maps month names to numbers for sorting
const monthOrder: Record<string, number> = {
  Januari: 1,
  Februari: 2,
  Maret: 3,
  April: 4,
  Mei: 5,
  Juni: 6,
  Juli: 7,
  July: 7,
  Agustus: 8,
  September: 9,
  Oktober: 10,
  November: 11,
  Desember: 12,
};

export interface WebsiteMonthConfig {
  monthName: string;
  year: number;
  folderPath: string;
  imagesCount: number;
}

// Dummy configuration for website months
export const websiteMonthsConfig: WebsiteMonthConfig[] = [
  {
    monthName: "Juli",
    year: 2025,
    folderPath: "/Websitereport/bulanan/July-2025",
    imagesCount: 4,
  },
  {
    monthName: "Agustus",
    year: 2025,
    folderPath: "/Websitereport/bulanan/Agustus-2025",
    imagesCount: 4,
  }
];

export function getSortedWebsiteMonths(): WebsiteMonthConfig[] {
  return [...websiteMonthsConfig].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return monthOrder[a.monthName] - monthOrder[b.monthName];
  });
}

export function getWebsiteImagePath(folderPath: string, index: number): string {
  return `${folderPath}/${index}.jpg`;
}

export function getWebsiteMonthImages(folderPath: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => getWebsiteImagePath(folderPath, i + 1));
}

// Dummy labels for website images
export const websiteImageTypeLabels = [
  "Pengunjung Harian",          // 1.jpg
  "Total Tayangan Halaman",     // 2.jpg
  "Durasi Sesi Rata-rata",      // 3.jpg
  "Sumber Trafik"               // 4.jpg
];

export function getWebsiteImageTypeLabel(index: number, monthName?: string): string {
  return websiteImageTypeLabels[index - 1] || `Bagian ${index}`;
}

export const websiteStatsData = {
  profileName: "Portal Medkom Unnes",
  period: "Juli 2025 - Agustus 2025",
  initialVisitors: 500,
  currentVisitors: 1240,
  growthPercentage: 148,
  totalViews: 3500,
  avgSessionDuration: "2m 15s",
};
