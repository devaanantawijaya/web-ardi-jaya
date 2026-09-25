export const COMPANY_INFO = {
  name: "Ardi Jaya",
  tagline: "Building Material Equipment & Construction",
  phone: "6281234567890",
  phoneDisplay: "+62 812-3456-7890",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890",
  email: "kontraktor@ardijaya.co.id",
  address: "Desa Baluk, Kec. Negara, Kab. Jembrana",
  city: "Jembrana, Bali, Indonesia",
  operatingHours: "Senin - Sabtu: 08:00 - 18:00 WITA (Konsultasi WA 24 Jam)",
  licenseNumber: "NIB: 9120204910294 | SKA Konstruksi No. 1.2.201.2.091.29",
  yearsExperience: 15,
  completedProjects: 285,
  heavyEquipmentUnits: 48,
  satisfactionRate: 99,
};

export const PROJECTS_DATA = [
  {
    id: "proj-1",
    slug: "villa-tropis-canggu",
    title: "Villa Mewah Modern Tropis Canggu",
    category: "Residensial",
    tagline:
      "Desain arsitektur tropis kontemporer dengan infinity pool dan material kayu ulin solid",
    description:
      "Pembangunan villa mewah 2 lantai dari nol mencakup struktur beton bertulang khusus, instalasi mechanical-electrical cerdas (Smart Home), dan finishing interior marmer alam serta decking kayu ulin bersertifikasi.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    ],
    location: "Canggu, Bali",
    year: "2024",
    duration: "8 Bulan (Tepat Waktu)",
    projectValue: "Rp 4.5 Miliar",
    client: "PT Bali Paradise Estate / Private Owner",
    scope: [
      "Struktur Sipil & Pondasi Footplate Anti-Gempa",
      "Pekerjaan Arsitektur & Fasad Batu Alam Paras Bali",
      "Mechanical, Electrical & Plumbing (MEP) Full System",
      "Konstruksi Infinity Pool & Water Feature Landscape",
      "Penyediaan Material Semen & Baja Berkualitas SNI Sendiri",
    ],
    specifications: [
      { label: "Luas Lahan", value: "650 m²" },
      { label: "Luas Bangunan", value: "480 m²" },
      { label: "Jumlah Lantai", value: "2 Lantai + Rooftop Lounge" },
      { label: "Tipe Struktur", value: "Beton Bertulang K-300 & Baja Ringan" },
      { label: "Garansi", value: "10 Tahun Struktur Resmi" },
    ],
    challenge:
      "Kondisi tanah berkontur dengan daya resap tinggi serta persyaratan arsitektur terbuka yang membutuhkan bentang balok lebar tanpa tiang penyangga di area ruang keluarga.",
    solution:
      "Ardi Jaya menerapkan rekayasa balok prategang (post-tensioned beam) dengan semen mutu tinggi dan pengujian beton laboratorium independen, memastikan kekuatan struktur tanpa mengorbankan estetika.",
    featured: true,
  },

  {
    id: "proj-2",
    slug: "pergudangan-logistik-modern",
    title: "Hub Pergudangan Logistik & Distribusi",
    category: "Baja & Industri",
    tagline:
      "Konstruksi gudang modern struktur baja WF bentang 36 meter tanpa kolom tengah",
    description:
      "Proyek pembangunan komplek pergudangan logistik seluas 4.200 m² dilengkapi lantai heavy-duty floor hardener kapasitas beban 10 ton/m² dan sistem loading dock hidrolik.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    ],
    location: "Cikarang, Jawa Barat",
    year: "2024",
    duration: "6 Bulan",
    projectValue: "Rp 14.2 Miliar",
    client: "PT Multi Trans Nusantara",
    scope: [
      "Ereksi Rangka Baja WF 400 & Kolom Baja Heavy Duty",
      "Pengecoran Rigid Lantai Beton K-350 dengan Wiremesh M8",
      "Finishing Epoxy & Floor Hardener Beban Berat",
      "Atap Galvalum Insulasi Thermal & Skylight Polycarbonate",
      "Dukungan Mobile Crane 25 Ton & Excavator Ardi Jaya",
    ],
    specifications: [
      { label: "Luas Lahan", value: "7.500 m²" },
      { label: "Luas Gudang", value: "4.200 m²" },
      { label: "Bentang Bebas", value: "36 Meter Tanpa Kolom Tengah" },
      { label: "Kapasitas Lantai", value: "10 Ton / m²" },
      { label: "Fasilitas", value: "4 Loading Docks + Ruang Kontrol" },
    ],
    challenge:
      "Target operasional klien yang sangat ketat menjelang kuartal akhir serta kebutuhan lantai presisi tinggi bebas retak susut untuk lalu lintas forklift elektrik.",
    solution:
      "Pengerjaan 2 shift terpadu dengan armada crane dan laser-screed concrete milik sendiri, memangkas durasi pengecoran hingga 25% lebih cepat dengan kerataan lantai bertaraf FM2.",
    featured: true,
  },

  {
    id: "proj-3",
    slug: "residence-klasik-kontemporer",
    title: "Hunian Eksekutif 2 Lantai Bukit Golf",
    category: "Residensial",
    tagline:
      "Pembangunan rumah tinggal bergaya modern kontemporer dengan efisiensi sirkulasi udara alami",
    description:
      "Pembangunan rumah tinggal privat dengan fasad kaca double-glazed, void tinggi 7 meter, master suite dengan walk-in closet, dan garasi basement kapasitas 4 mobil.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
    location: "Serpong, Tangerang Selatan",
    year: "2023",
    duration: "7 Bulan",
    projectValue: "Rp 3.2 Miliar",
    client: "Keluarga Bpk. Hendra S.",
    scope: [
      "Galian & Konstruksi Dinding Penahan Tanah (Retaining Wall)",
      "Struktur Beton K-275 & Pembesian SNI Ulir",
      "Fasad Aluminium Composite Panel (ACP) & Kusen Aluminium YKK",
      "Instalasi Solar Panel Rooftop & Smart Lighting",
    ],
    specifications: [
      { label: "Luas Tanah", value: "380 m²" },
      { label: "Luas Bangunan", value: "420 m²" },
      { label: "Kamar Tidur", value: "5 + 2 Kamar Pembantu" },
      { label: "Garasi", value: "4 Mobil (Basement)" },
    ],
    challenge:
      "Akses jalan perumahan yang terbatas untuk truk mixer dan material berat.",
    solution:
      "Ardi Jaya mengerahkan armada truk ready-mix mini (molen kecil) dan manajemen pengiriman material terjadwal di jam khusus sehingga tidak mengganggu ketertiban warga sekitar.",
    featured: true,
  },
  {
    id: "proj-4",
    slug: "ruko-komersial-arjuna",
    title: "Kompleks Ruko Bisnis Modern 3 Lantai",
    category: "Komersial",
    tagline: "Pembangunan 8 unit ruko premium di koridor komersial utama kota",
    description:
      "Proyek ruko 3 lantai dengan fasad modern industrial, parkir komunal berpaving block press mesin, dan instalasi genset serta sistem pemadam kebakaran hydrant standar dinas.",
    image:
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    ],
    location: "Bekasi, Jawa Barat",
    year: "2023",
    duration: "9 Bulan",
    projectValue: "Rp 8.9 Miliar",
    client: "PT Arjuna Graha Propertindo",
    scope: [
      "Bored Pile Pondasi Dalam Kedalaman 14 Meter",
      "Pekerjaan Struktur Kolom & Plat Beton Komposit Bondek",
      "Fasad Kaca Curtain Wall & ACP Seven Fire-Resistant",
      "Instalasi Listrik 16.500 VA Tiap Unit & Grounding System",
    ],
    specifications: [
      { label: "Jumlah Unit", value: "8 Ruko Komersial" },
      { label: "Luas per Unit", value: "5x16 m (3 Lantai)" },
      { label: "Area Parkir", value: "Kapasitas 30 Mobil" },
      { label: "Tipe Izin", value: "PBG Komersial Resmi" },
    ],
    challenge:
      "Pekerjaan pondasi di area padat lalu lintas komersial tanpa menimbulkan getaran yang merusak bangunan di sebelahnya.",
    solution:
      "Penggunaan metode bored pile mesin hidrolik mini tanpa getaran (silent piling), berhasil diselesaikan dengan zero-incident dan persetujuan lengkap dari tetangga sepadan.",
    featured: true,
  },
  {
    id: "proj-5",
    slug: "pabrik-manufaktur-industri",
    title: "Gedung Pabrik Manufaktur & Office Hub",
    category: "Baja & Industri",
    tagline:
      "Konstruksi pabrik pengolahan komponen presisi dengan standarisasi ISO & K3",
    description:
      "Pembangunan gedung pabrik terpadu yang menggabungkan area produksi bebas debu (cleanroom standard), kantor manajemen 2 lantai, dan instalasi crane overhead kapasitas 5 ton.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    ],
    location: "Karawang International Industrial City (KIIC)",
    year: "2024",
    duration: "10 Bulan",
    projectValue: "Rp 21.5 Miliar",
    client: "PT Precision Component Asia",
    scope: [
      "Civil Works & Structural Steel Fabrication di Workshop Sendiri",
      "Pemasangan Overhead Crane Runway Beam 5 Ton",
      "HVAC Ducting & Cleanroom Class 100.000 Installation",
      "Pengadaan Alat Berat Excavator PC200 & Vibro Roller",
    ],
    specifications: [
      { label: "Luas Lahan", value: "12.000 m²" },
      { label: "Luas Bangunan", value: "6.800 m²" },
      { label: "Tinggi Clear Height", value: "11 Meter" },
      { label: "Sertifikasi K3", value: "Zero Accident 250.000 Jam Kerja" },
    ],
    challenge:
      "Standar toleransi struktur baja dan kelurusan runway overhead crane yang sangat ketat di bawah 2 milimeter.",
    solution:
      "Fabrikasi baja dilakukan di workshop internal Ardi Jaya dengan mesin potong CNC plasma dan pengukuran digital laser theodolite sehingga presisi tercapai sempurna.",
    featured: true,
  },
  {
    id: "proj-6",
    slug: "restoran-semi-outdoor-zen",
    title: "Restoran & Lounge Semi-Outdoor Botanica",
    category: "Komersial",
    tagline:
      "Transformasi ruang komersial dengan kanopi baja ekspos, kolam koi, dan interior kayu jati",
    description:
      "Konstruksi tempat bersantap modern bertema eco-biophilic dengan kanopi kantilever baja estetis, dinding rooster terracotta cetak presisi, dan instalasi kitchen hood komersial.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    ],
    location: "Senopati, Jakarta Selatan",
    year: "2023",
    duration: "4 Bulan",
    projectValue: "Rp 2.6 Miliar",
    client: "Botanica Culinary Group",
    scope: [
      "Struktur Rangka Baja Ringan Ekspos & Atap Shingle Bitumen",
      "Pekerjaan Dinding Rooster Sirkulasi Udara Bebas AC",
      "Sistem Pemipaan Gas Sentral & Kitchen Grease Trap Komersial",
      "Pencahayaan Ambience Warm LED Architectural",
    ],
    specifications: [
      { label: "Kapasitas Tempat Duduk", value: "180 Kursi" },
      { label: "Luas Area", value: "520 m²" },
      { label: "Konsep", value: "Semi-Outdoor Tropical Contemporary" },
    ],
    challenge:
      "Pengerjaan cepat dalam masa tenggang sewa (grace period) tanpa kebisingan di malam hari.",
    solution:
      "Manajemen perakitan prefabrikasi di luar lokasi (off-site fabrication), perakitan di lokasi tinggal baut & sambungan kilat, memangkas waktu konstruksi on-site sebesar 40%.",
    featured: true,
  },
  // Additional projects for /portfolio page
  {
    id: "proj-7",
    slug: "apartemen-low-rise-urban",
    title: "Urban Residence Low-Rise 4 Lantai",
    category: "Residensial",
    tagline:
      "Gedung residensial komunal 16 unit dengan rooftop communal garden",
    description:
      "Konstruksi gedung hunian bertingkat menengah dengan sistem plat lantai beton precast cepat kering, lift penumpang 6 orang, dan basement parkir mekanis.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
    ],
    location: "Bandung, Jawa Barat",
    year: "2023",
    duration: "11 Bulan",
    projectValue: "Rp 11.2 Miliar",
    client: "PT Urban Living Bandung",
    scope: [
      "Pondasi Tiang Pancang Mini Pile 20x20",
      "Struktur Beton K-350 & Dinding Hebel Bata Ringan SNI",
      "Pekerjaan Lift Penumpang & Tangga Darurat Fire-Rated",
      "Finishing Fasad Cat Weather-Shield & Louver Aluminium",
    ],
    specifications: [
      { label: "Jumlah Lantai", value: "4 Lantai + Rooftop" },
      { label: "Total Unit", value: "16 Unit Studio & 2-Bedroom" },
      { label: "Luas Bangunan", value: "1.450 m²" },
    ],
    featured: false,
  },
  {
    id: "proj-8",
    slug: "renovasi-gedung-perkantoran-sudirman",
    title: "Retrofit & Renovasi Total Kantor 5 Lantai",
    category: "Renovasi",
    tagline:
      "Peremajaan fasad modern, perkuatan struktur gempa, dan pembaruan interior kantor",
    description:
      "Renovasi struktural dan arsitektural gedung perkantoran tua menjadi bangunan hemat energi (green building concept) dengan fasad kaca double insulation dan sistem chiller efisiensi tinggi.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    ],
    location: "Kawasan Sudirman, Jakarta Pusat",
    year: "2024",
    duration: "5 Bulan",
    projectValue: "Rp 6.8 Miliar",
    client: "Fintech Corporate Indonesia",
    scope: [
      "Perkuatan Struktur Kolom dengan Carbon Fiber Reinforced Polymer (CFRP)",
      "Penggantian Fasad Lama Menjadi Double Low-E Glass Façade",
      "Pembaruan Total Sistem Tata Udara VRV Daikin & Fire Alarm",
      "Interior Fit-Out Open Office Ruang Kolaborasi",
    ],
    specifications: [
      { label: "Luas Area Renovasi", value: "2.800 m²" },
      { label: "Tipe Proyek", value: "Structural Retrofit & Modern Fit-Out" },
      { label: "Efisiensi Energi", value: "Turun 32% Konsumsi Listrik" },
    ],
    featured: false,
  },
  {
    id: "proj-9",
    slug: "infrastruktur-jembatan-industri",
    title: "Pembangunan Jembatan Beton & Akses Jalan Industri",
    category: "Infrastruktur",
    tagline:
      "Pembangunan jembatan girder beton bentang 24 meter dengan kapasitas beban gandar 20 ton",
    description:
      "Konstruksi jembatan penghubung kawasan industri dengan pondasi bore pile diameter 80 cm, balok girder beton pratekan, dan perkerasan jalan rigid beton semen Ardi Jaya.",
    image:
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1200&q=80",
    ],
    location: "Purwakarta, Jawa Barat",
    year: "2023",
    duration: "5 Bulan",
    projectValue: "Rp 5.7 Miliar",
    client: "Kawasan Industri Mitra Graha",
    scope: [
      "Pondasi Bore Pile Kedalaman 18 Meter",
      "Ereksi Balok Girder Precast PCI 24m Menggunakan 2 Crane 50 Ton Ardi Jaya",
      "Pengecoran Lantai Jembatan & Barrier Beton Parapet",
      "Perkerasan Rigid Pavement Akses Jalan 1.2 Km",
    ],
    specifications: [
      { label: "Bentang Jembatan", value: "24 Meter" },
      { label: "Lebar Jembatan", value: "9 Meter (2 Lajur + Trotoar)" },
      { label: "Beban Maksimal", value: "Muatan Sumbu Terberat (MST) 20 Ton" },
    ],
    featured: false,
  },
];

