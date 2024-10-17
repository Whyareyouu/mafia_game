const { eslint: { react: eslintReactConfig } } = require("@whyareyouu/eslint");
/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...eslintReactConfig,
  rules: {
    ...eslintReactConfig.rules,
    "jsx-a11y/media-has-caption": ["off"],
  }
};