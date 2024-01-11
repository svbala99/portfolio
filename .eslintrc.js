module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "react-native/react-native": true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  overrides: [
    {
      files: ["**/*.js", "**/*.jsx"],
    },
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "import", "jsx-a11y"],
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "react/prop-types": ["off"],
    "import/no-unresolved":['off'],
    "no-undef":['off']
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
};
