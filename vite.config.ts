import react from "@vitejs/plugin-react";
import { BuildOptions, defineConfig, Plugin } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import { MagicString } from "@napi-rs/magic-string";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

function loadTextFile(): Plugin {
  return {
    name: "plain text",
    transform(code, id) {
      // loading files that endWiths '.scss.ast' and '.md'
      if (id.endsWith(".scss.ast") || id.endsWith(".md")) {
        const magicString = new MagicString(code);

        // transform the code
        const transformed = `const plainText = ${JSON.stringify(
          code
        )}; export default plainText;`;
        magicString.overwrite(0, code.length, transformed);

        const sourcemap = this.getCombinedSourcemap();
        return {
          code: transformed,
          map: magicString
            .generateMap({
              file: sourcemap.file,
              source: sourcemap.sources[0],
              includeContent: true,
            })
            .toMap(),
        };
      }

      // no processing
      return undefined;
    },
  };
}

const defineDocsBuild: BuildOptions = {
  target: "modules",
  sourcemap: false,
  minify: true,
  outDir: "dist",
};

const defineLibBuild: BuildOptions = {
  //target: "modules",
  sourcemap: true,
  minify: false,
  lib: {
    entry: "src/lib/index.ts",
    formats: ["es", "cjs"],
    fileName: (format: any) => `index.${format}.js`,
  },
  outDir: "lib",
  rollupOptions: {
    external: (id: any) => {
      switch (id) {
        case "react":
        case "react-dom":
        case "react/jsx-runtime":
          return true;
      }

      if (/src\/lib\/generator\/.*/.test(id)) return true;
      if (/src\/app\/.*/.test(id)) return true;
      if (/src\/docs\/.*/.test(id)) return true;

      //console.log(`external: ${id}`);
      return false;
    },
    output: {
      globals: {
        react: "React",
        "react-dom": "React-dom",
        "react/jsx-runtime": "react/jsx-runtime",
      },
    },
  },
};

// https://vitejs.dev/config/
export default (params: any) => {
  let { mode } = params;
  const env = {} as any;

  // landing page build mode
  const BUILT_ENV = process.env.BUILT_ENV || "";
  // print some output for the current environment
  console.log(
    `\n=========================\n    NODE_ENV=${process.env.NODE_ENV}\n    BUILT_ENV=${BUILT_ENV}\n=========================\n`
  );

  return defineConfig({
    plugins: [
      react(),
      svgr({
        include: "**/*.svg",
        svgrOptions: {
          exportType: "default",
        },
      }),
      loadTextFile(),
      tsconfigPaths(),
      dts({
        insertTypesEntry: true,
        rollupTypes: true,
        tsconfigPath: resolve(__dirname, "tsconfig.lib.json"),
      }),
    ],
    build: BUILT_ENV == "docs" ? defineDocsBuild : defineLibBuild,
  });
};