export const SERVICES_DATA = [
  {
    id: "srv-1",
    title: "Jasa Konstruksi & Bangun Gedung",
    subtitle:
      "Konstruksi Rumah Mewah, Villa, Ruko Komersial, Pergudangan & Renovasi",
    description:
      "Layanan kontraktor menyeluruh mulai dari perencanaan arsitektur 3D, perhitungan struktur tahan gempa berizin PBG, pengerjaan sipil bertingkat, hingga serah terima kunci bergaransi struktur 10 tahun.",
    iconName: "Building2",
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Gratis Desain Arsitektur 3D & Perhitungan RAB Terperinci",
      "Survei Lokasi & Uji Tanah (Sondir / Soil Test) Gratis",
      "Pengurusan PBG / IMB Resmi oleh Tim Ahli Arsitek",
      "Konstruksi Rumah Tinggal, Villa, Ruko & Gudang Baja WF",
      "Garansi Pemeliharaan & Sertifikat Garansi Struktur 10 Tahun",
    ],
    equipmentOrMaterial: [
      "Besi Beton Ulir SNI Full Toleransi",
      "Ready-Mix Concrete K-300 / K-350 Mutu Teruji",
      "Bata Ringan Hebel AAC & Mortar Instan",
      "Armada Truk Molen & Concrete Pump Sendiri",
    ],
    whatsappMessage:
      "Halo Ardi Jaya, saya ingin konsultasi proyek jasa bangun baru atau renovasi gedung.",
  },

  // srv-2 dan srv-3 tetap sama
];

