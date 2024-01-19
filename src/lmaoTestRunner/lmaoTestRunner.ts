import { compile } from "../main.js";

export const lmaoTestRunner = (title: string, callback: () => boolean) => {
  try {
    if (!callback()) {
      console.error(`🤣❌🧪 - ${title}: Test Fails`);
      return;
    }
    console.log(`🤣✅🧪 - ${title}: Test Passes`);
  } catch (error) {
    console.error(`🤣❌🧪 - ${title}: Test Fails. ${error}`);
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
