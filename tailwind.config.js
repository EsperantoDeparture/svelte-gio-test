const production = !process.env.ROLLUP_WATCH;
module.exports = {
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production, // disable purge in dev
    whitelistPatterns: [/svelte-/],
    defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
};
