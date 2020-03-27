const unzipWith = <T>(arr: T[][], fn: (...arg: T[]) => any) =>
  arr
    .reduce(
      (acc, val) => (val.forEach((v: T, i) => (acc[i] as any).push(v)), acc),
      Array.from({
        length: Math.max(...arr.map((x) => x.length)),
      }).map(() => [])
    )
    .map((val) => fn(...val))
