import {
  isClosingTag,
  isEmoji,
  isLegalEmoji,
  isShallNotBeNamed,
} from "./checkers.js";
import { tokenMap } from "./tokenMap.js";
import { Token } from "./types.js";
import { red } from "./utils/consoleColors.js";

const lexer = (lmaoCode: string): Token[] => {
  const tokens: Token[] = [];
  let tempString = "";
  let lastTokenWasModifier = false;

  for (const char of lmaoCode) {
    let token: Token;
    if (isEmoji(char)) {
      if (isClosingTag(char)) {
        lastTokenWasModifier = true;
        continue;
      }

      if (isLegalEmoji(char)) {
        if (lastTokenWasModifier) {
          // @ts-ignore
          token = { type: `CLOSE_${tokenMap[char]}`, value: char };
          lastTokenWasModifier = false;
          tokens.push(token);
          continue;
        }
        token = { type: tokenMap[char], value: char };
        tokens.push(token);
        continue;
      } else {
        token = { type: tokenMap.ERROR, value: char };
        tokens.push(token);
      }
    } else if (!isEmoji(char)) {
      tempString += char;
      if (isShallNotBeNamed(tempString)) {
        console.log(
          red,
          "😨😱💀YOU😨😱💀WERE😨😱💀TOLD😨😱💀NOT😨😱💀TO😨😱💀NAME😨😱💀HIM!!!!"
        );
        process.exit(0);
      }
      token = { type: tokenMap.TEXT, value: char };
      tokens.push(token);
    }
  }

  return tokens;
};

export default lexer;
