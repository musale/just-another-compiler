import ParseResult from "./parseResult";
import Source from "./source";

export interface Parser<T> {
  parse(src: Source): ParseResult<T> | null;
}

export class Parser<T> {
  constructor(public parse: (src: Source) => ParseResult<T> | null) {}

  static regexp(regexp: RegExp): Parser<string> {
    return new Parser((source) => source.match(regexp));
  }

  static constant<U>(value: U): Parser<U> {
    return new Parser((source) => new ParseResult(value, source));
  }

  static error<U>(message: string): Parser<U> {
    return new Parser((source) => {
      throw Error(message);
    });
  }

  or(parser: Parser<T>): Parser<T> {
    return new Parser((source) => {
      let result = this.parse(source);
      if (result) return result;
      else return parser.parse(source);
    });
  }
}
