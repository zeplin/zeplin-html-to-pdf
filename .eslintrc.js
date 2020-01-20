module.exports = {
  env: {
      node: true,
  },
  extends: "@zeplin/eslint-config/node",
  rules: {
      "capitalized-comments": "error",
      "arrow-body-style": ["error", "as-needed"],
      "no-process-env": "off",
      "no-undef": "off"
  }
};