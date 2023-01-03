import AST from "../ast";

export default class Divide implements AST {
  constructor(public numerator: AST, public denominator: AST) {}
  equals(ast: AST): boolean {
    throw new Error("Method not implemented.");
  }
}
