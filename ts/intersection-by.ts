const intersectionBy = <T, K>(a: T[], b: K[], fn: (v: T | K) => any) => {
  const s = new Set(b.map(fn))
  return [...new Set(a)].filter((x) => s.has(fn(x)))
}

// intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
