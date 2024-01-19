import { compile } from "../main.js";

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
  const actualCompiledCode = compile(codeToCompile);

  if (expectedCompiledCode === actualCompiledCode) {
    return true;
  } else {
    return false;
  }
};
