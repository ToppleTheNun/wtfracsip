import { matcherHint, printExpected, printReceived } from "jest-matcher-utils";

import predicate from "./predicate";

const passMessage = (actual, expected) => () =>
  matcherHint(".not.toContainObject") +
  "\n\n" +
  `Expected array to not include:\n` +
  `  ${printExpected(expected)}\n` +
  "Received:\n" +
  `  ${printReceived(actual)}`;

const failMessage = (actual, expected) => () =>
  matcherHint(".toContainObject") +
  "\n\n" +
  `Expected array to include:\n` +
  `  ${printExpected(expected)}\n` +
  "Received:\n" +
  `  ${printReceived(actual)}`;

export default {
  toContainObject: (actual, expected) => {
    const pass = predicate(actual, expected);
    if (pass) {
      return { pass: true, message: passMessage(actual, expected) };
    }
    return { pass: false, message: failMessage(actual, expected) };
  }
};
