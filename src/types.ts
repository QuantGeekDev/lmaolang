export type TokenType =
  | "HTML"
  | "💀"
  | "BODY"
  | "H1"
  | "TEXT"
  | "VOLDEMORT"
  | "ERROR"
  | "CLOSE_HTML"
  | "CLOSE_H1"
  | "DIV"
  | "CLOSE_DIV"
  | "CLOSE_BODY"
  | "SPAN"
  | "CLOSE_SPAN"
  | "PARAGRAPH"
  | "CLOSE_PARAGRAPH"
  | "UNORDERED_LIST"
  | "CLOSE_UNORDERED_LIST"
  | "ORDERED_LIST"
  | "CLOSE_ORDERED_LIST"
  | "LIST_ITEM"
  | "CLOSE_LIST_ITEM";

export interface Token {
  type: TokenType;
  value: string;
}
