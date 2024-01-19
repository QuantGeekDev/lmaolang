import {
  lmaoTestRunner,
  compilerTest,
} from "../lmaoTestRunner/lmaoTestRunner.js";

const lmaoCode = "🤣🪬🫦Hello World💀🫦💀🪬💀🤣";
const expectedHtml = `<html><body><h1>Hello World</h1></body></html>`;

lmaoTestRunner("🤣🪬🫦Hello World💀🫦💀🪬 💀🤣", () =>
  compilerTest(lmaoCode, expectedHtml)
);
