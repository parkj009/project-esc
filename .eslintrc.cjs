module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "eslint:recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react"],
  // Adding rules to ignore react-three-fiber jsx props
  rules: {
    "react/no-unknown-property": ["error", { ignore: ["args"] }],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
