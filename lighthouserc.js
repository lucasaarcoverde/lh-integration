module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:4000"],
      startServerCommand: "yarn prod",
      numberOfRuns: 10,
    },
    upload: {
      target: "lhci",
      serverBaseUrl: "https://gentle-lowlands-17553.herokuapp.com",
      token: "9fdfb396-c6fb-4547-bc85-8be4b01db776",
    },
    assert: {
      preset: "lighthouse:recommended",
    },
  },
};