export const ADVANTAGES_DATA = [
  // isi sama seperti sebelumnya
];

export const TESTIMONIALS_DATA = [
  {
    id: "test-1",
    name: "Bpk. Irwan Santoso",
    role: "Owner & Investor",
    companyOrProject: "Pembangunan Kompleks Villa Tropis Bali",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content:
      "Kerja sama dengan Ardi Jaya sangat memuaskan. Dari tahap perencanaan 3D, pengurusan izin, hingga finishing akhir detailnya luar biasa rapi. Yang paling saya apresiasi adalah transparansi RAB dan laporan video drone mingguan sehingga saya yang berada di luar kota tetap tenang.",
    location: "Canggu, Bali",
    date: "Januari 2024",
  },
  {
    id: "test-2",
    name: "Ibu Ratna Paramitha",
    role: "Managing Director",
    companyOrProject: "PT Logistik Multi Armada - Cikarang",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content:
      "Pembangunan gudang baja bentang 36 meter selesai 2 minggu lebih cepat dari kontrak! Karena Ardi Jaya punya armada crane dan pasokan baja sendiri, tidak ada kendala keterlambatan material sama sekali. Lantai hardenernya sangat mulus untuk jalur forklift berat kami.",
    location: "Cikarang, Jawa Barat",
    date: "Maret 2024",
  },
  {
    id: "test-3",
    name: "dr. Hendra Kusuma, Sp.OG",
    role: "Pemilik Rumah",
    companyOrProject: "Pembangunan Rumah Mewah 2 Lantai Serpong",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content:
      "Awalnya sempat khawatir memakai kontraktor karena sering dengar cerita proyek mangkrak. Namun setelah bertemu Pak Ardi dan tim, kami langsung yakin. Kontraknya jelas berbadan hukum, pembayaran termin aman, dan tukangnya sopan serta ahli. Rumah kami sekarang jadi hunian impian keluarga.",
    location: "Serpong, Tangerang",
    date: "November 2023",
  },
  {
    id: "test-4",
    name: "Bpk. Anthony Wijaya",
    role: "CEO & Founder",
    companyOrProject: "Botanica Creative Dining Lounge",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    content:
      "Proyek restoran kami butuh eksekusi kilat dalam 4 bulan demi mengejar momen opening akhir tahun. Ardi Jaya sanggup mengerahkan sistem kerja shift tanpa menurunkan kualitas sedikitpun. Estetika kanopi baja ekspos dan detail instalasinya menuai banyak pujian dari pengunjung kami.",
    location: "Senopati, Jakarta Selatan",
    date: "Desember 2023",
  },
];

