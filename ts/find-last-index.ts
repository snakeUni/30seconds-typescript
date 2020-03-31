const findLastIndex = <T>(arr: T[], fn: (v: T, index: number, arr: T[]) => boolean) =>
  (arr
    .map((val, i) => [i, val])
    .filter(([i, val]) => fn(val as T, i as number, arr))
    .pop() || [-1])[0]

// findLastIndex([1, 2, 3, 4], n => n % 2 === 1); // 2 (index of the value 3)
// findLastIndex([1, 2, 3, 4], n => n === 5); // -1 (default value when not found)
