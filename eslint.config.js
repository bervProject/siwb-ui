const { globalIgnores } = require("eslint/config");
const globals = require("globals");
const pluginVue = require("eslint-plugin-vue");
const pluginPrettier = require("eslint-config-prettier");
const {
  defineConfigWithVueTs,
  vueTsConfigs,
} = require("@vue/eslint-config-typescript");

module.exports = defineConfigWithVueTs(
  globalIgnores([".yarn/*"]),
  ...pluginVue.configs["flat/recommended"],
  vueTsConfigs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },

      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "vue/multi-word-component-names": "warn",
      "@typescript-eslint/no-require-imports": "warn",
      "@typescript-eslint/no-namespace": "warn"
    },
  },
  {
    files: ["**/__tests__/*.{j,t}s?(x)", "**/tests/unit/**/*.spec.{j,t}s?(x)"],

    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
  pluginPrettier,
);
