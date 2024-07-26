/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '31299',
                pathname: '/api/static/**',
            },
        ],
    },
};

export default nextConfig;
