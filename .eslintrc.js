const prettierConfig = require("./prettier.config");

module.exports = {
  parser: "babel-eslint",
  env: {
    node: true,
    es6: true
  },
  plugins: ["prettier", "jest"],
  extends: ["unobtrusive", "unobtrusive/import", "prettier"],
  rules: {
    "prettier/prettier": ["error", prettierConfig],
    "no-debugger": "error",
    "import/no-unresolved": "error",
    "import/no-commonjs": "off",
    "import/order": "warn"
  },
  overrides: [
    {
      // Rules only applied to test files
      files: ["test/**/*.js"],

      // Allow jest globals: jest, expect, it, test, etc.
      env: {
        "jest/globals": true
      },

      // Include globals from the test helper by default from jest.config.js
      globals: {
        expectedExports: true
      },

      // Rules for jest tests
      // https://github.com/jest-community/eslint-plugin-jest
      //
      // * Disallow disabled tests
      // * Disallow focused tests
      // * Do not repeat test case names
      // * Do not import "jest"
      // * Prefer toBeNull, toBeUndefined, and toHaveLength instead of toBe(xxx)
      // * Disallow invalid "describe" callbacks"
      // * Disallow malformed expects
      //
      rules: {
        "jest/no-disabled-tests": "error",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/no-jest-import": "error",
        "jest/no-test-return-statement": "error",
        "jest/prefer-to-be-null": "warn",
        "jest/prefer-to-be-undefined": "warn",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-describe": "error",
        "jest/valid-expect": "error"
      }
    }
  ]
};
