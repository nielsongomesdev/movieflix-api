import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
    { ignores: ["dist", "node_modules"] },
    js.configs.recommended,
    ...tseslint.configs.recommended,
    {
        languageOptions: {
            globals: globals.node,
        },
        rules: {
            "indent": ["error", 4],
            "linebreak-style": ["error", "windows"],
            "quotes": ["error", "double"],
            "semi": ["error", "always"],
        },
    }
);
