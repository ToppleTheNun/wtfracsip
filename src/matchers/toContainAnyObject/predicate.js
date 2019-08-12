import toContainObject from "../toContainObject/predicate";

export default (received, argument) =>
  Array.isArray(received) &&
  Array.isArray(argument) &&
  argument.some(object => toContainObject(received, object));
