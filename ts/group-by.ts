const groupBy = <T>(arr: T[], fn: ((v: T) => any) | string) =>
  arr.map(typeof fn === 'function' ? fn : val => (val as any)[fn]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i])
    return acc
  }, {})

// groupBy([6.1, 4.2, 6.3], Math.floor) // {4: [4.2], 6: [6.1, 6.3]}
// groupBy(['one', 'two', 'three'], 'length') // {3: ['one', 'two'], 5: ['three']}
