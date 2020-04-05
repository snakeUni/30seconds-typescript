Returns `true` if two arrays contain the `same elements regardless of order`, `false` otherwise.

Use a `for...of` loop over a Set created from the values of both arrays. Use `Array.prototype.filter()` to compare the amount of occurrences of each distinct value in both arrays. Return false if the counts do not match for any element, true otherwise.