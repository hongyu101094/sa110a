import { expect } from "https://deno.land/x/tdd/mod.ts";
import * as _ from "../src/lodash.ts";

Deno.test("isEmpty", () => {
  var c1 = _.isEmpty(1);
  expect(c1).to.equal(true);
});
