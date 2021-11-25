import { assertEquals } from "https://deno.land/std@0.63.0/testing/asserts.ts";
import * as _ from "../src/lodash.ts";

Deno.test("without", () => {
  assertEquals(_.without([2, 1, 2, 3], 2), [1, 3]);
  assertEquals(_.without([2, 1, 2, 3], 1), [2, 2, 3]);
});
