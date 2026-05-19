module.exports = {
  default: {
    paths: ["frontend/features/**/*.feature"],
    require: [
      "frontend/steps/hooks.js",
      "frontend/steps/catalogSteps.js",
      "frontend/steps/favoriterSteps.js",
      "frontend/steps/statistikSteps.js",
    ],
    publishQuiet: true,
  },
};
