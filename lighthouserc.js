module.exports = {
  ci: {
    collect: {
      url: [
        "http://localhost:4000",
        "https://gentle-lowlands-17553.herokuapp.com",
      ],
      startServerCommand: "yarn prod",
      numberOfRuns: 1,
    },
    upload: {
      target: "temporary-public-storage",
    },
    assert: {
      preset: "lighthouse:recommended",
    },
  },
};
