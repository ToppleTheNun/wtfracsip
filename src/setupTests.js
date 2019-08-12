import "@testing-library/react/cleanup-after-each";
import "@testing-library/jest-dom/extend-expect";
import "jest-chain";
import "jest-extended";

import toContainObject from "./matchers/toContainObject";
import toContainAnyObject from "./matchers/toContainAnyObject";

expect.extend(toContainObject);
expect.extend(toContainAnyObject);
