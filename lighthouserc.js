module.exports = {
  ci: {
    collect: {
      staticDistDir: "./packages/lh-app/public",
    },
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      preset: "lighthouse:recommended",
    },
  },
};
