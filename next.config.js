/** @type {import('next').NextConfig} */

require('dotenv').config();

const withPlugins = require('next-compose-plugins');

const nextTranslate = require('next-translate');
const withPWA = require('next-pwa');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: false,
  optimizeFonts: false, // TODO: Now Next.js have problem with fonts loading in production mode
  experimental: {
    concurrentFeatures: true,
  },
  swcMinify: false, // TODO: Now Next.js have problem with swcMinify in production mode
  i18n: {
    defaultLocale: 'en', // Should be the same as in i18n file
    locales: ['en', 'fr'], // Should be the same as in i18n file
  },
  env: {
    // Put here application envs (the same as in .env file)
    NEXT_PUBLIC_BACKEND_HTTP_API_ENDPOINT: process.env.NEXT_PUBLIC_BACKEND_HTTP_API_ENDPOINT,
    NEXT_PUBLIC_BACKEND_SOCKET_ENDPOINT: process.env.NEXT_PUBLIC_BACKEND_SOCKET_ENDPOINT,
    NEXT_PUBLIC_USER_IDLE_TIMEOUT_MS: process.env.NEXT_PUBLIC_USER_IDLE_TIMEOUT_MS,
    NEXT_PUBLIC_BACKEND_SOCKET_PATH: process.env.NEXT_PUBLIC_BACKEND_SOCKET_PATH,
  },
};

const pwaConfig = withPWA({
  pwa: {
    dest: 'public',
  },
});

const translateConfig = nextTranslate(pwaConfig);

module.exports = withPlugins(
  [
    [withBundleAnalyzer],
    // [nextTranslate],
    [translateConfig],
    // Your other plugins here
  ],
  nextConfig
);
