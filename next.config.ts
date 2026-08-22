import type { NextConfig } from 'next';

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig: NextConfig = {
    output: 'export',
    basePath: isGithubActions ? '/personal-website' : '',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;