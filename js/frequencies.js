const frequencies = (arr) =>
  arr.reduce((a, v) => {
    a[v] = a[v] ? a[v] + 1 : 1
    return a
  }, {})
