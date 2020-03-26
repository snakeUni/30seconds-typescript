/**
 * 
 * @param arr 
 * @param columns 
 * @param delimiter
 * @example
 * JSONtoCSV([{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }], ['a', 'b']); // 'a,b\n"1","2"\n"3","4"\n"6",""\n"","7"'
JSONtoCSV([{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }], ['a', 'b'], ';'); // 'a;b\n"1";"2"\n"3";"4"\n"6";""\n"";"7"' 
 */
const JSONtoCSV = <T, K = string>(arr: T[], columns: K[], delimiter = ',') =>
  [
    columns.join(delimiter),
    ...arr.map((obj: T) =>
      columns.reduce(
        (acc, key) =>
          `${acc}${!acc.length ? '' : delimiter}"${!(obj as any)[key] ? '' : (obj as any)[key]}"`,
        ''
      )
    ),
  ].join('\n')
