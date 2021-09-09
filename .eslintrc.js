module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "@babel/eslint-parser",
    requireConfigFile: false
  },
  extends: ["@nuxtjs", "plugin:nuxt/recommended"],
  plugins: [],
  // add your custom rules here
  rules: {
    indent: ["error", 2],
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "comma-dangle": ["error", "only-multiline"]
  }
};
