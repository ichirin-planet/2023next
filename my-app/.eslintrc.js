module.exports = {
  extends: ["next", "next/core-web-vitals", "prettier","eslint:recommended", "plugin:@typescript-eslint/recommended",],
  plugins: ["import", "unused-imports"],
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error", 
    "import/order": [
      "error",
      {
        alphabetize: { order: "asc", caseInsensitive: true },
        groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
        "newlines-between": "always",
        pathGroupsExcludedImportTypes: ["builtin"],
        pathGroups: [
          { pattern: "*.css", group: "type", position: "after" },
        ],
      }
    ]
  },
}
