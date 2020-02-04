module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  exportPathMap: async function() {
    return {
      "/": { page: "/" },
      "/hiring": { page: "/hiring" },
    };
  },
};
