import Compiler from "./Compiler.js";
import { red, green } from "./utils/consoleColors.js";
import { readFile, writeFile } from "fs/promises";
import lexer from "./lexer.js";

const compiler = new Compiler(lexer);

const pathToLmaoCodeFile = "./src/♥️.lmao";

let lmaoLangCode = "";

try {
  lmaoLangCode = await readFile(pathToLmaoCodeFile, "utf8");
} catch (error) {
  console.error(red, error);
}

if (!lmaoLangCode) {
  console.log(
    red,
    `Unable to read lmao from ♥️.lmao, please check if file exists at ${pathToLmaoCodeFile}`
  );
}

const compiledHtml = compiler.compile(lmaoLangCode);

console.log(
  green,
  "\nHuge slay 👁️ 🫦 👁️\n\n🤣Here👏is👏your👏html👏code😉💃:\n\n",
  compiledHtml
);

const pathToTargetDirectory = "./dist/index.html";

await writeFile(pathToTargetDirectory, compiledHtml);
