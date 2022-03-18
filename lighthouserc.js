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
    assertions: {
      "categories:performance": ["warn", { minScore: 0.8 }],
      "categories:accessibility": ["warn", { minScore: 0.8 }],
      "categories:best-practices": ["warn", { minScore: 0.8 }],
    },
    settings: {
      onlyCategories: ["performance", "best-practices", "accessibility"],
    },
  },
};
