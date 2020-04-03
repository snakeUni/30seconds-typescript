const partition = <T>(arr: T[], fn: (v: T, i: number, arr: Array<any>) => any): T[][] =>
  arr.reduce(
    (acc, val, i, arr) => {
      acc[fn(val, i, arr) ? 0 : 1].push(val)
      return acc
    },
    [[], []] as T[][]
  )

const users = [
  { user: 'barney', age: 36, active: false },
  { user: 'fred', age: 40, active: true },
]
partition(users, o => o.active)
// [[{ 'user': 'fred',    'age': 40, 'active': true }],[{ 'user': 'barney',  'age': 36, 'active': false }]]
