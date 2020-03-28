Converts a 2D array to a comma-separated values (CSV) string.

Use `Array.prototype.map()` and `Array.prototype.join(delimiter)` to combine individual 1D arrays (rows) into strings. Use `Array.prototype.join('\n')` to combine all rows into a CSV string, separating each row with a newline. Omit the second argument, `delimiter`, to use a default delimiter of `,`.