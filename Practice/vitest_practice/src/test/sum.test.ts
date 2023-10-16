import { test, expect, describe } from "@jest/globals";
import { sum } from "../components/ReactJest";

describe("sum", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
