const arrayToCSV = <T>(arr: T[][], delimiter = ',') =>
  arr.map(v => v.map(x => (isNaN(x as any) ? `"${(x as any).replace(/"/g, '""')}"` : x)).join(delimiter)).join('\n')
