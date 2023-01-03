import AST from "../ast";

export default class Function implements AST {
  constructor(
    public name: string,
    public parameters: Array<string>,
    public body: AST
  ) {}
  equals(ast: AST): boolean {
    throw new Error("Method not implemented.");
  }
}
