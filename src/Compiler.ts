import { Token } from "./types.js";
import { red } from "./utils/consoleColors.js";

class Compiler {
  constructor(public lexer: (lmaoCode: string) => Token[]) {}
  parseTokens = (tokens: Token[]): string => {
    let html = "";

    tokens.forEach((token) => {
      const { type } = token;
      switch (type) {
        case "HTML":
          html += "<html>";
          break;
        case "CLOSE_HTML":
          html += "</html>";
          break;
        case "BODY":
          html += "<body>";
          break;
        case "CLOSE_BODY":
          html += "</body>";
          break;
        case "H1":
          html += "<h1>";
          break;
        case "CLOSE_H1":
          html += "</h1>";
          break;
        case "DIV":
          html += "<div>";
          break;
        case "CLOSE_DIV":
          html += "</div>";
          break;
        case "SPAN":
          html += "<span>";
          break;
        case "CLOSE_SPAN":
          html += "</span>";
          break;
        case "PARAGRAPH":
          html += "<p>";
          break;
        case "LIST_ITEM":
          html += "<li>";
          break;
        case "CLOSE_LIST_ITEM":
          html += "</li>";
          break;
        case "UNORDERED_LIST":
          html += "<ul>";
          break;
        case "ARTICLE":
          html += "<article>";
          break;
        case "CLOSE_ARTICLE":
          html += "</article>";
          break;
        case "CLOSE_UNORDERED_LIST":
          html += "</ul>";
          break;
        case "ORDERED_LIST":
          html += "<ol>";
          break;
        case "CLOSE_ORDERED_LIST":
          html += "</ol>";
          break;
        case "CLOSE_PARAGRAPH":
          html += "</p>";
          break;
        case "TEXT":
          html += token.value;
          break;
        case "ERROR":
          console.log(
            red,
            `🤣❌ - Invalid emoji detected💅😱😨: ${token.value}`
          );
          break;
        default:
          console.log(
            red,
            `🤣❌ - s😨O😨m😨E😨t😨H😨i😨N😨g unexpected happened 💅 : ${token.value}`
          );
      }
    });

    return html;
  };

  compile = (input: string): string => {
    const tokens = this.lexer(input);
    return this.parseTokens(tokens);
  };
}

export default Compiler;
