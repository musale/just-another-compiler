import AST from "../ast";

export default class While implements AST {
  constructor(public conditional: AST, public body: AST) {}
  equals(ast: AST): boolean {
    throw new Error("Method not implemented.");
  }
}
