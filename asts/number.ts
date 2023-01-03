import AST from "../ast";

export default class Number implements AST {
  constructor(public value: number) {}
  equals(ast: AST): boolean {
    throw new Error("Method not implemented.");
  }
}
