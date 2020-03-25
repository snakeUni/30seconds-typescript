// from 30-seconds
/**
 * @param arr
 * @param func
 * @example remove([1, 2, 3, 4], n => n % 2 === 0); // [2, 4]
 */
const remove = <T>(arr: T[], func: (value: T, index: number, array: T[]) => boolean): T[] =>
  Array.isArray(arr)
    ? arr.filter(func).reduce((acc: T[], val) => {
        arr.splice(arr.indexOf(val), 1)
        return acc.concat(val)
      }, [])
    : []
