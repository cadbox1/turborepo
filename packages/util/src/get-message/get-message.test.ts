import { describe, expect, test } from "@jest/globals";
import { getMessage } from "./get-message";

describe("get-message", () => {
  test("message is correct", () => {
    expect(getMessage()).toBe("2 + 2 = 4");
  });
});
