# Supabase Setup Guide

Complete guide to setting up Supabase for Represent Building & Construction website.

## Step 1: Create Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign in with GitHub
4. Click "New Project"
5. Choose organization and enter project details:
   - Name: represent-construction
   - Database Password: (generate strong password)
   - Region: Choose closest to your users
6. Click "Create new project"

## Step 2: Get API Credentials

1. Go to Project Settings (gear icon)
2. Click "API" in sidebar
3. Copy these values:
   - Project URL
   - anon/public key
4. Add to `.env` file:

```env
VITE_SUPABASE_URL=your-project-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

## Step 3: Create Database Tables

Go to SQL Editor and run:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Contact submissions table
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Gallery images table
CREATE TABLE gallery_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  url TEXT NOT NULL,
  title TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

-- Policies for contact_submissions
CREATE POLICY "Anyone can insert contact submissions"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);

-- Policies for gallery_images
CREATE POLICY "Anyone can view gallery images"
  ON gallery_images FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Only authenticated users can insert images"
  ON gallery_images FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can delete images"
  ON gallery_images FOR DELETE
  TO authenticated
  USING (true);
```

## Step 4: Create Storage Bucket

1. Go to Storage in sidebar
2. Click "New bucket"
3. Name: `gallery`
4. Make it Public
5. Click "Create bucket"

### Set Storage Policies

```sql
-- Allow public read access
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'gallery');

-- Allow authenticated users to upload
CREATE POLICY "Authenticated users can upload"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'gallery');

-- Allow authenticated users to delete
CREATE POLICY "Authenticated users can delete"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'gallery');
```

## Step 5: Create Admin User

1. Go to Authentication > Users
2. Click "Add user"
3. Choose "Create new user"
4. Enter:
   - Email: admin@representbc.co.za
   - Password: (strong password)
   - Auto Confirm User: Yes
5. Click "Create user"

## Step 6: Insert Sample Gallery Images

```sql
INSERT INTO gallery_images (url, title) VALUES
  ('https://d64gsuwffb70l.cloudfront.net/68f4a65a2450a7160af1b1f2_1760863894827_c0c00d93.webp', 'Modern House'),
  ('https://d64gsuwffb70l.cloudfront.net/68f4a65a2450a7160af1b1f2_1760863896585_848c4aea.webp', 'Commercial Building'),
  ('https://d64gsuwffb70l.cloudfront.net/68f4a65a2450a7160af1b1f2_1760863898344_568c8065.webp', 'Residential Project');
```

## Step 7: Test Connection

1. Start your dev server: `npm run dev`
2. Try submitting contact form
3. Check Supabase dashboard for new entry
4. Login to admin at `/admin/login`

## Troubleshooting

### Connection Issues
- Verify `.env` file exists and has correct values
- Restart dev server after changing `.env`
- Check Supabase project is not paused

### Authentication Issues
- Verify user exists in Authentication > Users
- Check email confirmation status
- Ensure RLS policies are set correctly

### Storage Issues
- Verify bucket is public
- Check storage policies are created
- Ensure bucket name matches code ('gallery')

## Security Best Practices

1. Never commit `.env` file
2. Use Row Level Security on all tables
3. Rotate API keys if exposed
4. Use strong passwords for admin users
5. Enable email confirmation in production
6. Set up proper CORS policies

## Next Steps

- Set up email templates for auth
- Configure custom domain
- Add more RLS policies as needed
- Set up database backups
- Monitor usage in dashboard
