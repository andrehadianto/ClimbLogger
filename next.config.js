module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["t.me"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/login",
        permanent: true,
      },
    ];
  },
};
