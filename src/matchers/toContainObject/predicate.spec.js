import predicate from "./predicate";

const data = [{ type: "a" }, { type: "b" }, { type: "c" }];

describe(".toContainObject", () => {
  it("passes when array contains object", () => {
    expect(predicate(data, { type: "b" })).toBe(true);
  });

  it("fails when array does not contain object", () => {
    expect(predicate(data, { type: "d" })).toBe(false);
  });
});
