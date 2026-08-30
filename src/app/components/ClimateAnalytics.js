"use client";

import { GoogleAnalytics, sendGAEvent } from "@next/third-parties/google";
import cookie from "js-cookie";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const GA_MEASUREMENT_ID = "G-7RYKX332PZ";

const hasAnalyticsConsent = () => cookie.get("cookieConsent") === "accepted";

const ClimateAnalytics = ({ targetPaths }) => {
  const pathname = usePathname();
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const enableAnalytics = () => setIsEnabled(true);

    setIsEnabled(hasAnalyticsConsent());
    window.addEventListener("analytics-consent-granted", enableAnalytics);

    return () => window.removeEventListener("analytics-consent-granted", enableAnalytics);
  }, []);

  useEffect(() => {
    if (!isEnabled || !pathname || !targetPaths.includes(pathname)) {
      return;
    }

    window.dataLayer = window.dataLayer || [];
    sendGAEvent("event", "view_climate_pages", {
      page_path: pathname,
    });
  }, [isEnabled, pathname, targetPaths]);

  if (!isEnabled) {
    return null;
  }

  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
};

export default ClimateAnalytics;
