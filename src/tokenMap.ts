import { type TokenType } from "./types.js";

export const tokenMap: Record<string, TokenType> = {
  "🤣": "HTML",
  "💀": "💀",
  "🪬": "BODY",
  "🫦": "H1",
  "📦": "DIV",
  "🤪": "SPAN",
  "💬": "PARAGRAPH",
  ERROR: "ERROR",
  TEXT: "TEXT",
};
