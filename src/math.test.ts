import { describe, it, expect } from 'vitest';
import {
  add,
  subtract,
  multiply,
  divide,
  factorial,
  power,
  average,
  clamp,
  quadratic,
} from './math';

describe('add', () => {
  it(' add two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
  it('handles negative numbers', () => {
    expect(add(-1, -4)).toBe(-5);
  });
});

describe('subtract', () => {
  it(' subtract two numbers ', () => {
    expect(subtract(10, 4)).toBe(6);
  });
});

describe('multiply', () => {
  it('multiplies two numbers', () => {
    expect(multiply(3, 7)).toBe(21);
  });
  it('returns zero when multiplied by zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });
});

describe('divide', () => {
  it('divides two numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });
  it('returns null for division by zero', () => {
    expect(divide(10, 0)).toBeNull();
  });
});

describe('factorial', () => {
  it('computes factorial of 5', () => {
    expect(factorial(5)).toBe(120);
  });
  it('returns 1 for factorial of 0', () => {
    expect(factorial(0)).toBe(1);
  });
  it('returns null for negative input', () => {
    expect(factorial(-3)).toBeNull();
  });
});

describe('power', () => {
  it('returns the base raised to the exponent power', () => {
    expect(power(2, 3)).toBe(8);
  });
  it('returns 1 when the exponent is 0', () => {
    expect(power(5, 0)).toBe(1);
  });
});

describe('average', () => {
  it('returns the arithmetic mean of an array', () => {
    expect(average([2, 4, 6])).toBe(4);
  });
  it('returns null for an empty array', () => {
    expect(average([])).toBeNull();
  });
});

describe('clamp', () => {
  it('returns the value if it is within range', () => {
    expect(clamp(5, 1, 10)).toBe(5);
  });
  it('returns min if value is below range', () => {
    expect(clamp(-3, 0, 100)).toBe(0);
  });
  it('returns max if value is above range', () => {
    expect(clamp(150, 0, 100)).toBe(100);
  });
});

describe('quadratic', () => {
  it('returns real roots for a positive discriminant', () => {
    const roots = quadratic(1, -5, 6); // (x-3)(x-2)
    expect(roots).toContain(3);
    expect(roots).toContain(2);
  });

  it('returns one root for a zero discriminant', () => {
    const roots = quadratic(1, -2, 1);
    expect(roots).toContain(1);
  });

  it('returns null if the discriminant is negative', () => {
    expect(quadratic(1, 0, 1)).toBeNull();
  });
});
