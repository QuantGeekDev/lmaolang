import { compile } from "../main.js";

const compilerTest = (codeToCompile: string, expectedCompiledCode: string) => {
  const actualCompiledCode = compile(codeToCompile);

  if (expectedCompiledCode === actualCompiledCode) {
    console.log("🤣✅🧪 - Test Passes");
  } else {
    console.log(
      "🤣❌🧪" +
        ` - Test Fails. Expected compiled code: ${expectedCompiledCode}\n 
      Actual compiled code: ${actualCompiledCode}`
    );
  }
};

const lmaoCode = "🤣🪬🫦Hello World💀🫦💀🪬💀🤣";

const expectedHtml = `<html><body><h1>Hello World</h1></body></html>`;

compilerTest(lmaoCode, expectedHtml);
