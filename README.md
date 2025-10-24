# 🖥️ Personal Portfolio

A sleek, modern, and responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, bootstrapped with [create-t3-app](https://create.t3.gg/).

![Website Preview](https://raw.githubusercontent.com/pishapis/my-portofolio/main/public/assets/preview.png)

[🔗 Live Demo](https://my-porto-pishapis-projects.vercel.app/)

A comprehensive showcase of my skills, projects, and professional experience. This portfolio features smooth animations, interactive UI elements, and a modern design approach to create an engaging user experience.

## ✨ Features

- **🎨 Modern UI/UX Design**: Sleek and contemporary design with smooth animations and transitions
- **📱 Fully Responsive**: Optimized viewing experience across all devices - desktop, tablet, and mobile
- **⚡ Interactive Animations**: Powered by Framer Motion and Locomotive Scroll for fluid, engaging interactions
- **🎯 Easy Customization**: Well-organized code structure for easy personalization and content updates
- **🚀 Performance Optimized**: Built with Next.js for fast loading and optimal performance
- **🎭 Smooth Scrolling**: Integrated Locomotive Scroll for buttery-smooth parallax effects
- **🌓 Modern Stack**: TypeScript, Tailwind CSS, and modern React patterns

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Scroll Library**: Locomotive Scroll
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**
- **git**

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/pishapis/my-portofolio.git
```

2. **Navigate to the project directory**
```bash
cd my-portofolio
```

3. **Remove current origin repository** (if you want to use your own repo)
```bash
git remote remove origin
```

4. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

5. **Start the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

6. **Open your browser**

Navigate to `http://localhost:3000` to view your portfolio live.

## 🎨 Customization

### Personal Information
Update your personal details in `src/data/constants.ts`:
- Name, title, and bio
- Contact information
- Social media links

### Skills
Modify your skills in `src/data/skills.ts`:
- Add/remove technologies
- Update skill categories
- Change skill icons

### Projects
Update your projects in `src/data/projects.ts`:
- Project descriptions
- Technologies used
- Live demo and GitHub links

### Experience
Edit your work experience in `src/data/experience.ts`

### Styling
Customize colors and themes in:
- `tailwind.config.ts` - Tailwind configuration
- `src/styles/globals.css` - Global styles

## 📦 Build for Production
```bash
npm run build
npm run start
```

## 🚢 Deployment

This portfolio can be easily deployed to various platforms:

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/pishapis/my-portofolio)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Netlify
1. Push your code to GitHub
2. Connect your repository on [Netlify](https://netlify.com)
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

### Docker
```bash
docker build -t my-portfolio .
docker run -p 3000:3000 my-portfolio
```

For detailed deployment guides, visit:
- [Vercel Deployment](https://create.t3.gg/en/deployment/vercel)
- [Netlify Deployment](https://create.t3.gg/en/deployment/netlify)
- [Docker Deployment](https://create.t3.gg/en/deployment/docker)

## 📝 Project Structure
```
my-portofolio/
├── public/
│   └── assets/          # Images and static files
├── src/
│   ├── components/      # React components
│   ├── data/           # Portfolio content data
│   ├── pages/          # Next.js pages
│   └── styles/         # Global styles
├── package.json
└── tailwind.config.ts
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/pishapis/my-portofolio/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**pishapis**

- Website: [my-porto-pishapis-projects.vercel.app](https://my-porto-pishapis-projects.vercel.app/)
- GitHub: [@pishapis](https://github.com/pishapis)

## ⭐ Show your support

Give a ⭐️ if this project helped you!

---

<p align="center">Made with ❤️ by pishapis</p>