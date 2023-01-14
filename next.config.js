/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    async rewrites() {
        return [
            {
                source: "/api/:path*",
                destination: "https://sakaconsulting.co.id/",
            },
        ];
    },
};

module.exports = nextConfig;
