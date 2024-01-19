import {
  lmaoTestRunner,
  compilerTest,
} from "../lmaoTestRunner/lmaoTestRunner.js";

// Hello World Test
const lmaoCode = "🤣🪬🫦Hello World💀🫦💀🪬💀🤣";
const expectedHtml = `<html><body><h1>Hello World</h1></body></html>`;
lmaoTestRunner("Hello World", () => compilerTest(lmaoCode, expectedHtml));

// Div Test
const divLmao = "📦I am a div💀📦";
const expectedDivHtml = "<div>I am a div</div>";
lmaoTestRunner("Div Test", () => compilerTest(divLmao, expectedDivHtml));
