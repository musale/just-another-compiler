import AST from "../ast";

export default class Id implements AST {
  constructor(public name: string) {}
  equals(ast: AST): boolean {
    throw new Error("Method not implemented.");
  }
}
