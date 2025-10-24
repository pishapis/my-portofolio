// src/lib/data.ts

import { Project, Skill, SocialLink } from '@/types';

export const projects: Project[] = [
  {
    id: 'etera-web',
    title: 'Etera Web',
    description: 'ETERA is a digital ecosystem that provides value creation in the form of integration, accuracy, expertise, ease and speed of business processes through technological support in the context of realizing National Sugar Self-Sufficiency.',
    images: [
      '/assets/projects/etera-monitorng.webp',
      '/assets/projects/etera-login.webp',
    ],
    favicon: '/assets/icons/icon-etera.png',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://etera.co.id',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 'etera-mobile',
    title: 'Etera Mobile',
    description: 'ETERA is a digital ecosystem that provides value creation in the form of integration, accuracy, expertise, ease and speed of business processes through technological support in the context of realizing National Sugar Self-Sufficiency.',
    images: [
      '/assets/projects/mobil-bg-1.webp',
      '/assets/projects/mobil-bg-2.webp',
    ],
    favicon: '/assets/icons/icon-etera.png',
    techStack: ['Flutter', 'Dart'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 'people-analytics',
    title: 'People Analytics',
    description: 'Monitoring employee data for HR needs. Includes, HR Ratio, HR Total Employees, Learning & Development Cost, HC Maturity Level, Punishment Monitoring, etc.',
    images: [
      '/assets/projects/login-people.webp',
      '/assets/projects/people-dahsboard.webp',
      '/assets/projects/people-monitoring.webp',
    ],
    favicon: '/assets/icons/logo-people.png',
    techStack: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    liveUrl: 'https://people-analytic.digii.co.id/',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 'akara',
    title: 'Akara',
    description: 'Akara is a digital map maker that presents visual geographic or special information using computer technology.',
    images: [
      '/assets/projects/akara-home.webp',
      '/assets/projects/akara-login.webp',
      '/assets/projects/akara-dashboard.webp',
      '/assets/projects/akara-maps.webp',
    ],
    favicon: '/assets/icons/logo-akara.png',
    techStack: ['React', 'Mapbox', 'Leaflet', 'Node.js'],
    liveUrl: 'https://akara.digii.co.id/',
    githubUrl: '#',
  },
  {
    id: 'montera',
    title: 'Montera',
    description: 'A digital map service for sugarcane plantation industry players to make quick operational decisions. Harnessing the true power of spatial analytic.',
    images: [
      '/assets/projects/montera-home.webp',
      '/assets/projects/montera-input.webp',
      '/assets/projects/montera-dashboard.webp',
    ],
    favicon: '/assets/icons/logo-akara.png',
    techStack: ['React', 'Mapbox', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://montera-beta.digii.co.id/',
    githubUrl: '#',
  },
  {
    id: 'dashnas',
    title: 'Dashboard Nasional',
    description: 'E-STDB National Monitoring Dashboard for Palm Oil Commodities.',
    images: [
      '/assets/projects/dashnas-login.webp',
      '/assets/projects/dashnas-1.webp',
      '/assets/projects/dashnas-2.webp',
    ],
    favicon: '/assets/icons/logo-dirjenbun.png',
    techStack: ['React', 'Chart.js', 'Node.js', 'PostgreSQL'],
    liveUrl: 'https://dashnas.ditjenbun.digii.co.id/',
    githubUrl: '#',
  },
  {
    id: 'palm-oil-detection',
    title: 'Palm Oil Detection',
    description: 'Palm tree detection using models that have been trained, namely satellite image models and aerial photos.',
    images: [
      '/assets/projects/plam-loginn.webp',
      '/assets/projects/palm-choose.webp',
      '/assets/projects/palm-result.webp',
    ],
    favicon: '/assets/icons/logo-akara.png',
    techStack: ['React', 'TensorFlow', 'Python', 'Node.js'],
    liveUrl: 'https://palm-akara.digii.co.id/',
    githubUrl: '#',
  },
  {
    id: 'bitres',
    title: 'BITRES',
    description: 'BITRES can develop innovative solutions to complex problems, driving positive social and environmental impact.',
    images: [
      '/assets/projects/bitres-home.webp',
      '/assets/projects/bitres-login.webp',
      '/assets/projects/bitres-choose.webp',
      '/assets/projects/bitres-result.webp',
    ],
    favicon: '/assets/icons/logo-bitres.png',
    techStack: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    liveUrl: 'https://bitres.digii.co.id/',
    githubUrl: '#',
  },
  {
    id: 'aws-ec2',
    title: 'AWS EC2 Instance',
    description: 'Manage vps servers AWS Ec Instance For Developing Etera.',
    images: [
      '/assets/projects/aws-console-home.webp',
      '/assets/projects/dashboard-aws.webp',
      '/assets/projects/linux-aws.webp',
    ],
    favicon: '/assets/icons/aws.ico',
    techStack: ['AWS', 'Linux', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'gotara',
    title: 'GOTARA',
    description: 'Application Farm Management System : Maggot',
    images: [
      '/assets/projects/gotara-login.webp',
      '/assets/projects/gotara-input.webp',
      '/assets/projects/goatar-list-simulasi.webp',
      '/assets/projects/gotara-simulasi.webp',
      '/assets/projects/gotara-post.webp',
    ],
    favicon: '/assets/icons/gotara.png',
    techStack: ['React', 'Laravel', 'MySQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'the-b-andara',
    title: 'The B Andara City',
    description: 'Cashier application with full features, barcode scanning, stock management, etc.',
    images: [
      '/assets/projects/theb/theb-home.webp',
      '/assets/projects/theb/booking-theb.webp',
      '/assets/projects/theb/simulasi-kpr.webp',
      '/assets/projects/theb/dashboard.webp',
      '/assets/projects/theb/list-nup.webp',
      '/assets/projects/theb/list-reject-nup.webp',
      '/assets/projects/theb/list-afiliasi.webp',
      '/assets/projects/theb/post-theb.webp',
      '/assets/projects/theb/price-list.webp',
      '/assets/projects/theb/track-user.webp',
    ],
    favicon: '/assets/icons/theb.svg',
    techStack: ['React', 'Node.js', 'MySQL', 'Barcode Scanning'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'pos-bintang',
    title: 'POS Bintang Elektronik',
    description: 'Application Farm Management System : Maggot',
    images: [
      '/assets/projects/bintang-login.webp',
      '/assets/projects/bintang-produk.webp',
      '/assets/projects/bintang-coupon.webp',
      '/assets/projects/bintang-transaksi.webp',
    ],
    favicon: '/assets/icons/bintang.svg',
    techStack: ['React', 'Laravel', 'MySQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'mgbox',
    title: 'MgBox System Warehouse',
    description: 'Application Warehouse Management System',
    images: [
      '/assets/projects/mgbox-login.webp',
      '/assets/projects/mgbox-input.webp',
      '/assets/projects/mgbox-pdf.webp',
      '/assets/projects/mgbox-staff.webp',
      '/assets/projects/mgbox-grafik.webp',
    ],
    favicon: '/assets/icons/box.webp',
    techStack: ['React', 'Node.js', 'MySQL', 'PDF Export'],
    liveUrl: 'https://mgboxyogya.com/',
    githubUrl: '#',
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML', icon: '/assets/skills/htmllogo.png', category: 'frontend' },
  { name: 'CSS', icon: '/assets/skills/csslogo.png', category: 'frontend' },
  { name: 'JavaScript', icon: '/assets/skills/jslogo.png', category: 'frontend' },
  { name: 'Bootstrap', icon: '/assets/skills/bootstraplogo.png', category: 'frontend' },
  { name: 'Tailwind', icon: '/assets/skills/tailwind.png', category: 'frontend' },
  { name: 'React', icon: '/assets/skills/reactlogo.png', category: 'frontend' },
  { name: 'Next.js', icon: '/assets/skills/nextlogo.png', category: 'frontend' },
  { name: 'Alpine.js', icon: '/assets/skills/alpinejs-2.svg', category: 'frontend' },

  // Backend
  { name: 'Node.js', icon: '/assets/skills/node.png', category: 'backend' },
  { name: 'PHP', icon: '/assets/skills/php.png', category: 'backend' },
  { name: 'Laravel', icon: '/assets/skills/laravel.svg', category: 'backend' },
  { name: 'Python', icon: '/assets/skills/python.png', category: 'backend' }, // ✅ PINDAH KE BACKEND

  // Database
  { name: 'MongoDB', icon: '/assets/skills/mongo.png', category: 'database' },
  { name: 'MySQL', icon: '/assets/skills/mysql.png', category: 'database' },
  { name: 'Redis', icon: '/assets/skills/redis.png', category: 'database' },

  // Tools & DevOps
  { name: 'Git', icon: '/assets/skills/gitlogo.png', category: 'tools' },
  { name: 'GitHub', icon: '/assets/skills/githublogo.png', category: 'tools' },
  { name: 'AWS Server', icon: '/assets/skills/aws.svg', category: 'tools' },
  { name: 'Docker', icon: '/assets/skills/docker.png', category: 'tools' }, // ✅ TETAP DI TOOLS
  { name: 'Mapbox', icon: '/assets/skills/mapbox.svg', category: 'tools' },
  { name: 'Leaflet', icon: '/assets/skills/leaflet.png', category: 'tools' },

  // CMS & Mobile
  { name: 'WordPress', icon: '/assets/skills/wordpress.png', category: 'cms' }, // ✅ KATEGORI BARU: CMS
  { name: 'Flutter', icon: '/assets/skills/icon_flutter.svg', category: 'mobile' },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/pishapis_/',
    icon: 'instagram',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/muhammad-hafidz-ibnu-adi-3334701a0/',
    icon: 'linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/pishapis',
    icon: 'github',
  },
  {
    name: 'Email',
    url: 'mailto:hapisadi12@gmail.com',
    icon: 'email',
  },
];

export const aboutContent = {
  intro: 'I am a fullstack developer with 4 years experience in IT field. Good communication skills, responsibility, flexible and good teamwork ability is an asset that I will bring into the work environment.',
  description: 'I like new things in work matters in the office or in the field, adaptable, always enthusiastic about what I do and this will make a positive contribution to growth your company.',
  resumeUrl: '/CV-Muhammad-Hafidz-Ibnu-Adi-2025.pdf',
  avatar: '/assets/hapis.jpg',
};