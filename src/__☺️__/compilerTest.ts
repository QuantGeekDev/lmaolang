import { compile } from "../main.js";
import { lmaoTestRunner } from "../lmaoTestRunner/lmaoTestRunner.js";

const compilerTest = (codeToCompile: string, expectedCompiledCode: string) => {
  const actualCompiledCode = compile(codeToCompile);

  if (expectedCompiledCode === actualCompiledCode) {
    return true;
  } else {
    return false;
  }
};

const lmaoCode = "🤣🪬🫦Hello World💀🫦💀🪬💀🤣";

const expectedHtml = `<html><body><h1>Hello World</h1></body></html>`;

lmaoTestRunner("🤣🪬🫦Hello World💀🫦💀🪬 💀🤣", () =>
  compilerTest(lmaoCode, expectedHtml)
);
