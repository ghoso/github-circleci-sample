import { Calc } from "./Calc.js";

let c = new Calc(200, 100);
test('plus test', () => {
  expect(c.plus()).toBe(300);
});
test('minus test', () => {
  expect(c.minus()).toBe(100);
});
test('multi test', () => {
  expect(c.multi()).toBe(20000);
});
test('div test', () => {
  expect(c.div()).toBe(2);
});