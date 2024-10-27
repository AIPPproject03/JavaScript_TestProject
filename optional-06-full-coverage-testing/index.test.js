import { test } from "node:test";
import { strict as assert } from "node:assert";
import sum from "./index.js";

test("3 and 4 = 7", () => {
  assert.strictEqual(sum(3, 4), 7);
});

test("-1 and 5 = 0", () => {
  assert.strictEqual(sum(-1, 5), 0);
});

test("-1 and -5 = 0", () => {
  assert.strictEqual(sum(-1, -5), 0);
});

test('1 as "string" and 5 = 0', () => {
  assert.strictEqual(sum("1", 5), 0);
});

test('5 and 3 as "string" = 0', () => {
  assert.strictEqual(sum(5, "3"), 0);
});

test("0 and 0 = 0", () => {
  assert.strictEqual(sum(0, 0), 0);
});

test("0 and 5 = 5", () => {
  assert.strictEqual(sum(0, 5), 5);
});

test("5 and 0 = 5", () => {
  assert.strictEqual(sum(5, 0), 5);
});
