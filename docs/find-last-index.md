Returns the index of the last element for which the provided function returns a truthy value.

Use `Array.prototype.map()` to map each element to an array with its index and value. Use `Array.prototype.filter()` to remove elements for which fn returns falsy values, `Array.prototype.pop()` to get the last one. -1 is the default value when not found.