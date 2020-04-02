const unionBy = <T>(a: T[], b: T[], fn: (v: T) => any) => {
  const s = new Set(a.map(fn))
  return Array.from(new Set([...a, ...b.filter(x => !s.has(fn(x)))]))
}

// unionBy([2.1], [1.2, 2.3], Math.floor); // [2.1, 1.2]
