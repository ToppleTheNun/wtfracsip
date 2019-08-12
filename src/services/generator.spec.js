import { generateRolesForThrees, generateRolesForFives } from "./generator";
import {
  top as threesTop,
  jungle as threesJungle,
  bottom as threesBottom
} from "../constants/roles-3s";
import {
  top as fivesTop,
  jungle as fivesJungle,
  middle as fivesMiddle,
  bottom as fivesBottom,
  support as fivesSupport
} from "../constants/roles-5s";

describe("generateRolesForThrees", () => {
  it("returns an array", () => {
    expect(generateRolesForThrees(0))
      .toBeDefined()
      .toBeArray();
  });

  it("returns an array with size pinned between 0 and 3", () => {
    expect(generateRolesForThrees(-1)).toBeArrayOfSize(0);
    expect(generateRolesForThrees(0)).toBeArrayOfSize(0);
    expect(generateRolesForThrees(1)).toBeArrayOfSize(1);
    expect(generateRolesForThrees(2)).toBeArrayOfSize(2);
    expect(generateRolesForThrees(3)).toBeArrayOfSize(3);
    expect(generateRolesForThrees(4)).toBeArrayOfSize(3);
  });

  describe("size 1", () => {
    it("returns an array with one object with role of top, jungle, or bottom", () => {
      expect(generateRolesForThrees(1)).toContainAnyObject([
        { role: threesTop },
        { role: threesJungle },
        { role: threesBottom }
      ]);
    });
  });
});

describe("generateRolesForFives", () => {
  it("returns an array", () => {
    expect(generateRolesForFives(0))
      .toBeDefined()
      .toBeArray();
  });

  it("returns an array with size pinned between 0 and 5", () => {
    expect(generateRolesForFives(-1)).toBeArrayOfSize(0);
    expect(generateRolesForFives(0)).toBeArrayOfSize(0);
    expect(generateRolesForFives(1)).toBeArrayOfSize(1);
    expect(generateRolesForFives(2)).toBeArrayOfSize(2);
    expect(generateRolesForFives(3)).toBeArrayOfSize(3);
    expect(generateRolesForFives(4)).toBeArrayOfSize(4);
    expect(generateRolesForFives(5)).toBeArrayOfSize(5);
    expect(generateRolesForFives(6)).toBeArrayOfSize(5);
  });

  describe("size 1", () => {
    it("returns an array with one object with role of top, jungle, or bottom", () => {
      expect(generateRolesForFives(1)).toContainAnyObject([
        { role: fivesTop },
        { role: fivesJungle },
        { role: fivesMiddle },
        { role: fivesBottom },
        { role: fivesSupport }
      ]);
    });
  });
});
