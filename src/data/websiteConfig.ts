export interface WebsiteConfig {
  title: string;
  url: string;
  imagePath: string;
  description: string;
}

export const websitesList: WebsiteConfig[] = [
  {
    title: "IMM Solo Utama",
    url: "https://immsolo.or.id",
    imagePath: "/websiteimmsolo/immsolo.or.id.png",
    description: "Portal utama Pimpinan Cabang Ikatan Mahasiswa Muhammadiyah Kota Surakarta.",
  },
  {
    title: "Maroon Vote",
    url: "https://maroonvote.immsolo.or.id",
    imagePath: "/websiteimmsolo/maroonvote.immsolo.or.id.png",
    description: "Sistem Pemilihan Elektronik (E-Voting) IMM Solo.",
  },
  {
    title: "Perkaderan IMM Solo",
    url: "https://perkaderan.immsolo.or.id",
    imagePath: "/websiteimmsolo/perkaderan.immsolo.or.id.png",
    description: "Sistem Informasi dan Manajemen Perkaderan IMM Kota Surakarta.",
  }
];

export const websitePageConfig = {
  title: "Daftar Website IMM Solo",
  description: "Kumpulan portal dan sistem informasi yang dikelola oleh PC IMM Kota Surakarta.",
};
