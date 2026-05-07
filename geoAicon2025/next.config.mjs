/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Optimize images with these device sizes for responsive loading
        deviceSizes: [640, 750, 828, 1080, 1200],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        // Reduce quality for faster loading (still great visual quality)
        formats: ['image/webp', 'image/avif'],
    },
};

export default nextConfig;
