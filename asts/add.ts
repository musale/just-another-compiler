import AST from "../ast";

export default class Add implements AST {
  constructor(public left: AST, public right: AST) {}
  equals(ast: AST): boolean {
    throw new Error("Method not implemented.");
  }
}
