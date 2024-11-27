import fs from "node:fs";
import path from "node:path";

export const isDirectory = (path) =>
  fs.lstatSync(path) ? fs.lstatSync(path).isDirectory() : false;

function lsDir(root: string) {
  const files: string[] = [];
  function read(p: string) {
    const dir = fs.readdirSync(p);
    for (let file of dir) {
      file = path.resolve(p, file);
      if (isDirectory(file)) {
        read(file);
      } else {
        files.push(file);
      }
    }
  }

  read(root);
  return files;
}

const __dirname = path.resolve();
const files = lsDir(path.resolve(__dirname, `./src/lib/`));

const output = files
  .filter((a) => a.endsWith(".ts") || a.endsWith(".tsx"))
  .map((a) => `"${path.relative(__dirname, a)}"`)
  .filter((a) => !a.includes("src/lib/generator"));

const tsconfig_app_json = fs
  .readFileSync(path.resolve(__dirname, `./tsconfig.app.json`))
  .toString("utf-8")
  .replace(`"include": ["src"]`, `"include": ["src/lib"]`)
  .trim();

// fs.writeFileSync(
//   "tsconfig.lib.json",
//   `${tsconfig_app_json.substring(0, tsconfig_app_json.length - 1)},
//   "files": [
//     ${output.join(",\n")}
//   ]
// }`
// );

fs.writeFileSync("tsconfig.lib.json", tsconfig_app_json);

console.log(`Generate tsconfig.lib.json completed`);
