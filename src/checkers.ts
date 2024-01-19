export const isShallNotBeNamed = (tempString: string) => {
  const shallNotBeNamedRegex = /voldemort/i;
  return shallNotBeNamedRegex.test(tempString);
};

export const isEmoji = (char: string) => {
  const emojiRegex =
    /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
  return emojiRegex.test(char);
};

export const isClosingTag = (char: string): boolean => char === "💀";
