import AST from "../ast";

export default class If implements AST {
  constructor(
    public conditional: AST,
    public consequence: AST,
    public alternative: AST
  ) {}
    equals(ast: AST): boolean {
        throw new Error("Method not implemented.");
    }
}
