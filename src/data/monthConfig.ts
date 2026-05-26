// Month configuration - maps month names to numbers for sorting
export const monthOrder: Record<string, number> = {
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

// Available months from the public/Instagramreport/bulanan folder
// Each entry has: month name for display, year, folder path, and number of images
export interface MonthConfig {
  monthName: string;
  year: number;
  folderPath: string;
  imagesCount: number;
}

// Configuration for all available months
// IMPORTANT: The folderPath must match the actual folder name exactly
// Update this array when new months are added
export const monthsConfig: MonthConfig[] = [
  {
    monthName: "Juli",
    year: 2025,
    folderPath: "/Instagramreport/bulanan/July-2025",
    imagesCount: 4,
  },
  {
    monthName: "Agustus",
    year: 2025,
    folderPath: "/Instagramreport/bulanan/Agustus-2025",
    imagesCount: 4,
  },
  {
    monthName: "September",
    year: 2025,
    folderPath: "/Instagramreport/bulanan/September-2025",
    imagesCount: 4,
  },
  {
    monthName: "Oktober",
    year: 2025,
    folderPath: "/Instagramreport/bulanan/Oktober-2025",
    imagesCount: 4,
  },
  {
    monthName: "November",
    year: 2025,
    folderPath: "/Instagramreport/bulanan/November-2025",
    imagesCount: 4,
  },
  {
    monthName: "Desember",
    year: 2025,
    folderPath: "/Instagramreport/bulanan/Desember-2025",
    imagesCount: 4,
  },
  {
    monthName: "Januari",
    year: 2026,
    folderPath: "/Instagramreport/bulanan/Januari-2026",
    imagesCount: 4,
  },
  {
    monthName: "Februari",
    year: 2026,
    folderPath: "/Instagramreport/bulanan/Februari-2026",
    imagesCount: 4,
  },
  {
    monthName: "Maret",
    year: 2026,
    folderPath: "/Instagramreport/bulanan/Maret-2026",
    imagesCount: 4,
  },
  {
    monthName: "April",
    year: 2026,
    folderPath: "/Instagramreport/bulanan/April-2026",
    imagesCount: 4,
  },
  {
    monthName: "Mei",
    year: 2026,
    folderPath: "/Instagramreport/bulanan/Mei-2026",
    imagesCount: 2,
  },
];

// Sort months chronologically (earliest first)
export function getSortedMonths(): MonthConfig[] {
  return [...monthsConfig].sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return monthOrder[a.monthName] - monthOrder[b.monthName];
  });
}

// Get image path for a specific month and index
export function getImagePath(folderPath: string, index: number): string {
  return `${folderPath}/${index}.jpg`;
}

// Get all image paths for a month
export function getMonthImages(folderPath: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => getImagePath(folderPath, i + 1));
}

// Stats data
export const statsData = {
  profileName: "@medkomunnes",
  period: "Juli 2025 - Mei 2026",
  initialFollowers: 1250,
  currentFollowers: 2847,
  growthPercentage: 127.8,
  totalPosts: 156,
  avgEngagementRate: 4.2,
};
