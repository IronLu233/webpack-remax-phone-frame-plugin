// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import commonJS from "@rollup/plugin-commonjs";
import { string } from "rollup-plugin-string";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";

export default {
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "cjs",
  },
  external: ["ejs"],
  plugins: [
    resolve(),
    json(),
    commonJS(),
    string({
      include: "**/*.ejs",
    }),
    babel({ exclude: "node_modules/**", extensions: [".ts"] }),
  ],
};
