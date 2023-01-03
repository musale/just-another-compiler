import AST from "../ast";

export default class Equals implements AST {
  constructor(public left: AST, public right: AST) {}
  equals(ast: AST): boolean {
    throw new Error("Method not implemented.");
  }
}
