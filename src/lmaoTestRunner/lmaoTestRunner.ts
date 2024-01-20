import Compiler from "../Compiler.js";
import lexer from "../lexer.js";

const testCompiler = new Compiler(lexer);

export const lmaoTestRunner = (title: string, callback: () => boolean) => {
  try {
    if (!callback()) {
      console.error(`🤣❌🧪 - ${title}`);
      return;
    }
    console.log(`🤣✅🧪 - ${title}`);
  } catch (error) {
    console.error(`🤣❌🧪 - ${title} ${error}`);
  }
};

export const compilerTest = (
  codeToCompile: string,
  expectedCompiledCode: string
) => {
  const actualCompiledCode = testCompiler.compile(codeToCompile);

  if (expectedCompiledCode === actualCompiledCode) {
    return true;
  } else {
    return false;
  }
};
