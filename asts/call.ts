import AST from "../ast";

export default class Call implements AST {
  constructor(public callee: string, public args: Array<AST>) {}
  equals(other: AST) {
    return (
      other instanceof Call &&
      this.callee === other.callee &&
      this.args.length === other.args.length &&
      this.args.every((arg, i) => arg.equals(other.args[i]))
    );
  }
}