export const FAQ_DATA = [
  {
    id: "faq-1",
    category: "Umum",
    question:
      "Bagaimana alur dan langkah kerja sama pembangunan dengan Ardi Jaya?",
    answer:
      "Alur kerja kami sangat terstruktur dan transparan: (1) Konsultasi awal kebutuhan via WhatsApp atau tatap muka, (2) Survey lokasi & pengukuran lahan gratis oleh tim arsitek/sipil kami, (3) Pembuatan Konsep Desain & Rencana Anggaran Biaya (RAB) rinci, (4) Penandatanganan Surat Perjanjian Kerja (SPK) berbadan hukum, (5) Pelaksanaan konstruksi dengan pengawasan mandor & laporan mingguan, (6) Serah terima kunci dan penyerahan sertifikat garansi resmi.",
  },
  {
    id: "faq-2",
    category: "Biaya & Kontrak",
    question:
      "Apakah survei lokasi, konsultasi awal, dan estimasi biaya dikenakan tarif?",
    answer:
      "Tidak, seluruh konsultasi via WhatsApp, survei lokasi untuk wilayah Jabodetabek dan sekitarnya, serta pembuatan estimasi biaya awal adalah 100% GRATIS tanpa kewajiban apa pun. Kami ingin memastikan Anda mendapatkan gambaran perencanaan yang akurat sebelum memutuskan.",
  },
  {
    id: "faq-3",
    category: "Biaya & Kontrak",
    question: "Bagaimana sistem pembayaran proyek di Ardi Jaya?",
    answer:
      "Kami menerapkan sistem pembayaran bertahap (Termin) yang aman dan berkeadilan bagi kedua pihak. Pembayaran dibagi ke dalam 4-5 tahapan berdasarkan persentase fisik kemajuan proyek (misal: Uang Muka 20%, Termin I Pekerjaan Pondasi & Struktur Bawah 25%, Termin II Dinding & Atap 25%, Termin III Finishing 25%, dan Retensi Pemeliharaan 5% setelah masa uji selesai).",
  },
  {
    id: "faq-4",
    category: "Garansi",
    question:
      "Apakah ada jaminan garansi setelah pekerjaan konstruksi selesai?",
    answer:
      "Tentu. Ardi Jaya memberikan 2 bentuk jaminan: (1) Garansi Pemeliharaan (Retensi) selama 3 hingga 6 bulan untuk perbaikan minor seperti cat, instalasi air/listrik, atau penyesuaian aksesoris, dan (2) Sertifikat Garansi Struktur Utama hingga 10 Tahun yang mencakup kekuatan pondasi, balok, kolom beton bertulang, dan rangka baja utama.",
  },
  {
    id: "faq-5",
    category: "Material & Alat",
    question:
      "Apakah Ardi Jaya juga melayani pengadaan material dan sewa alat berat terpisah?",
    answer:
      'Ya, selain menangani proyek konstruksi menyeluruh (turnkey), kami memiliki divisi mandiri "Ardi Jaya Building Material" untuk pengadaan material berskala grosir (semen, besi SNI, bata hebel, ready-mix) serta divisi "Construction Equipment" untuk penyewaan alat berat (excavator, mobile crane, vibro roller, dump truck) bagi kontraktor mitra atau instansi proyek.',
  },
  {
    id: "faq-6",
    category: "Umum",
    question:
      "Bagaimana jika saya sudah memiliki gambar arsitektur dan RAB sendiri?",
    answer:
      "Sangat bisa! Jika Anda sudah memiliki gambar kerja (DED) dan perhitungan struktur dari arsitek pribadi, tim estimasi Ardi Jaya akan langsung mengkaji kelayakan teknis dan memberikan penawaran harga pengerjaan konstruksi (Bidding Kontraktor Pelaksana) yang kompetitif dengan jaminan kualitas terbaik.",
  },
  {
    id: "faq-7",
    category: "Umum",
    question:
      "Wilayah mana saja yang dijangkau oleh jasa kontraktor Ardi Jaya?",
    answer:
      "Berbasis di Bali, Ardi Jaya melayani proyek konstruksi di Denpasar, Badung, Gianyar, Tabanan, dan berbagai wilayah Bali lainnya. Kami terbuka untuk proyek rumah, villa, kantor, dan ruang komersial dengan cakupan layanan yang disesuaikan dengan kebutuhan setiap proyek.",
  },
  {
    id: "faq-8",
    category: "Biaya & Kontrak",
    question: "Apakah Ardi Jaya membantu pengurusan perizinan (PBG / SLF)?",
    answer:
      "Ya, tim kami memiliki staf perizinan profesional yang siap mendampingi dan mengurus Persetujuan Bangunan Gedung (PBG pengganti IMB), Sertifikat Laik Fungsi (SLF), serta pengujian sondir tanah dan dokumen AMDAL/UKL-UPL untuk proyek komersial dan industri.",
  },
];

export const QUICK_WA_INQUIRIES = [
  {
    label: "Bangun Rumah / Villa",
    message:
      "Halo Ardi Jaya, saya ingin konsultasi dan menanyakan estimasi biaya bangun rumah/villa baru.",
  },
  {
    label: "Proyek Komersial & Gudang",
    message:
      "Halo Ardi Jaya, saya ingin mengajukan penawaran untuk pembangunan proyek ruko/gudang/pabrik.",
  },
  {
    label: "Renovasi Bangunan",
    message:
      "Halo Ardi Jaya, saya ingin survei dan estimasi biaya untuk renovasi bangunan saya.",
  },
  {
    label: "Material & Sewa Alat Berat",
    message:
      "Halo Ardi Jaya, saya ingin menanyakan ketersediaan dan harga material / sewa alat berat.",
  },
];
