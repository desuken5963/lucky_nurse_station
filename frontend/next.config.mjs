import { fileURLToPath, URL } from 'url';

/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias['@'] = fileURLToPath(new URL('./src', import.meta.url));

    return config;
  },
};

export default nextConfig;
