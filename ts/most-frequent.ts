/**
 *
 * @param {*} arr
 * @example mostFrequent(['a', 'b', 'a', 'c', 'a', 'a', 'b']); // 'a'
 */
const mostFrequent = <T>(arr: T[]): T =>
  Object.entries(
    arr.reduce((a: any, v: T) => {
      a[v] = a[v] ? a[v] + 1 : 1
      return a
    }, {})
  ).reduce((a: any[], v: any) => (v[1] >= a[1] ? v : a), [null, 0])[0]
