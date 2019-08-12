import { matcherHint, printExpected, printReceived } from "jest-matcher-utils";

import predicate from "./predicate";

const passMessage = (actual, expected) => () =>
  matcherHint(".not.toContainAllObject") +
  "\n\n" +
  `Expected array to not include all of:\n` +
  `  ${printExpected(expected)}\n` +
  "Received:\n" +
  `  ${printReceived(actual)}`;

const failMessage = (actual, expected) => () =>
  matcherHint(".toContainAllObject") +
  "\n\n" +
  `Expected array to include all of:\n` +
  `  ${printExpected(expected)}\n` +
  "Received:\n" +
  `  ${printReceived(actual)}`;

export default {
  toContainAllObject: (actual, expected) => {
    const pass = predicate(actual, expected);
    if (pass) {
      return { pass: true, message: passMessage(actual, expected) };
    }
    return { pass: false, message: failMessage(actual, expected) };
  }
};
