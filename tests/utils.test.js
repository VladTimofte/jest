import {
  add,
  greet,
  multiply,
  createProductObject,
  updateLocalStorage,
} from "../utils/utils.js";

describe("Utils functions", () => {
  test("should greet the user with it's name", () => {
    expect(greet("Alice")).toMatch("Hello, Alice!");

    expect(greet("Alice")).toBeTruthy();
    expect(greet("Alice")).not.toBeFalsy();
    expect(greet("Alice")).not.toBeNull();
    expect(greet("Alice")).not.toBeUndefined();
  });

  test("should add two numbers corectly",)
});
