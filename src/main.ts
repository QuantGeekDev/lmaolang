import { tokenMap } from "./tokenMap.js";
import { type Token } from "./types.js";

const red = "\x1b[31m%s\x1b[0m";

const isEmoji = (char: string) => {
  const emojiRegex =
    /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
  return emojiRegex.test(char);
};

const lexer = (lmaoCode: string): Token[] => {
  const tokens: Token[] = [];

  for (const char of lmaoCode) {
    let token: Token;
    if (isEmoji(char)) {
      if (tokenMap[char]) {
        token = { type: tokenMap[char], value: char };
        tokens.push(token);
        continue;
      } else {
        token = { type: tokenMap.ERROR, value: char };
        tokens.push(token);
      }
    } else if (!isEmoji(char)) {
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
    }
  });

  return html;
};

const compile = (input: string): string => {
  const tokens = lexer(input);
  return codeGenerator(tokens);
};

const lmaoLangCode = "🤣🐈Hi💀";

const htmlOutput = compile(lmaoLangCode);

console.log("🤣Here👏is👏your👏Lmao👏code💃:\n\n", htmlOutput, "\n\n");
