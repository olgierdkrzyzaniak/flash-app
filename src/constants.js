export const BLOG_TITLE = "FlashApp";

export const LIGHT_COLORS = {
  "--color-text": "hsl(0 0% 5%)",
  "--color-primary-100": "hsl(212 100% 90%)",
  "--color-primary-300": "hsl(212 100% 70%)",
  "--color-primary-500": "hsl(212 100% 60%)",
  "--color-primary-700": "hsl(212 100% 33%)",
  "--color-primary-900": "hsl(256 100% 20%)",
  "--color-primary-contrast": "white",
  "--color-secondary-500": "hsl(328 100% 50%)",
  "--color-decorative-100": "hsl(220 23% 95%)",
  "--color-decorative-200": "hsl(220 100% 95%)",
  "--color-decorative-300": "hsl(220 100% 90%)",
  "--color-decorative-500": "hsl(220 100% 85%)",
  "--color-decorative-600": "hsl(220 100% 60%)",
  "--color-decorative-700": "hsl(220 100% 50%)",
  "--color-decorative-800": "hsl(220 100% 33%)",
  "--color-decorative-900": "hsl(220 100% 25%)",
  "--color-gray-0": "white",
  "--color-gray-100": "hsl(220 20% 90%)",
  "--color-gray-200": "hsl(220 15% 85%)",
  "--color-gray-300": "hsl(220 10% 70%)",
  "--color-gray-500": "hsl(220 4% 50%)",
  "--color-gray-700": "hsl(220 10% 25%)",
  "--color-gray-900": "hsl(220 20% 10%)",
  "--color-gray-1000": "black",
};

export const DARK_COLORS = {
  "--color-text": "hsl(0 0% 100%)",
  "--color-primary-100": "hsl(212 100% 90%)",
  "--color-primary-300": "hsl(212 100% 70%)",
  "--color-primary-500": "hsl(212 100% 50%)",
  "--color-primary-700": "hsl(212 100% 35%)",
  "--color-primary-900": "hsl(212 100% 25%)",
  "--color-primary-contrast": "black",
  "--color-secondary-500": "hsl(328 100% 50%)",
  "--color-decorative-100": "hsl(212, 32%, 8%)",
  "--color-decorative-200": "hsl(212 30% 15%)",
  "--color-decorative-300": "hsl(212 30% 20%)",
  "--color-decorative-500": "hsl(212 40% 30%)",
  "--color-decorative-600": "hsl(212 40% 40%)",
  "--color-decorative-700": "hsl(212 40% 50%)",
  "--color-decorative-800": "hsl(212 45% 65%)",
  "--color-decorative-900": "hsl(212 55% 80%)",
  "--color-gray-0": "black",
  "--color-gray-100": "hsl(212 20% 10%)",
  "--color-gray-200": "hsl(212 15% 15%)",
  "--color-gray-300": "hsl(212 10% 30%)",
  "--color-gray-500": "hsl(212 4% 50%)",
  "--color-gray-700": "hsl(212 10% 75%)",
  "--color-gray-900": "hsl(212 20% 90%)",
  "--color-gray-1000": "white",
};

// Add in semantic / special colors
LIGHT_COLORS["--color-primary"] = LIGHT_COLORS["--color-primary-500"];
LIGHT_COLORS["--color-secondary"] = LIGHT_COLORS["--color-secondary-500"];
LIGHT_COLORS["--color-inline-code-bg"] = "hsl(220 74% 85%)";
LIGHT_COLORS["--color-selection-text"] = "black";
LIGHT_COLORS["--color-selection-background"] =
  LIGHT_COLORS["--color-decorative-700"];
LIGHT_COLORS["--color-backdrop"] = LIGHT_COLORS["--color-decorative-100"];
LIGHT_COLORS["--color-backdrop-highlight"] =
  LIGHT_COLORS["--color-decorative-300"];
LIGHT_COLORS["--color-page-background"] =
  LIGHT_COLORS["--color-decorative-100"];
LIGHT_COLORS["--color-page-border"] = "transparent";
LIGHT_COLORS["--color-card-background"] = LIGHT_COLORS["--color-gray-0"];
LIGHT_COLORS["--color-card-border"] = "transparent";

DARK_COLORS["--color-primary"] = DARK_COLORS["--color-primary-500"];
DARK_COLORS["--color-secondary"] = DARK_COLORS["--color-secondary-500"];
DARK_COLORS["--color-inline-code-bg"] = "hsl(212 30% 22%)";
DARK_COLORS["--color-selection-text"] = "white";
DARK_COLORS["--color-selection-background"] = "hsl(212 100% 30%)";
DARK_COLORS["--color-backdrop"] = DARK_COLORS["--color-decorative-100"];
DARK_COLORS["--color-backdrop-highlight"] =
  DARK_COLORS["--color-decorative-500"];
DARK_COLORS["--color-page-background"] = "transparent";
DARK_COLORS["--color-page-border"] = "hsl(256 30% 50% / 0.2)";
DARK_COLORS["--color-card-background"] = DARK_COLORS["--color-backdrop"];
DARK_COLORS["--color-card-border"] = DARK_COLORS["--color-page-border"];

export const LIGHT_SHADOWS = {
  "--shadow-page": `
    0px 1px 2px hsl(50 60% 50% / 0.25),
    0px 3px 6px hsl(50 60% 50% / 0.25),
    0px 9px 18px hsl(50 60% 50% / 0.25),
    0px 18px 36px hsl(50 60% 50% / 0.25),
    0px 54px 108px hsl(50 60% 50% / 0.25)
  `,
  "--shadow-card": `
    0px 1px 2px hsl(50 20% 50% / 0.2),
    0px 2px 4px hsl(50 20% 50% / 0.2),
    0px 4px 8px hsl(50 20% 50% / 0.2),
    0px 8px 16px hsl(50 20% 50% / 0.2)
  `,
};
export const DARK_SHADOWS = {
  "--shadow-page": "none",
  "--shadow-card": "none",
};

export const LIGHT_TOKENS = {
  ...LIGHT_COLORS,
  ...LIGHT_SHADOWS,
};

export const DARK_TOKENS = {
  ...DARK_COLORS,
  ...DARK_SHADOWS,
};
