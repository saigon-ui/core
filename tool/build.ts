import fs from "node:fs";
import path from "node:path";

const __dirname = path.resolve();
function libDir(pth: string) {
  return path.resolve(__dirname, `./lib/${pth}`);
}

packingLib();
packingIconType();
packingStyle();

function packingLib() {
  // Create CommonJS directory
  fs.mkdirSync(libDir(`/cjs`));
  fs.renameSync(libDir(`index.cjs.js`), libDir(`/cjs/index.js`));
  fs.renameSync(libDir(`index.cjs.js.map`), libDir(`/cjs/index.cjs.js.map`));

  // Create Module directory
  fs.mkdirSync(libDir(`/esm`));
  fs.renameSync(libDir(`index.es.d.ts`), libDir(`/index.d.ts`));
  fs.renameSync(libDir(`index.es.js`), libDir(`/esm/index.js`));
  fs.renameSync(libDir(`index.es.js.map`), libDir(`/esm/index.es.js.map`));
}

function packingIconType() {
  let types = fs.readFileSync(libDir(`/index.d.ts`), "utf-8").split("\n");

  // move all IconType declaration to other file
  const iconType = types.filter((a) =>
    /^export declare const Icon.*: IconType;$/.test(a.trim())
  );
  fs.writeFileSync(
    libDir(`/icons/index.d.ts`),
    `import { FC, SVGAttributes } from "react";
export declare type IconType = FC<SVGAttributes<SVGElement>>;\n` +
      iconType.join("\n"),
    { encoding: "utf8", flag: "w" }
  );

  types = types.filter(
    (a) => !/^export declare const Icon.*: IconType;$/.test(a.trim())
  );
  fs.writeFileSync(
    libDir(`/index.d.ts`),
    types.join("\n").replace(/([\r\n][\r\n][\r\n])+/g, "\n"),
    {
      encoding: "utf8",
      flag: "w",
    }
  );
}

function packingStyle() {
  // Copy css
  fs.cpSync(
    path.resolve(__dirname, "./src/lib/generator/scss/saigon-ui.css"),
    path.resolve(__dirname, `./lib/saigon-ui.css`)
  );

  // Copy scss
  fs.mkdirSync(libDir("scss"));
  fs.cpSync(
    path.resolve(__dirname, "./src/lib/generator/scss/extend-patched.scss"),
    path.resolve(__dirname, `./lib/scss/extend-patched.scss`)
  );
  fs.cpSync(
    path.resolve(__dirname, "./src/lib/generator/scss/utilities-patched.scss"),
    path.resolve(__dirname, `./lib/scss/utilities-patched.scss`)
  );

  // fs.cpSync(
  //   path.resolve(__dirname, `./lib`),
  //   path.resolve(__dirname, `../tmp/lib-core`),
  //   { recursive: true }
  // );
}
