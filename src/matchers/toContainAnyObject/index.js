import { matcherHint, printExpected, printReceived } from "jest-matcher-utils";

import predicate from "./predicate";

const passMessage = (actual, expected) => () =>
  matcherHint(".not.toContainAnyObject") +
  "\n\n" +
  `Expected array to not include any of:\n` +
  `  ${printExpected(expected)}\n` +
  "Received:\n" +
  `  ${printReceived(actual)}`;

const failMessage = (actual, expected) => () =>
  matcherHint(".toContainAnyObject") +
  "\n\n" +
  `Expected array to include any of:\n` +
  `  ${printExpected(expected)}\n` +
  "Received:\n" +
  `  ${printReceived(actual)}`;

export default {
  toContainAnyObject: (actual, expected) => {
    const pass = predicate(actual, expected);
    if (pass) {
      return { pass: true, message: passMessage(actual, expected) };
    }
    return { pass: false, message: failMessage(actual, expected) };
  }
};
