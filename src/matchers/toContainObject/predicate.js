import { equals } from "expect/build/jasmineUtils";

export default (received, argument) =>
  equals(received, expect.arrayContaining([expect.objectContaining(argument)]));
