const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn))
  return [...new Set(a)].filter((x) => s.has(fn(x)))
}
