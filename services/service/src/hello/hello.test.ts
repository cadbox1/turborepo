import { describe, expect, test } from "@jest/globals";
import { hello } from "./hello";

describe("hello", () => {
  test("hello output is correct", () => {
    expect(hello()).toBe("hello 2 + 2 = 4");
  });
});
