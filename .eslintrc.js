module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "next/core-web-vitals",
  ],
  rules: {
    // TypeScript warnings
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/explicit-function-return-type": "warn",

    // React warnings
    "react-hooks/exhaustive-deps": "warn",
    "react/no-unescaped-entities": "warn",

    // General JS warnings
    "no-console": "warn",
    "no-debugger": "warn",
  },
};
