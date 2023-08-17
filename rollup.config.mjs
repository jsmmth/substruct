import peerDepsExternal from "rollup-plugin-peer-deps-external";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import postcssPresetEnv from "postcss-preset-env";
import autoprefixer from "autoprefixer";
import terser from "@rollup/plugin-terser";
import path from "path";
import dts from "rollup-plugin-dts";
import del from "rollup-plugin-delete";

const extensions = [".js", ".jsx", ".ts", ".tsx"];
const globals = {
  react: "React",
  "react-dom": "ReactDOM",
};

export default [
  {
    input: ["./src/index.ts"],
    output: [
      {
        file: "./dist/index.esm.js",
        format: "esm",
        globals,
      },
      {
        file: "./dist/index.cjs.js",
        format: "cjs",
        globals,
      },
    ],
    plugins: [
      peerDepsExternal(),
      nodeResolve({ extensions, browser: true }),
      commonjs(),
      typescript(),
      postcss({
        plugins: [postcssPresetEnv(), autoprefixer()],
        modules: {
          // @ts-ignore
          generateScopedName: (name, _, _) => {
            // var i = css.indexOf("." + name);
            // var line = css.substr(0, i).split(/[\r\n]/).length;
            // var file = path.basename(filename, ".module.css");
            return "sbstrut-ui_" + name;
          },
        },
        extract: "css/styles.css",
        extensions: [".css"],
        minimize: true,
        sourceMap: false,
      }),
      terser(),
    ],
  },
  {
    input: "./dist/dts/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [
      dts({}),
      del({ hook: "buildEnd", targets: "./dist/dts", runOnce: true }),
    ],
  },
];
