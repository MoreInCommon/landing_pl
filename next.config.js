/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a.storyblok.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/co-robimy/nasze-projekty",
        destination: "/nasze-projekty",
        permanent: true,
      },
      {
        source: "/co-robimy/nasze-projekty/:path*",
        destination: "/nasze-projekty/:path*",
        permanent: true,
      },
      {
        source: "/co-robimy/:path*",
        destination: "/nasze-projekty/:path*",
        permanent: true,
      },
      {
        source: "/kontakt",
        destination: "/kontakt/nasze-biuro",
        permanent: true,
      },
      {
        source: "/o-nas",
        destination: "/o-nas/zespol",
        permanent: true,
      },
      {
        source: "/siedem-segmentow/dumni-patrioci",
        destination: "/siedem-segmentow/lojalni-hierarchisci",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
