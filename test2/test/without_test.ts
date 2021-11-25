import { assertEquals } from "https://deno.land/std@0.63.0/testing/asserts.ts";
import * as _ from "../src/lodash.ts";

Deno.test("without", () => {
  assertEquals(_.without([2, 1, 2, 3], [1, 3]));

  // assertEquals(_.chunk(['a', 'b', 'c', 'd'], 3), [['a','b'], ['c','d']])
});
