/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SITE_NAVIGATION_MIGRATION_ENABLED:
      process.env.SITE_NAVIGATION_MIGRATION_ENABLED === "true" ? "true" : "false",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a.storyblok.com",
      },
    ],
  },
  async redirects() {
    const legacyRedirects = [
      { source: "/co-robimy/nasze-projekty", destination: "/nasze-projekty", permanent: true },
      { source: "/co-robimy/nasze-projekty/:path*", destination: "/nasze-projekty/:path*", permanent: true },
      { source: "/co-robimy/:path*", destination: "/nasze-projekty/:path*", permanent: true },
    ];
    return [
      ...(process.env.SITE_NAVIGATION_MIGRATION_ENABLED === "true" ? [] : legacyRedirects),
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
