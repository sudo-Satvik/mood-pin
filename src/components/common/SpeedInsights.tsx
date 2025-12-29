import { useEffect } from "react";

/**
 * SpeedInsights Component
 * 
 * Initializes Vercel Speed Insights for performance monitoring.
 * This component should be added to the root of your application
 * to track Web Core Vitals and other performance metrics.
 * 
 * @see https://vercel.com/docs/speed-insights
 */
export function SpeedInsights() {
  useEffect(() => {
    // Dynamically import and initialize Speed Insights
    import("@vercel/speed-insights").then(({ injectSpeedInsights }) => {
      injectSpeedInsights();
    });
  }, []);

  return null;
}
