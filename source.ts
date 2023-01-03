import ParseResult from "./parseResult";

export default class Source {
  constructor(public string: string, public index: number) {}
  match(regexp: RegExp): ParseResult<string> | null {
    console.assert(regexp.sticky);
    regexp.lastIndex = this.index;
    let match = this.string.match(regexp);
    if (match) {
      let value = match[0];
      let newIndex = this.index + value.length;
      let source = new Source(this.string, newIndex);
      return new ParseResult(value, source);
    }
    return null;
  }
}
