// Google Analytics 4 Integration

declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "set" | "js",
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}

// Helper to get environment variables
const getEnv = (key: string): string | undefined => {
  try {
    return (import.meta as any).env[key];
  } catch {
    return undefined;
  }
};

// Initialize Google Analytics
export const initGA = (measurementId: string) => {
  if (typeof window === "undefined" || !measurementId) return;

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    page_path: window.location.pathname,
  });

  // Load Google Analytics script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window === "undefined" || !window.gtag) return;

  // Use the measurement ID from the HTML script tag (G-D777BEF9B6)
  // or fallback to environment variable if needed
  const measurementId = getEnv("VITE_GA_MEASUREMENT_ID") || "G-D777BEF9B6";

  window.gtag("config", measurementId, {
    page_path: url,
  });
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent("form_submit", "engagement", formName);
};

// Track button clicks
export const trackButtonClick = (buttonName: string) => {
  trackEvent("click", "button", buttonName);
};

// Track outbound links
export const trackOutboundLink = (url: string) => {
  trackEvent("click", "outbound", url);
};

