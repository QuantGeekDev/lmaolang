import { tokenMap } from "./tokenMap.js";
import { type Token } from "./types.js";

const red = "\x1b[31m%s\x1b[0m";

const lexer = (lmaoCode: string): Token[] => {
  const tokens: Token[] = [];

  for (const char of lmaoCode) {
    if (!tokenMap[char]) {
      console.log(red, `🤣❌ - Invalid emoji detected😱😨: ${char}`);
    }

    const token: Token = { type: tokenMap[char], value: char };

    tokens.push(token);
  }

  return tokens;
};

const codeGenerator = (tokens: Token[]): string => {
  let html = "";

  tokens.forEach((token) => {
    switch (token.type) {
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
      default:
    }
  });

  return html;
};

const compile = (input: string): string => {
  const tokens = lexer(input);
  return codeGenerator(tokens);
};

const lmaoLangCode = "🤣💀";

const htmlOutput = compile(lmaoLangCode);

console.log("🤣 Here is you Lmao code:", htmlOutput);
