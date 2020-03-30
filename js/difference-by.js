const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn))
  return a.map(fn).filter(el => !s.has(el))
}
