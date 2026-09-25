import { test } from "node:test";
import assert from "node:assert/strict";
import { slugify } from "../src/slug.ts";

test("slugify lowercases and hyphenates words", () => {
  assert.equal(slugify("Hello World"), "hello-world");
});

test("slugify drops punctuation and surrounding separators", () => {
  assert.equal(slugify("  Ship it, now!  "), "ship-it-now");
});
