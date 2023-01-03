import AST from "../ast";

export default class Assignment implements AST {
  constructor(name: string, value: AST) {}
  equals(ast: AST): boolean {
    throw new Error("Method not implemented.");
  }
}
