# NGreen Global — B2B Import-Export Portal (GitHub + Cloudflare Pages Ready)

Complete React + Vite + Tailwind CSS web application featuring the full **48-item Diversified & Traditional Jute Product Catalog** (Codes `001`–`046` from Tizarah Fibre Industries Pvt. Ltd.) alongside RMG Apparel and Industrial Hardware divisions.

## Free Deployment: GitHub -> Cloudflare Pages

### Step 1: Push to GitHub
1. Create a new repository on GitHub (e.g. `ngreen-portal`).
2. Extract this ZIP and run inside the folder:
```bash
git init
git add .
git commit -m "Initial commit: NGreen portal with full jute catalog"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ngreen-portal.git
git push -u origin main
```

### Step 2: Deploy for Free on Cloudflare Pages
1. Log in to **Cloudflare Dashboard** -> **Workers & Pages** -> **Create** -> **Pages** -> **Connect to Git**.
2. Select your `ngreen-portal` repository.
3. Configure build settings:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**. Cloudflare automatically builds and hosts your site on `*.pages.dev` (and supports free custom domain SSL).
