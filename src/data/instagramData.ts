export interface MonthImage {
  url: string;
  caption: string;
  date: string;
}

export interface MonthData {
  month: string;
  year: number;
  images: MonthImage[];
}

export interface InstagramReport {
  profileName: string;
  period: string;
  months: MonthData[];
}

export const instagramData: InstagramReport = {
  profileName: "@medkomunnes",
  period: "Januari - April 2026",
  months: [
    {
      month: "Januari",
      year: 2026,
      images: [
        {
          url: "/images/jan-1.jpg",
          caption: "Postingan pertama bulan Januari - Overview akun",
          date: "5 Januari 2026",
        },
        {
          url: "/images/jan-2.jpg",
          caption: "Statistik engagement minggu kedua",
          date: "12 Januari 2026",
        },
        {
          url: "/images/jan-3.jpg",
          caption: "Pertumbuhan followers mingguan",
          date: "19 Januari 2026",
        },
        {
          url: "/images/jan-4.jpg",
          caption: "Akhir bulan Januari - Laporan bulanan",
          date: "26 Januari 2026",
        },
      ],
    },
    {
      month: "Februari",
      year: 2026,
      images: [
        {
          url: "/images/feb-1.jpg",
          caption: "Minggu pertama Februari - Konten baru",
          date: "2 Februari 2026",
        },
        {
          url: "/images/feb-2.jpg",
          caption: "Peningkatan reach organik",
          date: "9 Februari 2026",
        },
        {
          url: "/images/feb-3.jpg",
          caption: "Analisis content performance",
          date: "16 Februari 2026",
        },
        {
          url: "/images/feb-4.jpg",
          caption: "Akhir Februari - Growth summary",
          date: "23 Februari 2026",
        },
      ],
    },
    {
      month: "Maret",
      year: 2026,
      images: [
        {
          url: "/images/mar-1.jpg",
          caption: "Awal Maret - New content strategy",
          date: "2 Maret 2026",
        },
        {
          url: "/images/mar-2.jpg",
          caption: "Weekly insight report",
          date: "9 Maret 2026",
        },
        {
          url: "/images/mar-3.jpg",
          caption: "Mid-month performance review",
          date: "16 Maret 2026",
        },
        {
          url: "/images/mar-4.jpg",
          caption: "Akhir Maret - Monthly recap",
          date: "23 Maret 2026",
        },
      ],
    },
    {
      month: "April",
      year: 2026,
      images: [
        {
          url: "/images/apr-1.jpg",
          caption: "April week 1 - Spring campaign",
          date: "1 April 2026",
        },
        {
          url: "/images/apr-2.jpg",
          caption: "Engagement metrics week 2",
          date: "8 April 2026",
        },
        {
          url: "/images/apr-3.jpg",
          caption: "Follower growth analysis",
          date: "15 April 2026",
        },
        {
          url: "/images/apr-4.jpg",
          caption: "April closing - Q1 summary",
          date: "22 April 2026",
        },
      ],
    },
  ],
};

export const stats = {
  initialFollowers: 1250,
  currentFollowers: 2847,

};
