import AST from "../ast";

export default class Var implements AST {
  constructor(public name: string, public value: AST) {}
  equals(ast: AST): boolean {
    throw new Error("Method not implemented.");
  }
}
