import { tokenMap } from "./tokenMap.js";
import { type Token } from "./types.js";
import { isClosingTag, isEmoji, isShallNotBeNamed } from "./checkers.js";

const red = "\x1b[31m%s\x1b[0m";

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

      if (lastTokenWasModifier) {
        token = { type: `CLOSE_${tokenMap[char]}`, value: char };
        lastTokenWasModifier = false;
        tokens.push(token);
        continue;
      }

      if (tokenMap[char]) {
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

const codeGenerator = (tokens: Token[]): string => {
  let html = "";

  tokens.forEach((token) => {
    const { type } = token;
    switch (type) {
      case "💀":
        html += "</html>";
        break;
      case "HTML":
        html += "<html>";
        break;
      case "BODY":
        html += "<body>";
        break;
      case "H1":
        html += "<h1>";
        break;
      case "TEXT":
        html += token.value;
        break;
      case "ERROR":
        console.log(red, `🤣❌ - Invalid emoji detected😱😨: ${token.value}`);
        break;
      default:
        console.log(
          red,
          `🤣❌ - s😨O😨m😨E😨t😨I😨n😨G unexpected happened 💅 : ${token.value}`
        );
    }
  });

  return html;
};

export const compile = (input: string): string => {
  const tokens = lexer(input);
  return codeGenerator(tokens);
};

const lmaoLangCode = "🤣Hello World💀 voldemort";

const compiledLmao = compile(lmaoLangCode);

console.log("🤣Here👏is👏your👏Lmao👏code💃:\n\n", compiledLmao, "\n\n");
