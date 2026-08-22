import type { NextConfig } from 'next';

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig: NextConfig = {
    output: 'export',
    // Only use basePath when building in GitHub Actions
    basePath: isGithubActions ? '/personal-website' : '',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;