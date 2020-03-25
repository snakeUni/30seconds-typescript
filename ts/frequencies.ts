const frequencies = <T>(arr: T[]): { [key: string]: number } =>
  arr.reduce((a, v) => {
    a[v] = a[v] ? a[v] + 1 : 1
    return a
  }, {} as any)

// example
// frequencies(['a', 'b', 'a', 'c', 'a', 'a', 'b']); // { a: 4, b: 2, c: 1 }
