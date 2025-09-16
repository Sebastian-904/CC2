
import 'dotenv/config'; // This loads .env variables for the build process
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // ignoreBuildErrors: true, // Removed for production
  },
  eslint: {
    // ignoreDuringBuilds: true, // Removed for production
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // By adding the env property, we make sure that the variables are available in the server runtime
  env: {
    FIREBASE_SERVICE_ACCOUNT_KEY: process.env.FIREBASE_SERVICE_ACCOUNT_KEY,
  }
};

export default nextConfig;
