# Deployment Guide

Complete guide to deploying Represent Building & Construction website to Vercel.

## Prerequisites

- GitHub account
- Vercel account (free tier works)
- Supabase project set up (see SUPABASE_SETUP.md)

## Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Represent Building & Construction website"
git branch -M main
git remote add origin https://github.com/yourusername/represent-construction.git
git push -u origin main
```

## Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure project:
   - Framework Preset: Vite
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `dist`

## Step 3: Add Environment Variables

In Vercel project settings, add these environment variables:

```
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

Get these values from your Supabase project settings.

## Step 4: Deploy

Click "Deploy" and wait for build to complete.

## Step 5: Configure Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Wait for SSL certificate

## Step 6: Test Deployment

Visit your deployed site and test:
- ✅ All sections load correctly
- ✅ Navigation works smoothly
- ✅ Contact form submits to Supabase
- ✅ Gallery images display
- ✅ WhatsApp button opens correctly
- ✅ Admin login at `/admin/login`
- ✅ Mobile responsiveness

## Continuous Deployment

Vercel automatically deploys on every push to main branch:

```bash
# Make changes
git add .
git commit -m "Update content"
git push

# Vercel automatically builds and deploys
```

## Environment-Specific Builds

### Production
- Branch: `main`
- Domain: your-domain.com
- Environment: Production variables

### Preview
- Branch: Any other branch
- Domain: preview-url.vercel.app
- Environment: Preview variables

## Performance Optimization

Vercel automatically provides:
- ✅ Global CDN
- ✅ Automatic HTTPS
- ✅ Image optimization
- ✅ Edge caching
- ✅ Gzip compression

## Monitoring

Access deployment logs:
1. Go to Deployments tab
2. Click on specific deployment
3. View build logs and runtime logs

## Troubleshooting

### Build Fails
- Check build logs in Vercel
- Verify all dependencies in package.json
- Test build locally: `npm run build`

### Environment Variables Not Working
- Ensure variables start with `VITE_`
- Redeploy after adding variables
- Check variable names match exactly

### 404 Errors on Refresh
- Verify `vercel.json` is in root
- Check rewrites configuration
- Redeploy if needed

### Supabase Connection Issues
- Verify environment variables are set
- Check Supabase project is not paused
- Test API keys in Supabase dashboard

## Security Checklist

- ✅ Environment variables set in Vercel (not in code)
- ✅ `.env` file in `.gitignore`
- ✅ Supabase RLS policies enabled
- ✅ HTTPS enforced
- ✅ Security headers configured

## Rollback

If deployment has issues:
1. Go to Deployments tab
2. Find previous working deployment
3. Click "..." → "Promote to Production"

## Support

- Vercel Docs: https://vercel.com/docs
- Supabase Docs: https://supabase.com/docs
- GitHub Issues: Create issue in your repo
