import Source from "./source";

export default class ParseResult<T> {
  constructor(public value: T, public source: Source) {}
}
