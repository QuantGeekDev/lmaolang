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
