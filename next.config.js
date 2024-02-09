/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ["tsx"],
  rewrites:
    process.env.NODE_ENV !== "development"
      ? undefined
      : async () => {
          return [
            {
              source: "/admin",
              destination: "/admin/index.html",
            },
            {
              source: "/config.yml",
              destination: "/admin/config.yml",
            },
          ];
        },
  webpack: (config) => {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.yml$/,
        type: "json",
        use: "yaml-loader",
      },
      {
        test: /\.svg$/,
        use: "@svgr/webpack",
      },
    ];

    return config;
  },
};

module.exports = nextConfig;
