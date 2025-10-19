# Represent Building & Construction

A modern, mobile-first Single Page Application for a construction company built with React, TypeScript, Tailwind CSS, and Supabase.

## 🎨 Design Features

- **Brand Colors**: Orange (#FF7A00), Navy (#002B5B), Rust (#B7410E), Warm Grey (#F4F4F4)
- **Typography**: Poppins font family for modern, professional look
- **Mobile-First**: Fully responsive design optimized for all devices
- **Smooth Animations**: Fade-in and slide-in effects throughout

## 🚀 Features

- ✅ Full-width hero section with compelling CTA
- ✅ About section with company history and stats
- ✅ Horizontal services carousel with 12+ service categories
- ✅ Dynamic gallery with 14+ project images and lightbox
- ✅ Contact form with validation and success states
- ✅ Floating WhatsApp button for instant communication
- ✅ Comprehensive footer with social links
- ✅ Sticky navigation with mobile hamburger menu
- ✅ Supabase integration for CMS and data storage
- ✅ Admin dashboard with authentication
- ✅ SEO optimized with meta tags

## 📦 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (Auth, Database, Storage)
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Hosting**: Vercel-ready

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Supabase

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Copy `.env.example` to `.env`
3. Add your Supabase credentials to `.env`

### 3. Create Database Tables

Run these SQL commands in your Supabase SQL editor:

```sql
-- Contact submissions table
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Gallery images table
CREATE TABLE gallery_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  url TEXT NOT NULL,
  title TEXT,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 4. Create Storage Bucket

1. Go to Storage in Supabase dashboard
2. Create a new bucket named `gallery`
3. Set it to public for image access

### 5. Run Development Server

```bash
npm run dev
```

## 🔐 Admin Access

Access the admin dashboard at `/admin/login`

Create an admin user in Supabase Authentication:
1. Go to Authentication > Users
2. Click "Add User"
3. Enter email and password
4. Use these credentials to login

## 📱 Pages

- **Home** (`/`) - Main landing page with all sections
- **Admin Login** (`/admin/login`) - Secure login for administrators
- **Admin Dashboard** (`/admin`) - Manage gallery and view submissions

## 🎯 Services Offered

1. Building & Construction
2. Property Maintenance
3. Plastering
4. Ceiling Installation
5. Roofing
6. Tiling
7. Plumbing
8. Waterproofing
9. Paving & Landscaping
10. Braai & Fireplace
11. Swimming Pool Building
12. Decorating

## 📞 Contact

- **Phone**: +27 123 456 789
- **Email**: info@representbc.co.za
- **Location**: Johannesburg, South Africa
- **WhatsApp**: Floating button on all pages

## 🚀 Deployment

### Vercel Deployment

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Build for Production

```bash
npm run build
```

## 📄 License

© 2025 Represent Building & Construction. All rights reserved.
