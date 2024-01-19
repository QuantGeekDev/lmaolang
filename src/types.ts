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
  | "CLOSE_SPAN";

export interface Token {
  type: TokenType;
  value: string;
}
