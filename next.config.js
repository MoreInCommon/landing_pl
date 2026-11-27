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
      {
        source: "/fokus-na-klimat/dumni-patrioci",
        destination: "/fokus-na-klimat/lojalni-hierarchisci",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
