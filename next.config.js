/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');

module.exports = {
    mode: 'development',
    reactStrictMode: true,
    optimizeFonts: true,
};

module.exports = withPWA({
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
    },
    reactStrinctMode: true,
});