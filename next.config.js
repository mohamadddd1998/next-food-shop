/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [`${process.env.BACKEND_DOMAIN}`],
      },
}

module.exports = nextConfig
