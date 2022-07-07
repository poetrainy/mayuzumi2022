/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');

module.exports = {
    reactStrictMode: true,
    optimizeFonts: true,
    plugins: ['src/plugins/adobeFonts'],
};

module.exports = withPWA({
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
        // disable: process.env.NODE_ENV === 'development',
    },
    reactStrinctMode: true,
});