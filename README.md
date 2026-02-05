# Abdelrahman Ahmed — Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. Showcasing full-stack projects, skills, and contact information for Abdelrahman Ahmed.

## 🚀 Project Overview
This portfolio highlights my experience as a Full Stack Developer and Computer Science student. It features:
- Project showcases with tech stack badges
- Skills and expertise with category descriptions
- Contact form with toast notifications
- Responsive, dark mode-only design
- Animated, interactive UI

## 🛠️ Tech Stack
- **Frontend:** Next.js, React, TypeScript, Tailwind CSS
- **UI Components:** shadcn/ui, Lucide Icons
- **State Management:** React Query
- **Forms & Validation:** React Hook Form
- **Notifications:** Custom Toasts
- **Analytics:** Vercel Analytics
- **SEO:** Built-in Next.js Metadata, Dynamic Sitemap & Robots.txt

## 📦 Features
- **Featured Projects:**
  - Hospital Management System (Django, MySQL)
  - Animal Image Classifier (TensorFlow, Keras)
  - E-Learning Platform (.NET, Next.js)
- **Skills Section:**
  - Badges for each skill, grouped by category
  - Category descriptions
- **Contact Section:**
  - Real email, phone, and location
  - Social links (GitHub, LinkedIn)
  - Toast notifications for form feedback
- **SEO Optimized:**
  - Dynamic Sitemap generation
  - Semantic HTML & JSON-LD Schema
  - Open Graph & Twitter Cards
- **Performance:**
  - Optimized images with `next/image`
  - Vercel Analytics integration
- **Mobile Friendly:**
  - Responsive layout
  - Mobile navigation with overlay and smooth scroll
- **Dark Mode Only:**
  - Consistent, accessible color palette

## ▶️ Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/abdelrahman-a99/portfolio.git
   cd portfolio
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

## 📂 Project Structure
- `src/components/` — Reusable UI and section components
- `src/data/` — Centralized content (Projects, Skills, Links)
- `src/app/` — Next.js app directory (pages, layout, styles)
- `public/assets/` — Project images and profile photo
- `tailwind.config.ts` — Tailwind CSS configuration

## ✨ Customization
All static content is centralized in `src/data/index.ts` for easy updates:
- **Update your projects:** Edit `projects` array in `src/data/index.ts`
- **Edit skills/categories:** Edit `skillCategories` array in `src/data/index.ts`
- **Change contact info:** Edit `contactInfo` and `socialLinks` arrays in `src/data/index.ts`
- **Global Links:** Update `BASE_URL` and `personalLinks` in `src/data/index.ts`
- **Profile photo:** Replace `public/assets/profile-photo.jpg`

## 👤 About Me
**Abdelrahman Ahmed**  
Full Stack Developer | Junior Computer Science Student  
- [GitHub](https://github.com/abdelrahman-a99)
- [LinkedIn](https://www.linkedin.com/in/abdelrahman-ahmed-fouad/)
- Email: abdelrahmanahmedfouad9@gmail.com

## 📝 License
This project is open source and available under the [MIT License](LICENSE).
