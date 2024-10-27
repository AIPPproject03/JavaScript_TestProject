import { sum } from "./index.js";
import { strict as assert } from "node:assert";
import { test } from "node:test";

test("Testing (1 + 1 = 2)", () => {
  assert.strictEqual(sum(1, 1), 2);
});

test("Testing (-1 + 1 = 0)", () => {
  assert.strictEqual(sum(-1, 1), 0);
});

test("Testing (0 + 0 = 0)", () => {
  assert.strictEqual(sum(0, 0), 0);
});

test("Testing (2 + -6 = -4)", () => {
  assert.strictEqual(sum(2, -6), -4);
});

test("Testing (150 + 200 = 350)", () => {
  assert.strictEqual(sum(150, 200), 350);
});
