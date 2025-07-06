/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true,
        domains: ["acertinity ui.com", "images.unsplash.com", "assets.aceternity.com","picsum.photos","avatar.vercel.sh","i.ibb.co"]
    },
    experimental: {
        appDir: true,
    },
};

export default nextConfig;
