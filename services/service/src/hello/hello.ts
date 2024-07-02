import { getMessage } from "@cadell/util";

export function hello(): string {
  return `hello ${getMessage()}`;
}

console.log(hello());
