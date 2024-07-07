import { getMessage } from "@cadell/util";

export function hello(): string {
  return `hello ${getMessage()}, I have updated the message`;
}

console.log(hello());
