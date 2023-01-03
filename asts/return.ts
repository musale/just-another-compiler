import AST from "../ast";

export default class Return implements AST {
  constructor(public term: AST) {}
  equals(ast: AST): boolean {
    throw new Error("Method not implemented.");
  }
}
