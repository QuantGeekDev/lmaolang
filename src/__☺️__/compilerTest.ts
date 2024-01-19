import { compile } from "../main.js";

const testLmaoCode = "🤣Hello World💀";

const actualCompiledCode = compile(testLmaoCode);

const expectedCompiledCode = `<html>Hello World</html>`;

if (expectedCompiledCode === actualCompiledCode) {
  console.log("🤣✅🧪 - Test Passes");
} else {
  console.log(
    "🤣❌🧪" +
      ` - Test Fails. Expected compiled code: ${expectedCompiledCode}\n 
    Actual compiled code: ${actualCompiledCode}`
  );
}
