import { type TokenType } from "./types.js";

export const tokenMap: Record<string, TokenType> = {
  "🤣": "HTML",
  "💀": "💀",
  "🪬": "BODY",
  "🫦": "H1",
  "📦": "DIV",
  "🤪": "SPAN",
  "💬": "PARAGRAPH",
  "📃": "ORDERED_LIST",
  "🎲": "UNORDERED_LIST",
  "👂": "LIST_ITEM",
  "🤓": "ARTICLE",
  ERROR: "ERROR",
  TEXT: "TEXT",
};
