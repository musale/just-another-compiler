import AST from "../ast";

export default class Block implements AST {
  constructor(public statements: Array<AST>) {}
  equals(ast: AST): boolean {
    throw new Error("Method not implemented.");
  }
}
