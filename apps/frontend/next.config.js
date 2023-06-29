// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNextIntl = require('next-intl/plugin')('./i18n.js');

/** @type {import('next').NextConfig} */
module.exports = withNextIntl({
  eslint: {
    dirs: ['src'],
  },
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  webpack(config) {
    config.module.rules.push(
      {
        test: /\.svg$/i,
        type: 'asset',
        resourceQuery: /url/, // *.svg?url
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: 'removeViewBox',
                    active: false,
                  },
                ],
              },
            },
          },
        ],
      }
    );

    return config;
  },

  async rewrites() {
    return [
      {
        source: '/store/:path*',
        destination: process.env.API_BASE_URL + '/store/:path*',
      },
    ];
  },
});
