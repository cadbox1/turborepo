import { sum } from "../sum";

export function getMessage(): string {
  return `2 + 2 = ${sum(2, 2)}`;
}
