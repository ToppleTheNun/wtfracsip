import predicate from "./predicate";

const data = [{ type: "a" }];

describe(".toContainAnyObject", () => {
  it("passes when array contains object(s)", () => {
    expect(predicate(data, [{ type: "a" }, { type: "b" }, { type: "c" }])).toBe(
      true
    );
  });

  it("fails when array does not contain object(s)", () => {
    expect(predicate(data, [{ type: "b" }, { type: "c" }, { type: "d" }])).toBe(
      false
    );
  });
});
