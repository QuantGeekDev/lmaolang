import {
  isClosingTag,
  isEscape,
  isEmoji,
  isLegalEmoji,
  isShallNotBeNamed,
} from "./checkers.js";
import { tokenMap } from "./tokenMap.js";
import { Token } from "./types.js";
import { red } from "./utils/consoleColors.js";

type ModifierType = "closing-tag" | "escape"

const lexer = (lmaoCode: string): Token[] => {
  const tokens: Token[] = [];
  let tempString = "";
  let lastTokenWasModifier: false | ModifierType = false;

  for (const char of lmaoCode) {
    let token: Token;
    if (isEmoji(char)) {
      if (lastTokenWasModifier !== "escape") {
        if (isClosingTag(char)) {
          lastTokenWasModifier = "closing-tag";
          continue;
        } else if (isEscape(char)) {
          lastTokenWasModifier = "escape";
          continue;
        }
      }

      if (isLegalEmoji(char)) {
        if (lastTokenWasModifier === "escape") {
          token = { type: tokenMap.TEXT, value: char };
          lastTokenWasModifier = false;
          tokens.push(token);
          continue;
        } else if (lastTokenWasModifier === "closing-tag") {
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
        lastTokenWasModifier = false;
        token = { type: tokenMap.ERROR, value: char };
        tokens.push(token);
      }
    } else {
      tempString += char;
      if (isShallNotBeNamed(tempString)) {
        console.log(
          red,
          "😨😱💀YOU😨😱💀WERE😨😱💀TOLD😨😱💀NOT😨😱💀TO😨😱💀NAME😨😱💀HIM!!!!"
        );
        process.exit(0);
      }

      lastTokenWasModifier = false;
      token = { type: tokenMap.TEXT, value: char };
      tokens.push(token);
    }
  }

  return tokens;
};

export default lexer;
