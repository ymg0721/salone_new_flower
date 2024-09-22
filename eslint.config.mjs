import process from "node:process";
import antfu from "@antfu/eslint-config";

export default antfu(
  {
    extends: ["@nuxt/eslint-config"],
    ignores: [
      "src/api/**/*.ts",
      "*.yml",
      "**/*.yml/**",
      "ios/**",
      "android/**",
      "dist/**",
      ".output/**",
      "node_modules/**",
    ],
    formatters: true,
    unocss: true,
    typescript: true,
    vue: {
      overrides: {
        "vue/block-order": [
          "error",
          {
            order: [
              ["script:not([setup])", "script[setup]"],
              "template",
              "i18n",
              "style",
            ],
          },
        ],
      },
    },
  },
  {
    files: ["**/*.json"],
    rules: {
      "no-unused-expressions": "off",
    },
  },
  {
    rules: {
      "antfu/top-level-function": "off",
      "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
      curly: ["error", "all"],
      "style/brace-style": ["error", "1tbs"],
      "unicorn/prefer-number-properties": "off", // 機能上 isNaN は許す
      "unicorn/prefer-node-protocol": "off", // client で process が使われているため許可 （node:不要）
      // 'vue/no-deprecated-slot-attribute': 'off', // ionic で slot が使われているため許可
    },
  },
);
