"use client";

import { useEffect } from "react";

const JsonLd = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "More in Common Polska",
    url: "https://www.moreincommon.pl",
    description:
      "More in Common działa na rzecz wzmocnienia demokracji oraz zmniejszania polaryzacji politycznej i światopoglądowej.",
    logo: "https://www.moreincommon.pl/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage22.812ee1da.png&w=384&q=75",
    foundingDate: "2022-09-07",
    location: {
      "@type": "Place",
      name: "Warsaw, Poland",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Warsaw",
        postalCode: "00-833",
        streetAddress: "Cluster Sienna Center, ul. Sienna 75",
        addressCountry: "PL",
      },
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Info",
      email: "polska@moreincommon.com",
    },
    sameAs: [
      "https://www.linkedin.com/company/more-in-common-polska",
      "https://x.com/moreincommon_pl",
      "https://bsky.app/profile/moreincommonpolska.bsky.social",
    ],
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script); // Cleanup on component unmount
    };
  }, []); // Empty dependency array ensures this effect runs only once after mount

  return null; // This component does not need to render anything
};

export default JsonLd;
